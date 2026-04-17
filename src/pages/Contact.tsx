import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="bg-navy section-padding text-center">
        <div className="container mx-auto">
          <p className="text-orange font-semibold text-sm uppercase tracking-widest mb-2">Get In Touch</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Have a question or need a quote? Our team is ready to assist you with your power infrastructure needs.
          </p>
        </div>
      </section>

      {/* Contact - WHITE background */}
      <section className="section-padding bg-background">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button type="submit" className="bg-accent text-accent-foreground px-7 py-3 rounded-md font-semibold hover:bg-orange-light transition-colors w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Company Details</h2>
            <div className="space-y-6 mb-8">
              {[
                { icon: MapPin, label: "USA Office", value: "Dallas, TX – USA" },
                { icon: MapPin, label: "UAE Office", value: "Dubai, UAE" },
                { icon: Mail, label: "Email", value: "info@morepowersystems.com" },
                { icon: Clock, label: "Business Hours", value: "Mon – Fri: 8:00 AM – 6:00 PM CST" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{label}</p>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps embed - Dallas, TX */}
            <div className="rounded-lg overflow-hidden border border-border h-64">
              <iframe
                title="Dallas, TX office location"
                src="https://www.google.com/maps?q=Dallas,Texas,USA&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
