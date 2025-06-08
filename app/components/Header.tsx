'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../translations'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const { language, isRTL } = useLanguage()
  const t = useTranslations(language)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navigationItems = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { 
      name: t.nav.products, 
      href: "/products", 
      dropdown: true,
      dropdownItems: [
        { name: `${t.products.portable.title} (${t.products.portable.power})`, href: "/products/portable-engines" },
        { name: `${t.products.midRange.title} (${t.products.midRange.power})`, href: "/products/mid-range-engines" },
        { name: `${t.products.highPower.title} (${t.products.highPower.power})`, href: "/products/high-power-engines" }
      ]
    },
    { name: t.nav.dealers, href: "/dealer-locator" },
    { name: t.nav.contact, href: "/contact" }
  ]

  // Function to check if item is active (only on client side)
  const isItemActive = (href: string) => {
    if (typeof window === 'undefined') return false
    return pathname === href || (href === '/products' && pathname?.startsWith('/products'))
  }

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    }
  }

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.4,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    })
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/tohatsu.png"
              alt="توهاتسو السعودية"
              width={120}
              height={80}
              className="h-12 sm:h-16 lg:h-20 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center gap-8">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  {item.dropdown ? (
                    <div className="relative" ref={dropdownRef}>
                      <motion.button 
                        className="font-semibold text-gray-700 hover:text-[#181b39] transition-all duration-300 flex items-center text-lg group py-2 px-3 rounded-lg hover:bg-[#c2b280]/10"
                        onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.name}
                        <motion.div
                          animate={{ rotate: isProductsDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="mr-2"
                        >
                          <ChevronDownIcon className="w-4 h-4" />
                        </motion.div>
                      </motion.button>
                      
                      <AnimatePresence>
                        {isProductsDropdownOpen && (
                          <motion.div 
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl py-3 z-20 border border-gray-100 overflow-hidden"
                          >
                            <div className="px-4 py-2 border-b border-gray-100">
                              <p className={`text-sm font-semibold text-[#181b39] ${isRTL ? 'text-right' : 'text-left'}`}>
                                {language === 'ar' ? 'اختر فئة المحركات' : 'Choose Engine Category'}
                              </p>
                            </div>
                            {item.dropdownItems?.map((dropdownItem, idx) => (
                              <motion.a
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className={`block px-6 py-3 text-sm text-gray-700 hover:bg-gradient-to-l hover:from-[#c2b280]/20 hover:to-[#c2b280]/10 hover:text-[#181b39] transition-all duration-200 ${isRTL ? 'text-right' : 'text-left'} group relative overflow-hidden`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.3 }}
                                whileHover={{ x: -2 }}
                                onClick={() => setIsProductsDropdownOpen(false)}
                              >
                                <span className="relative z-10 font-medium">{dropdownItem.name}</span>
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-l from-[#181b39]/5 to-[#c2b280]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                  layoutId="dropdown-hover"
                                />
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.a
                      href={item.href}
                      className={`font-semibold transition-all duration-300 text-lg relative overflow-hidden py-2 px-3 rounded-lg ${
                        isItemActive(item.href) 
                          ? "text-[#181b39] bg-[#c2b280]/15" 
                          : "text-gray-700 hover:text-[#181b39] hover:bg-[#c2b280]/10"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      suppressHydrationWarning
                    >
                      <span className="relative z-10">{item.name}</span>
                      {isItemActive(item.href) && (
                        <motion.div
                          className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-[#181b39] to-[#c2b280]"
                          layoutId="activeIndicator"
                        />
                      )}
                    </motion.a>
                  )}
                </motion.div>
              ))}
            </div>
          </nav>

          {/* Language Switcher - Right side */}
          <div className="hidden lg:flex items-center">
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <motion.div 
            className="lg:hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              type="button"
              className="text-gray-700 hover:text-[#181b39] focus:outline-none p-2 rounded-lg hover:bg-[#c2b280]/10 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">فتح القائمة الرئيسية</span>
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="lg:hidden bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-200 overflow-hidden"
            dir={isRTL ? "rtl" : "ltr"}
          >
            <div className="px-4 pt-4 pb-6 space-y-1">
              {/* Mobile Language Switcher */}
              <div className="px-4 py-3 border-b border-gray-200 mb-2">
                <LanguageSwitcher />
              </div>
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {item.dropdown ? (
                    <div className="space-y-1">
                      <div className={`px-4 py-2 text-sm font-semibold text-[#181b39] border-b border-gray-100 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {item.name}
                      </div>
                      {item.dropdownItems?.map((dropdownItem, idx) => (
                        <motion.a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className={`block px-6 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-gradient-to-l hover:from-[#c2b280]/20 hover:to-[#c2b280]/10 hover:text-[#181b39] transition-all duration-200 ${isRTL ? 'text-right mr-4' : 'text-left ml-4'}`}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index + idx) * 0.05, duration: 0.3 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </motion.a>
                      ))}
                    </div>
                  ) : (
                    <motion.a
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${isRTL ? 'text-right' : 'text-left'} ${
                        isItemActive(item.href)
                          ? "bg-gradient-to-l from-[#c2b280]/20 to-[#c2b280]/10 text-[#181b39]"
                          : "text-gray-700 hover:bg-gradient-to-l hover:from-[#c2b280]/20 hover:to-[#c2b280]/10 hover:text-[#181b39]"
                      }`}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      suppressHydrationWarning
                    >
                      {item.name}
                    </motion.a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header 