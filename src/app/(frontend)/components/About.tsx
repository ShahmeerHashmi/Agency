'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaHandshake, FaCode, FaShieldAlt, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0, rotate: -2 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  }

  const featureVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
    hover: {
      y: -8,
      boxShadow: '0 10px 25px -5px rgba(156, 163, 175, 0.1)',
      transition: {
        y: { duration: 0.2 },
        boxShadow: { duration: 0.3 },
      },
    },
  }

  const features = [
    {
      icon: <FaHandshake className="text-3xl" />,
      title: 'Client-Centric',
      description: 'Tailored solutions designed specifically for your business needs',
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: 'Cutting-Edge',
      description: 'Leveraging the latest technologies for optimal performance',
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: 'Secure',
      description: 'Enterprise-grade security protecting your data',
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: 'Fast Delivery',
      description: 'Agile processes that accelerate time-to-market',
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: 'Expert Team',
      description: 'Seasoned professionals with diverse expertise',
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: 'Innovative',
      description: 'Creative solutions that give you competitive edge',
    },
  ]

  return (
    <motion.section
      className="w-full overflow-x-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#18122B] to-[#251e43]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with animated gradient text */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.span
            className="text-sm font-semibold tracking-wider text-purple-300 uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Who We Are
          </motion.span>
          <motion.h2
            className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Crafting Digital Excellence
          </motion.h2>
          <motion.div
            className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Image collage with animations */}
          <motion.div className="relative h-full min-h-[400px]">
            {/* Main image */}
            <motion.div
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl z-10 border-2 border-white/10"
              variants={imageVariants}
              whileHover="hover"
            >
              <Image
                src="/team-working.jpg"
                alt="Our team working together"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20 -z-10"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{ delay: 0.8, duration: 1.2 }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-20 -z-10"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{ delay: 1, duration: 1.2 }}
            />
          </motion.div>

          {/* Right side: text content with animations */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                Concept <span className="text-purple-400">Softworks</span>
              </h3>
              <div className="space-y-4 text-purple-100">
                <p>
                  We&apos;re a premier software development company specializing in custom-built
                  solutions that transform businesses. Our team combines technical expertise with
                  creative problem-solving to deliver exceptional results.
                </p>
                <p>
                  Since our founding, we&apos;ve helped organizations across finance, healthcare,
                  technology, and government sectors achieve their digital transformation goals
                  through innovative software solutions.
                </p>
                <p>
                  What sets us apart is our commitment to understanding your unique challenges and
                  crafting tailored solutions that drive measurable business impact.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {[
                { number: '50+', label: 'Projects' },
                { number: '100%', label: 'Satisfaction' },
                { number: '15+', label: 'Industries' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center"
                  variants={itemVariants}
                  custom={i}
                  whileHover={{
                    y: -5,
                    backgroundColor: 'rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-purple-200 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Features grid */}
        <motion.div
          className="mt-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h3
            className="text-2xl sm:text-3xl font-semibold text-center text-white mb-12"
            variants={itemVariants}
          >
            Why Choose <span className="text-purple-400">Us</span>
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-b from-[#251e43] to-[#18122B] p-6 rounded-xl shadow-lg border border-purple-900/50"
                custom={i}
                variants={featureVariants}
                whileHover="hover"
              >
                <div className="flex flex-col space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-purple-100">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-xl hover:shadow-pink-500/20 transition-all"
            whileHover={{
              scale: 1.03,
              background: 'linear-gradient(45deg, #ec4899, #8b5cf6)',
            }}
            whileTap={{ scale: 0.97 }}
          >
            Discover Our Process
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}
