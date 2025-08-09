'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParticles } from '../utils/particlePositions'
import { useLanguage } from '../contexts/LanguageContext'
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

interface ContactMethod {
  title: string
  description: string
  info: string
  action: string
  color: string
  bgColor: string
}

interface Department {
  title: string
  description: string
  phone: string
  email: string
  hours: string
}

interface FAQ {
  question: string
  answer: string
}

interface ContentData {
  pageTitle: string
  heroDescription: string
  stats: {
    happyCustomers: string
    supportAvailable: string
    yearsExperience: string
    serviceLocations: string
  }
  statsLabels: {
    happyCustomers: string
    supportAvailable: string
    yearsExperience: string
    serviceLocations: string
  }
  contactMethodsTitle: string
  contactMethodsDescription: string
  contactMethods: ContactMethod[]
  formTitle: string
  formLabels: {
    fullName: string
    email: string
    phoneNumber: string
    engineType: string
    message: string
    sendMessage: string
  }
  formPlaceholders: {
    fullName: string
    email: string
    phoneNumber: string
    engineType: string
    message: string
  }
  engineTypes: {
    selectEngine: string
    gasoline: string
    diesel: string
    airCooled: string
  }
  departmentsTitle: string
  departmentsDescription: string
  departments: Department[]
  faqTitle: string
  faqDescription: string
  faqs: FAQ[]
  faqCta: string
}

export default function ContactPage() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const { language, isRTL } = useLanguage()
  
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

  const [submitted, setSubmitted] = useState<'idle'|'success'|'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          engineType: formData.engineType,
          message: formData.message,
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setSubmitted('success')
      setFormData({ name: '', email: '', phone: '', engineType: '', message: '' })
    } catch {
      setSubmitted('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const content: Record<'ar' | 'en', ContentData> = {
    ar: {
      pageTitle: 'اتصل بنا',
      heroDescription: 'نحن هنا لمساعدتك في كل ما تحتاجه. من الاستشارات التقنية إلى خدمة ما بعد البيع، فريقنا المتخصص جاهز لتقديم أفضل الدعم لك.',
      stats: {
        happyCustomers: '+100',
        supportAvailable: '24/7',
        yearsExperience: '15+',
        serviceLocations: '5'
      },
      statsLabels: {
        happyCustomers: 'عميل راضٍ',
        supportAvailable: 'دعم متاح',
        yearsExperience: 'سنة خبرة',
        serviceLocations: 'مواقع خدمة'
      },
      contactMethodsTitle: 'طرق التواصل',
      contactMethodsDescription: 'اختر الطريقة الأنسب للتواصل معنا، نحن متاحون لخدمتك بأفضل الطرق الممكنة',
             contactMethods: [
         {
           title: 'اتصل بنا مباشرة',
           description: 'للاستفسارات العاجلة والدعم الفوري',
           info: '+966 54 369 9901',
           action: 'tel:+966543699901',
           color: 'from-emerald-500 to-emerald-600',
           bgColor: 'from-emerald-50 to-teal-50'
         },
         {
           title: 'راسلنا عبر البريد',
           description: 'للاستفسارات التفصيلية والوثائق',
           info: 'info@tohatsuarabia.com',
           action: 'mailto:info@tohatsuarabia.com',
           color: 'from-[#181b39] to-[#181b39]/80',
           bgColor: 'from-[#181b39]/5 to-[#181b39]/10'
         },
        {
          title: 'قم بزيارة مكاتبنا',
          description: 'للاستشارات الشخصية ومعاينة المحركات',
          info: 'الرياض، المملكة العربية السعودية',
          action: '#location',
          color: 'from-[#c2b280] to-[#c2b280]/80',
          bgColor: 'from-[#c2b280]/10 to-[#c2b280]/20'
        },
        {
          title: 'محادثة مباشرة',
          description: 'دعم فوري من خبرائنا المتخصصين',
          info: 'متاح 24/7',
          action: '#chat',
          color: 'from-slate-600 to-slate-700',
          bgColor: 'from-slate-50 to-gray-50'
        }
      ],
      formTitle: 'أرسل لنا رسالة',
      formLabels: {
        fullName: 'الاسم الكامل *',
        email: 'البريد الإلكتروني *',
        phoneNumber: 'رقم الهاتف',
        engineType: 'نوع المحرك',
        message: 'الرسالة *',
        sendMessage: 'إرسال الرسالة'
      },
             formPlaceholders: {
         fullName: 'أدخل اسمك الكامل',
         email: 'example@email.com',
         phoneNumber: '+966 54 369 9901',
         engineType: 'اختر نوع المحرك',
         message: 'اكتب رسالتك هنا...'
       },
      engineTypes: {
        selectEngine: 'اختر نوع المحرك',
        gasoline: 'بنزين',
        diesel: 'ديزل',
        airCooled: 'مبرد بالهواء'
      },
      departmentsTitle: 'أقسامنا المتخصصة',
      departmentsDescription: 'اتصل بالقسم المناسب مباشرة حسب احتياجك',
             departments: [
         {
           title: 'المبيعات والاستشارات',
           description: 'اختيار المحركات وعروض الأسعار',
           phone: '+966 54 369 9901',
           email: 'sales@tohatsuarabia.com',
           hours: 'الأحد - الخميس: 9:00 ص - 6:00 م'
         },
         {
           title: 'الصيانة والدعم التقني',
           description: 'خدمات الصيانة وحل المشاكل التقنية',
           phone: '+966 54 369 9901',
           email: 'support@tohatsuarabia.com',
           hours: 'الأحد - الخميس: 8:00 ص - 5:00 م'
         },
         {
           title: 'خدمة العملاء',
           description: 'الاستفسارات العامة والمساعدة',
           phone: '+966 54 369 9901',
           email: 'info@tohatsuarabia.com',
           hours: 'الأحد - الخميس: 9:00 ص - 5:00 م'
         }
      ],
      faqTitle: 'الأسئلة الشائعة',
      faqDescription: 'إجابات سريعة لأكثر الأسئلة شيوعاً حول منتجاتنا وخدماتنا',
      faqs: [
        {
          question: 'ما هي فترة الضمان لمحركات توهاتسو؟',
          answer: 'نقدم ضماناً شاملاً لمدة عامين على جميع محركاتنا، بالإضافة إلى دعم ما بعد البيع والصيانة الدورية.'
        },
        {
          question: 'هل قطع الغيار الأصلية متوفرة في السعودية؟',
          answer: 'نعم، نحتفظ بمخزون كامل من قطع الغيار الأصلية في جميع مراكز الخدمة المعتمدة في أنحاء المملكة.'
        },
        {
          question: 'كم يستغرق وقت الصيانة الدورية؟',
          answer: 'تستغرق الصيانة الدورية عادة من 2-4 ساعات حسب نوع المحرك والخدمات المطلوبة.'
        },
        {
          question: 'هل يمكنني طلب خدمة الصيانة في الموقع؟',
          answer: 'نعم، نقدم خدمات الصيانة المتنقلة في المناطق الرئيسية للمحركات الكبيرة والحالات الطارئة.'
        },
        {
          question: 'ما هي طرق الدفع المتاحة؟',
          answer: 'نقبل جميع طرق الدفع: نقداً، تحويل بنكي، بطاقات ائتمانية، ودفع بالأقساط للمبالغ الكبيرة.'
        }
      ],
      faqCta: 'لم تجد إجابة؟ اسألنا مباشرة'
    },
    en: {
      pageTitle: 'Contact Us',
      heroDescription: "We're here to help you with everything you need. From technical consultations to after-sales service, our specialized team is ready to provide you with the best support.",
      stats: {
        happyCustomers: '+100',
        supportAvailable: '24/7',
        yearsExperience: '15+',
        serviceLocations: '5'
      },
      statsLabels: {
        happyCustomers: 'Happy Customers',
        supportAvailable: 'Support Available',
        yearsExperience: 'Years Experience',
        serviceLocations: 'Service Locations'
      },
      contactMethodsTitle: 'Contact Methods',
      contactMethodsDescription: 'Choose the most convenient way to contact us, we\'re available to serve you in the best possible ways',
             contactMethods: [
         {
           title: 'Call Us Directly',
           description: 'For urgent inquiries and immediate support',
           info: '+966 54 369 9901',
           action: 'tel:+966543699901',
           color: 'from-emerald-500 to-emerald-600',
           bgColor: 'from-emerald-50 to-teal-50'
         },
         {
           title: 'Email Us',
           description: 'For detailed inquiries and documentation',
           info: 'info@tohatsuarabia.com',
           action: 'mailto:info@tohatsuarabia.com',
           color: 'from-[#181b39] to-[#181b39]/80',
           bgColor: 'from-[#181b39]/5 to-[#181b39]/10'
         },
        {
          title: 'Visit Our Offices',
          description: 'For personal consultations and engine viewing',
          info: 'Riyadh, Saudi Arabia',
          action: '#location',
          color: 'from-[#c2b280] to-[#c2b280]/80',
          bgColor: 'from-[#c2b280]/10 to-[#c2b280]/20'
        },
        {
          title: 'Live Chat',
          description: 'Instant support from our specialized experts',
          info: 'Available 24/7',
          action: '#chat',
          color: 'from-slate-600 to-slate-700',
          bgColor: 'from-slate-50 to-gray-50'
        }
      ],
      formTitle: 'Send Us a Message',
      formLabels: {
        fullName: 'Full Name *',
        email: 'Email *',
        phoneNumber: 'Phone Number',
        engineType: 'Engine Type',
        message: 'Message *',
        sendMessage: 'Send Message'
      },
             formPlaceholders: {
         fullName: 'Enter your full name',
         email: 'example@email.com',
         phoneNumber: '+966 54 369 9901',
         engineType: 'Select Engine Type',
         message: 'Write your message here...'
       },
      engineTypes: {
        selectEngine: 'Select Engine Type',
        gasoline: 'Gasoline',
        diesel: 'Diesel',
        airCooled: 'Air-Cooled'
      },
      departmentsTitle: 'Our Specialized Departments',
      departmentsDescription: 'Contact the appropriate department directly for your needs',
             departments: [
         {
           title: 'Sales & Consultations',
           description: 'Engine selection and price quotes',
           phone: '+966 54 369 9901',
           email: 'sales@tohatsuarabia.com',
           hours: 'Sunday - Thursday: 9:00 AM - 6:00 PM'
         },
         {
           title: 'Maintenance & Technical Support',
           description: 'Maintenance services and technical problem solving',
           phone: '+966 54 369 9901',
           email: 'support@tohatsuarabia.com',
           hours: 'Sunday - Thursday: 8:00 AM - 5:00 PM'
         },
         {
           title: 'Customer Service',
           description: 'General inquiries and assistance',
           phone: '+966 54 369 9901',
           email: 'info@tohatsuarabia.com',
           hours: 'Sunday - Thursday: 9:00 AM - 5:00 PM'
         }
      ],
      faqTitle: 'Frequently Asked Questions',
      faqDescription: 'Quick answers to the most common questions about our products and services',
      faqs: [
        {
          question: 'What is the warranty period for Tohatsu engines?',
          answer: 'We provide a comprehensive 2-year warranty on all our engines, plus after-sales support and regular maintenance.'
        },
        {
          question: 'Are original spare parts available in Saudi Arabia?',
          answer: 'Yes, we maintain a complete inventory of original spare parts at all authorized service centers throughout the Kingdom.'
        },
        {
          question: 'How long does regular maintenance take?',
          answer: 'Regular maintenance typically takes 2-4 hours depending on the engine type and required services.'
        },
        {
          question: 'Can I request on-site maintenance service?',
          answer: 'Yes, we provide mobile maintenance services in major areas for large engines and emergency cases.'
        },
        {
          question: 'What payment methods are available?',
          answer: 'We accept all payment methods: cash, bank transfer, credit cards, and installment payments for large amounts.'
        }
      ],
      faqCta: "Didn't find an answer? Ask us directly"
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
          className="relative min-h-[70vh] flex items-center justify-center text-center text-white overflow-hidden bg-gradient-to-bl from-[#181b39] via-[#181b39]/90 to-[#c2b280]/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
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
                  [isRTL ? 'right' : 'left']: `${particle.right}%`,
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
                <SparklesIcon className={`w-16 h-16 text-[#c2b280] ${isRTL ? 'ml-4' : 'mr-4'}`} />
                <h1 className="text-5xl md:text-6xl font-bold">
                  {currentContent.pageTitle}
                </h1>
              </motion.div>
              
              <motion.p 
                className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90"
                initial={{ y: 20, opacity: 0 }}
                animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {currentContent.heroDescription}
              </motion.p>

              {/* Working hours schedule */}
              <motion.div
                className="max-w-xl mx-auto bg-white/80 text-[#181b39] rounded-2xl p-6 shadow-md border border-white/30 backdrop-blur-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <h3 className="text-lg font-bold mb-4">{language === 'ar' ? 'ساعات العمل' : 'Working Hours'}</h3>
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  {(language === 'ar' ? [
                    { day: 'السبت', time: '4–8 م' },
                    { day: 'الأحد', time: '8 ص–12 م ، 4–8 م' },
                    { day: 'الاثنين', time: '8 ص–12 م ، 4–8 م' },
                    { day: 'الثلاثاء', time: '8 ص–12 م ، 4–8 م' },
                    { day: 'الأربعاء', time: '8 ص–12 م ، 4–8 م' },
                    { day: 'الخميس', time: '8 ص–12 م ، 4–8 م' },
                    { day: 'الجمعة', time: 'مغلق' },
                  ] : [
                    { day: 'Saturday', time: '4–8 PM' },
                    { day: 'Sunday', time: '8 AM–Noon, 4–8 PM' },
                    { day: 'Monday', time: '8 AM–Noon, 4–8 PM' },
                    { day: 'Tuesday', time: '8 AM–Noon, 4–8 PM' },
                    { day: 'Wednesday', time: '8 AM–Noon, 4–8 PM' },
                    { day: 'Thursday', time: '8 AM–Noon, 4–8 PM' },
                    { day: 'Friday', time: 'Closed' },
                  ]).map((row, i) => (
                    <>
                      <div key={`d-${i}`} className="font-semibold">{row.day}</div>
                      <div key={`t-${i}`} className="opacity-80">{row.time}</div>
                    </>
                  ))}
                </div>
              </motion.div>
 
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="text-center">
                  <PhoneIcon className="w-12 h-12 text-[#c2b280] mb-4" />
                  <p className="text-lg font-bold text-[#181b39]">
                    {currentContent.contactMethods[0].info}
                  </p>
                  <p className="text-sm text-gray-600">
                    {currentContent.contactMethods[0].description}
                  </p>
                </div>
                <div className="text-center">
                  <EnvelopeIcon className="w-12 h-12 text-[#c2b280] mb-4" />
                  <p className="text-lg font-bold text-[#181b39]">
                    {currentContent.contactMethods[1].info}
                  </p>
                  <p className="text-sm text-gray-600">
                    {currentContent.contactMethods[1].description}
                  </p>
                </div>
                <div className="text-center">
                  <MapPinIcon className="w-12 h-12 text-[#c2b280] mb-4" />
                  <p className="text-lg font-bold text-[#181b39]">
                    {currentContent.contactMethods[2].info}
                  </p>
                  <p className="text-sm text-gray-600">
                    {currentContent.contactMethods[2].description}
                  </p>
                </div>
                <div className="text-center">
                  <ChatBubbleLeftRightIcon className="w-12 h-12 text-[#c2b280] mb-4" />
                  <p className="text-lg font-bold text-[#181b39]">
                    {currentContent.contactMethods[3].info}
                  </p>
                  <p className="text-sm text-gray-600">
                    {currentContent.contactMethods[3].description}
                  </p>
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
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <ChatBubbleLeftRightIcon className="w-12 h-12 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#181b39]">
                  {currentContent.contactMethodsTitle}
                </h2>
              </motion.div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {currentContent.contactMethodsDescription}
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {currentContent.contactMethods.map((method, index) => {
                const icons = [PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftRightIcon]
                const Icon = icons[index]
                return (
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
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-[#181b39] mb-3 group-hover:text-[#181b39]/80 transition-colors duration-300">
                      {method.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {method.description}
                    </p>
                    
                    <div className="font-semibold text-[#c2b280] group-hover:text-[#c2b280]/80 transition-colors duration-300" dir={method.action.startsWith('tel:') ? 'ltr' : 'auto'}>
                      {method.info}
                    </div>
                  </motion.a>
                )
              })}
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
                    className={isRTL ? "ml-4" : "mr-4"}
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <DocumentTextIcon className="w-10 h-10 text-[#c2b280]" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-[#181b39]">
                    {currentContent.formTitle}
                  </h3>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {currentContent.formLabels.fullName}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2b280] focus:border-[#c2b280] transition-colors duration-200"
                        placeholder={currentContent.formPlaceholders.fullName}
                        dir={isRTL ? 'rtl' : 'ltr'}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {currentContent.formLabels.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2b280] focus:border-[#c2b280] transition-colors duration-200"
                        placeholder={currentContent.formPlaceholders.email}
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        {currentContent.formLabels.phoneNumber}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2b280] focus:border-[#c2b280] transition-colors duration-200"
                        placeholder={currentContent.formPlaceholders.phoneNumber}
                        dir="ltr"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="engineType" className="block text-sm font-medium text-gray-700 mb-2">
                        {currentContent.formLabels.engineType}
                      </label>
                      <select
                        id="engineType"
                        name="engineType"
                        value={formData.engineType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2b280] focus:border-[#c2b280] transition-colors duration-200"
                        dir={isRTL ? 'rtl' : 'ltr'}
                      >
                        <option value="">{currentContent.engineTypes.selectEngine}</option>
                        <option value="gasoline">{currentContent.engineTypes.gasoline}</option>
                        <option value="diesel">{currentContent.engineTypes.diesel}</option>
                        <option value="air-cooled">{currentContent.engineTypes.airCooled}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.formLabels.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2b280] focus:border-[#c2b280] transition-colors duration-200 resize-vertical"
                      placeholder={currentContent.formPlaceholders.message}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 bg-gradient-to-l from-[#c2b280] to-[#c2b280]/80 hover:from-[#c2b280]/90 hover:to-[#c2b280]/70 text-[#181b39] shadow-lg`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {currentContent.formLabels.sendMessage}
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
                      className={isRTL ? "ml-4" : "mr-4"}
                      animate={{ 
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <UserGroupIcon className="w-10 h-10 text-[#c2b280]" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-[#181b39]">
                      {currentContent.departmentsTitle}
                    </h3>
                  </motion.div>
                  <p className="text-gray-600">
                    {currentContent.departmentsDescription}
                  </p>
                </motion.div>

                {currentContent.departments.map((dept, index) => {
                  const icons = [CogIcon, WrenchScrewdriverIcon, UserGroupIcon]
                  const Icon = icons[index]
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 p-6 border border-gray-100"
                      variants={fadeInUp}
                      {...scaleOnHover}
                    >
                      <div className="flex items-start">
                        <motion.div
                          className={`w-12 h-12 bg-gradient-to-bl from-[#c2b280] to-[#c2b280]/80 rounded-xl flex items-center justify-center ${isRTL ? 'ml-4' : 'mr-4'} flex-shrink-0`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-[#181b39] mb-2">
                            {dept.title}
                          </h4>
                          <p className="text-gray-600 mb-4 text-sm">
                            {dept.description}
                          </p>
                          
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center">
                              <PhoneIcon className={`w-4 h-4 text-gray-400 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                              <a 
                                href={`tel:${dept.phone.replace(/\s/g, '')}`}
                                className="text-[#c2b280] font-medium hover:text-[#c2b280]/80 transition-colors duration-200"
                                dir="ltr"
                              >
                                {dept.phone}
                              </a>
                            </div>
                            <div className="flex items-center">
                              <EnvelopeIcon className={`w-4 h-4 text-gray-400 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                              <a 
                                href={`mailto:${dept.email}`}
                                className="text-[#c2b280] font-medium hover:text-[#c2b280]/80 transition-colors duration-200"
                                dir="ltr"
                              >
                                {dept.email}
                              </a>
                            </div>
                            <div className="flex items-center">
                              <ClockIcon className={`w-4 h-4 text-gray-400 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                              <span className="text-gray-500 text-xs">{dept.hours}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
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
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <HeartIcon className="w-12 h-12 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#181b39]">
                  {currentContent.faqTitle}
                </h2>
              </motion.div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {currentContent.faqDescription}
              </p>
            </motion.div>

            <motion.div 
              className="max-w-4xl mx-auto space-y-6"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {currentContent.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 p-6 border border-gray-100"
                  variants={fadeInUp}
                  {...scaleOnHover}
                >
                  <h4 className="text-xl font-bold text-[#181b39] mb-3">
                    {faq.question}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
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
                href="tel:+966543699901"
                className="group bg-gradient-to-l from-[#c2b280] to-[#c2b280]/80 hover:from-[#c2b280]/90 hover:to-[#c2b280]/70 text-[#181b39] font-bold py-4 px-10 rounded-xl text-xl transition-all duration-300 inline-flex items-center shadow-lg"
                {...scaleOnHover}
              >
                <PhoneIcon className={`w-6 h-6 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                <motion.div
                  animate={{ 
                    x: isRTL ? [-3, 0, -3] : [0, 3, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {currentContent.faqCta}
                </motion.div>
              </motion.a>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
