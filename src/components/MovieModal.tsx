import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Plus, ThumbsUp, Sparkles, Loader2 } from 'lucide-react';
import { RatingSystem } from './RatingSystem';
import { useState, useEffect } from 'react';
import { getMovieRecommendation } from '../services/aiService';

interface MovieModalProps {
  movie: any | null;
  onClose: () => void;
}

export const MovieModal = ({ movie, onClose }: MovieModalProps) => {
  const [aiRec, setAiRec] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  useEffect(() => {
    if (movie) {
      setAiRec(null);
      setIsAiLoading(true);
      getMovieRecommendation(movie.title, movie.description || "")
        .then(rec => {
          setAiRec(rec);
          setIsAiLoading(false);
        });
    }
  }, [movie]);

  if (!movie) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-surface-container rounded-3xl overflow-hidden shadow-2xl my-auto"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="aspect-video relative">
            <img 
              className="w-full h-full object-cover" 
              src={movie.banner_url || movie.poster_url} 
              alt={movie.title}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <h2 className="text-3xl md:text-5xl font-black font-headline uppercase mb-4 tracking-tighter">{movie.title}</h2>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded-lg font-bold hover:bg-white/90 transition-all">
                    <Play size={20} fill="currentColor" /> Play
                  </button>
                  <button className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all border border-white/10">
                    <Plus size={20} />
                  </button>
                  <button className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all border border-white/10">
                    <ThumbsUp size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 grid md:grid-cols-[1fr_300px] gap-12">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3 text-sm font-bold">
                  <span className="text-green-500">98% Match</span>
                  <span className="text-on-surface-variant/60">{movie.release_year || 2024}</span>
                  <span className="px-1.5 py-0.5 border border-white/30 rounded text-xs uppercase">{movie.age_rating || 'PG-13'}</span>
                  <span className="text-on-surface-variant/60">{movie.duration_minutes ? `${movie.duration_minutes}m` : 'Limited Series'}</span>
                  <span className="px-1.5 py-0.5 border border-white/30 rounded text-[10px] uppercase font-black tracking-widest leading-none">HD</span>
                </div>
                
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  {movie.description || "In a city where secrets are traded like currency, a rogue detective uncovers a conspiracy that threatens to erase the identity of every citizen."}
                </p>

                {/* AI Recommendation Section */}
                <div className="bg-secondary/10 border border-secondary/20 p-6 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Sparkles size={64} className="text-secondary" />
                  </div>
                  <div className="flex items-center gap-2 text-secondary mb-3">
                    <Sparkles size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">AI VAULT INSIGHT</span>
                  </div>
                  {isAiLoading ? (
                    <div className="flex items-center gap-3 text-on-surface-variant italic text-sm">
                      <Loader2 size={16} className="animate-spin text-secondary" />
                      Consulting the AI Vault...
                    </div>
                  ) : aiRec ? (
                    <p className="text-sm font-bold italic leading-relaxed text-on-surface-variant">
                      "{aiRec}"
                    </p>
                  ) : (
                    <p className="text-sm text-on-surface-variant opacity-50 italic">AI assistant is currently cooling down.</p>
                  )}
                </div>
              </div>

              {/* Rating System Integration */}
              <div className="pt-8 border-t border-white/5">
                <h3 className="text-xl font-black font-headline uppercase tracking-tighter mb-8 italic">Community Reviews</h3>
                <RatingSystem contentId={String(movie.id)} />
              </div>
            </div>

            <div className="space-y-6 text-xs h-fit sticky top-8">
              <div>
                <span className="text-on-surface-variant block mb-1">Genres:</span>
                <p className="font-bold">{movie.genres?.join(', ') || 'Sci-Fi, Action, Thriller'}</p>
              </div>
              <div>
                <span className="text-on-surface-variant block mb-1">Language:</span>
                <p className="font-bold">{movie.language || 'English'}</p>
              </div>
              <div>
                <span className="text-on-surface-variant block mb-1">Director:</span>
                <p className="font-bold">Christopher Nolan</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
