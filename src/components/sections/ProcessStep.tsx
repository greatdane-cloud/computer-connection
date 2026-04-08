import { motion } from "motion/react";

export interface ProcessStepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function ProcessStep({
  number,
  icon,
  title,
  description,
  delay,
}: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="relative group"
    >
      <div className="mb-6 relative">
        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all relative z-10">
          <div className="text-blue-400">{icon}</div>
        </div>

        <div className="absolute -top-4 -right-4 text-4xl font-black text-white/5 group-hover:text-blue-500/10 transition-colors z-0">
          {number}
        </div>
      </div>

      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>

      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

