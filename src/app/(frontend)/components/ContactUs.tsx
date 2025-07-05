'use client'
import { motion } from 'framer-motion'
import { FaEnvelope, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactUs() {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
        alert('Message sent successfully!')
        if (form.current) {
          form.current.reset()
        }
      })
      .catch(() => {
        alert('Failed to send message. Please try again.')
      })
  }

  // Parent container variants for staggered children
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

  // Each child will animate in from below
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const contactMethods = [
    {
      icon: <FaEnvelope className="text-4xl" />,
      title: 'Email Us',
      info: 'contact@zjoxsoftworks.com',
      link: 'mailto:contact@zjoxsoftworks.com',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: <FaWhatsapp className="text-4xl" />,
      title: 'WhatsApp',
      info: '+1 (234) 567-890',
      link: 'https://wa.me/1234567890',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: <FaInstagram className="text-4xl" />,
      title: 'Instagram',
      info: '@zjoxsoftworks',
      link: 'https://instagram.com/zjoxsoftworks',
      color: 'bg-pink-100 text-pink-600',
    },
    {
      icon: <FaPhoneAlt className="text-4xl" />,
      title: 'Call Us',
      info: '+1 (234) 567-890',
      link: 'tel:+1234567890',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl" />,
      title: 'Visit Us',
      info: '123 Tech Street, Silicon Valley',
      link: 'https://maps.google.com',
      color: 'bg-purple-100 text-purple-600',
    },
  ]

  return (
    <motion.section
      className="w-full py-20 px-0 sm:px-0 bg-[#18122B] shadow-2xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        {/* Heading + Subtext */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Get In <span className="text-white">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We would love to hear from you! Reach out through any of these channels or send us a
            message directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Methods Grid */}
          <div className="grid grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-2xl p-6 flex flex-col items-center text-center shadow-md transition-shadow bg-[#232046] border border-[#2d2250] hover:border-pink-500 ${method.color}`}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="mb-4">{method.icon}</div>
                <h3 className="font-bold text-lg bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  {method.title}
                </h3>
                <p className="text-sm text-pink-100">{method.info}</p>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            className="bg-[#232046] rounded-2xl shadow-lg p-8 border border-[#2d2250]"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Send Us a Message
            </h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-pink-200 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full px-4 py-3 border border-pink-700 bg-[#18122B] text-pink-100 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-pink-200 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full px-4 py-3 border border-pink-700 bg-[#18122B] text-pink-100 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-pink-200 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-pink-700 bg-[#18122B] text-pink-100 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-pink-200 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-pink-700 bg-[#18122B] text-pink-100 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-700 transition-colors shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Embedded Google Map */}
        <motion.div
          className="mt-16 rounded-2xl overflow-hidden shadow-xl border border-[#2d2250]"
          variants={itemVariants}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256064266!2d-73.98811768459382!3d40.74844017932793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTMuNiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="rounded-2xl"
          ></iframe>
        </motion.div>
      </div>
    </motion.section>
  )
}
