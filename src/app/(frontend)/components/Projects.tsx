"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'
import { useRef } from 'react'

const projects = [
  {
    id: 1,
    title: 'VR Training System for Manufacturing',
    description: 'Immersive training solution reducing onboarding time by 40%',
    image: '/image.png',
    labels: ['3D Modeling', 'AR/VR', 'Unity'],
    link: '#'
  },
  {
    id: 2,
    title: 'Healthcare Simulation Platform',
    description: 'Medical procedure training with real-time feedback',
    image: '/image.png',
    labels: ['WebXR', 'React', 'Three.js'],
    link: '#'
  },
  {
    id: 3,
    title: 'Industrial Maintenance Trainer',
    description: 'Equipment maintenance training with AI assistance',
    image: '/image.png',
    labels: ['AI Integration', '3D Animation', 'IoT'],
    link: '#'
  },
  {
    id: 4,
    title: 'Safety Compliance Simulator',
    description: 'Workplace hazard identification training',
    image: '/image.png',
    labels: ['Scenario Design', 'Analytics', 'Multiplayer'],
    link: '#'
  },
  {
    id: 5,
    title: 'Retail VR Showroom',
    description: 'Virtual product demonstration platform',
    image: '/image.png',
    labels: ['E-commerce', '3D Configurator', 'WebGL'],
    link: '#'
  }
]

export default function Projects() {
  const containerRef = useRef(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.section 
      className="max-w-screen-xl mx-auto py-20 px-6 sm:px-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      ref={containerRef}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-green-600 mb-4 md:mb-0"
          variants={itemVariants}
        >
          Our <span className="text-gray-800">Projects</span>
        </motion.h2>
        
        <motion.div variants={itemVariants}>
          <button className="flex items-center text-green-600 hover:text-green-700 font-medium group">
            View all projects
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      <div className="relative">
        {/* Gradient fade effect on scroll */}
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex space-x-6 pb-6 overflow-x-auto scrollbar-hide"
          whileTap={{ cursor: "grabbing" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative min-w-[300px] sm:min-w-[350px] rounded-xl overflow-hidden shadow-lg flex-shrink-0 group"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Labels */}
                <div className="absolute top-4 right-4 flex flex-wrap justify-end gap-2">
                  {project.labels.map((label, idx) => (
                    <motion.span
                      key={idx}
                      className="bg-gray-200 bg-opacity-90 text-xs font-semibold text-gray-800 rounded-full px-3 py-1 shadow-sm"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      {label}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <motion.h3 
                  className="text-white text-xl font-bold mb-2"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-white/80 text-sm mb-4"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  {project.description}
                </motion.p>
                <motion.a
                  href={project.link}
                  className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  View case study
                  <FaExternalLinkAlt className="ml-2" />
                </motion.a>
              </div>

              {/* Default visible info */}
              <div className="bg-white p-4">
                <h3 className="text-gray-800 font-semibold">{project.title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-green-600 text-sm font-medium">View Project</span>
                  <FaArrowRight className="text-green-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}