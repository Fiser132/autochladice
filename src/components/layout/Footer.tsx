interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`bg-black text-white py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold">AutoChladiče SK</h3>
                <p className="text-emerald-400">Profesionálny servis</p>
              </div>
            </div>
            <p className="text-gray-300 max-w-lg">
              Profesionálne služby opravy autochladičov, zvárania hliníka a spájkovania hliníka v Bratislave.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Služby</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Oprava autochladičov</li>
              <li>Spájkovanie hliníka</li>
              <li>Preplachovanie chladičov</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Kontakt</h4>
            <ul className="space-y-3 text-gray-300">
              <li>0905 262 430</li>
              <li>fmosovsky@gmail.com</li>
              <li>Galvaniho 3972/2A</li>
              <li>Bratislava</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2024 AutoChladiče SK. Všetky práva vyhradené.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">spájkovanie hliníka Bratislava</span>
              <span className="text-gray-400 text-sm">spájkovanie hliníka</span>
              <span className="text-gray-400 text-sm">autochladiče Bratislava</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 