// src/components/ShipmentPooling.jsx
// Shipment pooling with benefit cards and animated stats

import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { TrendingDown, Handshake, MapPin, Package, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: TrendingDown,
    title: 'Cut Delivery Costs',
    description:
      'Consolidate shipments across couriers and reduce per-order delivery costs by up to 30% with our intelligent pooling algorithms that match orders to optimal routes.',
    color: '#25D366',
    bg: 'rgba(37,211,102,0.08)',
    border: 'rgba(37,211,102,0.2)',
  },
  {
    icon: Handshake,
    title: 'Best Partner Rates',
    description:
      'Leverage our network of 50+ courier partners to always get the most competitive rates for every delivery zone, from metro cities to tier-3 towns.',
    color: '#6C5CE7',
    bg: 'rgba(108,92,231,0.08)',
    border: 'rgba(108,92,231,0.2)',
  },
  {
    icon: MapPin,
    title: 'Real-time Tracking',
    description:
      'Keep customers informed with end-to-end shipment tracking updates delivered automatically via WhatsApp — at every stage from pickup to delivery.',
    color: '#128C7E',
    bg: 'rgba(18,140,126,0.08)',
    border: 'rgba(18,140,126,0.2)',
  },
];

const shipmentStats = [
  { value: 30, suffix: '%', label: 'Cost Reduction', color: '#25D366' },
  { value: 50, suffix: '+', label: 'Courier Partners', color: '#6C5CE7' },
  { value: 2, suffix: 'x', label: 'Faster Delivery', color: '#128C7E' },
];

function StatCounter({ stat }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2" style={{ color: stat.color }}>
        {inView ? (
          <CountUp
            end={stat.value}
            duration={2}
            suffix={stat.suffix}
            enableScrollSpy={false}
          />
        ) : (
          `0${stat.suffix}`
        )}
      </div>
      <div className="text-gray-400 font-medium">{stat.label}</div>
    </motion.div>
  );
}

export default function ShipmentPooling() {
  return (
    <section
      id="shipment"
      className="section-padding bg-white"
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
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-4">
            <Package size={14} className="text-green-600" />
            <span className="text-green-700 text-sm font-medium">Shipment Pooling</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-800 mb-4 leading-tight">
            Transforming E-commerce Logistics via{' '}
            <span className="text-gradient-green">Cost-Efficient Shipment Pooling</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Cut delivery costs for your online business with Vertex Suite's Shipment Pooling
            Suite. Secure best rates from various partners, boosting efficiency and growth.
            E-commerce logistics redefined!
          </p>
        </motion.div>

        {/* Benefit cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-2"
              style={{ backgroundColor: benefit.bg, borderColor: benefit.border }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: benefit.color + '20', border: `1px solid ${benefit.border}` }}
              >
                <benefit.icon size={22} style={{ color: benefit.color }} />
              </div>
              <h3 className="text-dark-800 font-bold text-xl mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>

              <div className="mt-5 space-y-2">
                {['Auto courier selection', 'Bulk rate discounts', 'Delivery analytics'].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle size={14} style={{ color: benefit.color }} />
                    <span className="text-gray-600 text-xs">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-8 md:p-14"
        >
          <div className="grid grid-cols-3 gap-4 md:gap-8 divide-x divide-white/10">
            {shipmentStats.map((stat, i) => (
              <StatCounter key={i} stat={stat} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-8 md:px-10 py-4 text-base w-full sm:w-auto justify-center"
            >
              Optimize Your Logistics
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
