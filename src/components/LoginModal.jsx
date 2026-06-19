// src/components/LoginModal.jsx
// Full-featured login modal with email/password, show-password toggle, and validation

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';

export default function LoginModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const overlayRef = useRef(null);
  const firstInputRef = useRef(null);

  // Focus first input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => firstInputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const validate = () => {
    const newErrors = {};
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!form.password) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsSubmitting(true);
    // Simulate login API
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleClose = () => {
    onClose();
    // Reset after animation completes
    setTimeout(() => {
      setForm({ email: '', password: '' });
      setErrors({});
      setSubmitted(false);
      setShowPassword(false);
    }, 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
          role="dialog"
          aria-modal="true"
          aria-label="Login"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{ background: 'linear-gradient(145deg, #1A1A2E, #0F0F1A)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {/* Top green accent line */}
              <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #25D366, #128C7E, #6C5CE7)' }} />

              <div className="p-8">
                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  aria-label="Close login"
                >
                  <X size={16} />
                </button>

                {/* Logo + Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center gap-3 mb-4">
                    {/* Actual Vertex Suite logo */}
                    <VertexLogoMark size={48} />
                    <span className="text-white font-bold text-xl tracking-tight">
                      Vertex <span className="text-gradient-green">Suite</span>
                    </span>
                  </div>

                  <AnimatePresence mode="wait">
                    {submitted ? null : (
                      <motion.div key="header" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <h2 className="text-white font-bold text-2xl mb-1">Welcome back</h2>
                        <p className="text-gray-400 text-sm">Sign in to your dashboard</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Success state */}
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-6"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', delay: 0.1 }}
                        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30"
                      >
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      <h3 className="text-white font-bold text-xl mb-2">Signed In!</h3>
                      <p className="text-gray-400 text-sm mb-6">Redirecting you to your dashboard...</p>
                      <button onClick={handleClose} className="text-green-400 text-sm hover:text-green-300 transition-colors">
                        Close
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-5"
                      initial={{ opacity: 1 }}
                    >
                      {/* Email */}
                      <div>
                        <label htmlFor="login-email" className="block text-sm font-medium text-gray-300 mb-1.5">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                          <input
                            ref={firstInputRef}
                            id="login-email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            autoComplete="email"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl text-white placeholder-gray-600 outline-none transition-all duration-200 text-sm ${
                              errors.email
                                ? 'border border-red-500/60 bg-red-500/5 focus:ring-1 focus:ring-red-500/40'
                                : 'border border-white/10 bg-white/5 hover:border-white/20 focus:border-green-500/60 focus:ring-1 focus:ring-green-500/20'
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                            <AlertCircle size={11} /> {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Password */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label htmlFor="login-password" className="block text-sm font-medium text-gray-300">
                            Password
                          </label>
                          <button
                            type="button"
                            className="text-green-400 text-xs hover:text-green-300 transition-colors"
                          >
                            Forgot password?
                          </button>
                        </div>
                        <div className="relative">
                          <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                          <input
                            id="login-password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            autoComplete="current-password"
                            className={`w-full pl-10 pr-12 py-3 rounded-xl text-white placeholder-gray-600 outline-none transition-all duration-200 text-sm ${
                              errors.password
                                ? 'border border-red-500/60 bg-red-500/5 focus:ring-1 focus:ring-red-500/40'
                                : 'border border-white/10 bg-white/5 hover:border-white/20 focus:border-green-500/60 focus:ring-1 focus:ring-green-500/20'
                            }`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                          >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                        {errors.password && (
                          <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                            <AlertCircle size={11} /> {errors.password}
                          </p>
                        )}
                      </div>

                      {/* Remember me */}
                      <div className="flex items-center gap-2">
                        <input
                          id="remember"
                          type="checkbox"
                          className="w-4 h-4 rounded accent-green-500 cursor-pointer"
                        />
                        <label htmlFor="remember" className="text-gray-400 text-sm cursor-pointer select-none">
                          Keep me signed in
                        </label>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm shadow-lg shadow-green-500/20 hover:shadow-green-500/40"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                            Signing in...
                          </>
                        ) : (
                          'Sign In'
                        )}
                      </button>

                      {/* Divider */}
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-white/10" />
                        </div>
                        <div className="relative flex justify-center text-xs">
                          <span className="px-3 text-gray-500" style={{ background: '#1A1A2E' }}>
                            New to Vertex Suite?
                          </span>
                        </div>
                      </div>

                      {/* Sign up CTA */}
                      <button
                        type="button"
                        onClick={() => {
                          handleClose();
                          setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 300);
                        }}
                        className="w-full border border-white/15 hover:border-green-500/50 text-gray-300 hover:text-white font-medium py-3 rounded-xl transition-all duration-200 text-sm hover:bg-green-500/5"
                      >
                        Book a Free Demo
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Shared logo image component — used in Navbar, Footer, and LoginModal
// Place the actual logo file at: public/vertex-logo.png
export function VertexLogoMark({ size = 36 }) {
  const [imgError, setImgError] = React.useState(false);

  if (imgError) {
    // Fallback: blue inverted-triangle SVG approximation until real logo is placed
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Vertex Suite"
      >
        <defs>
          <linearGradient id="vgfb" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7DD6F5"/>
            <stop offset="55%" stopColor="#2080C8"/>
            <stop offset="100%" stopColor="#0A3D7A"/>
          </linearGradient>
        </defs>
        {/* Outer inverted triangle */}
        <polygon points="24,2 46,44 2,44" fill="url(#vgfb)"/>
        {/* White outer frame ring */}
        <polygon points="24,2 46,44 2,44" fill="none" stroke="white" strokeWidth="2.5"/>
        {/* White inner triangle */}
        <polygon points="24,10 40,40 8,40" fill="none" stroke="white" strokeWidth="2"/>
        {/* White inner-inner triangle */}
        <polygon points="24,18 34,37 14,37" fill="none" stroke="white" strokeWidth="1.5"/>
        {/* Vertical centre bar */}
        <line x1="24" y1="10" x2="24" y2="40" stroke="white" strokeWidth="2.5"/>
        {/* Middle crossbar */}
        <line x1="14" y1="28" x2="34" y2="28" stroke="white" strokeWidth="2"/>
        {/* 3D left bevel */}
        <polygon points="2,44 24,2 21,2 0,44" fill="#062850" opacity="0.55"/>
      </svg>
    );
  }

  return (
    <img
      src={`${process.env.PUBLIC_URL}/Vertex-Suite-lOGO.png`}
      alt="Vertex Suite"
      width={size}
      height={size}
      onError={() => setImgError(true)}
      style={{ display: 'block', objectFit: 'contain', width: size, height: size }}
    />
  );
}
