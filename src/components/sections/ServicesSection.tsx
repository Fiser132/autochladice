import ServiceCard from '../ui/ServiceCard';
import SectionBadge from '../ui/SectionBadge';
import BackgroundPattern from '../ui/BackgroundPattern';

interface Service {
  title: string;
  description: string;
  linkHref: string;
  linkText: string;
  bgColor: string;
  rotation: 'left' | 'right';
  imageSrc?: string;
  icon?: string;
}

const services: Service[] = [
  {
    title: 'Oprava autochladičov',
    description: 'Kompletný servis chladiacich systémov, oprava poškodených chladičov, výmena chladiacej kvapaliny a tlakové testovanie',
    linkHref: '/blog/oprava-autochladicov-bratislava',
    linkText: 'Viac informácií',
    bgColor: 'bg-teal-600',
    rotation: 'right',
    imageSrc: '/hero-mechanic.jpg',
    icon: '🔧'
  },
  {
    title: 'Spájkovanie hliníka',
    description: 'Profesionálne spájkovanie hliníka, spájkovanie hliníkových trubiek, oprava chladiacich systémov a klimatizácií',
    linkHref: '/blog/spajkovanie-hlinika-bratislava',
    linkText: 'Viac informácií',
    bgColor: 'bg-emerald-600',
    rotation: 'left',
    imageSrc: '/chladic.png',
    icon: '⚡'
  },
  {
    title: 'Preplachovanie chladičov',
    description: 'Komplexné preplachovanie a čistenie chladiacich systémov s modernými zariadeniami',
    linkHref: '/blog/diagnostika-autochladicov-bratislava',
    linkText: 'Viac informácií',
    bgColor: 'bg-gray-600',
    rotation: 'left',
    imageSrc: '/clean-chladic.png',
    icon: '🚿'
  }
];

interface ServicesSectionProps {
  className?: string;
}

export default function ServicesSection({ className = '' }: ServicesSectionProps) {
  return (
    <section id="services" className={`py-24 bg-slate-800 relative overflow-hidden ${className}`}>
      <BackgroundPattern />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <SectionBadge>Naše služby</SectionBadge>
          <h2 className="text-4xl font-bold text-white mb-6">
            Špecializujeme sa na
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kompletný servis autochladičov, zvárania hliníka a spájkovania hliníkových trubiek v Bratislave s použitím najnovších technológií
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              linkHref={service.linkHref}
              linkText={service.linkText}
              bgColor={service.bgColor}
              rotation={service.rotation}
              imageSrc={service.imageSrc}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 