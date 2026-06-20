// src/components/SharedInbox.jsx
// Dark full-width section with multi-channel inbox mockup — fully mobile responsive

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Camera, Globe, AtSign, Send } from 'lucide-react';

const channels = [
  { name: 'WhatsApp',  Icon: MessageCircle, color: '#25D366', count: 24 },
  { name: 'Instagram', Icon: Camera,        color: '#E1306C', count: 12 },
  { name: 'Facebook',  Icon: Globe,         color: '#1877F2', count: 8  },
  { name: 'Twitter/X', Icon: AtSign,        color: '#555555', count: 5  },
  { name: 'Telegram',  Icon: Send,          color: '#0088cc', count: 3  },
];

const conversations = [
  { name: 'Rahul S.',  channel: 'WhatsApp',  channelColor: '#25D366', message: 'When will my order arrive?',           time: '2m',  unread: true,  avatar: 'RS', avatarBg: '#25D366' },
  { name: 'Priya M.',  channel: 'Instagram', channelColor: '#E1306C', message: 'Can I get a discount? 😍',             time: '5m',  unread: true,  avatar: 'PM', avatarBg: '#E1306C' },
  { name: 'Amit K.',   channel: 'Facebook',  channelColor: '#1877F2', message: 'Available in size L?',                 time: '12m', unread: false, avatar: 'AK', avatarBg: '#1877F2' },
  { name: 'Sunita P.', channel: 'Telegram',  channelColor: '#0088cc', message: 'Order #4521 — status?',               time: '18m', unread: false, avatar: 'SP', avatarBg: '#0088cc' },
];

// Mobile: shows conversation list only, tapping shows chat view
function InboxMockup() {
  const [activeConv, setActiveConv] = useState(0);
  const [mobileView, setMobileView] = useState('list'); // 'list' | 'chat'

  const handleSelectConv = (i) => {
    setActiveConv(i);
    setMobileView('chat');
  };

  return (
    <div
      className="glass-card rounded-2xl overflow-hidden"
      style={{ minHeight: 360 }}
    >
      {/* Top bar */}
      <div className="bg-dark-800/80 px-4 py-3 border-b border-white/10 flex items-center justify-between">
        {mobileView === 'chat' ? (
          <button
            onClick={() => setMobileView('list')}
            className="flex items-center gap-2 text-green-400 text-xs font-medium md:hidden"
          >
            ← Back
          </button>
        ) : (
          <span className="text-white font-semibold text-sm">Shared Inbox</span>
        )}
        <div className="flex items-center gap-2 ml-auto">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-400 text-xs">52 active</span>
        </div>
      </div>

      {/* Body — two-pane on md+, single pane on mobile */}
      <div className="flex" style={{ minHeight: 320 }}>

        {/* Conversation list — hidden on mobile when in chat view */}
        <div
          className={`${mobileView === 'chat' ? 'hidden md:block' : 'block'} w-full md:w-44 border-r border-white/10 overflow-y-auto flex-shrink-0`}
        >
          {conversations.map((conv, i) => (
            <button
              key={i}
              onClick={() => handleSelectConv(i)}
              className={`w-full text-left px-3 py-3 flex items-start gap-2.5 border-b border-white/5 transition-colors ${
                activeConv === i && mobileView === 'chat' ? 'bg-green-500/10' : 'hover:bg-white/5'
              }`}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ backgroundColor: conv.avatarBg }}
              >
                {conv.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-white text-xs font-medium truncate">{conv.name}</span>
                  {conv.unread && (
                    <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                  )}
                </div>
                <div className="text-xs font-medium mt-0.5 truncate" style={{ color: conv.channelColor }}>
                  {conv.channel}
                </div>
                <div className="text-gray-500 text-xs truncate mt-0.5">{conv.message}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Chat area — full width on mobile when in chat view, flex-1 on md+ */}
        <div
          className={`${mobileView === 'list' ? 'hidden md:flex' : 'flex'} flex-1 flex-col`}
        >
          {/* Chat header */}
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              style={{ backgroundColor: conversations[activeConv].avatarBg }}
            >
              {conversations[activeConv].avatar}
            </div>
            <div className="min-w-0">
              <div className="text-white text-sm font-medium truncate">{conversations[activeConv].name}</div>
              <div className="text-xs font-medium truncate" style={{ color: conversations[activeConv].channelColor }}>
                via {conversations[activeConv].channel}
              </div>
            </div>
            <span className="text-xs text-gray-500 ml-auto flex-shrink-0">{conversations[activeConv].time}</span>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 space-y-2 overflow-y-auto">
            <motion.div
              key={activeConv}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-white/10 text-gray-200 text-xs px-3 py-2 rounded-2xl rounded-bl-sm max-w-[85%] leading-relaxed">
                {conversations[activeConv].message}
              </div>
            </motion.div>
            <div className="flex justify-end">
              <div className="bg-green-600/70 text-white text-xs px-3 py-2 rounded-2xl rounded-br-sm max-w-[85%] leading-relaxed">
                Thanks! Let me check that for you. 👍
              </div>
            </div>
          </div>

          {/* Reply input */}
          <div className="px-3 py-2 border-t border-white/10 flex gap-2">
            <input
              className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-gray-400 text-xs outline-none"
              placeholder="Type a reply..."
              readOnly
            />
            <button className="bg-green-500 rounded-lg px-3 py-1.5 text-white text-xs font-medium flex-shrink-0">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SharedInbox() {
  return (
    <section
      id="inbox"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #0F0F1A 0%, #1A1A2E 100%)' }}
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
            <span className="text-green-400 text-sm font-medium">Shared Inbox</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Unify, Simplify, Amplify:{' '}
            <span className="text-gradient-green">Your All-in-One Shared Inbox Solution</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Connect Instagram, Twitter, Facebook, WhatsApp, and more in a single platform
            for Better communication. Simplify your messaging workflow &amp; stay connected with
            your audience effortlessly.
          </p>
        </motion.div>

        {/* Channel pills — wrap nicely on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10"
        >
          {channels.map((ch, i) => (
            <motion.div
              key={ch.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i }}
              className="flex items-center gap-2 glass-card border border-white/10 rounded-full px-3 md:px-4 py-1.5 md:py-2"
            >
              <ch.Icon size={14} style={{ color: ch.color }} />
              <span className="text-white text-xs md:text-sm font-medium">{ch.name}</span>
              <span
                className="text-xs font-bold px-1.5 py-0.5 rounded-full"
                style={{ color: ch.color, backgroundColor: ch.color + '20' }}
              >
                {ch.count}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Inbox mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <InboxMockup />
        </motion.div>
      </div>
    </section>
  );
}
