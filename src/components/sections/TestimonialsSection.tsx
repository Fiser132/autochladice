import SectionBadge from '../ui/SectionBadge';
import BackgroundPattern from '../ui/BackgroundPattern';
import { TESTIMONIALS } from '../../constants/data';

interface TestimonialsSectionProps {
  className?: string;
}

export default function TestimonialsSection({ className = '' }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className={`py-24 bg-slate-900 relative overflow-hidden ${className}`}>
      <BackgroundPattern opacity="opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <SectionBadge>Referencie zákazníkov</SectionBadge>
          <h2 className="text-4xl font-bold text-white mb-6">
            Čo hovoria naši zákazníci
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Presvedčte sa o kvalite našich služieb prostredníctvom skutočných referencií od spokojných zákazníkov
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700 hover:shadow-2xl transition-all duration-300 group">
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">500+</div>
              <div className="text-gray-300">Spokojných zákazníkov</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">15+</div>
              <div className="text-gray-300">Rokov skúseností</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">1000+</div>
              <div className="text-gray-300">Úspešných oprav</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">4.9/5</div>
              <div className="text-gray-300">Priemerné hodnotenie</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 