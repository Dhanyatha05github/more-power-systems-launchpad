import Layout from "@/components/Layout";
import aboutTeam from "@/assets/about-team.jpg";
import { Target, Eye, Award, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Mission", desc: "To deliver innovative, safe, and reliable oil & gas solutions that exceed client expectations while upholding the highest industry standards." },
  { icon: Eye, title: "Vision", desc: "To be the global leader in oil & gas services, setting benchmarks for quality, safety, and technological excellence." },
  { icon: Award, title: "Quality", desc: "ISO-certified processes and rigorous quality control at every stage ensure consistent excellence in all our deliverables." },
  { icon: Users, title: "People", desc: "Our team of 150+ skilled professionals brings diverse expertise and a shared commitment to safety and innovation." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-navy section-padding text-center">
      <div className="container mx-auto">
        <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">About Us</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Two Decades of Energy Excellence
        </h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">
          Since 2003, More Power Systems has been at the forefront of the oil & gas industry, providing comprehensive solutions to operators across 30+ countries.
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">Our Story</p>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Built on Trust & Expertise</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Founded in Houston, Texas, More Power Systems began as a small equipment supplier and has grown into a full-service oil & gas solutions provider. Our journey is defined by a relentless pursuit of excellence and a deep commitment to our clients' success.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today, we operate across the entire oil & gas value chain — from upstream exploration to downstream refining — offering equipment supply, maintenance, engineering, and pipeline services that meet the most demanding operational requirements.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src={aboutTeam} alt="Our team in meeting" className="w-full h-auto object-cover" width={1200} height={600} loading="lazy" />
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">Our Values</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">What Drives Us</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card rounded-lg p-6 card-hover shadow-sm text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon size={28} className="text-orange" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2 text-lg">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
