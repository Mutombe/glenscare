import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Phone, Mail, MapPin, Facebook, Twitter, Linkedin,
  Package, Globe, Truck, Building2, Archive, Warehouse, Train, Ship, Plane,
  CheckCircle, Shield, Users, Clock, Award, ArrowRight, Star, Quote
} from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { IoArchiveOutline } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";
import { GiTruck } from "react-icons/gi";
import { PiTruckTrailerThin } from "react-icons/pi";
import { GiOfficeChair } from "react-icons/gi";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { PiPackageThin } from "react-icons/pi";
import { PiWarehouseThin } from "react-icons/pi";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { GiIronHulledWarship } from "react-icons/gi";
import { SiFsecure } from "react-icons/si";

// Color Palette
const colors = {
  darkGray: '#41444B',
  mediumGray: '#52575D',
  yellow: '#FDDB3A',
  cream: '#F6F4E6',
  black: '#000000',
  white: '#FFFFFF'
};

const OffersPage = () => {
  const offers = [
    {
      title: "First Move Discount",
      desc: "Get 15% off your first international move with Glens Care",
      validity: "Valid until Dec 31, 2025",
      discount: "15% OFF",
      icon: Package,
      color: "#FF6B6B"
    },
    {
      title: "Corporate Package",
      desc: "Special rates for businesses relocating 5+ employees",
      validity: "Ongoing offer",
      discount: "CORPORATE",
      icon: PiBuildingOfficeLight,
      color: "#4ECDC4"
    },
    {
      title: "Storage Bundle",
      desc: "3 months of storage free with any international move",
      validity: "Limited time offer",
      discount: "3 MONTHS FREE",
      icon: PiWarehouseThin,
      color: "#95E1D3"
    },
    {
      title: "Referral Bonus",
      desc: "Refer a friend and both get $100 credit on your next move",
      validity: "Ongoing program",
      discount: "$100 CREDIT",
      icon: Users,
      color: "#F38181"
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 rounded-sm text-sm font-bold mb-4"
              style={{ backgroundColor: colors.yellow, color: colors.black }}
            >
              LIMITED TIME OFFERS
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: colors.darkGray }}>
              Exclusive Deals
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Save big on your next move with our specially curated offers
            </p>
          </motion.div>

          {/* Creative Asymmetric Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
            {/* Offer 1 - Large Featured Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-7 relative overflow-hidden rounded-sm shadow-2xl group cursor-pointer"
              style={{ backgroundColor: colors.cream }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-sm" style={{ backgroundColor: offers[0].color }}></div>
              <div className="absolute top-4 right-4 w-16 h-16 flex items-center justify-center rounded-sm rotate-12 group-hover:rotate-0 transition-transform duration-300"
                style={{ backgroundColor: colors.yellow }}>
                {React.createElement(offers[0].icon, { size: 32, color: colors.black })}
              </div>
              
              <div className="p-8 md:p-12 relative z-10">
                <div className="inline-block px-4 py-2 rounded-sm text-xs font-bold mb-6" 
                  style={{ backgroundColor: offers[0].color, color: 'white' }}>
                  {offers[0].discount}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.darkGray }}>
                  {offers[0].title}
                </h3>
                <p className="text-lg text-gray-700 mb-6 max-w-md">{offers[0].desc}</p>
                <div className="flex items-center gap-4 mb-8">
                  <Clock size={20} color={colors.mediumGray} />
                  <p className="text-sm font-medium" style={{ color: colors.mediumGray }}>{offers[0].validity}</p>
                </div>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-sm text-black font-bold shadow-lg flex items-center gap-2 group"
                    style={{ backgroundColor: colors.yellow }}
                  >
                    Claim Now
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Offer 2 - Vertical Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-5 relative overflow-hidden rounded-sm shadow-xl group cursor-pointer"
              style={{ backgroundColor: offers[1].color }}
            >
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-sm opacity-20" style={{ backgroundColor: 'white' }}></div>
              
              <div className="p-8 h-full flex flex-col justify-between relative z-10">
                <div>
                  <div className="w-14 h-14 flex items-center justify-center rounded-sm mb-6 bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
                    {React.createElement(offers[1].icon, { size: 28, color: 'white' })}
                  </div>
                  <div className="inline-block px-3 py-1 rounded-sm text-xs font-bold mb-4 bg-white/30 backdrop-blur-sm text-white">
                    {offers[1].discount}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {offers[1].title}
                  </h3>
                  <p className="text-white/90 mb-4">{offers[1].desc}</p>
                </div>
                <div>
                  <p className="text-sm text-white/80 mb-4">{offers[1].validity}</p>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 rounded-sm font-bold shadow-lg"
                      style={{ backgroundColor: colors.yellow, color: colors.black }}
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Offer 3 - Horizontal Wide Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-5 relative overflow-hidden rounded-sm shadow-xl group cursor-pointer bg-white"
            >
              <div className="absolute top-0 left-0 h-full w-2" style={{ backgroundColor: offers[2].color }}></div>
              
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: offers[2].color }}>
                    {React.createElement(offers[2].icon, { size: 24, color: 'white' })}
                  </div>
                  <div className="px-3 py-1 rounded-sm text-xs font-bold" 
                    style={{ backgroundColor: offers[2].color, color: 'white' }}>
                    {offers[2].discount}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.darkGray }}>
                  {offers[2].title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{offers[2].desc}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">{offers[2].validity}</p>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-sm flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: colors.yellow }}
                    >
                      <ArrowRight size={20} color={colors.black} />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Offer 4 - Tilted Badge Style Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="md:col-span-7 relative overflow-hidden rounded-sm shadow-xl group cursor-pointer"
              style={{ backgroundColor: colors.darkGray }}
            >
              <div className="absolute -top-20 -left-20 w-60 h-60 rounded-sm opacity-10" style={{ backgroundColor: offers[3].color }}></div>
              <div className="absolute top-6 right-6 w-24 h-24 rounded-sm opacity-20 group-hover:scale-150 transition-transform duration-500"
                style={{ backgroundColor: offers[3].color }}></div>
              
              <div className="p-8 md:p-10 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 flex items-center justify-center rounded-sm group-hover:rotate-12 transition-transform"
                      style={{ backgroundColor: offers[3].color }}>
                      {React.createElement(offers[3].icon, { size: 32, color: 'white' })}
                    </div>
                    <div className="px-4 py-2 rounded-full text-sm font-bold"
                      style={{ backgroundColor: colors.yellow, color: colors.black }}>
                      {offers[3].discount}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-3 text-white">
                    {offers[3].title}
                  </h3>
                  <p className="text-gray-300 mb-4 max-w-md">{offers[3].desc}</p>
                  <p className="text-sm text-gray-400">{offers[3].validity}</p>
                </div>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-sm font-bold shadow-xl whitespace-nowrap"
                    style={{ backgroundColor: colors.yellow, color: colors.black }}
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Custom Quote CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-sm shadow-2xl"
            style={{ backgroundColor: colors.cream }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-sm -translate-y-32 translate-x-32 opacity-30"
              style={{ backgroundColor: colors.yellow }}></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-sm translate-y-24 -translate-x-24 opacity-30"
              style={{ backgroundColor: colors.darkGray }}></div>
            
            <div className="relative z-10 p-12 md:p-16 text-center">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <MdOutlineStarBorderPurple500 size={48} style={{ color: colors.yellow }} fill={colors.yellow} />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.darkGray }}>
                Need Something Different?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Every move is unique. Let us create a personalized package tailored to your specific needs.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 rounded-sm text-black font-bold text-lg shadow-2xl inline-flex items-center gap-3"
                  style={{ backgroundColor: colors.yellow }}
                >
                  Request Custom Quote
                  <ArrowRight size={24} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OffersPage;