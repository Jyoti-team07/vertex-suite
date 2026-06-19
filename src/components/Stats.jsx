// src/components/Stats.jsx
// Animated counter stats section with dark background

import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Building2, MessageCircle, Plug, ThumbsUp } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: 500,
    suffix: '+',
    label: 'Businesses Served',
    sublabel: 'Across India',
    color: '#25D366',
  },
  {
    icon: MessageCircle,
    value: 10,
    suffix: 'M+',
    label: 'Messages Sent',
    sublabel: 'Every month',
    color: '#6C5CE7',
  },
  {
    icon: Plug,
    value: 50,
    suffix: '+',
    label: 'Integrations',
    sublabel: 'Platforms supported',
    color: '#128C7E',
  },
  {
    icon: ThumbsUp,
    value: 98,
    suffix: '%',
    label: 'Customer Satisfaction',
    sublabel: 'Based on reviews',
    color: '#e17055',
  },
];

function StatCard({ stat, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="text-center p-4 sm:p-5 md:p-8 glass-card rounded-2xl border border-white/8 hover:border-white/15 transition-all duration-300 group"
    >
      {/* Icon */}
      <div
        className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 transition-transform group-hover:scale-110"
        style={{ backgroundColor: stat.color + '15', border: `1px solid ${stat.color}30` }}
      >
        <stat.icon size={20} style={{ color: stat.color }} />
      </div>

      {/* Counter */}
      <div
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 counter-value"
        style={{ color: stat.color }}
      >
        {inView ? (
          <CountUp
            end={stat.value}
            duration={2.5}
            suffix={stat.suffix}
            enableScrollSpy={false}
            useEasing={true}
          />
        ) : (
          `0${stat.suffix}`
        )}
      </div>

      <div className="text-white font-semibold text-base mb-1">{stat.label}</div>
      <div className="text-gray-500 text-xs sm:text-sm">{stat.sublabel}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section
      id="stats"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0F0F1A 0%, #1A1A2E 100%)' }}
    >
      {/* Top border gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #25D366, #128C7E, transparent)' }}
      />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 glass-card border border-green-500/20 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Platform Impact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Numbers That Speak for{' '}
            <span className="text-gradient-green">Themselves</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Real results from real businesses using Vertex Suite every single day.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
