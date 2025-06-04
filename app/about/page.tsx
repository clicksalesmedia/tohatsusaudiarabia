'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParticles } from '../utils/particlePositions'
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
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  
  // Use consistent particle positions to prevent hydration errors
  const heroParticles = useParticles(6, 'about-hero')
  const factParticles = useParticles(8, 'about-facts')
  const ctaParticles = useParticles(12, 'about-cta')

  return (
    <div dir="rtl" className="font-sans">
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
          dir="rtl"
        >
          {/* Left Side - Dark */}
          <div className="absolute inset-0 flex">
            <div className="w-1/2 bg-gradient-to-br from-[#181b39] via-[#181b39]/90 to-[#181b39]/80 relative">
              {/* Diagonal cut */}
              <div className="absolute inset-y-0 -right-12 w-24 bg-gradient-to-br from-[#181b39] via-[#181b39]/90 to-[#181b39]/80 transform skew-x-12"></div>
              
              {/* Subtle floating elements */}
              <div className="absolute inset-0">
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
            </div>
            
            {/* Right Side - Light */}
            <div className="w-1/2 bg-gradient-to-bl from-slate-50 via-white to-gray-100 relative">
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
                className="text-white"
                initial={{ opacity: 0, x: -50 }}
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
                  <SparklesIcon className="w-16 h-16 text-[#c2b280] ml-4" />
                  <div>
                    <h1 className="text-5xl md:text-6xl font-bold">قصة</h1>
                    <h1 className="text-5xl md:text-6xl font-bold text-[#c2b280]">توهاتسو</h1>
                  </div>
                </motion.div>
                
                <motion.p 
                  className="text-xl leading-relaxed mb-8 opacity-90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  رحلة بدأت في اليابان عام 1922، امتدت عبر القارات، ووصلت إلى قلوب البحارة في المملكة العربية السعودية
                </motion.p>

                <motion.div
                  className="flex items-center space-x-reverse space-x-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#c2b280]">1922</div>
                    <div className="text-sm opacity-80">سنة التأسيس</div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#c2b280]">100+</div>
                    <div className="text-sm opacity-80">عام من الخبرة</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Content */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
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
                      رؤيتنا للمستقبل
                    </motion.h2>
                    <motion.p 
                      className="text-lg leading-relaxed text-gray-700"
                      variants={fadeInUp}
                    >
                      نسعى لأن نكون الخيار الأول للبحارة في المنطقة، من خلال تقديم محركات 
                      بحرية تجمع بين التقنية اليابانية المتقدمة والفهم العميق للاحتياجات المحلية
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
          dir="rtl"
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
                  className="ml-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <ClockIcon className="w-12 h-12 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#181b39]">
                  رحلة عبر الزمن
                </h2>
              </motion.div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                اكتشف المحطات المهمة في تاريخ توهاتسو والإنجازات التي جعلتنا رواد صناعة المحركات البحرية
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Central Line */}
              <div className="absolute right-1/2 transform translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#c2b280] to-[#c2b280]/60"></div>

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
                    title: "البداية في اليابان",
                    description: "تأسيس شركة توهاتسو في طوكيو، اليابان، مع التركيز على الجودة والابتكار",
                    icon: BuildingOfficeIcon,
                    side: "right"
                  },
                  {
                    year: "1960",
                    title: "أول محرك بحري",
                    description: "إطلاق أول محرك بحري خارجي، بداية رحلة توهاتسو في عالم البحار",
                    icon: CogIcon,
                    side: "left"
                  },
                  {
                    year: "1995",
                    title: "التوسع العالمي",
                    description: "بداية التوسع في الأسواق العالمية مع التركيز على الجودة اليابانية",
                    icon: GlobeAltIcon,
                    side: "right"
                  },
                  {
                    year: "2010",
                    title: "تقنيات صديقة للبيئة",
                    description: "تطوير محركات صديقة للبيئة مع تقنيات توفير الوقود المتقدمة",
                    icon: LightBulbIcon,
                    side: "left"
                  },
                  {
                    year: "2020",
                    title: "دخول السوق السعودي",
                    description: "بداية رحلتنا في المملكة العربية السعودية مع التزام بالجودة والخدمة المحلية",
                    icon: HeartIcon,
                    side: "right"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center ${item.side === 'right' ? 'flex-row-reverse' : ''}`}
                    variants={item.side === 'right' ? fadeInRight : fadeInLeft}
                  >
                    <div className={`w-1/2 ${item.side === 'right' ? 'pr-16' : 'pl-16'}`}>
                      <motion.div
                        className={`bg-white rounded-2xl shadow-lg p-8 relative border border-gray-100 ${item.side === 'right' ? 'text-right' : 'text-left'}`}
                        whileHover={{ scale: 1.02, y: -3 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Arrow */}
                        <div className={`absolute top-8 ${item.side === 'right' ? '-left-4' : '-right-4'} w-0 h-0 border-t-8 border-b-8 border-transparent ${item.side === 'right' ? 'border-r-8 border-r-white' : 'border-l-8 border-l-white'}`}></div>
                        
                        <div className={`flex items-center mb-4 ${item.side === 'right' ? 'justify-end' : 'justify-start'}`}>
                          <motion.div
                            className="w-12 h-12 bg-gradient-to-bl from-[#c2b280] to-[#c2b280]/80 rounded-xl flex items-center justify-center ml-4"
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
                ))}
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
          dir="rtl"
        >
          {/* Subtle Background Animation */}
          <div className="absolute inset-0">
            {factParticles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/10 rounded-full"
                style={{
                  right: `${particle.right}%`,
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
                  className="ml-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <TrophyIcon className="w-12 h-12 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  أرقام تتحدث عن نفسها
                </h2>
              </motion.div>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                إنجازاتنا وحضورنا العالمي في أرقام مؤثرة تعكس التزامنا بالتميز والجودة
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
                  title: "سنة من الخبرة",
                  description: "قرن كامل من الابتكار والتطوير",
                  icon: StarIcon,
                  color: "from-[#c2b280] to-[#c2b280]/80"
                },
                {
                  number: 50,
                  suffix: "+",
                  title: "دولة حول العالم",
                  description: "حضور عالمي واسع ومتنوع",
                  icon: GlobeAltIcon,
                  color: "from-[#181b39] to-[#181b39]/80"
                },
                {
                  number: 1000000,
                  suffix: "+",
                  title: "محرك مُنتج",
                  description: "ملايين المحركات الموثوقة",
                  icon: CogIcon,
                  color: "from-slate-600 to-slate-700"
                },
                {
                  number: 95,
                  suffix: "%",
                  title: "رضا العملاء",
                  description: "ثقة العملاء في جودتنا",
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
                  <RocketLaunchIcon className="w-12 h-12 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#181b39]">
                  الابتكار والتقنية
                </h2>
              </motion.div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نلتزم بالبحث والتطوير المستمر لتقديم أحدث التقنيات في عالم المحركات البحرية
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
                  title: "تقنية SIMPLIQ™",
                  description: "تقنية متطورة تهدف إلى توفير تجربة قيادة بسيطة وموثوقة مع أداء استثنائي",
                  features: ["سهولة الاستخدام", "كفاءة عالية", "صيانة مبسطة"]
                },
                {
                  icon: ShieldCheckIcon,
                  title: "نظام الحماية الذكي",
                  description: "أنظمة حماية متطورة تراقب أداء المحرك وتحمي من التلف في الظروف القاسية",
                  features: ["حماية من الحرارة", "إنذار مبكر", "حماية ذاتية"]
                },
                {
                  icon: ChartBarIcon,
                  title: "كفاءة الوقود المتقدمة",
                  description: "تقنيات متطورة لتحسين استهلاك الوقود وتقليل الانبعاثات البيئية",
                  features: ["توفير في الوقود", "انبعاثات منخفضة", "أداء محسن"]
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
                        <CheckCircleIcon className="w-5 h-5 text-emerald-500 ml-2" />
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
                  className="ml-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <HeartIcon className="w-16 h-16 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-bold">
                  انضم إلى عائلة توهاتسو
                </h2>
              </motion.div>
              
              <motion.p 
                className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90"
                variants={fadeInUp}
              >
                اكتشف الفرق الذي يحدثه أكثر من قرن من الخبرة والابتكار في كل رحلة بحرية. 
                نحن لا نصنع محركات فحسب، بل نخلق ذكريات تدوم مدى الحياة.
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
                    <ChatBubbleLeftRightIcon className="w-6 h-6" />
                  </motion.div>
                  تحدث معنا
                </motion.a>
                
                <motion.a
                  href="/products"
                  className="bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-bold py-4 px-10 rounded-xl text-xl transition-all duration-300 inline-flex items-center border border-white/20 shadow-lg"
                  {...scaleOnHover}
                >
                  <motion.div
                    className="mr-3"
                    animate={{ 
                      x: [0, 3, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowTrendingUpIcon className="w-6 h-6" />
                  </motion.div>
                  اكتشف منتجاتنا
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
