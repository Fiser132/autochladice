'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function VyrobaHlinikovychDielov() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Clean Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-emerald-500/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">AutoChladiče SK</h1>
                <p className="text-sm font-medium text-gray-300">Profesionálny servis</p>
              </div>
            </Link>
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/#services" className={`font-medium text-sm transition-all duration-300 hover:text-emerald-400 ${
                isScrolled ? 'text-gray-200' : 'text-white/90'
              }`}>Služby</Link>
              <Link href="/#features" className={`font-medium text-sm transition-all duration-300 hover:text-emerald-400 ${
                isScrolled ? 'text-gray-200' : 'text-white/90'
              }`}>O nás</Link>
              <Link href="/#contact" className={`font-medium text-sm transition-all duration-300 hover:text-emerald-400 ${
                isScrolled ? 'text-gray-200' : 'text-white/90'
              }`}>Kontakt</Link>
              <Link href="/#contact" className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl">
                Zavolajte nám
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Modern Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-800">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500/10 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-500/10 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-slate-600/10 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium mb-6 border border-emerald-500/30">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
              Výroba na mieru
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Výroba hliníkových dielov{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                na mieru
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Vlastná výroba hliníkových náhradných dielov a komponentov s presnosťou na milimeter
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-slate-600 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-emerald-400 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative">
          <article className="prose prose-lg max-w-none prose-invert">
            {/* Hero Image */}
            <div className="mb-12">
              <div className="relative h-96 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <Image
                  src="/chladic.png"
                  alt="Výroba hliníkových dielov Bratislava"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            </div>

            {/* Main Content */}
            <h2 className="text-white font-bold text-3xl mb-6">Výroba hliníkových dielov na mieru Bratislava</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Vlastná výroba hliníkových náhradných dielov a komponentov na mieru v Bratislave s 15+ rokmi skúseností. 
              Špecializujeme sa na presnosť na milimeter s profesionálnym zváraním hliníka a spájkovaním hliníka. 
              Naša firma v Bratislave vyrába hliníkové diely pre autochladiče a iné komponenty.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Špecializácia na výrobu hliníkových dielov v Bratislave</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Naša firma v Bratislave sa špecializuje na výrobu hliníkových dielov na mieru pre automobilový priemysel 
              a iné odvetvia. Používame najnovšie technológie a presné meracie prístroje pre 
              dosiahnutie najvyššej kvality. Výroba hliníkových dielov v Bratislave zahŕňa zváranie hliníka 
              a spájkovanie hliníka pre autochladiče.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Technológie výroby hliníkových dielov v Bratislave</h3>
            <div className="bg-slate-800 rounded-2xl p-8 mb-8 border border-slate-700">
              <h4 className="text-emerald-400 font-bold text-xl mb-4">CNC obrábanie hliníka v Bratislave</h4>
              <p className="text-gray-300 mb-4">
                Používame moderné CNC stroje pre presné obrábanie hliníkových dielov v Bratislave. 
                Táto technológia zabezpečuje presnosť na 0,01 mm a vysokú kvalitu povrchu. 
                CNC obrábanie hliníka sa používa aj pri výrobe autochladičov v Bratislave.
              </p>
              
              <h4 className="text-emerald-400 font-bold text-xl mb-4">Zváranie hliníka v Bratislave</h4>
              <p className="text-gray-300 mb-4">
                TIG a MIG zváranie hliníka pre spoľahlivé spoje v Bratislave. Používame argon ako ochranný plyn 
                a kvalitné zváracie materiály pre pevné spoje. Zváranie hliníka pre autochladiče 
                je špecializácia našej firmy v Bratislave.
              </p>
              
              <h4 className="text-emerald-400 font-bold text-xl mb-4">Spájkovanie hliníka v Bratislave</h4>
              <p className="text-gray-300 mb-4">
                Spájkovanie hliníka je ideálne pre tenké materiály a jemné spoje v Bratislave. Používame špeciálne pájky 
                s teplotou topenia 400-600°C pre spoľahlivé výsledky. Spájkovanie hliníka pre autochladiče 
                je kľúčovou súčasťou výroby v Bratislave.
              </p>
              
              <h4 className="text-emerald-400 font-bold text-xl mb-4">Tváranie a ohýbanie hliníka v Bratislave</h4>
              <p className="text-gray-300">
                Profesionálne tváranie hliníkových plechov a trubiek v Bratislave. Máme k dispozícii 
                moderné ohýbacie stroje pre presné uhly a rozmery. Tváranie hliníka pre autochladiče 
                a spájkovanie hliníka sú naše špecializácie v Bratislave.
              </p>
            </div>

            <h3 className="text-white font-bold text-2xl mb-4">Typy vyrábaných hliníkových dielov v Bratislave</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Naša firma vyrába širokú škálu hliníkových dielov pre rôzne aplikácie v automobilovom 
              a priemyselnom sektore v Bratislave. Výroba hliníkových dielov zahŕňa zváranie hliníka 
              a spájkovanie hliníka pre autochladiče v Bratislave.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Automobilové komponenty - hliníkové diely v Bratislave</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Špecializujeme sa na výrobu hliníkových dielov pre automobily - chladiče, nádrže, 
              kryty motorov, chladiacie systémy a iné komponenty v Bratislave. Všetky diely sú navrhnuté 
              podľa originálnych špecifikácií. Zváranie hliníka a spájkovanie hliníka pre autochladiče 
              sú naše hlavné služby v Bratislave.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Priemyselné aplikácie hliníkových dielov v Bratislave</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Vyrábame hliníkové diely pre priemyselné stroje, klimatizačné systémy, 
              chladiacie zariadenia a iné technické aplikácie v Bratislave. Každý diel je navrhnutý 
              s ohľadom na konkrétne požiadavky zákazníka. Výroba hliníkových dielov zahŕňa zváranie hliníka 
              a spájkovanie hliníka v Bratislave.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Prototypovanie a malosériová výroba hliníkových dielov v Bratislave</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Poskytujeme služby prototypovania pre testovanie nových konceptov v Bratislave. 
              Malosériová výroba hliníkových dielov je ideálna pre menšie objednávky a špeciálne požiadavky. 
              Prototypovanie zahŕňa zváranie hliníka a spájkovanie hliníka pre autochladiče v Bratislave.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Kontrola kvality hliníkových dielov v Bratislave</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Každý vyrobený hliníkový diel prechádza kontrolou kvality v Bratislave. Používame presné meracie prístroje, 
              vizuálnu kontrolu a funkčné testy pre overenie spoľahlivosti všetkých dielov. 
              Kontrola kvality zahŕňa zváranie hliníka a spájkovanie hliníka pre autochladiče v Bratislave.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Materiály a povrchové úpravy hliníkových dielov v Bratislave</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Používame len najkvalitnejšie hliníkové zliatiny (6061, 6063, 7075) a poskytujeme 
              rôzne povrchové úpravy - anodizáciu, práškové lakovanie, chromovanie a iné v Bratislave. 
              Materiály pre hliníkové diely a spájkovanie hliníka sú dôležité pre autochladiče v Bratislave.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Konzultácia a návrh hliníkových dielov v Bratislave</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Naši odborníci vám pomôžu s návrhom optimálneho riešenia v Bratislave. Poskytujeme konzultácie 
              ohľadom výberu materiálov, technológií a konštrukčných riešení. Konzultácie zahŕňajú zváranie hliníka 
              a spájkovanie hliníka pre autochladiče v Bratislave.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Rýchla výroba hliníkových dielov v Bratislave</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Rozumieme, že čas je dôležitý. Preto ponúkame rýchlu výrobu hliníkových dielov s dodacími termínmi 
              od 1-7 dní v závislosti od zložitosti dielu a množstva v Bratislave. 
              Rýchla výroba zahŕňa zváranie hliníka a spájkovanie hliníka pre autochladiče v Bratislave.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Záruka a spoľahlivosť hliníkových dielov v Bratislave</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Na všetky vyrobené hliníkové diely poskytujeme záruku v Bratislave. Naša práca je založená na dlhoročných 
              skúsenostiach a dodržiavaní najvyšších štandardov kvality. Záruka zahŕňa zváranie hliníka 
              a spájkovanie hliníka pre autochladiče v Bratislave.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Prečo si vybrať našu firmu pre výrobu hliníkových dielov v Bratislave</h3>
            <div className="bg-slate-800 rounded-2xl p-8 mb-8 border border-slate-700">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>15+ rokov skúseností s výrobou hliníkových dielov v Bratislave</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Presnosť na milimeter s modernými technológiami zvárania hliníka v Bratislave</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Špecializácia na automobilový priemysel a autochladiče v Bratislave</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Kontrola kvality všetkých vyrobených hliníkových dielov a spájkovania hliníka v Bratislave</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Rýchla výroba hliníkových dielov s flexibilnými dodacími termínmi v Bratislave</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Záruka na všetky hliníkové diely a spájkovanie hliníka v Bratislave</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Bezplatná konzultácia pre výrobu hliníkových dielov a spájkovanie hliníka v Bratislave</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Ak potrebujete hliníkové diely na mieru v Bratislave, kontaktujte nás na telefóne 0905 262 430 
              alebo na adrese Galvaniho 3972/2A v Bratislave. Poskytujeme bezplatnú konzultáciu 
              a cenovú ponuku pre výrobu hliníkových dielov, zváranie hliníka a spájkovanie hliníka pre autochladiče v Bratislave.
            </p>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 bg-slate-600 rounded-full"></div>
          <div className="absolute top-20 right-10 w-32 h-32 bg-teal-500 rounded-full"></div>
          <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-gray-700 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Potrebujete hliníkové diely na mieru?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Kontaktujte nás pre bezplatnú konzultáciu a cenovú ponuku výroby hliníkových dielov
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/#contact"
              className="group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center text-lg"
            >
              <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Kontaktujte nás
            </Link>
            <Link 
              href="/"
              className="group border-2 border-white/30 text-white hover:bg-white hover:text-black font-semibold px-10 py-4 rounded-xl transition-all duration-300 flex items-center justify-center text-lg backdrop-blur-sm"
            >
              <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Späť na hlavnú stránku
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
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
                Profesionálne služby opravy autochladičov, spájkovania hliníka a spájkovania hliníka v Bratislave.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Služby</h4>
              <ul className="space-y-3 text-gray-300">
                <li>Oprava autochladičov</li>
                <li>Spájkovanie hliníka</li>
                <li>Spájkovanie hliníka</li>
                <li>Diagnostika</li>
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
    </div>
  );
} 