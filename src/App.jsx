// src/App.jsx
// Main app component — renders all sections in order

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import SocialCommerce from './components/SocialCommerce';
import MarketplaceIntegration from './components/MarketplaceIntegration';
import SharedInbox from './components/SharedInbox';
import AdsManager from './components/AdsManager';
import ShipmentPooling from './components/ShipmentPooling';
import VendorManagement from './components/VendorManagement';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="font-inter antialiased">
      {/* Sticky navigation */}
      <Navbar />

      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <SocialCommerce />
        <MarketplaceIntegration />
        <SharedInbox />
        <AdsManager />
        <ShipmentPooling />
        <VendorManagement />
        <Stats />
        <Testimonials />
        <BlogSection />
        <CTABanner />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
