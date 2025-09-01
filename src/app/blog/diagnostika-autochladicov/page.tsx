'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DiagnostikaAutochladicov() {
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
              Diagnostika
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Diagnostika autochladičov{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                Bratislava
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Komplexná diagnostika problémov s chladením autochladičov s modernými zariadeniami a detailným reportom
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
                  src="/clean-chladic.png"
                  alt="Diagnostika autochladičov Bratislava"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            </div>

            {/* Main Content */}
            <h2 className="text-white font-bold text-3xl mb-6">Diagnostika autochladičov Bratislava</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Komplexná diagnostika problémov s chladením autochladičov a preventívne prehliadky systémov v Bratislave. 
              Používame najnovšie diagnostické zariadenia s detailným reportom. Naša firma v Bratislave sa špecializuje 
              na diagnostiku autochladičov a spájkovanie hliníka pre všetky typy vozidiel.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Špecializácia na diagnostiku chladiacich systémov autochladičov v Bratislave</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Diagnostika chladiacich systémov autochladičov je kľúčová pre predchádzanie vážnych porúch a optimalizáciu 
              výkonu vozidla v Bratislave. Naša firma má dlhoročné skúsenosti s identifikáciou problémov 
              v chladiacich systémoch autochladičov všetkých typov vozidiel. Diagnostika autochladičov v Bratislave 
              zahŕňa aj spájkovanie hliníka pre opravy.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Diagnostické metódy pre autochladiče v Bratislave</h3>
            <div className="bg-slate-800 rounded-2xl p-8 mb-8 border border-slate-700">
              <h4 className="text-emerald-400 font-bold text-xl mb-4">Tlakové testy autochladičov v Bratislave</h4>
              <p className="text-gray-300 mb-4">
                Tlakové testy sú základnou metódou diagnostiky chladiacich systémov autochladičov v Bratislave. Používame 
                špeciálne tlakové pumpy pre simuláciu prevádzkového tlaku a identifikáciu netesností autochladičov. 
                Tlakové testy autochladičov v Bratislave sú nevyhnutné pred spájkovaním hliníka.
              </p>
              
              <h4 className="text-emerald-400 font-bold text-xl mb-4">Termografická diagnostika autochladičov v Bratislave</h4>
              <p className="text-gray-300 mb-4">
                Termografické kamery nám umožňujú vizualizovať teplotné rozloženie v chladiacom systéme autochladičov v Bratislave. 
                Táto metóda je neinvazívna a veľmi presná pre detekciu problémov s autochladičmi. 
                Termografická diagnostika autochladičov v Bratislave pomáha pri plánovaní spájkovania hliníka.
              </p>
              
              <h4 className="text-emerald-400 font-bold text-xl mb-4">Kontrola chladiacej kvapaliny autochladičov v Bratislave</h4>
              <p className="text-gray-300 mb-4">
                Analýza chladiacej kvapaliny autochladičov zahŕňa kontrolu pH, koncentrácie inhibitorov, 
                prítomnosť olejov a iných kontaminantov, ktoré môžu poškodiť chladiaci systém autochladičov v Bratislave. 
                Kontrola chladiacej kvapaliny je dôležitá pred spájkovaním hliníka autochladičov.
              </p>
              
              <h4 className="text-emerald-400 font-bold text-xl mb-4">Funkčná diagnostika autochladičov v Bratislave</h4>
              <p className="text-gray-300">
                Testujeme funkčnosť termostatu, ventilátorov, čerpadiel a iných komponentov 
                chladiacieho systému autochladičov pomocou špeciálnych diagnostických prístrojov v Bratislave. 
                Funkčná diagnostika autochladičov je kľúčová pred opravou a spájkovaním hliníka v Bratislave.
              </p>
            </div>

            <h3 className="text-white font-bold text-2xl mb-4">Typy diagnostických služieb pre autochladiče v Bratislave</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Poskytujeme kompletný rozsah diagnostických služieb pre chladiacie systémy autochladičov 
              všetkých typov vozidiel a priemyselných zariadení v Bratislave. Diagnostika autochladičov 
              zahŕňa aj spájkovanie hliníka pre opravy v Bratislave.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Preventívna diagnostika autochladičov v Bratislave</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Pravidelná diagnostika chladiacich systémov autochladičov pomáha predchádzať vážnym poruchám v Bratislave. 
              Odporúčame preventívne prehliadky autochladičov každých 6-12 mesiacov v závislosti od typu 
              vozidla a prevádzkových podmienok. Preventívna diagnostika autochladičov v Bratislave 
              zahŕňa aj kontrolu potreby spájkovania hliníka.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Diagnostika porúch autochladičov v Bratislave</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Pri poruche chladiacieho systému autochladičov vykonávame komplexnú diagnostiku pre presnú 
              identifikáciu príčiny problému v Bratislave. Naša diagnostika autochladičov zahŕňa všetky komponenty 
              chladiacieho systému. Diagnostika porúch autochladičov v Bratislave určuje potrebu spájkovania hliníka.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Diagnostika priemyselných autochladičov v Bratislave</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Špecializujeme sa aj na diagnostiku priemyselných autochladičov a klimatizačných systémov v Bratislave. 
              Tieto systémy vyžadujú špeciálne diagnostické postupy a znalosti. Diagnostika priemyselných autochladičov 
              v Bratislave zahŕňa aj spájkovanie hliníka pre opravy.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Moderné diagnostické zariadenia pre autochladiče v Bratislave</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Používame najnovšie diagnostické zariadenia od renomovaných výrobcov pre autochladiče v Bratislave. 
              Naše vybavenie zahŕňa tlakové testy, termografické kamery, analyzátory 
              chladiacej kvapaliny a špeciálne diagnostické prístroje. Moderné zariadenia pre diagnostiku autochladičov 
              v Bratislave pomáhajú pri plánovaní spájkovania hliníka.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Detailný diagnostický report pre autochladiče v Bratislave</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Po každej diagnostike autochladičov poskytujeme detailný report s výsledkami testov, 
              identifikovanými problémami a odporúčaniami pre opravy v Bratislave. Report obsahuje 
              fotodokumentáciu a technické údaje. Diagnostický report autochladičov v Bratislave 
              zahŕňa aj odporúčania pre spájkovanie hliníka.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Rýchla diagnostika autochladičov v Bratislave</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Ponúkame expresnú diagnostiku autochladičov s časom dokončenia do 2 hodín v Bratislave. 
              Pre urgentné prípady máme k dispozícii mobilné diagnostické zariadenia pre autochladiče. 
              Rýchla diagnostika autochladičov v Bratislave umožňuje rýchle spájkovanie hliníka.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Odborné poradenstvo pre autochladiče v Bratislave</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Naši odborníci vám poskytnú odborné poradenstvo ohľadom údržby chladiacich systémov autochladičov, 
              výberu chladiacej kvapaliny a preventívnych opatrení v Bratislave. Odborné poradenstvo pre autochladiče 
              v Bratislave zahŕňa aj konzultácie ohľadom spájkovania hliníka.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Kontrola kvality diagnostiky autochladičov v Bratislave</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Všetky diagnostické postupy pre autochladiče sú vykonávané podľa najvyšších štandardov kvality v Bratislave. 
              Naši technici majú potrebné certifikácie a pravidelne sa vzdelávajú v nových technológiách. 
              Kontrola kvality diagnostiky autochladičov v Bratislave zahŕňa aj kontrolu spájkovania hliníka.
            </p>

            <h3 className="text-white font-bold text-2xl mb-4">Prečo si vybrať našu firmu pre diagnostiku autochladičov v Bratislave</h3>
            <div className="bg-slate-800 rounded-2xl p-8 mb-8 border border-slate-700">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>15+ rokov skúseností s diagnostikou chladiacich systémov autochladičov v Bratislave</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Moderné diagnostické zariadenia pre autochladiče a spájkovanie hliníka v Bratislave</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Certifikovaní technici s odborným vzdelaním pre diagnostiku autochladičov v Bratislave</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Detailný diagnostický report pre autochladiče s odporúčaniami spájkovania hliníka v Bratislave</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Rýchla diagnostika autochladičov s expresnými službami v Bratislave</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Odborné poradenstvo pre autochladiče a spájkovanie hliníka v Bratislave</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Záruka na presnosť diagnostiky autochladičov a spájkovania hliníka v Bratislave</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Ak potrebujete diagnostiku autochladiča v Bratislave, kontaktujte nás na telefóne 0905 262 430 
              alebo na adrese Galvaniho 3972/2A v Bratislave. Poskytujeme bezplatnú konzultáciu 
              a cenovú ponuku pre diagnostiku autochladičov a spájkovanie hliníka v Bratislave.
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
            Potrebujete diagnostiku autochladiča?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Kontaktujte nás pre bezplatnú konzultáciu a cenovú ponuku diagnostiky autochladičov
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