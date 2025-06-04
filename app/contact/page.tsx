'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParticles } from '../utils/particlePositions'
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  UserGroupIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  HeartIcon,
  ArrowRightIcon,
  WrenchScrewdriverIcon,
  CogIcon
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

export default function ContactPage() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    engineType: '',
    message: ''
  })
  
  // Use consistent particle positions to prevent hydration errors
  const heroParticles = useParticles(10, 'contact-hero')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: "اتصل بنا مباشرة",
      description: "للاستفسارات العاجلة والدعم الفوري",
      info: "+966 XX XXX XXXX",
      action: "tel:+966xxxxxxxxx",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-50 to-teal-50"
    },
    {
      icon: EnvelopeIcon,
      title: "راسلنا إلكترونياً",
      description: "للاستفسارات التفصيلية والوثائق",
      info: "info@tohatsu-saudi.com",
      action: "mailto:info@tohatsu-saudi.com",
      color: "from-[#181b39] to-[#181b39]/80",
      bgColor: "from-[#181b39]/5 to-[#181b39]/10"
    },
    {
      icon: MapPinIcon,
      title: "زر مكاتبنا",
      description: "للاستشارات الشخصية ومعاينة المحركات",
      info: "الرياض، المملكة العربية السعودية",
      action: "#location",
      color: "from-[#c2b280] to-[#c2b280]/80",
      bgColor: "from-[#c2b280]/10 to-[#c2b280]/20"
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "الدردشة المباشرة",
      description: "دعم فوري من خبرائنا المتخصصين",
      info: "متاح 24/7",
      action: "#chat",
      color: "from-slate-600 to-slate-700",
      bgColor: "from-slate-50 to-gray-50"
    }
  ]

  const departments = [
    {
      icon: CogIcon,
      title: "المبيعات والاستشارات",
      description: "اختيار المحرك المناسب وعروض الأسعار",
      phone: "+966 XX XXX XXXX",
      email: "sales@tohatsu-saudi.com",
      hours: "الأحد - الخميس: 9:00 ص - 6:00 م"
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "الصيانة والدعم التقني",
      description: "خدمات الصيانة وحل المشاكل التقنية",
      phone: "+966 XX XXX XXXX",
      email: "support@tohatsu-saudi.com",
      hours: "الأحد - الخميس: 8:00 ص - 5:00 م"
    },
    {
      icon: UserGroupIcon,
      title: "خدمة العملاء",
      description: "الاستفسارات العامة والمساعدة",
      phone: "+966 XX XXX XXXX",
      email: "info@tohatsu-saudi.com",
      hours: "الأحد - الخميس: 9:00 ص - 5:00 م"
    }
  ]

  return (
    <div dir="rtl" className="font-sans">
      <Header />

      <main>
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative min-h-[70vh] flex items-center justify-center text-center text-white overflow-hidden bg-gradient-to-bl from-[#181b39] via-[#181b39]/90 to-[#c2b280]/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          dir="rtl"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <motion.img
              src="https://tohatsu.com/assets/images/contact/boats-marina.jpg"
              alt="Marina with boats"
              className="w-full h-full object-cover opacity-30"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "linear" }}
            />
          </div>
          
          {/* Floating particles */}
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
                  y: [-15, -50],
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

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={isHeroInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="flex items-center justify-center mb-8"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <SparklesIcon className="w-16 h-16 text-[#c2b280] ml-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  تواصل معنا
                </h1>
              </motion.div>
              
              <motion.p 
                className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90"
                initial={{ y: 20, opacity: 0 }}
                animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                نحن هنا لمساعدتك في كل ما تحتاجه. من الاستشارات التقنية إلى خدمة ما بعد البيع، 
                فريقنا المتخصص جاهز لتقديم أفضل دعم لك.
              </motion.p>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#c2b280]">+100</div>
                  <div className="text-sm opacity-80">عميل سعيد</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#c2b280]">24/7</div>
                  <div className="text-sm opacity-80">دعم متاح</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#c2b280]">15+</div>
                  <div className="text-sm opacity-80">سنة خبرة</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#c2b280]">5</div>
                  <div className="text-sm opacity-80">مواقع خدمة</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Methods Section */}
        <motion.section 
          className="py-20 bg-gradient-to-bl from-white to-slate-50 relative overflow-hidden"
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
                  <ChatBubbleLeftRightIcon className="w-12 h-12 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#181b39]">
                  طرق التواصل
                </h2>
              </motion.div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                اختر الطريقة الأنسب للتواصل معنا، نحن متاحون لخدمتك بأفضل الطرق الممكنة
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  className={`group block bg-gradient-to-bl ${method.bgColor} p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100 text-center relative overflow-hidden`}
                  variants={fadeInUp}
                  {...scaleOnHover}
                >
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-bl ${method.color} rounded-xl mx-auto mb-6 flex items-center justify-center`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <method.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-[#181b39] mb-3 group-hover:text-[#181b39]/80 transition-colors duration-300">
                    {method.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {method.description}
                  </p>
                  
                  <div className="font-semibold text-[#c2b280] group-hover:text-[#c2b280]/80 transition-colors duration-300">
                    {method.info}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Form and Departments Section */}
        <motion.section 
          className="py-20 bg-gradient-to-bl from-slate-50 to-white relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          dir="rtl"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
                {...fadeInUp}
              >
                <motion.div
                  className="flex items-center mb-8"
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
                    <DocumentTextIcon className="w-10 h-10 text-[#c2b280]" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-[#181b39]">
                    أرسل لنا رسالة
                  </h3>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 text-right">
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2b280] focus:border-[#c2b280] transition-colors duration-200 text-right"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-right">
                        البريد الإلكتروني *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2b280] focus:border-[#c2b280] transition-colors duration-200 text-right"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 text-right">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2b280] focus:border-[#c2b280] transition-colors duration-200 text-right"
                        placeholder="+966 XX XXX XXXX"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="engineType" className="block text-sm font-medium text-gray-700 mb-2 text-right">
                        نوع المحرك
                      </label>
                      <select
                        id="engineType"
                        name="engineType"
                        value={formData.engineType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2b280] focus:border-[#c2b280] transition-colors duration-200 text-right"
                      >
                        <option value="">اختر نوع المحرك</option>
                        <option value="بنزين">بنزين</option>
                        <option value="ديزل">ديزل</option>
                        <option value="هوائي">هوائي</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 text-right">
                      الرسالة *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2b280] focus:border-[#c2b280] transition-colors duration-200 text-right resize-vertical"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 bg-gradient-to-l from-[#c2b280] to-[#c2b280]/80 hover:from-[#c2b280]/90 hover:to-[#c2b280]/70 text-[#181b39] shadow-lg`}
                  >
                    إرسال الرسالة
                  </motion.button>
                </form>
              </motion.div>

              {/* Departments */}
              <motion.div
                className="space-y-8"
                variants={staggerChildren}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-center mb-12"
                  {...fadeInUp}
                >
                  <motion.div
                    className="flex items-center justify-center mb-6"
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
                      <UserGroupIcon className="w-10 h-10 text-[#c2b280]" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-[#181b39]">
                      أقسامنا المتخصصة
                    </h3>
                  </motion.div>
                  <p className="text-gray-600">
                    تواصل مباشرة مع القسم المناسب لاحتياجاتك
                  </p>
                </motion.div>

                {departments.map((dept, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 p-6 border border-gray-100"
                    variants={fadeInUp}
                    {...scaleOnHover}
                  >
                    <div className="flex items-start">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-bl from-[#c2b280] to-[#c2b280]/80 rounded-xl flex items-center justify-center ml-4 flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <dept.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      
                      <div className="flex-1 text-right">
                        <h4 className="text-xl font-bold text-[#181b39] mb-2">
                          {dept.title}
                        </h4>
                        <p className="text-gray-600 mb-4 text-sm">
                          {dept.description}
                        </p>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-end">
                            <span className="text-[#c2b280] font-medium">{dept.phone}</span>
                            <PhoneIcon className="w-4 h-4 text-gray-400 mr-2" />
                          </div>
                          <div className="flex items-center justify-end">
                            <span className="text-[#c2b280] font-medium">{dept.email}</span>
                            <EnvelopeIcon className="w-4 h-4 text-gray-400 mr-2" />
                          </div>
                          <div className="flex items-center justify-end">
                            <span className="text-gray-500 text-xs">{dept.hours}</span>
                            <ClockIcon className="w-4 h-4 text-gray-400 mr-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          className="py-20 bg-gradient-to-bl from-white to-slate-50 relative overflow-hidden"
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
                  <HeartIcon className="w-12 h-12 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#181b39]">
                  الأسئلة الشائعة
                </h2>
              </motion.div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                إجابات سريعة على أكثر الأسئلة شيوعاً حول منتجاتنا وخدماتنا
              </p>
            </motion.div>

            <motion.div 
              className="max-w-4xl mx-auto space-y-6"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  question: "ما هي فترة الضمان على محركات توهاتسو؟",
                  answer: "نوفر ضماناً شاملاً لمدة سنتين على جميع محركاتنا، بالإضافة إلى دعم ما بعد البيع والصيانة الدورية."
                },
                {
                  question: "هل تتوفر قطع الغيار الأصلية في السعودية؟",
                  answer: "نعم، لدينا مخزون كامل من قطع الغيار الأصلية في جميع مراكز الخدمة المعتمدة في المملكة."
                },
                {
                  question: "كم يستغرق وقت الصيانة الدورية؟",
                  answer: "الصيانة الدورية تستغرق عادة من 2-4 ساعات حسب نوع المحرك والخدمات المطلوبة."
                },
                {
                  question: "هل يمكنني طلب خدمة الصيانة في الموقع؟",
                  answer: "نعم، نوفر خدمة الصيانة المتنقلة في المناطق الرئيسية للمحركات الكبيرة والحالات الطارئة."
                },
                {
                  question: "ما هي طرق الدفع المتاحة؟",
                  answer: "نقبل جميع طرق الدفع: النقد، التحويل البنكي، البطاقات الائتمانية، والدفع بالتقسيط للمبالغ الكبيرة."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 p-6 border border-gray-100"
                  variants={fadeInUp}
                  {...scaleOnHover}
                >
                  <h4 className="text-xl font-bold text-[#181b39] mb-3 text-right">
                    {faq.question}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-right">
                    {faq.answer}
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
              <motion.a
                href="#contact-form"
                className="group bg-gradient-to-l from-[#c2b280] to-[#c2b280]/80 hover:from-[#c2b280]/90 hover:to-[#c2b280]/70 text-[#181b39] font-bold py-4 px-10 rounded-xl text-xl transition-all duration-300 inline-flex items-center shadow-lg"
                {...scaleOnHover}
              >
                <motion.div
                  className="ml-3"
                  animate={{ 
                    x: [0, 3, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRightIcon className="w-6 h-6" />
                </motion.div>
                لم تجد إجابة؟ اسألنا مباشرة
              </motion.a>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
