import { ShieldCheck } from "lucide-react";

export function FooterAccreditation() {
  return (
    <div className="flex items-center gap-4 px-5 py-3 bg-white/5 border border-white/10 rounded-2xl w-fit">
      <ShieldCheck className="w-5 h-5 text-blue-400" />

      <div className="flex flex-col leading-tight">
        <span className="text-xs font-bold uppercase tracking-widest text-white/60">
          Certified Partner
        </span>
        <span className="text-[10px] text-white/40">
          Verified & Trusted Solutions
        </span>
      </div>
    </div>
  );
}
