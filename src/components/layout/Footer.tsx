import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface FooterProps {
  contactEmail?: string;
  contactPhone?: string;
  contactAddress?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
}

const Footer = ({
  contactEmail = "contact@voiceoverartist.com",
  contactPhone = "+1 (555) 123-4567",
  contactAddress = "123 Voice Studio, Los Angeles, CA 90001",
  socialLinks = {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
}: FooterProps) => {
  return (
    <footer className="bg-slate-900 text-white py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a
                  href={`mailto:${contactEmail}`}
                  className="hover:text-amber-400 transition-colors"
                >
                  {contactEmail}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a
                  href={`tel:${contactPhone}`}
                  className="hover:text-amber-400 transition-colors"
                >
                  {contactPhone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1" />
                <span>{contactAddress}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/portfolio"
                  className="hover:text-amber-400 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/order"
                  className="hover:text-amber-400 transition-colors"
                >
                  Book Now
                </a>
              </li>
              <li>
                <a
                  href="/clients"
                  className="hover:text-amber-400 transition-colors"
                >
                  Clients
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-amber-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-amber-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="hover:text-amber-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/cookie-policy"
                  className="hover:text-amber-400 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-4">
              Subscribe to my newsletter for voice over tips and updates.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-slate-800 border-slate-700 text-white"
              />
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
              >
                <Facebook size={24} />
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
              >
                <Twitter size={24} />
              </a>
            )}
            {socialLinks.youtube && (
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
              >
                <Youtube size={24} />
              </a>
            )}
          </div>
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Voice Over Artist. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
