'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParticles } from '../utils/particlePositions'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslations } from '../translations'
import { 
  SparklesIcon,
  ClockIcon,
  TrophyIcon,
  GlobeAltIcon,
  CogIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  HeartIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  StarIcon,
  BoltIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
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

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number | undefined
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = (timestamp - startTime) / duration
        
        if (progress < 1) {
          setCount(Math.floor(end * progress))
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return <span ref={countRef}>{count}{suffix}</span>
}

export default function AboutPage() {
  const { language } = useLanguage()
  const t = useTranslations(language)
  const isRTL = language === 'ar'
  
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  
  // Use consistent particle positions to prevent hydration errors
  const heroParticles = useParticles(6, 'about-hero')
  const factParticles = useParticles(8, 'about-facts')
  const ctaParticles = useParticles(12, 'about-cta')

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="font-sans">
      <Header />

      {/* Main Content */}
      <main>
        {/* Unique Split Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative min-h-screen flex items-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {/* Left Side - Dark */}
          <div className="absolute inset-0 flex">
            <div className={`w-1/2 bg-gradient-to-br from-[#181b39] via-[#181b39]/90 to-[#181b39]/80 relative ${isRTL ? '' : 'order-2'}`}>
              {/* Diagonal cut */}
              <div className={`absolute inset-y-0 ${isRTL ? '-left-12' : '-right-12'} w-24 bg-gradient-to-br from-[#181b39] via-[#181b39]/90 to-[#181b39]/80 transform ${isRTL ? 'skew-x-12' : '-skew-x-12'}`}></div>
              
              {/* Subtle floating elements */}
              <div className="absolute inset-0">
                {heroParticles.map((particle, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/30 rounded-full"
                    style={{
                      [isRTL ? 'right' : 'left']: `${particle.right}%`,
                      top: `${particle.top}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: particle.duration,
                      repeat: Infinity,
                      delay: particle.delay,
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Right Side - Light */}
            <div className={`w-1/2 bg-gradient-to-bl from-slate-50 via-white to-gray-100 relative ${isRTL ? '' : 'order-1'}`}>
              <motion.img
                src="hero/ths.webp"
                alt="Modern Tohatsu Facility"
                className="w-full h-full object-cover opacity-60"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 8, ease: "linear" }}
              />
            </div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
              {/* Left Content */}
              <motion.div
                className={`text-white ${isRTL ? '' : 'order-2'}`}
                initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  className="flex items-center mb-8"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <SparklesIcon className={`w-16 h-16 text-[#c2b280] ${isRTL ? 'ml-4' : 'mr-4'}`} />
                  <div>
                    <h1 className="text-5xl md:text-6xl font-bold">{t.about.hero.title}</h1>
                    <h1 className="text-5xl md:text-6xl font-bold text-[#c2b280]">{t.about.hero.titleAccent}</h1>
                  </div>
                </motion.div>
                
                <motion.p 
                  className="text-xl leading-relaxed mb-8 opacity-90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  {t.about.hero.subtitle}
                </motion.p>

                <motion.div
                  className={`flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#c2b280]">{t.about.hero.establishedYear}</div>
                    <div className="text-sm opacity-80">{t.about.hero.establishedLabel}</div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#c2b280]">{t.about.hero.experienceYears}</div>
                    <div className="text-sm opacity-80">{t.about.hero.experienceLabel}</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Content */}
              <motion.div
                className={`relative ${isRTL ? '' : 'order-1'}`}
                initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <motion.div
                    className="text-center text-[#181b39]"
                    variants={staggerChildren}
                    initial="initial"
                    animate={isHeroInView ? "animate" : "initial"}
                  >
                    <motion.h2 
                      className="text-3xl font-bold mb-6"
                      variants={fadeInUp}
                    >
                      {t.about.hero.visionTitle}
                    </motion.h2>
                    <motion.p 
                      className="text-lg leading-relaxed text-gray-700"
                      variants={fadeInUp}
                    >
                      {t.about.hero.visionText}
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section 
          className="py-20 bg-white relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-20"
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
                  <ClockIcon className="w-12 h-12 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#181b39]">
                  {t.about.timeline.title}
                </h2>
              </motion.div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t.about.timeline.subtitle}
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Central Line */}
              <div className={`absolute ${isRTL ? 'right' : 'left'}-1/2 transform ${isRTL ? 'translate-x-1/2' : '-translate-x-1/2'} w-1 h-full bg-gradient-to-b from-[#c2b280] to-[#c2b280]/60`}></div>

              <motion.div 
                className="space-y-16"
                variants={staggerChildren}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  {
                    year: "1922",
                    title: t.about.timeline.milestones['1922'].title,
                    description: t.about.timeline.milestones['1922'].description,
                    icon: BuildingOfficeIcon,
                    side: "right"
                  },
                  {
                    year: "1960",
                    title: t.about.timeline.milestones['1960'].title,
                    description: t.about.timeline.milestones['1960'].description,
                    icon: CogIcon,
                    side: "left"
                  },
                  {
                    year: "1995",
                    title: t.about.timeline.milestones['1995'].title,
                    description: t.about.timeline.milestones['1995'].description,
                    icon: GlobeAltIcon,
                    side: "right"
                  },
                  {
                    year: "2010",
                    title: t.about.timeline.milestones['2010'].title,
                    description: t.about.timeline.milestones['2010'].description,
                    icon: LightBulbIcon,
                    side: "left"
                  },
                  {
                    year: "2020",
                    title: t.about.timeline.milestones['2020'].title,
                    description: t.about.timeline.milestones['2020'].description,
                    icon: HeartIcon,
                    side: "right"
                  }
                ].map((item, index) => {
                  const actualSide = isRTL ? (item.side === 'right' ? 'left' : 'right') : item.side;
                  return (
                    <motion.div
                      key={index}
                      className={`flex items-center ${actualSide === 'right' ? 'flex-row-reverse' : ''}`}
                      variants={actualSide === 'right' ? fadeInRight : fadeInLeft}
                    >
                      <div className={`w-1/2 ${actualSide === 'right' ? (isRTL ? 'pl-16' : 'pr-16') : (isRTL ? 'pr-16' : 'pl-16')}`}>
                        <motion.div
                          className={`bg-white rounded-2xl shadow-lg p-8 relative border border-gray-100 ${actualSide === 'right' ? (isRTL ? 'text-left' : 'text-right') : (isRTL ? 'text-right' : 'text-left')}`}
                          whileHover={{ scale: 1.02, y: -3 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Arrow */}
                          <div className={`absolute top-8 ${actualSide === 'right' ? (isRTL ? '-right-4' : '-left-4') : (isRTL ? '-left-4' : '-right-4')} w-0 h-0 border-t-8 border-b-8 border-transparent ${actualSide === 'right' ? (isRTL ? 'border-l-8 border-l-white' : 'border-r-8 border-r-white') : (isRTL ? 'border-r-8 border-r-white' : 'border-l-8 border-l-white')}`}></div>
                          
                          <div className={`flex items-center mb-4 ${actualSide === 'right' ? (isRTL ? 'justify-start' : 'justify-end') : (isRTL ? 'justify-end' : 'justify-start')}`}>
                            <motion.div
                              className={`w-12 h-12 bg-gradient-to-bl from-[#c2b280] to-[#c2b280]/80 rounded-xl flex items-center justify-center ${isRTL ? 'ml-4' : 'mr-4'}`}
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <item.icon className="w-6 h-6 text-white" />
                            </motion.div>
                            <div className="text-3xl font-bold text-[#c2b280]">{item.year}</div>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-[#181b39] mb-3">{item.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </motion.div>
                      </div>

                      {/* Center Circle */}
                      <motion.div
                        className="w-6 h-6 bg-[#c2b280] rounded-full border-4 border-white shadow-lg relative z-10"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                      ></motion.div>

                      <div className="w-1/2"></div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          className="py-20 bg-gradient-to-bl from-[#181b39] via-[#181b39]/95 to-[#181b39]/90 text-white relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {/* Subtle Background Animation */}
          <div className="absolute inset-0">
            {factParticles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/10 rounded-full"
                style={{
                  [isRTL ? 'right' : 'left']: `${particle.right}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [-30, -80],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  <TrophyIcon className="w-12 h-12 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  {t.about.stats.title}
                </h2>
              </motion.div>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                {t.about.stats.subtitle}
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  number: 100,
                  suffix: "+",
                  title: t.about.stats.items.experience.title,
                  description: t.about.stats.items.experience.description,
                  icon: StarIcon,
                  color: "from-[#c2b280] to-[#c2b280]/80"
                },
                {
                  number: 50,
                  suffix: "+",
                  title: t.about.stats.items.countries.title,
                  description: t.about.stats.items.countries.description,
                  icon: GlobeAltIcon,
                  color: "from-[#181b39] to-[#181b39]/80"
                },
                {
                  number: 1000000,
                  suffix: "+",
                  title: t.about.stats.items.engines.title,
                  description: t.about.stats.items.engines.description,
                  icon: CogIcon,
                  color: "from-slate-600 to-slate-700"
                },
                {
                  number: 95,
                  suffix: "%",
                  title: t.about.stats.items.satisfaction.title,
                  description: t.about.stats.items.satisfaction.description,
                  icon: HeartIcon,
                  color: "from-[#c2b280]/80 to-[#c2b280]/60"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-bl ${stat.color} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <stat.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <div className="text-4xl md:text-5xl font-bold text-[#c2b280] mb-2">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#c2b280] transition-colors duration-300">
                    {stat.title}
                  </h3>
                  
                  <p className="text-sm opacity-80 leading-relaxed">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Innovation Showcase */}
        <motion.section 
          className="py-20 bg-gradient-to-bl from-slate-50 to-white relative overflow-hidden"
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
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <RocketLaunchIcon className="w-12 h-12 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#181b39]">
                  {t.about.innovation.title}
                </h2>
              </motion.div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t.about.innovation.subtitle}
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: BoltIcon,
                  title: t.about.innovation.technologies.simpliq.title,
                  description: t.about.innovation.technologies.simpliq.description,
                  features: t.about.innovation.technologies.simpliq.features
                },
                {
                  icon: ShieldCheckIcon,
                  title: t.about.innovation.technologies.protection.title,
                  description: t.about.innovation.technologies.protection.description,
                  features: t.about.innovation.technologies.protection.features
                },
                {
                  icon: ChartBarIcon,
                  title: t.about.innovation.technologies.efficiency.title,
                  description: t.about.innovation.technologies.efficiency.description,
                  features: t.about.innovation.technologies.efficiency.features
                }
              ].map((innovation, index) => (
                <motion.div
                  key={index}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 p-8 border border-gray-100"
                  variants={fadeInUp}
                  {...scaleOnHover}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-bl from-[#c2b280] to-[#c2b280]/80 rounded-xl flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <innovation.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-[#181b39] mb-4 group-hover:text-[#181b39]/80 transition-colors duration-300">
                    {innovation.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {innovation.description}
                  </p>
                  
                  <div className="space-y-2">
                    {innovation.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className={`w-5 h-5 text-emerald-500 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
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
                className="absolute w-20 h-20 border border-white/10 rounded-full"
                style={{
                  [isRTL ? 'right' : 'left']: `${particle.right}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.05, 0.2, 0.05],
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
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <HeartIcon className="w-16 h-16 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-bold">
                  {t.about.cta.title}
                </h2>
              </motion.div>
              
              <motion.p 
                className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90"
                variants={fadeInUp}
              >
                {t.about.cta.subtitle}
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                variants={fadeInUp}
              >
                <motion.a
                  href="/contact"
                  className="bg-gradient-to-l from-[#c2b280] to-[#c2b280]/80 hover:from-[#c2b280]/90 hover:to-[#c2b280]/70 text-[#181b39] font-bold py-4 px-10 rounded-xl text-xl transition-all duration-300 inline-flex items-center shadow-lg"
                  {...scaleOnHover}
                >
                  <motion.div
                    className={isRTL ? 'mr-3' : 'ml-3'}
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ChatBubbleLeftRightIcon className="w-6 h-6" />
                  </motion.div>
                  {t.about.cta.talkToUs}
                </motion.a>
                
                <motion.a
                  href="/products"
                  className="bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-bold py-4 px-10 rounded-xl text-xl transition-all duration-300 inline-flex items-center border border-white/20 shadow-lg"
                  {...scaleOnHover}
                >
                  <motion.div
                    className={isRTL ? 'mr-3' : 'ml-3'}
                    animate={{ 
                      x: [0, isRTL ? -3 : 3, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowTrendingUpIcon className="w-6 h-6" />
                  </motion.div>
                  {t.about.cta.discoverProducts}
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
