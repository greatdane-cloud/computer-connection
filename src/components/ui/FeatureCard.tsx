import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  href?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  delay,
  href,
}: FeatureCardProps) {
  const content = (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-500 border border-white/5 group-hover:border-blue-500/20">
          {icon}
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
          {description}
        </p>

        {href && (
          <div className="mt-6 flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
            Learn More <ArrowRight className="w-3 h-3" />
          </div>
        )}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 hover:border-blue-500/30 hover:bg-white/[0.08] transition-all duration-500 group relative overflow-hidden"
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  );
}

