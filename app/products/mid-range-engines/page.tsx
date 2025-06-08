'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useParticles } from '../../utils/particlePositions'
import { useLanguage } from '../../contexts/LanguageContext'
import { 
  PaperAirplaneIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CogIcon,
  BoltIcon,
  PowerIcon,
  PhoneIcon,
  TagIcon,
  SparklesIcon,
  FireIcon,
  WrenchScrewdriverIcon,
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
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  whileTap: { scale: 0.95 }
}

type EngineKey = '25hp' | '40hp' | '60hp' | '90hp'

interface EngineData {
  name: string
  power: string
  type: string
  weight: string
  displacement: string
  fuel: string
  features: string[]
  ideal: string
}

interface ContentData {
  pageTitle: string
  powerRange: string
  heroDescription: string
  heroBadges: string[]
  featuresTitle: string
  features: Array<{
    title: string
    description: string
  }>
  engineSelectorTitle: string
  engines: Record<EngineKey, EngineData>
  specLabels: {
    type: string
    weight: string
    displacement: string
    fuelTank: string
  }
  keyFeatures: string
  idealFor: string
  inquireNow: string
  requestQuote: string
  ctaTitle: string
  ctaDescription: string
  consultExperts: string
  browseOther: string
}

export default function MidRangeEnginesPage() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const [selectedEngine, setSelectedEngine] = useState<EngineKey>('25hp')
  const { language, isRTL } = useLanguage()

  // Use consistent particle positions to prevent hydration errors
  const heroParticles = useParticles(20, 'mid-range-hero')
  const ctaParticles = useParticles(15, 'mid-range-cta')

  const content: Record<'ar' | 'en', ContentData> = {
    ar: {
      pageTitle: 'المحركات المتوسطة',
      powerRange: '25 - 90 حصان',
      heroDescription: 'الأداء المثالي لمغامراتك المتنوعة. التوازن المثالي بين القوة والكفاءة للتطبيقات المتعددة',
      heroBadges: [
        '🏆 أداء متوازن وموثوق',
        '⚡ كفاءة عالية في الوقود',
        '🛡️ تكنولوجيا يابانية متطورة'
      ],
      featuresTitle: 'مزايا المحركات المتوسطة',
      features: [
        {
          title: 'قوة متطورة',
          description: 'أداء قوي ومتوازن مثالي للقوارب المتوسطة والكبيرة'
        },
        {
          title: 'تقنيات ذكية',
          description: 'أنظمة تحكم إلكترونية متطورة وحقن وقود دقيق'
        },
        {
          title: 'موثوقية عالية',
          description: 'أنظمة حماية متطورة وأداء ثابت في جميع الظروف'
        },
        {
          title: 'صيانة سهلة',
          description: 'تصميم عملي يسهل الوصول للمكونات والصيانة الدورية'
        }
      ],
      engineSelectorTitle: 'اختر المحرك المناسب لك',
      engines: {
        '25hp': {
          name: 'توهاتسو 25 حصان',
          power: '25 حصان',
          type: '4 أشواط',
          weight: '55 كجم',
          displacement: '526 سم³',
          fuel: '25 لتر',
          features: ['قوة متوازنة وكفاءة عالية', 'تحكم دقيق في السرعة', 'نظام تبريد متطور', 'صيانة سهلة'],
          ideal: 'القوارب من 4-6 أمتار والتطبيقات التجارية'
        },
        '40hp': {
          name: 'توهاتسو 40 حصان',
          power: '40 حصان',
          type: '4 أشواط',
          weight: '85 كجم',
          displacement: '747 سم³',
          fuel: '25 لتر',
          features: ['أداء قوي للقوارب المتوسطة', 'تقنية حقن الوقود الإلكتروني', 'نظام إنذار متطور', 'تشغيل موثوق'],
          ideal: 'قوارب الصيد التجارية وقوارب النزهة'
        },
        '60hp': {
          name: 'توهاتسو 60 حصان',
          power: '60 حصان',
          type: '4 أشواط',
          weight: '112 كجم',
          displacement: '996 سم³',
          fuel: '25 لتر',
          features: ['عزم دوران عالي', 'نظام تحكم إلكتروني', 'كفاءة ممتازة في الوقود', 'تبريد بضغط الماء'],
          ideal: 'القوارب الرياضية والتجارية المتوسطة'
        },
        '90hp': {
          name: 'توهاتسو 90 حصان',
          power: '90 حصان',
          type: '4 أشواط',
          weight: '150 كجم',
          displacement: '1351 سم³',
          fuel: '25 لتر',
          features: ['أقوى محرك في الفئة المتوسطة', 'تقنية حقن متطورة', 'أداء سرعة فائق', 'نظام حماية شامل'],
          ideal: 'القوارب الكبيرة والتطبيقات المهنية'
        }
      },
      specLabels: {
        type: 'النوع',
        weight: 'الوزن',
        displacement: 'السعة',
        fuelTank: 'خزان الوقود'
      },
      keyFeatures: 'الميزات الرئيسية',
      idealFor: 'مثالي لـ:',
      inquireNow: 'استفسر الآن',
      requestQuote: 'اطلب عرض سعر',
      ctaTitle: 'القوة المثالية لمغامراتك',
      ctaDescription: 'اختر المحرك المتوسط المثالي واستمتع بالتوازن المثالي بين القوة والكفاءة. فريق الخبراء لدينا جاهز لإرشادك للخيار الأنسب.',
      consultExperts: 'استشر خبراءنا',
      browseOther: 'تصفح المحركات الأخرى'
    },
    en: {
      pageTitle: 'Mid-Range Engines',
      powerRange: '25 - 90 HP',
      heroDescription: 'Perfect performance for your diverse adventures. Ideal balance between power and efficiency for multiple applications',
      heroBadges: [
        '🏆 Balanced and reliable performance',
        '⚡ High fuel efficiency',
        '🛡️ Advanced Japanese technology'
      ],
      featuresTitle: 'Mid-Range Engine Advantages',
      features: [
        {
          title: 'Advanced Power',
          description: 'Powerful and balanced performance ideal for medium and large boats'
        },
        {
          title: 'Smart Technologies',
          description: 'Advanced electronic control systems and precise fuel injection'
        },
        {
          title: 'High Reliability',
          description: 'Advanced protection systems and consistent performance in all conditions'
        },
        {
          title: 'Easy Maintenance',
          description: 'Practical design that facilitates component access and routine maintenance'
        }
      ],
      engineSelectorTitle: 'Choose the Right Engine for You',
      engines: {
        '25hp': {
          name: 'Tohatsu 25 HP',
          power: '25 HP',
          type: '4-Stroke',
          weight: '55 kg',
          displacement: '526 cc',
          fuel: '25 L',
          features: ['Balanced power and high efficiency', 'Precise speed control', 'Advanced cooling system', 'Easy maintenance'],
          ideal: 'Boats from 4-6 meters and commercial applications'
        },
        '40hp': {
          name: 'Tohatsu 40 HP',
          power: '40 HP',
          type: '4-Stroke',
          weight: '85 kg',
          displacement: '747 cc',
          fuel: '25 L',
          features: ['Powerful performance for medium boats', 'Electronic fuel injection technology', 'Advanced warning system', 'Reliable operation'],
          ideal: 'Commercial fishing boats and pleasure boats'
        },
        '60hp': {
          name: 'Tohatsu 60 HP',
          power: '60 HP',
          type: '4-Stroke',
          weight: '112 kg',
          displacement: '996 cc',
          fuel: '25 L',
          features: ['High torque', 'Electronic control system', 'Excellent fuel efficiency', 'Water pressure cooling'],
          ideal: 'Medium sport and commercial boats'
        },
        '90hp': {
          name: 'Tohatsu 90 HP',
          power: '90 HP',
          type: '4-Stroke',
          weight: '150 kg',
          displacement: '1351 cc',
          fuel: '25 L',
          features: ['Most powerful mid-range engine', 'Advanced injection technology', 'Superior speed performance', 'Comprehensive protection system'],
          ideal: 'Large boats and professional applications'
        }
      },
      specLabels: {
        type: 'Type',
        weight: 'Weight',
        displacement: 'Displacement',
        fuelTank: 'Fuel Tank'
      },
      keyFeatures: 'Key Features',
      idealFor: 'Ideal for:',
      inquireNow: 'Inquire Now',
      requestQuote: 'Request Quote',
      ctaTitle: 'Perfect Power for Your Adventures',
      ctaDescription: 'Choose your ideal mid-range engine and enjoy perfect balance between power and efficiency. Our expert team is ready to guide you to the most suitable option.',
      consultExperts: 'Consult Our Experts',
      browseOther: 'Browse Other Engines'
    }
  }

  const currentContent = content[language]

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
          {/* Enhanced Background with proper layering */}
          <div className="absolute inset-0">
            <motion.img
              src="/products/mid/tohatsu90.png"
              alt="Tohatsu Mid-Range Engines"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "linear" }}
            />
            {/* Elegant overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-bl from-[#181b39]/60 via-[#181b39]/40 to-[#c2b280]/20" />
          </div>
          
          {/* Floating particles animation */}
          <div className="absolute inset-0 overflow-hidden z-10">
            {heroParticles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  [isRTL ? 'left' : 'right']: `${particle.right}%`,
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
            className="relative z-20 bg-black/20 backdrop-blur-lg border border-white/10 p-12 rounded-3xl max-w-5xl mx-4 text-center shadow-2xl"
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
                className={isRTL ? "ml-4" : "mr-4"}
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <PaperAirplaneIcon className="w-16 h-16 text-[#c2b280]" />
              </motion.div>
              <div className={`text-${isRTL ? 'right' : 'left'}`}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  {currentContent.pageTitle}
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#c2b280]">
                  {currentContent.powerRange}
                </h2>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-xl sm:text-2xl mb-8 leading-relaxed opacity-90"
              initial={{ y: 30, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {currentContent.heroDescription}
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm"
              initial={{ y: 30, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {currentContent.heroBadges.map((badge, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  {badge}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Key Features Section */}
        <motion.section 
          className="py-20 bg-gradient-to-bl from-gray-50 to-white relative overflow-hidden"
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
                  className={isRTL ? "ml-4" : "mr-4"}
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <SparklesIcon className="w-12 h-12 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#181b39]">
                  {currentContent.featuresTitle}
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
              {currentContent.features.map((feature, index) => {
                const icons = [FireIcon, BoltIcon, ShieldCheckIcon, WrenchScrewdriverIcon]
                const colors = [
                  "from-[#181b39] to-[#181b39]/80",
                  "from-[#c2b280] to-[#c2b280]/80",
                  "from-slate-600 to-slate-700",
                  "from-slate-500 to-slate-600"
                ]
                const FeatureIcon = icons[index]
                return (
                  <motion.div
                    key={index}
                    className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden p-8 text-center"
                    variants={fadeInUp}
                    {...scaleOnHover}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-bl ${colors[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-bl ${colors[index]} rounded-2xl mx-auto mb-6 flex items-center justify-center relative`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <FeatureIcon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-[#181b39] mb-4 group-hover:text-[#c2b280] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                )
              })}
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
                  className={isRTL ? "ml-4" : "mr-4"}
                  animate={{ 
                    rotateY: [0, 180, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <CogIcon className="w-12 h-12 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#181b39]">
                  {currentContent.engineSelectorTitle}
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
              {(Object.keys(currentContent.engines) as EngineKey[]).map((key) => (
                <motion.button
                  key={key}
                  className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                    selectedEngine === key
                      ? 'bg-gradient-to-l from-[#c2b280] to-[#181b39] text-white shadow-lg'
                      : 'bg-white text-[#181b39] hover:bg-gray-50 shadow-md'
                  }`}
                  onClick={() => setSelectedEngine(key)}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentContent.engines[key].power}
                </motion.button>
              ))}
            </motion.div>

            {/* Selected Engine Display */}
            <motion.div 
              key={selectedEngine}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-96 lg:h-auto bg-gradient-to-bl from-gray-100 to-gray-200 flex items-center justify-center">
                  <motion.img
                    src={`/products/mid/tohatsu${selectedEngine.replace('hp', '')}.png`}
                    alt={currentContent.engines[selectedEngine].name}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'}`}>
                    <motion.div
                      className="bg-[#c2b280] text-white px-4 py-2 rounded-full font-bold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {currentContent.engines[selectedEngine].power}
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
                    {currentContent.engines[selectedEngine].name}
                  </motion.h3>

                  <motion.div 
                    className="grid grid-cols-2 gap-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">{currentContent.specLabels.type}</div>
                      <div className="font-bold text-[#181b39]">{currentContent.engines[selectedEngine].type}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">{currentContent.specLabels.weight}</div>
                      <div className="font-bold text-[#181b39]">{currentContent.engines[selectedEngine].weight}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">{currentContent.specLabels.displacement}</div>
                      <div className="font-bold text-[#181b39]">{currentContent.engines[selectedEngine].displacement}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">{currentContent.specLabels.fuelTank}</div>
                      <div className="font-bold text-[#181b39]">{currentContent.engines[selectedEngine].fuel}</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <h4 className="text-xl font-bold text-[#181b39] mb-4">{currentContent.keyFeatures}</h4>
                    <div className="space-y-3">
                      {currentContent.engines[selectedEngine].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center"
                          initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                        >
                          <CheckCircleIcon className={`w-5 h-5 text-green-500 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="bg-gradient-to-l from-[#c2b280]/10 to-[#FFD700]/10 rounded-xl p-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <h4 className="text-lg font-bold text-[#181b39] mb-2">{currentContent.idealFor}</h4>
                    <p className="text-gray-700">{currentContent.engines[selectedEngine].ideal}</p>
                  </motion.div>

                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <motion.a
                      href="/contact"
                      className="flex-1 bg-gradient-to-l from-[#c2b280] to-[#181b39] text-white font-bold py-3 px-6 rounded-xl text-center transition-all duration-300 inline-flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <PhoneIcon className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {currentContent.inquireNow}
                    </motion.a>
                    <motion.a
                      href="/quote"
                      className="flex-1 bg-gradient-to-l from-[#c2b280] to-[#FFD700] text-[#181b39] font-bold py-3 px-6 rounded-xl text-center transition-all duration-300 inline-flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <TagIcon className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {currentContent.requestQuote}
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section 
          className="py-24 bg-gradient-to-bl from-[#181b39] via-[#181b39]/90 to-[#c2b280]/20 text-white relative overflow-hidden"
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
                  [isRTL ? 'left' : 'right']: `${particle.right}%`,
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
                  className={isRTL ? "ml-4" : "mr-4"}
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <PowerIcon className="w-16 h-16 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-bold">
                  {currentContent.ctaTitle}
                </h2>
              </motion.div>
              
              <motion.p 
                className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90"
                variants={fadeInUp}
              >
                {currentContent.ctaDescription}
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                variants={fadeInUp}
              >
                <motion.a
                  href="/contact"
                  className="bg-gradient-to-l from-[#c2b280] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFE680] text-[#181b39] font-bold py-4 px-10 rounded-2xl text-xl transition-all duration-300 inline-flex items-center shadow-2xl"
                  {...scaleOnHover}
                >
                  <motion.div
                    className={isRTL ? "ml-3" : "mr-3"}
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <PhoneIcon className="w-6 h-6" />
                  </motion.div>
                  {currentContent.consultExperts}
                </motion.a>
                
                <motion.a
                  href="/products"
                  className="bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-bold py-4 px-10 rounded-2xl text-xl transition-all duration-300 inline-flex items-center border border-white/20 shadow-2xl"
                  {...scaleOnHover}
                >
                  <motion.div
                    className={isRTL ? "ml-3" : "mr-3"}
                    animate={{ 
                      x: isRTL ? [0, -5, 0] : [0, 5, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRightIcon className="w-6 h-6" />
                  </motion.div>
                  {currentContent.browseOther}
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
