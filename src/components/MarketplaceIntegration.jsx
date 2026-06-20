// src/components/MarketplaceIntegration.jsx
// Split layout: dashboard mockup + text — fully mobile responsive

import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, ShoppingBag, Clock, ArrowRight } from 'lucide-react';

const stats = [
  { icon: ShoppingBag, value: '1M+', label: 'Orders Synced',           color: '#25D366' },
  { icon: RefreshCw,   value: '3',   label: 'Marketplaces Supported',  color: '#6C5CE7' },
  { icon: Clock,       value: '60%', label: 'Time Saved Daily',         color: '#128C7E' },
];

function DashboardMockup() {
  const orders = [
    { id: '#4521', channel: 'Amazon',   product: 'Blue Dress',    amount: '₹1,299', status: 'Delivered',  statusColor: '#25D366' },
    { id: '#4522', channel: 'Flipkart', product: 'Running Shoes', amount: '₹2,499', status: 'Shipped',    statusColor: '#6C5CE7' },
    { id: '#4523', channel: 'Myntra',   product: 'Silk Saree',    amount: '₹3,899', status: 'Processing', statusColor: '#FFA500' },
    { id: '#4524', channel: 'Amazon',   product: 'Watch Band',    amount: '₹699',   status: 'Delivered',  statusColor: '#25D366' },
    { id: '#4525', channel: 'Flipkart', product: 'Laptop Bag',    amount: '₹1,799', status: 'Shipped',    statusColor: '#6C5CE7' },
  ];

  return (
    <div className="glass-card rounded-2xl overflow-hidden w-full">
      {/* Header */}
      <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div>
          <h4 className="text-white font-semibold text-sm">All Orders</h4>
          <p className="text-gray-400 text-xs mt-0.5">Live sync across channels</p>
        </div>
        <div className="flex gap-1.5">
          {[['A','#FF9900'],['F','#2874F0'],['M','#FF3F6C']].map(([letter, bg]) => (
            <div key={letter} className="w-6 h-6 rounded-md flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: bg }}>
              {letter}
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable table wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[380px]">
          <thead>
            <tr className="border-b border-white/5">
              {['Order', 'Channel', 'Product', 'Amount', 'Status'].map((h) => (
                <th key={h} className="text-gray-500 text-xs font-medium px-3 py-2 text-left whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="px-3 py-2.5 text-green-400 font-medium text-xs whitespace-nowrap">{order.id}</td>
                <td className="px-3 py-2.5 text-gray-300 text-xs whitespace-nowrap">{order.channel}</td>
                <td className="px-3 py-2.5 text-white text-xs whitespace-nowrap">{order.product}</td>
                <td className="px-3 py-2.5 text-white font-semibold text-xs whitespace-nowrap">{order.amount}</td>
                <td className="px-3 py-2.5 whitespace-nowrap">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ color: order.statusColor, backgroundColor: order.statusColor + '20' }}>
                    {order.status}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 border-t border-white/10 flex items-center justify-between">
        <span className="text-gray-500 text-xs">Showing 5 of 1,247 orders</span>
        <button className="text-green-500 text-xs font-medium hover:text-green-400 transition-colors flex items-center gap-1">
          View All <ArrowRight size={11} />
        </button>
      </div>
    </div>
  );
}

export default function MarketplaceIntegration() {
  return (
    <section
      id="marketplace"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #1A1A2E 0%, #0F0F1A 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Dashboard mockup — stacks above text on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full overflow-hidden"
          >
            <DashboardMockup />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="inline-flex items-center gap-2 glass-card border border-green-500/20 rounded-full px-4 py-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Marketplace Integration</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Centralize your Marketplace Integration for{' '}
              <span className="text-gradient-green">Smooth Operations</span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-7">
              Manage multiple marketplaces like Amazon, Flipkart, and Myntra from one
              dashboard. Streamline order placement, inventory management, and track sales
              performance effortlessly. Simplify multichannel selling and maximize your reach
              with ease.
            </p>

            {/* Stat cards — responsive 3 cols */}
            <div className="grid grid-cols-3 gap-3 mb-7">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.08 }}
                  className="glass-card rounded-xl p-3 text-center border border-white/8"
                >
                  <stat.icon size={18} className="mx-auto mb-1.5" style={{ color: stat.color }} />
                  <div className="font-bold text-base sm:text-lg leading-tight" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-gray-400 text-xs mt-1 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto justify-center sm:justify-start"
            >
              View In Detail <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
