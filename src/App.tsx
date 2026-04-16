/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MovieRow } from './components/MovieRow';
import { BentoGrid } from './components/BentoGrid';
import { BottomNav } from './components/BottomNav';
import { ThemeCustomizer } from './components/ThemeCustomizer';
import { MovieModal } from './components/MovieModal';
import { ProfileOverlay } from './components/ProfileOverlay';
import { MOCK_CONTENT, MOVIES } from './constants';
import { useFirebase } from './components/FirebaseProvider';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Loader2 } from 'lucide-react';

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { loading } = useFirebase();

  const trendingMovies = MOCK_CONTENT.filter(item => 
    item && item.id && item.id.toString().startsWith('trending') && 
    ((item.title || '').toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === '')
  );
  
  const databaseMovies = MOVIES.filter(item => 
    item && item.title && (
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.genres?.some(g => g && g.toLowerCase().includes(searchQuery.toLowerCase())) ||
      searchQuery === ''
    )
  );

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-surface">
        <Loader2 className="animate-spin text-primary" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface selection:bg-primary-container selection:text-white pb-20 md:pb-0 overflow-x-hidden">
      <Navbar 
        onSearch={setSearchQuery} 
        onProfileClick={() => setIsProfileOpen(true)}
      />

      <main className="relative">
        <AnimatePresence mode="wait">
          {!searchQuery ? (
            <motion.div
              key="home-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-16"
            >
              <Hero onMoreInfo={setSelectedMovie} />

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="relative md:-mt-32 px-6 space-y-16 pb-12"
              >
                {/* Trending Row */}
                <MovieRow title="Trending Now" movies={trendingMovies} onMovieClick={setSelectedMovie} />

                {/* User's Database Row */}
                <MovieRow title="Top Picks for You" movies={databaseMovies} onMovieClick={setSelectedMovie} />

                {/* New Releases Bento */}
                <BentoGrid onMovieClick={setSelectedMovie} />
                
                {/* Another row from DB */}
                <MovieRow title="Critically Acclaimed" movies={[...databaseMovies].reverse()} onMovieClick={setSelectedMovie} />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="search-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="pt-32 px-6 min-h-screen"
            >
              <h2 className="text-3xl font-black font-headline uppercase mb-8 tracking-tighter">
                Results for: <span className="text-primary">{searchQuery}</span>
              </h2>
              {[...trendingMovies, ...databaseMovies].length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {[...trendingMovies, ...databaseMovies].map((movie) => (
                    <div 
                      key={movie.id}
                      onClick={() => setSelectedMovie(movie)}
                      className="aspect-[2/3] relative rounded-xl overflow-hidden cursor-pointer group hover:scale-105 transition-all duration-300 shadow-lg border border-white/5"
                    >
                      <img 
                        src={movie.poster_url} 
                        alt={movie.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                        <p className="font-bold text-sm leading-tight mb-2 tracking-tight text-white">{movie.title}</p>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-white/70">
                          <span>{movie.release_year}</span>
                          <span className="px-1 border border-white/20 rounded uppercase">{movie.age_rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-[50vh] flex flex-col items-center justify-center text-on-surface-variant opacity-50 italic">
                  <Search size={48} className="mb-4 text-primary" />
                  <p>No content found matching your search.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <BottomNav />
      <ThemeCustomizer />
      <ProfileOverlay isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
      
      <AnimatePresence>
        {selectedMovie && (
          <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
