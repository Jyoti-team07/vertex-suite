// src/components/AdsManager.jsx
// Light section with ads analytics mockup — fully mobile responsive

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, BarChart2, DollarSign, Eye } from 'lucide-react';

const adPlatforms = [
  { label: 'Facebook Ads',       color: '#1877F2', bg: '#dbeafe' },
  { label: 'Google Ads',         color: '#4285F4', bg: '#e8f0fe' },
  { label: 'Instagram Ads',      color: '#E1306C', bg: '#fce7f3' },
  { label: 'Performance Reports',color: '#128C7E', bg: '#d1fae5' },
  { label: 'Budget Control',     color: '#6C5CE7', bg: '#ede9fe' },
];

const adMetrics = [
  { label: 'Total Spend',  value: '₹1.24L', change: '+12%', icon: DollarSign, color: '#6C5CE7' },
  { label: 'Impressions',  value: '2.8M',   change: '+34%', icon: Eye,        color: '#25D366' },
  { label: 'Conversions',  value: '4,821',  change: '+28%', icon: Target,     color: '#128C7E' },
  { label: 'ROAS',         value: '4.2x',   change: '+8%',  icon: TrendingUp, color: '#e17055' },
];

function AdChart() {
  const data = [
    { label: 'Mon', fb: 65, google: 45, ig: 55 },
    { label: 'Tue', fb: 80, google: 60, ig: 70 },
    { label: 'Wed', fb: 55, google: 75, ig: 45 },
    { label: 'Thu', fb: 90, google: 55, ig: 80 },
    { label: 'Fri', fb: 70, google: 85, ig: 65 },
    { label: 'Sat', fb: 95, google: 70, ig: 90 },
    { label: 'Sun', fb: 75, google: 80, ig: 75 },
  ];

  return (
    <div className="mt-3">
      {/* Legend */}
      <div className="flex flex-wrap items-center gap-3 mb-3">
        {[['Facebook','bg-blue-500'],['Google','bg-green-500'],['Instagram','bg-pink-500']].map(([name, cls]) => (
          <div key={name} className="flex items-center gap-1.5 text-xs text-gray-500">
            <div className={`w-2.5 h-2.5 rounded-sm ${cls}`} />
            {name}
          </div>
        ))}
      </div>
      {/* Bars */}
      <div className="flex items-end gap-1.5 h-24">
        {data.map((d, i) => (
          <div key={d.label} className="flex-1 flex items-end gap-px">
            {[
              { h: d.fb,     cls: 'bg-blue-500'  },
              { h: d.google, cls: 'bg-green-500' },
              { h: d.ig,     cls: 'bg-pink-500'  },
            ].map((bar, j) => (
              <motion.div
                key={j}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.04 * i + 0.08 * j, duration: 0.45 }}
                style={{ height: `${bar.h}%` }}
                className={`flex-1 ${bar.cls} rounded-t-sm origin-bottom`}
              />
            ))}
          </div>
        ))}
      </div>
      {/* Day labels */}
      <div className="flex gap-1.5 mt-1.5">
        {data.map((d) => (
          <div key={d.label} className="flex-1 text-center text-xs text-gray-400">{d.label}</div>
        ))}
      </div>
    </div>
  );
}

export default function AdsManager() {
  return (
    <section id="ads" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-purple-700 text-sm font-medium">Ads Manager</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-800 mb-4 leading-tight">
              Create, Schedule, &amp; Track Ads with Ease{' '}
              <span className="text-gradient-green">Across Multiple Channels</span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Maximize your marketing potential with our comprehensive platform. Create,
              schedule, and track ads across multiple channels seamlessly. Gain valuable insights
              into ad performance, all in one place. Simplify your marketing workflow with our
              integrated solution.
            </p>

            {/* Platform pills */}
            <div className="flex flex-wrap gap-2 mb-7">
              {adPlatforms.map((p) => (
                <span
                  key={p.label}
                  className="text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full"
                  style={{ color: p.color, backgroundColor: p.bg }}
                >
                  {p.label}
                </span>
              ))}
            </div>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto justify-center sm:justify-start"
            >
              <BarChart2 size={17} />
              View Analytics Demo
            </button>
          </motion.div>

          {/* Right: Analytics card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Card header */}
              <div className="px-4 sm:px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="text-dark-800 font-semibold text-sm">Campaign Overview</h4>
                  <p className="text-gray-500 text-xs mt-0.5">Last 7 days performance</p>
                </div>
                <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full flex-shrink-0">
                  Live
                </span>
              </div>

              {/* Metrics 2×2 grid */}
              <div className="grid grid-cols-2 gap-px bg-gray-100">
                {adMetrics.map((metric) => (
                  <div key={metric.label} className="bg-white p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <metric.icon size={15} style={{ color: metric.color }} />
                      <span className="text-xs font-medium text-green-600">{metric.change}</span>
                    </div>
                    <div className="text-dark-800 font-bold text-lg sm:text-xl leading-tight">{metric.value}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-dark-800 text-sm font-semibold">Ad Performance</span>
                  <span className="text-gray-400 text-xs">This week</span>
                </div>
                <AdChart />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
