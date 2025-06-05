"use client"
import Image from 'next/image'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }

  const overlayVariants = {
    hidden: { x: '-100%' },
    visible: {
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.main 
      className="relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-16 h-16 rounded-full bg-lime-400/20 blur-xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-white/10 blur-xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Navbar with fade-in */}
      <motion.div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-16 py-6 z-50"
        variants={itemVariants}
      >
        <Navbar />
      </motion.div>

      {/* Background image */}
      <motion.div
        className="relative w-full h-[550px] md:h-[700px] overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <Image 
          src="/Hero.jpg" 
          fill
          alt="hero" 
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </motion.div>

      {/* Content overlay with slide-in animation */}
      <motion.div 
        className="absolute top-0 left-0 w-full md:w-1/2 h-full flex flex-col justify-center items-start p-8 md:p-16"
        variants={overlayVariants}
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-white">We help your </span>
            <motion.span 
              className="text-lime-400 inline-block"
              animate={{
                color: ['#a3e635', '#84cc16', '#65a30d'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            >
              business grow
            </motion.span>
          </h1>
        </motion.div>

        <motion.p 
          className="text-white/80 text-lg mb-8 max-w-md"
          variants={itemVariants}
        >
          Transform your vision into reality with our innovative solutions tailored to your unique needs.
        </motion.p>

        <motion.div variants={itemVariants}>
          <button className="relative px-8 py-3 bg-lime-500 text-black font-medium rounded-full overflow-hidden group">
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"></span>
          </button>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          variants={itemVariants}
        >
          <div className="flex flex-col items-center">
            <span className="text-white/60 text-sm mb-2">Scroll down</span>
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
              <motion.div 
                className="w-1 h-2 bg-white/60 rounded-full mt-1"
                animate={{
                  y: [0, 4, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating stats */}
      <motion.div 
        className="absolute right-8 bottom-8 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="flex space-x-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-lime-400">250+</div>
            <div className="text-white/70 text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-lime-400">99%</div>
            <div className="text-white/70 text-sm">Success Rate</div>
          </div>
        </div>
      </motion.div>
    </motion.main>
  )
}