import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, Shield, Users, Clock, Award, ArrowRight, Star, 
  Globe, Truck, Building2, Package, Warehouse, MapPin,
  TrendingUp, Target, Heart, Zap, ChevronRight, Calendar
} from 'lucide-react';
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { GiWorld } from "react-icons/gi";

// Color Palette
const colors = {
  darkGray: '#41444B',
  mediumGray: '#52575D',
  yellow: '#FDDB3A',
  cream: '#F6F4E6',
  black: '#000000',
  white: '#FFFFFF'
};

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [counters, setCounters] = useState({
    years: 0,
    countries: 0,
    clients: 0,
    moves: 0
  });

  // Animated counter effect
  useEffect(() => {
    const intervals = [];
    
    intervals.push(setInterval(() => {
      setCounters(prev => ({
        ...prev,
        years: prev.years < 72 ? prev.years + 1 : 72
      }));
    }, 30));
    
    intervals.push(setInterval(() => {
      setCounters(prev => ({
        ...prev,
        countries: prev.countries < 150 ? prev.countries + 5 : 150
      }));
    }, 20));
    
    intervals.push(setInterval(() => {
      setCounters(prev => ({
        ...prev,
        clients: prev.clients < 10000 ? prev.clients + 200 : 10000
      }));
    }, 10));
    
    intervals.push(setInterval(() => {
      setCounters(prev => ({
        ...prev,
        moves: prev.moves < 50000 ? prev.moves + 1000 : 50000
      }));
    }, 10));

    return () => intervals.forEach(clearInterval);
  }, []);

  const milestones = [
    { 
      year: '1952', 
      title: 'Founded', 
      desc: 'Glens Removals established in Zimbabwe',
      image: '/1.jpeg'
    },
    { 
      year: '1975', 
      title: 'Regional Expansion', 
      desc: 'Opened branches across Southern Africa',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80'
    },
    { 
      year: '1990', 
      title: 'International Recognition', 
      desc: 'Joined FIDI & IAM networks',
      image: 'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=400&q=80'
    },
    { 
      year: '2010', 
      title: 'Digital Innovation', 
      desc: 'Launched tracking & digital services',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80'
    },
    { 
      year: '2020', 
      title: 'FAIM Certified', 
      desc: 'Achieved highest quality standards',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80'
    },
    { 
      year: '2024', 
      title: 'Leading the Way', 
      desc: 'Africa\'s premier moving company',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80'
    }
  ];

  const values = [
    { icon: Heart, title: 'Care', desc: 'Every move handled with personal attention' },
    { icon: Shield, title: 'Trust', desc: 'Reliable service since 1952' },
    { icon: Zap, title: 'Innovation', desc: 'Modern solutions for seamless moves' },
    { icon: GiWorld, title: 'Global Reach', desc: 'Connected worldwide through partnerships' }
  ];

  return (
    <div className="pt-16 sm:pt-20 bg-white">
      {/* Hero Section - Mobile First */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-cream-50"></div>
        
        {/* Mobile-first Hero Content */}
        <div className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 max-w-7xl mx-auto">
          {/* Mobile Hero Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 sm:mb-12 lg:hidden"
          >
            <div className="relative rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="/3.jpeg"
                alt="Glens Care Team"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 rounded-sm bg-yellow-400 text-black text-xs font-bold">
                    Since 1952
                  </div>
                  <div className="px-3 py-1 rounded-sm bg-white/90 text-black text-xs font-bold">
                    72 Years
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Big Number Badge */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-block mb-6"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-yellow-300 rounded-sm blur-2xl opacity-40"></div>
                  <span className="relative text-5xl sm:text-6xl lg:text-7xl font-bold" style={{ color: colors.yellow }}>
                    72
                  </span>
                </div>
              </motion.div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6" style={{ color: colors.darkGray }}>
                Years of Moving
                <span className="block text-2xl sm:text-3xl lg:text-5xl mt-2" style={{ color: colors.yellow }}>
                  Stories Forward
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
                Since 1952, we've been more than just a moving company. We're the bridge between your past and future, handling every transition with care.
              </p>

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 py-3 rounded-sm text-black font-bold shadow-xl"
                  style={{ backgroundColor: colors.yellow }}
                >
                  Get Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 py-3 rounded-sm border-2 font-bold"
                  style={{ borderColor: colors.darkGray, color: colors.darkGray }}
                >
                  Our Services
                </motion.button>
              </div>
            </motion.div>

            {/* Desktop Hero Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden lg:block relative"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="rounded-sm overflow-hidden shadow-2xl">
                  <img 
                    src="/3.jpeg"
                    alt="Professional moving team"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                
                {/* Floating Stats Cards */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white rounded-sm p-4 shadow-xl"
                >
                  <GiWorld className="text-yellow-500 mb-2" size={24} />
                  <div className="text-2xl font-bold" style={{ color: colors.darkGray }}>150+</div>
                  <div className="text-xs text-gray-600">Countries</div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-sm p-4 shadow-xl"
                >
                  <Users className="text-white mb-2" size={24} />
                  <div className="text-2xl font-bold text-white">10K+</div>
                  <div className="text-xs text-white/90">Happy Clients</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 lg:hidden"
          >
            {[
              { icon: Clock, value: '72+', label: 'Years' },
              { icon: GiWorld, value: '150+', label: 'Countries' },
              { icon: Users, value: '10K+', label: 'Clients' },
              { icon: Award, value: 'FAIM', label: 'Certified' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-sm p-4 shadow-lg text-center">
                <stat.icon className="mx-auto mb-2 text-yellow-500" size={24} />
                <div className="text-xl font-bold" style={{ color: colors.darkGray }}>{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      
      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-sm p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all h-full">
                {/* Icon Badge */}
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-sm flex items-center justify-center" 
                       style={{ backgroundColor: colors.yellow }}>
                    <Target size={24} className="text-black" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: colors.darkGray }}>
                    Our Vision
                  </h3>
                </div>
                
                {/* Decorative Quote Mark */}
                <div className="text-6xl sm:text-7xl font-serif opacity-10 absolute top-4 right-4" 
                     style={{ color: colors.yellow }}>
                  "
                </div>
                
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed relative z-10">
                   To be Southern Africa’s leading logistics and relocation brand, connecting people and businesses through
                  <span className="font-semibold" style={{ color: colors.yellow }}> efficient</span>, 
                  <span className="font-semibold" style={{ color: colors.yellow }}> reliable</span>, and 
                  <span className="font-semibold" style={{ color: colors.yellow }}> caring </span> services.
                </p>
                
                {/* Bottom Accent */}
                <div className="mt-6 flex items-center gap-2">
                  <div className="w-12 h-1 rounded-sm" style={{ backgroundColor: colors.yellow }}></div>
                  <div className="w-6 h-1 rounded-sm bg-gray-300"></div>
                  <div className="w-3 h-1 rounded-sm bg-gray-200"></div>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-sm p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all h-full">
                {/* Icon Badge */}
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-sm flex items-center justify-center" 
                       style={{ backgroundColor: colors.darkGray }}>
                    <TrendingUp size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: colors.darkGray }}>
                    Our Mission
                  </h3>
                </div>
                
                {/* Decorative Quote Mark */}
                <div className="text-6xl sm:text-7xl font-serif opacity-10 absolute top-4 right-4" 
                     style={{ color: colors.darkGray }}>
                  "
                </div>
                
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed relative z-10">
                  To to deliver
                  <span className="font-semibold" style={{ color: colors.darkGray }}> seamless</span>
                  door to door moving and storage services through skilled professionals, modern logistics, and a customer first approach. 
                </p>
                
                {/* Bottom Accent */}
                <div className="mt-6 flex items-center gap-2">
                  <div className="w-12 h-1 rounded-sm" style={{ backgroundColor: colors.darkGray }}></div>
                  <div className="w-6 h-1 rounded-sm bg-gray-300"></div>
                  <div className="w-3 h-1 rounded-sm bg-gray-200"></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Supporting Image or Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <div className="bg-yellow-50 rounded-sm p-4 text-center border-l-4" style={{ borderColor: colors.yellow }}>
              <div className="text-xl sm:text-2xl font-bold mb-1" style={{ color: colors.darkGray }}>
                Customer First
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Always putting your needs first</p>
            </div>
            <div className="bg-gray-50 rounded-sm p-4 text-center border-l-4" style={{ borderColor: colors.darkGray }}>
              <div className="text-xl sm:text-2xl font-bold mb-1" style={{ color: colors.darkGray }}>
                Innovation Driven
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Embracing modern solutions</p>
            </div>
            <div className="bg-green-50 rounded-sm p-4 text-center border-l-4 border-green-500">
              <div className="text-xl sm:text-2xl font-bold mb-1" style={{ color: colors.darkGray }}>
                Sustainability Focused
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Caring for our planet</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section with Images - Mobile First */}
      <section className="py-12 sm:py-16 lg:py-20 relative" style={{ backgroundColor: colors.cream }}>
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3" style={{ color: colors.darkGray }}>
              Our Impact in Numbers
            </h2>
            <div className="w-16 h-1 mx-auto" style={{ backgroundColor: colors.yellow }}></div>
          </motion.div>

          {/* Mobile-first stat cards with images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                value: counters.years, 
                label: 'Years of Excellence', 
                suffix: '+',
                image: '/1.jpeg'
              },
              { 
                value: counters.countries, 
                label: 'Countries Served', 
                suffix: '+',
                image: '/7.jpg'
              },
              { 
                value: counters.clients.toLocaleString(), 
                label: 'Happy Clients', 
                suffix: '+',
                image: '/11.jpg'
              },
              { 
                value: counters.moves.toLocaleString(), 
                label: 'Successful Moves', 
                suffix: '+',
                image: '/6.jpg'
              }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                {/* Stat Image */}
                <div className="relative h-32 sm:h-40">
                  <img 
                    src={stat.image}
                    alt={stat.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-3xl sm:text-4xl font-bold">
                      {stat.value}{stat.suffix}
                    </div>
                  </div>
                </div>
                {/* Stat Label */}
                <div className="p-4">
                  <p className="text-sm sm:text-base font-semibold text-gray-700">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Infographic Style */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3" style={{ color: colors.darkGray }}>
              Our Journey Through Time
            </h2>
            <p className="text-base sm:text-lg text-gray-600">Building trust, one move at a time</p>
          </motion.div>

          {/* Infographic Timeline */}
          <div className="space-y-4 sm:space-y-5">
            {milestones.map((milestone, idx) => {
              // Define colors for each milestone
              const endColors = [
                '#FDDB3A', // Yellow
                '#6B7280', // Gray-blue
                '#10B981', // Green
                '#06B6D4', // Cyan
                '#3B82F6', // Blue
                '#EC4899', // Pink
              ];
              const endColor = endColors[idx % endColors.length];
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex items-center gap-4"
                >
                  {/* Year Label */}
                  <div className="flex-shrink-0 w-16 sm:w-20 text-center">
                    <div className="text-2xl sm:text-3xl font-bold" style={{ color: colors.darkGray }}>
                      {milestone.year.substring(2)}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
                      Year
                    </div>
                  </div>

                  {/* Content Card with Rounded End */}
                  <div className="flex-1 relative">
                    <div 
                      className={`bg-white transition-all relative overflow-hidden ${
                        isEven ? 'rounded-l-sm rounded-r-sm' : 'rounded-r-sm rounded-l-sm'
                      }`}
                      style={{ minHeight: '100px' }}
                    >
                      {/* Colored End with Image */}
                      <div 
                        className={`absolute top-0 bottom-0 w-24 sm:w-32 lg:w-40 ${
                          isEven ? 'left-0' : 'right-0'
                        }`}
                      >
                        {/* Background Color */}
                        <div 
                          className="absolute inset-0"
                          style={{ 
                            backgroundColor: endColor,
                            borderRadius: isEven ? '0px 0 0 0px' : '0 0px 0px 0'
                          }}
                        />
                        
                        {/* Blended Image */}
                        <div 
                          className="absolute inset-0 mix-blend-multiply opacity-50"
                          style={{ 
                            borderRadius: isEven ? '0px 0 0 0px' : '0 0px 0px 0',
                            backgroundImage: `url(${milestone.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        />
                        
                        {/* Icon */}
                        <div className="relative h-full flex items-center justify-center">
                          {idx === 0 && <Building2 className="text-white" size={28} />}
                          {idx === 1 && <MapPin className="text-white" size={28} />}
                          {idx === 2 && <GiWorld className="text-white" size={28} />}
                          {idx === 3 && <Zap className="text-white" size={28} />}
                          {idx === 4 && <Award className="text-white" size={28} />}
                          {idx === 5 && <MdOutlineStarBorderPurple500 className="text-white" size={28} />}
                        </div>
                      </div>

                      {/* Opposite End - Subtle Shadow/Shade */}
                      <div 
                        className={`absolute top-0 bottom-0 w-16 sm:w-20 ${
                          isEven ? 'right-0' : 'left-0'
                        }`}
                      >
                        <div 
                          className={`absolute inset-0 ${isEven ? 'bg-gradient-to-r from-white to-[#f5f5f5]' : 'bg-gradient-to-r from-[#f5f5f5] to-white'}`}
                          style={{ 
                            borderRadius: isEven ? '0 0px 0px 0' : '0px 0 0 0px'
                          }}
                        />
                      </div>

                      {/* Text Content */}
                      <div 
                        className={`relative z-10 p-6 sm:p-8 ${
                          isEven ? 'pl-28 sm:pl-36 lg:pl-44 pr-20 sm:pr-24' : 'pr-28 sm:pr-36 lg:pr-44 pl-20 sm:pl-24'
                        }`}
                      >
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2" 
                            style={{ color: colors.darkGray }}>
                          {milestone.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {milestone.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom decoration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"></div>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.yellow }}></div>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section with Team Image */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden" style={{ backgroundColor: colors.darkGray }}>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-50">
          <img 
            src="/main.jpg"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg text-gray-300">What drives us every day</p>
          </motion.div>

          {/* Mobile-first value cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-sm p-6 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-sm flex items-center justify-center mb-4 mx-auto sm:mx-0"
                     style={{ backgroundColor: colors.yellow }}>
                  <value.icon size={24} className="text-black" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-center sm:text-left" 
                    style={{ color: colors.darkGray }}>
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center sm:text-left">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section with Logos */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3" style={{ color: colors.darkGray }}>
              Globally Recognized Standards
            </h2>
            <p className="text-base sm:text-lg text-gray-600">Accredited by world's leading organizations</p>
          </motion.div>

          {/* Mobile-first certification cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { 
                name: 'FIDI', 
                full: 'Federation of International Removers',
                desc: 'Elite global network',
                color: '#2563eb'
              },
              { 
                name: 'IAM', 
                full: 'International Association of Movers',
                desc: 'Premier trade association',
                color: '#dc2626'
              },
              { 
                name: 'FAIM', 
                full: 'Quality Assurance Program',
                desc: 'Highest standards',
                color: '#16a34a'
              },
              { 
                name: 'ISO 9001', 
                full: 'Quality Management',
                desc: 'International excellence',
                color: '#7c3aed'
              }
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-50 rounded-sm p-6 hover:bg-white hover:shadow-xl transition-all cursor-pointer"
                onClick={() => setActiveTab(idx)}
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-sm mx-auto flex items-center justify-center text-white font-bold text-xl sm:text-2xl"
                       style={{ backgroundColor: cert.color }}>
                    {cert.name.substring(0, 2)}
                  </div>
                  {activeTab === idx && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-sm bg-green-500 flex items-center justify-center"
                    >
                      <CheckCircle size={16} className="text-white" />
                    </motion.div>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-center mb-1" style={{ color: colors.darkGray }}>
                  {cert.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 text-center mb-2">{cert.full}</p>
                <p className="text-xs text-gray-500 text-center">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Photos */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: colors.cream }}>
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3" style={{ color: colors.darkGray }}>
              The People Behind Your Move
            </h2>
            <p className="text-base sm:text-lg text-gray-600">Dedicated professionals committed to excellence</p>
          </motion.div>

          {/* Team Image Gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
            {[
              '/2.jpeg',
              '/3.jpeg',
              '/4.jpeg',
              '/5.jpeg',
              '/1.jpeg',
              '/6.jpg',
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="relative rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <img 
                  src={img}
                  alt={`Team member ${idx + 1}`}
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </motion.div>
            ))}
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { role: 'Packers', count: '150+', desc: 'Expert handlers', icon: Package },
              { role: 'Drivers', count: '80+', desc: 'Licensed professionals', icon: Truck },
              { role: 'Coordinators', count: '40+', desc: 'Dedicated support', icon: Users }
            ].map((team, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-sm p-6 shadow-lg text-center"
              >
                <team.icon size={32} className="mx-auto mb-3" style={{ color: colors.yellow }} />
                <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: colors.darkGray }}>
                  {team.count}
                </div>
                <h3 className="text-lg font-semibold mb-1" style={{ color: colors.darkGray }}>
                  {team.role}
                </h3>
                <p className="text-sm text-gray-600">{team.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden" style={{ backgroundColor: colors.darkGray }}>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/2.jpeg"
            alt="Moving truck"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Experience the
              <span className="block mt-2" style={{ color: colors.yellow }}>
                Glens Care Difference?
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
              Join thousands of satisfied customers who trust us with their most important moves
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 sm:px-10 sm:py-4 rounded-sm text-black font-bold text-base sm:text-lg shadow-2xl inline-flex items-center justify-center gap-3"
              style={{ backgroundColor: colors.yellow }}
            >
              Start Your Journey
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;