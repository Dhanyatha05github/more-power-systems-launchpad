import Layout from "@/components/Layout";
import aboutTeam from "@/assets/about-team.jpg";
import { Target, Eye, Award, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Mission", desc: "Deliver complete, turnkey diesel generator solutions engineered for the high-stakes demands of the North American data center market — ensuring critical infrastructure never goes dark." },
  { icon: Eye, title: "Vision", desc: "To become the premier provider of engineered diesel generator systems across North America — renowned for unmatched speed, customer focus, and complete power solutions." },
  { icon: Award, title: "Quality", desc: "World-class generator manufacturing partnerships and best-in-class component suppliers ensure precision engineering at every level." },
  { icon: Users, title: "Customer Focus", desc: "Obsessive customer focus and seamless integration so our clients receive precisely the power they need — when they need it." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-navy section-padding text-center">
      <div className="container mx-auto">
        <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">About Us</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Engineered Power, Built on Decades of Expertise
        </h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">
          The US Sales and Service arm of Sterling Green Power Solution — combining advanced engineering with a decades-old manufacturing base.
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">Our Story</p>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Built on Engineering Excellence</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            More Power Systems is the US Sales and Service arm of Sterling Green Power Solution. We bring advanced engineering and technology to a decades-old manufacturing base, designing and delivering Diesel Gensets to the highest quality standards.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Through strategic partnerships with a world-class generator manufacturer and component suppliers, we combine best-in-class lead times, obsessive customer focus, and seamless integration to keep North America's most critical data centers running without interruption.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src={aboutTeam} alt="Power systems engineering team" className="w-full h-auto object-cover" width={1200} height={600} loading="lazy" />
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
