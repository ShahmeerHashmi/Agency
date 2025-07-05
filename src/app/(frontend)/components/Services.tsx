'use client'
import { motion } from 'framer-motion'
import {
  FaRocket,
  FaExpandArrowsAlt,
  FaTachometerAlt,
  FaSearch,
  FaShieldAlt,
  FaMobileAlt,
  FaServer,
  FaChartLine,
} from 'react-icons/fa'

const services = [
  {
    id: 1,
    icon: <FaRocket />,
    title: 'Blazing Fast Websites',
    description:
      'Optimized for speed with 90+ Lighthouse scores to ensure your visitors have a seamless experience.',
    features: ['Next.js optimization', 'Image compression', 'CDN integration', 'SSR/SSG'],
  },
  {
    id: 2,
    icon: <FaExpandArrowsAlt />,
    title: 'Scalable Solutions',
    description:
      'Cloud-native architectures built to grow with your business, handling 10x traffic spikes effortlessly.',
    features: ['Microservices', 'Load balancing', 'Auto-scaling', 'Database sharding'],
  },
  {
    id: 3,
    icon: <FaTachometerAlt />,
    title: 'High Performance',
    description:
      'Leveraging WebAssembly, Edge Computing and modern frameworks to deliver top-notch performance.',
    features: ['WASM integration', 'Edge caching', 'Code splitting', 'Lazy loading'],
  },
  {
    id: 4,
    icon: <FaSearch />,
    title: 'SEO Optimized',
    description:
      'Semantic architecture with perfect Core Web Vitals for maximum search engine visibility.',
    features: ['Structured data', 'Sitemaps', 'Meta optimization', 'Content strategy'],
  },
  {
    id: 5,
    icon: <FaShieldAlt />,
    title: 'Enterprise Security',
    description: 'Military-grade security protocols to protect your data and customer information.',
    features: ['OWASP compliance', 'Pen testing', '2FA integration', 'GDPR ready'],
  },
  {
    id: 6,
    icon: <FaMobileAlt />,
    title: 'Mobile First',
    description: 'Pixel-perfect responsive designs that work flawlessly across all devices.',
    features: ['Touch optimization', 'PWA support', 'Adaptive images', 'Mobile UX testing'],
  },
  {
    id: 7,
    icon: <FaServer />,
    title: 'DevOps & Cloud',
    description: 'CI/CD pipelines and cloud infrastructure for seamless deployments.',
    features: ['Docker/K8s', 'AWS/GCP', 'GitOps', 'Monitoring'],
  },
  {
    id: 8,
    icon: <FaChartLine />,
    title: 'Analytics & Insights',
    description: 'Data-driven decisions with real-time analytics and conversion tracking.',
    features: ['Custom dashboards', 'A/B testing', 'Heatmaps', 'Funnel analysis'],
  },
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const iconVariants = {
    hover: {
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.section
      className="w-full py-20 px-0 sm:px-0 bg-[#18122B] shadow-2xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Our <span className="text-white">Services</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs. We combine cutting-edge
            technology with proven methodologies to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group relative bg-[#232046] rounded-xl shadow-lg overflow-hidden border border-[#2d2250] hover:border-pink-500 transition-all"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="p-6">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg"
                  variants={iconVariants}
                >
                  <div className="text-white text-2xl">{service.icon}</div>
                </motion.div>

                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 text-center">{service.description}</p>

                <div className="hidden group-hover:block transition-all duration-300">
                  <div className="border-t border-pink-700 pt-4 mt-4">
                    <h4 className="text-xs font-semibold text-pink-400 uppercase tracking-wider mb-2">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>
                          <span className="text-sm text-pink-100">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div className="mt-20 text-center" variants={itemVariants}>
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Ready to transform your digital presence?
          </h3>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-lg shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Get a Free Consultation</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}
