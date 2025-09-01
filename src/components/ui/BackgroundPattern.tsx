interface BackgroundPatternProps {
  className?: string;
  opacity?: string;
}

export default function BackgroundPattern({ className = '', opacity = 'opacity-5' }: BackgroundPatternProps) {
  return (
    <div className={`absolute inset-0 ${opacity} ${className}`}>
      <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500 rounded-full"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-slate-600 rounded-full"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-emerald-400 rounded-full"></div>
      <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-gray-700 rounded-full"></div>
      <div className="absolute top-1/3 left-1/2 w-12 h-12 bg-teal-600 rotate-45"></div>
      <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-slate-500 rounded-full"></div>
      <div className="absolute top-2/3 left-1/6 w-20 h-20 bg-emerald-500 rotate-12"></div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-gray-600 transform rotate-45"></div>
      <div className="absolute bottom-1/4 left-1/6 w-12 h-12 bg-teal-400 transform rotate-12"></div>
      <div className="absolute top-3/4 right-1/6 w-20 h-20 bg-slate-700 rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/2 w-8 h-8 bg-emerald-600 transform rotate-30"></div>
      
      {/* Decorative Lines */}
      <div className="absolute top-10 left-1/4 w-32 h-1 bg-teal-400 transform rotate-45"></div>
      <div className="absolute bottom-10 right-1/4 w-24 h-1 bg-slate-500 transform -rotate-45"></div>
    </div>
  );
} 