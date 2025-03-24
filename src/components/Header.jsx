import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <svg height="24" width="170" fill="none" viewBox="0 0 170 24" xmlns="http://www.w3.org/2000/svg" className="h-6" focusable="false" role="img" aria-label="lululemon logo">
              <path d="M36 .647h4.57v22.821H36V.648Zm22.158 22.821h-4.57v-2.224c-1.002 1.47-2.818 2.472-5.008 2.472-3.57 0-5.98-2.316-5.98-5.884V7.22h4.601v9.422c0 1.786 1.097 3.005 2.818 3.005 2.316 0 3.569-1.908 3.569-5.29V7.221h4.57v16.247ZM60.496.647h4.57v22.821h-4.57V.648Zm22.351 22.821h-4.57v-2.224c-1.002 1.47-2.818 2.472-5.008 2.472-3.569 0-5.98-2.316-5.98-5.884V7.22h4.601v9.422c0 1.786 1.097 3.005 2.819 3.005 2.315 0 3.568-1.908 3.568-5.29V7.221h4.57v16.247ZM85.01.647h4.57v22.821h-4.57V.648Zm17.312 12.614c-.125-1.687-1.253-2.879-3.222-2.879-1.725 0-2.913 1.002-3.351 2.88h6.573ZM99.1 6.97c5.694 0 8.17 4.288 8.17 8.047 0 .75-.065 1.531-.065 1.531H95.654c.377 2.16 1.786 3.352 3.884 3.352 1.565 0 2.723-.69 3.066-1.848h4.57c-.502 3.569-3.568 5.664-7.795 5.664-5.538 0-8.262-4.32-8.262-8.387 0-4.037 2.442-8.36 7.983-8.36Zm9.791.25h4.571v2.255c.937-1.504 2.471-2.505 4.6-2.505 2.567 0 4.163 1.035 4.978 2.913.846-1.535 2.784-2.913 5.416-2.913 3.535 0 5.854 2.319 5.854 5.45v11.048h-4.605v-9.704c0-1.817-1.001-2.944-2.689-2.944-2.003 0-3.13 1.69-3.13 4.353v8.295h-4.571v-9.704c0-1.817-1.001-2.944-2.662-2.944-2.033 0-3.191 1.721-3.191 4.353v8.295h-4.571V7.221Zm39.165 8.11c0-2.632-1.566-4.446-3.79-4.446-2.315 0-3.786 1.848-3.786 4.445 0 2.628 1.471 4.475 3.786 4.475 2.255 0 3.79-1.847 3.79-4.475Zm-12.21 0c0-4.792 3.507-8.36 8.42-8.36 4.883 0 8.452 3.538 8.452 8.36 0 4.851-3.569 8.386-8.452 8.386-4.913 0-8.42-3.565-8.42-8.387Zm18.567-8.11h4.57v2.225c1.002-1.474 2.819-2.475 5.009-2.475 3.568 0 5.979 2.319 5.979 5.887v10.611h-4.601v-9.422c0-1.786-1.096-3.005-2.818-3.005-2.315 0-3.569 1.908-3.569 5.29v7.137h-4.57V7.221ZM16.693 19.733a3.953 3.953 0 0 1-3.946-3.96c0-.78.283-1.47.55-2.186.19-.507.38-1.014.566-1.524.444-1.2.867-2.426 1.064-3.693.156-1.007.136-2.23-.627-3-.583-.59-1.487-.72-2.297-.727-.81.004-1.713.137-2.296.727-.764.77-.78 1.993-.627 3 .197 1.267.62 2.497 1.063 3.693.187.51.377 1.017.567 1.524.267.716.55 1.406.55 2.186a3.953 3.953 0 0 1-3.947 3.96 3.95 3.95 0 0 1-3.663-2.486 2.575 2.575 0 0 0 3.77-.307c.553-.7.67-1.657.433-2.507-.26-.93-.82-1.683-1.27-2.546-1.463-2.5-1.403-4.37-1.403-4.37a5.403 5.403 0 0 1 .06-.807c.023-.143.053-.287.09-.427.037-.133.08-.263.13-.393a3.343 3.343 0 0 1 .603-.997 3.31 3.31 0 0 1 .27-.273 4.166 4.166 0 0 1 .63-.467c.117-.07.237-.133.36-.193a6.135 6.135 0 0 1 .8-.317 6.5 6.5 0 0 1 .437-.126c.153-.04.307-.074.46-.107.16-.033.32-.06.48-.087a13.62 13.62 0 0 1 1.02-.117c.18-.013.357-.023.537-.033.183-.01.37-.013.553-.016.22-.004.44-.004.66-.004.187.004.37.007.557.014.18.006.36.016.54.03.173.013.35.026.523.046.17.017.337.037.503.064a10.096 10.096 0 0 1 .95.18c.147.036.297.076.44.12.14.043.28.09.417.143a5.779 5.779 0 0 1 .76.35c.117.067.227.137.337.213.106.074.21.154.306.24a3.515 3.515 0 0 1 .52.56 3.515 3.515 0 0 1 .627 1.477 4.953 4.953 0 0 1 .08.933s.06 1.87-1.403 4.37c-.45.864-1.014 1.617-1.27 2.547-.237.85-.117 1.807.436 2.507a2.575 2.575 0 0 0 3.77.306 3.973 3.973 0 0 1-3.67 2.48ZM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Z" fill="#140F0F"></path>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/women" 
              className={`text-sm font-bold transition-colors ${
                location.pathname === '/women' 
                  ? 'text-red-600 border-b-2 border-red-600' 
                  : 'hover:text-red-600'
              }`}
            >
              Women
            </Link>
            <Link 
              to="/men" 
              className={`text-sm font-bold transition-colors ${
                location.pathname === '/men' 
                  ? 'text-red-600 border-b-2 border-red-600' 
                  : 'hover:text-red-600'
              }`}
            >
              Men
            </Link>
            <Link 
              to="/accessories" 
              className={`text-sm font-bold transition-colors ${
                location.pathname === '/accessories' 
                  ? 'text-red-600 border-b-2 border-red-600' 
                  : 'hover:text-red-600'
              }`}
            >
              Accessories
            </Link>
            <Link 
              to="/shoes" 
              className={`text-sm font-bold transition-colors ${
                location.pathname === '/shoes' 
                  ? 'text-red-600 border-b-2 border-red-600' 
                  : 'hover:text-red-600'
              }`}
            >
              Shoes
            </Link>
            <Link 
              to="/studio" 
              className={`text-sm font-bold transition-colors ${
                location.pathname === '/studio' 
                  ? 'text-red-600 border-b-2 border-red-600' 
                  : 'hover:text-red-600'
              }`}
            >
              Studio
            </Link>
            <Link 
              to="/sale" 
              className={`text-sm font-bold transition-colors ${
                location.pathname === '/sale' 
                  ? 'text-red-600 border-b-2 border-red-600' 
                  : 'hover:text-red-600'
              }`}
            >
              Sale
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* User actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </button>
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/women"
              className={`block px-3 py-2 text-base font-bold ${
                location.pathname === '/women' ? 'text-red-600' : 'hover:text-red-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Women
            </Link>
            <Link
              to="/men"
              className={`block px-3 py-2 text-base font-bold ${
                location.pathname === '/men' ? 'text-red-600' : 'hover:text-red-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Men
            </Link>
            <Link
              to="/accessories"
              className={`block px-3 py-2 text-base font-bold ${
                location.pathname === '/accessories' ? 'text-red-600' : 'hover:text-red-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Accessories
            </Link>
            <Link
              to="/shoes"
              className={`block px-3 py-2 text-base font-bold ${
                location.pathname === '/shoes' ? 'text-red-600' : 'hover:text-red-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Shoes
            </Link>
            <Link
              to="/studio"
              className={`block px-3 py-2 text-base font-bold ${
                location.pathname === '/studio' ? 'text-red-600' : 'hover:text-red-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Studio
            </Link>
            <Link
              to="/sale"
              className={`block px-3 py-2 text-base font-bold ${
                location.pathname === '/sale' ? 'text-red-600' : 'hover:text-red-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sale
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 