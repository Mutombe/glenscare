import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Phone, Mail, MapPin, Facebook, Twitter, Linkedin,
  Package, Globe, Truck, Building2, Archive, Warehouse, Train, Ship, Plane,
  CheckCircle, Shield, Users, Clock, Award, ArrowRight, Star, Quote
} from 'lucide-react';
import { Toaster, toast } from 'sonner';

// Color Palette
const colors = {
  darkGray: '#41444B',
  mediumGray: '#52575D',
  yellow: '#FDDB3A',
  cream: '#F6F4E6',
  black: '#000000',
  white: '#FFFFFF'
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    region: 'Zimbabwe',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', region: 'Zimbabwe', service: '', message: '' });
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6" style={{ color: colors.darkGray }}>
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600">
              Let's discuss how we can help with your moving needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-bold mb-6" style={{ color: colors.darkGray }}>
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: colors.darkGray }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: colors.darkGray }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: colors.darkGray }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: colors.darkGray }}>
                    Select Region *
                  </label>
                  <select
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  >
                    <option>Zimbabwe</option>
                    <option>South Africa</option>
                    <option>Zambia</option>
                    <option>Malawi</option>
                    <option>Mozambique</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: colors.darkGray }}>
                    Service Interested In
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option>Global Moves</option>
                    <option>Regional Moves</option>
                    <option>Door-to-Door Relocation</option>
                    <option>Storage</option>
                    <option>Packing & Crating</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: colors.darkGray }}>
                    Message *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-lg text-black font-bold text-lg shadow-lg"
                  style={{ backgroundColor: colors.yellow }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-bold mb-6" style={{ color: colors.darkGray }}>
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkGray }}>
                    Zimbabwe Office
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin size={20} className="mr-3 flex-shrink-0 mt-1" style={{ color: colors.yellow }} />
                      <span className="text-gray-700">Glens Removals & Storage, Zimbabwe</span>
                    </div>
                    <div className="flex items-start">
                      <Phone size={20} className="mr-3 flex-shrink-0 mt-1" style={{ color: colors.yellow }} />
                      <div>
                        <p className="text-gray-700">+263 242 620711-5</p>
                        <p className="text-gray-700">08677009686</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail size={20} className="mr-3 flex-shrink-0 mt-1" style={{ color: colors.yellow }} />
                      <span className="text-gray-700">info@glenscare.co.zw</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkGray }}>
                    South Africa Office
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin size={20} className="mr-3 flex-shrink-0 mt-1" style={{ color: colors.yellow }} />
                      <span className="text-gray-700">Glens Care Africa, South Africa</span>
                    </div>
                    <div className="flex items-start">
                      <Phone size={20} className="mr-3 flex-shrink-0 mt-1" style={{ color: colors.yellow }} />
                      <span className="text-gray-700">+27 011 826 2534</span>
                    </div>
                    <div className="flex items-start">
                      <Mail size={20} className="mr-3 flex-shrink-0 mt-1" style={{ color: colors.yellow }} />
                      <span className="text-gray-700">info@glenscare.co.za</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkGray }}>
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM</p>
                    <p><strong>Saturday:</strong> 8:00 AM - 1:00 PM</p>
                    <p><strong>Sunday:</strong> Closed</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkGray }}>
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-400 transition-colors" style={{ backgroundColor: colors.yellow }}>
                      <Facebook size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-400 transition-colors" style={{ backgroundColor: colors.yellow }}>
                      <Twitter size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-400 transition-colors" style={{ backgroundColor: colors.yellow }}>
                      <Linkedin size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;