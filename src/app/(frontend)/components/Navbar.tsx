'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isHovering, setIsHovering] = useState<string | null>(null);

  const navLinks = [
    { name: 'About', path: '/about', color: 'text-green-500' },
    { name: 'Project', path: '/project' },
    { name: 'Service', path: '/service' },
    { name: 'Client', path: '/client' },
    { name: 'Team', path: '/team' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 200,
        damping: 15
      }
    }),
    hover: {
      scale: 1.05,
      color: '#22c55e', // green-500
      transition: { duration: 0.2 }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const searchVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { 
      opacity: 1, 
      width: '200px',
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0, 
      width: 0,
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.nav 
      className="flex items-center justify-between bg-white/90 backdrop-blur-md border-b border-gray-200 px-6 py-3 max-w-screen-xl mx-auto sticky top-0 z-50"
      initial="hidden"
      animate="visible"
    >
      {/* Logo with animation */}
      <motion.div 
        className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent"
        variants={logoVariants}
      >
        Zjox Softworks
      </motion.div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        {navLinks.map((link, i) => (
          <motion.div
            key={link.path}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            whileHover="hover"
            onMouseEnter={() => setIsHovering(link.path)}
            onMouseLeave={() => setIsHovering(null)}
          >
            <Link href={link.path} className={`relative ${link.color || 'text-gray-700'} font-medium`}>
              {link.name}
              {isHovering === link.path && (
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"
                  layoutId="nav-underline"
                  transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                />
              )}
            </Link>
          </motion.div>
        ))}

        {/* Search with animation */}
        <div className="flex items-center">
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                className="overflow-hidden"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={searchVariants}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-3 py-1 text-sm border-b border-gray-300 focus:outline-none focus:border-green-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            className="text-gray-700 hover:text-green-500 ml-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            {isSearchOpen ? (
              <FiX className="w-5 h-5" />
            ) : (
              <FiSearch className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;