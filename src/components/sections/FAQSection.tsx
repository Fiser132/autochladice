'use client';

import { useState } from 'react';
import SectionBadge from '../ui/SectionBadge';
import BackgroundPattern from '../ui/BackgroundPattern';
import { FAQ_ITEMS } from '../../constants/data';

interface FAQSectionProps {
  className?: string;
}

export default function FAQSection({ className = '' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`py-24 bg-slate-800 relative overflow-hidden ${className}`}>
      <BackgroundPattern opacity="opacity-5" />
      
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <SectionBadge>Často kladené otázky</SectionBadge>
          <h2 className="text-4xl font-bold text-white mb-6">
            Odpovede na najčastejšie otázky
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nenašli ste odpoveď na vašu otázku? Neváhajte nás kontaktovať
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="bg-slate-700 rounded-xl border border-slate-600 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-600 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {item.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-emerald-400 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stále máte otázky?
            </h3>
            <p className="text-emerald-100 mb-6">
              Kontaktujte nás a radi vám odpovieme na všetky vaše otázky
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0905 262 430"
                className="bg-white text-emerald-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Zavolajte nám
              </a>
              <a
                href="mailto:fmosovsky@gmail.com"
                className="border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white hover:text-emerald-600 transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Napíšte nám
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 