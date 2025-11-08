import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
                <span className="text-xl font-bold text-accent-foreground">T+</span>
              </div>
              <span className="text-xl font-bold">
                Think<span className="text-accent">Plus</span>
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Empowering students to excel in MBA entrance exams and achieve their career goals through expert guidance and comprehensive training.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm hover:text-accent transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  Pune, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="tel:+919876543210" className="text-sm hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="mailto:info@thinkplus.edu" className="text-sm hover:text-accent transition-colors">
                  info@thinkplus.edu
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/thinkpluseducation/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@ThinkplusMBA"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-primary-foreground/60 mt-6">
              Join our community of successful students and transform your career journey with ThinkPlus.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} ThinkPlus Education. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
