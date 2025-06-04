'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useParticles } from '../../utils/particlePositions'
import { 
  ArrowRightIcon,
  BoltIcon,
  CogIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  StarIcon,
  PaperAirplaneIcon,
  TrophyIcon,
  PowerIcon,
  PhoneIcon,
  TagIcon,
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

export default function HighPowerEnginesPage() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const [selectedEngine, setSelectedEngine] = useState('100hp')
  
  // Use consistent particle positions to prevent hydration errors
  const heroParticles = useParticles(8, 'high-power-hero')
  const ctaParticles = useParticles(12, 'high-power-cta')

  const engines: Record<string, {
    name: string;
    power: string;
    type: string;
    weight: string;
    displacement: string;
    fuel: string;
    features: string[];
    ideal: string;
    image: string;
  }> = {
    '100hp': {
      name: 'توهاتسو 100 حصان',
      power: '100 حصان',
      type: '4 أشواط',
      weight: '165 كجم',
      displacement: '1496 سم³',
      fuel: '93 لتر',
      features: ['قوة استثنائية للقوارب الكبيرة', 'نظام حقن إلكتروني متطور', 'تحكم رقمي دقيق', 'نظام تبريد فائق'],
      ideal: 'القوارب الرياضية الكبيرة والاستخدامات التجارية المتقدمة',
      image: '/products/high/tohatsu100.jpeg'
    },
    '115hp': {
      name: 'توهاتسو 115 حصان',
      power: '115 حصان',
      type: '4 أشواط',
      weight: '175 كجم',
      displacement: '1496 سم³',
      fuel: '93 لتر',
      features: ['أداء متميز للسرعات العالية', 'تقنية VTEC المتقدمة', 'نظام حماية ذكي', 'كفاءة وقود ممتازة'],
      ideal: 'القوارب الرياضية والسباقات المائية',
      image: '/products/high/tohatsu115.jpeg'
    },
    '140hp': {
      name: 'توهاتسو 140 حصان',
      power: '140 حصان',
      type: '4 أشواط',
      weight: '190 كجم',
      displacement: '2354 سم³',
      fuel: '93 لتر',
      features: ['أقوى محركات توهاتسو', 'عزم دوران فائق', 'تقنيات سباقات متطورة', 'أداء لا يضاهى'],
      ideal: 'القوارب الرياضية المتقدمة والاستخدامات المهنية الشاقة',
      image: '/products/high/tohatsu140.jpeg'
    }
  }

  return (
    <div dir="rtl" className="font-sans">
      <Header />

      <main>
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative min-h-[80vh] flex items-center justify-center text-white overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          dir="rtl"
        >
          {/* Enhanced Background with proper layering */}
          <div className="absolute inset-0">
            <motion.img
              src="/products/high/tohatsu140.jpeg"
              alt="Tohatsu High Power Engines"
              className="w-full h-full object-cover"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "linear" }}
            />
            {/* Elegant overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-bl from-[#181b39]/60 via-[#181b39]/40 to-[#c2b280]/20" />
          </div>
          
          {/* Floating particles animation */}
          <div className="absolute inset-0 overflow-hidden z-10">
            {heroParticles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                style={{
                  right: `${particle.right}%`,
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

          <motion.div 
            className="relative z-20 bg-black/20 backdrop-blur-lg border border-white/10 p-12 rounded-3xl max-w-5xl mx-4 text-center shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={isHeroInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.div
                className="ml-4"
                animate={{ 
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <PaperAirplaneIcon className="w-16 h-16 text-[#c2b280]" />
              </motion.div>
              <div className="text-right">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  المحركات عالية القوة
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#c2b280]">
                  100 - 140 حصان
                </h2>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-xl sm:text-2xl mb-8 leading-relaxed opacity-90"
              initial={{ y: 20, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              قوة استثنائية لأكبر تحدياتك. أداء لا يتنازل للقوارب الأكبر والمغامرات الأكثر جرأة
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                🔥 قوة فائقة
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                🏆 أداء متطور
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                🛡️ موثوقية يابانية
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Key Features Section */}
        <motion.section 
          className="py-20 bg-gradient-to-bl from-slate-50 to-white relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          dir="rtl"
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
                  className="ml-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <TrophyIcon className="w-12 h-12 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#181b39]">
                  مزايا المحركات عالية القوة
                </h2>
              </motion.div>
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
                  icon: PowerIcon,
                  title: "قوة استثنائية",
                  description: "أداء فائق يوفر القوة اللازمة للقوارب الكبيرة والسرعات العالية",
                  color: "from-[#181b39] to-[#181b39]/80"
                },
                {
                  icon: BoltIcon,
                  title: "تقنيات متطورة",
                  description: "أحدث التقنيات في الحقن الإلكتروني والتحكم الرقمي",
                  color: "from-[#c2b280] to-[#c2b280]/80"
                },
                {
                  icon: ShieldCheckIcon,
                  title: "حماية فائقة",
                  description: "أنظمة حماية متقدمة لضمان التشغيل الآمن تحت الأحمال العالية",
                  color: "from-slate-600 to-slate-700"
                },
                {
                  icon: StarIcon,
                  title: "كفاءة متقدمة",
                  description: "توازن مثالي بين القوة الفائقة والكفاءة في استهلاك الوقود",
                  color: "from-slate-500 to-slate-600"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100 relative overflow-hidden p-8 text-center"
                  variants={fadeInUp}
                  {...scaleOnHover}
                >
                  <div className={`absolute inset-0 bg-gradient-to-bl ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-bl ${feature.color} rounded-xl mx-auto mb-6 flex items-center justify-center relative`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-[#181b39] mb-4 group-hover:text-[#181b39]/80 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Interactive Engine Selector */}
        <motion.section 
          className="py-20 bg-gradient-to-bl from-gray-100 via-gray-50 to-white relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          dir="rtl"
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
                  className="ml-4"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <CogIcon className="w-12 h-12 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#181b39]">
                  اختر محرك القوة الفائقة
                </h2>
              </motion.div>
            </motion.div>

            {/* Engine Selector Tabs */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {Object.keys(engines).map((key) => (
                <motion.button
                  key={key}
                  className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                    selectedEngine === key
                      ? 'bg-gradient-to-l from-[#c2b280] to-[#c2b280]/80 text-[#181b39] shadow-lg scale-105'
                      : 'bg-white text-[#181b39] hover:bg-gray-50 shadow-md'
                  }`}
                  onClick={() => setSelectedEngine(key)}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {engines[key].power}
                </motion.button>
              ))}
            </motion.div>

            {/* Selected Engine Display */}
            <motion.div 
              key={selectedEngine}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-96 lg:h-auto bg-gradient-to-bl from-gray-100 to-gray-200 flex items-center justify-center">
                  <motion.img
                    src={engines[selectedEngine].image}
                    alt={engines[selectedEngine].name}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute top-6 right-6">
                    <motion.div
                      className="bg-gradient-to-l from-[#c2b280] to-[#c2b280]/80 text-[#181b39] px-6 py-3 rounded-full font-bold text-lg shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                    >
                      {engines[selectedEngine].power}
                    </motion.div>
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <motion.h3 
                    className="text-3xl font-bold text-[#181b39] mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {engines[selectedEngine].name}
                  </motion.h3>

                  <motion.div 
                    className="grid grid-cols-2 gap-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="bg-gradient-to-bl from-slate-50 to-slate-100 rounded-xl p-4 border border-gray-200">
                      <div className="text-sm text-gray-600 mb-1">النوع</div>
                      <div className="font-bold text-[#181b39] text-lg">{engines[selectedEngine].type}</div>
                    </div>
                    <div className="bg-gradient-to-bl from-slate-50 to-slate-100 rounded-xl p-4 border border-gray-200">
                      <div className="text-sm text-gray-600 mb-1">الوزن</div>
                      <div className="font-bold text-[#181b39] text-lg">{engines[selectedEngine].weight}</div>
                    </div>
                    <div className="bg-gradient-to-bl from-slate-50 to-slate-100 rounded-xl p-4 border border-gray-200">
                      <div className="text-sm text-gray-600 mb-1">السعة</div>
                      <div className="font-bold text-[#181b39] text-lg">{engines[selectedEngine].displacement}</div>
                    </div>
                    <div className="bg-gradient-to-bl from-slate-50 to-slate-100 rounded-xl p-4 border border-gray-200">
                      <div className="text-sm text-gray-600 mb-1">خزان الوقود</div>
                      <div className="font-bold text-[#181b39] text-lg">{engines[selectedEngine].fuel}</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <h4 className="text-xl font-bold text-[#181b39] mb-4">المميزات المتطورة</h4>
                    <div className="space-y-3">
                      {engines[selectedEngine].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                        >
                          <CheckCircleIcon className="w-6 h-6 text-[#c2b280] ml-3" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="bg-gradient-to-l from-[#c2b280]/20 to-[#c2b280]/20 border-2 border-[#c2b280] rounded-xl p-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <h4 className="text-lg font-bold text-[#181b39] mb-2">مثالي لـ:</h4>
                    <p className="text-gray-700 font-medium">{engines[selectedEngine].ideal}</p>
                  </motion.div>

                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <motion.a
                      href="/contact"
                      className="flex-1 bg-gradient-to-l from-[#c2b280] to-[#c2b280]/80 text-[#181b39] font-bold py-4 px-8 rounded-xl text-center transition-all duration-300 inline-flex items-center justify-center text-lg shadow-lg"
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(194, 178, 128, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <PhoneIcon className="w-5 h-5 ml-2" />
                      استشارة متخصصة
                    </motion.a>
                    <motion.a
                      href="/quote"
                      className="flex-1 bg-[#181b39] hover:bg-[#181b39]/90 text-white font-bold py-4 px-8 rounded-xl text-center transition-all duration-300 inline-flex items-center justify-center text-lg shadow-lg"
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(28, 27, 49, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <TagIcon className="w-5 h-5 ml-2" />
                      عرض سعر خاص
                    </motion.a>
                  </motion.div>
                </div>
              </div>
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
          dir="rtl"
        >
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
                  className="ml-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <PowerIcon className="w-16 h-16 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-bold">
                  القوة الفائقة في انتظارك
                </h2>
              </motion.div>
              
              <motion.p 
                className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90"
                variants={fadeInUp}
              >
                استكشف حدود الإمكانيات مع محركاتنا عالية القوة. 
                مصممة للمحترفين والمغامرين الذين لا يقبلون بأقل من الأفضل.
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
                    className="mr-3"
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <PhoneIcon className="w-6 h-6" />
                  </motion.div>
                  تحدث مع الخبراء
                </motion.a>
                
                <motion.a
                  href="/products"
                  className="bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-bold py-4 px-10 rounded-xl text-xl transition-all duration-300 inline-flex items-center border border-white/20 shadow-lg"
                  {...scaleOnHover}
                >
                  <motion.div
                    className="mr-3"
                    animate={{ 
                      x: [0, 5, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRightIcon className="w-6 h-6" />
                  </motion.div>
                  استكشف المزيد
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
