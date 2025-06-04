'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParticles } from '../utils/particlePositions'
import { 
  ArrowRightIcon,
  TruckIcon,
  RocketLaunchIcon,
  PowerIcon,
  SparklesIcon,
  CogIcon,
  BoltIcon,
} from '@heroicons/react/24/outline'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
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

export default function ProductsPage() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  
  // Use consistent particle positions to prevent hydration errors
  const heroParticles = useParticles(20, 'products-hero')
  const ctaParticles = useParticles(15, 'products-cta')

  const productCategories = [
    {
      title: "المحركات المحمولة",
      subtitle: "2.5 - 20 حصان",
      description: "القوة المدمجة، المرونة المطلقة. محركات خفيفة الوزن مصممة للتنقل السهل والأداء الموثوق.",
      features: ["سهولة النقل والتركيب", "كفاءة عالية في الوقود", "تشغيل موثوق", "صيانة بسيطة"],
      icon: TruckIcon,
      href: "/products/portable_engines",
      image: "products/tohatsu15.jpeg",
      gradient: "from-[#181b39] to-[#181b39]/80",
      bgGradient: "from-slate-50 to-white"
    },
    {
      title: "المحركات المتوسطة",
      subtitle: "25 - 90 حصان",
      description: "الأداء المثالي لمغامراتك المتنوعة. توازن مثالي بين القوة والكفاءة للاستخدامات المتعددة.",
      features: ["قوة متوازنة", "تقنيات ذكية", "موثوقية عالية", "سهولة الصيانة"],
      icon: RocketLaunchIcon,
      href: "/products/mid_range_engines",
      image: "products/tohatsu50.jpeg",
      gradient: "from-[#c2b280] to-[#c2b280]/80",
      bgGradient: "from-[#c2b280]/10 to-white"
    },
    {
      title: "المحركات عالية القوة",
      subtitle: "100 - 140 حصان",
      description: "قوة استثنائية لأكبر تحدياتك. أداء لا يتنازل للقوارب الأكبر والمغامرات الأكثر جرأة.",
      features: ["قوة فائقة", "تقنيات متطورة", "حماية فائقة", "كفاءة متقدمة"],
      icon: PowerIcon,
      href: "/products/high_power_engines",
      image: "products/tohatsu140.png",
      gradient: "from-slate-600 to-slate-700",
      bgGradient: "from-slate-50 to-gray-50"
    }
  ]

  return (
    <div dir="rtl" className="font-sans">
      <Header />

      <main>
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative min-h-[80vh] flex items-center justify-center text-center text-white overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          dir="rtl"
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-[#181b39] via-[#181b39]/90 to-[#c2b280]/20">
            <motion.img
              src="https://tohatsu.com/assets/images/engines/products-hero.jpg"
              alt="Tohatsu Marine Engines"
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "linear" }}
            />
          </div>
          
          <div className="absolute inset-0 overflow-hidden">
            {heroParticles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  right: `${particle.right}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [-15, -60],
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

          <motion.div 
            className="relative z-10 bg-black/10 backdrop-blur-sm p-12 rounded-2xl max-w-6xl mx-4 text-center"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={isHeroInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="flex items-center justify-center mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.div
                className="ml-4"
                animate={{ 
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <CogIcon className="w-20 h-20 text-[#c2b280]" />
              </motion.div>
              <div className="text-center">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                  محركات توهاتسو
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#c2b280] mt-2">
                  الجودة اليابانية • الأداء الاستثنائي
                </h2>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-xl sm:text-2xl mb-10 leading-relaxed opacity-90 max-w-4xl mx-auto"
              initial={ { y: 20, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              اكتشف مجموعتنا الكاملة من المحركات البحرية الخارجية. من المحركات المحمولة خفيفة الوزن إلى المحركات عالية القوة، نوفر الحل المثالي لكل نوع من القوارب ولكل مغامرة بحرية.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-6 text-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 font-medium">
                🚤 2.5 - 140 حصان
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 font-medium">
                🏆 جودة يابانية معتمدة
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 font-medium">
                ⚡ كفاءة عالية في الوقود
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Product Categories Section */}
        <motion.section 
          className="py-24 bg-gradient-to-bl from-slate-50 to-white relative overflow-hidden"
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
                  <SparklesIcon className="w-12 h-12 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#181b39]">
                  اختر الفئة المناسبة لك
                </h2>
              </motion.div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                ثلاث فئات متميزة من المحركات البحرية، كل منها مصممة لتلبية احتياجات مختلفة وتوفير أفضل تجربة ممكنة على الماء
              </p>
            </motion.div>
            
            <motion.div 
              className="space-y-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {productCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-bl ${category.bgGradient} rounded-2xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-xl transition-all duration-500`}
                  variants={fadeInUp}
                  {...scaleOnHover}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image Section */}
                    <div className={`relative h-80 lg:h-96 overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <motion.img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        whileHover={{ scale: 1.05 }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                      
                      {/* Floating Icon */}
                      <div className="absolute top-6 right-6">
                        <motion.div
                          className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <category.icon className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>

                      {/* Power Badge */}
                      <div className="absolute bottom-6 right-6">
                        <motion.div
                          className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <p className="text-[#181b39] font-bold text-lg">{category.subtitle}</p>
                        </motion.div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1 text-left' : 'text-right'}`}>
                      <motion.h3 
                        className="text-3xl lg:text-4xl font-bold text-[#181b39] mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {category.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-gray-700 text-lg leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {category.description}
                      </motion.p>

                      {/* Features List */}
                      <motion.div 
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="grid grid-cols-2 gap-3">
                          {category.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              className={`flex items-center ${index % 2 === 1 ? 'justify-start' : 'justify-end'}`}
                              initial={{ opacity: 0, x: index % 2 === 1 ? -20 : 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + featureIndex * 0.1, duration: 0.3 }}
                              viewport={{ once: true }}
                            >
                              {index % 2 === 1 && <BoltIcon className="w-4 h-4 text-[#c2b280] mr-2" />}
                              <span className="text-sm font-medium text-gray-700">{feature}</span>
                              {index % 2 === 0 && <BoltIcon className="w-4 h-4 text-[#c2b280] mr-2" />}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* CTA Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <motion.a
                          href={category.href}
                          className={`inline-flex items-center bg-gradient-to-l ${category.gradient} text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg group/btn`}
                          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {index % 2 === 1 && (
                            <motion.div
                              className="mr-3 group-hover/btn:translate-x-1 transition-transform duration-300"
                            >
                              <ArrowRightIcon className="w-5 h-5" />
                            </motion.div>
                          )}
                          <span>استكشف هذه الفئة</span>
                          {index % 2 === 0 && (
                            <motion.div
                              className="ml-3 group-hover/btn:translate-x-1 transition-transform duration-300"
                            >
                              <ArrowRightIcon className="w-5 h-5" />
                            </motion.div>
                          )}
                        </motion.a>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
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
                  opacity: [0.05, 0.15, 0.05],
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
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <CogIcon className="w-16 h-16 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-bold">
                  ابدأ رحلتك البحرية اليوم
                </h2>
              </motion.div>
              
              <motion.p 
                className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90"
                variants={fadeInUp}
              >
                مهما كان نوع قاربك أو مغامرتك البحرية، لدينا المحرك المثالي لك. 
                تواصل مع خبرائنا للحصول على استشارة مجانية واختيار المحرك الأنسب لاحتياجاتك.
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
                    <CogIcon className="w-6 h-6" />
                  </motion.div>
                  استشارة مجانية
                </motion.a>
                
                <motion.a
                  href="/about"
                  className="bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-bold py-4 px-10 rounded-xl text-xl transition-all duration-300 inline-flex items-center border border-white/20 shadow-lg"
                  {...scaleOnHover}
                >
                  <motion.div
                    className="mr-3"
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <SparklesIcon className="w-6 h-6" />
                  </motion.div>
                  تعرف على توهاتسو
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
