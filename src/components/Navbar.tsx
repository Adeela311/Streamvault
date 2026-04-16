import { Menu, Search, LogIn, LogOut } from 'lucide-react';
import { useFirebase } from './FirebaseProvider';

export const Navbar = () => {
  const { user, login, logout } = useFirebase();

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-3xl shadow-2xl flex justify-between items-center px-6 py-4 transition-all">
      <div className="flex items-center gap-4">
        <Menu className="text-on-surface-variant hover:scale-105 transition-transform duration-300 cursor-pointer" size={24} />
        <h1 className="text-2xl font-black text-primary-container tracking-tighter uppercase font-headline">STREAMVAULT</h1>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        {['Home', 'Movies', 'TV Shows', 'My List'].map((item) => (
          <a 
            key={item}
            className={`${item === 'Home' ? 'text-primary-container' : 'text-on-surface-variant'} font-headline tracking-tighter font-bold uppercase text-sm hover:scale-105 transition-transform duration-300`} 
            href="#"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Search className="text-primary hover:scale-105 transition-transform duration-300 cursor-pointer" size={24} />
        
        {user ? (
          <div className="flex items-center gap-4">
            <button onClick={logout} className="text-on-surface-variant hover:text-primary transition-colors">
              <LogOut size={20} />
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-surface-container-highest">
              <img 
                className="w-full h-full object-cover" 
                src={user.photoURL || `https://picsum.photos/seed/${user.uid}/100/100`} 
                alt="User profile"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        ) : (
          <button 
            onClick={login}
            className="flex items-center gap-2 px-4 py-2 bg-primary-container text-white rounded-lg font-bold text-sm hover:brightness-110 transition-all"
          >
            <LogIn size={18} />
            SIGN IN
          </button>
        )}
      </div>
    </header>
  );
};
