import { motion } from "motion/react";
import { Check } from "lucide-react";

export interface PackageCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  delay?: number;
  isPopular?: boolean;
}

export function PackageCard({
  title,
  price,
  description,
  features,
  delay,
  isPopular = false,
}: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 flex flex-col h-full ${
        isPopular
          ? "bg-gradient-to-b from-blue-600/20 to-purple-600/20 border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.2)]"
          : "bg-white/5 border-white/10 hover:border-white/20"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3
          className={`text-2xl font-bold mb-2 ${
            isPopular ? "text-blue-400" : ""
          }`}
        >
          {title}
        </h3>

        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-white/40 text-sm">/ project</span>
        </div>

        <p className="text-white/50 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="space-y-4 mb-10 flex-grow">
        {features.map((feature: string, index: number) => (
          <div key={index} className="flex items-start gap-3 group">
            <div
              className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                isPopular ? "bg-blue-500/20" : "bg-white/10"
              }`}
            >
              <Check
                className={`w-3 h-3 ${
                  isPopular ? "text-blue-400" : "text-white/60"
                }`}
              />
            </div>

            <span className="text-sm text-white/70 group-hover:text-white transition-colors">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <a
        href="#contact"
        className={`w-full py-4 rounded-2xl font-bold text-center transition-all active:scale-[0.98] ${
          isPopular
            ? "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            : "bg-white/10 text-white hover:bg-white/20"
        }`}
      >
        Choose Plan
      </a>
    </motion.div>
  );
}

