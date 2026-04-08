import { FooterLink } from "@/components/ui/FooterLink";

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">
          Company
        </h4>
        <div className="flex flex-col gap-2">
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#services">Services</FooterLink>
          <FooterLink href="#process">Process</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">
          Solutions
        </h4>
        <div className="flex flex-col gap-2">
          <FooterLink href="#websites">Websites</FooterLink>
          <FooterLink href="#ecommerce">E‑Commerce</FooterLink>
          <FooterLink href="#branding">Branding</FooterLink>
          <FooterLink href="#support">Support</FooterLink>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">
          Resources
        </h4>
        <div className="flex flex-col gap-2">
          <FooterLink href="#faq">FAQ</FooterLink>
          <FooterLink href="#pricing">Pricing</FooterLink>
          <FooterLink href="#portfolio">Portfolio</FooterLink>
          <FooterLink href="#blog">Blog</FooterLink>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">
          Connect
        </h4>
        <div className="flex flex-col gap-2">
          <FooterLink href="mailto:info@computerconnection.co.za">
            Email
          </FooterLink>
          <FooterLink href="https://wa.me/27821234567">WhatsApp</FooterLink>
          <FooterLink href="https://linkedin.com">LinkedIn</FooterLink>
          <FooterLink href="https://github.com">GitHub</FooterLink>
        </div>
      </div>
    </div>
  );
}
