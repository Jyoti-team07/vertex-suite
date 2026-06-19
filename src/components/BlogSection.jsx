// src/components/BlogSection.jsx
// 3-column blog card grid

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import { blogs } from '../data/blogs';

function BlogCard({ blog, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      {/* Image placeholder */}
      <div
        className="h-48 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${blog.gradientFrom} 0%, ${blog.gradientTo} 100%)` }}
      >
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)',
          }}
        />
        <div className="absolute bottom-4 left-4">
          <span
            className="text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm"
            style={{ backgroundColor: blog.accentColor + '30', color: blog.accentColor, border: `1px solid ${blog.accentColor}40` }}
          >
            {blog.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <span className="text-2xl">📱</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
          <span>{blog.date}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{blog.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-dark-800 font-bold text-lg leading-snug mb-3 group-hover:text-green-700 transition-colors line-clamp-2">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
          {blog.excerpt}
        </p>

        {/* Read more */}
        <div className="flex items-center gap-2 text-green-600 font-semibold text-sm group-hover:gap-3 transition-all duration-200">
          <span>Read More</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogSection() {
  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-4">
              <Tag size={14} className="text-green-600" />
              <span className="text-green-700 text-sm font-medium">Blog & Insights</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-800 leading-tight">
              Latest Insights &{' '}
              <span className="text-gradient-green">Articles</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg mt-3 max-w-xl">
              Stay ahead with expert insights on WhatsApp marketing, e-commerce trends,
              and business automation.
            </p>
          </div>

          <button className="flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm border border-green-200 hover:border-green-400 px-5 py-2.5 rounded-xl hover:bg-green-50 transition-all whitespace-nowrap flex-shrink-0">
            View All Articles <ArrowRight size={14} />
          </button>
        </motion.div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <BlogCard key={blog.id} blog={blog} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="btn-primary px-8 py-3.5 text-sm sm:text-base w-full sm:w-auto justify-center">
            View All Articles <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
