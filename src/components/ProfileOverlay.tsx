import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User as UserIcon, Mail, Shield, Calendar, Settings, LogOut, Sparkles } from 'lucide-react';
import { useFirebase } from './FirebaseProvider';
import { SubscriptionPlans } from './SubscriptionPlans';

interface ProfileOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileOverlay: React.FC<ProfileOverlayProps> = ({ isOpen, onClose }) => {
  const { user, profile, logout, updatePlan } = useFirebase();

  if (!isOpen || !user) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/95 backdrop-blur-md"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-surface-container rounded-[40px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-8 border-b border-white/5 flex justify-between items-center bg-surface-container-low">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                <Settings size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-black font-headline uppercase tracking-tighter">Account Settings</h2>
                <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Manage your profile & subscription</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-3 hover:bg-white/5 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-8 space-y-12">
            {/* User Info Card */}
            <div className="grid md:grid-cols-[300px_1fr] gap-8">
              <div className="space-y-6">
                <div className="aspect-square rounded-[32px] overflow-hidden border-4 border-white/5 shadow-2xl">
                  <img 
                    src={user.photoURL || `https://picsum.photos/seed/${user.uid}/400/400`} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-surface-container-highest border border-white/5 flex items-center gap-3">
                    <UserIcon size={18} className="text-on-surface-variant" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Full Name</p>
                      <p className="text-sm font-bold">{user.displayName}</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-surface-container-highest border border-white/5 flex items-center gap-3">
                    <Mail size={18} className="text-on-surface-variant" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Email Address</p>
                      <p className="text-sm font-bold">{user.email}</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-surface-container-highest border border-white/5 flex items-center gap-3">
                    <Shield size={18} className="text-on-surface-variant" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Current Tier</p>
                      <p className="text-sm font-bold uppercase text-primary tracking-tight">{profile?.plan_type || 'Free'}</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => { logout(); onClose(); }}
                  className="w-full py-4 rounded-2xl bg-red-500/10 text-red-500 font-black font-headline uppercase tracking-tighter hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <LogOut size={20} /> Sign Out
                </button>
              </div>

              {/* Plans Section */}
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-secondary">
                    <Sparkles size={20} />
                    <h3 className="text-xl font-black font-headline uppercase tracking-tighter italic">Upgrade Your Experience</h3>
                  </div>
                  <p className="text-on-surface-variant text-sm max-w-xl">
                    Unlock 4K streaming, ad-free viewing, and our exclusive AI Movie Assistant with a premium subscription.
                  </p>
                </div>
                
                <SubscriptionPlans 
                  currentPlan={profile?.plan_type} 
                  onSelect={updatePlan} 
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
