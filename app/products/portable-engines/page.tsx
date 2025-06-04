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
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const [selectedEngine, setSelectedEngine] = useState('2.5hp')

  // Use consistent particle positions to prevent hydration errors
  const heroParticles = useParticles(20, 'portable-hero')
  const ctaParticles = useParticles(15, 'portable-cta')

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
    '2.5hp': {
      name: 'توهاتسو 2.5 حصان',
      power: '2.5 حصان',
      type: '4 أشواط',
      weight: '12.7 كجم',
      displacement: '139 سم³',
      fuel: '1.1 لتر',
      features: ['سهولة حمل استثنائية', 'تشغيل هادئ جداً', 'استهلاك وقود منخفض', 'بدء تشغيل سهل'],
      ideal: 'القوارب المطاطية الصغيرة وقوارب الصيد الخفيفة',
      image: '/products/portable/tohatsu2-5.jpeg'
    },
    '5hp': {
      name: 'توهاتسو 5 حصان',
      power: '5 حصان',
      type: '4 أشواط',
      weight: '26 كجم',
      displacement: '139 سم³',
      fuel: '1.1 لتر',
      features: ['توازن مثالي بين القوة والوزن', 'موثوقية عالية', 'صيانة سهلة', 'تشغيل اقتصادي'],
      ideal: 'القوارب الصغيرة والمتوسطة حتى 3.5 متر',
      image: '/products/portable/tohatsu5.jpeg'
    },
    '9.8hp': {
      name: 'توهاتسو 9.8 حصان',
      power: '9.8 حصان',
      type: '4 أشواط',
      weight: '39 كجم',
      displacement: '230 سم³',
      fuel: '5 لتر',
      features: ['قوة عالية مع حجم مدمج', 'خزان وقود مدمج', 'تقنية توفير الوقود', 'تحكم دقيق في السرعة'],
      ideal: 'قوارب الصيد المتوسطة والقوارب الترفيهية',
      image: '/products/portable/tohatsu9-8.jpeg'
    },
    '15hp': {
      name: 'توهاتسو 15 حصان',
      power: '15 حصان',
      type: '4 أشواط',
      weight: '45 كجم',
      displacement: '351 سم³',
      fuel: '12 لتر',
      features: ['أداء قوي وسلس', 'تبريد بالماء', 'نظام إشعال إلكتروني', 'مقبض تحكم مريح'],
      ideal: 'القوارب حتى 4.5 متر والاستخدامات التجارية الخفيفة',
      image: '/products/portable/tohatsu15.jpeg'
    },
    '20hp': {
      name: 'توهاتسو 20 حصان',
      power: '20 حصان',
      type: '4 أشواط',
      weight: '51 كجم',
      displacement: '351 سم³',
      fuel: '12 لتر',
      features: ['أقوى محركات الفئة المحمولة', 'عزم دوران عالي', 'تشغيل موثوق في جميع الظروف', 'خيارات تحكم متقدمة'],
      ideal: 'القوارب الكبيرة نسبياً والاستخدامات المهنية',
      image: '/products/portable/tohatsu20.jpeg'
    }
  }
  
  
  return (
    <div dir="rtl" className="font-sans">
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
          dir="rtl"
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
                className="ml-4"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <PaperAirplaneIcon className="w-16 h-16 text-[#c2b280]" />
              </motion.div>
              <div className="text-right">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  المحركات المحمولة
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#c2b280]">
                  2.5 - 20 حصان
                </h2>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-xl sm:text-2xl mb-8 leading-relaxed opacity-90"
              initial={{ y: 30, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              القوة المدمجة، المرونة المطلقة. محركات خفيفة الوزن مصممة للتنقل السهل والأداء الموثوق
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm"
              initial={{ y: 30, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                🏆 سهولة النقل والتركيب
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                ⚡ كفاءة عالية في الوقود
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                🛡️ موثوقية يابانية
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
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <SparklesIcon className="w-12 h-12 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#181b39]">
                  مزايا المحركات المحمولة
                </h2>
              </motion.div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                اكتشف لماذا تعتبر محركات توهاتسو المحمولة الخيار الأمثل للقوارب الصغيرة والمتوسطة
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
                  title: "خفة وزن استثنائية",
                  description: "تصميم مدمج وخفيف الوزن يسهل النقل والتركيب بدون معدات خاصة",
                  color: "from-[#181b39] to-[#181b39]/80"
                },
                {
                  icon: BoltIcon,
                  title: "كفاءة عالية في الوقود",
                  description: "تقنية 4 أشواط متقدمة توفر استهلاك وقود منخفض ورحلات أطول",
                  color: "from-[#c2b280] to-[#c2b280]/80"
                },
                {
                  icon: CogIcon,
                  title: "تشغيل موثوق",
                  description: "بدء تشغيل سهل وأداء ثابت في جميع الظروف البحرية",
                  color: "from-slate-600 to-slate-700"
                },
                {
                  icon: WrenchScrewdriverIcon,
                  title: "صيانة بسيطة",
                  description: "تصميم ذكي يسهل الوصول للمكونات وصيانة دورية بسيطة",
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
                    rotateY: [0, 180, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <CogIcon className="w-12 h-12 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#181b39]">
                  اختر المحرك المناسب لك
                </h2>
              </motion.div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                استكشف مجموعتنا الكاملة من المحركات المحمولة واختر ما يناسب احتياجاتك
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
              {Object.keys(engines).map((key, index) => (
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
                      <div className="text-sm text-gray-600 mb-1">النوع</div>
                      <div className="font-bold text-[#181b39]">{engines[selectedEngine].type}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">الوزن</div>
                      <div className="font-bold text-[#181b39]">{engines[selectedEngine].weight}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">السعة</div>
                      <div className="font-bold text-[#181b39]">{engines[selectedEngine].displacement}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">خزان الوقود</div>
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
                    <h4 className="text-xl font-bold text-[#181b39] mb-4">المميزات الرئيسية</h4>
                    <div className="space-y-3">
                      {engines[selectedEngine].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                        >
                          <CheckCircleIcon className="w-5 h-5 text-green-500 ml-3" />
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
                    <h4 className="text-lg font-bold text-[#181b39] mb-2">مثالي لـ:</h4>
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
                      <PhoneIcon className="w-5 h-5 ml-2" />
                      استفسر الآن
                    </motion.a>
                    <motion.a
                      href="/quote"
                      className="flex-1 bg-gradient-to-l from-[#C2B280] to-[#D4C794] text-[#003366] font-bold py-3 px-6 rounded-xl text-center transition-all duration-300 inline-flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <TagIcon className="w-5 h-5 ml-2" />
                      اطلب عرض سعر
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
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <BeakerIcon className="w-12 h-12 text-[#0077CC]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#003366]">
                  تقنيات متقدمة
                </h2>
              </motion.div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                استكشف التقنيات المبتكرة التي تجعل محركاتنا المحمولة الأكثر كفاءة وموثوقية
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
                  title: "تقنية 4 أشواط المتطورة",
                  description: "محركات 4 أشواط عالية الكفاءة توفر قوة استثنائية مع استهلاك وقود منخفض وانبعاثات أقل.",
                  features: ["توفير 40% في الوقود", "تشغيل أكثر هدوءاً", "عزم دوران عالي", "عمر أطول للمحرك"],
                  color: "from-[#181b39] to-[#181b39]/80"
                },
                {
                  icon: ShieldCheckIcon,
                  title: "نظام الحماية الذكي",
                  description: "أنظمة حماية متقدمة تضمن تشغيل آمن وموثوق في جميع الظروف البحرية القاسية.",
                  features: ["حماية من ارتفاع الحرارة", "إنذار انخفاض الزيت", "حماية من الصدمات", "مقاومة التآكل"],
                  color: "from-[#c2b280] to-[#c2b280]/80"
                },
                {
                  icon: FireIcon,
                  title: "أداء مُحسَّن",
                  description: "تصميم محسن للمراوح والتبريد يضمن أقصى أداء مع الحفاظ على درجات حرارة مثالية.",
                  features: ["تبريد فعال", "تسارع سريع", "استجابة فورية", "أداء ثابت"],
                  color: "from-slate-600 to-slate-700"
                },
                {
                  icon: ChartBarIcon,
                  title: "كفاءة اقتصادية",
                  description: "تقنيات متقدمة في إدارة الوقود والصيانة تجعل تكلفة التشغيل في أدنى مستوياتها.",
                  features: ["صيانة أقل تكراراً", "قطع غيار متوفرة", "عمر خدمة طويل", "قيمة إعادة بيع عالية"],
                  color: "from-slate-500 to-slate-600"
                }
              ].map((advantage, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 relative"
                  variants={fadeInUp}
                  {...scaleOnHover}
                >
                  <div className="p-8 text-right relative z-10">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-bl ${advantage.color} rounded-2xl flex items-center justify-center mb-6 mr-auto shadow-lg`}
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
                          className="flex items-center justify-end"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-sm text-gray-700">{feature}</span>
                          <CheckCircleIcon className="w-4 h-4 text-[#c2b280] mr-2" />
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
          dir="rtl"
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
                  className="ml-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <PowerIcon className="w-16 h-16 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-bold">
                  جاهز للانطلاق؟
                </h2>
              </motion.div>
              
              <motion.p 
                className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90"
                variants={fadeInUp}
              >
                اختر محركك المحمول المثالي وابدأ مغامراتك البحرية اليوم. 
                فريق خبرائنا جاهز لمساعدتك في اختيار المحرك المناسب لاحتياجاتك.
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
                    className="mr-3"
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <PhoneIcon className="w-6 h-6" />
                  </motion.div>
                  استشر خبرائنا
                </motion.a>
                
                <motion.a
                  href="/products"
                  className="bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-bold py-4 px-10 rounded-2xl text-xl transition-all duration-300 inline-flex items-center border border-white/20 shadow-2xl"
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
                  تصفح المحركات الأخرى
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
