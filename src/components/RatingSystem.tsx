import React, { useState, useEffect } from 'react';
import { Star, Send, User as UserIcon, Loader2 } from 'lucide-react';
import { useFirebase } from './FirebaseProvider';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, query, orderBy, onSnapshot, setDoc, doc, serverTimestamp, deleteDoc } from 'firebase/firestore';
import { motion, AnimatePresence } from 'motion/react';

interface Rating {
  userId: string;
  userName: string;
  userPhoto: string;
  score: number;
  review: string;
  created_at: any;
}

interface RatingSystemProps {
  contentId: string;
}

export const RatingSystem: React.FC<RatingSystemProps> = ({ contentId }) => {
  const { user } = useFirebase();
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [newScore, setNewScore] = useState(5);
  const [newReview, setNewReview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoverScore, setHoverScore] = useState(0);

  useEffect(() => {
    const q = query(
      collection(db, 'content', contentId, 'ratings'),
      orderBy('created_at', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedRatings = snapshot.docs.map(doc => doc.data() as Rating);
      setRatings(fetchedRatings);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, `content/${contentId}/ratings`);
    });

    return () => unsubscribe();
  }, [contentId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsSubmitting(true);
    const ratingPath = `content/${contentId}/ratings/${user.uid}`;
    
    try {
      await setDoc(doc(db, ratingPath), {
        userId: user.uid,
        userName: user.displayName || 'Anonymous User',
        userPhoto: user.photoURL || '',
        score: newScore,
        review: newReview.trim(),
        created_at: serverTimestamp()
      });
      setNewReview('');
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, ratingPath);
    } finally {
      setIsSubmitting(false);
    }
  };

  const userRating = ratings.find(r => r.userId === user?.uid);

  return (
    <div className="space-y-8">
      {/* Rating Stats */}
      <div className="flex items-center gap-6 p-6 rounded-2xl bg-surface-container-low border border-white/5">
        <div className="text-center space-y-1">
          <div className="text-4xl font-black font-headline text-primary">
            {ratings.length > 0 
              ? (ratings.reduce((acc, curr) => acc + curr.score, 0) / ratings.length).toFixed(1)
              : '0.0'}
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Avg Rating</p>
        </div>
        <div className="h-10 w-px bg-white/10" />
        <div>
          <div className="text-xl font-bold font-headline">{ratings.length}</div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Verified Reviews</p>
        </div>
      </div>

      {/* Write a Review */}
      {user && (
        <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-2xl bg-surface-container border border-white/5">
          <h4 className="text-sm font-bold uppercase tracking-tighter">
            {userRating ? 'Update your review' : 'Write a review'}
          </h4>
          
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onMouseEnter={() => setHoverScore(star)}
                onMouseLeave={() => setHoverScore(0)}
                onClick={() => setNewScore(star)}
                className="transition-transform active:scale-90"
              >
                <Star 
                  size={24} 
                  fill={(hoverScore || newScore) >= star ? 'currentColor' : 'none'}
                  className={(hoverScore || newScore) >= star ? 'text-primary' : 'text-on-surface-variant opacity-30'}
                />
              </button>
            ))}
          </div>

          <div className="relative">
            <textarea
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Share your thoughts about this..."
              className="w-full bg-surface-container-lowest border border-white/10 rounded-xl p-4 text-sm focus:border-primary outline-none transition-all min-h-[100px] resize-none"
            />
            <button
              disabled={isSubmitting || !newReview.trim()}
              className="absolute bottom-4 right-4 p-2 bg-primary text-white rounded-lg disabled:opacity-50 disabled:scale-100 hover:scale-110 active:scale-90 transition-all flex items-center gap-2"
            >
              {isSubmitting ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
            </button>
          </div>
        </form>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        <h4 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Latest Reviews</h4>
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {ratings.map((rating) => (
              <motion.div
                key={rating.userId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4 p-4 rounded-xl bg-surface-container-low border border-white/5"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden flex-none bg-surface-container-highest">
                  {rating.userPhoto 
                    ? <img src={rating.userPhoto} alt={rating.userName} className="w-full h-full object-cover" />
                    : <div className="w-full h-full flex items-center justify-center"><UserIcon size={20} className="text-on-surface-variant" /></div>
                  }
                </div>
                <div className="space-y-2 flex-grow">
                  <div className="flex justify-between items-center">
                    <h5 className="font-bold text-sm tracking-tight">{rating.userName}</h5>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star 
                          key={s} 
                          size={12} 
                          fill={rating.score >= s ? 'currentColor' : 'none'}
                          className={rating.score >= s ? 'text-primary' : 'text-on-surface-variant opacity-20'}
                        />
                      ))}
                    </div>
                  </div>
                  {rating.review && (
                    <p className="text-sm text-on-surface-variant leading-relaxed italic">
                      "{rating.review}"
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {ratings.length === 0 && (
            <div className="text-center py-12 text-on-surface-variant opacity-50">
              <p className="text-sm">No reviews yet. Be the first to share your thoughts!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
