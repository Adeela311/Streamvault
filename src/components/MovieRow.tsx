import { motion } from 'motion/react';
import React from 'react';

interface MovieCardProps {
  title: string;
  poster: string;
  metadata: string;
}

export const MovieCard: React.FC<MovieCardProps & { onClick?: () => void }> = ({ title, poster, metadata, onClick }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex-none w-40 md:w-64 group cursor-pointer"
    >
      <div className="aspect-[2/3] rounded-xl overflow-hidden bg-surface-container-low transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(229,9,20,0.3)]">
        <img 
          className="w-full h-full object-cover" 
          src={poster} 
          alt={title}
          referrerPolicy="no-referrer"
        />
      </div>
      <h4 className="mt-3 font-bold text-sm md:text-base group-hover:text-primary transition-colors">{title}</h4>
      <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-semibold">{metadata}</p>
    </motion.div>
  );
};

interface MovieRowProps {
  title: string;
  movies: any[];
  onMovieClick: (movie: any) => void;
}

export const MovieRow: React.FC<MovieRowProps> = ({ title, movies, onMovieClick }) => {
  return (
    <section className="pl-6 md:pl-16">
      <h3 className="text-xl md:text-2xl font-bold font-headline tracking-tight mb-6 text-on-surface border-l-4 border-primary-container pl-4">
        {title}
      </h3>
      <div className="flex gap-4 overflow-x-auto pb-8 pr-16 row-fade-edge">
        {movies.map((movie, index) => (
          <MovieCard 
            key={movie.id || index}
            title={movie.title}
            poster={movie.poster_url || movie.banner_url}
            metadata={`${movie.genres?.[0] || 'Genre'} • ${movie.release_year || '2024'}`}
            onClick={() => onMovieClick(movie)}
          />
        ))}
      </div>
    </section>
  );
};
