// src/components/Hero.jsx
// Full-screen hero with animated background, mockup, and CTAs

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowDown, CheckCircle, MessageCircle, TrendingUp, Bell } from 'lucide-react';

// Animated particle canvas background
function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(37, 211, 102, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 211, 102, ${p.alpha})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
      aria-hidden="true"
    />
  );
}

// Animated dashboard mockup
function DashboardMockup() {
  const messages = [
    { text: 'New order received! 🎉', from: 'received', delay: 0 },
    { text: 'Order #4521 shipped ✅', from: 'sent', delay: 0.6 },
    { text: 'Payment confirmed ₹2,499', from: 'received', delay: 1.2 },
    { text: 'Thanks! Tracking sent 🚚', from: 'sent', delay: 1.8 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative"
    >
      {/* Floating glow */}
      <div className="absolute -inset-4 bg-green-500/10 rounded-3xl blur-3xl" />

      {/* Main dashboard card */}
      <div className="relative glass-card rounded-2xl overflow-hidden shadow-2xl animate-float">
        {/* Header bar */}
        <div className="bg-dark-800 px-4 py-3 flex items-center gap-2 border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <span className="text-gray-400 text-xs mx-auto font-medium">Vertex Suite Dashboard</span>
        </div>

        <div className="p-4 space-y-4">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Messages', value: '12.4K', icon: MessageCircle, color: 'text-green-500' },
              { label: 'Revenue', value: '₹84K', icon: TrendingUp, color: 'text-purple-400' },
              { label: 'Alerts', value: '3 New', icon: Bell, color: 'text-yellow-400' },
            ].map((stat) => (
              <div key={stat.label} className="dashboard-card rounded-xl p-3 text-center">
                <stat.icon size={16} className={`${stat.color} mx-auto mb-1`} />
                <div className="text-white font-bold text-sm">{stat.value}</div>
                <div className="text-gray-500 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Chart placeholder */}
          <div className="dashboard-card rounded-xl p-3">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-400 text-xs font-medium">Message Volume</span>
              <span className="text-green-500 text-xs">+24% ↑</span>
            </div>
            <div className="flex items-end gap-1 h-16">
              {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 72, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.8 + i * 0.05, duration: 0.4 }}
                  style={{ height: `${h}%` }}
                  className={`flex-1 rounded-sm origin-bottom ${
                    i === 11 ? 'bg-green-500' : 'bg-green-500/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Chat messages */}
          <div className="space-y-2">
            <div className="text-gray-400 text-xs font-medium mb-2">Live Conversations</div>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: msg.from === 'sent' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + msg.delay, duration: 0.4 }}
                className={`flex ${msg.from === 'sent' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`text-xs px-3 py-2 rounded-2xl max-w-[80%] ${
                    msg.from === 'sent'
                      ? 'bg-green-500 text-white rounded-br-sm'
                      : 'bg-white/10 text-gray-200 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge: online indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        className="absolute -top-3 right-2 sm:-top-4 sm:-right-4 glass-card rounded-xl px-3 py-2 flex items-center gap-2 border border-green-500/30"
      >
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-white text-xs font-medium">500+ Active Now</span>
      </motion.div>

      {/* Floating badge: uptime */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.3, type: 'spring' }}
        className="absolute -bottom-3 left-2 sm:-bottom-4 sm:-left-4 glass-card rounded-xl px-3 py-2 flex items-center gap-2 border border-purple-500/30"
      >
        <CheckCircle size={14} className="text-green-500" />
        <span className="text-white text-xs font-medium">99.9% Uptime</span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const scrollToNext = () => {
    const el = document.querySelector('#trusted');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-900"
      style={{ background: 'linear-gradient(135deg, #0F0F1A 0%, #1A1A2E 50%, #0F1A2E 100%)' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid opacity-40" />

      {/* Particle canvas */}
      <ParticleBackground />

      {/* Glow orbs */}
      <div className="orb w-96 h-96 bg-green-500/8 -left-20 top-20 animate-[float_10s_ease-in-out_infinite]" />
      <div className="orb w-80 h-80 bg-purple-500/8 right-10 bottom-20 animate-[float_8s_ease-in-out_infinite_2s]" />
      <div className="orb w-64 h-64 bg-green-600/6 left-1/2 top-1/2 animate-[float_12s_ease-in-out_infinite_4s]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-screen lg:min-h-0 lg:py-24">
          {/* Left content */}
          <div className="pt-8 lg:pt-0">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Unlock Digital Success for{' '}
              <span className="text-gradient-green">Your Business</span>{' '}
              with All-In-One SaaS
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Seamlessly integrate WhatsApp, manage multiple channels, automate chatbots,
              and drive data-driven growth — all from one powerful dashboard.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8"
            >
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-base px-8 py-4 green-glow-sm justify-center sm:justify-start"
              >
                Schedule Demo
              </button>
              <button className="btn-secondary text-base px-8 py-4 group justify-center sm:justify-start">
                <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-green-500 group-hover:bg-green-500/10 transition-all flex-shrink-0">
                  <Play size={14} className="ml-0.5" />
                </span>
                Watch Video
              </button>
            </motion.div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {['#25D366', '#6C5CE7', '#128C7E', '#e17055'].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-dark-900 flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: color }}
                  >
                    {['R', 'P', 'A', 'S'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <span className="text-gray-400 text-sm">
                  Trusted by <span className="text-white font-semibold">500+ businesses</span> across India
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Dashboard mockup — hidden on xs, shown from sm up */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-green-500 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
