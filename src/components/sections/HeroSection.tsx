import Image from 'next/image';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = '' }: HeroSectionProps) {
  return (
    <section className={`relative min-h-screen bg-black text-white flex items-center ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/90"></div>
        <Image
          src="/hero-mechanic.jpg"
          alt="Mechanic working on car engine"
          fill
          className="object-cover opacity-40"
          priority
          quality={90}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-100 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
            Profesionálny servis • 15+ rokov skúseností
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Oprava autochladičov a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
              spájkovanie hliníka
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl text-gray-200 leading-relaxed mb-8">
            Profesionálne služby zvárania hliníka a opravy autochladičov v Bratislave. 
            <span className="text-emerald-400 font-semibold"> Rýchly servis, záruka kvality, férové ceny.</span>
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-300">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              12 mesiacov záruka
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Expresné opravy
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Všetky značky áut
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Platba kartou
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="mb-8">
            <a 
              href="tel:0905 262 430"
              className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Zavolajte teraz - 0905 262 430
            </a>
          </div>

          {/* Prominent Payment Info */}
          <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-xl p-4 backdrop-blur-sm mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-emerald-500/30 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-emerald-100 font-bold text-lg">Akceptujeme platby kartou</h3>
                  <p className="text-emerald-200 text-sm">Visa, Mastercard, Maestro</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="w-10 h-6 bg-blue-600 rounded text-xs text-white flex items-center justify-center font-bold">VISA</div>
                <div className="w-10 h-6 bg-red-600 rounded text-xs text-white flex items-center justify-center font-bold">MC</div>
                <div className="w-10 h-6 bg-green-600 rounded text-xs text-white flex items-center justify-center font-bold">M</div>
              </div>
            </div>
          </div>

          {/* Express Service Info */}
          <div className="flex items-center text-red-300 text-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            Expresné opravy do 24 hodín
          </div>
        </div>
      </div>
    </section>
  );
} 