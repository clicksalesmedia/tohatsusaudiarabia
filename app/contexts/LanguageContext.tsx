'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'ar' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar')

  useEffect(() => {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'ar' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
    
    // Update document direction and lang attribute
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }

  const isRTL = language === 'ar'

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: handleSetLanguage, 
      isRTL 
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 