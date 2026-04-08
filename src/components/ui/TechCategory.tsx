export interface TechCategoryProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  delay?: number;
}

import { motion } from "motion/react";

export function TechCategory({ icon, title, items, delay }: TechCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 hover:border-blue-500/30 transition-all duration-500 group"
    >
      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/10 transition-all">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-4">{title}</h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item: string, i: number) => (
          <span
            key={i}
            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white/60 group-hover:text-white group-hover:border-blue-500/30 transition-all"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}


