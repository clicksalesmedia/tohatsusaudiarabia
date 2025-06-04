'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParticles } from '../utils/particlePositions'
import { 
  QuestionMarkCircleIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CogIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  TruckIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  InformationCircleIcon,
  LightBulbIcon
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

interface FAQ {
  id: number
  question: string
  answer: string
  category: string
}

export default function FAQPage() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  
  // Use consistent particle positions to prevent hydration errors
  const heroParticles = useParticles(15, 'faq-hero')

  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const categories = [
    { id: 'all', label: 'جميع الأسئلة', icon: QuestionMarkCircleIcon },
    { id: 'general', label: 'أسئلة عامة', icon: InformationCircleIcon },
    { id: 'technical', label: 'المواصفات التقنية', icon: CogIcon },
    { id: 'maintenance', label: 'الصيانة والخدمة', icon: WrenchScrewdriverIcon },
    { id: 'warranty', label: 'الضمان والدعم', icon: ShieldCheckIcon },
    { id: 'purchasing', label: 'الشراء والأسعار', icon: CurrencyDollarIcon },
    { id: 'installation', label: 'التركيب والإعداد', icon: TruckIcon }
  ]

  const faqs: FAQ[] = [
    // General Questions
    {
      id: 1,
      category: 'general',
      question: 'ما هي مميزات محركات توهاتسو البحرية؟',
      answer: 'محركات توهاتسو تتميز بالموثوقية العالية، كفاءة الوقود الاستثنائية، التقنية اليابانية المتقدمة، وعمر خدمة يتجاوز 20 عاماً. تقدم أداءً متفوقاً في جميع الظروف البحرية مع صوت هادئ وانبعاثات منخفضة.'
    },
    {
      id: 2,
      category: 'general',
      question: 'ما هي أنواع المحركات المتوفرة؟',
      answer: 'نوفر ثلاث فئات رئيسية: المحركات المحمولة (2.5-20 حصان) للقوارب الصغيرة، المحركات المتوسطة (25-90 حصان) للاستخدام العام، والمحركات عالية القوة (100-140 حصان) للاستخدام التجاري والرياضي.'
    },
    {
      id: 3,
      category: 'general',
      question: 'هل توهاتسو مناسبة للمياه المالحة؟',
      answer: 'نعم، جميع محركات توهاتسو مصممة خصيصاً لتحمل المياه المالحة مع طلاء مقاوم للتآكل، أنودات حماية، ونظام تبريد محسّن. مثالية للاستخدام في البحر الأحمر والخليج العربي.'
    },
    {
      id: 4,
      category: 'general',
      question: 'كم يبلغ استهلاك الوقود؟',
      answer: 'محركات توهاتسو توفر حتى 40% من الوقود مقارنة بالمحركات التقليدية. على سبيل المثال، محرك 15 حصان يستهلك حوالي 3-4 لتر/ساعة، بينما محرك 90 حصان يستهلك 15-18 لتر/ساعة.'
    },

    // Technical Specifications
    {
      id: 5,
      category: 'technical',
      question: 'ما هي أقصى سرعة يمكن الوصول إليها؟',
      answer: 'تعتمد السرعة على نوع القارب ووزنه. عموماً: المحركات المحمولة تصل إلى 25-35 كم/ساعة، المتوسطة 40-60 كم/ساعة، وعالية القوة تتجاوز 70 كم/ساعة مع القوارب المناسبة.'
    },
    {
      id: 6,
      category: 'technical',
      question: 'ما نوع الوقود المستخدم؟',
      answer: 'تستخدم محركات توهاتسو البنزين العادي (أوكتان 87 أو أعلى). بعض الموديلات تدعم الإيثانول حتى E10. لا ننصح باستخدام وقود قديم أو ملوث.'
    },
    {
      id: 7,
      category: 'technical',
      question: 'كيف يعمل نظام التبريد؟',
      answer: 'جميع محركاتنا تستخدم نظام التبريد بالمياه مع مضخة داخلية. المياه تُسحب من القاع وتُضخ عبر المحرك للتبريد، ثم تُطرد مع العادم. نوصي بفحص مضخة المياه سنوياً.'
    },
    {
      id: 8,
      category: 'technical',
      question: 'ما هو نوع نظام الإشعال؟',
      answer: 'تستخدم محركات توهاتسو نظام الإشعال الإلكتروني CDI المتقدم الذي يضمن إشعالاً قوياً ومستقراً في جميع الظروف، مع استهلاك أقل للوقود وانبعاثات أنظف.'
    },

    // Maintenance and Service
    {
      id: 9,
      category: 'maintenance',
      question: 'كم مرة يحتاج المحرك للصيانة؟',
      answer: 'الصيانة الأساسية كل 100 ساعة تشغيل أو سنوياً (أيهما أقل). تشمل: تغيير الزيت، فحص شمعات الإشعال، تنظيف الفلاتر، وفحص مضخة المياه. الصيانة الشاملة كل 300 ساعة.'
    },
    {
      id: 10,
      category: 'maintenance',
      question: 'كيف أحافظ على المحرك في فصل الشتاء؟',
      answer: 'قم بتنظيف المحرك من الملح، تغيير الزيت، تفريغ خزان الوقود أو إضافة مثبت وقود، رش نظام التبريد بالمياه العذبة، وتخزينه في مكان جاف ومغطى.'
    },
    {
      id: 11,
      category: 'maintenance',
      question: 'متى أحتاج لتغيير الزيت؟',
      answer: 'غيّر الزيت بعد أول 20 ساعة تشغيل للمحركات الجديدة، ثم كل 100 ساعة أو سنوياً. استخدم زيت 10W-30 للمحركات رباعية الأشواط، وزيت مخصص للمحركات ثنائية الأشواط.'
    },
    {
      id: 12,
      category: 'maintenance',
      question: 'أين يمكنني الحصول على قطع الغيار؟',
      answer: 'قطع الغيار الأصلية متوفرة في معرضنا في جدة وشبكة موزعينا المعتمدين. نحتفظ بمخزون كامل لجميع القطع الاستهلاكية ونوفر التوصيل السريع.'
    },

    // Warranty and Support
    {
      id: 13,
      category: 'warranty',
      question: 'ما هي مدة الضمان؟',
      answer: 'نوفر ضمان شامل 3 سنوات أو 300 ساعة تشغيل (أيهما أقل) يغطي جميع عيوب التصنيع وقطع الغيار. الضمان قابل للتمديد مع خطط الصيانة المدفوعة.'
    },
    {
      id: 14,
      category: 'warranty',
      question: 'ما الذي يغطيه الضمان؟',
      answer: 'يغطي الضمان جميع عيوب التصنيع، قطع المحرك الداخلية، نظام الإشعال، مضخة المياه، ونظام الوقود. لا يغطي الأضرار الناتجة عن سوء الاستخدام أو الحوادث.'
    },
    {
      id: 15,
      category: 'warranty',
      question: 'كيف أحصل على الدعم التقني؟',
      answer: 'دعمنا التقني متاح 24/7 عبر الهاتف والواتساب والبريد الإلكتروني. فريقنا من المهندسين المعتمدين جاهز لحل أي مشكلة تقنية أو تقديم الاستشارة.'
    },
    {
      id: 16,
      category: 'warranty',
      question: 'هل يمكن إصلاح المحرك في أي مكان؟',
      answer: 'لضمان جودة الإصلاح والحفاظ على الضمان، ننصح بالإصلاح في مراكزنا المعتمدة. لدينا شبكة خدمة تغطي جميع مناطق المملكة مع فنيين مدربين.'
    },

    // Purchasing and Pricing
    {
      id: 17,
      category: 'purchasing',
      question: 'كيف يمكنني شراء محرك توهاتسو؟',
      answer: 'يمكنك زيارة معرضنا في جدة، طلب عرض سعر عبر الموقع، أو التواصل مع فريق المبيعات. نوفر استشارة مجانية لاختيار المحرك المناسب لاحتياجاتك.'
    },
    {
      id: 18,
      category: 'purchasing',
      question: 'ما هي طرق الدفع المتاحة؟',
      answer: 'نقبل الدفع النقدي، التحويل البنكي، بطاقات الائتمان (فيزا/ماستركارد)، والتقسيط عبر شركات التمويل المعتمدة. نوفر خطط تقسيط مرنة تصل إلى 36 شهر.'
    },
    {
      id: 19,
      category: 'purchasing',
      question: 'هل يمكن استبدال المحرك القديم؟',
      answer: 'نعم، نوفر برنامج استبدال المحركات القديمة مقابل خصم على المحرك الجديد. قيمة الاستبدال تعتمد على نوع وحالة المحرك القديم.'
    },
    {
      id: 20,
      category: 'purchasing',
      question: 'كم تستغرق عملية التسليم؟',
      answer: 'المحركات المتوفرة في المخزون تُسلم فوراً. الطلبات الخاصة تستغرق 2-4 أسابيع. نوفر خدمة التوصيل المجاني داخل جدة والمدن الرئيسية.'
    },

    // Installation and Setup
    {
      id: 21,
      category: 'installation',
      question: 'هل يمكنني تركيب المحرك بنفسي؟',
      answer: 'المحركات المحمولة بسيطة التركيب، بينما المحركات الكبيرة تحتاج تركيب احترافي. نوفر خدمة التركيب مع ضمان العمل، وننصح بها للحفاظ على الضمان.'
    },
    {
      id: 22,
      category: 'installation',
      question: 'ما المعدات الإضافية المطلوبة؟',
      answer: 'حسب المحرك قد تحتاج: عدة التحكم عن بعد، خزان وقود خارجي، مراوح بحجم مناسب، وكابلات. فريقنا سيقدم قائمة كاملة بالمعدات المطلوبة.'
    },
    {
      id: 23,
      category: 'installation',
      question: 'كيف أختار المراوح المناسبة؟',
      answer: 'اختيار المراوح يعتمد على نوع القارب، الوزن، والاستخدام المقصود. نوفر استشارة مجانية لاختيار المراوح المثلى لتحقيق أفضل أداء وكفاءة وقود.'
    },
    {
      id: 24,
      category: 'installation',
      question: 'ما هي متطلبات التركيب للمحركات الكبيرة؟',
      answer: 'المحركات فوق 40 حصان تحتاج: تعزيز مؤخرة القارب، نظام توجيه هيدروليكي، خزان وقود بحجم مناسب، وتوصيلات كهربائية متخصصة. نوفر خدمة التقييم والتركيب الشامل.'
    }
  ]

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
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
                <QuestionMarkCircleIcon className="w-16 h-16 text-[#c2b280]" />
              </motion.div>
              <div className="text-right">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  الأسئلة الشائعة
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#c2b280]">
                  إجابات شاملة لجميع استفساراتك
                </h2>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-xl sm:text-2xl mb-8 leading-relaxed opacity-90"
              initial={{ y: 30, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              تجد هنا إجابات مفصلة لأكثر الأسئلة شيوعاً حول محركات توهاتسو البحرية
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm"
              initial={{ y: 30, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                🔍 بحث سريع وذكي
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                📚 أكثر من 20 سؤال شائع
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                💡 إجابات من الخبراء
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Search and Filter Section */}
        <motion.section 
          className="py-16 bg-gradient-to-bl from-gray-50 to-white"
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
              {/* Search Bar */}
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 mb-8">
                <div className="relative">
                  <label className="block text-lg font-bold text-[#181b39] mb-4 text-center">
                    ابحث في الأسئلة الشائعة
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="اكتب كلمة مفتاحية للبحث..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full py-4 px-6 pr-12 rounded-xl border-2 border-gray-200 focus:border-[#c2b280] focus:ring-2 focus:ring-[#c2b280]/20 transition-all duration-300 text-lg"
                    />
                    <MagnifyingGlassIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Category Filter */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
                {categories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <motion.button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`p-4 rounded-2xl text-center transition-all duration-300 ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-bl from-[#c2b280] to-[#c2b280]/80 text-[#181b39] shadow-lg'
                          : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className={`w-6 h-6 mx-auto mb-2 ${
                        activeCategory === category.id ? 'text-[#181b39]' : 'text-[#c2b280]'
                      }`} />
                      <span className="text-sm font-medium">{category.label}</span>
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
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
              className="max-w-4xl mx-auto"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {filteredFAQs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFAQs.map((faq) => (
                    <motion.div
                      key={faq.id}
                      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                      variants={fadeInUp}
                      {...scaleOnHover}
                    >
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full p-6 text-right hover:bg-gray-50 transition-all duration-300 flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          {expandedFAQ === faq.id ? (
                            <ChevronUpIcon className="w-6 h-6 text-[#c2b280] ml-4" />
                          ) : (
                            <ChevronDownIcon className="w-6 h-6 text-[#c2b280] ml-4" />
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-[#181b39] flex-1">
                          {faq.question}
                        </h3>
                      </button>
                      
                      <AnimatePresence>
                        {expandedFAQ === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pt-2">
                              <div className="border-t border-gray-200 pt-4">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <MagnifyingGlassIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-600 mb-2">لم يتم العثور على نتائج</h3>
                  <p className="text-gray-500">جرب تغيير كلمات البحث أو اختيار فئة أخرى</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.section>

        {/* Need More Help Section */}
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
                  <LightBulbIcon className="w-12 h-12 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#181b39]">
                  لم تجد إجابة سؤالك؟
                </h2>
              </motion.div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                فريق الخبراء لدينا جاهز لمساعدتك في أي استفسار تقني أو تجاري
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
                <a href="tel:+966122345678" className="text-[#c2b280] font-medium text-lg">
                  +966 12 234 5678
                </a>
                <p className="text-sm opacity-80 mt-2">دعم فوري من 8 ص - 6 م</p>
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
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-[#181b39]" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">واتساب</h3>
                <a href="https://wa.me/966501234567" className="text-[#181b39] font-medium text-lg">
                  +966 50 123 4567
                </a>
                <p className="text-sm opacity-80 mt-2">دردشة مباشرة 24/7</p>
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
                  <EnvelopeIcon className="w-8 h-8 text-[#c2b280]" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">راسلنا</h3>
                <a href="mailto:jeddah@tohatsu-sa.com" className="text-[#c2b280] font-medium">
                  jeddah@tohatsu-sa.com
                </a>
                <p className="text-sm opacity-80 mt-2">رد خلال 4 ساعات</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
