'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useParticles } from '../../utils/particlePositions'
import { useLanguage } from '../../contexts/LanguageContext'
import { 
  ArrowRightIcon,
  BoltIcon,
  CogIcon,
  ScaleIcon,
  FireIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  ChartBarIcon,
  BeakerIcon,
  PhoneIcon,
  TagIcon,
  PaperAirplaneIcon,
  PowerIcon,
  // Removed: StarIcon, TrophyIcon
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

export default function PortableEnginesPage() {
  const { language, isRTL } = useLanguage()
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const [selectedEngine, setSelectedEngine] = useState('2.5hp')

  // Use consistent particle positions to prevent hydration errors
  const heroParticles = useParticles(20, 'portable-hero')
  const ctaParticles = useParticles(15, 'portable-cta')

  const translations = {
    ar: {
      title: 'المحركات المحمولة',
      subtitle: '2.5 - 20 حصان',
      description: 'قوة مضغوطة، مرونة مطلقة. محركات خفيفة الوزن مصممة للنقل السهل والأداء الموثوق',
      heroFeatures: {
        transport: '🏆 سهولة النقل والتركيب',
        efficiency: '⚡ كفاءة عالية في الوقود',
        reliability: '🛡️ الموثوقية اليابانية'
      },
      advantagesTitle: 'مزايا المحركات المحمولة',
      advantagesDesc: 'اكتشف لماذا تعتبر محركات توهاتسو المحمولة الخيار الأمثل للقوارب الصغيرة والمتوسطة',
      advantages: [
        {
          title: 'خفة وزن استثنائية',
          description: 'تصميم مضغوط وخفيف الوزن يجعل النقل والتركيب سهلاً دون معدات خاصة'
        },
        {
          title: 'كفاءة عالية في الوقود',
          description: 'تقنية 4 أشواط المتقدمة توفر استهلاك وقود منخفض ورحلات أطول'
        },
        {
          title: 'تشغيل موثوق',
          description: 'إقلاع سهل وأداء ثابت في جميع الظروف البحرية'
        },
        {
          title: 'صيانة بسيطة',
          description: 'تصميم ذكي يتيح الوصول السهل للمكونات والصيانة الدورية البسيطة'
        }
      ],
      selectorTitle: 'اختر المحرك المناسب',
      selectorDesc: 'اكتشف مواصفات وقدرات كل محرك لتجد المحرك المثالي لقاربك',
      specifications: 'المواصفات التقنية',
      power: 'القوة',
      type: 'النوع',
      weight: 'الوزن',
      displacement: 'الإزاحة',
      fuelCapacity: 'سعة الوقود',
      features: 'المميزات',
      idealFor: 'مثالي لـ',
      contactCTA: 'احصل على عرض سعر',
      contactDesc: 'تواصل معنا للحصول على أفضل الأسعار والمشورة المهنية',
      advancedTechTitle: 'التقنيات المتقدمة',
      advancedTechDesc: 'اكتشف التقنيات المبتكرة التي تجعل محركاتنا المحمولة الأكثر كفاءة وموثوقية',
      readyTitle: 'جاهز للانطلاق؟',
      readyDesc: 'اختر محركك المحمول المثالي وابدأ مغامراتك البحرية اليوم. فريقنا من الخبراء جاهز لمساعدتك في اختيار المحرك المناسب لاحتياجاتك.',
      consultExperts: 'استشر خبراءنا',
      browseEngines: 'تصفح المحركات الأخرى',
      advancedTech: [
        {
          title: 'تقنية 4 أشواط المتقدمة',
          description: 'محركات عالية الكفاءة بـ 4 أشواط توفر قوة استثنائية مع استهلاك وقود منخفض وانبعاثات مخفضة.',
          features: ['توفير 40% في الوقود', 'تشغيل أكثر هدوءاً', 'عزم دوران عالي', 'عمر أطول للمحرك']
        },
        {
          title: 'نظام الحماية الذكي',
          description: 'أنظمة حماية متقدمة تضمن التشغيل الآمن والموثوق في جميع الظروف البحرية القاسية.',
          features: ['حماية من السخونة الزائدة', 'تحذير انخفاض الزيت', 'حماية من الصدمات', 'مقاومة التآكل']
        },
        {
          title: 'الأداء المحسّن',
          description: 'تصميم محسّن للمروحة والتبريد يضمن أقصى أداء مع الحفاظ على درجات حرارة مثلى.',
          features: ['تبريد فعال', 'تسارع سريع', 'استجابة فورية', 'أداء ثابت']
        },
        {
          title: 'الكفاءة الاقتصادية',
          description: 'تقنيات إدارة الوقود والصيانة المتقدمة تحافظ على تكاليف التشغيل في أدنى مستوياتها.',
          features: ['صيانة أقل تكراراً', 'قطع غيار متوفرة', 'عمر خدمة طويل', 'قيمة إعادة بيع عالية']
        }
      ]
    },
    en: {
      title: 'Portable Engines',
      subtitle: '2.5 - 20 HP',
      description: 'Compact power, absolute flexibility. Lightweight engines designed for easy transport and reliable performance',
      heroFeatures: {
        transport: '🏆 Easy transport and installation',
        efficiency: '⚡ High fuel efficiency',
        reliability: '🛡️ Japanese reliability'
      },
      advantagesTitle: 'Portable Engine Advantages',
      advantagesDesc: 'Discover why Tohatsu portable engines are the optimal choice for small and medium boats',
      advantages: [
        {
          title: 'Exceptional Lightweight',
          description: 'Compact and lightweight design makes transport and installation easy without special equipment'
        },
        {
          title: 'High Fuel Efficiency',
          description: 'Advanced 4-stroke technology provides low fuel consumption and longer trips'
        },
        {
          title: 'Reliable Operation',
          description: 'Easy starting and consistent performance in all marine conditions'
        },
        {
          title: 'Simple Maintenance',
          description: 'Smart design allows easy access to components and simple routine maintenance'
        }
      ],
      selectorTitle: 'Choose the Right Engine',
      selectorDesc: 'Explore specifications and capabilities of each engine to find the perfect match for your boat',
      specifications: 'Technical Specifications',
      power: 'Power',
      type: 'Type',
      weight: 'Weight',
      displacement: 'Displacement',
      fuelCapacity: 'Fuel Capacity',
      features: 'Features',
      idealFor: 'Ideal For',
      contactCTA: 'Get Quote',
      contactDesc: 'Contact us for the best prices and professional advice',
      advancedTechTitle: 'Advanced Technologies',
      advancedTechDesc: 'Explore the innovative technologies that make our portable engines the most efficient and reliable',
      readyTitle: 'Ready to Go?',
      readyDesc: 'Choose your ideal portable engine and start your marine adventures today. Our expert team is ready to help you select the right engine for your needs.',
      consultExperts: 'Consult Our Experts',
      browseEngines: 'Browse Other Engines',
      advancedTech: [
        {
          title: 'Advanced 4-Stroke Technology',
          description: 'High-efficiency 4-stroke engines provide exceptional power with low fuel consumption and reduced emissions.',
          features: ['40% fuel savings', 'Quieter operation', 'High torque', 'Longer engine life']
        },
        {
          title: 'Smart Protection System',
          description: 'Advanced protection systems ensure safe and reliable operation in all harsh marine conditions.',
          features: ['Overheat protection', 'Low oil warning', 'Impact protection', 'Corrosion resistance']
        },
        {
          title: 'Optimized Performance',
          description: 'Enhanced propeller and cooling design ensures maximum performance while maintaining optimal temperatures.',
          features: ['Efficient cooling', 'Quick acceleration', 'Instant response', 'Consistent performance']
        },
        {
          title: 'Economic Efficiency',
          description: 'Advanced fuel management and maintenance technologies keep operating costs at their lowest levels.',
          features: ['Less frequent maintenance', 'Available spare parts', 'Long service life', 'High resale value']
        }
      ]
    }
  }

  const enginesData = {
    ar: {
      '2.5hp': {
        name: 'توهاتسو 2.5 حصان',
        power: '2.5 حصان',
        type: '4 أشواط',
        weight: '12.7 كيلو',
        displacement: '139 سي سي',
        fuel: '1.1 لتر',
        features: ['قابلية نقل استثنائية', 'تشغيل فائق الهدوء', 'استهلاك وقود منخفض', 'إقلاع سهل'],
        ideal: 'القوارب المطاطية الصغيرة وقوارب الصيد خفيفة الوزن',
        image: '/products/portable/tohatsu2-5.jpeg'
      },
      '5hp': {
        name: 'توهاتسو 5 حصان',
        power: '5 حصان',
        type: '4 أشواط',
        weight: '26 كيلو',
        displacement: '139 سي سي',
        fuel: '1.1 لتر',
        features: ['توازن مثالي بين القوة والوزن', 'موثوقية عالية', 'صيانة سهلة', 'تشغيل اقتصادي'],
        ideal: 'القوارب الصغيرة إلى المتوسطة حتى 3.5 متر',
        image: '/products/portable/tohatsu5.jpeg'
      },
      '9.8hp': {
        name: 'توهاتسو 9.8 حصان',
        power: '9.8 حصان',
        type: '4 أشواط',
        weight: '39 كيلو',
        displacement: '230 سي سي',
        fuel: '5 لتر',
        features: ['قوة عالية بحجم مضغوط', 'خزان وقود مدمج', 'تقنية توفير الوقود', 'تحكم دقيق في السرعة'],
        ideal: 'قوارب الصيد المتوسطة والقوارب الترفيهية',
        image: '/products/portable/tohatsu9-8.jpeg'
      },
      '15hp': {
        name: 'توهاتسو 15 حصان',
        power: '15 حصان',
        type: '4 أشواط',
        weight: '45 كيلو',
        displacement: '351 سي سي',
        fuel: '12 لتر',
        features: ['أداء قوي وسلس', 'تبريد بالماء', 'نظام إشعال إلكتروني', 'مقبض تحكم مريح'],
        ideal: 'القوارب حتى 4.5 متر والاستخدام التجاري الخفيف',
        image: '/products/portable/tohatsu15.jpeg'
      },
      '20hp': {
        name: 'توهاتسو 20 حصان',
        power: '20 حصان',
        type: '4 أشواط',
        weight: '51 كيلو',
        displacement: '351 سي سي',
        fuel: '12 لتر',
        features: ['أقوى محرك محمول في فئته', 'عزم دوران عالي', 'تشغيل موثوق في جميع الظروف', 'خيارات تحكم متقدمة'],
        ideal: 'القوارب الكبيرة نسبياً والاستخدام المهني',
        image: '/products/portable/tohatsu20.jpeg'
      }
    },
    en: {
      '2.5hp': {
        name: 'Tohatsu 2.5 HP',
        power: '2.5 HP',
        type: '4-Stroke',
        weight: '12.7 kg',
        displacement: '139 cc',
        fuel: '1.1 L',
        features: ['Exceptional portability', 'Ultra-quiet operation', 'Low fuel consumption', 'Easy start'],
        ideal: 'Small inflatable boats and lightweight fishing boats',
        image: '/products/portable/tohatsu2-5.jpeg'
      },
      '5hp': {
        name: 'Tohatsu 5 HP',
        power: '5 HP',
        type: '4-Stroke',
        weight: '26 kg',
        displacement: '139 cc',
        fuel: '1.1 L',
        features: ['Perfect balance of power and weight', 'High reliability', 'Easy maintenance', 'Economical operation'],
        ideal: 'Small to medium boats up to 3.5 meters',
        image: '/products/portable/tohatsu5.jpeg'
      },
      '9.8hp': {
        name: 'Tohatsu 9.8 HP',
        power: '9.8 HP',
        type: '4-Stroke',
        weight: '39 kg',
        displacement: '230 cc',
        fuel: '5 L',
        features: ['High power with compact size', 'Built-in fuel tank', 'Fuel-saving technology', 'Precise speed control'],
        ideal: 'Medium fishing boats and recreational boats',
        image: '/products/portable/tohatsu9-8.jpeg'
      },
      '15hp': {
        name: 'Tohatsu 15 HP',
        power: '15 HP',
        type: '4-Stroke',
        weight: '45 kg',
        displacement: '351 cc',
        fuel: '12 L',
        features: ['Powerful and smooth performance', 'Water cooling', 'Electronic ignition system', 'Comfortable control handle'],
        ideal: 'Boats up to 4.5 meters and light commercial use',
        image: '/products/portable/tohatsu15.jpeg'
      },
      '20hp': {
        name: 'Tohatsu 20 HP',
        power: '20 HP',
        type: '4-Stroke',
        weight: '51 kg',
        displacement: '351 cc',
        fuel: '12 L',
        features: ['Most powerful portable engine in class', 'High torque', 'Reliable operation in all conditions', 'Advanced control options'],
        ideal: 'Relatively large boats and professional use',
        image: '/products/portable/tohatsu20.jpeg'
      }
    }
  }

  const t = translations[language]
  const engines = enginesData[language] as Record<string, {
    name: string;
    power: string;
    type: string;
    weight: string;
    displacement: string;
    fuel: string;
    features: string[];
    ideal: string;
    image: string;
  }>
  
  
  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="font-sans">
      <Header />

      {/* Main Content */}
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
              src="/products/portable/tohatsu20.jpeg"
              alt="Tohatsu Portable Engines"
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
                  right: `${particle.right}%`,
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
              <div className={isRTL ? "text-right" : "text-left"}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  {t.title}
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#c2b280]">
                  {t.subtitle}
                </h2>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-xl sm:text-2xl mb-8 leading-relaxed opacity-90"
              initial={{ y: 30, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm"
              initial={{ y: 30, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                {t.heroFeatures.transport}
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                {t.heroFeatures.efficiency}
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                {t.heroFeatures.reliability}
              </div>
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
                  {t.advantagesTitle}
                </h2>
              </motion.div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t.advantagesDesc}
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
                  icon: ScaleIcon,
                  title: t.advantages[0].title,
                  description: t.advantages[0].description,
                  color: "from-[#181b39] to-[#181b39]/80"
                },
                {
                  icon: BoltIcon,
                  title: t.advantages[1].title,
                  description: t.advantages[1].description,
                  color: "from-[#c2b280] to-[#c2b280]/80"
                },
                {
                  icon: CogIcon,
                  title: t.advantages[2].title,
                  description: t.advantages[2].description,
                  color: "from-slate-600 to-slate-700"
                },
                {
                  icon: WrenchScrewdriverIcon,
                  title: t.advantages[3].title,
                  description: t.advantages[3].description,
                  color: "from-slate-500 to-slate-600"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden p-8 text-center"
                  variants={fadeInUp}
                  {...scaleOnHover}
                >
                  <div className={`absolute inset-0 bg-gradient-to-bl ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-bl ${feature.color} rounded-2xl mx-auto mb-6 flex items-center justify-center relative`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-[#181b39] mb-4 group-hover:text-[#c2b280] transition-colors duration-300">
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
                  {t.selectorTitle}
                </h2>
              </motion.div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t.selectorDesc}
              </p>
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
                  {engines[key].power}
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
                {/* Engine Image */}
                <div className="relative h-96 lg:h-auto bg-gradient-to-bl from-gray-100 to-gray-200 flex items-center justify-center">
                  <motion.img
                    src={engines[selectedEngine].image}
                    alt={engines[selectedEngine].name}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute top-6 right-6">
                    <motion.div
                      className="bg-[#C2B280] text-white px-4 py-2 rounded-full font-bold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {engines[selectedEngine].power}
                    </motion.div>
                  </div>
                </div>

                {/* Engine Details */}
                <div className="p-8 lg:p-12">
                  <motion.h3 
                    className="text-3xl font-bold text-[#181b39] mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {engines[selectedEngine].name}
                  </motion.h3>

                  {/* Specifications */}
                  <motion.div 
                    className="grid grid-cols-2 gap-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">{t.type}</div>
                      <div className="font-bold text-[#181b39]">{engines[selectedEngine].type}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">{t.weight}</div>
                      <div className="font-bold text-[#181b39]">{engines[selectedEngine].weight}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">{t.displacement}</div>
                      <div className="font-bold text-[#181b39]">{engines[selectedEngine].displacement}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">{t.fuelCapacity}</div>
                      <div className="font-bold text-[#181b39]">{engines[selectedEngine].fuel}</div>
                    </div>
                  </motion.div>

                  {/* Features */}
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <h4 className="text-xl font-bold text-[#181b39] mb-4">{t.features}</h4>
                    <div className="space-y-3">
                      {engines[selectedEngine].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                        >
                          <CheckCircleIcon className={`w-5 h-5 text-green-500 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Ideal Use */}
                  <motion.div 
                    className="bg-gradient-to-l from-[#C2B280]/10 to-[#FFD700]/10 rounded-xl p-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <h4 className="text-lg font-bold text-[#181b39] mb-2">{t.idealFor}:</h4>
                    <p className="text-gray-700">{engines[selectedEngine].ideal}</p>
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <motion.a
                      href="/contact"
                      className="flex-1 bg-gradient-to-l from-[#C2B280] to-[#D4C794] text-[#003366] font-bold py-3 px-6 rounded-xl text-center transition-all duration-300 inline-flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <PhoneIcon className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {t.contactCTA}
                    </motion.a>
                    <motion.a
                      href="/quote"
                      className="flex-1 bg-gradient-to-l from-[#C2B280] to-[#D4C794] text-[#003366] font-bold py-3 px-6 rounded-xl text-center transition-all duration-300 inline-flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <TagIcon className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {t.contactCTA}
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Technical Advantages */}
        <motion.section 
          className="py-20 bg-gradient-to-bl from-white to-gray-50 relative overflow-hidden"
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
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <BeakerIcon className="w-12 h-12 text-[#0077CC]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#003366]">
                  {t.advancedTechTitle}
                </h2>
              </motion.div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t.advancedTechDesc}
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: BoltIcon,
                  title: t.advancedTech[0].title,
                  description: t.advancedTech[0].description,
                  features: t.advancedTech[0].features,
                  color: "from-[#181b39] to-[#181b39]/80"
                },
                {
                  icon: ShieldCheckIcon,
                  title: t.advancedTech[1].title,
                  description: t.advancedTech[1].description,
                  features: t.advancedTech[1].features,
                  color: "from-[#c2b280] to-[#c2b280]/80"
                },
                {
                  icon: FireIcon,
                  title: t.advancedTech[2].title,
                  description: t.advancedTech[2].description,
                  features: t.advancedTech[2].features,
                  color: "from-slate-600 to-slate-700"
                },
                {
                  icon: ChartBarIcon,
                  title: t.advancedTech[3].title,
                  description: t.advancedTech[3].description,
                  features: t.advancedTech[3].features,
                  color: "from-slate-500 to-slate-600"
                }
              ].map((advantage, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 relative"
                  variants={fadeInUp}
                  {...scaleOnHover}
                >
                  <div className="p-8 text-left relative z-10">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-bl ${advantage.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <advantage.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-[#181b39] mb-4">
                      {advantage.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {advantage.description}
                    </p>

                    <div className="space-y-3">
                      {advantage.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center justify-start"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircleIcon className={`w-4 h-4 text-[#c2b280] ${isRTL ? 'ml-2' : 'mr-2'}`} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className={`absolute inset-0 bg-gradient-to-bl ${advantage.color} opacity-0 hover:opacity-5 transition-opacity duration-500`} />
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
                  right: `${particle.right}%`,
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
                  {t.readyTitle}
                </h2>
              </motion.div>
              
              <motion.p 
                className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90"
                variants={fadeInUp}
              >
                {t.readyDesc}
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                variants={fadeInUp}
              >
                <motion.a
                  href="/contact"
                  className="bg-gradient-to-l from-[#c2b280] to-[#c2b280]/80 hover:from-[#c2b280]/90 hover:to-[#c2b280]/70 text-[#181b39] font-bold py-4 px-10 rounded-2xl text-xl transition-all duration-300 inline-flex items-center shadow-2xl"
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
                  {t.consultExperts}
                </motion.a>
                
                <motion.a
                  href="/products"
                  className="bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-bold py-4 px-10 rounded-2xl text-xl transition-all duration-300 inline-flex items-center border border-white/20 shadow-2xl"
                  {...scaleOnHover}
                >
                  <motion.div
                    className={isRTL ? "ml-3" : "mr-3"}
                    animate={{ 
                      x: [0, 5, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRightIcon className="w-6 h-6" />
                  </motion.div>
                  {t.browseEngines}
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
