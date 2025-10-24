import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Package,
  Globe,
  Truck,
  Building2,
  Archive,
  Warehouse,
  Train,
  Ship,
  Plane,
  CheckCircle,
  Shield,
  Users,
  Clock,
  Award,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react";
import { Toaster, toast } from "sonner";
import { IoArchiveOutline } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";
import { GiTruck } from "react-icons/gi";
import { PiTruckTrailerThin } from "react-icons/pi";
import { GiOfficeChair } from "react-icons/gi";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { PiPackageThin } from "react-icons/pi";
import { PiWarehouseThin } from "react-icons/pi";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { SiFsecure } from "react-icons/si";

// Color Palette
const colors = {
  darkGray: "#41444B",
  mediumGray: "#52575D",
  yellow: "#FDDB3A",
  cream: "#F6F4E6",
  black: "#000000",
  white: "#FFFFFF",
};

const HomePage = () => {
  const testimonials = [
    {
      text: "Satisfactory service, Keep it up glens!!",
      author: "B.Ngirivana, Delta Beverages",
      companyLogo: "/delta.png",
    },
    { text: "Generally good service", author: "ZIMRA", companyLogo: "/zimra.webp" },
    {
      text: "Will be happy to use Glens Removals again in future!",
      author: "Mr Fore, Arctura Mine",
      companyLogo: "/tn.png",
    },
    {
      text: "Very good service. Will use Glens again.",
      author: "SERA PROGRAM",
      companyLogo: "/SERA2.png",
    },
    { text: "Very pleasant and professional crew", author: "EDGARS STORE", companyLogo: "/edgars.png" },
    { text: "I appreciate your service", author: "INNSCOR FAST FOODS", companyLogo: "/innscor.png" },

  ];

  const stats = [
    { icon: Clock, value: "70+", label: "Years in Business" },
    { icon: Users, value: "10,000+", label: "Happy Clients" },
    { icon: GiWorld, value: "150+", label: "Countries Served" },
    { icon: Award, value: "FAIM", label: "Quality Certified" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 order-2 lg:order-1"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border-2 border-yellow-400 bg-yellow-50"
                >
                  <MdOutlineStarBorderPurple500
                    className="text-yellow-600"
                    size={20}
                    fill="currentColor"
                  />
                  <span
                    className="text-sm font-semibold"
                    style={{ color: colors.darkGray }}
                  >
                    Trusted Since 1952
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                  style={{ color: colors.darkGray }}
                >
                  Care,{" "}
                  <span className="relative inline-block">
                    <span style={{ color: colors.yellow }}>
                      They do you know !
                    </span>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-200 -z-10"
                      style={{ originX: 0 }}
                    />
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg sm:text-xl text-gray-600 leading-relaxed"
                >
                  Professional relocation and storage services across Africa.
                  Your trusted partner for seamless moves, secure storage, and
                  comprehensive logistics solutions.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact" className="flex-1 sm:flex-initial">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(253, 219, 58, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-8 py-4 rounded-sm text-black font-bold text-base sm:text-lg shadow-xl flex items-center justify-center gap-2"
                    style={{ backgroundColor: colors.yellow }}
                  >
                    Get Free Quote
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
                <Link
                  to="/services/global-moves"
                  className="flex-1 sm:flex-initial"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-8 py-4 rounded-sm border-2 font-bold text-base sm:text-lg"
                    style={{
                      borderColor: colors.darkGray,
                      color: colors.darkGray,
                    }}
                  >
                    View Services
                  </motion.button>
                </Link>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8"
              >
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div
                      className="text-2xl sm:text-3xl font-bold mb-1"
                      style={{ color: colors.yellow }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual - Stroke Masked Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative aspect-[4/5] py-4">
                {/* SVG with masked strokes */}
                <svg
                  viewBox="0 0 600 500"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Define masks for each stroke */}
                    <mask id="stroke1">
                      <rect x="0" y="0" width="600" height="500" fill="black" />
                      <rect
                        x="30"
                        y="30"
                        width="220"
                        height="440"
                        rx="110"
                        ry="110"
                        fill="white"
                        transform="rotate(-15 140 250)"
                      />
                    </mask>
                    <mask id="stroke2">
                      <rect x="0" y="0" width="600" height="500" fill="black" />
                      <rect
                        x="180"
                        y="35"
                        width="220"
                        height="430"
                        rx="110"
                        ry="110"
                        fill="white"
                        transform="rotate(-15 290 250)"
                      />
                    </mask>
                    <mask id="stroke3">
                      <rect x="0" y="0" width="600" height="500" fill="black" />
                      <rect
                        x="330"
                        y="30"
                        width="220"
                        height="440"
                        rx="110"
                        ry="110"
                        fill="white"
                        transform="rotate(-15 440 250)"
                      />
                    </mask>
                    <mask id="stroke4">
                      <rect x="0" y="0" width="600" height="500" fill="black" />
                      <rect
                        x="100"
                        y="200"
                        width="420"
                        height="220"
                        rx="110"
                        ry="110"
                        fill="white"
                        transform="rotate(-15 310 310)"
                      />
                    </mask>
                  </defs>

                  {/* Apply company images to each stroke with masks */}
                  <motion.g
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <image
                      href="/glens3.webp"
                      x="0"
                      y="0"
                      width="600"
                      height="500"
                      mask="url(#stroke1)"
                      preserveAspectRatio="xMidYMid slice"
                      className="drop-shadow-lg"
                    />
                  </motion.g>

                  <motion.g
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <image
                      href="/glens3.webp"
                      x="0"
                      y="0"
                      width="600"
                      height="500"
                      mask="url(#stroke2)"
                      preserveAspectRatio="xMidYMid slice"
                      className="drop-shadow-lg"
                    />
                  </motion.g>

                  <motion.g
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <image
                      href="/glens3.webp"
                      x="0"
                      y="0"
                      width="600"
                      height="500"
                      mask="url(#stroke3)"
                      preserveAspectRatio="xMidYMid slice"
                      className="drop-shadow-lg"
                    />
                  </motion.g>

                  <motion.g
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <image
                      href="/glens3.webp"
                      x="0"
                      y="0"
                      width="600"
                      height="500"
                      mask="url(#stroke4)"
                      preserveAspectRatio="xMidYMid slice"
                      className="drop-shadow-lg"
                    />
                  </motion.g>
                </svg>

                {/* Floating Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                  className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white rounded-sm p-3 sm:p-4 shadow-xl z-20"
                >
                  <div className="text-center">
                    <div
                      className="text-lg sm:text-2xl font-bold"
                      style={{ color: colors.yellow }}
                    >
                      FIDI
                    </div>
                    <div className="text-xs text-gray-600">Accredited</div>
                  </div>
                </motion.div>

                {/* Clients Counter */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-white rounded-sm p-3 sm:p-4 shadow-xl z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[
                        { gender: "women", id: "78" },
                        { gender: "men", id: "91" },
                        { gender: "women", id: "32" },
                      ].map((person, i) => (
                        <img
                          key={i}
                          src={`https://randomuser.me/api/portraits/${person.gender}/${person.id}.jpg`}
                          alt={`Client ${i + 1}`}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                        />
                      ))}
                    </div>
                    <div>
                      <div
                        className="text-xs sm:text-sm font-semibold"
                        style={{ color: colors.darkGray }}
                      >
                        10,000+
                      </div>
                      <div className="text-xs text-gray-600">Happy Clients</div>
                    </div>
                  </div>
                </motion.div>

                {/* Small decorative dots */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                  className="absolute top-12 left-8 w-3 h-3 rounded-sm"
                  style={{ backgroundColor: colors.yellow }}
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.3 }}
                  className="absolute bottom-20 right-12 w-4 h-4 rounded-sm bg-blue-400"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.3 }}
                  className="absolute top-1/2 left-4 w-2 h-2 rounded-sm bg-green-400"
                />
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -left-4 w-24 h-24 rounded-sm border-4 border-dashed opacity-20"
                style={{ borderColor: colors.yellow }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-sm border-4 border-dashed opacity-20"
                style={{ borderColor: colors.yellow }}
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <ChevronDown size={32} style={{ color: colors.darkGray }} />
        </motion.div>
      </section>

      {/* Features Bento Grid */}
      <section
        className="py-12 sm:py-20"
        style={{ backgroundColor: colors.cream }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: colors.darkGray }}
            >
              The Difference We Make
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Explore why businesses across Africa choose us as their trusted
              moving partner
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Large Card 1 - Safety Rate with Background Image */}
            <motion.div
              initial={{ opacity: 2, y: 0 }}
              whileInView={{ opacity: 2, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="sm:col-span-2 lg:row-span-2 rounded-sm p-6 sm:p-8 relative overflow-hidden group cursor-pointer"
              style={{ backgroundColor: colors.darkGray }}
            >
              <img
                src="/6.jpg"
                alt="Moving truck"
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-black/50"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-sm mb-4 sm:mb-6 flex items-center justify-center"
                    style={{ backgroundColor: colors.yellow }}
                  >
                    <SiFsecure size={28} className="text-black sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                    99.8%
                    <br />
                    Safety Rate
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Our unwavering commitment ensures your belongings receive
                    top-tier protection, always meeting your standards.
                  </p>
                </div>
                <div className="mt-6 sm:mt-8">
                  <div className="flex items-center gap-3 text-yellow-400 font-semibold">
                    <span className="text-sm sm:text-base">Fully Insured</span>
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-2 transition-transform"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>

            {/* Small Card 1 - Years of Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-sm p-6 relative overflow-hidden group cursor-pointer"
              style={{ backgroundColor: "#E8F5E9" }}
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm mb-4 flex items-center justify-center"
                style={{ backgroundColor: colors.yellow }}
              >
                <Clock size={20} className="text-black sm:w-6 sm:h-6" />
              </div>
              <div
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{ color: colors.darkGray }}
              >
                70+
              </div>
              <p className="text-sm sm:text-base text-gray-700 font-medium">
                Years of Excellence
              </p>
            </motion.div>

            {/* Small Card 2 - FAIM Certified */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-sm p-6 relative overflow-hidden group cursor-pointer"
              style={{ backgroundColor: "#FFF3E0" }}
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm mb-4 flex items-center justify-center"
                style={{ backgroundColor: colors.yellow }}
              >
                <Award size={20} className="text-black sm:w-6 sm:h-6" />
              </div>
              <div
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{ color: colors.darkGray }}
              >
                FAIM
              </div>
              <p className="text-sm sm:text-base text-gray-700 font-medium">
                Quality Certified
              </p>
            </motion.div>

            {/* Medium Card 1 - Global Network with Background Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="sm:col-span-2 rounded-sm p-6 sm:p-8 relative overflow-hidden group cursor-pointer bg-white shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
                alt="Global shipping"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-sm mb-4 flex items-center justify-center"
                    style={{ backgroundColor: colors.yellow }}
                  >
                    <GiWorld size={24} className="text-black sm:w-7 sm:h-7" />
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-bold mb-2"
                    style={{ color: colors.darkGray }}
                  >
                    150+ Countries
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Global network through FIDI & IAM accreditation
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-blue-100 flex items-center justify-center">
                    <Plane size={18} className="text-blue-600 sm:w-5 sm:h-5" />
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-green-100 flex items-center justify-center">
                    <Ship size={18} className="text-green-600 sm:w-5 sm:h-5" />
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-orange-100 flex items-center justify-center">
                    <Truck
                      size={18}
                      className="text-orange-600 sm:w-5 sm:h-5"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Medium Card 2 - Customer Satisfaction with Background Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="sm:col-span-2 rounded-sm relative overflow-hidden group cursor-pointer h-48 sm:h-64"
              style={{ backgroundColor: colors.yellow }}
            >
              <img
                src="/9.jpg"
                alt="Happy customers"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/60 to-orange-400/60"></div>
              <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-sm px-4 py-2 mb-4">
                    <Users className="text-white" size={18} />
                    <span className="text-white text-sm font-semibold">
                      Customer Satisfaction
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                    10,000+
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base">
                    Satisfied clients who trust us with their moves
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-3">
                    {[
                      { gender: "men", id: "44" },
                      { gender: "men", id: "52" },
                      { gender: "women", id: "65" },
                      { gender: "men", id: "91" },
                      { gender: "women", id: "32" },
                    ].map((person, i) => (
                      <img
                        key={i}
                        src={`https://randomuser.me/api/portraits/${person.gender}/${person.id}.jpg`}
                        alt={`Client ${i + 1}`}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <MdOutlineStarBorderPurple500
                    size={28}
                    className="text-white"
                    fill="white"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: colors.darkGray }}
            >
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive moving and storage solutions tailored to your unique
              needs across Africa and beyond
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: IoArchiveOutline,
                title: "Digital Document Archiving",
                desc: "Secure digital storage solutions for your important documents",
                path: "/services/archiving",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: GiWorld,
                title: "Global Moves",
                desc: "Seamless international relocations to 150+ countries worldwide",
                path: "/services/global-moves",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: GiTruck,
                title: "Regional Moves",
                desc: "Expert SADC cross-border moving services",
                path: "/services/regional-moves",
                color: "from-green-500 to-green-600",
              },
              {
                icon: GiOfficeChair,
                title: "Workspace Transition",
                desc: "Efficient office and workspace relocation services",
                path: "/services/workspace",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: PiPackageThin,
                title: "Packing & Crating",
                desc: "Professional packing for maximum protection",
                path: "/services/packing",
                color: "from-pink-500 to-pink-600",
              },
              {
                icon: PiWarehouseThin,
                title: "Storage Solutions",
                desc: "Secure short and long-term storage facilities",
                path: "/services/storage",
                color: "from-indigo-500 to-indigo-600",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <Link to={service.path}>
                  <div className="bg-white rounded-sm p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-gray-100 relative overflow-hidden">
                    {/* Hover Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    <div className="relative z-10">
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-sm mb-4 sm:mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                      >
                        <service.icon
                          size={28}
                          className="text-white sm:w-8 sm:h-8"
                        />
                      </div>
                      <h3
                        className="text-xl sm:text-2xl font-bold mb-3 group-hover:translate-x-1 transition-transform duration-300"
                        style={{ color: colors.darkGray }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                        {service.desc}
                      </p>
                      <div
                        className="flex items-center font-semibold group-hover:translate-x-2 transition-transform duration-300"
                        style={{ color: colors.yellow }}
                      >
                        <span className="text-sm sm:text-base">Learn More</span>
                        <ArrowRight size={18} className="ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Services CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16"
          >
            <Link to="/services/global-moves">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-sm border-2 font-bold text-base sm:text-lg inline-flex items-center gap-2"
                style={{ borderColor: colors.darkGray, color: colors.darkGray }}
              >
                View All Services
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Testimonials */}
      <section
        className="py-12 sm:py-20"
        style={{ backgroundColor: colors.cream }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm mb-4"
              style={{ backgroundColor: colors.yellow }}
            >
              <MdOutlineStarBorderPurple500
                size={20}
                fill="currentColor"
                className="text-black"
              />
              <span className="text-sm font-bold text-black">
                Client Testimonials
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: colors.darkGray }}
            >
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by leading companies across Southern Africa for over 70
              years
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-sm p-6 sm:p-8 relative shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <Quote
                    size={32}
                    className="text-yellow-200 sm:w-10 sm:h-10"
                  />
                </div>

                {/* Company Logo (if available) */}
                {testimonial.companyLogo && (
                  <div className="mb-4">
                    <img
                      src={testimonial.companyLogo}
                      alt={`${testimonial.company} logo`}
                      className="h-8 sm:h-10 w-auto object-contain"
                    />
                  </div>
                )}

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <MdOutlineStarBorderPurple500
                      key={star}
                      size={16}
                      className="text-yellow-400"
                      fill="currentColor"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-white font-bold text-sm sm:text-base overflow-hidden">
                    {testimonial.authorImage ? (
                      <img
                        src={testimonial.authorImage}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      testimonial.author.charAt(0)
                    )}
                  </div>
                  <div>
                    <p
                      className="font-bold text-sm sm:text-base"
                      style={{ color: colors.darkGray }}
                    >
                      {testimonial.author.split(",")[0]}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {testimonial.author.split(",")[1]?.trim() ||
                        "Verified Client"}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 text-center"
          >
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Accredited and trusted by leading organizations
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
              {[
                { name: "FIDI", logo: "/FIDI.png" },
                { name: "IAM", logo: "/IAM.png" },
                { name: "FAIM", logo: "/FAIM.png" },
                { name: "ISO 9001", logo: "/iso.png" },
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="px-6 py-3 rounded-sm border-2 flex items-center justify-center min-w-[120px] h-16 sm:h-20"
                  style={{
                    borderColor: colors.yellow,
                  }}
                >
                  <img
                    src={badge.logo}
                    alt={`${badge.name} certification`}
                    className="max-h-full w-auto object-contain"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `<span class="font-bold text-sm sm:text-base" style="color: ${colors.darkGray}">${badge.name}</span>`;
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-12 sm:py-20 relative overflow-hidden"
        style={{ backgroundColor: colors.darkGray }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-10 w-64 h-64 rounded-sm"
            style={{ backgroundColor: colors.yellow }}
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 right-10 w-96 h-96 rounded-sm"
            style={{ backgroundColor: colors.yellow }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-white/10 backdrop-blur-sm"
            >
              <CheckCircle size={20} className="text-yellow-400" />
              <span className="text-sm font-semibold text-white">
                Free Quote • No Obligation
              </span>
            </motion.div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Ready to Move <br className="hidden sm:block" />
              <span style={{ color: colors.yellow }}>with Care?</span>
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Let us handle your relocation with the expertise and care it
              deserves. Get a personalized quote tailored to your needs in
              minutes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact" className="flex-1 sm:flex-initial">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(253, 219, 58, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-10 py-4 rounded-sm text-black font-bold text-base sm:text-lg shadow-2xl flex items-center justify-center gap-2"
                  style={{ backgroundColor: colors.yellow }}
                >
                  Get Your Free Quote
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link to="/contact" className="flex-1 sm:flex-initial">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-10 py-4 rounded-sm border-2 border-white text-white font-bold text-base sm:text-lg flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call Us Now
                </motion.button>
              </Link>
            </div>

            {/* Quick Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-400 text-sm"
            >
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+263 4 621 371</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-sm bg-gray-400"></div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@glenscare.co.zw</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
