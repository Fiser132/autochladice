'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Definícia typu pre článok
interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
}

// Databáza článkov
const articles: Record<string, Article> = {
  'oprava-autochladicov-bratislava': {
    slug: 'oprava-autochladicov-bratislava',
    title: 'Oprava autochladičov Bratislava - Profesionálny servis',
    excerpt: 'Kompletný servis chladiacich systémov, oprava poškodených chladičov, výmena chladiacej kvapaliny a tlakové testovanie v Bratislave.',
    content: `
      <h2 className="text-white font-bold text-3xl mb-6">Oprava autochladičov Bratislava</h2>
      
      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-l-4 border-emerald-500 p-6 rounded-r-xl mb-8">
        <p className="text-gray-200 text-lg leading-relaxed font-medium">
          Profesionálna oprava autochladičov v Bratislave s <span className="text-emerald-400 font-bold">15+ rokmi skúseností</span>. 
          Poskytujeme kompletný servis chladiacich systémov, opravu poškodených autochladičov 
          a výmenu komponentov s použitím originálnych dielov. Naša firma v Bratislave sa špecializuje 
          na opravu autochladičov a spájkovanie hliníka pre všetky typy vozidiel.
        </p>
      </div>

      <h3 className="text-white font-bold text-2xl mb-6 flex items-center">
        <span className="w-8 h-1 bg-emerald-500 rounded-full mr-4"></span>
        Kompletný servis chladiacich systémov v Bratislave
      </h3>
      <p className="text-gray-300 text-lg leading-relaxed mb-8 pl-12">
        Naša firma v Bratislave sa špecializuje na opravu všetkých typov autochladičov - od osobných automobilov 
        až po nákladné vozidlá. Používame najnovšie technológie a diagnostické zariadenia pre 
        presnú identifikáciu problémov s chladením. Oprava autochladičov v Bratislave zahŕňa 
        aj spájkovanie hliníka a komplexné riešenia chladiacich systémov.
      </p>

      <h3 className="text-white font-bold text-2xl mb-6 flex items-center">
        <span className="w-8 h-1 bg-emerald-500 rounded-full mr-4"></span>
        Typy oprav autochladičov v Bratislave
      </h3>
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 mb-8 border border-slate-700 shadow-xl">
        <h4 className="text-emerald-400 font-bold text-xl mb-4">Oprava netesností autochladičov v Bratislave</h4>
        <p className="text-gray-300 mb-4">
          Špecializujeme sa na opravu netesností v chladiacich systémoch autochladičov v Bratislave. Používame moderné 
          technológie ako argonové zváranie a špeciálne pájky pre spoľahlivé opravy. Spájkovanie hliníka 
          je kľúčovou súčasťou opravy autochladičov v Bratislave.
        </p>
        
        <h4 className="text-emerald-400 font-bold text-xl mb-4">Výmena chladiacich jadier v Bratislave</h4>
        <p className="text-gray-300 mb-4">
          Poskytujeme výmenu poškodených chladiacich jadier autochladičov s použitím kvalitných náhradných dielov. 
          Všetky diely sú testované a majú záruku. Naša oprava autochladičov v Bratislave zahŕňa 
          aj spájkovanie hliníka pre spoľahlivé spoje.
        </p>
        
        <h4 className="text-emerald-400 font-bold text-xl mb-4">Čistenie a odvápňovanie autochladičov v Bratislave</h4>
        <p className="text-gray-300 mb-4">
          Profesionálne čistenie autochladičov od usadenín a vápenatých nánosov v Bratislave. Táto služba 
          predĺži životnosť autochladiča a zlepší jeho účinnosť. Spájkovanie hliníka sa používa 
          aj pri oprave autochladičov po čistení.
        </p>
        
        <h4 className="text-emerald-400 font-bold text-xl mb-4">Oprava chladiacich ventilátorov v Bratislave</h4>
        <p className="text-gray-300">
          Oprava a výmena chladiacich ventilátorov autochladičov, elektrických motorov a riadiacich jednotiek v Bratislave. 
          Zabezpečujeme správne fungovanie celého chladiacieho systému autochladičov. Naša firma v Bratislave 
          poskytuje kompletnú opravu autochladičov vrátane spájkovania hliníka.
        </p>
      </div>

      <h3 className="text-white font-bold text-2xl mb-4">Diagnostika chladiacich systémov v Bratislave</h3>
      <p className="text-gray-300 text-lg leading-relaxed mb-8">
        Pred každou opravou autochladičov vykonávame komplexnú diagnostiku chladiacieho systému v Bratislave. 
        Používame tlakové testy, termografické kamery a moderné diagnostické zariadenia 
        pre presnú identifikáciu problémov s autochladičmi. Diagnostika autochladičov v Bratislave 
        je prvým krokom k úspešnej oprave.
      </p>

      <h3 className="text-white font-bold text-2xl mb-4">Preventívna údržba autochladičov v Bratislave</h3>
      <p className="text-gray-300 text-lg leading-relaxed mb-8">
        Odporúčame pravidelnú kontrolu chladiacich systémov autochladičov každých 6-12 mesiacov v Bratislave. 
        Preventívna údržba autochladičov zahŕňa kontrolu hladiny chladiacej kvapaliny, kontrolu netesností, 
        čistenie autochladiča a kontrolu funkčnosti ventilátorov. Spájkovanie hliníka sa používa 
        aj pri preventívnej údržbe autochladičov v Bratislave.
      </p>

      <h3 className="text-white font-bold text-2xl mb-4">Záruka a kvalita opravy autochladičov v Bratislave</h3>
      <p className="text-gray-300 text-lg leading-relaxed mb-8">
        Na všetky opravy autochladičov poskytujeme 2-ročnú záruku v Bratislave. Používame len kvalitné materiály 
        a originálne náhradné diely pre autochladiče. Naša práca je založená na dlhoročných skúsenostiach 
        s opravou autochladičov a spájkovaním hliníka v Bratislave.
      </p>

      <h3 className="text-white font-bold text-2xl mb-4">Rýchly servis a expresné opravy v Bratislave</h3>
      <p className="text-gray-300 text-lg leading-relaxed mb-8">
        Rozumieme, že porucha autochladiča môže znamenať nefunkčné vozidlo. Preto ponúkame 
        expresné opravy autochladičov s časom dokončenia do 24 hodín v Bratislave. Pre urgentné prípady máme 
        k dispozícii náhradné autochladiče. Spájkovanie hliníka pre autochladiče je dostupné 
        aj v expresnom režime v Bratislave.
      </p>

      <h3 className="text-white font-bold text-2xl mb-4">Cenová dostupnosť opravy autochladičov v Bratislave</h3>
      <p className="text-gray-300 text-lg leading-relaxed mb-8">
        Naše ceny za opravu autochladičov sú transparentné a konkurencieschopné v Bratislave. Poskytujeme bezplatnú konzultáciu 
        a cenovú ponuku pred začatím prác na autochladičoch. Cenová ponuka zahŕňa všetky náklady bez skrytých poplatkov 
        pre opravu autochladičov a spájkovanie hliníka v Bratislave.
      </p>

      <h3 className="text-white font-bold text-2xl mb-4">Oblasti pôsobenia - oprava autochladičov v Bratislave</h3>
      <p className="text-gray-300 text-lg leading-relaxed mb-8">
        Poskytujeme služby opravy autochladičov v celej Bratislave a okolí. Naša servisná 
        dielňa sa nachádza v centrálnej časti Bratislavy s dobrým prístupom a parkovaním. 
        Oprava autochladičov v Bratislave zahŕňa aj spájkovanie hliníka pre všetky typy vozidiel.
      </p>

      <h3 className="text-white font-bold text-2xl mb-6 flex items-center">
        <span className="w-8 h-1 bg-emerald-500 rounded-full mr-4"></span>
        Prečo si vybrať našu firmu pre opravu autochladičov v Bratislave
      </h3>
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 mb-8 border border-slate-700 shadow-xl">
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>15+ rokov skúseností s opravou autochladičov v Bratislave</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Certifikovaní technici s odborným vzdelaním pre autochladiče v Bratislave</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Moderné diagnostické zariadenia pre autochladiče a spájkovanie hliníka v Bratislave</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Záruka 2 roky na všetky opravy autochladičov a spájkovanie hliníka v Bratislave</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Transparentné ceny za opravu autochladičov bez skrytých poplatkov v Bratislave</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Rýchly servis autochladičov s expresnými opravami v Bratislave</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Bezplatná konzultácia pre opravu autochladičov a spájkovanie hliníka v Bratislave</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-l-4 border-emerald-500 p-6 rounded-r-xl mb-8">
        <p className="text-gray-200 text-lg leading-relaxed font-medium">
          Ak potrebujete opravu autochladiča v Bratislave, kontaktujte nás na telefóne 
          <span className="text-emerald-400 font-bold">0905 262 430</span> 
          alebo na adrese <span className="text-emerald-400 font-semibold">Galvaniho 3972/2A v Bratislave</span>. 
          Poskytujeme bezplatnú konzultáciu a cenovú ponuku pre opravu autochladičov a spájkovanie hliníka v Bratislave.
        </p>
      </div>
    `,
    category: 'Oprava autochladičov',
    readTime: '5 min',
    date: '2024-01-15',
    image: '/hero-mechanic.jpg'
  },
  'spajkovanie-hlinika-bratislava': {
    slug: 'spajkovanie-hlinika-bratislava',
    title: 'Spájkovanie hliníka Bratislava - Moderné technológie',
    excerpt: 'Profesionálne spájkovanie hliníka v Bratislave, oprava motoreových blokov a iných hliníkových častí s certifikovanými postupmi a kvalitnými pájkami.',
    content: `
      <h2 className="text-white font-bold text-3xl mb-6">Spájkovanie hliníka Bratislava</h2>
      
      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-l-4 border-emerald-500 p-6 rounded-r-xl mb-8">
        <p className="text-gray-200 text-lg leading-relaxed font-medium">
          Profesionálne spájkovanie hliníka v Bratislave s <span className="text-emerald-400 font-bold">15+ rokmi skúseností</span>. 
          Špecializujeme sa na opravu motoreových blokov a iných hliníkových častí 
          s certifikovanými postupmi a kvalitnými pájkami. Naša firma v Bratislave je 
          <span className="text-emerald-400 font-semibold"> lídrom v spájkovaní hliníka pre automobilový priemysel</span>.
        </p>
      </div>

      <h3 className="text-white font-bold text-2xl mb-6 flex items-center">
        <span className="w-8 h-1 bg-emerald-500 rounded-full mr-4"></span>
        Špecializácia na spájkovanie hliníka v Bratislave
      </h3>
      <p className="text-gray-300 text-lg leading-relaxed mb-8 pl-12">
        Naša firma v Bratislave sa špecializuje na spájkovanie hliníka pre všetky typy aplikácií. 
        Používame najnovšie spájkovacie technológie a kvalitné pájky s teplotou topenia <span className="text-emerald-400 font-semibold">400-600°C</span>. 
        Spájkovanie hliníka v Bratislave je naša hlavná špecializácia s dlhoročnými skúsenosťami.
      </p>

      <h3 className="text-white font-bold text-2xl mb-6 flex items-center">
        <span className="w-8 h-1 bg-emerald-500 rounded-full mr-4"></span>
        Typy spájkovania hliníka v Bratislave
      </h3>
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 mb-8 border border-slate-700 shadow-xl">
        <h4 className="text-emerald-400 font-bold text-xl mb-4">Spájkovanie hliníkových trubiek pre chladiče v Bratislave</h4>
        <p className="text-gray-300 mb-4">
          Špecializujeme sa na spájkovanie hliníkových trubiek pre autochladiče v Bratislave. 
          Táto technika vyžaduje presnosť a odbornosť. Spájkovanie hliníkových trubiek v Bratislave 
          zabezpečuje spoľahlivé spoje bez netesností.
        </p>
        
        <h4 className="text-emerald-400 font-bold text-xl mb-4">Oprava motoreových blokov spájkovaním hliníka v Bratislave</h4>
        <p className="text-gray-300 mb-4">
          Oprava motoreových blokov spájkovaním hliníka je komplexný proces vyžadujúci špeciálne znalosti v Bratislave. 
          Používame špeciálne pájky a postupy pre opravu trhlín a poškodení. Spájkovanie hliníka 
          pre motoreové bloky v Bratislave predĺži životnosť motora.
        </p>
        
        <h4 className="text-emerald-400 font-bold text-xl mb-4">Spájkovanie hliníkových plechov v Bratislave</h4>
        <p className="text-gray-300 mb-4">
          Spájkovanie hliníkových plechov vyžaduje presnú kontrolu teploty a času v Bratislave. 
          Táto technika sa používa pri oprave karosérií a výrobe hliníkových komponentov. 
          Spájkovanie hliníkových plechov v Bratislave zabezpečuje pevné a spoľahlivé spoje.
        </p>
        
        <h4 className="text-emerald-400 font-bold text-xl mb-4">Spájkovanie hliníkových profilov v Bratislave</h4>
        <p className="text-gray-300">
          Spájkovanie hliníkových profilov je špecializovaná služba pre priemyselné aplikácie v Bratislave. 
          Používame moderné spájkovacie zariadenia pre presné spoje. Spájkovanie hliníkových profilov 
          v Bratislave je ideálne pre výrobu rámov a konštrukcií.
        </p>
      </div>

      <h3 className="text-white font-bold text-2xl mb-4">Výhody spájkovania hliníka v Bratislave</h3>
      <p className="text-gray-300 text-lg leading-relaxed mb-8">
        Spájkovanie hliníka v Bratislave ponúka mnohé výhody oproti zváraniu. Nižšia teplota spájkovania 
        minimalizuje tepelné deformácie a zachováva mechanické vlastnosti materiálu. Naša firma v Bratislave 
        používa spájkovanie hliníka pre spoľahlivé a trvalé spoje.
      </p>

      <h3 className="text-white font-bold text-2xl mb-4">Moderné spájkovacie technológie v Bratislave</h3>
      <p className="text-gray-300 text-lg leading-relaxed mb-8">
        Používame najnovšie spájkovacie technológie a zariadenia v Bratislave. Naše vybavenie zahŕňa 
        indukčné spájkovanie, plynové spájkovanie a špeciálne spájkovacie stanice. Moderné technológie 
        spájkovania hliníka v Bratislave zabezpečujú konzistentnú kvalitu.
      </p>

      <h3 className="text-white font-bold text-2xl mb-4">Kontrola kvality spájkovania hliníka v Bratislave</h3>
      <p className="text-gray-300 text-lg leading-relaxed mb-8">
        Každý spájkovaný spoj prechádza kontrolou kvality v Bratislave. Používame vizuálnu kontrolu, 
        tlakové testy a röntgenové skenovanie pre overenie kvality spájkovania hliníka. Kontrola kvality 
        spájkovania hliníka v Bratislave je zárukou spoľahlivosti.
      </p>

      <h3 className="text-white font-bold text-2xl mb-4">Rýchle spájkovanie hliníka v Bratislave</h3>
      <p className="text-gray-300 text-lg leading-relaxed mb-8">
        Ponúkame expresné spájkovanie hliníka s časom dokončenia do 24 hodín v Bratislave. 
        Pre urgentné prípady máme k dispozícii mobilné spájkovacie zariadenia. Rýchle spájkovanie hliníka 
        v Bratislave je dostupné pre všetky typy oprav.
      </p>

      <h3 className="text-white font-bold text-2xl mb-4">Cenová dostupnosť spájkovania hliníka v Bratislave</h3>
      <p className="text-gray-300 text-lg leading-relaxed mb-8">
        Naše ceny za spájkovanie hliníka sú transparentné a konkurencieschopné v Bratislave. 
        Poskytujeme bezplatnú konzultáciu a cenovú ponuku pred začatím prác. Cenová ponuka spájkovania hliníka 
        v Bratislave zahŕňa všetky náklady bez skrytých poplatkov.
      </p>

      <h3 className="text-white font-bold text-2xl mb-4">Oblasti pôsobenia - spájkovanie hliníka v Bratislave</h3>
      <p className="text-gray-300 text-lg leading-relaxed mb-8">
        Poskytujeme služby spájkovania hliníka v celej Bratislave a okolí. Naša spájkovacia dielňa 
        sa nachádza v centrálnej časti Bratislavy s dobrým prístupom. Spájkovanie hliníka v Bratislave 
        je dostupné pre všetky typy zákaziek.
      </p>

      <h3 className="text-white font-bold text-2xl mb-6 flex items-center">
        <span className="w-8 h-1 bg-emerald-500 rounded-full mr-4"></span>
        Prečo si vybrať našu firmu pre spájkovanie hliníka v Bratislave
      </h3>
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 mb-8 border border-slate-700 shadow-xl">
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>15+ rokov skúseností so spájkovaním hliníka v Bratislave</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Certifikovaní technici pre spájkovanie hliníka v Bratislave</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Moderné spájkovacie zariadenia v Bratislave</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Záruka 2 roky na spájkovanie hliníka v Bratislave</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Transparentné ceny za spájkovanie hliníka v Bratislave</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Rýchly servis spájkovania hliníka v Bratislave</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Bezplatná konzultácia pre spájkovanie hliníka v Bratislave</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-l-4 border-emerald-500 p-6 rounded-r-xl mb-8">
        <p className="text-gray-200 text-lg leading-relaxed font-medium">
          Ak potrebujete spájkovanie hliníka v Bratislave, kontaktujte nás na telefóne 
          <span className="text-emerald-400 font-bold">0905 262 430</span> 
          alebo na adrese <span className="text-emerald-400 font-semibold">Galvaniho 3972/2A v Bratislave</span>. 
          Poskytujeme bezplatnú konzultáciu a cenovú ponuku pre spájkovanie hliníka v Bratislave.
        </p>
      </div>
    `,
    category: 'Spájkovanie hliníka',
    readTime: '7 min',
    date: '2024-01-10',
    image: '/chladic.png'
  },
  'vyroba-hlinikovych-dielov-bratislava': {
    slug: 'vyroba-hlinikovych-dielov-bratislava',
    title: 'Výroba hliníkových dielov na mieru - Presnosť na milimeter',
    excerpt: 'Vlastná výroba hliníkových náhradných dielov a komponentov podľa vašich špecifikácií s presnosťou na milimeter. Profesionálne spájkovanie hliníka v Bratislave.',
    content: `
      <h2 className="text-white font-bold text-3xl mb-6">Výroba hliníkových dielov Bratislava</h2>
      
      <p className="text-gray-300 text-lg leading-relaxed mb-8">
        Vlastná výroba hliníkových náhradných dielov a komponentov podľa vašich špecifikácií 
        s presnosťou na milimeter. Profesionálne spájkovanie hliníka v Bratislave.
      </p>

      <p className="text-gray-300 text-lg leading-relaxed mb-8">
        Špecializujeme sa na výrobu hliníkových dielov pre automobilový, letecký 
        a priemyselný sektor v Bratislave. Výroba hliníkových dielov zahŕňa spájkovanie hliníka
        a presné spracovanie materiálov.
      </p>

      <p className="text-gray-300 text-lg leading-relaxed mb-8">
        Naše služby zahŕňajú konzultácie, prototypovanie, kontrolu kvality, 
        rýchlu výrobu a záruku kvality. Všetky diely vyrábame podľa originálnych špecifikácií. 
        Spájkovanie hliníka a spájkovanie hliníka pre autochladiče sú naše hlavné špecializácie.
      </p>

      <div className="bg-slate-800 rounded-2xl p-8 mt-12 border border-slate-700">
        <h3 className="text-2xl font-bold text-emerald-400 mb-4">Proces výroby</h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Konzultácie a plánovanie</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Prototypovanie</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Kontrola kvality</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Rýchla výroba</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Záruka kvality</span>
          </li>
        </ul>
      </div>
    `,
    category: 'Výroba',
    readTime: '6 min',
    date: '2024-01-05',
    image: '/hero-mechanic.jpg'
  },
  'diagnostika-autochladicov-bratislava': {
    slug: 'diagnostika-autochladicov-bratislava',
    title: 'Diagnostika autochladičov Bratislava - Moderné zariadenia',
    excerpt: 'Komplexná diagnostika problémov s chladením autochladičov a preventívne prehliadky systémov s detailným reportom v Bratislave. Používame najnovšie diagnostické zariadenia.',
    content: `
      <h2 className="text-white font-bold text-3xl mb-6">Diagnostika autochladičov Bratislava</h2>
      
      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-l-4 border-emerald-500 p-6 rounded-r-xl mb-8">
        <p className="text-gray-200 text-lg leading-relaxed font-medium">
          Komplexná diagnostika problémov s chladením autochladičov a preventívne prehliadky systémov v Bratislave. 
          Používame najnovšie diagnostické zariadenia s detailným reportom. Naša firma v Bratislave sa špecializuje 
          na diagnostiku autochladičov a spájkovanie hliníka pre všetky typy vozidiel.
        </p>
      </div>

      <h3 className="text-white font-bold text-2xl mb-6 flex items-center">
        <span className="w-8 h-1 bg-emerald-500 rounded-full mr-4"></span>
        Špecializácia na diagnostiku chladiacich systémov v Bratislave
      </h3>
      <p className="text-gray-300 text-lg leading-relaxed mb-8 pl-12">
        Diagnostika chladiacich systémov autochladičov je kľúčová pre predchádzanie vážnych porúch a optimalizáciu 
        výkonu vozidla v Bratislave. Naša firma má dlhoročné skúsenosti s identifikáciou problémov 
        v chladiacich systémoch autochladičov všetkých typov vozidiel. Diagnostika autochladičov v Bratislave 
        zahŕňa aj spájkovanie hliníka pre opravy.
      </p>

      <h3 className="text-white font-bold text-2xl mb-6 flex items-center">
        <span className="w-8 h-1 bg-emerald-500 rounded-full mr-4"></span>
        Diagnostické metódy pre autochladiče v Bratislave
      </h3>
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 mb-8 border border-slate-700 shadow-xl">
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
        Kontrola kvality diagnostiky autochladičov v Bratislave zahŕňa aj spájkovanie hliníka.
      </p>

      <h3 className="text-white font-bold text-2xl mb-6 flex items-center">
        <span className="w-8 h-1 bg-emerald-500 rounded-full mr-4"></span>
        Prečo si vybrať našu firmu pre diagnostiku autochladičov v Bratislave
      </h3>
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 mb-8 border border-slate-700 shadow-xl">
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>15+ rokov skúseností s diagnostikou autochladičov v Bratislave</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Certifikovaní technici pre diagnostiku autochladičov v Bratislave</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Moderné diagnostické zariadenia v Bratislave</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Záruka kvality diagnostiky autochladičov v Bratislave</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Transparentné ceny za diagnostiku autochladičov v Bratislave</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Rýchly servis diagnostiky autochladičov v Bratislave</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Bezplatná konzultácia pre diagnostiku autochladičov v Bratislave</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-l-4 border-emerald-500 p-6 rounded-r-xl mb-8">
        <p className="text-gray-200 text-lg leading-relaxed font-medium">
          Ak potrebujete diagnostiku autochladiča v Bratislave, kontaktujte nás na telefóne 
          <span className="text-emerald-400 font-bold">0905 262 430</span> 
          alebo na adrese <span className="text-emerald-400 font-semibold">Galvaniho 3972/2A v Bratislave</span>. 
          Poskytujeme bezplatnú konzultáciu a cenovú ponuku pre diagnostiku autochladičov a spájkovanie hliníka v Bratislave.
        </p>
      </div>
    `,
    category: 'Diagnostika autochladičov',
    readTime: '4 min',
    date: '2024-01-01',
    image: '/clean-chladic.png'
  }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const article = articles[params.slug];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ak článok neexistuje, zobrazíme 404
  if (!article) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Článok nenájdený</h1>
          <p className="text-gray-300 mb-8">Požadovaný článok neexistuje.</p>
          <Link href="/blog" className="bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors">
            Späť na blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-500 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-slate-600 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-gray-700 rounded-full"></div>
          <div className="absolute top-1/3 left-1/2 w-12 h-12 bg-teal-600 rotate-45"></div>
          <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-slate-500 rounded-full"></div>
          <div className="absolute top-2/3 left-1/6 w-20 h-20 bg-emerald-500 rotate-12"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium mb-6 border border-emerald-500/30">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
              {article.category}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {article.excerpt}
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
          <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-gray-700 rounded-full"></div>
          <div className="absolute top-1/3 left-1/2 w-12 h-12 bg-teal-600 rotate-45"></div>
          <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-slate-500 rounded-full"></div>
          <div className="absolute top-2/3 left-1/6 w-20 h-20 bg-emerald-500 rotate-12"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative">
          <article className="prose prose-lg max-w-none prose-invert">
            {/* Hero Image */}
            <div className="mb-12">
              <div className="relative h-96 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            </div>

            {/* Main Content */}
            <div dangerouslySetInnerHTML={{ __html: article.content }} />

            {/* Contact Info */}
            <div className="bg-slate-800 rounded-2xl p-8 mt-12 border border-slate-700">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">Kontakt</h3>
              <p className="text-gray-300 mb-2"><strong>Telefón:</strong> 0905 262 430</p>
              <p className="text-gray-300 mb-2"><strong>Email:</strong> fmosovsky@gmail.com</p>
              <p className="text-gray-300 mb-2"><strong>Adresa:</strong> Galvaniho 3972/2A, Bratislava</p>
              <p className="text-gray-300"><strong>Otváracie hodiny:</strong> Po - Pi: 8:30 - 18:00</p>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 bg-slate-600 rounded-full"></div>
          <div className="absolute top-20 right-10 w-32 h-32 bg-teal-500 rounded-full"></div>
          <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-gray-700 rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-emerald-500 rounded-full"></div>
          <div className="absolute top-1/2 left-1/6 w-20 h-20 bg-slate-700 rotate-45"></div>
          <div className="absolute top-1/3 right-1/6 w-12 h-12 bg-teal-600 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/2 w-28 h-28 bg-gray-600 rotate-12"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Potrebujete profesionálny servis?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Kontaktujte nás pre bezplatnú konzultáciu a cenovú ponuku
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