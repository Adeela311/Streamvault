import { Home, Clapperboard, Tv, PlusCircle } from 'lucide-react';

export const BottomNav = () => {
  return (
    <footer className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface/70 backdrop-blur-3xl rounded-t-3xl shadow-[0_-10px_40px_-5px_rgba(0,0,0,0.6)] flex justify-around items-center px-4 py-3 pb-safe">
      <div className="flex flex-col items-center justify-center bg-primary-container text-white rounded-2xl p-2 scale-110 transition-all duration-200">
        <Home size={20} fill="currentColor" />
        <span className="font-body text-[10px] font-medium tracking-wide uppercase mt-1">Home</span>
      </div>
      <div className="flex flex-col items-center justify-center text-on-surface-variant p-2 opacity-70 hover:opacity-100 transition-opacity">
        <Clapperboard size={20} />
        <span className="font-body text-[10px] font-medium tracking-wide uppercase mt-1">Movies</span>
      </div>
      <div className="flex flex-col items-center justify-center text-on-surface-variant p-2 opacity-70 hover:opacity-100 transition-opacity">
        <Tv size={20} />
        <span className="font-body text-[10px] font-medium tracking-wide uppercase mt-1">TV Shows</span>
      </div>
      <div className="flex flex-col items-center justify-center text-on-surface-variant p-2 opacity-70 hover:opacity-100 transition-opacity">
        <PlusCircle size={20} />
        <span className="font-body text-[10px] font-medium tracking-wide uppercase mt-1">My List</span>
      </div>
    </footer>
  );
};
