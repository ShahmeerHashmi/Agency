'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface AnimatedContainerProps {
  children: React.ReactNode
  className?: string
}

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedContainer
