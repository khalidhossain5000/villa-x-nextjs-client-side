"use client";

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaUsers,
  FaHome,
  FaSmile,
  FaGlobe,
  FaCalendarCheck,
  FaStar,
  FaHandsHelping,
  FaRocket,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaQuoteLeft,
  FaCheckCircle,
  FaAward,
  FaClock,
  FaLock,
  FaTree,
  FaUmbrellaBeach,
  FaSwimmer,
  FaSpa,
  FaDumbbell,
  FaWifi,
  FaUtensils,
  FaCar,
  FaDog,
  FaChild,
  FaChair,
  FaFire,
  FaGem,
  FaCrown,
  FaRegLightbulb,
  FaRegHandshake,
  FaRegPaperPlane,
  FaRegCompass,
  FaRegCalendarAlt,
  FaRegCreditCard,
  FaRegComments,
  FaRegHeart,
  FaRegMap,
  FaRegStar,
} from "react-icons/fa";

const Aboutpage = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const scaleHover = {
    whileHover: { scale: 1.02, transition: { duration: 0.2 } },
  };

  // Team data with proper icons
  const team = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      icon: <FaCrown className="text-4xl" />,
      bio: "Hospitality expert with 15+ years experience.",
    },
    {
      name: "Jamie Chen",
      role: "Head of Operations",
      icon: <FaRegHandshake className="text-4xl" />,
      bio: "Ensures every stay runs smoothly.",
    },
    {
      name: "Taylor Smith",
      role: "Customer Experience",
      icon: <FaRegComments className="text-4xl" />,
      bio: "Passionate about traveler happiness.",
    },
    {
      name: "Jordan Lee",
      role: "Partnerships",
      icon: <FaRegPaperPlane className="text-4xl" />,
      bio: "Connecting hosts worldwide.",
    },
  ];

  // Stats data
  const stats = [
    { number: "50K+", label: "Happy Travelers", icon: <FaSmile /> },
    { number: "10K+", label: "Unique Properties", icon: <FaHome /> },
    { number: "120+", label: "Countries", icon: <FaGlobe /> },
    { number: "4.9", label: "Avg Rating", icon: <FaStar /> },
  ];

  // Features data
  const features = [
    {
      title: "Verified Listings",
      desc: "Every property is checked for quality.",
      icon: <FaCheckCircle />,
    },
    {
      title: "Instant Booking",
      desc: "Secure your stay in minutes.",
      icon: <FaClock />,
    },
    {
      title: "Secure Payments",
      desc: "Your transactions are protected.",
      icon: <FaLock />,
    },
    {
      title: "24/7 Support",
      desc: "We are here anytime, anywhere.",
      icon: <FaRegComments />,
    },
    {
      title: "Best Price Guarantee",
      desc: "We match any lower rate.",
      icon: <FaGem />,
    },
    {
      title: "Local Experiences",
      desc: "Discover hidden gems.",
      icon: <FaRegCompass />,
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Villax made finding our vacation home so easy. The platform is intuitive and the support is amazing!",
      role: "Traveler",
      rating: 5,
    },
    {
      name: "Michael Brown",
      text: "As a host, Villax helped me reach travelers from around the world. Highly recommended!",
      role: "Host",
      rating: 5,
    },
    {
      name: "Emily Davis",
      text: "I love the unique properties available. Every stay is an adventure. Thank you Villax!",
      role: "Adventurer",
      rating: 5,
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f98d00]/20 to-[#f9a300]/20 dark:from-[#0a121f]/40 dark:to-[#0a0e16db]/40" />
        <div className="" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6 p-3 bg-gradient-to-r from-[#f98d00] to-[#f9a300] dark:from-[#0a121f] dark:to-[#0a0e16db] rounded-full"
            >
              <FaRegHeart className="text-white text-3xl" />
            </motion.div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#f98d00] to-[#f9a300] dark:from-[#f98d00] dark:to-[#f9a300] bg-clip-text text-transparent">
              Welcome to Villax
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-10">
              Your gateway to unforgettable stays and unique accommodations
              around the globe.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#f98d00] to-[#f9a300] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Explore Stays
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Villax was born from a simple idea: travel should feel like
                home, anywhere in the world. Founded in 2020, we started with
                just a handful of properties and a dream to connect travelers
                with unique, comfortable spaces.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Today, we've grown into a global community of hosts and
                travelers, offering thousands of curated stays. Our journey is
                fueled by passion for hospitality and innovation.
              </p>
              <motion.div
                variants={fadeInUp}
                className="mt-8 flex flex-wrap gap-4"
              >
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#f98d00] dark:text-[#f9a300]" />
                  <span>5000+ properties</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#f98d00] dark:text-[#f9a300]" />
                  <span>120+ countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#f98d00] dark:text-[#f9a300]" />
                  <span>50k+ happy guests</span>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#f98d00] to-[#f9a300] dark:from-[#0a121f] dark:to-[#0a0e16db] mix-blend-multiply opacity-20" />
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                  alt="Beautiful hotel lobby"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl"
              >
                <FaHeart className="text-4xl text-[#f98d00] dark:text-[#f9a300]" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f98d00] to-[#f9a300] dark:from-[#0a121f] dark:to-[#0a0e16db] rounded-bl-full opacity-10 group-hover:scale-150 transition-transform duration-500" />
              <FaRocket className="text-5xl text-[#f98d00] dark:text-[#f9a300] mb-6" />
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To simplify room booking and create authentic connections
                between travelers and hosts, ensuring every stay is safe,
                comfortable, and enriching.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f98d00] to-[#f9a300] dark:from-[#0a121f] dark:to-[#0a0e16db] rounded-bl-full opacity-10 group-hover:scale-150 transition-transform duration-500" />
              <FaGlobe className="text-5xl text-[#f98d00] dark:text-[#f9a300] mb-6" />
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                A world where travel knows no boundaries, and everyone can find
                their perfect home away from home, fostering cultural exchange
                and mutual respect.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="text-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-5xl text-[#f98d00] dark:text-[#f9a300] mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              What We Offer
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need for a perfect stay, all in one place.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
              >
                <div className="text-4xl text-[#f98d00] dark:text-[#f9a300] mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              What Our Users Say
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Real experiences from our community
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all relative"
              >
                <FaQuoteLeft className="absolute top-4 right-4 text-3xl text-[#f98d00] dark:text-[#f9a300] opacity-20" />
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#f98d00] to-[#f9a300] dark:from-[#0a121f] dark:to-[#0a0e16db] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Choose Villax?
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We go the extra mile to make your stay perfect
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {[
              {
                title: "Verified Listings",
                desc: "Every property is personally checked for quality and accuracy.",
                icon: <FaCheckCircle />,
              },
              {
                title: "Best Price Guarantee",
                desc: "We match any lower price you find online.",
                icon: <FaGem />,
              },
              {
                title: "Secure Booking",
                desc: "Your payments and personal data are always protected.",
                icon: <FaLock />,
              },
              {
                title: "Local Experiences",
                desc: "Discover hidden gems with tips from local hosts.",
                icon: <FaRegCompass />,
              },
              {
                title: "24/7 Customer Support",
                desc: "We are here to help you anytime, anywhere.",
                icon: <FaRegComments />,
              },
              {
                title: "Flexible Cancellation",
                desc: "Plans change? Many listings offer free cancellation.",
                icon: <FaRegCalendarAlt />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={scaleHover.whileHover}
                className="flex items-start gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-3xl text-[#f98d00] dark:text-[#f9a300] flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#f98d00] to-[#f9a300] dark:from-[#0a121f] dark:to-[#0a0e16db] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Join thousands of happy travelers and hosts. Discover your next
              adventure with Villax.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#f98d00] dark:bg-gray-900 dark:text-[#f9a300] px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Find Your Stay
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Aboutpage;
