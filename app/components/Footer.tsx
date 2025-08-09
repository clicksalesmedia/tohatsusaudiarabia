'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'
import { useLanguage } from '../contexts/LanguageContext'

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

const translations = {
  ar: {
    companyDescription: "توهاتسو السعودية: رفيقك الموثوق لجميع مغامراتك البحرية. جودة يابانية عالمية، أداء لا مثيل له، وخدمة محلية متميزة.",
    quickLinks: "روابط سريعة",
    supportServices: "الدعم والخدمات",
    contactInfo: "معلومات الاتصال",
    links: {
      about: "عن توهاتسو",
      products: "المنتجات",
      blog: "المدونة",
      dealerLocator: "البحث عن وكيل",
      contact: "اتصل بنا",
      quote: "اطلب عرض سعر",
      support: "خدمة العملاء",
      faq: "الأسئلة الشائعة"
    },
    copyright: "© 2025 شركة توهاتسو السعودية. جميع الحقوق محفوظة.",
    developedBy: "تصميم وتطوير بواسطة"
  },
  en: {
    companyDescription: "Tohatsu Saudi Arabia: Your trusted companion for all your marine adventures. Global Japanese quality, unmatched performance, and exceptional local service.",
    quickLinks: "Quick Links",
    supportServices: "Support & Services",
    contactInfo: "Contact Information",
    links: {
      about: "About Tohatsu",
      products: "Products",
      blog: "Blog",
      dealerLocator: "Dealer Locator",
      contact: "Contact Us",
      quote: "Request Quote",
      support: "Customer Service",
      faq: "FAQ"
    },
    copyright: "© 2025 Tohatsu Saudi Arabia Company. All rights reserved.",
    developedBy: "Designed and developed by"
  }
}

const Footer = () => {
  const { language, isRTL } = useLanguage()
  const t = translations[language]
  return (
    <motion.footer 
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 60 60">
          <defs>
            <pattern id="footer-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C2B280" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/tohatsuwhite.png"
                alt={language === 'ar' ? "توهاتسو السعودية" : "Tohatsu Saudi Arabia"}
                width={80}
                height={60}
                className="h-12 w-auto"
              />
            </motion.div>
            <p className={`text-gray-400 leading-relaxed mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.companyDescription}
            </p>
            <div className={`flex ${isRTL ? 'gap-4 justify-end' : 'space-x-4 justify-start'}`}>
              {[
                { name: "facebook", href: "#", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                { name: "instagram", href: "#", icon: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 12.013c0-1.97 1.594-3.564 3.564-3.564s3.564 1.594 3.564 3.564-1.594 3.564-3.564 3.564-3.564-1.594-3.564-3.564zm10.44 0c0-3.846-3.138-6.984-6.984-6.984s-6.984 3.138-6.984 6.984 3.138 6.984 6.984 6.984 6.984-3.138 6.984-6.984z" },
                { name: "twitter", href: "#", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                { name: "youtube", href: "#", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 hover:bg-gradient-to-r hover:from-[#C2B280] hover:to-[#D4C794] rounded-full flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg 
                    className="w-5 h-5 text-gray-400 group-hover:text-[#003366]" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h5 className={`text-xl font-bold text-white mb-6 relative ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.quickLinks}
              <div className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-12 h-0.5 ${isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-[#C2B280] to-transparent mt-2`} />
            </h5>
            <ul className="space-y-3">
              {[
                { name: t.links.about, href: "/about" },
                { name: t.links.products, href: "/products" },
                { name: t.links.blog, href: "/blog" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: isRTL ? -5 : 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className={`text-gray-400 hover:text-[#C2B280] transition-colors duration-300 inline-flex items-center group ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    <ChevronRightIcon className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={fadeInUp}>
            <h5 className={`text-xl font-bold text-white mb-6 relative ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.supportServices}
              <div className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-12 h-0.5 ${isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-[#C2B280] to-transparent mt-2`} />
            </h5>
            <ul className="space-y-3">
              {[
                { name: t.links.contact, href: "/contact" },
                { name: t.links.quote, href: "/quote" },
                { name: t.links.support, href: "/support" },
                { name: t.links.faq, href: "/faq" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: isRTL ? -5 : 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className={`text-gray-400 hover:text-[#C2B280] transition-colors duration-300 inline-flex items-center group ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    <ChevronRightIcon className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h5 className={`text-xl font-bold text-white mb-6 relative ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.contactInfo}
              <div className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-12 h-0.5 ${isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-[#C2B280] to-transparent mt-2`} />
            </h5>
            <div className="space-y-4">
              {/* Phone */}
              <motion.div 
                className={`flex items-center ${isRTL ? 'justify-end flex-row-reverse' : 'justify-start'}`}
                whileHover={{ x: isRTL ? -5 : 5 }}
                transition={{ duration: 0.2 }}
              >
                <PhoneIcon className={`w-4 h-4 text-[#C2B280] flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                <a 
                  href="tel:+966543699901"
                  className="text-gray-400 hover:text-[#C2B280] transition-colors duration-300"
                  dir="ltr"
                >
                  +966 54 369 9901
                </a>
              </motion.div>

              {/* Email */}
              <motion.div 
                className={`flex items-center ${isRTL ? 'justify-end flex-row-reverse' : 'justify-start'}`}
                whileHover={{ x: isRTL ? -5 : 5 }}
                transition={{ duration: 0.2 }}
              >
                <EnvelopeIcon className={`w-4 h-4 text-[#C2B280] flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                <a 
                  href="mailto:info@tohatsuarabia.com"
                  className="text-gray-400 hover:text-[#C2B280] transition-colors duration-300"
                  dir="ltr"
                >
                  info@tohatsuarabia.com
                </a>
              </motion.div>

              {/* Address */}
              <motion.div 
                className={`flex items-start ${isRTL ? 'justify-end flex-row-reverse text-right' : 'justify-start text-left'}`}
                whileHover={{ x: isRTL ? -5 : 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPinIcon className={`w-4 h-4 text-[#C2B280] flex-shrink-0 mt-1 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                <span className="text-gray-400 leading-relaxed">
                  {isRTL ? (
                    <>شارع الأمير عبدالله الفيصل الفرعي، Obhur، P4G3+V8P<br />جدة 23813، المملكة العربية السعودية</>
                  ) : (
                    <>P4G3+V8P، Obhur، شارع الأمير عبدالله الفيصل الفرعي<br />Jeddah 23813, Saudi Arabia</>
                  )}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-700 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              {t.copyright}
            </p>
            <motion.p 
              className="text-gray-500 text-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {t.developedBy}{" "}
              <span className="text-[#C2B280] font-semibold">Clicksalesmedia</span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer 