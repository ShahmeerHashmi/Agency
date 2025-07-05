'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { FiSearch, FiX, FiMenu, FiChevronDown } from 'react-icons/fi'
import { FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa'


const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isHovering, setIsHovering] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 10)
  })

  const navLinks = [
    {
      name: 'About',
      path: '/about',
      color: 'text-green-500',
      dropdown: [
        { name: 'Our Story', path: '/about/story' },
        { name: 'Team', path: '/about/team' },
        { name: 'Values', path: '/about/values' },
      ],
    },
    {
      name: 'Projects',
      path: '/projects',
      dropdown: [
        { name: 'Web Development', path: '/projects/web' },
        { name: 'Mobile Apps', path: '/projects/mobile' },
        { name: 'XR Experiences', path: '/projects/xr' },
      ],
    },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'Consulting', path: '/services/consulting' },
        { name: 'Development', path: '/services/development' },
        { name: 'Training', path: '/services/training' },
      ],
    },
    { name: 'Clients', path: '/clients' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  const socialLinks = [
    { icon: <FaTwitter className="w-4 h-4" />, path: '#', color: 'text-green-500' },
    { icon: <FaDiscord className="w-4 h-4" />, path: '#', color: 'text-green-500' },
    { icon: <FaGithub className="w-4 h-4" />, path: '#', color: 'text-green-500' },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 15,
      },
    }),
    hover: {
      scale: 1.05,
      color: '#22c55e',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const searchVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: '200px',
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      width: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  }

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
      },
    },
  }

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const dropdownItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  }

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className={`hidden md:flex items-center justify-between fixed w-full max-w-screen-xl mx-auto left-1/2 -translate-x-1/2 px-6 py-3 z-50 transition-all duration-300 ${
          isScrolled
        }`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Logo with animation */}
        <motion.div
          className="text-xl font-['Montserrat'] font-extrabold text-white flex-shrink-0 flex items-center gap-2"
          variants={logoVariants}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image src="/Logo.png" alt="Logo" width={100} height={100} className="rounded-full" />
            <span>Webnity Studio</span>
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.path}
              className="relative"
              custom={i}
              variants={itemVariants}
              whileHover="hover"
              onMouseEnter={() => {
                setIsHovering(link.path)
                if (link.dropdown) setActiveDropdown(link.path)
              }}
              onMouseLeave={() => {
                setIsHovering(null)
                setActiveDropdown(null)
              }}
            >
              <Link
                href={link.path}
                className={`relative flex items-center ${link.color || 'text-gray-700'} font-medium group`}
              >
                {link.name}
                {link.dropdown && (
                  <FiChevronDown
                    className={`ml-1 transition-transform duration-200 ${
                      activeDropdown === link.path ? 'rotate-180' : ''
                    }`}
                  />
                )}
                {isHovering === link.path && (
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"
                    layoutId="nav-underline"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>

              {/* Dropdown menu */}
              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.path && (
                    <motion.div
                      className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      {link.dropdown.map((item) => (
                        <motion.div
                          key={item.path}
                          variants={dropdownItemVariants}
                          whileHover={{ backgroundColor: '#f0fdf4' }}
                          transition={{ duration: 0.1 }}
                        >
                          <Link
                            href={item.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-green-600"
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </motion.div>
          ))}
        </div>

        {/* Right side elements */}
        <div className="flex items-center space-x-6">
          {/* Search with animation */}
          <div className="flex items-center">
            <AnimatePresence mode="wait">
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
                    className="w-full px-3 py-1.5 text-sm bg-white/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              className={`ml-2 p-1.5 rounded-full ${
                isSearchOpen ? 'bg-gray-100' : 'hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isSearchOpen ? (
                <FiX className="w-5 h-5 text-gray-700" />
              ) : (
                <FiSearch className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>
          </div>

          {/* Social links */}
          <div className="flex items-center space-x-3">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.path}
                className={`p-1.5 rounded-full transition-colors duration-200 ${social.color}`}
                custom={i + navLinks.length}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: '#fff',
                  color: '#22c55e',
                }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        className={`md:hidden flex items-center justify-between fixed w-full px-6 py-3 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="text-xl font-['Montserrat'] font-extrabold text-white flex items-center gap-2"
          variants={logoVariants}
        >
          <Image src="/Logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
          <span>WebnityStudio</span>
        </motion.div>
        <div className="flex items-center space-x-4">
          <motion.button
            className="p-1.5 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            {isSearchOpen ? (
              <FiX className="w-5 h-5 text-gray-700" />
            ) : (
              <FiSearch className="w-5 h-5 text-gray-700" />
            )}
          </motion.button>
          <motion.button
            className="p-1.5 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX className="w-5 h-5 text-gray-700" />
            ) : (
              <FiMenu className="w-5 h-5 text-gray-700" />
            )}
          </motion.button>
        </div>
        {/* Mobile Search */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              className="absolute left-0 right-0 top-full bg-white shadow-md px-6 py-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 text-sm bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>
          )}
        </AnimatePresence>
         {/* MOBILE MENU */}
        <AnimatePresence initial={false}>
          {isMobileMenuOpen && (
            <motion.div
              className="absolute left-0 top-full w-full bg-white shadow-lg px-6 py-4 z-40"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
            >
              {navLinks.map((navLink) => (
                <motion.div
                  key={navLink.path}
                  className="mb-2"
                  variants={mobileItemVariants}
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={navLink.path}
                      className="block px-2 py-2 text-base font-medium text-gray-700 hover:text-green-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {navLink.name}
                    </Link>
                    {navLink.dropdown && (
                      <button
                        className="ml-2"
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === navLink.path ? null : navLink.path
                          )
                        }
                        aria-label="Toggle dropdown"
                      >
                        <FiChevronDown
                          className={`transition-transform duration-200 ${
                            activeDropdown === navLink.path ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {/* Dropdown for mobile */}
                  <AnimatePresence initial={false}>
                    {navLink.dropdown && activeDropdown === navLink.path && (
                      <motion.div
                        className="pl-4 mt-1 space-y-1 overflow-hidden"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                      >
                        {navLink.dropdown.map((item) => (
                          <motion.div
                            key={item.path}
                            whileHover={{ backgroundColor: '#f0fdf4' }}
                            transition={{ duration: 0.1 }}
                          >
                            <Link
                              href={item.path}
                              className="block px-4 py-1.5 text-sm text-gray-600 hover:text-green-600"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </motion.nav>
    </>
  )
}

export default Navbar
