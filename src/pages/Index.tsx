import { useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Globe, Heart, MessageCircle, Monitor, Users, Star, CheckCircle, Mail, Phone, MapPin, Clock, Shield, Zap, Target, Menu, Bot, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import ContactForm from "@/components/ContactForm";
import { SEO } from "@/components/SEO";
import MobileNavigation from "@/components/MobileNavigation";
import Footer from "@/components/Footer";
import {
  fadeInVariants,
  fadeInUpVariants,
  fadeInLeftVariants,
  fadeInRightVariants,
  staggerContainer,
  staggerItem,
  cardHoverVariants
} from "@/lib/motion";
import smilecareDentalImage from "@/assets/smilecare-dental.png";
import brightskinDermatologyImage from "@/assets/brightskin-dermatology.png";
import tasteJunctionCafeImage from "@/assets/taste-junctio-cafe.png";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO pageKey="home" />
      {/* Navigation */}
      <motion.nav
        className={`border-b border-border sticky top-0 z-50 transition-all duration-300 ${scrollY > 50
          ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm'
          : 'bg-transparent'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="/nextreach-logo.jpg"
              alt="NextReach Logo"
              className="w-10 h-10"
            />
            <span className="font-bold text-xl text-foreground">NextReach Studio</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/ai-agents" className="text-muted-foreground hover:text-primary transition-colors">AI Agents</a>
            <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            <Menu className="w-6 h-6" />
          </Button>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-subtle overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
              variants={fadeInUpVariants}
            >
              NextReach Studio — Custom AI Agents
              <motion.span
                className="block bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent"
                variants={fadeInUpVariants}
              >
                That Automate Your Business 24/7
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUpVariants}
            >
              We build intelligent AI agents that handle customer support, lead qualification, data processing, and workflows — custom automation designed for your business needs.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUpVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="hero" size="xl" className="group bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white" onClick={() => window.location.href = '/ai-agents'}>
                  Get Your AI Agent
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="xl" onClick={() => window.location.href = '/ai-agents#portfolio'}>
                  See AI Solutions
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose NextReach Studio */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Choose NextReach Studio</h2>
            <p className="text-lg text-muted-foreground">
              We specialize in custom AI automation that works 24/7. Here's what makes our AI agents different.
            </p>
          </motion.div>
          <motion.div
            className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div
              className="text-center"
              variants={staggerItem}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Bot className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">24/7 AI Automation</h3>
              <p className="text-muted-foreground">AI agents that work around the clock without breaks, handling support, sales, and operations automatically.</p>
            </motion.div>
            <motion.div
              className="text-center"
              variants={staggerItem}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">100% Custom Built</h3>
              <p className="text-muted-foreground">Every AI agent is tailored to your exact workflows. No templates, just solutions designed for your business needs.</p>
            </motion.div>
            <motion.div
              className="text-center"
              variants={staggerItem}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-highlight rounded-2xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Zap className="w-8 h-8 text-highlight-foreground" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Simple agents in 3-5 days, complex systems in 7-14 days. Live quickly, optimize continuously.</p>
            </motion.div>
            <motion.div
              className="text-center"
              variants={staggerItem}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Workflow className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Full Integration</h3>
              <p className="text-muted-foreground">Connect with CRMs, WhatsApp, email, databases, APIs—your AI agents work with your entire tech stack.</p>
            </motion.div>
            <motion.div
              className="text-center"
              variants={staggerItem}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Expert AI Team</h3>
              <p className="text-muted-foreground">Built by NextReach automation specialists with deep expertise in OpenAI, LangChain, and vector databases.</p>
            </motion.div>
            <motion.div
              className="text-center"
              variants={staggerItem}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-highlight rounded-2xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <CheckCircle className="w-8 h-8 text-highlight-foreground" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Ongoing Support</h3>
              <p className="text-muted-foreground">Continuous optimization and dedicated support to ensure your AI performs at its best.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI Solutions */}
      <section id="portfolio" className="py-24 bg-gradient-to-br from-background via-card-subtle to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">AI Solutions in Action</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real AI agents delivering 24/7 automation for businesses worldwide
            </p>
          </motion.div>
          <motion.div
            className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="group cursor-pointer border border-border/20 shadow-lg hover:shadow-xl transition-all h-full bg-white/50 backdrop-blur-sm hover:border-border/40">
                  <div className="overflow-hidden rounded-t-lg relative">
                    <motion.img
                      src={smilecareDentalImage}
                      alt="AI Customer Support Agent"
                      className="w-full h-56 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold text-foreground mb-3">AI Customer Support Agent</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">WhatsApp chatbot handling 500+ inquiries/month → 85% automated resolution rate, 24/7 availability.</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-auto">
                      <Target className="w-4 h-4 mr-2" />
                      <span>E-commerce Business</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div variants={staggerItem}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="group cursor-pointer border border-border/20 shadow-lg hover:shadow-xl transition-all h-full bg-white/50 backdrop-blur-sm hover:border-border/40">
                  <div className="overflow-hidden rounded-t-lg relative">
                    <motion.img
                      src={brightskinDermatologyImage}
                      alt="Lead Qualification System"
                      className="w-full h-56 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Lead Qualification System</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">Multi-agent CRM automation → 3x faster lead scoring, 40% increase in qualified conversions.</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-auto">
                      <Target className="w-4 h-4 mr-2" />
                      <span>SaaS Company</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div variants={staggerItem}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="group cursor-pointer border border-border/20 shadow-lg hover:shadow-xl transition-all h-full bg-white/50 backdrop-blur-sm hover:border-border/40">
                  <div className="overflow-hidden rounded-t-lg relative">
                    <motion.img
                      src={tasteJunctionCafeImage}
                      alt="Document Processing AI"
                      className="w-full h-56 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Document Processing AI</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">Automated data extraction from invoices → 10 hours/week saved, 99.2% accuracy rate.</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-auto">
                      <Target className="w-4 h-4 mr-2" />
                      <span>Finance Team</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-background via-card-subtle to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUpVariants}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">About NextReach</h2>
              <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                <p>
                  At NextReach Studio, we build custom AI agents that transform how businesses operate. From customer support automation to intelligent lead qualification, our AI solutions work 24/7 to help your business scale efficiently.
                </p>
                <p>
                  Our team specializes in creating tailored AI automation systems using cutting-edge technologies like OpenAI, LangChain, and vector databases. Every AI agent we build is designed specifically for your workflows, ensuring maximum impact and ROI.
                </p>
                <p>
                  We've partnered with e-commerce businesses, SaaS companies, and teams across industries to deliver AI agents that save time, reduce costs, and handle complex tasks with precision and reliability.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-blue-500 via-emerald-500 to-green-500 p-8 md:p-12 rounded-3xl text-white shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUpVariants}
            >
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h3>
                <p className="text-xl md:text-2xl leading-relaxed text-white/95">
                  To empower businesses worldwide with intelligent AI automation that works 24/7, making advanced AI technology accessible and impactful for companies of all sizes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-brand text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Custom AI Agent?</h2>
            <p className="text-xl text-white/90">
              Let's create intelligent AI automation that works 24/7 for your business. Get in touch today to discuss your custom AI solution!
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-0 bg-white/10 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Start Your Project</CardTitle>
                  <CardDescription className="text-white/80">We'll provide a detailed proposal within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm compact={true} />
                </CardContent>
              </Card>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">Call us</div>
                        <div className="text-white/80">+91 98765 43210</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">Email us</div>
                        <div className="text-white/80">admin@nextreachstudio.com</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">WhatsApp</div>
                        <div className="text-white/80">+91 98765 43210</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
                  <h4 className="text-xl font-bold mb-4">24/7 AI Automation</h4>
                  <p className="text-white/80">
                    We build custom AI agents for businesses worldwide, delivering intelligent automation that handles customer support, lead qualification, data processing, and complex workflows around the clock.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Mobile Navigation */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onToggle={toggleMobileMenu}
        onClose={closeMobileMenu}
      />
    </div>
  );
};

export default Index;