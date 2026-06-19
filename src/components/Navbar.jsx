// src/components/Navbar.jsx
// Sticky navbar with Solutions dropdown, mobile hamburger menu, scroll-aware behavior,
// real Vertex Suite logo, and working Login modal

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingBag,
  MessageCircle,
  Package,
  Truck,
  Store,
  BarChart2,
  DollarSign,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';
import LoginModal, { VertexLogoMark } from './LoginModal';

const solutions = [
  { icon: ShoppingBag,    label: 'Social Commerce',           desc: 'WhatsApp catalog & cart sales',          href: '#social-commerce' },
  { icon: MessageCircle,  label: 'Communication & Marketing', desc: 'Broadcasts, chatbots & automation',       href: '#features' },
  { icon: Package,        label: 'Orders & Inventory',        desc: 'Unified order & stock management',        href: '#marketplace' },
  { icon: Truck,          label: 'Shipment & Warehousing',    desc: 'Smart logistics & courier pooling',       href: '#shipment' },
  { icon: Store,          label: 'Multi-Vendor',              desc: 'Manage all your sellers in one place',    href: '#vendor' },
  { icon: BarChart2,      label: 'Analytics',                 desc: 'Data-driven insights & reports',         href: '#stats' },
  { icon: DollarSign,     label: 'Finance',                   desc: 'Payments, invoicing & reconciliation',   href: '#contact' },
];

const navLinks = [
  { label: 'Home',      href: '#home' },
  { label: 'Solutions', href: '#features', hasDropdown: true },
  { label: 'Blog',      href: '#blog' },
  { label: 'About',     href: '#contact' },
  { label: 'Contact',   href: '#contact' },
];

export default function Navbar() {
  const [scrolled,            setScrolled]            = useState(false);
  const [hidden,              setHidden]              = useState(false);
  const [mobileOpen,          setMobileOpen]          = useState(false);
  const [dropdownOpen,        setDropdownOpen]        = useState(false);
  const [mobileDropdownOpen,  setMobileDropdownOpen]  = useState(false);
  const [loginOpen,           setLoginOpen]           = useState(false);

  const lastScrollY  = useRef(0);
  const dropdownRef  = useRef(null);

  // Hide navbar on scroll down, reveal on scroll up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastScrollY.current && y > 80);
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close solutions dropdown on outside click
  useEffect(() => {
    const onOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    setDropdownOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ─── Navbar bar ──────────────────────────────────── */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-900/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* ── Logo ──────────────────────── */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-2.5 group flex-shrink-0"
              aria-label="Vertex Suite home"
            >
              <VertexLogoMark size={42} />
              <span className="text-white font-bold text-xl tracking-tight leading-none">
                Vertex{' '}
                <span className="text-gradient-green">Suite</span>
              </span>
            </button>

            {/* ── Desktop nav links ─────────── */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center gap-1 text-gray-300 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                    >
                      {link.label}
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Mega dropdown */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] glass-card rounded-2xl p-3 shadow-2xl shadow-black/40"
                        >
                          <div className="grid grid-cols-2 gap-1">
                            {solutions.map((sol) => (
                              <button
                                key={sol.label}
                                onClick={() => handleNavClick(sol.href)}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-200 text-left group/sol"
                              >
                                <div className="mt-0.5 p-2 rounded-lg bg-green-500/10 group-hover/sol:bg-green-500/20 transition-colors flex-shrink-0">
                                  <sol.icon size={15} className="text-green-500" />
                                </div>
                                <div>
                                  <div className="text-white font-medium text-sm">{sol.label}</div>
                                  <div className="text-gray-400 text-xs mt-0.5">{sol.desc}</div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-300 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                  >
                    {link.label}
                  </button>
                )
              )}
            </div>

            {/* ── Right CTAs ────────────────── */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setLoginOpen(true)}
                className="text-gray-300 hover:text-white font-medium px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200"
              >
                Login
              </button>
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary text-sm"
              >
                Book Demo
              </button>
            </div>

            {/* ── Mobile hamburger ──────────── */}
            <button
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ───────────────────────────────── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-dark-900/98 backdrop-blur-xl border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="w-full flex items-center justify-between text-gray-300 hover:text-white font-medium px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 mt-1 space-y-1 overflow-hidden"
                          >
                            {solutions.map((sol) => (
                              <button
                                key={sol.label}
                                onClick={() => handleNavClick(sol.href)}
                                className="w-full flex items-center gap-3 text-gray-400 hover:text-white px-4 py-2.5 rounded-xl hover:bg-white/5 transition-all text-left"
                              >
                                <sol.icon size={15} className="text-green-500 flex-shrink-0" />
                                <span className="text-sm">{sol.label}</span>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left text-gray-300 hover:text-white font-medium px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
                    >
                      {link.label}
                    </button>
                  )
                )}

                {/* Mobile Login + Book Demo */}
                <div className="pt-4 flex flex-col gap-3 border-t border-white/10 mt-2">
                  <button
                    onClick={() => { setMobileOpen(false); setLoginOpen(true); }}
                    className="w-full text-gray-300 hover:text-white font-medium px-4 py-3 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleNavClick('#contact')}
                    className="w-full btn-primary justify-center"
                  >
                    Book Demo
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ─── Login modal (portal-style, rendered outside nav) ── */}
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
