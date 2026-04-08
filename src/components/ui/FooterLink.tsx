import React from "react";

export interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a
      href={href}
      className="text-white/60 hover:text-blue-400 transition-all hover:translate-x-1 inline-block"
    >
      {children}
    </a>
  );
}

