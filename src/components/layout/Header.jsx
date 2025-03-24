import { useState } from 'react';
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi';
import { Navbar } from './Navbar';

export function Header() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {showAnnouncement && (
        <div className="bg-red-600 text-white text-center py-2 text-sm">
          <div className="container-custom flex justify-between items-center">
            <span>Free shipping. Free returns.</span>
            <button 
              onClick={() => setShowAnnouncement(false)}
              className="text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">lululemon</a>
          </div>
          
          <div className="hidden lg:block">
            <Navbar />
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="p-1">
              <FiSearch className="w-5 h-5" />
            </button>
            <button className="p-1">
              <FiUser className="w-5 h-5" />
            </button>
            <button className="p-1">
              <FiHeart className="w-5 h-5" />
            </button>
            <button className="p-1 relative">
              <FiShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
        
        <div className="lg:hidden mt-4">
          <button className="w-full text-left border-t border-b py-2">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
