import { useState, useEffect } from 'react';
import { Settings, X, Palette, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = [
  { name: 'Red Premiere', primary: '#e50914', accent: '#ffb4aa' },
  { name: 'Neon Blue', primary: '#0072d7', accent: '#a7c8ff' },
  { name: 'Eclipse Gold', primary: '#d4af37', accent: '#f8e8a6' },
  { name: 'Toxic Green', primary: '#00ff00', accent: '#b4ffb4' },
  { name: 'Cyber Purple', primary: '#9333ea', accent: '#d8b4fe' },
];

export const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeColor, setActiveColor] = useState(COLORS[0].primary);

  const applyTheme = (primary: string, accent: string) => {
    document.documentElement.style.setProperty('--theme-primary', primary);
    document.documentElement.style.setProperty('--theme-accent', accent);
    setActiveColor(primary);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed right-6 bottom-24 md:bottom-6 z-[60] p-4 bg-surface-container-highest rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all border border-white/10"
      >
        <Settings className="text-primary" size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed inset-y-0 right-0 w-80 z-[70] bg-surface-container-high backdrop-blur-3xl border-l border-white/10 p-8 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <Palette className="text-primary" size={20} />
                <h3 className="font-headline font-bold text-lg uppercase tracking-tight">Customize UI</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block mb-4">
                  Theme Palette
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {COLORS.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => applyTheme(color.primary, color.accent)}
                      className="flex items-center justify-between p-3 rounded-xl bg-surface-container hover:bg-surface-container-highest transition-colors border border-white/5 group"
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: color.primary }}
                        />
                        <span className="text-sm font-medium">{color.name}</span>
                      </div>
                      {activeColor === color.primary && (
                        <Check size={16} className="text-primary" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-primary-container/10 border border-primary-container/20">
                <p className="text-xs leading-relaxed text-on-surface-variant italic">
                  "The UI should recede to let the content shine. Choose a palette that fits your mood."
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
