import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, FileText, Lock, Award, CheckCircle, 
  Download, ArrowRight, Eye, Users, Leaf, Scale, Globe
} from 'lucide-react';
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
import { GiMapleLeaf } from "react-icons/gi";


// Simple Link component
const Link = ({ to, children, ...props }) => (
  <a href={to} {...props}>{children}</a>
);

// Color Palette
const colors = {
  darkGray: '#41444B',
  mediumGray: '#52575D',
  yellow: '#FDDB3A',
  cream: '#F6F4E6',
  black: '#000000',
  white: '#FFFFFF'
};

const PoliciesPage = () => {
  const policies = [
    {
      title: "Anti-Bribery and Corruption Policy",
      desc: "Glens Removals subscribes against bribery and corruption of any form within the international moving industry.",
      icon: Scale,
      color: "#FF6B6B",
      category: "Ethics"
    },
    {
      title: "Service Level Agreement",
      desc: "Glens Removals is a firm believer in the delivery of services to its customers according to customers expected needs based on quality.",
      icon: CheckCircle,
      color: "#4ECDC4",
      category: "Quality"
    },
    {
      title: "Terms and Conditions for Carriage",
      desc: "Conditions upon which goods are packed, moved and/or warehoused by GLENS REMOVALS.",
      icon: FileText,
      color: "#95E1D3",
      category: "Legal"
    },
    {
      title: "Privacy Policy",
      desc: "Details the type of Personal Information we collect, how it is used, protected and disposed of.",
      icon: Lock,
      color: "#F38181",
      category: "Privacy"
    },
    {
      title: "FIDI Certificate",
      desc: "Glens Removals & Storage is certified by the FIDI Global Alliance as complying with the requirements of the FIDI quality standards.",
      icon: Award,
      color: "#A8E6CF",
      category: "Certification"
    },
    {
      title: "Confirmation of Quality Assurance",
      desc: "Glens Removals has demonstrated a consistent high level of quality and meets FAIM Internal Audit requirements.",
      icon: SiFsecure,
      color: "#FFD3B6",
      category: "Quality"
    },
    {
      title: "Code of Ethics and Conduct",
      desc: "This Code represents the ethical, social, and environmental behaviour that Glens Removals & Storage commits to.",
      icon: Users,
      color: "#FFAAA5",
      category: "Ethics"
    },
    {
      title: "Corporate Responsibility, Social & Sustainability Policy",
      desc: "We are committed to caring for the communities we operate in today while building a better tomorrow.",
      icon: GiMapleLeaf,
      color: "#8FD9A8",
      category: "Sustainability"
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-sm text-sm font-bold mb-6"
              style={{ backgroundColor: colors.cream, color: colors.darkGray }}
            >
              <SiFsecure size={18} />
              TRANSPARENCY & COMPLIANCE
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: colors.darkGray }}>
              Our Policies
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Committed to transparency, quality, and ethical business practices in everything we do
            </p>
          </motion.div>

          {/* Creative Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Policy 1 - Large Hero Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-8 relative overflow-hidden rounded-sm shadow-xl group cursor-pointer bg-white"
            >
              <div className="absolute top-0 right-0 w-48 h-48 rounded-sm -translate-y-24 translate-x-24 opacity-10"
                style={{ backgroundColor: policies[0].color }}></div>
              <div className="absolute bottom-0 left-0 w-64 h-2 group-hover:h-full transition-all duration-500 opacity-5"
                style={{ backgroundColor: policies[0].color }}></div>
              
              <div className="p-8 md:p-12 relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 flex items-center justify-center rounded-sm group-hover:rotate-12 transition-transform"
                      style={{ backgroundColor: policies[0].color }}>
                      {React.createElement(policies[0].icon, { size: 32, color: 'white' })}
                    </div>
                    <div className="px-3 py-1 rounded-sm text-xs font-bold"
                      style={{ backgroundColor: policies[0].color, color: 'white' }}>
                      {policies[0].category}
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: colors.darkGray }}>
                  {policies[0].title}
                </h3>
                <p className="text-gray-700 mb-8 text-lg max-w-2xl">{policies[0].desc}</p>
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-sm font-bold shadow-lg flex items-center gap-3"
                  style={{ backgroundColor: colors.yellow, color: colors.black }}
                >
                  <Download size={20} />
                  Download PDF
                  <ArrowRight size={20} />
                </motion.button>
              </div>
            </motion.div>

            {/* Policy 2 - Vertical Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 relative overflow-hidden rounded-sm shadow-xl group cursor-pointer"
              style={{ backgroundColor: policies[1].color }}
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-sm opacity-20 bg-white"></div>
              
              <div className="p-8 h-full flex flex-col relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-sm mb-4 bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
                    {React.createElement(policies[1].icon, { size: 28, color: 'white' })}
                  </div>
                  <div className="inline-block px-3 py-1 rounded-sm text-xs font-bold bg-white/30 text-white mb-4">
                    {policies[1].category}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white flex-grow">
                  {policies[1].title}
                </h3>
                <p className="text-white/90 text-sm mb-6">{policies[1].desc}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full px-4 py-3 rounded-sm font-bold shadow-lg flex items-center justify-center gap-2"
                  style={{ backgroundColor: colors.yellow, color: colors.black }}
                >
                  <Eye size={16} />
                  View Policy
                </motion.button>
              </div>
            </motion.div>

            {/* Policy 3 - Compact Horizontal */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-6 relative overflow-hidden rounded-sm shadow-lg group cursor-pointer bg-white"
            >
              <div className="absolute top-0 left-0 h-full w-3 group-hover:w-full transition-all duration-300 opacity-10"
                style={{ backgroundColor: policies[2].color }}></div>
              
              <div className="p-6 flex items-center gap-6 relative z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-sm flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: policies[2].color }}>
                  {React.createElement(policies[2].icon, { size: 24, color: 'white' })}
                </div>
                <div className="flex-grow">
                  <div className="inline-block px-2 py-1 rounded-sm text-xs font-bold mb-2"
                    style={{ backgroundColor: policies[2].color, color: 'white' }}>
                    {policies[2].category}
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: colors.darkGray }}>
                    {policies[2].title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{policies[2].desc}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 shadow-lg"
                  style={{ backgroundColor: colors.yellow }}
                >
                  <Download size={18} color={colors.black} />
                </motion.button>
              </div>
            </motion.div>

            {/* Policy 4 - Compact Horizontal */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="md:col-span-6 relative overflow-hidden rounded-sm shadow-lg group cursor-pointer"
              style={{ backgroundColor: colors.cream }}
            >
              <div className="absolute bottom-0 right-0 w-32 h-32 rounded-sm translate-y-16 translate-x-16 opacity-20"
                style={{ backgroundColor: policies[3].color }}></div>
              
              <div className="p-6 flex items-center gap-6 relative z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-sm flex-shrink-0 group-hover:rotate-12 transition-transform"
                  style={{ backgroundColor: policies[3].color }}>
                  {React.createElement(policies[3].icon, { size: 24, color: 'white' })}
                </div>
                <div className="flex-grow">
                  <div className="inline-block px-2 py-1 rounded-sm text-xs font-bold mb-2"
                    style={{ backgroundColor: policies[3].color, color: 'white' }}>
                    {policies[3].category}
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: colors.darkGray }}>
                    {policies[3].title}
                  </h3>
                  <p className="text-sm text-gray-700 line-clamp-2">{policies[3].desc}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 shadow-lg"
                  style={{ backgroundColor: colors.yellow }}
                >
                  <ArrowRight size={18} color={colors.black} />
                </motion.button>
              </div>
            </motion.div>

            {/* Policy 5 - Medium Card with Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="md:col-span-4 relative overflow-hidden rounded-sm shadow-xl group cursor-pointer bg-white"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-sm opacity-10"
                style={{ backgroundColor: policies[4].color }}></div>
              
              <div className="p-8 relative z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-sm mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: policies[4].color }}>
                  {React.createElement(policies[4].icon, { size: 28, color: 'white' })}
                </div>
                <div className="inline-block px-3 py-1 rounded-sm text-xs font-bold mb-4"
                  style={{ backgroundColor: policies[4].color, color: 'white' }}>
                  {policies[4].category}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.darkGray }}>
                  {policies[4].title}
                </h3>
                <p className="text-gray-700 text-sm mb-6">{policies[4].desc}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full px-4 py-3 rounded-sm font-bold shadow-lg"
                  style={{ backgroundColor: colors.yellow, color: colors.black }}
                >
                  View Certificate
                </motion.button>
              </div>
            </motion.div>

            {/* Policy 6 - Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="md:col-span-4 relative overflow-hidden rounded-sm shadow-xl group cursor-pointer"
              style={{ backgroundColor: policies[5].color }}
            >
              <div className="absolute bottom-0 left-0 w-full h-2 group-hover:h-full transition-all duration-500"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>
              
              <div className="p-8 relative z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-sm mb-4 bg-white/20 backdrop-blur-sm group-hover:rotate-12 transition-transform">
                  {React.createElement(policies[5].icon, { size: 28, color: 'white' })}
                </div>
                <div className="inline-block px-3 py-1 rounded-sm text-xs font-bold bg-white/30 text-white mb-4">
                  {policies[5].category}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {policies[5].title}
                </h3>
                <p className="text-white/90 text-sm mb-6">{policies[5].desc}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full px-4 py-3 rounded-sm font-bold shadow-lg"
                  style={{ backgroundColor: colors.yellow, color: colors.black }}
                >
                  Read More
                </motion.button>
              </div>
            </motion.div>

            {/* Policy 7 - Wide Horizontal Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="md:col-span-4 relative overflow-hidden rounded-sm shadow-xl group cursor-pointer"
              style={{ backgroundColor: colors.darkGray }}
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-sm opacity-10"
                style={{ backgroundColor: policies[6].color }}></div>
              
              <div className="p-8 relative z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-sm mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: policies[6].color }}>
                  {React.createElement(policies[6].icon, { size: 28, color: 'white' })}
                </div>
                <div className="inline-block px-3 py-1 rounded-sm text-xs font-bold mb-4"
                  style={{ backgroundColor: policies[6].color, color: 'white' }}>
                  {policies[6].category}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {policies[6].title}
                </h3>
                <p className="text-gray-300 text-sm mb-6">{policies[6].desc}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full px-4 py-3 rounded-sm font-bold shadow-lg flex items-center justify-center gap-2"
                  style={{ backgroundColor: colors.yellow, color: colors.black }}
                >
                  <Download size={16} />
                  Download
                </motion.button>
              </div>
            </motion.div>

            {/* Policy 8 - Large Featured Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="md:col-span-8 relative overflow-hidden rounded-sm shadow-2xl group cursor-pointer bg-white"
            >
              <div className="absolute top-0 right-0 w-64 h-64 rounded-sm -translate-y-32 translate-x-32 opacity-10"
                style={{ backgroundColor: policies[7].color }}></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-sm translate-y-24 -translate-x-24 opacity-10"
                style={{ backgroundColor: policies[7].color }}></div>
              
              <div className="p-8 md:p-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 flex items-center justify-center rounded-sm group-hover:rotate-12 transition-transform"
                        style={{ backgroundColor: policies[7].color }}>
                        {React.createElement(policies[7].icon, { size: 32, color: 'white' })}
                      </div>
                      <div className="px-4 py-2 rounded-sm text-sm font-bold"
                        style={{ backgroundColor: policies[7].color, color: 'white' }}>
                        {policies[7].category}
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4" style={{ color: colors.darkGray }}>
                      {policies[7].title}
                    </h3>
                    <p className="text-gray-700 text-lg max-w-2xl">{policies[7].desc}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-sm font-bold shadow-xl whitespace-nowrap flex items-center gap-3"
                    style={{ backgroundColor: colors.yellow, color: colors.black }}
                  >
                    <GiWorld size={20} />
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 relative overflow-hidden rounded-sm shadow-2xl"
            style={{ backgroundColor: colors.cream }}
          >
            <div className="absolute top-0 left-0 w-64 h-64 rounded-sm -translate-y-32 -translate-x-32 opacity-20"
              style={{ backgroundColor: colors.yellow }}></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-sm translate-y-24 translate-x-24 opacity-20"
              style={{ backgroundColor: colors.darkGray }}></div>
            
            <div className="relative z-10 p-12 md:p-16 text-center">
              <SiFsecure size={48} style={{ color: colors.darkGray }} className="mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4" style={{ color: colors.darkGray }}>
                Questions About Our Policies?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Our team is here to help you understand our commitment to quality and transparency
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 rounded-sm text-black font-bold text-lg shadow-2xl inline-flex items-center gap-3"
                  style={{ backgroundColor: colors.yellow }}
                >
                  Contact Us
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

export default PoliciesPage