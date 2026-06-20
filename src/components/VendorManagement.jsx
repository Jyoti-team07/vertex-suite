// src/components/VendorManagement.jsx
// Vendor management platform section — fully mobile responsive

import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Package, Truck, MessageSquare,
  ArrowRight, Users, TrendingUp, Shield,
} from 'lucide-react';

const features = [
  { icon: LayoutDashboard, title: 'Centralized Dashboard', color: '#25D366', description: 'Manage all vendor accounts, performance metrics, and payouts from one powerful control center.' },
  { icon: Package,         title: 'Manage SKUs',           color: '#6C5CE7', description: 'Track, update, and organize thousands of SKUs across multiple vendors with smart bulk operations.' },
  { icon: Truck,           title: 'Streamline Shipments',  color: '#128C7E', description: 'Automate shipment assignments and track vendor-wise fulfillment status in real time.' },
  { icon: MessageSquare,   title: 'Engage Sellers',        color: '#e17055', description: 'Communicate with all your sellers directly via WhatsApp broadcasts and automated notifications.' },
];

const accentColors = ['#25D366', '#6C5CE7', '#128C7E', '#e17055'];

function VendorDashboard() {
  const vendors = [
    { name: 'TechGadgets Co.', skus: 142,  orders: 1240, revenue: '₹8.4L',  rating: 4.8, status: 'Active', statusColor: '#25D366' },
    { name: 'StyleHub India',  skus: 89,   orders: 876,  revenue: '₹5.1L',  rating: 4.6, status: 'Active', statusColor: '#25D366' },
    { name: 'HomeDecor Plus',  skus: 210,  orders: 654,  revenue: '₹3.8L',  rating: 4.2, status: 'Review', statusColor: '#FFA500' },
    { name: 'FoodieBox',       skus: 45,   orders: 2100, revenue: '₹12.2L', rating: 4.9, status: 'Active', statusColor: '#25D366' },
  ];

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-xl"
      style={{ background: 'linear-gradient(145deg, rgba(26,26,46,0.97), rgba(15,15,26,0.97))', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <Users size={14} className="text-green-500" />
          </div>
          <div className="min-w-0">
            <div className="text-white font-semibold text-xs sm:text-sm truncate">Vendor Management</div>
            <div className="text-gray-400 text-xs">4 active vendors</div>
          </div>
        </div>
        <button className="text-xs bg-green-500/10 text-green-400 px-2.5 py-1 rounded-lg border border-green-500/20 flex-shrink-0 whitespace-nowrap">
          + Add
        </button>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 border-b border-white/10">
        {[
          { label: 'SKUs',   value: '486',   icon: Package,   color: '#25D366' },
          { label: 'Orders', value: '4,870', icon: TrendingUp, color: '#6C5CE7' },
          { label: 'Score',  value: '98%',   icon: Shield,    color: '#128C7E' },
        ].map((s) => (
          <div key={s.label} className="p-3 text-center border-r border-white/5 last:border-0">
            <s.icon size={14} className="mx-auto mb-1" style={{ color: s.color }} />
            <div className="text-white font-bold text-sm">{s.value}</div>
            <div className="text-gray-500 text-xs">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Vendor rows */}
      <div className="p-3 space-y-1.5">
        {vendors.map((vendor, i) => (
          <motion.div
            key={vendor.name}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.09 }}
            className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-white/5 transition-colors"
          >
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              style={{ backgroundColor: accentColors[i] + '25', border: `1px solid ${accentColors[i]}35` }}
            >
              {vendor.name.slice(0, 2)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-xs font-medium truncate">{vendor.name}</div>
              <div className="text-gray-500 text-xs">{vendor.skus} SKUs · {vendor.orders} orders</div>
            </div>
            <div className="text-right flex-shrink-0 hidden sm:block">
              <div className="text-white text-xs font-semibold">{vendor.revenue}</div>
              <div className="text-yellow-400 text-xs">★ {vendor.rating}</div>
            </div>
            <span
              className="text-xs font-medium px-1.5 py-0.5 rounded-full flex-shrink-0"
              style={{ color: vendor.statusColor, backgroundColor: vendor.statusColor + '20' }}
            >
              {vendor.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function VendorManagement() {
  return (
    <section
      id="vendor"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #1A1A2E 0%, #0F0F1A 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 glass-card border border-green-500/20 rounded-full px-4 py-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Vendor Management</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Integrate{' '}
              <span className="text-gradient-green">Vendor Management</span>{' '}
              Platform
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-7">
              Integrate our Vendor Management platform into your workflow to eliminate the
              challenges of managing multiple vendor dashboards. With a centralized dashboard,
              you can effortlessly engage with sellers, efficiently manage SKUs, and streamline
              shipments. Simplify your operations, save time, and enhance efficiency with our
              comprehensive solution.
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09 }}
                  className="flex items-start gap-3 p-3 rounded-xl glass-card border border-white/8"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: f.color + '15', border: `1px solid ${f.color}30` }}
                  >
                    <f.icon size={16} style={{ color: f.color }} />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-xs sm:text-sm mb-0.5">{f.title}</div>
                    <div className="text-gray-400 text-xs leading-relaxed">{f.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto justify-center sm:justify-start"
            >
              Explore Platform <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Right: Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <VendorDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
