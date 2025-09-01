import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  linkHref: string;
  linkText: string;
  bgColor: string;
  rotation: 'left' | 'right';
  imageSrc?: string;
  icon?: string;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  linkHref,
  linkText,
  bgColor,
  rotation,
  imageSrc,
  icon,
  className = ''
}: ServiceCardProps) {
  const rotationClasses = {
    left: {
      background: `transform -rotate-3 group-hover:-rotate-6`,
      card: `transform rotate-1 group-hover:rotate-2`
    },
    right: {
      background: `transform rotate-3 group-hover:rotate-6`,
      card: `transform -rotate-1 group-hover:-rotate-2`
    }
  };

  return (
    <div className={`group relative ${className}`}>
      <div className={`absolute inset-0 ${bgColor} rounded-2xl ${rotationClasses[rotation].background} transition-transform duration-300`}></div>
      <div className={`relative bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700 hover:shadow-2xl transition-all duration-300 ${rotationClasses[rotation].card}`}>
        {/* Service Icon */}
        {icon && (
          <div className="text-4xl mb-4">
            {icon}
          </div>
        )}
        
        {/* Service Image */}
        <div className={`relative w-full h-48 mb-6 rounded-xl overflow-hidden ${bgColor}`}>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-white text-lg font-bold">{title}</p>
              </div>
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
        <Link 
          href={linkHref} 
          className="inline-flex items-center text-emerald-400 font-semibold text-sm hover:text-emerald-300 transition-colors group/link"
        >
          {linkText}
          <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 