import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="container mx-auto section-padding pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Company Info */}
        <div>
          <img src={logo} alt="More Power Systems logo" className="h-14 w-auto bg-white rounded-md p-1 mb-4" />
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            The US Sales and Service arm of Sterling Green Power Solution — delivering turnkey diesel generator solutions for North America's most critical data centers.
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

        {/* Locations */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Locations</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-orange shrink-0" />
              Dallas, TX – USA
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-orange shrink-0" />
              Dubai, UAE
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
