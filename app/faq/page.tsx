'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParticles } from '../utils/particlePositions'
import { useLanguage } from '../contexts/LanguageContext'
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
  const { language, isRTL } = useLanguage()
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  
  // Use consistent particle positions to prevent hydration errors
  const heroParticles = useParticles(15, 'faq-hero')

  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const translations = {
    ar: {
      title: 'الأسئلة الشائعة',
      subtitle: 'إجابات شاملة لجميع استفساراتك',
      description: 'تجد هنا إجابات مفصلة لأكثر الأسئلة شيوعاً حول محركات توهاتسو البحرية',
      features: {
        search: '🔍 بحث سريع وذكي',
        questions: '📚 أكثر من 20 سؤال شائع',
        experts: '💡 إجابات من الخبراء'
      },
      searchLabel: 'ابحث في الأسئلة الشائعة',
      searchPlaceholder: 'اكتب كلمة مفتاحية للبحث...',
      noResults: 'لم يتم العثور على نتائج',
      noResultsDesc: 'جرب تغيير كلمات البحث أو اختيار فئة أخرى',
      needHelp: 'لم تجد إجابة سؤالك؟',
      needHelpDesc: 'فريق الخبراء لدينا جاهز لمساعدتك في أي استفسار تقني أو تجاري',
      contact: {
        call: 'اتصل بنا',
        callTime: 'دعم فوري من 8 ص - 6 م',
        whatsapp: 'واتساب',
        whatsappTime: 'دردشة مباشرة 24/7',
        email: 'راسلنا',
        emailTime: 'رد خلال 4 ساعات'
      }
    },
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Comprehensive Answers to All Your Inquiries',
      description: 'Find detailed answers to the most common questions about Tohatsu marine engines',
      features: {
        search: '🔍 Quick & Smart Search',
        questions: '📚 Over 20 Common Questions',
        experts: '💡 Expert Answers'
      },
      searchLabel: 'Search Frequently Asked Questions',
      searchPlaceholder: 'Type a keyword to search...',
      noResults: 'No results found',
      noResultsDesc: 'Try changing your search terms or selecting a different category',
      needHelp: "Didn't find your answer?",
      needHelpDesc: 'Our expert team is ready to help you with any technical or commercial inquiry',
      contact: {
        call: 'Call Us',
        callTime: 'Instant support 8 AM - 6 PM',
        whatsapp: 'WhatsApp',
        whatsappTime: 'Live chat 24/7',
        email: 'Email Us',
        emailTime: 'Reply within 4 hours'
      }
    }
  }

  const categories = [
    { 
      id: 'all', 
      label: language === 'ar' ? 'جميع الأسئلة' : 'All Questions', 
      icon: QuestionMarkCircleIcon 
    },
    { 
      id: 'general', 
      label: language === 'ar' ? 'أسئلة عامة' : 'General Questions', 
      icon: InformationCircleIcon 
    },
    { 
      id: 'technical', 
      label: language === 'ar' ? 'المواصفات التقنية' : 'Technical Specifications', 
      icon: CogIcon 
    },
    { 
      id: 'maintenance', 
      label: language === 'ar' ? 'الصيانة والخدمة' : 'Maintenance & Service', 
      icon: WrenchScrewdriverIcon 
    },
    { 
      id: 'warranty', 
      label: language === 'ar' ? 'الضمان والدعم' : 'Warranty & Support', 
      icon: ShieldCheckIcon 
    },
    { 
      id: 'purchasing', 
      label: language === 'ar' ? 'الشراء والأسعار' : 'Purchasing & Pricing', 
      icon: CurrencyDollarIcon 
    },
    { 
      id: 'installation', 
      label: language === 'ar' ? 'التركيب والإعداد' : 'Installation & Setup', 
      icon: TruckIcon 
    }
  ]

  const faqsData = {
    ar: [
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
    ],
    en: [
      // General Questions
      {
        id: 1,
        category: 'general',
        question: 'What are the advantages of Tohatsu marine engines?',
        answer: 'Tohatsu engines feature high reliability, exceptional fuel efficiency, advanced Japanese technology, and a service life exceeding 20 years. They deliver superior performance in all marine conditions with quiet operation and low emissions.'
      },
      {
        id: 2,
        category: 'general',
        question: 'What types of engines are available?',
        answer: 'We offer three main categories: Portable engines (2.5-20 HP) for small boats, Mid-range engines (25-90 HP) for general use, and High-power engines (100-140 HP) for commercial and recreational applications.'
      },
      {
        id: 3,
        category: 'general',
        question: 'Are Tohatsu engines suitable for saltwater?',
        answer: 'Yes, all Tohatsu engines are specifically designed to withstand saltwater with corrosion-resistant coating, protective anodes, and enhanced cooling system. Ideal for use in the Red Sea and Arabian Gulf.'
      },
      {
        id: 4,
        category: 'general',
        question: 'What is the fuel consumption?',
        answer: 'Tohatsu engines save up to 40% fuel compared to conventional engines. For example, a 15 HP engine consumes about 3-4 liters/hour, while a 90 HP engine consumes 15-18 liters/hour.'
      },
      // Technical Specifications
      {
        id: 5,
        category: 'technical',
        question: 'What is the maximum speed achievable?',
        answer: 'Speed depends on boat type and weight. Generally: Portable engines reach 25-35 km/h, mid-range 40-60 km/h, and high-power exceed 70 km/h with suitable boats.'
      },
      {
        id: 6,
        category: 'technical',
        question: 'What type of fuel is used?',
        answer: 'Tohatsu engines use regular gasoline (octane 87 or higher). Some models support ethanol up to E10. We do not recommend using old or contaminated fuel.'
      },
      {
        id: 7,
        category: 'technical',
        question: 'How does the cooling system work?',
        answer: 'All our engines use water cooling system with internal pump. Water is drawn from the bottom and pumped through the engine for cooling, then expelled with exhaust. We recommend checking the water pump annually.'
      },
      {
        id: 8,
        category: 'technical',
        question: 'What type of ignition system?',
        answer: 'Tohatsu engines use advanced electronic CDI ignition system that ensures strong and stable ignition in all conditions, with lower fuel consumption and cleaner emissions.'
      },
      // Maintenance and Service
      {
        id: 9,
        category: 'maintenance',
        question: 'How often does the engine need maintenance?',
        answer: 'Basic maintenance every 100 operating hours or annually (whichever comes first). Includes: oil change, spark plug inspection, filter cleaning, and water pump check. Comprehensive maintenance every 300 hours.'
      },
      {
        id: 10,
        category: 'maintenance',
        question: 'How do I maintain the engine in winter?',
        answer: 'Clean the engine from salt, change oil, empty fuel tank or add fuel stabilizer, flush cooling system with fresh water, and store in a dry, covered place.'
      },
      {
        id: 11,
        category: 'maintenance',
        question: 'When do I need to change the oil?',
        answer: 'Change oil after first 20 operating hours for new engines, then every 100 hours or annually. Use 10W-30 oil for four-stroke engines, and specialized oil for two-stroke engines.'
      },
      {
        id: 12,
        category: 'maintenance',
        question: 'Where can I get spare parts?',
        answer: 'Original spare parts are available at our showroom in Jeddah and our network of authorized dealers. We maintain complete inventory of all consumable parts and provide fast delivery.'
      },
      // Warranty and Support
      {
        id: 13,
        category: 'warranty',
        question: 'What is the warranty period?',
        answer: 'We provide comprehensive 3-year or 300 operating hours warranty (whichever comes first) covering all manufacturing defects and spare parts. Warranty is extendable with paid maintenance plans.'
      },
      {
        id: 14,
        category: 'warranty',
        question: 'What does the warranty cover?',
        answer: 'Warranty covers all manufacturing defects, internal engine parts, ignition system, water pump, and fuel system. Does not cover damage from misuse or accidents.'
      },
      {
        id: 15,
        category: 'warranty',
        question: 'How do I get technical support?',
        answer: 'Our technical support is available 24/7 via phone, WhatsApp, and email. Our team of certified engineers is ready to solve any technical problem or provide consultation.'
      },
      {
        id: 16,
        category: 'warranty',
        question: 'Can the engine be repaired anywhere?',
        answer: 'To ensure repair quality and maintain warranty, we recommend repair at our authorized centers. We have a service network covering all regions of the Kingdom with trained technicians.'
      },
      // Purchasing and Pricing
      {
        id: 17,
        category: 'purchasing',
        question: 'How can I buy a Tohatsu engine?',
        answer: 'You can visit our showroom in Jeddah, request a quote through the website, or contact our sales team. We provide free consultation to choose the right engine for your needs.'
      },
      {
        id: 18,
        category: 'purchasing',
        question: 'What payment methods are available?',
        answer: 'We accept cash payment, bank transfer, credit cards (Visa/MasterCard), and installments through approved financing companies. We offer flexible installment plans up to 36 months.'
      },
      {
        id: 19,
        category: 'purchasing',
        question: 'Can I trade in my old engine?',
        answer: 'Yes, we offer an old engine trade-in program for a discount on the new engine. Trade-in value depends on the type and condition of the old engine.'
      },
      {
        id: 20,
        category: 'purchasing',
        question: 'How long does delivery take?',
        answer: 'Engines in stock are delivered immediately. Special orders take 2-4 weeks. We provide free delivery service within Jeddah and major cities.'
      },
      // Installation and Setup
      {
        id: 21,
        category: 'installation',
        question: 'Can I install the engine myself?',
        answer: 'Portable engines are simple to install, while larger engines need professional installation. We provide installation service with work warranty, and recommend it to maintain warranty.'
      },
      {
        id: 22,
        category: 'installation',
        question: 'What additional equipment is required?',
        answer: 'Depending on the engine you may need: remote control kit, external fuel tank, appropriately sized propellers, and cables. Our team will provide a complete list of required equipment.'
      },
      {
        id: 23,
        category: 'installation',
        question: 'How do I choose the right propeller?',
        answer: 'Propeller selection depends on boat type, weight, and intended use. We provide free consultation to choose optimal propellers for best performance and fuel efficiency.'
      },
      {
        id: 24,
        category: 'installation',
        question: 'What are the installation requirements for large engines?',
        answer: 'Engines over 40 HP need: boat transom reinforcement, hydraulic steering system, appropriately sized fuel tank, and specialized electrical connections. We provide comprehensive assessment and installation service.'
      }
    ]
  }

  const faqs: FAQ[] = faqsData[language]
  const t = translations[language]

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
    <div dir={isRTL ? 'rtl' : 'ltr'} className="font-sans">
      <Header />

      <main>
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          dir={isRTL ? 'rtl' : 'ltr'}
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
                className={isRTL ? "ml-4" : "mr-4"}
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <QuestionMarkCircleIcon className="w-16 h-16 text-[#c2b280]" />
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
                {t.features.search}
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                {t.features.questions}
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                {t.features.experts}
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
          dir={isRTL ? 'rtl' : 'ltr'}
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
                    {t.searchLabel}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={t.searchPlaceholder}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className={`w-full py-4 px-6 ${isRTL ? 'pr-12' : 'pl-12'} rounded-xl border-2 border-gray-200 focus:border-[#c2b280] focus:ring-2 focus:ring-[#c2b280]/20 transition-all duration-300 text-lg`}
                    />
                    <MagnifyingGlassIcon className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400`} />
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
          dir={isRTL ? 'rtl' : 'ltr'}
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
                        className={`w-full p-6 ${isRTL ? 'text-right' : 'text-left'} hover:bg-gray-50 transition-all duration-300 flex items-center justify-between`}
                      >
                        {!isRTL && (
                          <h3 className="text-lg font-bold text-[#181b39] flex-1">
                            {faq.question}
                          </h3>
                        )}
                        <div className="flex items-center">
                          {expandedFAQ === faq.id ? (
                            <ChevronUpIcon className={`w-6 h-6 text-[#c2b280] ${isRTL ? 'ml-4' : 'mr-4'}`} />
                          ) : (
                            <ChevronDownIcon className={`w-6 h-6 text-[#c2b280] ${isRTL ? 'ml-4' : 'mr-4'}`} />
                          )}
                        </div>
                        {isRTL && (
                          <h3 className="text-lg font-bold text-[#181b39] flex-1">
                            {faq.question}
                          </h3>
                        )}
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
                  <h3 className="text-2xl font-bold text-gray-600 mb-2">{t.noResults}</h3>
                  <p className="text-gray-500">{t.noResultsDesc}</p>
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
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <LightBulbIcon className="w-12 h-12 text-[#c2b280]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#181b39]">
                  {t.needHelp}
                </h2>
              </motion.div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t.needHelpDesc}
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
                <h3 className="text-xl font-bold mb-3">{t.contact.call}</h3>
                <a href="tel:+966566501233" className="text-[#c2b280] font-medium text-lg">
                  +966 56 650 1233
                </a>
                <p className="text-sm opacity-80 mt-2">{t.contact.callTime}</p>
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
                <h3 className="text-xl font-bold mb-3">{t.contact.whatsapp}</h3>
                <a href="https://wa.me/966566501233" className="text-[#181b39] font-medium text-lg">
                  +966 56 650 1233
                </a>
                <p className="text-sm opacity-80 mt-2">{t.contact.whatsappTime}</p>
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
                <h3 className="text-xl font-bold mb-3">{t.contact.email}</h3>
                <a href="mailto:info@tohatsuarabia.com" className="text-[#c2b280] font-medium">
                  info@tohatsuarabia.com
                </a>
                <p className="text-sm opacity-80 mt-2">{t.contact.emailTime}</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
