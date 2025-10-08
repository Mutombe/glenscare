import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Star,
  Package,
  Clock,
  Shield,
  Zap,
  Award,
  Users,
  TrendingUp,
  Target,
  Heart,
} from "lucide-react";
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

const colors = {
  darkGray: "#41444B",
  mediumGray: "#52575D",
  yellow: "#FDDB3A",
  cream: "#F6F4E6",
  black: "#000000",
  white: "#FFFFFF",
};

// Layout 1: Magazine Style with Image Grid
const ServicePageLayout1 = ({
  title,
  icon: Icon,
  description,
  features,
  gradient,
  images,
}) => (
  <div className="pt-20 bg-white gellix-font">
    {/* Hero Section with Side Image */}
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Content - 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Icon Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className={`inline-block p-4 rounded-sm bg-gradient-to-br ${gradient} shadow-xl`}
            >
              <Icon size={48} className="text-white" />
            </motion.div>

            {/* Title */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-yellow-100 mb-4"
              >
                <Star
                  size={16}
                  className="text-yellow-600"
                  fill="currentColor"
                />
                <span className="text-sm font-bold text-yellow-800">
                  Premium Service
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ color: colors.darkGray }}
              >
                {title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                {description}
              </motion.p>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { icon: Clock, label: "Fast", value: "24/7" },
                { icon: SiFsecure, label: "Secure", value: "100%" },
                { icon: Award, label: "Certified", value: "FAIM" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-sm p-4 text-center"
                >
                  <stat.icon
                    className="mx-auto mb-2"
                    size={24}
                    style={{ color: colors.yellow }}
                  />
                  <div
                    className="text-2xl font-bold"
                    style={{ color: colors.darkGray }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(253, 219, 58, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-sm text-black font-bold text-lg shadow-sm flex items-center gap-2"
                  style={{ backgroundColor: colors.yellow }}
                >
                  Request Quote
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Grid - 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Large Top Image */}
            <div className="relative rounded-sm overflow-hidden shadow-2xl group">
              <img
                src={images[0]}
                alt="Service"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <div
                  className={`px-4 py-2 rounded-sm bg-gradient-to-r ${gradient} text-white font-bold text-sm`}
                >
                  Professional Service
                </div>
              </div>
            </div>

            {/* Two Small Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-sm overflow-hidden shadow-lg group h-40">
                <img
                  src={images[1]}
                  alt="Service detail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative rounded-sm overflow-hidden shadow-lg group h-40">
                <img
                  src={images[2]}
                  alt="Service detail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Features Section with Cards */}
    <section className="py-20" style={{ backgroundColor: colors.cream }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: colors.darkGray }}
          >
            What Makes Us Different
          </h2>
          <div
            className="w-24 h-1 mx-auto"
            style={{ backgroundColor: colors.yellow }}
          ></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-sm p-8 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group"
            >
              {/* Gradient Accent */}
              <div
                className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${gradient}`}
              ></div>

              {/* Number Badge */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-sm bg-gray-100 flex items-center justify-center font-bold text-gray-400">
                {String(idx + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-sm bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <CheckCircle size={28} className="text-white" />
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed text-lg">{feature}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Ready to experience excellence?
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className={`px-12 py-4 rounded-sm text-white font-bold text-lg shadow-xl bg-gradient-to-r ${gradient}`}
            >
              Get Started Today
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

// Layout 2: Bold Hero with Feature Cards
const ServicePageLayout2 = ({
  title,
  icon: Icon,
  description,
  features,
  gradient,
  images,
}) => (
  <div className="pt-20 gellix-font">
    {/* Full-Width Hero with Background */}
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={images[0]}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-20 w-32 h-32 rounded-sm bg-yellow-400/20 blur-3xl"
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className={`inline-block p-5 rounded-sm bg-gradient-to-br ${gradient} shadow-2xl mb-8`}
            >
              <Icon size={56} className="text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl text-gray-200 mb-10 leading-relaxed"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-10 py-4 rounded-sm text-black font-bold text-lg shadow-2xl"
                  style={{ backgroundColor: colors.yellow }}
                >
                  Get Quote Now
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-10 py-4 rounded-sm border-2 border-white text-white font-bold text-lg backdrop-blur-sm bg-white/10"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-8 h-12 rounded-sm border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-sm"></div>
        </div>
      </motion.div>
    </section>

    {/* Features with Images */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl font-bold mb-6"
            style={{ color: colors.darkGray }}
          >
            Premium Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience world-class service with every detail perfected
          </p>
        </motion.div>

        {/* Alternating Feature Cards with Images */}
        <div className="space-y-20">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`flex flex-col ${
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative rounded-sm overflow-hidden shadow-2xl group">
                  <img
                    src={images[(idx % 3) + 1] || images[0]}
                    alt={`Feature ${idx + 1}`}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  {/* Number Badge */}
                  <div
                    className={`absolute top-6 left-6 w-16 h-16 rounded-sm bg-gradient-to-br ${gradient} flex items-center justify-center shadow-xl`}
                  >
                    <span className="text-2xl font-bold text-white">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <div
                  className={`inline-block px-4 py-2 rounded-sm bg-gradient-to-r ${gradient} text-white text-sm font-bold mb-4`}
                >
                  Key Feature
                </div>
                <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                  {feature}
                </p>
                <div className="flex items-center gap-3 text-yellow-600">
                  <CheckCircle size={24} />
                  <span className="font-semibold">Included in service</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className={`px-14 py-5 rounded-sm text-white font-bold text-xl shadow-2xl bg-gradient-to-r ${gradient} inline-flex items-center gap-3`}
            >
              Start Your Journey
              <ArrowRight size={24} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

// Layout 3: Modern Grid with Bento Box Style
const ServicePageLayout3 = ({
  title,
  icon: Icon,
  description,
  features,
  gradient,
  images,
}) => (
  <div className="pt-20 gellix-font" style={{ backgroundColor: colors.cream }}>
    {/* Centered Hero */}
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
            className="inline-block mb-8"
          >
            <div
              className={`w-28 h-28 rounded-sm bg-gradient-to-br ${gradient} flex items-center justify-center shadow-2xl`}
            >
              <Icon size={64} className="text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl font-bold mb-6"
            style={{ color: colors.darkGray }}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-4 gap-4 mb-12"
        >
          <div className="col-span-2 row-span-2 relative rounded-sm overflow-hidden shadow-xl group">
            <img
              src={images[0]}
              alt="Main"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div
                className={`px-5 py-2 rounded-sm bg-gradient-to-r ${gradient} text-white font-bold`}
              >
                Professional Service
              </div>
            </div>
          </div>

          <div className="col-span-2 relative rounded-sm overflow-hidden shadow-xl group h-48">
            <img
              src={images[1]}
              alt="Detail 1"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="relative rounded-sm overflow-hidden shadow-xl group h-48">
            <img
              src={images[2]}
              alt="Detail 2"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="relative rounded-sm overflow-hidden shadow-xl group h-48">
            <img
              src={images[3] || images[0]}
              alt="Detail 3"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(253, 219, 58, 0.3)",
              }}
              className="px-12 py-5 rounded-sm text-black font-bold text-xl shadow-2xl inline-flex items-center gap-3"
              style={{ backgroundColor: colors.yellow }}
            >
              Request Quote
              <ArrowRight size={24} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Bento Grid Features */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl font-bold mb-6"
            style={{ color: colors.darkGray }}
          >
            Everything You Need
          </h2>
          <div
            className="w-24 h-1 mx-auto"
            style={{ backgroundColor: colors.yellow }}
          ></div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative rounded-sm overflow-hidden shadow-xl group bg-gray-900"
          >
            <img
              src={images[1]}
              alt="Feature"
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="relative z-10 p-10 h-full flex flex-col justify-between">
              <div>
                <div
                  className={`inline-block p-4 rounded-sm bg-gradient-to-br ${gradient} mb-6`}
                >
                  <Target size={40} className="text-white" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-4">
                  {features[0]}
                </h3>
              </div>
              <div className="flex items-center gap-3 text-yellow-400">
                <span className="text-lg font-semibold">Learn more</span>
                <ArrowRight size={20} />
              </div>
            </div>
          </motion.div>

          {/* Small Cards */}
          {features.slice(1, 5).map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-sm p-8 shadow-lg hover:shadow-2xl transition-all bg-white"
            >
              <div
                className={`w-14 h-14 rounded-sm bg-gradient-to-br ${gradient} flex items-center justify-center mb-6`}
              >
                <CheckCircle size={28} className="text-white" />
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{feature}</p>
            </motion.div>
          ))}

          {/* Medium Card with Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1 relative rounded-sm overflow-hidden shadow-xl group h-64"
          >
            <img
              src={images[2]}
              alt="Feature"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-lg font-semibold leading-relaxed">
                {features[5]}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 p-12 rounded-sm relative overflow-hidden"
          style={{ backgroundColor: colors.darkGray }}
        >
          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the difference of working with industry leaders
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className={`px-12 py-5 rounded-sm text-black font-bold text-xl shadow-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 inline-flex items-center gap-3`}
              >
                Contact Us Today
                <ArrowRight size={24} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

// Main Service Page Component with Layout Router
const ServicePage = ({
  title,
  icon,
  description,
  features,
  layoutType = 1,
}) => {
  const serviceImages = {
    archive: [
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    ],
    global: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600&q=80",
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80",
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80",
    ],
    regional: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
    ],
    default: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    ],
  };

  let images = serviceImages.default;
  if (title.toLowerCase().includes("archiv")) images = serviceImages.archive;
  else if (title.toLowerCase().includes("global"))
    images = serviceImages.global;
  else if (title.toLowerCase().includes("regional"))
    images = serviceImages.regional;

  const gradients = {
    1: "from-blue-500 to-blue-600",
    2: "from-purple-500 to-purple-600",
    3: "from-green-500 to-green-600",
    4: "from-orange-500 to-orange-600",
    5: "from-pink-500 to-pink-600",
    6: "from-indigo-500 to-indigo-600",
  };

  const gradient = gradients[layoutType] || gradients[1];

  const layouts = {
    1: ServicePageLayout1,
    2: ServicePageLayout2,
    3: ServicePageLayout3,
  };

  const Layout = layouts[layoutType] || ServicePageLayout1;

  return (
    <Layout
      title={title}
      icon={icon}
      description={description}
      features={features}
      gradient={gradient}
      images={images}
    />
  );
};

export default ServicePage;
