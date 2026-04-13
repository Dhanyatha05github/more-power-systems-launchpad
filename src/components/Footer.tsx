import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="container mx-auto section-padding pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center">
              <span className="font-heading text-lg font-bold text-accent-foreground">M</span>
            </div>
            <div>
              <span className="font-heading text-lg font-bold tracking-wide">MORE POWER</span>
              <span className="block text-xs text-orange font-medium -mt-1">SYSTEMS</span>
            </div>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Leading provider of oil & gas equipment supply, maintenance, engineering solutions, and pipeline services with over 20 years of industry experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-primary-foreground/70 text-sm hover:text-orange transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-orange shrink-0" />
              123 Industrial Boulevard, Houston, TX 77001
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-orange shrink-0" />
              +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-orange shrink-0" />
              info@morepowersystems.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} More Power Systems. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
