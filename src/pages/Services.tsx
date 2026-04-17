import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import serviceEquipment from "@/assets/service-equipment.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";

const services = [
  {
    title: "Diesel Generators",
    img: serviceEquipment,
    desc: "Powering global infrastructure with tailored Genset solutions. Drawing on decades of experience, we design and manufacture Diesel Gensets to the highest quality standards — continuously innovating to deliver exceptional performance and reliability.",
    points: ["Standby power from 1000 kW to 3300 kW", "HPCR fuel system with ECU governing", "ISO:8528-5 Class G3 compliance", "Engineered for data center duty"],
  },
  {
    title: "Service & Maintenance",
    img: serviceMaintenance,
    desc: "Delivering reliable, long-term performance through professional service and maintenance. With decades of hands-on experience, we provide fast-response support, genuine parts, and expert care for Diesel Gensets — ensuring your critical power infrastructure stays operational at all times.",
    points: ["Fast-response field support", "Genuine OEM parts", "Preventive maintenance programs", "24/7 emergency response"],
  },
];

const generatorModels = [
  { model: "MPS1000D6T2", engine: "12M33G8D2/6", kw: "1000", kva: "1250", disp: "39.2", fuel: "HPCR", gov: "ECU", cls: "G3" },
  { model: "MPS1250D6T2", engine: "12M33G12D2/6", kw: "1250", kva: "1563", disp: "39.2", fuel: "HPCR", gov: "ECU", cls: "G3" },
  { model: "MPS2500D6T2", engine: "12M55G5D2/6", kw: "2500", kva: "3125", disp: "65.7", fuel: "HPCR", gov: "ECU", cls: "G3" },
  { model: "MPS2800D6T2", engine: "16M55G4D2/6", kw: "2800", kva: "3500", disp: "87.5", fuel: "HPCR", gov: "ECU", cls: "G3" },
  { model: "MPS3100D6T2", engine: "16M55G6D2/6", kw: "3100", kva: "3875", disp: "87.5", fuel: "HPCR", gov: "ECU", cls: "G3" },
  { model: "MPS3300D6T2", engine: "16M55G8D2/6", kw: "3300", kva: "4125", disp: "87.5", fuel: "HPCR", gov: "ECU", cls: "G3" },
];

const Services = () => (
  <Layout>
    <section className="bg-navy section-padding text-center">
      <div className="container mx-auto">
        <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">Our Services</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Complete Diesel Generator Solutions
        </h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">
          From manufacturing to long-term service, we deliver end-to-end power solutions engineered for mission-critical environments.
        </p>
      </div>
    </section>

    {/* Our Services - WHITE background */}
    <section className="section-padding bg-background">
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

    {/* Generator Models Table */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">Product Range</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Generator Models</h2>
        </div>
        <div className="overflow-x-auto rounded-lg shadow-sm bg-card border border-border">
          <table className="w-full text-sm text-left">
            <thead className="bg-navy text-primary-foreground">
              <tr>
                <th className="px-4 py-3 font-heading">Model</th>
                <th className="px-4 py-3 font-heading">Engine Model</th>
                <th className="px-4 py-3 font-heading">Standby kW</th>
                <th className="px-4 py-3 font-heading">Standby kVA</th>
                <th className="px-4 py-3 font-heading">Displacement (L)</th>
                <th className="px-4 py-3 font-heading">Fuel System</th>
                <th className="px-4 py-3 font-heading">Governor</th>
                <th className="px-4 py-3 font-heading">Class (ISO:8528-5)</th>
              </tr>
            </thead>
            <tbody>
              {generatorModels.map((g, i) => (
                <tr key={g.model} className={i % 2 === 0 ? "bg-card" : "bg-secondary/40"}>
                  <td className="px-4 py-3 font-semibold text-foreground">{g.model}</td>
                  <td className="px-4 py-3 text-muted-foreground">{g.engine}</td>
                  <td className="px-4 py-3 text-muted-foreground">{g.kw}</td>
                  <td className="px-4 py-3 text-muted-foreground">{g.kva}</td>
                  <td className="px-4 py-3 text-muted-foreground">{g.disp}</td>
                  <td className="px-4 py-3 text-muted-foreground">{g.fuel}</td>
                  <td className="px-4 py-3 text-muted-foreground">{g.gov}</td>
                  <td className="px-4 py-3 text-muted-foreground">{g.cls}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-navy section-padding">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Need a Custom Solution?</h2>
        <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
          Our team is ready to design a tailored generator solution for your specific data center requirements.
        </p>
        <Link to="/contact" className="bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold hover:bg-orange-light transition-colors inline-flex items-center gap-2">
          Request a Quote <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Services;
