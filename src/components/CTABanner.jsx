// src/components/CTABanner.jsx
// Full-width dark green CTA banner with animated background

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

// Floating animated shapes
function FloatingShapes() {
  const shapes = [
    { size: 60, top: '15%', left: '8%', delay: 0 },
    { size: 40, top: '70%', left: '15%', delay: 1.5 },
    { size: 80, top: '20%', right: '10%', delay: 0.8 },
    { size: 50, top: '65%', right: '18%', delay: 2 },
    { size: 30, top: '40%', left: '45%', delay: 1 },
  ];

  return (
    <>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut',
          }}
          className="absolute rounded-full border border-white/20 pointer-events-none"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            right: shape.right,
          }}
        />
      ))}
    </>
  );
}

export default function CTABanner() {
  return (
    <section
      id="cta"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #075E54 0%, #128C7E 40%, #25D366 100%)',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark-900/30" />

      {/* Animated grid */}
      <div className="absolute inset-0 hero-grid opacity-20" />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingShapes />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white text-sm font-medium">Join 500+ Growing Businesses</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Ready to Transform Your Business?
          </h2>

          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join hundreds of businesses already growing with Vertex Suite.
            Start your 14-day free trial today — no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 text-base w-full sm:w-auto"
            >
              Start Free Trial <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-base backdrop-blur-sm w-full sm:w-auto"
            >
              <Calendar size={18} />
              Book a Demo
            </motion.button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-10 text-white/70 text-xs sm:text-sm">
            {['No credit card required', '14-day free trial', 'Cancel anytime', '24/7 support'].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
