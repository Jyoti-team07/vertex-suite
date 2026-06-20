// src/components/BlogSection.jsx
// 3-column blog card grid with real images

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
      className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
    >
      {/* Blog image */}
      <div className="relative overflow-hidden h-48 flex-shrink-0">
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Fallback gradient if image fails
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement.style.background =
              `linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)`;
          }}
        />

        {/* Category badge over image */}
        <div className="absolute bottom-3 left-3">
          <span
            className="text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm"
            style={{
              backgroundColor: blog.accentColor + '25',
              color: blog.accentColor,
              border: `1px solid ${blog.accentColor}50`,
            }}
          >
            {blog.category}
          </span>
        </div>

        {/* Read time badge */}
        <div className="absolute top-3 right-3">
          <div
            className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm bg-black/40 text-white"
          >
            <Clock size={11} />
            {blog.readTime}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Date */}
        <span className="text-gray-400 text-xs mb-2.5">{blog.date}</span>

        {/* Title */}
        <h3 className="text-dark-800 font-bold text-base leading-snug mb-3 group-hover:text-green-700 transition-colors line-clamp-2 flex-1">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
          {blog.excerpt}
        </p>

        {/* Read more */}
        <div className="flex items-center gap-1.5 text-green-600 font-semibold text-sm group-hover:gap-3 transition-all duration-200 mt-auto">
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
