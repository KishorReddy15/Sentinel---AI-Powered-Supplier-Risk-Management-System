
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { 
    name: 'Solutions', 
    path: '#',
    submenu: [
      { name: 'Supplier Risk', path: '/supplier-risk' },
      { name: 'Logistics', path: '/logistics' },
      { name: 'Scenario Planning', path: '/scenario-planning' },
      { name: 'Intelligent Alerts', path: '/alerts' },
    ]
  },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  }, [location.pathname]);

  const toggleSubmenu = (name: string) => {
    if (activeSubmenu === name) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(name);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-sentinel-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-xl">S</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-xl font-semibold">Sentinel</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <button
                    onClick={() => toggleSubmenu(link.name)}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium flex items-center",
                      activeSubmenu === link.name
                        ? "text-sentinel-600"
                        : "text-gray-700 hover:text-sentinel-600"
                    )}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link 
                    to={link.path}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      location.pathname === link.path
                        ? "text-sentinel-600"
                        : "text-gray-700 hover:text-sentinel-600"
                    )}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Submenu */}
                {link.submenu && (
                  <AnimatePresence>
                    {activeSubmenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                      >
                        <div className="py-1">
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.name}
                              to={sublink.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-sentinel-50 hover:text-sentinel-600"
                            >
                              {sublink.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard">
                  <Button variant="outline" size="sm">Dashboard</Button>
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => logout()}
                >
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth?mode=login">
                  <Button variant="ghost" size="sm">Log in</Button>
                </Link>
                <Link to="/auth?mode=signup">
                  <Button size="sm">Sign up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-sentinel-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t mt-3"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(link.name)}
                        className="w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between text-gray-700"
                      >
                        {link.name}
                        <ChevronDown className={cn(
                          "ml-1 h-4 w-4 transition-transform",
                          activeSubmenu === link.name && "transform rotate-180"
                        )} />
                      </button>
                      
                      <AnimatePresence>
                        {activeSubmenu === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-6 space-y-1"
                          >
                            {link.submenu.map((sublink) => (
                              <Link
                                key={sublink.name}
                                to={sublink.path}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sentinel-600 hover:bg-sentinel-50"
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={cn(
                        "block px-3 py-2 rounded-md text-base font-medium",
                        location.pathname === link.path
                          ? "text-sentinel-600 bg-sentinel-50"
                          : "text-gray-700 hover:text-sentinel-600 hover:bg-sentinel-50"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-4 px-4">
                {isAuthenticated ? (
                  <>
                    <Link to="/dashboard" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">Dashboard</Button>
                    </Link>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="w-full"
                      onClick={() => logout()}
                    >
                      Log out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/auth?mode=login" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">Log in</Button>
                    </Link>
                    <Link to="/auth?mode=signup" className="w-full">
                      <Button size="sm" className="w-full">Sign up</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
