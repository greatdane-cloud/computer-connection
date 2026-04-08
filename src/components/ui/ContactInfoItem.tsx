export interface ContactInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

export function ContactInfoItem({
  icon,
  label,
  value,
  href,
}: ContactInfoItemProps) {
  const content = (
    <div className="flex items-center gap-5 group cursor-pointer">
      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
        {icon}
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-1">
          {label}
        </p>

        <p className="text-lg font-medium group-hover:text-blue-400 transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}


