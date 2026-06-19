// src/components/Footer.jsx
// Dark footer with 4 columns, social icons, and bottom bar

import React from 'react';
import {
  Globe,
  MessageSquare,
  AtSign,
  Camera,
  CirclePlay,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import { VertexLogoMark } from './LoginModal';

const columns = [
  {
    title: 'Solutions',
    links: [
      { label: 'Social Commerce', href: '#social-commerce' },
      { label: 'Communication & Marketing', href: '#features' },
      { label: 'Orders & Inventory', href: '#marketplace' },
      { label: 'Shipment & Warehousing', href: '#shipment' },
      { label: 'Multi-Vendor', href: '#vendor' },
      { label: 'Analytics', href: '#stats' },
      { label: 'Finance', href: '#contact' },
    ],
  },
  {
    title: 'Useful Links',
    links: [
      { label: 'Integrations', href: '#features' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contact', href: '#contact' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Refund Policy', href: '#' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'About Us', href: '#contact' },
      { label: 'Join Our Team', href: '#' },
      { label: 'Partners', href: '#' },
      { label: 'Events', href: '#' },
      { label: 'In The News', href: '#' },
      { label: 'Investments', href: '#' },
    ],
  },
];

const socialLinks = [
  { icon: Globe, href: '#', label: 'LinkedIn', color: '#0A66C2' },
  { icon: MessageSquare, href: '#', label: 'Facebook', color: '#1877F2' },
  { icon: AtSign, href: '#', label: 'Twitter', color: '#1DA1F2' },
  { icon: Camera, href: '#', label: 'Instagram', color: '#E1306C' },
  { icon: CirclePlay, href: '#', label: 'YouTube', color: '#FF0000' },
];

function FooterLink({ href, children }) {
  const handleClick = (e) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="flex items-center gap-1.5 text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm group"
    >
      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0 transition-all duration-200" />
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#0A0A14' }}
    >
      {/* Top gradient border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #25D366, #6C5CE7, transparent)' }}
      />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-green-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8 relative z-10">
        {/* Main grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Column 1: Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <VertexLogoMark size={38} />
              <span className="text-white font-bold text-xl tracking-tight">
                Vertex <span className="text-gradient-green">Suite</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your Partner in Business Growth and Success. India's most powerful
              WhatsApp Business API & social commerce platform.
            </p>

            {/* Contact quick info */}
            <div className="space-y-3 mb-6">
              <a href="tel:+917349064541" className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors text-sm">
                <Phone size={14} className="text-green-500 flex-shrink-0" />
                +91-7349064541
              </a>
              <a href="mailto:info@atmikbharat.com" className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors text-sm">
                <Mail size={14} className="text-green-500 flex-shrink-0" />
                info@atmikbharat.com
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>Bhilai - 490023, Chhattisgarh</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl glass-card border border-white/10 flex items-center justify-center hover:border-white/25 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <s.icon size={16} style={{ color: s.color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Columns 2-4: Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-5 relative">
                {col.title}
                <div
                  className="absolute -bottom-2 left-0 w-6 h-0.5 rounded-full"
                  style={{ background: '#25D366' }}
                />
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div
          className="rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ background: 'rgba(37,211,102,0.06)', border: '1px solid rgba(37,211,102,0.15)' }}
        >
          <div>
            <h4 className="text-white font-semibold mb-1">Subscribe to our newsletter</h4>
            <p className="text-gray-400 text-sm">Get the latest updates, tips, and news delivered to your inbox.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 sm:w-64 px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-500 text-sm outline-none focus:border-green-500/50 transition-colors"
            />
            <button className="btn-primary text-sm px-5 py-2.5 whitespace-nowrap justify-center">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-gray-500 text-xs text-center md:text-left">
            © 2024 Atmik Bharat Industries Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Cookie Policy'].map((link, i) => (
              <React.Fragment key={link}>
                <span
                  role="button"
                  tabIndex={0}
                  onClick={(e) => e.preventDefault()}
                  className="text-gray-500 hover:text-gray-300 text-xs transition-colors cursor-pointer"
                >
                  {link}
                </span>
                {i < 3 && <span className="text-gray-700 hidden sm:inline">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Made in India badge */}
        <div className="text-center mt-6">
          <span className="text-gray-600 text-xs">
            Made with ❤️ in Bhilai, Chhattisgarh 🇮🇳
          </span>
        </div>
      </div>
    </footer>
  );
}
