'use client'

import Navbar from './Navbar'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import Particles from './Particles'

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const overlayVariants = {
    hidden: { x: '-100%' },
    visible: {
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.main
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Mobile-only Particles BG */}
      <div className="absolute inset-0 w-full h-full z-0 block md:hidden">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* Desktop Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full z-0 hidden md:block">
        <Spline scene="https://prod.spline.design/jYbedOvaCW5Y8E6Q/scene.splinecode" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 rounded-full bg-lime-400/20 blur-xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-white/10 blur-xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Navbar with fade-in */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-20 py-6 z-50 bg-black/60 backdrop-blur-lg rounded-2xl"
        variants={itemVariants}
      >
        <Navbar />
      </motion.div>

      {/* Content overlay with slide-in animation */}
      <motion.div
        className="relative z-10 w-full md:w-1/2 h-full flex flex-col justify-center items-start p-8 md:p-16 mt-24"
        variants={overlayVariants}
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              We help your{' '}
            </span>
            <motion.span
              className="bg-clip-text text-transparent inline-block"
              style={{ backgroundImage: 'linear-gradient(to right, #fff, #f9a8d4, #a78bfa)' }}
              animate={{
              backgroundImage: [
                'linear-gradient(to right, #fff, #f9a8d4, #a78bfa)',
                'linear-gradient(to right, #f9a8d4, #a78bfa, #fff)',
                'linear-gradient(to right, #a78bfa, #fff, #f9a8d4)',
              ],
              }}
              transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse',
              }}
            >
              business grow
            </motion.span>
          </h1>
        </motion.div>

        <motion.p className="text-white text-lg mb-8 max-w-md" variants={itemVariants}>
          Transform your vision into reality with our innovative solutions tailored to your unique
          needs.
        </motion.p>

        <motion.div variants={itemVariants}>
          <button className="relative px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-full overflow-hidden group shadow-lg">
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out opacity-10"></span>
          </button>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block text-white"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          variants={itemVariants}
        >
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-2">Scroll down</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
          className="w-1 h-2 bg-white rounded-full mt-1"
          animate={{
            y: [0, 4, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
              />
            </div>
          </div>
        </motion.div>
            </motion.div>

      {/* Floating stats */}
      <motion.div
        className="absolute right-8 bottom-8 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-700/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="flex space-x-6">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              250+
            </div>
            <div className="text-purple-300 text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              99%
            </div>
            <div className="text-purple-300 text-sm">Success Rate</div>
          </div>
        </div>
      </motion.div>
    </motion.main>
  )
}
