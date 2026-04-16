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
import { MOCK_CONTENT, MOVIES } from './constants';
import { useFirebase } from './components/FirebaseProvider';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState<any | null>(null);
  const { loading } = useFirebase();
  const trendingMovies = MOCK_CONTENT.filter(item => item.id.toString().startsWith('trending'));
  const databaseMovies = MOVIES;

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-surface">
        <Loader2 className="animate-spin text-primary" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface selection:bg-primary-container selection:text-white pb-20 md:pb-0">
      <Navbar />

      <main className="relative">
        <Hero onMoreInfo={setSelectedMovie} />

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative -mt-32 space-y-16 pb-12"
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
      </main>

      <BottomNav />
      <ThemeCustomizer />
      
      <AnimatePresence>
        {selectedMovie && (
          <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
