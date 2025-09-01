import SectionBadge from '../ui/SectionBadge';
import BackgroundPattern from '../ui/BackgroundPattern';

interface DetailedServicesSectionProps {
  className?: string;
}

export default function DetailedServicesSection({ className = '' }: DetailedServicesSectionProps) {
  return (
    <section className={`py-24 bg-slate-900 relative overflow-hidden ${className}`}>
      <BackgroundPattern opacity="opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <SectionBadge>Naše špecializácie</SectionBadge>
          <h2 className="text-4xl font-bold text-white mb-6">
            Spájkovanie hliníkových trubiek a opravy chladičov
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Profesionálne služby s dlhoročnými skúsenosťami v oblasti spájkovania hliníkových trubiek a komplexných oprav chladiacich systémov
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Aluminum Pipe Soldering */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Spájkovanie hliníkových trubiek</h3>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                Špecializujeme sa na profesionálne spájkovanie hliníkových trubiek pre chladiacie systémy, klimatizácie.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Naše služby zahŕňajú:</h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Spájkovanie hliníkových trubiek pre automobilové chladiče</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Oprava poškodených trubiek v chladiacich systémoch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Spájkovanie trubiek pre klimatizačné systémy</span>
                  </li>

                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Tlakové testovanie spájkovaných spojov</span>
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                <h5 className="font-semibold text-emerald-800 mb-2">Prečo hliníkové trubky?</h5>
                <p className="text-emerald-700 text-sm">
                  Hliníkové trubky sú ľahké, odolné proti korózii a majú vynikajúcu tepelnú vodivosť. 
                  Naša technológia spájkovania zabezpečuje spoľahlivé a trvalé spoje.
                </p>
              </div>
            </div>
          </div>

          {/* Radiator Repairs */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Opravy chladičov</h3>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                Poskytujeme komplexné opravy všetkých typov chladičov - od automobilových až po priemyselné chladiče.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Typy oprav:</h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Oprava netesností v chladičoch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Výmena poškodených chladiacich jadier</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Čistenie a odvápňovanie chladičov</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Preplachovanie chladiacich systémov</span>
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                <h5 className="font-semibold text-emerald-800 mb-2">Preventívna údržba</h5>
                <p className="text-emerald-700 text-sm">
                  Odporúčame pravidelnú kontrolu chladiacich systémov. 
                  Včasná detekcia problémov môže predísť vážnym poruchám a drahým opravám.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technické špecifikácie</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Rýchly servis</h4>
              <p className="text-gray-600 text-sm">Väčšina oprav dokončená do 24 hodín</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Záruka kvality</h4>
              <p className="text-gray-600 text-sm">1 rok záruka na všetky práce</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-700 to-emerald-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Moderné technológie</h4>
              <p className="text-gray-600 text-sm">Najnovšie zváracie a spájkovacie prístroje</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 