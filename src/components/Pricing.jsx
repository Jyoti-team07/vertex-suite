// src/components/Pricing.jsx
// Pricing cards with monthly/annual toggle and glassmorphism

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Zap, Star, Building } from 'lucide-react';
import { pricingPlans } from '../data/pricing';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section
      id="pricing"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #1A1A2E 0%, #0F0F1A 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass-card border border-green-500/20 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Simple,{' '}
            <span className="text-gradient-green">Transparent</span>{' '}
            Pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            No hidden fees. No lock-in contracts. Start free, scale as you grow.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
              isAnnual ? 'bg-green-500' : 'bg-white/20'
            }`}
            aria-label="Toggle annual pricing"
          >
            <motion.div
              animate={{ x: isAnnual ? 28 : 2 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="absolute top-1 w-5 h-5 bg-white rounded-full shadow"
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
            Annual
          </span>
          <AnimatePresence>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-green-500/20 text-green-400 text-xs font-semibold px-3 py-1 rounded-full border border-green-500/30"
              >
                Save 20%
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlight
                  ? 'scale-105 shadow-2xl shadow-green-500/20'
                  : 'hover:scale-102 hover:-translate-y-1'
              }`}
              style={{
                background: plan.highlight
                  ? 'linear-gradient(145deg, rgba(37,211,102,0.12), rgba(18,140,126,0.08))'
                  : 'rgba(255,255,255,0.04)',
                border: plan.highlight
                  ? '1px solid rgba(37,211,102,0.4)'
                  : '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div
                  className="absolute top-0 right-0 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl"
                  style={{ backgroundColor: plan.badgeColor }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="p-8">
                {/* Plan icon */}
                <div className="mb-4">
                  {i === 0 && <Zap size={28} className="text-green-500" />}
                  {i === 1 && <Star size={28} className="text-yellow-400" />}
                  {i === 2 && <Building size={28} className="text-purple-400" />}
                </div>

                {/* Plan name */}
                <h3 className="text-white font-bold text-xl mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  {plan.monthlyPrice ? (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-white/60 text-lg">₹</span>
                        <span className="text-white font-bold text-4xl">
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={isAnnual ? 'annual' : 'monthly'}
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="inline-block"
                            >
                              {(isAnnual ? plan.annualPrice : plan.monthlyPrice).toLocaleString('en-IN')}
                            </motion.span>
                          </AnimatePresence>
                        </span>
                        <span className="text-gray-400 text-sm">/mo</span>
                      </div>
                      {isAnnual && (
                        <p className="text-green-400 text-xs mt-1">
                          Billed ₹{(plan.annualPrice * 12).toLocaleString('en-IN')}/year
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="text-white font-bold text-4xl">Custom</div>
                  )}
                </div>

                {/* CTA button */}
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 mb-8 ${
                    plan.ctaVariant === 'solid'
                      ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50'
                      : 'border border-white/20 hover:border-green-500/50 text-white hover:bg-green-500/10'
                  }`}
                >
                  {plan.ctaText}
                </button>

                {/* Feature list */}
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check size={16} className="text-green-500 flex-shrink-0" />
                      ) : (
                        <X size={16} className="text-gray-600 flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-600 line-through'}`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-sm mt-10"
        >
          All plans include a <span className="text-green-400 font-medium">14-day free trial</span>.
          No credit card required. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
}
