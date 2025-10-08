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

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4" style={{ color: colors.yellow }}>
            Glens Care
          </h3>
          <p className="text-gray-400 mb-4">
            Moving with care since 1952. Your trusted partner for relocations across Africa.
          </p>
          <div className="flex space-x-4">
            <Facebook size={20} className="cursor-pointer hover:text-yellow-400 transition-colors" />
            <Twitter size={20} className="cursor-pointer hover:text-yellow-400 transition-colors" />
            <Linkedin size={20} className="cursor-pointer hover:text-yellow-400 transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
            <li><Link to="/services/global-moves" className="hover:text-yellow-400 transition-colors">Services</Link></li>
            <li><Link to="/policies" className="hover:text-yellow-400 transition-colors">Policies</Link></li>
            <li><Link to="/faq" className="hover:text-yellow-400 transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Zimbabwe Office</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start">
              <Phone size={16} className="mr-2 mt-1 flex-shrink-0" />
              <span>+263 242 620711-5<br />08677009686</span>
            </li>
            <li className="flex items-start">
              <Mail size={16} className="mr-2 mt-1 flex-shrink-0" />
              <span>info@glenscare.co.zw</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">South Africa Office</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start">
              <Phone size={16} className="mr-2 mt-1 flex-shrink-0" />
              <span>+27 011 826 2534</span>
            </li>
            <li className="flex items-start">
              <Mail size={16} className="mr-2 mt-1 flex-shrink-0" />
              <span>info@glenscare.co.za</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Glens Care. All rights reserved.</p>
        <p className="mt-2 text-sm">From crane to train, we do everything.</p>
      </div>
    </div>
  </footer>
);

export default Footer;