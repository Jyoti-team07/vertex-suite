// src/components/ContactForm.jsx
// Two-column contact form with validation and success state

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Send,
  AlertCircle,
  Globe,
  MessageSquare,
  AtSign,
  Camera,
} from 'lucide-react';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

const socialLinks = [
  { icon: Globe, href: '#', label: 'LinkedIn', color: '#0A66C2' },
  { icon: MessageSquare, href: '#', label: 'Facebook', color: '#1877F2' },
  { icon: AtSign, href: '#', label: 'Twitter', color: '#1DA1F2' },
  { icon: Camera, href: '#', label: 'Instagram', color: '#E1306C' },
];

function InputField({ label, id, type = 'text', value, onChange, error, placeholder, required }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl border text-dark-800 placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-green-500/30 ${
          error ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white hover:border-gray-300 focus:border-green-500'
        }`}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
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
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-green-700 text-sm font-medium">Contact Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-800 mb-3">
            Let's Start a{' '}
            <span className="text-gradient-green">Conversation</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Ready to transform your business? Our team is here to help you get started.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="rounded-3xl p-6 sm:p-8 md:p-10 h-full"
              style={{
                background: 'linear-gradient(135deg, #0F0F1A 0%, #1A1A2E 100%)',
              }}
            >
              <h3 className="text-white font-bold text-2xl mb-3">Get In Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Schedule a demo, ask about pricing, or just say hello. We're happy to help
                you find the right plan for your business.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/15 border border-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={18} className="text-green-500" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">Office Address</div>
                    <div className="text-gray-400 text-sm leading-relaxed">
                      R/O 18/10 Radhika Nagar, Supela,<br />
                      Bhilai - 490023,<br />
                      Chhattisgarh, India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/15 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-green-500" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">Phone / WhatsApp</div>
                    <a
                      href="tel:+917349064541"
                      className="text-gray-400 text-sm hover:text-green-400 transition-colors"
                    >
                      +91-7349064541
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/15 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-green-500" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">Email</div>
                    <a
                      href="mailto:info@atmikbharat.com"
                      className="text-gray-400 text-sm hover:text-green-400 transition-colors"
                    >
                      info@atmikbharat.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 my-8" />

              {/* Social links */}
              <div>
                <div className="text-white font-semibold text-sm mb-4">Follow Us</div>
                <div className="flex gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-10 h-10 rounded-xl glass-card border border-white/10 flex items-center justify-center hover:border-white/25 transition-all hover:-translate-y-0.5"
                    >
                      <s.icon size={18} style={{ color: s.color }} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Business hours */}
              <div className="mt-8 p-4 rounded-xl border border-green-500/20 bg-green-500/5">
                <div className="text-green-400 font-semibold text-sm mb-2">Business Hours</div>
                <div className="text-gray-400 text-xs space-y-1">
                  <div>Mon – Sat: 9:30 AM – 6:30 PM IST</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20 px-8 bg-green-50 rounded-3xl border border-green-200"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/30"
                  >
                    <CheckCircle size={40} className="text-white" />
                  </motion.div>
                  <h3 className="text-dark-800 font-bold text-2xl mb-3">Message Sent!</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(initialForm); }}
                    className="btn-primary px-8 py-3"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5 bg-gray-50 rounded-3xl p-5 sm:p-8 border border-gray-100"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField
                      label="Full Name"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                      placeholder="Rahul Sharma"
                      required
                    />
                    <InputField
                      label="Email Address"
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                      placeholder="rahul@company.com"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField
                      label="Phone Number"
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      error={errors.phone}
                      placeholder="9876543210"
                      required
                    />
                    <InputField
                      label="Company Name"
                      id="company"
                      value={form.company}
                      onChange={handleChange}
                      error={errors.company}
                      placeholder="Your Company Ltd."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business and what you're looking for..."
                      className={`w-full px-4 py-3 rounded-xl border text-dark-800 placeholder-gray-400 outline-none resize-none transition-all duration-200 focus:ring-2 focus:ring-green-500/30 ${
                        errors.message
                          ? 'border-red-400 bg-red-50'
                          : 'border-gray-200 bg-white hover:border-gray-300 focus:border-green-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-gray-400 text-xs text-center">
                    By submitting this form, you agree to our{' '}
                    <span className="text-green-600 cursor-pointer hover:underline">Privacy Policy</span>
                    {' '}and{' '}
                    <span className="text-green-600 cursor-pointer hover:underline">Terms of Service</span>.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
