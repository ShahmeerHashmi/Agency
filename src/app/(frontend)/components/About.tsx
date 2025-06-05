"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaHandshake, FaCode, FaShieldAlt } from 'react-icons/fa'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67]
      }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  }

  const featureVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5
      }
    }),
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  }

  const features = [
    {
      icon: <FaHandshake className="text-green-500 text-2xl" />,
      title: "Client-Centric",
      description: "Tailored solutions for your unique needs"
    },
    {
      icon: <FaCode className="text-green-500 text-2xl" />,
      title: "Cutting-Edge",
      description: "Latest technologies for optimal performance"
    },
    {
      icon: <FaShieldAlt className="text-green-500 text-2xl" />,
      title: "Secure",
      description: "Enterprise-grade security standards"
    }
  ]

  return (
    <motion.section 
      className="flex flex-col lg:flex-row items-center justify-center py-20 px-6 sm:px-12 max-w-screen-xl mx-auto gap-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Left side: stacked images with animations */}
      <motion.div className="flex flex-col gap-6 relative">
        <motion.div 
          className="overflow-hidden rounded-xl shadow-2xl relative z-10"
          variants={imageVariants}
          whileHover="hover"
        >
          <Image
            src="/About section.jpg"
            alt="About us top"
            width={400}
            height={300}
            className="object-cover w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>
        
        <motion.div 
          className="overflow-hidden rounded-xl shadow-2xl relative -mt-8 ml-8"
          variants={imageVariants}
          whileHover="hover"
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/About section.jpg"
            alt="About us bottom"
            width={400}
            height={300}
            className="object-cover w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>

        {/* Decorative elements */}
        <motion.div 
          className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-100 rounded-full blur-xl opacity-70 -z-10"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ delay: 0.8, duration: 1 }}
        />
      </motion.div>

      {/* Right side: text content with animations */}
      <motion.div className="max-w-lg" variants={itemVariants}>
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-green-600 mb-6"
          variants={itemVariants}
        >
          About <span className="text-gray-800">Us</span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-700 leading-relaxed text-lg mb-8"
          variants={itemVariants}
        >
          Concept Softworks is a premier software development company specializing in custom-built solutions. 
          We serve diverse industries from financial institutions and medical companies to tech innovators 
          and government organizations, delivering robust applications that drive business success.
        </motion.p>

        {/* Features list */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-100"
              custom={i}
              variants={featureVariants}
              whileHover="hover"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="font-semibold mt-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          className="px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More About Us
        </motion.button>
      </motion.div>
    </motion.section>
  )
}