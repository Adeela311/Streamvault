import { MOCK_CONTENT } from '../constants';
import { motion } from 'motion/react';

interface BentoGridProps {
  onMovieClick: (movie: any) => void;
}

export const BentoGrid = ({ onMovieClick }: BentoGridProps) => {
  const bentoItems = MOCK_CONTENT.filter(item => item.id.toString().startsWith('bento'));

  return (
    <section className="px-6 md:px-16 mb-20">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h3 className="text-xl md:text-2xl font-bold font-headline tracking-tight text-on-surface">New Releases</h3>
          <p className="text-on-surface-variant text-sm">Freshly curated for your weekend</p>
        </div>
        <button className="text-primary text-sm font-bold tracking-widest uppercase hover:underline">View All</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {/* Large Card */}
        <div 
          onClick={() => onMovieClick(bentoItems[0])}
          className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer bg-surface-container h-[400px] md:h-auto"
        >
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            src={bentoItems[0].poster_url} 
            alt={bentoItems[0].title}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 p-6 md:p-8">
            <span className="bg-primary-container px-3 py-1 rounded-full text-[10px] font-black text-white uppercase mb-4 inline-block">Premiere</span>
            <h4 className="text-2xl md:text-4xl font-black font-headline text-white mb-2 leading-none uppercase">{bentoItems[0].title}</h4>
            <p className="text-on-surface-variant text-xs md:text-sm max-w-sm line-clamp-2">{bentoItems[0].description}</p>
          </div>
        </div>

        {/* Small Cards */}
        {bentoItems.slice(1).map((item, i) => (
          <div 
            key={item.id} 
            onClick={() => onMovieClick(item)}
            className="relative rounded-2xl overflow-hidden group cursor-pointer bg-surface-container h-48 md:h-64"
          >
            <img 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              src={item.poster_url} 
              alt={item.title}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 p-4">
              <h4 className="text-white font-bold text-sm uppercase">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
