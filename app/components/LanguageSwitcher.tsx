'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { motion } from 'framer-motion'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-50 backdrop-blur-md rounded-xl p-1.5 border border-gray-200 shadow-lg">
      <motion.button
        onClick={() => setLanguage('ar')}
        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 flex items-center justify-center relative overflow-hidden ${
          language === 'ar'
            ? 'bg-gradient-to-r from-[#181b39] to-[#2a2f5a] text-white shadow-lg border border-[#181b39]/20'
            : 'text-gray-600 hover:bg-white/80 hover:text-[#181b39] hover:shadow-md'
        }`}
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          initial={false}
          animate={{
            scale: language === 'ar' ? 1.1 : 1,
            fontWeight: language === 'ar' ? 700 : 600
          }}
          transition={{ duration: 0.2 }}
        >
          {language === 'en' ? 'ع' : 'العربية'}
        </motion.span>
        {language === 'ar' && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#c2b280]/20 to-[#c2b280]/10 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.button>
      
      <div className="w-px h-6 bg-gray-300"></div>
      
      <motion.button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 flex items-center justify-center relative overflow-hidden ${
          language === 'en'
            ? 'bg-gradient-to-r from-[#181b39] to-[#2a2f5a] text-white shadow-lg border border-[#181b39]/20'
            : 'text-gray-600 hover:bg-white/80 hover:text-[#181b39] hover:shadow-md'
        }`}
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          initial={false}
          animate={{
            scale: language === 'en' ? 1.1 : 1,
            fontWeight: language === 'en' ? 700 : 600
          }}
          transition={{ duration: 0.2 }}
        >
          {language === 'ar' ? 'EN' : 'English'}
        </motion.span>
        {language === 'en' && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#c2b280]/20 to-[#c2b280]/10 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.button>
    </div>
  )
} 