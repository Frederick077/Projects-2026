/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#1F4D3A] to-[#133024] text-white scroll-mt-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#C9A227] uppercase block mb-3 font-mono">
            Traveler Guestbook 💬
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Guest Testimonials
          </h2>
        </div>

        {/* Single Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl"
        >
          {/* Floating Quote Icon */}
          <Quote className="w-12 h-12 text-[#C9A227]/30 mx-auto mb-6" />

          <p className="font-serif text-xl sm:text-2xl md:text-3xl italic font-bold max-w-3xl mx-auto leading-relaxed text-[#F5F1E8] mb-6 text-balance">
            “What an amazing experience! The guides were professional and friendly. Highly recommended!”
          </p>

          <div className="w-16 h-[2px] bg-[#C9A227] mx-auto mb-4" />

          <h4 className="font-sans font-bold text-sm text-[#C9A227] uppercase tracking-widest">
            — Happy Traveler
          </h4>
        </motion.div>

      </div>
    </section>
  );
}

