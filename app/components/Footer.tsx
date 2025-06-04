'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

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

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      dir="rtl"
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
                src="/logo-light.png"
                alt="توهاتسو السعودية"
                width={80}
                height={60}
                className="h-12 w-auto"
              />
            </motion.div>
            <p className="text-gray-400 leading-relaxed mb-6 text-right">
              توهاتسو السعودية: رفيقك الموثوق لجميع مغامراتك البحرية. جودة يابانية عالمية، 
              أداء لا مثيل له، وخدمة محلية متميزة.
            </p>
            <div className="flex space-x-4 space-x-reverse justify-end">
              {["facebook", "instagram", "twitter", "youtube"].map((social, _) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-700 hover:bg-gradient-to-r hover:from-[#C2B280] hover:to-[#D4C794] rounded-full flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <i data-lucide={social} className="w-5 h-5 text-gray-400 group-hover:text-[#003366]" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h5 className="text-xl font-bold text-white mb-6 relative text-right">
              روابط سريعة
              <div className="absolute bottom-0 right-0 w-12 h-0.5 bg-gradient-to-l from-[#C2B280] to-transparent mt-2" />
            </h5>
            <ul className="space-y-3">
              {[
                { name: "عن توهاتسو", href: "/about" },
                { name: "المنتجات", href: "/products" },
                { name: "المدونة", href: "/blog" },
                { name: "البحث عن وكيل", href: "/dealer-locator" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#C2B280] transition-colors duration-300 inline-flex items-center group text-right"
                  >
                    <motion.i 
                      data-lucide="chevron-right" 
                      className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={fadeInUp}>
            <h5 className="text-xl font-bold text-white mb-6 relative text-right">
              الدعم والخدمات
              <div className="absolute bottom-0 right-0 w-12 h-0.5 bg-gradient-to-l from-[#C2B280] to-transparent mt-2" />
            </h5>
            <ul className="space-y-3">
              {[
                { name: "اتصل بنا", href: "/contact" },
                { name: "اطلب عرض سعر", href: "/quote" },
                { name: "خدمة العملاء", href: "/support" },
                { name: "الأسئلة الشائعة", href: "/faq" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#C2B280] transition-colors duration-300 inline-flex items-center group text-right"
                  >
                    <motion.i 
                      data-lucide="chevron-right" 
                      className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h5 className="text-xl font-bold text-white mb-6 relative text-right">
              معلومات الاتصال
              <div className="absolute bottom-0 right-0 w-12 h-0.5 bg-gradient-to-l from-[#C2B280] to-transparent mt-2" />
            </h5>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center text-gray-400 justify-end"
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span>+966 12 345 6789</span>
                <i data-lucide="phone" className="w-5 h-5 mr-3 text-[#C2B280]" />
              </motion.div>
              <motion.div 
                className="flex items-center text-gray-400 justify-end"
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span>info@tohatsu-saudi.com</span>
                <i data-lucide="mail" className="w-5 h-5 mr-3 text-[#C2B280]" />
              </motion.div>
              <motion.div 
                className="flex items-start text-gray-400 justify-end text-right"
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span>الرياض، المملكة العربية السعودية</span>
                <i data-lucide="map-pin" className="w-5 h-5 mr-3 text-[#C2B280] mt-1" />
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
              © 2024 شركة توهاتسو السعودية. جميع الحقوق محفوظة.
            </p>
            <motion.p 
              className="text-gray-500 text-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              تصميم وتطوير بواسطة{" "}
              <span className="text-[#C2B280] font-semibold">Neo - خبير تصميم عالمي</span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer 