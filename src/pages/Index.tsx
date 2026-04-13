import { Link } from "react-router-dom";
import { Shield, Wrench, Lightbulb, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import serviceEquipment from "@/assets/service-equipment.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceEngineering from "@/assets/service-engineering.jpg";
import servicePipeline from "@/assets/service-pipeline.jpg";

const services = [
  { title: "Oil & Gas Equipment Supply", desc: "Premium industrial equipment and parts for upstream, midstream, and downstream operations.", img: serviceEquipment },
  { title: "Maintenance Services", desc: "Comprehensive preventive and corrective maintenance to maximize equipment uptime.", img: serviceMaintenance },
  { title: "Engineering Solutions", desc: "Custom engineering design, consulting, and project management for complex operations.", img: serviceEngineering },
  { title: "Pipeline Services", desc: "End-to-end pipeline construction, inspection, and rehabilitation services.", img: servicePipeline },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "150+", label: "Expert Engineers" },
  { value: "30+", label: "Countries Served" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center">
      <img src={heroBg} alt="Oil refinery at sunset" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 hero-overlay" />
      <div className="container mx-auto relative z-10 px-4">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="text-orange font-semibold mb-3 text-sm uppercase tracking-widest">Trusted Oil & Gas Partner</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Powering the Future of <span className="text-gradient">Energy</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
            More Power Systems delivers world-class equipment, maintenance, and engineering solutions for the oil & gas industry worldwide.
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

    {/* Stats */}
    <section className="bg-navy py-12">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label} className="animate-fade-in-up">
            <p className="font-heading text-3xl md:text-4xl font-bold text-orange">{s.value}</p>
            <p className="text-primary-foreground/70 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* About Preview */}
    <section className="section-padding">
      <div className="container mx-auto text-center max-w-3xl">
        <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">Who We Are</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
          Excellence in Oil & Gas Solutions
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          With over two decades of experience, More Power Systems has established itself as a trusted partner in the global oil and gas sector. We combine technical expertise with innovative solutions to deliver unmatched value to our clients.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: Shield, text: "Safety First" },
            { icon: Wrench, text: "Expert Team" },
            { icon: Lightbulb, text: "Innovation" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 bg-secondary px-5 py-3 rounded-lg">
              <Icon size={20} className="text-orange" />
              <span className="font-medium text-foreground text-sm">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Preview */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-lg overflow-hidden card-hover shadow-sm">
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
          Contact our team today to discuss how More Power Systems can deliver reliable, efficient solutions for your oil & gas operations.
        </p>
        <Link to="/contact" className="bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold hover:bg-orange-light transition-colors inline-flex items-center gap-2">
          Get in Touch <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
