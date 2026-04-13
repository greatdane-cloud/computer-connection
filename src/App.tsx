/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "motion/react";
import { Zap, Code2, Layout, ExternalLink, Headset, CheckCircle, ArrowRight, Mail, Phone, MapPin, Send, CheckCircle2, Check, Terminal, Monitor, Server, Wrench, HardDrive, Cloud, ChevronUp, Globe, Award, ShieldCheck, Clock, Coins, Search, Settings, LifeBuoy, ChevronDown, MessageCircle } from "lucide-react";

function useMousePosition() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return { mouseX, mouseY };
}
import { type MotionValue } from "motion/react";

function TechBackground({ mouseX, mouseY }: { mouseX: MotionValue<number>, mouseY: MotionValue<number> }) {
  const springConfig = { damping: 25, stiffness: 150 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  // Generate stable random particles
const [particles] = useState(() =>
  Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * -20,
  }))
);// empty deps = runs once on mount, not during render

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
      {/* Base Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-black"></div>
      
      {/* Interactive Spotlight */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-[120px]"
        style={{
          left: spotlightX,
          top: spotlightY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Grid Pattern */}
      <div className="grid-overlay" />

      {/* Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-400/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const { mouseX, mouseY } = useMousePosition();

  // Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax offsets for hero
  const heroX = useTransform(mouseX, [0, 1920], [15, -15]);
  const heroY = useTransform(mouseY, [0, 1080], [15, -15]);

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setFormStatus('sending');

  const formData = new FormData(e.currentTarget);

  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    });
    setFormStatus('sent');
    setTimeout(() => setFormStatus('idle'), 3000);
  } catch {
    setFormStatus('idle');
    alert('Something went wrong. Please try again.');
  }
};

 const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setNewsletterStatus('sending');

  const formData = new FormData(e.currentTarget);

  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    });
    setNewsletterStatus('sent');
    setTimeout(() => setNewsletterStatus('idle'), 3000);
  } catch {
    setNewsletterStatus('idle');
    alert('Something went wrong. Please try again.');
  }
};

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <TechBackground mouseX={mouseX} mouseY={mouseY} />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/27784332763"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-shadow group"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Chat with us
        </span>
      </motion.a>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-500 bg-[length:200%_auto] animate-gradient rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)] overflow-hidden group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-500">
              <div className="absolute inset-0 bg-white/20 animate-scan pointer-events-none"></div>
              <Zap className="w-6 h-6 text-white fill-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <span className="font-black tracking-tighter text-xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-white bg-[length:200%_auto] animate-gradient">
              Computer Connection
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#tech-stack" className="hover:text-blue-400 transition-colors">Expertise</a>
            <a href="#packages" className="hover:text-blue-400 transition-colors">Packages</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <a 
            href="https://www.facebook.com/profile.php?id=61580914130075" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all active:scale-95 group"
            title="Follow us on ExternalLink"
          >
            <ExternalLink className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <motion.div 
              style={{ x: heroX, y: heroY }}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              <motion.h1 
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { 
                      duration: 1, 
                      ease: [0.22, 1, 0.36, 1] 
                    } 
                  }
                }}
                className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400"
              >
                Connecting you <br />
                <span className="text-blue-500">to the future.</span>
              </motion.h1>
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { 
                      duration: 0.8, 
                      ease: "easeOut" 
                    } 
                  }
                }}
                className="text-xl text-white/60 leading-relaxed mb-10 max-w-xl"
              >
                Premium technology solutions and networking infrastructure for the modern era. 
                Built with precision, powered by intelligence.
              </motion.p>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { 
                      duration: 0.8, 
                      ease: "easeOut" 
                    } 
                  }
                }}
                className="flex flex-wrap gap-4"
              >
                <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-medium flex items-center gap-2 hover:gap-4 transition-all group shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  Contact Us <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
               <a href="#services" className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
  Our Services
</a>
              </motion.div>
            </motion.div>
          </div>

          {/* Services Section */}
          <Reveal>
            <section id="services" className="mt-32 pt-20 border-t border-white/5">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
              <p className="text-white/60 text-lg max-w-3xl mx-auto">
                We offer professional <span className="text-blue-400">remote support</span>, 
                high-quality <span className="text-blue-400">PC upgrades & sales</span>, 
                and comprehensive <span className="text-blue-400">Office 365 solutions</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<Zap className="w-6 h-6 text-blue-400" />}
                title="High Performance"
                description="Cutting-edge hardware and software optimization for maximum efficiency."
                delay={0.1}
              />
              <FeatureCard 
                icon={<Code2 className="w-6 h-6 text-purple-400" />}
                title="Tech Integration"
                description="Seamless integration of AI and modern networking protocols."
                delay={0.2}
              />
              <FeatureCard 
                icon={<Layout className="w-6 h-6 text-blue-500" />}
                title="Custom Solutions"
                description="Tailored technology architectures designed for your specific needs."
                delay={0.3}
              />
              <FeatureCard 
                icon={<Headset className="w-6 h-6 text-blue-400" />}
                title="Remote Support"
                description="Instant technical assistance and troubleshooting from anywhere in the world."
                delay={0.4}
              />
              <FeatureCard 
                icon={<HardDrive className="w-6 h-6 text-purple-400" />}
                title="PC Upgrades & Sales"
                description="Quality hardware components and expert installation to boost your productivity."
                delay={0.5}
              />
              <FeatureCard 
                icon={<Cloud className="w-6 h-6 text-blue-500" />}
                title="Office 365 Solutions"
                description="Full deployment and management of Microsoft 365 for seamless collaboration."
                delay={0.6}
              />
              <FeatureCard 
                icon={<Globe className="w-6 h-6 text-blue-400" />}
                title="Domain & Hosting"
                description="Secure your business identity with professional domain registration and reliable hosting."
                delay={0.7}
                href="https://www.domains.co.za/billing/aff.php?aff=5304"
              />
            </div>
          </section>
          </Reveal>

          {/* Pinnacle Partnership Section */}
          <section className="mt-40 relative">
            <div className="absolute inset-0 bg-blue-600/5 blur-[100px] rounded-full -z-10"></div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white/5 border border-blue-500/20 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award className="w-32 h-32 text-blue-400" />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-8"
                  >
                    <ShieldCheck className="w-4 h-4" /> Accredited Business Partner
                  </motion.div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    Strategic Partnership with <br />
                    <span className="text-blue-500">Pinnacle Micro</span>
                  </h2>
                  <p className="text-white/60 text-lg mb-10 leading-relaxed">
                    Computer Connection is an officially accredited agent of Pinnacle Micro, 
                    holding the full mandate to sell and support their entire range of 
                    world-class technology products. This partnership ensures you receive 
                    genuine hardware, direct manufacturer support, and the latest innovations 
                    from global tech leaders.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Cyber Security", "Compute & Storage", 
                      "Networking", "Cloud Services", 
                      "Infrastructure", "End User Compute",
                      "Point of Sale", "Peripherals"
                    ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-3 text-sm text-white/80 cursor-default group/item"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover/item:bg-blue-400 group-hover/item:scale-150 transition-all"></div>
                        <span className="group-hover/item:text-blue-400 transition-colors">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {/* Brand Grid - Representing the mandate */}
                  {[
                    "Dell Technologies", "HP", "Lenovo", 
                    "Microsoft", "NVIDIA", "Intel", 
                    "Asus", "Logitech", "Western Digital"
                  ].map((brand, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                        borderColor: "rgba(59, 130, 246, 0.4)",
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)"
                      }}
                      className="aspect-square bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-4 text-center transition-all group/brand cursor-default"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-tighter text-white/40 group-hover/brand:text-white transition-colors">{brand}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Why Choose Us Section */}
          <Reveal>
            <section className="mt-40 pt-20 border-t border-white/5">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                We combine technical excellence with a client-first approach to deliver results that matter.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <WhyChooseItem 
                icon={<ShieldCheck className="w-8 h-8 text-blue-400" />}
                title="Accredited Expertise"
                description="Official partners with industry leaders like Pinnacle Micro, ensuring genuine support."
                delay={0.1}
              />
              <WhyChooseItem 
                icon={<Clock className="w-8 h-8 text-blue-400" />}
                title="Fast Turnaround"
                description="We value your time. Our streamlined processes ensure quick diagnosis and repair."
                delay={0.2}
              />
              <WhyChooseItem 
                icon={<Coins className="w-8 h-8 text-blue-400" />}
                title="Transparent Pricing"
                description="No hidden costs. We provide clear, upfront quotes before any work begins."
                delay={0.3}
              />
              <WhyChooseItem 
                icon={<LifeBuoy className="w-8 h-8 text-blue-400" />}
                title="24/7 Remote Support"
                description="Assistance whenever you need it, no matter where you are located."
                delay={0.4}
              />
            </div>
          </section>
          </Reveal>

          {/* Our Process Section */}
          <Reveal>
            <section className="mt-40 pt-20 border-t border-white/5 overflow-hidden">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                A structured approach to solving your technology challenges efficiently.
              </p>
            </div>

            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent hidden lg:block -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                <ProcessStep 
                  number="01"
                  icon={<Search className="w-6 h-6" />}
                  title="Consultation"
                  description="We discuss your needs and identify the core challenges you're facing."
                  delay={0.1}
                />
                <ProcessStep 
                  number="02"
                  icon={<Terminal className="w-6 h-6" />}
                  title="Diagnosis"
                  description="Our experts perform a deep dive to find the root cause and best solution."
                  delay={0.2}
                />
                <ProcessStep 
                  number="03"
                  icon={<Settings className="w-6 h-6" />}
                  title="Implementation"
                  description="We execute the solution with precision, keeping you updated throughout."
                  delay={0.3}
                />
                <ProcessStep 
                  number="04"
                  icon={<CheckCircle className="w-6 h-6" />}
                  title="Support"
                  description="Post-implementation support to ensure everything continues to run smoothly."
                  delay={0.4}
                />
              </div>
            </div>
          </section>
          </Reveal>

          {/* Tech Stack Section */}
          <Reveal>
            <section id="tech-stack" className="mt-40 pt-20 border-t border-white/5">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                We leverage a world-class technology stack to build robust, scalable, and high-performance solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <TechCategory 
                icon={<Terminal className="w-6 h-6 text-blue-400" />}
                title="Languages"
                items={["JavaScript", "TypeScript", "SQL", "C++"]}
                delay={0.1}
              />
              <TechCategory 
                icon={<Monitor className="w-6 h-6 text-purple-400" />}
                title="Frontend"
                items={["React", "HTML5", "CSS3", "Responsive Design", "Accessibility"]}
                delay={0.2}
              />
              <TechCategory 
                icon={<Server className="w-6 h-6 text-blue-500" />}
                title="Backend"
                items={["Node.js", "Express", "REST APIs"]}
                delay={0.3}
              />
              <TechCategory 
                icon={<Wrench className="w-6 h-6 text-purple-500" />}
                title="Tools"
                items={["Docker", "Git", "VS Code", "Dev Containers", "WSL (Ubuntu)"]}
                delay={0.4}
              />
            </div>
          </section>
          </Reveal>

          {/* Packages Section */}
          <Reveal>
            <section id="packages" className="mt-40 pt-20 border-t border-white/5">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Package Proposals</h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto">
                  Choose the perfect plan for your business growth. From startups to enterprises, we have a solution for you.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <PackageCard 
                  title="Bronze Package"
                  price="R7,500"
                  description="Perfect for startups getting their digital presence established"
                  features={[
                    "Social Media Setup (3 platforms)",
                    "Basic Branding Package",
                    "Content Calendar (1 month)",
                    "Basic Analytics Report",
                    "2 Design Revisions"
                  ]}
                  delay={0.1}
                />
                <PackageCard 
                  title="Silver Package"
                  price="R12,500"
                  description="Great for growing businesses ready to expand their online reach"
                  features={[
                    "Everything in Bronze",
                    "Website Landing Page",
                    "SEO Optimization (Basic)",
                    "Email Marketing Setup",
                    "Monthly Performance Review",
                    "5 Design Revisions"
                  ]}
                  delay={0.2}
                />
                <PackageCard 
                  title="Gold Package"
                  price="R18,000"
                  description="Comprehensive solution for businesses serious about digital growth"
                  isPopular={true}
                  features={[
                    "Everything in Silver",
                    "Full Website (5 pages)",
                    "Advanced SEO Strategy",
                    "Social Media Management",
                    "Custom Graphics & Content",
                    "Weekly Check-ins",
                    "Unlimited Revisions"
                  ]}
                  delay={0.3}
                />
                <PackageCard 
                  title="Platinum Package"
                  price="R30,000"
                  description="Premium enterprise solution with dedicated support and strategy"
                  features={[
                    "Everything in Gold",
                    "E-commerce Integration",
                    "Advanced Analytics Dashboard",
                    "Paid Advertising Management",
                    "Personal Account Manager",
                    "Priority Support",
                    "Quarterly Strategy Sessions"
                  ]}
                  delay={0.4}
                />
              </div>
            </section>
          </Reveal>

          {/* FAQ Section */}
          <Reveal>
            <section className="mt-40 pt-20 border-t border-white/5">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Common Questions</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Everything you need to know about our services and how we work.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <FAQItem 
                question="Do you offer on-site support in East London?"
                answer="Yes! We provide on-site technical support and hardware repairs for businesses and residents throughout the East London area. For more remote locations, we can also arrange call-outs or provide remote assistance."
              />
              <FAQItem 
                question="How does the remote support work?"
                answer="We use secure, industry-standard remote desktop software to connect to your device. This allows us to diagnose and fix software issues, perform updates, and provide training without needing to be physically present. It's fast, secure, and highly efficient."
              />
              <FAQItem 
                question="What is the typical turnaround time for repairs?"
                answer="Turnaround time depends on the complexity of the issue and parts availability. Most software-related issues are resolved within 24 hours. Hardware repairs typically take 2-3 business days if parts are in stock."
              />
              <FAQItem 
                question="Are your hardware sales covered by warranty?"
                answer="Absolutely. As an accredited Pinnacle Micro partner, all hardware we sell comes with full manufacturer warranties. We also provide our own support to help you navigate any warranty claims if they arise."
              />
              <FAQItem 
                question="Can you help with Office 365 migrations?"
                answer="Yes, we specialize in Microsoft 365 migrations. We handle everything from setting up your tenant and migrating emails to configuring security policies and training your staff on the new tools."
              />
            </div>
          </section>
          </Reveal>

          {/* Contact Section */}
          <Reveal>
            <section id="contact" className="mt-40 pt-20 border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
                <p className="text-white/60 text-lg mb-12 leading-relaxed">
                  Have a question about our services or need a custom quote? 
                  Our team of experts is ready to help you connect to the future.
                </p>
                
                <div className="space-y-8">
                  <ContactInfoItem 
                    icon={<Mail className="w-6 h-6 text-blue-400" />}
                    label="Email Us"
                    value="Jeandre@computerconnection.tech"
                    href="mailto:Jeandre@computerconnection.tech"
                  />
                  <ContactInfoItem 
                    icon={<Phone className="w-6 h-6 text-blue-400" />}
                    label="Call Us"
                    value="078 433 2763"
                    href="tel:+27784332763"
                  />
                  <ContactInfoItem 
                    icon={<MessageCircle className="w-6 h-6 text-green-400" />}
                    label="WhatsApp"
                    value="Message us on WhatsApp"
                    href="https://wa.me/27784332763"
                  />
                  <ContactInfoItem 
                    icon={<MapPin className="w-6 h-6 text-blue-400" />}
                    label="Visit Us"
                    value="East London, Eastern Cape"
                  />
                </div>
              </div>

              <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -mr-32 -mt-32 transition-all group-hover:bg-blue-600/20"></div>
                
                {formStatus === 'sent' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 border border-green-500/50">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-white/60">Thank you for reaching out. We'll get back to you shortly.</p>
                  </motion.div>
                ) : (
                    <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6 relative z-10">
  <input type="hidden" name="form-name" value="contact" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/40 ml-1">Full Name</label>
                        <input
                          name="name"
                          required
                          type="text" 
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all placeholder:text-white/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/40 ml-1">Email Address</label>
                        <input 
                          name="email"
                          required
                          type="email" 
                          placeholder="john@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all placeholder:text-white/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/40 ml-1">Subject</label>
                      <input 
                        name="subject"
                        required
                        type="text" 
                        placeholder="Inquiry about networking"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all placeholder:text-white/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/40 ml-1">Your Message</label>
                      <textarea 
                        name="message"
                        required
                        rows={4}
                        placeholder="How can we help you?"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all placeholder:text-white/20 resize-none"
                      ></textarea>
                    </div>
                    <button 
                      disabled={formStatus === 'sending'}
                      className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-500 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                    >
                      {formStatus === 'sending' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
          </Reveal>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 pt-24 pb-12 px-6 border-t border-white/5 bg-black/80 backdrop-blur-2xl overflow-hidden">
        {/* Footer Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-600/5 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Company Info */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-500 bg-[length:200%_auto] animate-gradient rounded-2xl flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.3)] overflow-hidden group-hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-500">
                  <div className="absolute inset-0 bg-white/20 animate-scan pointer-events-none"></div>
                  <Zap className="w-7 h-7 text-white fill-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="font-black tracking-tighter text-2xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-white bg-[length:200%_auto] animate-gradient">
                  Computer Connection
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                Premium technology solutions and networking infrastructure for the modern era. Built with precision, powered by intelligence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px] opacity-80">Navigation</h4>
              <ul className="space-y-4 text-sm">
                <li><FooterLink href="#services">Our Services</FooterLink></li>
                <li><FooterLink href="#tech-stack">Technical Expertise</FooterLink></li>
                <li><FooterLink href="#packages">Package Proposals</FooterLink></li>
                <li><FooterLink href="#contact">Get in Touch</FooterLink></li>
                <li>
                  <a 
                    href="https://www.domains.co.za/billing/aff.php?aff=5304" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2 mt-4"
                  >
                    <Globe className="w-3 h-3" /> Domains & Hosting
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px] opacity-80">Contact Details</h4>
              <ul className="space-y-6 text-sm">
                <li className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Email</p>
                    <a href="mailto:Jeandre@computerconnection.tech" className="text-white/70 hover:text-white transition-colors">Jeandre@computerconnection.tech</a>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Phone</p>
                    <a href="tel:+27784332763" className="text-white/70 hover:text-white transition-colors">078 433 2763</a>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-bold">WhatsApp</p>
                    <a href="https://wa.me/27784332763" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Message us</a>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <MapPin className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-bold">Location</p>
                    <span className="text-white/70">East London, Eastern Cape</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px] opacity-80">Stay Updated</h4>
              <p className="text-white/60 text-sm mb-8 leading-relaxed">Subscribe to our newsletter for the latest tech insights and company updates.</p>
              
              {newsletterStatus === 'sent' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-green-500 font-medium">Subscribed successfully!</span>
                </motion.div>
              ) : (
              <form name="newsletter" method="POST" data-netlify="true" className="relative group" onSubmit={handleNewsletterSubmit}>
  <input type="hidden" name="form-name" value="newsletter" />
  <input
    name="email"
    required
    type="email"
    placeholder="your@email.com"
    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-white/20 group-hover:bg-white/[0.08]"
  />
  <button
    disabled={newsletterStatus === 'sending'}
    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-500 transition-all active:scale-95 disabled:opacity-50"
  >
    {newsletterStatus === 'sending' ? (
      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
    ) : (
      <ArrowRight className="w-5 h-5 text-white" />
    )}
  </button>
</form>
              )}
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="text-xs text-white/40">
                © 2026 Computer Connection. All rights reserved.
              </p>
              <div className="flex items-center gap-4 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                <ShieldCheck className="w-3 h-3 text-blue-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Accredited Pinnacle Partner</span>
              </div>
              <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-white/40">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all"
            >
              Back to top
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all">
                <ChevronUp className="w-5 h-5 group-hover:text-white" />
              </div>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function WhyChooseItem({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
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

function ProcessStep({ number, icon, title, description, delay }: { number: string, icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
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
      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 hover:bg-white/[0.08] transition-colors">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left"
      >
        <span className="font-bold text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 text-white/60 leading-relaxed border-t border-white/5">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-white/60 hover:text-blue-400 transition-all hover:translate-x-1 inline-block"
    >
      {children}
    </a>
  );
}

function FeatureCard({ icon, title, description, delay, href }: { icon: React.ReactNode, title: string, description: string, delay: number, href?: string }) {
  const content = (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-500 border border-white/5 group-hover:border-blue-500/20">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{description}</p>
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
        <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
          {content}
        </a>
      ) : content}
    </motion.div>
  );
}

function TechCategory({ icon, title, items, delay }: { icon: React.ReactNode, title: string, items: string[], delay: number }) {
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
        {items.map((item, i) => (
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

function PackageCard({ title, price, description, features, delay, isPopular = false }: { title: string, price: string, description: string, features: string[], delay: number, isPopular?: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 flex flex-col h-full ${
        isPopular 
          ? 'bg-gradient-to-b from-blue-600/20 to-purple-600/20 border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.2)]' 
          : 'bg-white/5 border-white/10 hover:border-white/20'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
          Most Popular
        </div>
      )}
      
      <div className="mb-8">
        <h3 className={`text-2xl font-bold mb-2 ${isPopular ? 'text-blue-400' : ''}`}>{title}</h3>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-white/40 text-sm">/ project</span>
        </div>
        <p className="text-white/50 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="space-y-4 mb-10 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3 group">
            <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isPopular ? 'bg-blue-500/20' : 'bg-white/10'}`}>
              <Check className={`w-3 h-3 ${isPopular ? 'text-blue-400' : 'text-white/60'}`} />
            </div>
            <span className="text-sm text-white/70 group-hover:text-white transition-colors">{feature}</span>
          </div>
        ))}
      </div>

      <a 
        href="#contact" 
        className={`w-full py-4 rounded-2xl font-bold text-center transition-all active:scale-[0.98] ${
          isPopular 
            ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)]' 
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        Choose Plan
      </a>
    </motion.div>
  );
}

function ContactInfoItem({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) {
  const content = (
    <div className="flex items-center gap-5 group cursor-pointer">
      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-1">{label}</p>
        <p className="text-lg font-medium group-hover:text-blue-400 transition-colors">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}

function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}


