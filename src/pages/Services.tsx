import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import serviceEquipment from "@/assets/service-equipment.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceEngineering from "@/assets/service-engineering.jpg";
import servicePipeline from "@/assets/service-pipeline.jpg";

const services = [
  {
    title: "Oil & Gas Equipment Supply",
    img: serviceEquipment,
    desc: "We supply a comprehensive range of premium-grade equipment for upstream, midstream, and downstream operations.",
    points: ["Wellhead & Christmas Tree Systems", "Pumps, Compressors & Turbines", "Valves, Flanges & Fittings", "Instrumentation & Control Systems"],
  },
  {
    title: "Maintenance Services",
    img: serviceMaintenance,
    desc: "Our maintenance programs are designed to maximize equipment uptime, extend asset life, and ensure operational safety.",
    points: ["Preventive & Predictive Maintenance", "Turnaround & Shutdown Support", "Condition Monitoring", "Emergency Repair Services"],
  },
  {
    title: "Engineering Solutions",
    img: serviceEngineering,
    desc: "Our multi-disciplinary engineering teams deliver tailored solutions from concept through commissioning.",
    points: ["Process & Mechanical Design", "FEED & Detailed Engineering", "Project Management & EPCM", "Feasibility & Risk Assessment"],
  },
  {
    title: "Pipeline Services",
    img: servicePipeline,
    desc: "Complete pipeline lifecycle services from new construction to integrity management and rehabilitation.",
    points: ["Pipeline Construction & Installation", "Pigging & Flow Assurance", "Integrity Assessment & Repair", "Cathodic Protection Systems"],
  },
];

const Services = () => (
  <Layout>
    <section className="bg-navy section-padding text-center">
      <div className="container mx-auto">
        <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">Our Services</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Comprehensive Oil & Gas Solutions
        </h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">
          From equipment supply to pipeline construction, we offer end-to-end services that keep your operations running safely and efficiently.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto space-y-20">
        {services.map((s, i) => (
          <div key={s.title} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
            <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 size={18} className="text-orange shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`rounded-lg overflow-hidden shadow-lg ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
              <img src={s.img} alt={s.title} className="w-full h-72 object-cover" width={800} height={600} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-navy section-padding">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Need a Custom Solution?</h2>
        <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
          Our team is ready to design a tailored solution for your specific operational requirements.
        </p>
        <Link to="/contact" className="bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold hover:bg-orange-light transition-colors inline-flex items-center gap-2">
          Request a Quote <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Services;
