'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaQuestionCircle,
  FaHeadset,
  FaRegCommentDots,
  FaGlobeAmericas,
  FaUsers,
  FaSuitcase,
  FaShieldAlt
} from 'react-icons/fa';

const ContactPage = () => {
  // --- Animation Variants ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  };

  // --- Form Logic ---
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API Call
    const loadingToast = toast.loading('Sending your message...');
    
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll be in touch.', {
        id: loadingToast,
        duration: 5000,
        icon: '🚀',
      });
      e.target.reset();
    }, 1500);
  };

  // --- Data ---
  const stats = [
    { label: 'Global Destinations', value: '150+', icon: <FaGlobeAmericas /> },
    { label: 'Happy Travelers', value: '500k+', icon: <FaUsers /> },
    { label: 'Luxury Villas', value: '12,000+', icon: <FaSuitcase /> },
    { label: 'Verified Hosts', value: '8,500+', icon: <FaShieldAlt /> },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-hidden font-sans">
      <Toaster position="bottom-right" reverseOrder={false} />

      {/* SECTION 1: HERO */}
      <section className="relative py-24 lg:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f98d00]/10 to-transparent dark:from-[#f98d00]/5" />
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-[#f98d00]/10 rounded-full blur-3xl"
        />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.div
              variants={floatAnimation}
              initial="initial"
              animate="animate"
              className="inline-block mb-8 p-4 bg-gradient-to-r from-[#f98d00] to-[#f9a300] rounded-3xl shadow-2xl shadow-[#f98d00]/30"
            >
              <FaRegCommentDots className="text-white text-4xl" />
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-gray-900 dark:text-white">
              Let's <span className="text-[#f98d00]">Connect.</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed">
              Whether you have a question about a booking or want to list your villa, our team is ready to help 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: NEW - SUPPORT CATEGORIES */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: "Technical Support", desc: "Issues with the app or website?", color: "blue" },
            { title: "Booking Inquiry", desc: "Need help with a specific reservation?", color: "orange" },
            { title: "Host Partnership", desc: "Want to grow your rental business?", color: "green" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="p-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm"
            >
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-gray-500 dark:text-gray-400 mb-4">{item.desc}</p>
              <button className="text-[#f98d00] font-semibold hover:underline">Chat with an expert →</button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 3: CONTACT FORM & MAP */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input required type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[#f98d00] outline-none transition-all" />
                  <input required type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[#f98d00] outline-none transition-all" />
                </div>
                <input required type="text" placeholder="Subject" className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[#f98d00] outline-none transition-all" />
                <textarea required rows={5} placeholder="Your Message..." className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[#f98d00] outline-none transition-all"></textarea>
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(249 141 0 / 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#f98d00] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all"
                >
                  Send Message <FaPaperPlane className="text-sm" />
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[500px] border-8 border-white dark:border-gray-800"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d-122.400!3d37.790!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ3JzI0LjAiTiAxMjLCsDI0JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" className="grayscale contrast-125 dark:invert"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: NEW - GLOBAL STATS */}
      <section className="py-20 bg-[#f98d00]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center"
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="space-y-2">
                <div className="text-4xl mb-4 flex justify-center opacity-80">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black">{stat.value}</div>
                <div className="text-sm md:text-base font-medium opacity-90 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: CONTACT CARDS */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <FaMapMarkerAlt />, title: "HQ Office", detail: "San Francisco, CA" },
            { icon: <FaPhoneAlt />, title: "Support Line", detail: "+1 800 VILLAX" },
            { icon: <FaEnvelope />, title: "Email Support", detail: "help@villax.com" },
            { icon: <FaClock />, title: "Response Time", detail: "< 2 Hours" },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none text-center border border-transparent hover:border-[#f98d00]/30 transition-all"
            >
              <div className="text-[#f98d00] text-3xl mb-4 flex justify-center">{card.icon}</div>
              <h3 className="font-bold text-lg mb-1">{card.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{card.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 6: CALL TO ACTION */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto bg-gray-900 dark:bg-[#f98d00] rounded-[3rem] p-12 md:p-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to find your <br/><span className="text-[#f98d00] dark:text-gray-900">dream getaway?</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-[#f98d00] dark:bg-white text-white dark:text-[#f98d00] rounded-2xl font-bold text-lg shadow-xl"
              >
                Browse Villas
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/10"
              >
                Become a Host
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;