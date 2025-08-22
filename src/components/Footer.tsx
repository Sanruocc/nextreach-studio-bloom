import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/nextreach-logo.jpg"
                  alt="NextReach Logo"
                  className="w-8 h-8"
                />
                <span className="font-bold text-lg text-foreground">NextReach</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional websites for Pune and Mumbai businesses that build trust and bring customers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">What We Do</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Professional Websites</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Mobile-First Design</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Local Business Focus</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Locations</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Pune</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Mumbai</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+91 98765 43210</li>
                <li>admin@nextreachstudio.com</li>
                <li>Available 9AM-7PM IST</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                             <p className="text-sm text-muted-foreground mb-4 md:mb-0">
                 © 2025 NextReach. Professional websites for Pune and Mumbai businesses.
               </p>
              <div className="flex space-x-6 text-sm text-muted-foreground">
                <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
