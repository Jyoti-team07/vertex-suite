// src/components/BlogSection.jsx
// "Our Latest Articles" — horizontal sliding carousel matching vertexsuite.in

import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { blogs } from '../data/blogs';

function BlogCard({ blog }) {
  return (
    <a
      href={blog.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex-shrink-0 w-72 sm:w-80 bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-44 flex-shrink-0">
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement.style.background =
              'linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)';
          }}
        />
        {/* Date badge — top left like reference */}
        <div className="absolute top-0 left-0 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-br-xl">
          <div className="flex items-center gap-1.5">
            <Calendar size={11} className="text-green-600" />
            <span
              className="text-xs font-bold"
              style={{ color: blog.accentColor }}
            >
              {blog.date.replace(/(\w+)\s(\d+),\s(\d+)/, (_, m, d) => `${d} ${m.toUpperCase().slice(0, 3)}`)}
            </span>
          </div>
        </div>
        {/* Category tag */}
        <div className="absolute bottom-3 left-3">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: blog.accentColor + '22', color: blog.accentColor, border: `1px solid ${blog.accentColor}44` }}
          >
            {blog.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-dark-800 font-bold text-sm leading-snug mb-4 group-hover:text-green-700 transition-colors line-clamp-3 flex-1">
          {blog.title}
        </h3>
        <div
          className="flex items-center gap-1.5 text-sm font-semibold mt-auto transition-all duration-200"
          style={{ color: blog.accentColor }}
        >
          <span>Read More</span>
          <ChevronRight size={14} />
        </div>
      </div>
    </a>
  );
}

export default function BlogSection() {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const SCROLL_AMOUNT = 320;

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  const scrollLeft = () => {
    trackRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
    setTimeout(updateScrollState, 350);
  };

  const scrollRight = () => {
    trackRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
    setTimeout(updateScrollState, 350);
  };

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Header — "Our Latest Articles" exactly like reference */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-10 gap-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-800 leading-tight">
            Our <span className="text-gradient-green">Latest Articles</span>
          </h2>

          {/* Prev / Next arrow buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              aria-label="Previous articles"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
                canScrollLeft
                  ? 'border-green-500 text-green-600 hover:bg-green-500 hover:text-white'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              aria-label="Next articles"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
                canScrollRight
                  ? 'border-green-500 text-green-600 hover:bg-green-500 hover:text-white'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Horizontal scrollable card track */}
        <div className="relative">
          {/* Left fade */}
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          )}
          {/* Right fade */}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
          )}

          <motion.div
            ref={trackRef}
            onScroll={updateScrollState}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-5 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Hide scrollbar in webkit */}
            <style>{`.hide-scroll::-webkit-scrollbar { display: none; }`}</style>
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
            {/* Spacer at end */}
            <div className="flex-shrink-0 w-4" />
          </motion.div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {blogs.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to article ${i + 1}`}
              onClick={() => {
                const el = trackRef.current;
                if (!el) return;
                el.scrollTo({ left: i * SCROLL_AMOUNT, behavior: 'smooth' });
                setTimeout(updateScrollState, 350);
              }}
              className="w-2 h-2 rounded-full bg-gray-300 hover:bg-green-500 transition-colors"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
