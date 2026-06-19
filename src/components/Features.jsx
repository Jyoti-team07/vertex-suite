// src/components/Features.jsx
// 3x2 feature cards grid with glassmorphism and stagger animations

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ShoppingCart,
  Phone,
  Bot,
  Zap,
  Users,
  Send,
} from 'lucide-react';
import { features } from '../data/features';

const iconMap = { ShoppingCart, Phone, Bot, Zap, Users, Send };

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function FeatureCard({ feature }) {
  const Icon = iconMap[feature.icon];

  return (
    <motion.div
      variants={cardVariants}
      className="feature-card glass-card rounded-2xl p-6 cursor-default"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/15 border border-green-500/20 mb-5 group-hover:bg-green-500/25 transition-colors">
        {Icon && <Icon size={22} className="text-green-500" />}
      </div>

      {/* Content */}
      <h3 className="text-white font-semibold text-lg mb-3 leading-snug">{feature.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>

      {/* Bottom accent */}
      <div className="mt-5 flex items-center gap-2 text-green-500 text-sm font-medium hover:gap-3 transition-all cursor-pointer group/link">
        <span>Learn more</span>
        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="features"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #0F0F1A 0%, #1A1A2E 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card border border-green-500/20 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Platform Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Everything Your Business Needs{' '}
            <span className="text-gradient-green">in One Platform</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stop juggling multiple tools. Vertex Suite unifies your entire business operation —
            from WhatsApp marketing to marketplace management.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary px-10 py-4 text-base green-glow-sm"
          >
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  );
}
