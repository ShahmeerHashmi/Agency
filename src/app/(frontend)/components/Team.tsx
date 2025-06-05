"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

const teamMembers = [
  { 
    id: 1, 
    name: 'Alice Johnson', 
    role: 'CEO & Founder',
    bio: 'Tech visionary with 15+ years in software innovation',
    image: '/image.png',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  { 
    id: 2, 
    name: 'Bob Smith', 
    role: 'CTO',
    bio: 'Architect of cutting-edge technical solutions',
    image: '/image.png',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  { 
    id: 3, 
    name: 'Carol White', 
    role: 'Lead Designer',
    bio: 'Creates intuitive user experiences with pixel perfection',
    image: '/image.png',
    social: {
      linkedin: '#',
      dribbble: '#'
    }
  },
  { 
    id: 4, 
    name: 'David Brown', 
    role: 'Senior Developer',
    bio: 'Full-stack wizard specializing in performance optimization',
    image: '/image.png',
    social: {
      linkedin: '#',
      github: '#'
    }
  },
]

export default function Team() {
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
    }
  }

  const cardVariants = {
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  }

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.5 }
    }
  }

  const socialVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  }

  return (
    <motion.section 
      className="max-w-screen-xl mx-auto py-20 px-6 sm:px-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="text-center mb-16" variants={itemVariants}>
        <h2 className="text-4xl sm:text-5xl font-bold text-green-600 mb-4">
          Meet Our <span className="text-gray-800">Team</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The brilliant minds behind our success, combining diverse expertise to deliver exceptional results.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="flex flex-col items-center group"
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.div 
              className="relative w-40 h-40 rounded-full overflow-hidden shadow-xl mb-6 z-10"
              variants={cardVariants}
            >
              <motion.div variants={imageVariants}>
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Social links */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {member.social.linkedin && (
                  <motion.a 
                    href={member.social.linkedin}
                    className="bg-white p-2 rounded-full text-blue-600"
                    variants={socialVariants}
                    whileHover="hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-lg" />
                  </motion.a>
                )}
                {member.social.twitter && (
                  <motion.a 
                    href={member.social.twitter}
                    className="bg-white p-2 rounded-full text-blue-400"
                    variants={socialVariants}
                    whileHover="hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-lg" />
                  </motion.a>
                )}
                {member.social.github && (
                  <motion.a 
                    href={member.social.github}
                    className="bg-white p-2 rounded-full text-gray-800"
                    variants={socialVariants}
                    whileHover="hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-lg" />
                  </motion.a>
                )}
              </div>
            </motion.div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-green-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm hidden group-hover:block transition-all duration-300">
                {member.bio}
              </p>
            </div>

            {/* Decorative element */}
            <div className="w-24 h-24 bg-green-100 rounded-full absolute -z-10 mt-8 opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-xl" />
          </motion.div>
        ))}
      </div>

      {/* Join team CTA */}
      <motion.div 
        className="mt-20 text-center"
        variants={itemVariants}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Want to join our team?</h3>
        <button className="px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-lg relative overflow-hidden group">
          <span className="relative z-10">View Open Positions</span>
          <span className="absolute inset-0 bg-green-700 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 z-0"></span>
        </button>

      </motion.div>

    </motion.section>
  )
}
