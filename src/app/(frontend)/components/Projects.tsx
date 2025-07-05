'use client'
import { FaExternalLinkAlt, FaEye, FaHeart, FaCode } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'VR Training System for Manufacturing',
    description: 'Immersive training solution reducing onboarding time by 40%',
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=400&fit=crop',
    labels: ['3D Modeling', 'AR/VR', 'Unity'],
    link: '#',
    views: '12.5K',
    likes: '847',
    status: 'Featured',
    category: 'Enterprise',
    difficulty: 'Advanced',
    color: 'from-blue-500 to-purple-600',
  },
  {
    id: 2,
    title: 'Healthcare Simulation Platform',
    description: 'Medical procedure training with real-time feedback and AI-powered assessment',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop',
    labels: ['WebXR', 'React', 'Three.js'],
    link: '#',
    views: '8.2K',
    likes: '632',
    status: 'Live',
    category: 'Healthcare',
    difficulty: 'Expert',
    color: 'from-green-400 to-blue-500',
  },
  {
    id: 3,
    title: 'Industrial Maintenance Trainer',
    description: 'Equipment maintenance training with AI assistance and predictive analytics',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop',
    labels: ['AI Integration', '3D Animation', 'IoT'],
    link: '#',
    views: '15.1K',
    likes: '1.2K',
    status: 'New',
    category: 'Industrial',
    difficulty: 'Intermediate',
    color: 'from-orange-400 to-red-500',
  },
  {
    id: 4,
    title: 'Safety Compliance Simulator',
    description: 'Workplace hazard identification training with real-world scenario testing',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
    labels: ['Scenario Design', 'Analytics', 'Multiplayer'],
    link: '#',
    views: '6.8K',
    likes: '421',
    status: 'Beta',
    category: 'Safety',
    difficulty: 'Beginner',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 5,
    title: 'Retail VR Showroom',
    description: 'Virtual product demonstration platform with haptic feedback integration',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop',
    labels: ['E-commerce', '3D Configurator', 'WebGL'],
    link: '#',
    views: '9.3K',
    likes: '756',
    status: 'Popular',
    category: 'Retail',
    difficulty: 'Advanced',
    color: 'from-pink-400 to-purple-600',
  },
  {
    id: 6,
    title: 'AI-Powered Code Assistant',
    description: 'Next-generation development environment with intelligent code completion',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    labels: ['AI/ML', 'Developer Tools', 'Cloud'],
    link: '#',
    views: '22.7K',
    likes: '1.8K',
    status: 'Trending',
    category: 'DevTools',
    difficulty: 'Expert',
    color: 'from-cyan-400 to-blue-600',
  },
]

const statusColors = {
  Featured: 'bg-gradient-to-r from-yellow-400 to-orange-500',
  Live: 'bg-gradient-to-r from-green-400 to-emerald-500',
  New: 'bg-gradient-to-r from-blue-400 to-cyan-500',
  Beta: 'bg-gradient-to-r from-purple-400 to-pink-500',
  Popular: 'bg-gradient-to-r from-pink-400 to-rose-500',
  Trending: 'bg-gradient-to-r from-orange-400 to-red-500',
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = [
    'All',
    'Enterprise',
    'Healthcare',
    'Industrial',
    'Safety',
    'Retail',
    'DevTools',
  ]
  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

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
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.section
      ref={containerRef}
      className="w-full py-20 px-0 sm:px-0 bg-[#18122B] shadow-2xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Our <span className="text-white">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our featured work, showcasing innovation across industries with immersive
            technology and creative solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full font-semibold transition-all text-sm border-2 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white border-transparent shadow-lg'
                  : 'bg-[#232046] text-pink-200 border-pink-700 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 hover:text-white'
              }`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="relative group bg-[#232046] rounded-2xl overflow-hidden shadow-xl border border-[#2d2250] hover:border-pink-500 transition-all"
              variants={itemVariants}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full ${statusColors[project.status as keyof typeof statusColors]}`}
                >
                  {project.status}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.labels.map((label, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-[#2d2250] text-pink-200 border border-pink-700"
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <FaEye className="text-pink-400" /> {project.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaHeart className="text-pink-400" /> {project.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCode className="text-purple-400" /> {project.difficulty}
                  </span>
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
              >
                <FaExternalLinkAlt />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
