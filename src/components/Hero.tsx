import { Play, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_CONTENT } from '../constants';

interface HeroProps {
  onMoreInfo: (movie: any) => void;
}

export const Hero = ({ onMoreInfo }: HeroProps) => {
  const heroData = MOCK_CONTENT[0];

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img 
          className="w-full h-full object-cover object-center" 
          src={heroData.banner_url} 
          alt={heroData.title}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 scrim-radial"></div>
        <div className="absolute inset-0 scrim-bottom"></div>
      </div>

      <div className="relative h-full flex flex-col justify-center px-6 md:px-16 max-w-4xl space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <span className="px-2 py-0.5 bg-surface-container-highest text-[10px] font-bold tracking-widest uppercase rounded">4K ULTRA HD</span>
          <span className="text-primary text-xs font-bold tracking-widest uppercase">TRENDING #1</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black font-headline tracking-tighter leading-none text-white drop-shadow-2xl"
        >
          {heroData.title.split(' ').map((word, i) => (
            <span key={i} className="block">{word}</span>
          ))}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed font-medium"
        >
          {heroData.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center gap-4 pt-4"
        >
          <button className="primary-gradient flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold transition-all hover:brightness-110 active:scale-95">
            <Play size={20} fill="currentColor" />
            WATCH NOW
          </button>
          <button 
            onClick={() => onMoreInfo(heroData)}
            className="bg-white/10 backdrop-blur-xl border border-white/5 flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold transition-all hover:bg-white/20 active:scale-95"
          >
            <Info size={20} />
            MORE INFO
          </button>
        </motion.div>
      </div>
    </section>
  );
};
