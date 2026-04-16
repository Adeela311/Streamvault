import { Menu, Search, LogIn, LogOut, X } from 'lucide-react';
import { useFirebase } from './FirebaseProvider';
import { useState } from 'react';

interface NavbarProps {
  onSearch: (query: string) => void;
  onProfileClick: () => void;
}

export const Navbar = ({ onSearch, onProfileClick }: NavbarProps) => {
  const { user, login } = useFirebase();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-3xl shadow-2xl flex justify-between items-center px-6 py-4 transition-all border-b border-white/5">
      <div className="flex items-center gap-4">
        <Menu className="lg:hidden text-on-surface-variant hover:scale-105 transition-transform duration-300 cursor-pointer" size={24} />
        <h1 className="text-2xl font-black text-white tracking-tighter uppercase font-headline">STREAMVAULT</h1>
      </div>
      
      <nav className="hidden lg:flex items-center gap-8">
        {['Home', 'Movies', 'TV Shows', 'My List'].map((item) => (
          <a 
            key={item}
            className={`${item === 'Home' ? 'text-primary' : 'text-on-surface-variant'} font-headline tracking-tighter font-bold uppercase text-sm hover:scale-105 transition-transform duration-300`} 
            href="#"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4 flex-grow md:flex-grow-0 justify-end">
        <div className={`relative flex items-center transition-all duration-300 ${isSearchOpen ? 'w-full md:w-64' : 'w-10'}`}>
          <Search 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className={`text-primary hover:scale-105 transition-transform duration-300 cursor-pointer absolute left-2 z-10`} 
            size={24} 
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); onSearch(e.target.value); }}
            placeholder="Search Vault..."
            className={`w-full bg-surface-container-highest rounded-full py-2 pl-10 pr-4 text-sm outline-none border border-white/10 focus:border-primary transition-all ${isSearchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          />
        </div>
        
        {user ? (
          <div className="flex items-center gap-4 ml-2">
            <button 
              onClick={onProfileClick}
              className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary ring-2 ring-primary/20 flex-none transition-transform active:scale-90"
            >
              <img 
                className="w-full h-full object-cover" 
                src={user.photoURL || `https://picsum.photos/seed/${user.uid}/100/100`} 
                alt="User profile"
                referrerPolicy="no-referrer"
              />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <button 
              onClick={login}
              className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors px-4"
            >
              Sign In
            </button>
            <button 
              onClick={login}
              className="px-6 py-2.5 bg-primary text-white rounded-full font-black font-headline uppercase tracking-tighter text-sm hover:brightness-110 shadow-lg shadow-primary/20 transition-all active:scale-95"
            >
              Join Now
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
