// src/components/TrustedBy.jsx
// Infinite scrolling logo strip section

import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'Amazon', letter: 'A', bg: '#FF9900', text: '#fff' },
  { name: 'Flipkart', letter: 'F', bg: '#2874F0', text: '#fff' },
  { name: 'Myntra', letter: 'M', bg: '#FF3F6C', text: '#fff' },
  { name: 'Meta', letter: 'M', bg: '#0866FF', text: '#fff' },
  { name: 'Google', letter: 'G', bg: '#4285F4', text: '#fff' },
  { name: 'Razorpay', letter: 'R', bg: '#3395FF', text: '#fff' },
  { name: 'Shopify', letter: 'S', bg: '#96BF48', text: '#fff' },
  { name: 'WooCommerce', letter: 'W', bg: '#96588A', text: '#fff' },
  { name: 'Paytm', letter: 'P', bg: '#00BAF2', text: '#fff' },
  { name: 'Meesho', letter: 'M', bg: '#F43397', text: '#fff' },
];

// Duplicate for seamless infinite scroll
const allLogos = [...logos, ...logos];

export default function TrustedBy() {
  return (
    <section id="trusted" className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-500 text-sm font-medium uppercase tracking-widest mb-2"
        >
          Powering businesses across industries
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-dark-800"
        >
          Trusted by India's Leading Brands
        </motion.h2>
      </div>

      {/* Marquee strip */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {allLogos.map((logo, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 mx-6 px-6 py-3 rounded-2xl border border-gray-100 bg-gray-50 hover:border-gray-200 hover:shadow-sm transition-all duration-300 flex-shrink-0"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{ backgroundColor: logo.bg }}
              >
                {logo.letter}
              </div>
              <span className="text-gray-700 font-semibold text-base whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto mt-12 grid grid-cols-3 gap-2 md:gap-4 px-4"
      >
        {[
          { value: '500+', label: 'Businesses Served' },
          { value: '10M+', label: 'Messages Delivered' },
          { value: '50+', label: 'Integrations Available' },
        ].map((stat) => (
          <div key={stat.label} className="text-center px-2">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-dark-800">{stat.value}</div>
            <div className="text-gray-500 text-xs sm:text-sm mt-1 leading-tight">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
