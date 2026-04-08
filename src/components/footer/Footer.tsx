import { FooterLinks } from "@/components/footer/FooterLinks";
import { FooterLegal } from "@/components/footer/FooterLegal";
import { FooterAccreditation } from "@/components/footer/FooterAccreditation";
import { BackToTopButton } from "@/components/footer/BackToTopButton";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10 pt-20 pb-10 bg-black/20 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          <div className="max-w-sm">
            <h2 className="text-3xl font-bold mb-4">Computer Connection</h2>
            <p className="text-white/60 leading-relaxed">
              Professional web development, branding, and digital solutions
              crafted with precision and purpose.
            </p>
          </div>

          <div className="mt-8">
            <FooterAccreditation />
          </div>
        </div>

        <FooterLinks />
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10 pt-10">
        <FooterLegal />
      </div>

      <BackToTopButton />
    </footer>
  );
}
