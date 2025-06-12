'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParticles } from '../utils/particlePositions'
import { 
  DocumentIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  CogIcon,
  ScaleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ArrowRightIcon,
  PaperAirplaneIcon,
  CalendarDaysIcon
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

const QuotePage = () => {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  
  // Use consistent particle positions to prevent hydration errors
  const heroParticles = useParticles(15, 'quote-hero')

  // Form state
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    phone: '',
    email: '',
    city: '',
    
    // Engine Requirements
    engineType: '',
    powerRange: '',
    usage: '',
    engineCount: '1',
    
    // Vessel Information
    vesselType: '',
    vesselLength: '',
    vesselYear: '',
    currentEngine: '',
    
    // Project Details
    timeline: '',
    budget: '',
    priority: '',
    
    // Additional Information
    additionalRequirements: '',
    previousExperience: '',
    preferredContact: 'phone'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
    } catch {
      // Error handling without unused parameter
      console.error('Form submission failed')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const engineTypes = [
    { value: 'portable', label: 'محركات محمولة (2.5 - 20 حصان)' },
    { value: 'mid-range', label: 'محركات متوسطة (25 - 90 حصان)' },
    { value: 'high-power', label: 'محركات عالية القوة (100 - 140 حصان)' },
    { value: 'not-sure', label: 'غير متأكد - أحتاج استشارة' }
  ]

  const powerRanges = [
    { value: '2.5-5', label: '2.5 - 5 حصان' },
    { value: '9.8-20', label: '9.8 - 20 حصان' },
    { value: '25-40', label: '25 - 40 حصان' },
    { value: '60-90', label: '60 - 90 حصان' },
    { value: '100-140', label: '100 - 140 حصان' },
    { value: 'custom', label: 'متطلبات خاصة' }
  ]

  const usageTypes = [
    { value: 'recreational', label: 'ترفيهي / نزهة' },
    { value: 'fishing', label: 'صيد تجاري' },
    { value: 'fishing-sport', label: 'صيد رياضي' },
    { value: 'commercial', label: 'تجاري / نقل' },
    { value: 'rescue', label: 'إنقاذ / طوارئ' },
    { value: 'racing', label: 'سباقات مائية' },
    { value: 'other', label: 'أخرى' }
  ]

  const vesselTypes = [
    { value: 'inflatable', label: 'قارب مطاطي' },
    { value: 'fishing-boat', label: 'قارب صيد' },
    { value: 'speed-boat', label: 'قارب سريع' },
    { value: 'yacht', label: 'يخت' },
    { value: 'commercial', label: 'قارب تجاري' },
    { value: 'jet-ski', label: 'جت سكي' },
    { value: 'other', label: 'أخرى' }
  ]

  const timelineOptions = [
    { value: 'immediate', label: 'فوري (خلال أسبوع)' },
    { value: 'month', label: 'خلال شهر' },
    { value: '3-months', label: 'خلال 3 أشهر' },
    { value: '6-months', label: 'خلال 6 أشهر' },
    { value: 'planning', label: 'مرحلة التخطيط' }
  ]

  const priorityOptions = [
    { value: 'price', label: 'السعر الأفضل' },
    { value: 'quality', label: 'الجودة العالية' },
    { value: 'speed', label: 'التسليم السريع' },
    { value: 'service', label: 'الخدمة الشاملة' }
  ]

  if (submitStatus === 'success') {
    return (
      <div dir="rtl" className="font-sans">
        <Header />
        
        <main className="min-h-screen bg-gradient-to-bl from-gray-50 to-white flex items-center justify-center py-20">
          <motion.div
            className="max-w-2xl mx-auto text-center p-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CheckCircleIcon className="w-12 h-12 text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#181b39] mb-6">
              تم إرسال طلبك بنجاح!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              شكراً لك على اختيار توهاتسو. سيتواصل معك فريقنا المتخصص خلال 24 ساعة لتقديم عرض سعر مفصل.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 border-2 border-[#c2b280]">
                <PhoneIcon className="w-8 h-8 text-[#c2b280] mx-auto mb-3" />
                <h3 className="font-bold text-[#181b39] mb-2">للاستفسارات العاجلة</h3>
                <a href="tel:+966543699901" className="text-[#c2b280] font-medium">
                  +966 54 369 9901
                </a>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border-2 border-[#181b39]">
                <EnvelopeIcon className="w-8 h-8 text-[#181b39] mx-auto mb-3" />
                <h3 className="font-bold text-[#181b39] mb-2">أو راسلنا</h3>
                <a href="mailto:jeddah@tohatsu-sa.com" className="text-[#181b39] font-medium">
                  jeddah@tohatsu-sa.com
                </a>
              </div>
            </div>
            
            <motion.a
              href="/"
              className="bg-gradient-to-l from-[#c2b280] to-[#c2b280]/80 text-[#181b39] font-bold py-4 px-8 rounded-2xl inline-flex items-center transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRightIcon className="w-6 h-6 mr-3" />
              العودة للصفحة الرئيسية
            </motion.a>
          </motion.div>
        </main>
        
        <Footer />
      </div>
    )
  }

  return (
    <div dir="rtl" className="font-sans">
      <Header />

      <main>
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          dir="rtl"
        >
          {/* Enhanced Background */}
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-bl from-[#181b39] via-[#181b39]/95 to-[#c2b280]/30"></div>
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
                <DocumentIcon className="w-16 h-16 text-[#c2b280]" />
              </motion.div>
              <div className="text-right">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  طلب عرض سعر
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#c2b280]">
                  احصل على أفضل عرض لمحركك المثالي
                </h2>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-xl sm:text-2xl mb-8 leading-relaxed opacity-90"
              initial={{ y: 30, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              املأ النموذج أدناه وسيقوم فريقنا المتخصص بإعداد عرض سعر مفصل ومخصص لاحتياجاتك
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm"
              initial={{ y: 30, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                ⚡ رد سريع خلال 24 ساعة
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                🎯 عروض مخصصة لاحتياجاتك
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                🛡️ استشارة مجانية من الخبراء
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Quote Form Section */}
        <motion.section 
          className="py-20 bg-gradient-to-bl from-gray-50 to-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          dir="rtl"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto"
              {...fadeInUp}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <motion.div 
                  className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100"
                  variants={fadeInUp}
                >
                  <div className="flex items-center mb-8">
                    <UserIcon className="w-8 h-8 text-[#c2b280] ml-4" />
                    <h3 className="text-2xl font-bold text-[#181b39]">المعلومات الشخصية</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-[#c2b280] focus:ring-2 focus:ring-[#c2b280]/20 transition-all duration-300"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        رقم الهاتف *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-[#c2b280] focus:ring-2 focus:ring-[#c2b280]/20 transition-all duration-300"
                        placeholder="+966 54 369 9901"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        البريد الإلكتروني *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-[#c2b280] focus:ring-2 focus:ring-[#c2b280]/20 transition-all duration-300"
                        placeholder="example@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        المدينة *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-[#c2b280] focus:ring-2 focus:ring-[#c2b280]/20 transition-all duration-300"
                        placeholder="جدة، الرياض، الدمام..."
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Engine Requirements */}
                <motion.div 
                  className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100"
                  variants={fadeInUp}
                >
                  <div className="flex items-center mb-8">
                    <CogIcon className="w-8 h-8 text-[#c2b280] ml-4" />
                    <h3 className="text-2xl font-bold text-[#181b39]">متطلبات المحرك</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        نوع المحرك المطلوب *
                      </label>
                      <select
                        required
                        value={formData.engineType}
                        onChange={(e) => handleInputChange('engineType', e.target.value)}
                        className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-[#c2b280] focus:ring-2 focus:ring-[#c2b280]/20 transition-all duration-300"
                      >
                        <option value="">اختر نوع المحرك</option>
                        {engineTypes.map(type => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        نطاق القوة المطلوب *
                      </label>
                      <select
                        required
                        value={formData.powerRange}
                        onChange={(e) => handleInputChange('powerRange', e.target.value)}
                        className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-[#c2b280] focus:ring-2 focus:ring-[#c2b280]/20 transition-all duration-300"
                      >
                        <option value="">اختر نطاق القوة</option>
                        {powerRanges.map(range => (
                          <option key={range.value} value={range.value}>{range.label}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        الاستخدام المقصود *
                      </label>
                      <select
                        required
                        value={formData.usage}
                        onChange={(e) => handleInputChange('usage', e.target.value)}
                        className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-[#c2b280] focus:ring-2 focus:ring-[#c2b280]/20 transition-all duration-300"
                      >
                        <option value="">اختر نوع الاستخدام</option>
                        {usageTypes.map(usage => (
                          <option key={usage.value} value={usage.value}>{usage.label}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        عدد المحركات المطلوبة
                      </label>
                      <select
                        value={formData.engineCount}
                        onChange={(e) => handleInputChange('engineCount', e.target.value)}
                        className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-[#c2b280] focus:ring-2 focus:ring-[#c2b280]/20 transition-all duration-300"
                      >
                        <option value="1">محرك واحد</option>
                        <option value="2">محركان</option>
                        <option value="3">ثلاثة محركات</option>
                        <option value="4+">أكثر من ثلاثة</option>
                      </select>
                    </div>
                  </div>
                </motion.div>

                {/* Vessel Information */}
                <motion.div 
                  className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100"
                  variants={fadeInUp}
                >
                  <div className="flex items-center mb-8">
                    <ScaleIcon className="w-8 h-8 text-[#c2b280] ml-4" />
                    <h3 className="text-2xl font-bold text-[#181b39]">معلومات القارب/الوسيلة البحرية</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        نوع القارب *
                      </label>
                      <select
                        required
                        value={formData.vesselType}
                        onChange={(e) => handleInputChange('vesselType', e.target.value)}
                        className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-[#c2b280] focus:ring-2 focus:ring-[#c2b280]/20 transition-all duration-300"
                      >
                        <option value="">اختر نوع القارب</option>
                        {vesselTypes.map(type => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        طول القارب (متر)
                      </label>
                      <input
                        type="text"
                        value={formData.vesselLength}
                        onChange={(e) => handleInputChange('vesselLength', e.target.value)}
                        className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-[#c2b280] focus:ring-2 focus:ring-[#c2b280]/20 transition-all duration-300"
                        placeholder="مثال: 6.5 متر"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        سنة الصنع
                      </label>
                      <input
                        type="text"
                        value={formData.vesselYear}
                        onChange={(e) => handleInputChange('vesselYear', e.target.value)}
                        className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-[#c2b280] focus:ring-2 focus:ring-[#c2b280]/20 transition-all duration-300"
                        placeholder="مثال: 2020"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        المحرك الحالي (إن وجد)
                      </label>
                      <input
                        type="text"
                        value={formData.currentEngine}
                        onChange={(e) => handleInputChange('currentEngine', e.target.value)}
                        className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-[#c2b280] focus:ring-2 focus:ring-[#c2b280]/20 transition-all duration-300"
                        placeholder="نوع وقوة المحرك الحالي"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Project Details */}
                <motion.div 
                  className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100"
                  variants={fadeInUp}
                >
                  <div className="flex items-center mb-8">
                    <CalendarDaysIcon className="w-8 h-8 text-[#c2b280] ml-4" />
                    <h3 className="text-2xl font-bold text-[#181b39]">تفاصيل المشروع</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        الإطار الزمني المطلوب *
                      </label>
                      <select
                        required
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-[#c2b280] focus:ring-2 focus:ring-[#c2b280]/20 transition-all duration-300"
                      >
                        <option value="">اختر الإطار الزمني</option>
                        {timelineOptions.map(timeline => (
                          <option key={timeline.value} value={timeline.value}>{timeline.label}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        الأولوية الرئيسية *
                      </label>
                      <select
                        required
                        value={formData.priority}
                        onChange={(e) => handleInputChange('priority', e.target.value)}
                        className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-[#c2b280] focus:ring-2 focus:ring-[#c2b280]/20 transition-all duration-300"
                      >
                        <option value="">اختر الأولوية</option>
                        {priorityOptions.map(priority => (
                          <option key={priority.value} value={priority.value}>{priority.label}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        الميزانية المتوقعة (ريال سعودي)
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-[#c2b280] focus:ring-2 focus:ring-[#c2b280]/20 transition-all duration-300"
                      >
                        <option value="">اختر النطاق (اختياري)</option>
                        <option value="under-10k">أقل من 10,000 ريال</option>
                        <option value="10k-25k">10,000 - 25,000 ريال</option>
                        <option value="25k-50k">25,000 - 50,000 ريال</option>
                        <option value="50k-100k">50,000 - 100,000 ريال</option>
                        <option value="over-100k">أكثر من 100,000 ريال</option>
                        <option value="flexible">مرن حسب التوصيات</option>
                      </select>
                    </div>
                  </div>
                </motion.div>

                {/* Additional Information */}
                <motion.div 
                  className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100"
                  variants={fadeInUp}
                >
                  <div className="flex items-center mb-8">
                    <InformationCircleIcon className="w-8 h-8 text-[#c2b280] ml-4" />
                    <h3 className="text-2xl font-bold text-[#181b39]">معلومات إضافية</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        متطلبات أو مواصفات خاصة
                      </label>
                      <textarea
                        rows={4}
                        value={formData.additionalRequirements}
                        onChange={(e) => handleInputChange('additionalRequirements', e.target.value)}
                        className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-[#c2b280] focus:ring-2 focus:ring-[#c2b280]/20 transition-all duration-300 resize-none"
                        placeholder="اذكر أي متطلبات خاصة، ملحقات مطلوبة، أو استفسارات محددة..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        خبرتك السابقة مع المحركات البحرية
                      </label>
                      <select
                        value={formData.previousExperience}
                        onChange={(e) => handleInputChange('previousExperience', e.target.value)}
                        className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-[#c2b280] focus:ring-2 focus:ring-[#c2b280]/20 transition-all duration-300"
                      >
                        <option value="">اختر مستوى الخبرة</option>
                        <option value="beginner">مبتدئ - أول تجربة</option>
                        <option value="intermediate">متوسط - بعض الخبرة</option>
                        <option value="advanced">متقدم - خبرة واسعة</option>
                        <option value="professional">محترف - استخدام تجاري</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        طريقة التواصل المفضلة *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                            className="w-4 h-4 text-[#c2b280] focus:ring-[#c2b280]"
                          />
                          <span className="mr-2">مكالمة هاتفية</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="whatsapp"
                            checked={formData.preferredContact === 'whatsapp'}
                            onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                            className="w-4 h-4 text-[#c2b280] focus:ring-[#c2b280]"
                          />
                          <span className="mr-2">واتساب</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                            className="w-4 h-4 text-[#c2b280] focus:ring-[#c2b280]"
                          />
                          <span className="mr-2">بريد إلكتروني</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Submit Section */}
                <motion.div 
                  className="bg-gradient-to-l from-[#181b39] to-[#181b39]/90 rounded-3xl shadow-lg p-8 text-white text-center"
                  variants={fadeInUp}
                >
                  <h3 className="text-2xl font-bold mb-4">جاهز لإرسال طلبك؟</h3>
                  <p className="text-lg mb-8 opacity-90">
                    سيقوم فريقنا المتخصص بمراجعة طلبك وإرسال عرض سعر مفصل خلال 24 ساعة
                  </p>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-l from-[#c2b280] to-[#c2b280]/80 hover:from-[#c2b280]/90 hover:to-[#c2b280]/70 text-[#181b39] font-bold py-4 px-12 rounded-2xl text-xl transition-all duration-300 inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-6 h-6 border-2 border-[#181b39] border-t-transparent rounded-full mr-3"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        جاري الإرسال...
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="w-6 h-6 mr-3" />
                        إرسال طلب العرض
                      </>
                    )}
                  </motion.button>

                  {submitStatus === 'error' && (
                    <motion.div
                      className="mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center justify-center">
                        <ExclamationTriangleIcon className="w-6 h-6 text-red-300 ml-2" />
                        <span>حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.</span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Info Section */}
        <motion.section 
          className="py-20 bg-white"
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
              <h2 className="text-4xl md:text-5xl font-bold text-[#181b39] mb-6">
                أو تواصل معنا مباشرة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                إذا كنت تفضل التحدث مع أحد خبرائنا مباشرة أو لديك استفسارات عاجلة
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-gradient-to-bl from-[#181b39] to-[#181b39]/90 rounded-3xl p-8 text-white text-center"
                variants={fadeInUp}
                {...scaleOnHover}
              >
                <motion.div
                  className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <PhoneIcon className="w-8 h-8 text-[#c2b280]" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">اتصل بنا</h3>
                <a href="tel:+966543699901" className="text-[#c2b280] font-medium text-lg">
                  +966 54 369 9901
                </a>
                <p className="text-sm opacity-80 mt-2">السبت - الخميس: 8:00 ص - 6:00 م</p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-bl from-[#c2b280] to-[#c2b280]/90 rounded-3xl p-8 text-[#181b39] text-center"
                variants={fadeInUp}
                {...scaleOnHover}
              >
                <motion.div
                  className="w-16 h-16 bg-white/30 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <EnvelopeIcon className="w-8 h-8 text-[#181b39]" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">راسلنا</h3>
                <a href="mailto:jeddah@tohatsu-sa.com" className="text-[#181b39] font-medium text-lg">
                  jeddah@tohatsu-sa.com
                </a>
                <p className="text-sm opacity-80 mt-2">رد خلال 4 ساعات في أيام العمل</p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-bl from-slate-600 to-slate-700 rounded-3xl p-8 text-white text-center"
                variants={fadeInUp}
                {...scaleOnHover}
              >
                <motion.div
                  className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <BuildingOfficeIcon className="w-8 h-8 text-[#c2b280]" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">زر معرضنا</h3>
                <p className="text-[#c2b280] font-medium">
                  شارع الأمير سلطان، جدة
                </p>
                <p className="text-sm opacity-80 mt-2">استشارة مجانية ومعاينة المحركات</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}

export default QuotePage
