import { motion } from "motion/react";

export interface WhyChooseItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function WhyChooseItem({
  icon,
  title,
  description,
  delay,
}: WhyChooseItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 hover:border-blue-500/30 transition-all group text-center"
    >
      <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

