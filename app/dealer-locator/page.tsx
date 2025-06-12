'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParticles } from '../utils/particlePositions'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../translations'
import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  BuildingOfficeIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleOnHover = {
  whileHover: { 
    scale: 1.02,
    transition: { duration: 0.3 }
  },
  whileTap: { scale: 0.98 }
}

export default function DealerLocatorPage() {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const isRTL = language === 'ar'
  
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const [searchTerm, setSearchTerm] = useState('')

  // Use consistent particle positions to prevent hydration errors
  const heroParticles = useParticles(15, 'dealer-hero')
  const ctaParticles = useParticles(12, 'dealer-cta')

  const dealers = [
    {
      id: 1,
      name: isRTL ? 'توهاتسو جدة - المعرض الرئيسي' : 'Tohatsu Jeddah - Main Showroom',
      city: 'jeddah',
      cityName: isRTL ? 'جدة' : 'Jeddah',
      address: isRTL ? 'شارع الأمير سلطان، حي الزهراء، جدة 23425، المملكة العربية السعودية' : 'Prince Sultan Street, Al-Zahra District, Jeddah 23425, Saudi Arabia',
      phone: '+966 54 369 9901',
      email: 'jeddah@tohatsu-sa.com',
      hours: t.dealerLocator.dealer.businessHours,
      services: t.dealerLocator.dealer.servicesList,
      manager: isRTL ? 'خالد عبدالله الأحمدي' : 'Khalid Abdullah Al-Ahmadi',
      coordinates: { lat: 21.3891, lng: 39.8579 },
      image: '/dealers/jeddah-showroom.jpg',
      isMainDealer: true,
      socialMedia: {
        whatsapp: '+966 54 369 9901',
        instagram: '@tohatsu_jeddah'
      },
      certifications: t.dealerLocator.dealer.certificationsList
    }
  ]

  const filteredDealers = dealers.filter(dealer => {
    const matchesSearch = dealer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dealer.cityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dealer.address.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="font-sans">
      <Header />

      <main>
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative min-h-[80vh] flex items-center justify-center text-white overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {/* Enhanced Background */}
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-bl from-[#181b39] via-[#181b39]/95 to-[#c2b280]/30"></div>
            {/* Saudi Arabia Map Overlay */}
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 1000 600" className="w-full h-full">
                <path
                  d="M100 300 Q200 250 300 280 Q400 260 500 290 Q600 270 700 300 Q800 280 900 310 L900 500 Q800 480 700 490 Q600 500 500 480 Q400 490 300 470 Q200 480 100 460 Z"
                  fill="url(#mapGradient)"
                  className="drop-shadow-lg"
                />
                {/* Jeddah location marker */}
                <circle cx="250" cy="420" r="8" fill="#c2b280" className="animate-pulse">
                  <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite"/>
                </circle>
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c2b280" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#181b39" stopOpacity="0.2"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          
          {/* Floating particles animation */}
          <div className="absolute inset-0 overflow-hidden z-10">
            {heroParticles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  [isRTL ? 'right' : 'left']: `${particle.right}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [-20, -100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>

          <motion.div 
            className="relative z-20 bg-black/20 backdrop-blur-lg border border-white/10 p-12 rounded-3xl max-w-6xl mx-4 text-center shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isHeroInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.div
                className={isRTL ? 'ml-4' : 'mr-4'}
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <MapPinIcon className="w-16 h-16 text-[#c2b280]" />
              </motion.div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  {t.dealerLocator.hero.title}
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#c2b280]">
                  {t.dealerLocator.hero.subtitle}
                </h2>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-xl sm:text-2xl mb-8 leading-relaxed opacity-90"
              initial={{ y: 30, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t.dealerLocator.hero.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm"
              initial={{ y: 30, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                🏢 {t.dealerLocator.hero.badges.showroom}
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                🛠️ {t.dealerLocator.hero.badges.services}
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                🚀 {t.dealerLocator.hero.badges.support}
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Search Section */}
        <motion.section 
          className="py-16 bg-gradient-to-bl from-gray-50 to-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-2xl mx-auto"
              {...fadeInUp}
            >
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                {/* Search Input */}
                <div className="relative">
                  <label className="block text-lg font-bold text-[#181b39] mb-4 text-center">
                    {t.dealerLocator.search.title}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={t.dealerLocator.search.placeholder}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className={`w-full py-4 px-6 ${isRTL ? 'pr-12' : 'pl-12'} rounded-xl border-2 border-gray-200 focus:border-[#c2b280] focus:ring-2 focus:ring-[#c2b280]/20 transition-all duration-300 text-lg`}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    />
                    <MagnifyingGlassIcon className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400`} />
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                      href="tel:+966543699901"
                      className="bg-gradient-to-l from-[#c2b280] to-[#c2b280]/80 text-[#181b39] font-bold py-3 px-6 rounded-xl text-center transition-all duration-300 inline-flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <PhoneIcon className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {t.dealerLocator.search.quickCall}
                    </motion.a>
                    <motion.a
                      href="https://wa.me/966501234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl text-center transition-all duration-300 inline-flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChatBubbleLeftRightIcon className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {t.dealerLocator.search.whatsapp}
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Dealer Information */}
        <motion.section 
          className="py-20 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredDealers.length > 0 ? (
              <motion.div
                className="max-w-5xl mx-auto"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {filteredDealers.map((dealer) => (
                  <motion.div
                    key={dealer.id}
                    className="bg-white rounded-3xl shadow-2xl border-2 border-[#c2b280] overflow-hidden"
                    {...scaleOnHover}
                  >
                    {/* Dealer Badge */}
                    <div className="bg-gradient-to-l from-[#c2b280] to-[#c2b280]/80 text-[#181b39] text-center py-3 font-bold text-lg">
                      🏆 {t.dealerLocator.dealer.mainBadge}
                    </div>

                    <div className="p-12">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column - Contact Info */}
                        <div>
                          {/* Dealer Header */}
                          <div className="flex items-start justify-between mb-8">
                            <div className="flex-1">
                              <h3 className="text-3xl font-bold text-[#181b39] mb-4">
                                {dealer.name}
                              </h3>
                              <div className="flex items-center text-gray-600 mb-2">
                                <MapPinIcon className={`w-6 h-6 ${isRTL ? 'ml-3' : 'mr-3'} text-[#c2b280]`} />
                                <span className="font-medium text-lg">{dealer.cityName}</span>
                              </div>
                            </div>
                            <motion.div
                              className="w-20 h-20 bg-gradient-to-bl from-[#181b39] to-[#181b39]/80 rounded-3xl flex items-center justify-center"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <BuildingOfficeIcon className="w-10 h-10 text-white" />
                            </motion.div>
                          </div>

                          {/* Contact Information */}
                          <div className="space-y-6 mb-8">
                            <div className="flex items-start">
                              <MapPinIcon className={`w-6 h-6 ${isRTL ? 'ml-4' : 'mr-4'} text-[#c2b280] mt-1 flex-shrink-0`} />
                              <span className="text-gray-700 leading-relaxed">{dealer.address}</span>
                            </div>
                            
                            <div className="flex items-center">
                              <PhoneIcon className={`w-6 h-6 ${isRTL ? 'ml-4' : 'mr-4'} text-[#c2b280]`} />
                              <a href={`tel:${dealer.phone}`} className="text-gray-700 hover:text-[#c2b280] transition-colors duration-300 font-medium text-lg">
                                {dealer.phone}
                              </a>
                            </div>
                            
                            <div className="flex items-center">
                              <EnvelopeIcon className={`w-6 h-6 ${isRTL ? 'ml-4' : 'mr-4'} text-[#c2b280]`} />
                              <a href={`mailto:${dealer.email}`} className="text-gray-700 hover:text-[#c2b280] transition-colors duration-300">
                                {dealer.email}
                              </a>
                            </div>
                            
                            <div className="flex items-center">
                              <ClockIcon className={`w-6 h-6 ${isRTL ? 'ml-4' : 'mr-4'} text-[#c2b280]`} />
                              <span className="text-gray-700">{dealer.hours}</span>
                            </div>
                          </div>

                          {/* Manager & Social Media */}
                          <div className="grid grid-cols-1 gap-6 mb-8">
                            <div className="p-6 bg-gray-50 rounded-2xl">
                              <div className="flex items-center mb-2">
                                <UserGroupIcon className={`w-6 h-6 ${isRTL ? 'ml-3' : 'mr-3'} text-[#c2b280]`} />
                                <span className="text-gray-600">{t.dealerLocator.dealer.manager}</span>
                              </div>
                              <p className="font-bold text-[#181b39] text-xl">{dealer.manager}</p>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <motion.a
                              href={`tel:${dealer.phone}`}
                              className="bg-gradient-to-l from-[#c2b280] to-[#c2b280]/80 text-[#181b39] font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 inline-flex items-center justify-center"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <PhoneIcon className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                              {t.dealerLocator.dealer.callDirect}
                            </motion.a>
                            
                            <motion.a
                              href={`https://maps.google.com/?q=${dealer.coordinates.lat},${dealer.coordinates.lng}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-[#181b39] hover:bg-[#181b39]/90 text-white font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 inline-flex items-center justify-center"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <GlobeAltIcon className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                              {t.dealerLocator.dealer.viewMap}
                            </motion.a>
                          </div>
                        </div>

                        {/* Right Column - Services & Certifications */}
                        <div>
                          {/* Services */}
                          <div className="mb-8">
                            <h4 className="text-2xl font-bold text-[#181b39] mb-6 flex items-center">
                              <WrenchScrewdriverIcon className={`w-6 h-6 ${isRTL ? 'ml-3' : 'mr-3'} text-[#c2b280]`} />
                              {t.dealerLocator.dealer.services}
                            </h4>
                            <div className="grid grid-cols-1 gap-4">
                              {dealer.services.map((service, serviceIndex) => (
                                <motion.div 
                                  key={serviceIndex} 
                                  className="flex items-center p-4 bg-gray-50 rounded-xl"
                                  initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: serviceIndex * 0.1, duration: 0.3 }}
                                  viewport={{ once: true }}
                                >
                                  <ShieldCheckIcon className={`w-5 h-5 ${isRTL ? 'ml-3' : 'mr-3'} text-green-500`} />
                                  <span className="font-medium text-gray-700">{service}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Certifications */}
                          <div>
                            <h4 className="text-2xl font-bold text-[#181b39] mb-6 flex items-center">
                              <ShieldCheckIcon className={`w-6 h-6 ${isRTL ? 'ml-3' : 'mr-3'} text-[#c2b280]`} />
                              {t.dealerLocator.dealer.certifications}
                            </h4>
                            <div className="space-y-4">
                              {dealer.certifications.map((cert, certIndex) => (
                                <motion.div 
                                  key={certIndex} 
                                  className="flex items-center p-4 bg-gradient-to-l from-[#c2b280]/10 to-transparent rounded-xl border border-[#c2b280]/20"
                                  initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: certIndex * 0.1 + 0.3, duration: 0.3 }}
                                  viewport={{ once: true }}
                                >
                                  <div className={`w-3 h-3 bg-[#c2b280] rounded-full ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
                                  <span className="font-medium text-gray-700">{cert}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <MagnifyingGlassIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-600 mb-2">{t.dealerLocator.search.noResults}</h3>
                <p className="text-gray-500">{t.dealerLocator.search.tryAgain}</p>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Services Overview */}
        <motion.section 
          className="py-20 bg-gradient-to-bl from-gray-50 to-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              {...fadeInUp}
            >
              <motion.div
                className="flex items-center justify-center mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={isRTL ? 'ml-4' : 'mr-4'}
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <WrenchScrewdriverIcon className="w-12 h-12 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#181b39]">
                  {t.dealerLocator.whyChoose.title}
                </h2>
              </motion.div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t.dealerLocator.whyChoose.subtitle}
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: BuildingOfficeIcon,
                  title: t.dealerLocator.whyChoose.services.expertise.title,
                  description: t.dealerLocator.whyChoose.services.expertise.description,
                  color: "from-[#181b39] to-[#181b39]/80"
                },
                {
                  icon: WrenchScrewdriverIcon,
                  title: t.dealerLocator.whyChoose.services.maintenance.title,
                  description: t.dealerLocator.whyChoose.services.maintenance.description,
                  color: "from-[#c2b280] to-[#c2b280]/80"
                },
                {
                  icon: ShieldCheckIcon,
                  title: t.dealerLocator.whyChoose.services.quality.title,
                  description: t.dealerLocator.whyChoose.services.quality.description,
                  color: "from-slate-600 to-slate-700"
                },
                {
                  icon: ChatBubbleLeftRightIcon,
                  title: t.dealerLocator.whyChoose.services.support.title,
                  description: t.dealerLocator.whyChoose.services.support.description,
                  color: "from-slate-500 to-slate-600"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden p-8 text-center"
                  variants={fadeInUp}
                  {...scaleOnHover}
                >
                  <div className={`absolute inset-0 bg-gradient-to-bl ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-bl ${service.color} rounded-2xl mx-auto mb-6 flex items-center justify-center relative`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-[#181b39] mb-4 group-hover:text-[#c2b280] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section 
          className="py-24 bg-gradient-to-bl from-[#181b39] via-[#181b39]/95 to-[#181b39]/90 text-white relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div className="absolute inset-0">
            {ctaParticles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-40 h-40 border border-white/10 rounded-full"
                style={{
                  [isRTL ? 'right' : 'left']: `${particle.right}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.05, 0.2, 0.05],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              className="max-w-4xl mx-auto"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-center justify-center mb-8"
                variants={fadeInUp}
              >
                <motion.div
                  className={isRTL ? 'ml-4' : 'mr-4'}
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <MapPinIcon className="w-16 h-16 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-bold">
                  {t.dealerLocator.cta.title}
                </h2>
              </motion.div>
              
              <motion.p 
                className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90"
                variants={fadeInUp}
              >
                {t.dealerLocator.cta.subtitle}
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                variants={fadeInUp}
              >
                <motion.a
                                        href="tel:+966543699901"
                  className="bg-gradient-to-l from-[#c2b280] to-[#c2b280]/80 hover:from-[#c2b280]/90 hover:to-[#c2b280]/70 text-[#181b39] font-bold py-4 px-10 rounded-2xl text-xl transition-all duration-300 inline-flex items-center shadow-2xl"
                  {...scaleOnHover}
                >
                  <motion.div
                    className={isRTL ? 'mr-3' : 'ml-3'}
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <PhoneIcon className="w-6 h-6" />
                  </motion.div>
                  {t.dealerLocator.cta.callNow}
                </motion.a>
                
                <motion.a
                  href="/contact"
                  className="bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-bold py-4 px-10 rounded-2xl text-xl transition-all duration-300 inline-flex items-center border border-white/20 shadow-2xl"
                  {...scaleOnHover}
                >
                  <motion.div
                    className={isRTL ? 'mr-3' : 'ml-3'}
                    animate={{ 
                      x: [0, isRTL ? -5 : 5, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRightIcon className="w-6 h-6" />
                  </motion.div>
                  {t.dealerLocator.cta.contactUs}
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
