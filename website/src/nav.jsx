
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Phone, Mail, MapPin, Facebook, Twitter, Linkedin,
  Package, Globe, Truck, Building2, Archive, Warehouse, Train, Ship, Plane,
  CheckCircle, Shield, Users, Clock, Award, ArrowRight, Star, Quote, Home,
  Info, Briefcase, Tag, FileText, HelpCircle, MessageSquare
} from 'lucide-react';

// Color Palette
const colors = {
  darkGray: '#41444B',
  mediumGray: '#52575D',
  yellow: '#FDDB3A',
  cream: '#F6F4E6',
  black: '#000000',
  white: '#FFFFFF'
};

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;
  const isServiceActive = () => location.pathname.startsWith('/services');

  const mainLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: Info },
    { name: 'Offers', path: '/offers', icon: Tag },
    { name: 'Policies', path: '/policies', icon: FileText },
    { name: 'FAQ', path: '/faq', icon: HelpCircle },
    { name: 'Contact', path: '/contact', icon: MessageSquare }
  ];

  const services = [
    { name: 'Digital Document Archiving', path: '/services/archiving', icon: Archive },
    { name: 'Global Moves', path: '/services/global-moves', icon: Globe },
    { name: 'Regional Moves', path: '/services/regional-moves', icon: MapPin },
    { name: 'Workspace Transition', path: '/services/workspace', icon: Building2 },
    { name: 'Door-to-Door Relocations', path: '/services/door-to-door', icon: Truck },
    { name: 'Packing & Crating', path: '/services/packing', icon: Package },
    { name: 'Storage Solutions', path: '/services/storage', icon: Warehouse },
    { name: 'Inter City Transport', path: '/services/intercity', icon: Train },
    { name: 'Warehousing', path: '/services/warehousing', icon: Warehouse },
    { name: 'Specialized Freight', path: '/services/freight', icon: Ship }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg' 
          : 'bg-white/60 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2 z-50">
              <div className="w-16 h-16 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform shadow-lg">
                <img src="/logo.png" alt="Glens Care Logo" className="w-12 h-12" />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {mainLinks.slice(0, 2).map((link) => {
                const Icon = link.icon;
                return (
                  <Link 
                    key={link.path}
                    to={link.path} 
                    className={`nav-link flex items-center gap-2 transition-all ${
                      isActive(link.path) 
                        ? 'font-bold' 
                        : ''
                    }`}
                    style={{ 
                      color: isActive(link.path) ? colors.yellow : colors.darkGray,
                      textShadow: isActive(link.path) ? '0 0 20px rgba(253, 219, 58, 0.5)' : 'none'
                    }}
                  >
                    <Icon size={18} />
                    {link.name}
                  </Link>
                );
              })}
              
              <div className="relative group">
                <button 
                  className={`nav-link flex items-center gap-2 ${
                    isServiceActive() ? 'font-bold' : ''
                  }`}
                  style={{ 
                    color: isServiceActive() ? colors.yellow : colors.darkGray,
                    textShadow: isServiceActive() ? '0 0 20px rgba(253, 219, 58, 0.5)' : 'none'
                  }}
                >
                  <Briefcase size={18} />
                  Services 
                  <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="py-2">
                    {services.map((service, idx) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={idx}
                          to={service.path}
                          className={`block px-4 py-2 hover:bg-yellow-50 transition-colors flex items-center gap-2 ${
                            isActive(service.path) ? 'bg-yellow-100 font-semibold' : ''
                          }`}
                          style={{ color: colors.darkGray }}
                        >
                          <Icon size={16} />
                          {service.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {mainLinks.slice(2).map((link) => {
                const Icon = link.icon;
                return (
                  <Link 
                    key={link.path}
                    to={link.path} 
                    className={`nav-link flex items-center gap-2 transition-all ${
                      isActive(link.path) 
                        ? 'font-bold' 
                        : ''
                    }`}
                    style={{ 
                      color: isActive(link.path) ? colors.yellow : colors.darkGray,
                      textShadow: isActive(link.path) ? '0 0 20px rgba(253, 219, 58, 0.5)' : 'none'
                    }}
                  >
                    <Icon size={18} />
                    {link.name}
                  </Link>
                );
              })}
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-sm text-black font-semibold shadow-lg"
                  style={{ backgroundColor: colors.yellow }}
                >
                  Get Quote
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden z-50 relative"
              style={{ color: colors.darkGray }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl"
            style={{ paddingTop: '80px' }}
          >
            <div className="h-full overflow-y-auto px-6 py-8">
              <div className="space-y-2">
                {mainLinks.slice(0, 2).map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link 
                      key={link.path}
                      to={link.path} 
                      className={`flex items-center gap-3 py-4 px-4 rounded-sm transition-all ${
                        isActive(link.path) 
                          ? 'bg-yellow-400 text-black font-bold shadow-lg' 
                          : 'hover:bg-gray-100'
                      }`}
                      style={{ color: isActive(link.path) ? colors.black : colors.darkGray }}
                    >
                      <Icon size={22} />
                      <span className="text-lg">{link.name}</span>
                    </Link>
                  );
                })}
                
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`flex items-center justify-between w-full py-4 px-4 rounded-sm transition-all ${
                      isServiceActive() 
                        ? 'bg-yellow-400 text-black font-bold shadow-lg' 
                        : 'hover:bg-gray-100'
                    }`}
                    style={{ color: isServiceActive() ? colors.black : colors.darkGray }}
                  >
                    <div className="flex items-center gap-3">
                      <Briefcase size={22} />
                      <span className="text-lg">Services</span>
                    </div>
                    <ChevronDown 
                      size={20} 
                      className={`transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-1 mt-2">
                          {services.map((service, idx) => {
                            const Icon = service.icon;
                            return (
                              <Link 
                                key={idx} 
                                to={service.path} 
                                className={`flex items-center gap-3 py-3 px-4 rounded-sm text-sm transition-all ${
                                  isActive(service.path) 
                                    ? 'bg-yellow-300 font-semibold' 
                                    : 'hover:bg-gray-50'
                                }`}
                                style={{ color: colors.darkGray }}
                              >
                                <Icon size={18} />
                                {service.name}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {mainLinks.slice(2).map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link 
                      key={link.path}
                      to={link.path} 
                      className={`flex items-center gap-3 py-4 px-4 rounded-sm transition-all ${
                        isActive(link.path) 
                          ? 'bg-yellow-400 text-black font-bold shadow-lg' 
                          : 'hover:bg-gray-100'
                      }`}
                      style={{ color: isActive(link.path) ? colors.black : colors.darkGray }}
                    >
                      <Icon size={22} />
                      <span className="text-lg">{link.name}</span>
                    </Link>
                  );
                })}

                <Link to="/contact" className="block mt-6">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 rounded-sm text-black font-bold shadow-xl text-lg"
                    style={{ backgroundColor: colors.yellow }}
                  >
                    Get Quote
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;