/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { faqItems } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-white text-[#2B2B2B] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Title */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest text-[#C96B2C] uppercase block mb-3 font-mono">
            Got Questions? 🎒
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F4D3A] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#2B2B2B]/75 max-w-2xl mx-auto">
            Find answers to standard inquiries about wilderness safety, acclimatization schedules, custom bookings, and the best time to explore Tanzania.
          </p>
        </div>

        {/* Collapsible Accordion Stream */}
        <div className="space-y-4">
          {faqItems.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#F5F1E8]/60 border border-[#1F4D3A]/5 hover:border-[#1F4D3A]/15 rounded-xl transition-all duration-300"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C9A227]/40 rounded-xl"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start gap-3.5">
                    <HelpCircle className="w-5 h-5 text-[#C96B2C] shrink-0 mt-0.5" />
                    <span className="font-sans font-bold text-sm sm:text-base text-[#1F4D3A]">
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className="bg-[#1F4D3A]/5 p-1 rounded-full text-[#1F4D3A] shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pl-[44px] text-xs sm:text-sm text-[#2B2B2B]/80 leading-relaxed border-t border-[#1F4D3A]/5 pt-3">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
