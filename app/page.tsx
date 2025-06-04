'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { useParticles } from './utils/particlePositions'
import { 
  ArrowRightIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  TrophyIcon,
  BoltIcon,
  MapIcon,
  SparklesIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  TruckIcon,
  PhoneIcon,
  EnvelopeIcon,
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

export default function HomePage() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  
  // Use consistent particle positions
  const heroParticles = useParticles(12, 'hero-section')
  const ctaParticles = useParticles(10, 'cta-section')
  
  // Hero slider state
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const heroImages = [
    {
      url: "/hero/hero1.webp",
      alt: "Tohatsu Marine Engine on Ocean",
      title: "قوة لا تُقهر في المياه المفتوحة"
    },
    {
      url: "/hero/hero2.jpg",
      alt: "Fishing Boat with Tohatsu Engine",
      title: "مثالي لرحلات الصيد والمغامرات"
    },
    {
      url: "/hero/hero3.jpg",
      alt: "High Speed Boat with Tohatsu",
      title: "الأداء العالي للقوارب الرياضية"
    },
    {
      url: "/hero/hero4.jpg",
      alt: "Family Boating with Tohatsu",
      title: "لحظات عائلية لا تُنسى"
    },
    {
      url: "/hero/hero5.jpg",
      alt: "Luxury Yacht with Tohatsu Engine",
      title: "الفخامة تلتقي بالموثوقية"
    }
  ]

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, heroImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  return (
    <div dir="rtl" className="font-sans">
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section with Enhanced Sliding Images */}
        <motion.section
          ref={heroRef}
          className="relative min-h-[90vh] flex items-center text-white overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          dir="rtl"
        >
          {/* Enhanced Background Image Slider */}
          <div className="absolute inset-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                {/* Primary Image */}
                <motion.img
                  src={heroImages[currentSlide].url}
                  alt={heroImages[currentSlide].alt}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.02 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 8, ease: "linear" }}
                  onError={(e) => {
                    console.log('Image failed to load:', heroImages[currentSlide].url);
                    // Fallback to a placeholder or different image
                    e.currentTarget.src = "/hero/hero1.webp";
                  }}
                />
                
                {/* Elegant Multi-layer Overlay - More subtle to show image */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#181b39]/40 via-[#181b39]/20 to-[#181b39]/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181b39]/60 via-transparent to-[#181b39]/10" />
                
                {/* Right side dark overlay for content area (RTL) */}
                <div className="absolute inset-y-0 left-0 w-1/2 lg:w-2/5 bg-gradient-to-l from-transparent to-[#181b39]/80" />
                
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 opacity-5 mix-blend-overlay">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="heroTexture" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="white" opacity="0.3"/>
                        <path d="M 0 0 L 20 20 M 20 0 L 0 20" stroke="white" strokeWidth="0.2" opacity="0.1"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#heroTexture)" />
                  </svg>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 group"
            aria-label="Previous slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-4 transition-all duration-300 border border-white/20 hover:border-white/40 shadow-xl">
              <ChevronLeftIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 group"
            aria-label="Next slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-4 transition-all duration-300 border border-white/20 hover:border-white/40 shadow-xl">
              <ChevronRightIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
          </motion.button>

          {/* Enhanced Slide Indicators */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {heroImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`group relative overflow-hidden transition-all duration-500 ${
                  index === currentSlide 
                    ? 'w-12 h-4 bg-white rounded-full' 
                    : 'w-4 h-4 bg-white/50 hover:bg-white/75 rounded-full'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {index === currentSlide && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#c2b280] to-white rounded-full"
                    layoutId="activeSlideIndicator"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Enhanced floating particles animation */}
          <div className="absolute inset-0 overflow-hidden z-20">
            {heroParticles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                style={{
                  right: `${particle.right}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [-10, -60],
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Elegant Right-Side Glass Content Container (RTL) */}
          <div className="relative z-40 w-full h-full flex items-center justify-end">
            <motion.div 
              className="mr-6 sm:mr-8 lg:mr-12 xl:mr-16 ml-2.5 w-full max-w-lg lg:max-w-xl xl:max-w-2xl"
              initial={{ scale: 0.9, opacity: 0, x: -50 }}
              animate={isHeroInView ? { scale: 1, opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {/* Elegant glass container */}
              <div className="bg-black/10 backdrop-blur-xl border border-white/20 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 text-right relative overflow-hidden shadow-2xl">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-[#c2b280]/10 rounded-2xl lg:rounded-3xl" />
                
                {/* Elegant border accent - adjusted for RTL */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#c2b280]/20 to-transparent rounded-br-3xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#c2b280]/15 to-transparent rounded-tl-3xl" />
                
                <motion.h1 
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-right relative z-10"
                  initial={{ y: 30, opacity: 0 }}
                  animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.3, duration: 1 }}
                >
                  <span className="block mb-2 text-white/90">مرحباً بك في عالم</span>
                  <motion.span 
                    className="text-transparent bg-clip-text bg-gradient-to-l from-[#c2b280] via-[#d4c794] to-[#c2b280] relative inline-block"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% 100%" }}
                  >
                    توهاتسو السعودية
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-l from-[#c2b280]/30 via-[#d4c794]/30 to-[#c2b280]/30 blur-lg -z-10" />
                  </motion.span>
                </motion.h1>

                {/* Enhanced dynamic subtitle based on current slide */}
                <motion.div
                  key={currentSlide}
                  className="relative z-10 mb-6 sm:mb-8"
                  initial={{ y: 20, opacity: 0, scale: 0.95 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -20, opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <p className="text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed text-[#c2b280] text-right mb-3">
                    {heroImages[currentSlide].title}
                  </p>
                  
                  <motion.div 
                    className="w-16 h-0.5 bg-gradient-to-l from-[#c2b280] to-white rounded-full ml-auto"
                    initial={{ width: 0 }}
                    animate={{ width: 64 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </motion.div>
              
                <motion.p 
                  className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed opacity-90 text-right relative z-10 font-light text-white/90"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isHeroInView ? { y: 0, opacity: 0.9 } : {}}
                  transition={{ delay: 0.6, duration: 1 }}
                >
                  حيث تلتقي الجودة اليابانية بالبحر الأحمر. اكتشف محركات القوارب الخارجية 
                  التي تقدم لك الأداء الذي لا مثيل له والاعتمادية التي تدوم.
                </motion.p>
                
                {/* Compact feature badges */}
                <motion.div
                  className="flex flex-wrap justify-end gap-2 sm:gap-3 mb-6 sm:mb-8 relative z-10"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.8, duration: 1 }}
                >
                  {[
                    { icon: "🚀", text: "قوة متوازنة" },
                    { icon: "⚡", text: "كفاءة عالية" },
                    { icon: "🛡️", text: "موثوقية يابانية" }
                  ].map((badge, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-white font-medium text-xs sm:text-sm border border-white/20 shadow-lg"
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5, type: "spring" }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <span className="ml-1 sm:ml-2">{badge.icon}</span>
                      {badge.text}
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Enhanced CTA Button */}
                <motion.div
                  className="relative z-10 text-right"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 1.2, duration: 1 }}
                >
                  <motion.a
                    href="/products"
                    className="group relative bg-gradient-to-l from-[#c2b280] via-[#d4c794] to-[#c2b280] hover:from-[#d4c794] hover:via-[#c2b280] hover:to-[#d4c794] text-[#181b39] font-bold py-3 sm:py-4 px-6 sm:px-8 lg:px-10 rounded-xl text-base sm:text-lg transition-all duration-500 inline-flex items-center shadow-2xl border border-[#c2b280]/30 overflow-hidden"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ backgroundSize: "200% 100%" }}
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  >
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-l from-[#c2b280]/20 to-[#d4c794]/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <motion.div
                      className="mr-2 sm:mr-3 relative z-10"
                      animate={{ x: [0, -6, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                    <span className="relative z-10">استكشف مجموعتنا</span>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* KSP Highlights Section */}
        <motion.section 
          className="py-20 bg-gradient-to-bl from-slate-50 to-white relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          dir="rtl"
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#181b39" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              className="flex items-center justify-center mb-16"
              {...fadeInUp}
            >
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="ml-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <SparklesIcon className="w-12 h-12 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#181b39]">
                  لماذا تختار توهاتسو؟
                </h2>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: ShieldCheckIcon,
                  title: "اعتمادية لا تتزعزع",
                  description: "صممت لتواجه أقسى الظروف البحرية مع ضمان الأداء المستمر.",
                  color: "from-[#181b39] to-[#181b39]/80"
                },
                {
                  icon: GlobeAltIcon,
                  title: "كفاءة استثنائية في استهلاك الوقود",
                  description: "رحلات أطول بتكلفة أقل مع تقنيات توفير الوقود المتقدمة.",
                  color: "from-[#c2b280] to-[#c2b280]/80"
                },
                {
                  icon: TrophyIcon,
                  title: "قوة يابانية، قيمة في متناول اليد",
                  description: "جودة عالمية معترف بها مع دعم محلي موثوق ومتاح دائماً.",
                  color: "from-slate-600 to-slate-700"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100 relative overflow-hidden"
                  variants={fadeInUp}
                  {...scaleOnHover}
                >
                  {/* Subtle background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-bl ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-bl ${item.color} rounded-xl mx-auto mb-6 flex items-center justify-center relative`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-[#181b39] mb-4 group-hover:text-[#181b39]/80 transition-colors duration-300 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg text-center">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl text-[#181b39] font-bold italic bg-gradient-to-l from-[#c2b280] to-[#c2b280]/80 bg-clip-text text-transparent">
                &ldquo;انطلق بثقة، انطلق مع توهاتسو.&rdquo;
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Product Categories Overview */}
        <motion.section 
          id="product-categories" 
          className="py-20 bg-gradient-to-bl from-gray-100 via-gray-50 to-white relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          dir="rtl"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center text-[#181b39] mb-16"
              {...fadeInUp}
            >
              استكشف مجموعتنا من المحركات
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "المحركات المحمولة (2.5-20 حصان)",
                  description: "القوة المدمجة، المرونة المطلقة. مثالية للقوارب الصغيرة وسهولة التنقل مع تصميم خفيف الوزن.",
                  image: "hero/twofive.webp",
                  href: "/products/portable-engines",
                  gradient: "from-[#181b39] to-[#181b39]/80"
                },
                {
                  title: "المحركات المتوسطة (25-90 حصان)",
                  description: "الأداء المثالي لمغامراتك المتنوعة. توازن مثالي بين القوة والكفاءة للاستخدامات المتعددة.",
                  image: "hero/ni.webp",
                  href: "/products/mid-range-engines",
                  gradient: "from-[#c2b280] to-[#c2b280]/80"
                },
                {
                  title: "المحركات عالية القوة (100-140 حصان)",
                  description: "قوة استثنائية لأكبر تحدياتك. أداء لا يتنازل للقوارب الأكبر والمغامرات الأكثر جرأة.",
                  image: "hero/hund.webp",
                  href: "/products/high-power-engines",
                  gradient: "from-slate-700 to-slate-800"
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-100"
                  variants={fadeInUp}
                  {...scaleOnHover}
                >
                  <div className="relative overflow-hidden h-64">
                    <motion.img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                    <div className="absolute top-4 left-4">
                      <motion.div
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <BoltIcon className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="p-8 text-right">
                    <h3 className="text-2xl font-bold text-[#181b39] mb-4 group-hover:text-[#181b39]/80 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {category.description}
                    </p>
                    <motion.a
                      href={category.href}
                      className="inline-flex items-center bg-gradient-to-l from-[#181b39] to-[#181b39]/90 hover:from-[#181b39]/90 hover:to-[#181b39]/80 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 group/btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                      >
                        <ArrowRightIcon className="w-5 h-5" />
                      </motion.div>
                      اكتشف المحركات
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Tohatsu Value Proposition Section */}
        <motion.section 
          className="py-24 bg-gradient-to-bl from-white via-slate-50/50 to-white relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          dir="rtl"
        >
          {/* Advanced background decoration */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#c2b280]/10 via-[#c2b280]/5 to-transparent rounded-full -ml-48 -mt-48 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#181b39]/5 via-[#181b39]/10 to-transparent rounded-full -mr-48 -mb-48 blur-2xl" />
          
          {/* Geometric pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="elegantGrid" width="25" height="25" patternUnits="userSpaceOnUse">
                  <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#181b39" strokeWidth="0.5"/>
                  <circle cx="12.5" cy="12.5" r="1" fill="#c2b280" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#elegantGrid)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center mb-20"
              {...fadeInUp}
            >
              <motion.div
                className="flex items-center justify-center mb-8"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className="ml-6 relative"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c2b280]/20 to-[#181b39]/20 rounded-full blur-xl" />
                  <ShieldCheckIcon className="w-16 h-16 text-[#c2b280] relative z-10" />
                </motion.div>
                <div className="text-center">
                  <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-l from-[#181b39] via-[#181b39]/90 to-[#c2b280] bg-clip-text text-transparent leading-tight">
                    لماذا توهاتسو؟
                  </h2>
                  <motion.div 
                    className="w-32 h-1 bg-gradient-to-l from-[#c2b280] to-[#181b39] rounded-full mx-auto mt-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: 128 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
              <motion.p 
                className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                اكتشف كيف تحل محركات توهاتسو تحدياتك البحرية وتقدم لك قيمة لا مثيل لها
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: TrophyIcon,
                  title: "الأداء الذي يحل مشاكلك",
                  subtitle: "موثوقية لا تتنازل",
                  description: "هل تواجه مشاكل مع محركك الحالي؟ محركات توهاتسو مصممة لتعمل في أقسى الظروف بدون أعطال أو توقف مفاجئ.",
                  benefits: [
                    "بدء تشغيل فوري حتى في البرد القارس",
                    "أداء ثابت في المياه المالحة",
                    "مقاومة التآكل والصدأ",
                    "عمر خدمة يصل إلى 20+ سنة"
                  ],
                  gradient: "from-[#181b39] via-[#181b39]/80 to-[#181b39]/60",
                  accentColor: "text-[#c2b280]",
                  bgPattern: "radial-gradient(circle at 20% 80%, rgba(194, 178, 128, 0.1) 0%, transparent 50%)"
                },
                {
                  icon: BoltIcon,
                  title: "توفير حقيقي في التكاليف",
                  subtitle: "استثمار ذكي",
                  description: "هل تشعر بالقلق من ارتفاع تكاليف الوقود والصيانة؟ محركاتنا توفر لك حتى 40% في استهلاك الوقود مع صيانة أقل.",
                  benefits: [
                    "توفير 40% في استهلاك الوقود",
                    "فترات صيانة أطول بـ 50%",
                    "قطع غيار متوفرة ومعقولة التكلفة",
                    "قيمة إعادة بيع عالية"
                  ],
                  gradient: "from-[#c2b280] via-[#c2b280]/80 to-[#c2b280]/60",
                  accentColor: "text-[#181b39]",
                  bgPattern: "radial-gradient(circle at 80% 20%, rgba(24, 27, 57, 0.1) 0%, transparent 50%)"
                },
                {
                  icon: ShieldCheckIcon,
                  title: "راحة البال الكاملة",
                  subtitle: "ثقة مطلقة",
                  description: "هل تقلق من التعطل في عرض البحر؟ مع ضمان توهاتسو الشامل ودعم الخدمة على مدار الساعة، أنت في أمان تام.",
                  benefits: [
                    "ضمان شامل لـ 3 سنوات",
                    "شبكة خدمة في جميع أنحاء المملكة",
                    "دعم فني 24/7",
                    "تدريب مجاني على الاستخدام"
                  ],
                  gradient: "from-slate-600 via-slate-500 to-slate-400",
                  accentColor: "text-[#c2b280]",
                  bgPattern: "radial-gradient(circle at 50% 50%, rgba(194, 178, 128, 0.1) 0%, transparent 70%)"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100/50 overflow-hidden"
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Dynamic background pattern */}
                  <div 
                    className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                    style={{ background: value.bgPattern }}
                  />
                  
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
                  
                  <div className="relative z-10 p-8 text-right h-full flex flex-col">
                    {/* Icon with enhanced animation */}
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 mr-auto shadow-lg relative overflow-hidden`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.6 }
                      }}
                    >
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <value.icon className="w-10 h-10 text-white relative z-10" />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      <motion.h3 
                        className="text-2xl lg:text-3xl font-bold text-[#181b39] mb-2 group-hover:text-[#181b39]/90 transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        {value.title}
                      </motion.h3>
                      
                      <motion.h4 
                        className={`text-lg font-semibold ${value.accentColor} mb-4 opacity-80`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.8 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {value.subtitle}
                      </motion.h4>
                      
                      <motion.p 
                        className="text-gray-600 leading-relaxed text-lg mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        {value.description}
                      </motion.p>
                      
                      {/* Benefits list with enhanced styling */}
                      <motion.div 
                        className="space-y-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      >
                        {value.benefits.map((benefit, benefitIndex) => (
                          <motion.div
                            key={benefitIndex}
                            className="flex items-center justify-end group/item"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              delay: 0.6 + index * 0.1 + benefitIndex * 0.1, 
                              duration: 0.4 
                            }}
                          >
                            <span className="text-gray-700 font-medium text-sm lg:text-base group-hover/item:text-[#181b39] transition-colors duration-300">
                              {benefit}
                            </span>
                            <motion.div
                              className="mr-3 flex-shrink-0"
                              whileHover={{ scale: 1.2 }}
                              transition={{ duration: 0.2 }}
                            >
                              <CheckCircleIcon className={`w-5 h-5 ${value.accentColor} opacity-80 group-hover/item:opacity-100 transition-opacity duration-300`} />
                            </motion.div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                    
                    {/* Subtle bottom accent */}
                    <motion.div 
                      className={`w-16 h-1 bg-gradient-to-l ${value.gradient} rounded-full mr-auto mt-6 opacity-60 group-hover:opacity-100 group-hover:w-24 transition-all duration-500`}
                      initial={{ width: 0 }}
                      whileInView={{ width: 64 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Enhanced CTA Section */}
            <motion.div 
              className="text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Background decoration for CTA */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#181b39]/5 via-[#c2b280]/5 to-[#181b39]/5 rounded-3xl blur-xl" />
              
              <motion.div 
                className="relative bg-white/60 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-8 lg:p-12"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="text-3xl lg:text-4xl font-bold bg-gradient-to-l from-[#181b39] to-[#c2b280] bg-clip-text text-transparent mb-6"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                >
                  جرب الفرق بنفسك
                </motion.h3>
                
                <motion.p 
                  className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  احجز اختبار قيادة مجاني أو استشارة مع خبرائنا لتكتشف لماذا يختار المحترفون توهاتسو
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  variants={staggerChildren}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.a
                    href="/test-drive"
                    className="group bg-gradient-to-l from-[#c2b280] to-[#181b39] hover:from-[#c2b280]/90 hover:to-[#181b39]/90 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 inline-flex items-center shadow-lg relative overflow-hidden"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                    <motion.div
                      className="mr-3 relative z-10"
                      animate={{ 
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <TruckIcon className="w-6 h-6" />
                    </motion.div>
                    <span className="relative z-10">احجز اختبار قيادة مجاني</span>
                  </motion.a>
                  
                  <motion.a
                    href="/contact"
                    className="group bg-white/80 backdrop-blur-sm hover:bg-white text-[#181b39] border-2 border-[#181b39]/20 hover:border-[#c2b280] font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 inline-flex items-center relative overflow-hidden"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="mr-3"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <PhoneIcon className="w-6 h-6" />
                    </motion.div>
                    تحدث مع خبير
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Prominent CTA Block */}
        <motion.section 
          className="py-24 bg-gradient-to-bl from-[#181b39] via-[#181b39]/95 to-[#181b39]/90 text-white relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          dir="rtl"
        >
          {/* Subtle animated background elements */}
          <div className="absolute inset-0">
            {ctaParticles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-20 h-20 border border-white/10 rounded-full"
                style={{
                  right: `${particle.right}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
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
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              هل أنت مستعد للانطلاق؟
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              سواء كنت تبحث عن محرك جديد، تحتاج إلى صيانة، أو ترغب في معرفة المزيد، 
              نحن هنا لمساعدتك في كل خطوة من رحلتك البحرية.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/dealer-locator"
                className="group bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 inline-flex items-center border border-white/20 shadow-lg"
                {...scaleOnHover}
              >
                <motion.div
                  className="mr-3"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <MapIcon className="w-6 h-6" />
                </motion.div>
                ابحث عن وكيل
              </motion.a>
              
              <motion.a
                href="/quote"
                className="group bg-gradient-to-l from-[#c2b280] to-[#c2b280]/80 hover:from-[#c2b280]/90 hover:to-[#c2b280]/70 text-[#181b39] font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 inline-flex items-center shadow-lg"
                {...scaleOnHover}
              >
                <motion.div
                  className="mr-3"
                  animate={{ 
                    y: [0, -2, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <EnvelopeIcon className="w-6 h-6" />
                </motion.div>
                اطلب عرض سعر
              </motion.a>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
