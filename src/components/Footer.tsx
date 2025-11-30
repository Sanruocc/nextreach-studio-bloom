import { motion } from "motion/react";
import { Bot, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
                  NextReach Studio
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Custom AI agents that automate your business operations, support, and workflows — built by automation specialists.
              </p>
            </div>

            {/* AI Solutions */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">AI Solutions</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/ai-agents" className="hover:text-primary transition-colors flex items-center">
                    Custom AI Agents
                  </a>
                </li>
                <li>
                  <a href="/ai-agents#chatbots" className="hover:text-primary transition-colors">
                    AI Chatbots
                  </a>
                </li>
                <li>
                  <a href="/ai-agents#automation" className="hover:text-primary transition-colors">
                    Workflow Automation
                  </a>
                </li>
                <li>
                  <a href="/ai-agents#multi-agent" className="hover:text-primary transition-colors">
                    Multi-Agent Systems
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/about" className="hover:text-primary transition-colors">
                    About NextReach
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/ai-agents#portfolio" className="hover:text-primary transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Get Started</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-green-600 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                      <MessageCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span>WhatsApp Chat</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:admin@nextreachstudio.com"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-blue-600 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                    <span>Email Us</span>
                  </a>
                </li>
                <li className="text-muted-foreground pt-2">
                  <p className="text-xs">Available 9AM-7PM IST</p>
                  <p className="text-xs">🇷🇴 Romania • 🇵🇱 Poland • 🇲🇾 Malaysia</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground mb-4 md:mb-0">
                © 2025 NextReach Studio. Custom AI Agents & Automation Specialists.
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
