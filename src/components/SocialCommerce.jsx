// src/components/SocialCommerce.jsx
// Split layout with animated phone mockup showing WhatsApp-style UI

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Smartphone } from 'lucide-react';
import { socialCommerceFeatures } from '../data/features';

// Animated WhatsApp conversation
const conversation = [
  { from: 'bot', text: 'Hi! Welcome to StyleStore 👗 How can I help you today?', delay: 0 },
  { from: 'user', text: 'I want to see your new collection', delay: 1500 },
  { from: 'bot', text: 'Great choice! 🛍️ Here\'s our Summer 2025 Catalog:', delay: 2800, isCard: true },
  { from: 'user', text: 'I like the blue dress. How much?', delay: 4200 },
  { from: 'bot', text: '₹1,299 only! Want to add to cart? 🛒', delay: 5500 },
  { from: 'user', text: 'Yes please!', delay: 6800 },
  { from: 'bot', text: 'Added! ✅ Proceed to checkout? Tap below 👇', delay: 8000 },
];

function PhoneMockup() {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeouts = [];

    conversation.forEach((msg, i) => {
      // Show typing before bot messages
      if (msg.from === 'bot' && i > 0) {
        const typingTimeout = setTimeout(() => setIsTyping(true), msg.delay - 600);
        timeouts.push(typingTimeout);
      }

      const t = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages((prev) => {
          if (prev.find((m) => m.text === msg.text)) return prev;
          return [...prev, msg];
        });
      }, msg.delay);
      timeouts.push(t);
    });

    // Reset and replay
    const resetTimeout = setTimeout(() => {
      setVisibleMessages([]);
      setIsTyping(false);
    }, 12000);
    timeouts.push(resetTimeout);

    return () => timeouts.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleMessages.length === 0 ? 0 : undefined]);

  // Re-trigger on reset
  useEffect(() => {
    if (visibleMessages.length > 0) return;
    let timeouts = [];
    conversation.forEach((msg, i) => {
      if (msg.from === 'bot' && i > 0) {
        const t = setTimeout(() => setIsTyping(true), msg.delay - 600);
        timeouts.push(t);
      }
      const t = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages((prev) => {
          if (prev.find((m) => m.text === msg.text)) return prev;
          return [...prev, msg];
        });
      }, msg.delay);
      timeouts.push(t);
    });
    const reset = setTimeout(() => {
      setVisibleMessages([]);
      setIsTyping(false);
    }, 13000);
    timeouts.push(reset);
    return () => timeouts.forEach(clearTimeout);
  }, [visibleMessages.length]);

  return (
    <div className="relative mx-auto" style={{ maxWidth: 280 }}>
      {/* Glow */}
      <div className="absolute -inset-6 bg-green-500/10 rounded-3xl blur-3xl pointer-events-none" />

      {/* Phone frame */}
      <div className="phone-frame rounded-[2.5rem] overflow-hidden relative">
        {/* Notch */}
        <div className="bg-dark-800 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="text-green-500 text-xs font-bold">SS</span>
            </div>
            <div>
              <div className="text-white text-xs font-semibold">StyleStore</div>
              <div className="text-green-400 text-xs flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Online
              </div>
            </div>
          </div>
          <Smartphone size={16} className="text-gray-400" />
        </div>

        {/* Chat area */}
        <div
          className="p-3 space-y-2 overflow-hidden"
          style={{
            height: 380,
            background: '#0b141a',
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%2325d366\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
          }}
        >
          <AnimatePresence>
            {visibleMessages.map((msg, i) => (
              <motion.div
                key={`${msg.text}-${i}`}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.isCard ? (
                  <div className="bg-dark-700 rounded-xl overflow-hidden max-w-[80%] border border-green-500/20">
                    <div className="h-20 bg-gradient-to-br from-green-900/40 to-dark-800 flex items-center justify-center">
                      <span className="text-3xl">👗</span>
                    </div>
                    <div className="p-2">
                      <div className="text-white text-xs font-semibold">Summer 2025 Collection</div>
                      <div className="text-gray-400 text-xs">12 new arrivals • From ₹999</div>
                      <div className="mt-2 bg-green-500 text-white text-xs text-center py-1 rounded-lg font-medium">
                        Browse Catalog
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`text-xs px-3 py-2 rounded-2xl max-w-[80%] leading-relaxed ${
                      msg.from === 'user'
                        ? 'bg-green-700/80 text-white rounded-br-sm'
                        : 'bg-dark-700 text-gray-200 rounded-bl-sm border border-white/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                )}
              </motion.div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <motion.div
                key="typing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-start"
              >
                <div className="bg-dark-700 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 border border-white/5">
                  {[0, 0.2, 0.4].map((d, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: d }}
                      className="w-1.5 h-1.5 rounded-full bg-gray-400"
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input bar */}
        <div className="bg-dark-800 px-3 py-2.5 flex items-center gap-2 border-t border-white/5">
          <div className="flex-1 bg-dark-700 rounded-full px-4 py-1.5 text-gray-500 text-xs">
            Type a message...
          </div>
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs">➤</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SocialCommerce() {
  return (
    <section
      id="social-commerce"
      className="section-padding bg-white"
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
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-green-700 text-sm font-medium">Social Commerce</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-800 mb-5 leading-tight">
              Unlock Social Commerce{' '}
              <span className="text-gradient-green">Success</span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Transform WhatsApp into your most powerful sales channel. Enable customers to browse
              catalogs, add to cart, and complete purchases — all without leaving the chat.
            </p>

            {/* Feature list */}
            <ul className="space-y-2.5 mb-7">
              {socialCommerceFeatures.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={17} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto justify-center sm:justify-start"
            >
              View Demo
            </button>
          </motion.div>

          {/* Right: Phone mockup — centered, capped width */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="w-full" style={{ maxWidth: 280 }}>
              <PhoneMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
