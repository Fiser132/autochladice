import SectionBadge from '../ui/SectionBadge';
import BackgroundPattern from '../ui/BackgroundPattern';
import ContactForm from '../ui/ContactForm';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle?: string;
  gradient: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Telefón',
    value: '0905 262 430',
    gradient: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email',
    value: 'fmosovsky@gmail.com',
    gradient: 'from-emerald-600 to-emerald-700'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Adresa',
    value: 'Galvaniho 3972/2A, Bratislava',
    gradient: 'from-emerald-400 to-emerald-500'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Otváracie hodiny',
    value: 'Po - Pi: 8:30 - 18:00',
    subtitle: 'Sobota - Nedeľa: Zatvorené',
    gradient: 'from-emerald-700 to-emerald-800'
  }
];

interface ContactSectionProps {
  className?: string;
}

export default function ContactSection({ className = '' }: ContactSectionProps) {
  return (
    <section id="contact" className={`py-24 bg-slate-800 relative overflow-hidden ${className}`}>
      <BackgroundPattern opacity="opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <SectionBadge>Kontaktujte nás</SectionBadge>
          <h2 className="text-4xl font-bold text-white mb-6">
            Navštívte nás v Bratislave
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Naša servisná dielňa sa nachádza v srdci Bratislavy a poskytuje profesionálne služby
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form - Left Column */}
          <ContactForm />

          {/* Contact Information - Right Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Kontaktné informácie</h3>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-4 group">
                <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white">{info.title}</h4>
                  <p className="text-gray-300">{info.value}</p>
                  {info.subtitle && <p className="text-gray-300">{info.subtitle}</p>}
                </div>
              </div>
            ))}

            {/* Quick Contact Buttons */}
            <div className="pt-6 space-y-4">
              <a 
                href="tel:0905 262 430"
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Zavolajte nám teraz
              </a>
              
              <a 
                href="mailto:fmosovsky@gmail.com"
                className="w-full border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Napíšte nám email
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-8">Kde nás nájdete</h3>
          <div className="h-80 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl overflow-hidden border border-slate-600 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.1234567890123!2d17.12345678901234!3d48.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8e7b12345678%3A0x1234567890abcdef!2sGalvaniho%203972%2F2A%2C%20821%2004%20Bratislava!5e0!3m2!1ssk!2ssk!4v1234567890123"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
              title="AutoChladiče SK - Galvaniho 3972/2A, Bratislava"
            ></iframe>
            <div className="absolute top-4 right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 border border-slate-600">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white text-sm font-medium">Galvaniho 3972/2A</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 