// src/components/Testimonials.jsx
// Auto-playing testimonial carousel with dots navigation

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir * -60 }),
  };

  return (
    <section
      id="testimonials"
      className="section-padding bg-gray-50"
    >
      <div className="max-w-5xl mx-auto">
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
            <span className="text-green-700 text-sm font-medium">Customer Stories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-800 mb-4">
            What Our Customers{' '}
            <span className="text-gradient-green">Say</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Real feedback from real businesses who've transformed their operations with Vertex Suite.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="bg-white rounded-3xl p-6 md:p-12 shadow-xl border border-gray-100"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Left: Avatar + Info */}
                  <div className="flex-shrink-0 text-center md:text-left">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto md:mx-0 mb-4 shadow-lg"
                      style={{ backgroundColor: testimonials[current].avatarBg }}
                    >
                      {testimonials[current].avatar}
                    </div>
                    <div className="text-dark-800 font-bold text-lg leading-tight">
                      {testimonials[current].name}
                    </div>
                    <div className="text-gray-500 text-sm">{testimonials[current].role}</div>
                    <div className="text-green-600 font-semibold text-sm mt-0.5">
                      {testimonials[current].company}
                    </div>
                    <div className="mt-3">
                      <StarRating count={testimonials[current].rating} />
                    </div>
                  </div>

                  {/* Right: Quote */}
                  <div className="flex-1">
                    <Quote size={40} className="text-green-500/20 mb-4" />
                    <blockquote className="text-dark-800 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed italic">
                      "{testimonials[current].quote}"
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 hover:shadow-xl transition-all border border-gray-100 hidden md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 hover:shadow-xl transition-all border border-gray-100 hidden md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots + Mobile nav */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={goPrev} className="md:hidden text-gray-400 hover:text-green-600 transition-colors">
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? 'w-8 h-2.5 bg-green-500'
                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button onClick={goNext} className="md:hidden text-gray-400 hover:text-green-600 transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* All testimonials preview row */}
        <div className="hidden md:grid grid-cols-4 gap-4 mt-10">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`p-4 rounded-2xl border text-center transition-all duration-300 ${
                i === current
                  ? 'border-green-500 bg-green-50 shadow-md'
                  : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm'
              }`}
            >
              <div
                className="w-10 h-10 rounded-xl mx-auto mb-2 flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: t.avatarBg }}
              >
                {t.avatar}
              </div>
              <div className="text-dark-800 text-xs font-semibold truncate">{t.name}</div>
              <div className="text-gray-400 text-xs truncate">{t.company}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
