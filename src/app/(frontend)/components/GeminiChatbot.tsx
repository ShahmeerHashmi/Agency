'use client'

import { useState, useRef, useEffect } from 'react'
import { GoogleGenAI } from '@google/genai'
import { motion, AnimatePresence } from 'framer-motion'

export default function GeminiChatbot() {
  const [messages, setMessages] = useState([{ role: 'bot', text: 'Hi! How can I help you today?' }])
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const chatEndRef = useRef<HTMLDivElement>(null)

  const sendMessage = async () => {
    if (!input.trim()) return
    setIsSending(true)
    setError(null)
    const MODEL_ID = 'gemini-1.5-flash'
    const prompt = `You are a helpful support chatbot for a web agency. Answer user queries, provide support, and be friendly.\nUser: ${input}`
    setMessages((prev) => [...prev, { role: 'user', text: input }])
    setInput('')
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
      const response = await ai.models.generateContent({
        model: MODEL_ID,
        contents: prompt,
        config: { temperature: 0.2, responseMimeType: 'text/plain' },
      })
      const resultText =
        response.candidates?.[0]?.content?.parts?.[0]?.text ||
        'Sorry, I could not process your request.'
      setMessages((prev) => [...prev, { role: 'bot', text: resultText }])
    } catch (e) {
      setError('Failed to get response. Please try again.')
    } finally {
      setIsSending(false)
    }
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-2xl border border-cyan-600 flex flex-col h-[500px]">
      <div className="flex-1 overflow-y-auto mb-4 pr-1">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className={`mb-3 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-[80%] text-sm whitespace-pre-line ${msg.role === 'user' ? 'bg-cyan-500 text-white' : 'bg-white/20 text-white border border-cyan-400'}`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
        <div ref={chatEndRef} />
      </div>
      {error && <div className="mb-2 text-red-300 text-xs">{error}</div>}
      <div className="flex items-end gap-2">
        <textarea
          className="flex-1 bg-white/20 text-white rounded-lg p-2 border border-cyan-400 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/50 outline-none resize-none min-h-[40px] max-h-[100px]"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isSending}
        />
        <motion.button
          onClick={sendMessage}
          disabled={isSending || !input.trim()}
          className={`px-4 py-2 rounded-lg font-semibold text-white transition-all ${!input.trim() ? 'bg-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 shadow-lg'}`}
          whileTap={!isSending && input.trim() ? { scale: 0.95 } : {}}
          whileHover={!isSending && input.trim() ? { scale: 1.02 } : {}}
        >
          {isSending ? '...' : 'Send'}
        </motion.button>
      </div>
    </div>
  )
}
