interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionBadge({ children, className = '' }: SectionBadgeProps) {
  return (
    <div className={`inline-flex items-center px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium mb-6 border border-emerald-500/30 ${className}`}>
      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
      {children}
    </div>
  );
} 