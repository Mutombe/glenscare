import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, Globe, Package, Ship, Truck, Clock, 
  FileText, Shield, HelpCircle, MessageCircle, Phone,
  CheckCircle, ArrowRight, Plane, Anchor, Box
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

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const faqs = [
    {
      category: "Global Related",
      icon: GiWorld,
      color: "#4ECDC4",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop",
      questions: [
        { 
          q: "How much will it cost me?", 
          a: "Rates are provided on the spot and are based on the total volume of the shipment and the destination. We offer competitive pricing with transparent quotes.",
          icon: PiPackageThin
        },
        { 
          q: "What does LCL mean?", 
          a: "LCL stands for Less than Container Load. It's a shipping method where your goods share container space with other shipments, making it cost-effective for smaller moves.",
          icon: Box
        },
        { 
          q: "Why did Glens introduce this service?", 
          a: "To provide more flexible and affordable options for customers who don't need a full container for their international moves. We believe in accessible, quality service for everyone.",
          icon: SiFsecure
        }
      ]
    },
    {
      category: "Export Related",
      icon: Ship,
      color: "#FF6B6B",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop",
      questions: [
        { 
          q: "When does my shipment arrive?", 
          a: "Arrival times vary by destination. We provide estimated timelines during booking and keep you updated throughout the journey with real-time tracking.",
          icon: Clock
        },
        { 
          q: "How do I personally track my Glens Global shipment?", 
          a: "We provide a tracking number and regular updates. Our professional tracking team keeps you informed of your shipment's position at every stage.",
          icon: GiWorld 
        },
        { 
          q: "What documentation is required to export my goods?", 
          a: "Required documents typically include inventory list, passport copy, and destination country-specific forms. We guide you through the entire documentation process step by step.",
          icon: FileText
        },
        { 
          q: "Can I pack some of the things myself?", 
          a: "Yes, you can pack some items yourself. However, we recommend professional packing for fragile and valuable items to ensure proper insurance coverage and safe transport.",
          icon: PiPackageThin
        }
      ]
    },
    {
      category: "Import Related",
      icon: Truck,
      color: "#95E1D3",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop",
      questions: [
        { 
          q: "How long does customs clearance take?", 
          a: "Customs clearance typically takes 2-5 business days, depending on the documentation and customs efficiency. We work to expedite this process as much as possible.",
          icon: CheckCircle
        },
        { 
          q: "What is the transit time from Durban to Harare?", 
          a: "Transit time varies by mode: Road transport typically takes 3-5 days, while rail transport may take 7-10 days. We'll help you choose the best option for your timeline.",
          icon: PiTruckTrailerThin
        },
        { 
          q: "Do I have to be present for customs clearance?", 
          a: "No, our team handles customs clearance on your behalf. We just need your authorization and proper documentation. You can relax while we handle the details.",
          icon: SiFsecure
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Image */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: colors.cream }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-sm -translate-y-48 translate-x-48 opacity-20"
          style={{ backgroundColor: colors.yellow }}></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-sm translate-y-32 -translate-x-32 opacity-20"
          style={{ backgroundColor: colors.darkGray }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-sm text-sm font-bold mb-6"
                style={{ backgroundColor: colors.yellow, color: colors.black }}
              >
                <HelpCircle size={18} />
                GOT QUESTIONS?
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: colors.darkGray }}>
                We've Got Answers
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Everything you need to know about international moving, shipping, and storage - all in one place.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-sm bg-white shadow-lg"
                >
                  <CheckCircle size={20} style={{ color: colors.yellow }} />
                  <span className="font-semibold text-sm">100+ Questions</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-sm bg-white shadow-lg"
                >
                  <Clock size={20} style={{ color: colors.yellow }} />
                  <span className="font-semibold text-sm">24/7 Support</span>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="relative rounded-sm overflow-hidden shadow-2xl aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=800&fit=crop" 
                  alt="Customer service and moving"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-sm shadow-xl flex items-center justify-center"
                style={{ backgroundColor: colors.yellow }}>
                <MessageCircle size={48} color={colors.black} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12 bg-white sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {faqs.map((category, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center gap-3 px-6 py-3 rounded-sm font-bold shadow-lg transition-all ${
                  activeCategory === idx ? 'shadow-xl' : ''
                }`}
                style={{
                  backgroundColor: activeCategory === idx ? category.color : colors.cream,
                  color: activeCategory === idx ? 'white' : colors.darkGray
                }}
              >
                {React.createElement(category.icon, { size: 20 })}
                {category.category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content with Images */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {faqs.map((category, catIdx) => {
              if (catIdx !== activeCategory) return null;
              
              return (
                <motion.div
                  key={catIdx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Category Header with Image */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="relative rounded-sm overflow-hidden shadow-2xl aspect-video"
                    >
                      <img 
                        src={category.image} 
                        alt={category.category}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute top-6 right-6 w-20 h-20 rounded-sm shadow-xl flex items-center justify-center"
                        style={{ backgroundColor: category.color }}>
                        {React.createElement(category.icon, { size: 40, color: 'white' })}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex flex-col justify-center"
                    >
                      <div className="inline-block px-4 py-2 rounded-sm text-sm font-bold mb-4 self-start"
                        style={{ backgroundColor: category.color, color: 'white' }}>
                        {category.questions.length} QUESTIONS
                      </div>
                      <h2 className="text-4xl font-bold mb-4" style={{ color: colors.darkGray }}>
                        {category.category}
                      </h2>
                      <p className="text-lg text-gray-600 mb-6">
                        Find answers to the most common questions about our {category.category.toLowerCase()} services.
                      </p>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Clock size={20} />
                        <span>Updated recently with latest information</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* FAQ Accordion with Creative Design */}
                  <div className="space-y-4">
                    {category.questions.map((faq, idx) => {
                      const globalIdx = catIdx * 100 + idx;
                      const isOpen = openIndex === globalIdx;
                      
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-all"
                        >
                          <button
                            onClick={() => setOpenIndex(isOpen ? null : globalIdx)}
                            className="w-full px-6 md:px-8 py-6 text-left flex items-start gap-4 hover:bg-gray-50 transition-colors"
                          >
                            <div 
                              className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0 transition-transform"
                              style={{ 
                                backgroundColor: isOpen ? category.color : colors.cream,
                                transform: isOpen ? 'rotate(10deg)' : 'rotate(0deg)'
                              }}
                            >
                              {React.createElement(faq.icon, { 
                                size: 24, 
                                color: isOpen ? 'white' : colors.darkGray 
                              })}
                            </div>
                            <div className="flex-grow">
                              <span className="font-bold text-lg block mb-1" style={{ color: colors.darkGray }}>
                                {faq.q}
                              </span>
                              <span className="text-sm text-gray-500">
                                Click to {isOpen ? 'hide' : 'view'} answer
                              </span>
                            </div>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: colors.cream }}
                            >
                              <ChevronDown size={20} style={{ color: colors.darkGray }} />
                            </motion.div>
                          </button>
                          
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div 
                                  className="px-8 py-6 ml-16 mr-4 rounded-sm"
                                  style={{ backgroundColor: colors.cream }}
                                >
                                  <p className="text-gray-700 leading-relaxed">
                                    {faq.a}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* Quick Stats Section with Images */}
      <section className="py-20" style={{ backgroundColor: colors.darkGray }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Why Choose Glens Care?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: GiWorld, stat: "50+", label: "Countries Served", color: "#4ECDC4" },
              { icon: PiPackageThin, stat: "10K+", label: "Moves Completed", color: "#FF6B6B" },
              { icon: Clock, stat: "24/7", label: "Support Available", color: "#95E1D3" },
              { icon: SiFsecure, stat: "100%", label: "Insured Shipments", color: "#FFD93D" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/10 backdrop-blur-sm rounded-sm p-8 text-center"
              >
                <div 
                  className="w-16 h-16 rounded-sm flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: item.color }}
                >
                  {React.createElement(item.icon, { size: 32, color: 'white' })}
                </div>
                <div className="text-4xl font-bold text-white mb-2">{item.stat}</div>
                <div className="text-gray-300">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-sm shadow-2xl" style={{ backgroundColor: colors.cream }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-sm -translate-y-48 translate-x-48 opacity-20"
              style={{ backgroundColor: colors.yellow }}></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-sm translate-y-32 -translate-x-32 opacity-20"
              style={{ backgroundColor: colors.darkGray }}></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 md:p-16">
              <div>
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block mb-6"
                >
                  <MessageCircle size={48} style={{ color: colors.yellow }} />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.darkGray }}>
                  Still Have Questions?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our expert team is here to help. Get personalized answers to your specific moving needs.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ backgroundColor: colors.yellow }}>
                      <Phone size={20} color={colors.black} />
                    </div>
                    <span className="font-semibold">+263 123 456 789</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ backgroundColor: colors.yellow }}>
                      <MessageCircle size={20} color={colors.black} />
                    </div>
                    <span className="font-semibold">Live chat available</span>
                  </div>
                </div>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-5 rounded-sm text-black font-bold text-lg shadow-2xl inline-flex items-center gap-3"
                    style={{ backgroundColor: colors.yellow }}
                  >
                    Contact Us Now
                    <ArrowRight size={24} />
                  </motion.button>
                </Link>
              </div>

              {/* Contact Image Placeholder */}
              <div className="relative rounded-sm overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=800&fit=crop" 
                  alt="Customer support team"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;