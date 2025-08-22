import { useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Globe, Heart, MessageCircle, Monitor, Users, Star, CheckCircle, Mail, Phone, MapPin, Clock, Shield, Zap, Target, Menu } from "lucide-react";
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
        className={`border-b border-border sticky top-0 z-50 transition-all duration-300 ${
          scrollY > 50 
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
            <span className="font-bold text-xl text-foreground">NextReach</span>
          </div>
                     <div className="hidden md:flex items-center space-x-8">
             <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
             <a href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
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
              NextReach — Professional Websites
              <motion.span 
                className="block bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent"
                variants={fadeInUpVariants}
              >
                That Build Trust & Bring Customers
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUpVariants}
            >
              We design fast, mobile-first, and SEO-ready websites for clinics, shops, and service providers in Pune, Mumbai, and beyond.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUpVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="hero" size="xl" className="group bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get Your Website Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="xl" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                  View Our Work
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose NextReach */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Choose NextReach</h2>
            <p className="text-lg text-muted-foreground">
              We understand the unique needs of local businesses in Pune and Mumbai. Here's what sets us apart.
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
                <Monitor className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Mobile-First, Always</h3>
              <p className="text-muted-foreground">Over 80% of searches in India are on phones. Your site will look perfect on every device.</p>
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
              <h3 className="text-xl font-semibold text-foreground mb-2">Proven for Local Businesses</h3>
              <p className="text-muted-foreground">From doctors to retailers, we know how to design websites that bring in foot traffic and appointments.</p>
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
              <h3 className="text-xl font-semibold text-foreground mb-2">SEO-Ready</h3>
              <p className="text-muted-foreground">Show up when people search "clinic near me" or "best store in Mumbai."</p>
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
                <Clock className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Fast & Reliable</h3>
              <p className="text-muted-foreground">Lightweight builds that load quickly, even on 4G.</p>
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
              <h3 className="text-xl font-semibold text-foreground mb-2">Clear Pricing</h3>
              <p className="text-muted-foreground">Transparent packages, no hidden costs.</p>
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
                <MapPin className="w-8 h-8 text-highlight-foreground" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Local Expertise</h3>
              <p className="text-muted-foreground">Deep understanding of Pune and Mumbai markets and customer behavior.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="portfolio" className="py-24 bg-gradient-to-br from-background via-card-subtle to-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Projects</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real results for businesses across Pune and Mumbai
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
                      alt="SmileCare Dental Clinic" 
                      className="w-full h-56 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold text-foreground mb-3">SmileCare Dental Clinic</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">Mobile-first website with appointment booking → 65% increase in online appointments within 2 months.</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-auto">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Koregaon Park, Pune</span>
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
                      alt="BrightSkin Dermatology Clinic" 
                      className="w-full h-56 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold text-foreground mb-3">BrightSkin Dermatology</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">Comprehensive multi-page website → now ranking top 3 for "dermatologist Pune" with 340% traffic increase.</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-auto">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Koregaon Park, Pune</span>
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
                      alt="Taste Junction Café" 
                      className="w-full h-56 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Taste Junction Café</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">Visual-heavy website with WhatsApp integration → online orders doubled with 250% increase in inquiries.</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-auto">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Bandra, Mumbai</span>
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
                  At NextReach, we design websites that help local businesses stand out and grow. From clinics in Pune to cafés in Mumbai, our work speaks for itself — fast, mobile-first, and SEO-optimized websites that convert visitors into real customers.
                </p>
                <p>
                  Our team understands the digital behavior of Indian audiences. That's why every site we build focuses on what matters most: quick load times, simple navigation, and clear calls-to-action that turn searches into sales.
                </p>
                <p>
                  We've partnered with healthcare providers, retailers, and service businesses across Pune and Mumbai to create professional websites that inspire trust and deliver measurable results.
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
                  To be the trusted digital partner for local businesses, making high-quality web design accessible and impactful across India.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Clear Pricing</h2>
            <p className="text-lg text-muted-foreground">
              Transparent packages for Pune and Mumbai businesses. No hidden costs.
            </p>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl text-foreground mb-2">Starter</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">₹9,999</div>
                  <CardDescription className="text-sm">Perfect for new businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      1-3 pages
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      Mobile-first design
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      Basic SEO
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      Contact forms
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full text-sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary shadow-xl hover:shadow-2xl transition-shadow relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </div>
                <CardHeader className="text-center pb-4 pt-6">
                  <CardTitle className="text-xl text-foreground mb-2">Professional</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">₹16,999</div>
                  <CardDescription className="text-sm">Great for growing businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      4-5 pages
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      Advanced SEO
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      Google Maps integration
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      Appointment booking
                    </li>
                  </ul>
                  <Button variant="cta" className="w-full text-sm bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl text-foreground mb-2">Premium</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">₹24,999</div>
                  <CardDescription className="text-sm">Complete business solution</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      6-7 pages
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      Advanced SEO & analytics
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      Online booking system
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      1 month support
                    </li>
                  </ul>
                  <Button variant="accent" className="w-full text-sm bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl text-foreground">Custom</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">₹35,000+</div>
                  <CardDescription className="text-sm">Tailored for large businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      8+ pages
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      Custom features
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      Advanced integrations
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      Extended support
                    </li>
                  </ul>
                  <Button variant="default" className="w-full text-sm bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-brand text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
            <p className="text-xl text-white/90">
              Let's create a professional website that brings more customers to your Pune or Mumbai business. Get in touch today!
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
                  <h4 className="text-xl font-bold mb-4">Serving Pune & Mumbai</h4>
                  <p className="text-white/80">
                    We specialize in helping local businesses across Pune, Mumbai, and surrounding areas grow their online presence with professional websites that deliver real results.
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