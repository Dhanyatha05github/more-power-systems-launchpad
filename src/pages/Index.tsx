import { Link } from "react-router-dom";
import { Zap, Wrench, MapPin, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import serviceEquipment from "@/assets/service-equipment.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";

const services = [
  { title: "Generators", desc: "Tailored Diesel Genset solutions engineered to the highest quality standards for global infrastructure.", img: serviceEquipment },
  { title: "Service & Maintenance", desc: "Fast-response support, genuine parts, and expert care to keep your critical power infrastructure operational.", img: serviceMaintenance },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center">
      <img src={heroBg} alt="Dallas Texas skyline at sunset" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 hero-overlay" />
      <div className="container mx-auto relative z-10 px-4">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="text-orange font-semibold mb-3 text-sm uppercase tracking-widest">Powering Critical Infrastructure</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Engineered Diesel Generator <span className="text-gradient">Solutions</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
            More Power Systems delivers complete, turnkey diesel generator solutions for the high-stakes demands of the North American data center market.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/services" className="bg-accent text-accent-foreground px-7 py-3 rounded-md font-semibold hover:bg-orange-light transition-colors inline-flex items-center gap-2">
              Our Services <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="border border-primary-foreground/30 text-primary-foreground px-7 py-3 rounded-md font-semibold hover:bg-primary-foreground/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* About Preview */}
    <section className="section-padding">
      <div className="container mx-auto text-center max-w-3xl">
        <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">Who We Are</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
          Advanced Engineering Meets Decades of Experience
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          More Power Systems is the US Sales and Service arm of Sterling Green Power Solution. We add advanced engineering and technology to a decades-old manufacturing base — ensuring critical infrastructure never goes dark.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: Zap, text: "Best-in-Class Lead Times" },
            { icon: Wrench, text: "Expert Service" },
            { icon: MapPin, text: "Dallas & Dubai" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 bg-secondary px-5 py-3 rounded-lg">
              <Icon size={20} className="text-orange" />
              <span className="font-medium text-foreground text-sm">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Preview - white background */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-lg overflow-hidden card-hover shadow-sm border border-border">
              <img src={s.img} alt={s.title} className="w-full h-48 object-cover" width={800} height={600} loading="lazy" />
              <div className="p-5">
                <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="bg-accent text-accent-foreground px-7 py-3 rounded-md font-semibold hover:bg-orange-light transition-colors inline-flex items-center gap-2">
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-navy section-padding">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Power Your Next Project?
        </h2>
        <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
          Contact our team today to discuss how More Power Systems can deliver reliable, turnkey power solutions for your data center.
        </p>
        <Link to="/contact" className="bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold hover:bg-orange-light transition-colors inline-flex items-center gap-2">
          Get in Touch <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
