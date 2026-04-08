import { ShieldCheck } from "lucide-react";

export function FooterLegal() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
      <p className="text-xs text-white/40">
        © 2026 Computer Connection. All rights reserved.
      </p>

      <div className="flex items-center gap-4 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
        <ShieldCheck className="w-3 h-3 text-blue-400" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
          Accredited Pinnacle Partner
        </span>
      </div>

      <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-white/40">
        <a href="#" className="hover:text-white transition-colors">
          Privacy
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Terms
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Cookies
        </a>
      </div>
    </div>
  );
}
