import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageCircle, Send, Menu, Star, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import ContactForm from "@/components/ContactForm";
import { SEO } from "@/components/SEO";
import MobileNavigation from "@/components/MobileNavigation";
import { motion } from "motion/react";
import Footer from "@/components/Footer";

const Contact = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91-9876543210",
      description: "Call us for immediate assistance",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      value: "admin@nextreachstudio.com",
      description: "Send us your requirements",
      color: "from-green-400 to-green-600"
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Pune & Mumbai",
      description: "Serving businesses across Maharashtra",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 2 Hours",
      description: "Quick response to all inquiries",
      color: "from-orange-400 to-orange-600"
    }
  ];

  const locations = [
    {
      city: "Pune",
      address: "Koregaon Park, Pune - 411001",
      phone: "+91-9876543210",
      email: "admin@nextreachstudio.com",
      areas: "Koregaon Park, FC Road, Shivaji Nagar, Viman Nagar, Hinjewadi"
    },
    {
      city: "Mumbai",
      address: "Bandra West, Mumbai - 400050",
      phone: "+91-9876543210",
      email: "admin@nextreachstudio.com",
      areas: "Bandra, Colaba, Andheri, Powai, Thane, Navi Mumbai"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO pageKey="contact" />
      {/* Navigation */}
      <motion.nav 
        className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
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
             <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
             <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
             <a href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
             <a href="/contact" className="text-primary font-medium">Contact</a>
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
            <Button className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white" size="sm" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-background via-card-subtle to-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-foreground mb-8"
              variants={staggerItem}
            >
              Get In <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">Touch</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
              variants={staggerItem}
            >
              Ready to transform your business with a professional website? Contact us for a free consultation and let's discuss your project.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              variants={staggerItem}
            >
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">2 Hour Response</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">No Hidden Costs</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-card-subtle">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={staggerItem}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm text-center h-full group">
                    <CardHeader>
                      <div className={`w-20 h-20 bg-gradient-to-r ${info.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-10 h-10 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xl font-semibold text-foreground mb-3">{info.value}</div>
                      <p className="text-muted-foreground">{info.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Locations */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            {/* Contact Form */}
            <motion.div id="contact-form" variants={staggerItem}>
              <Card className="border-0 shadow-2xl bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 overflow-hidden">
                <div className="absolute inset-0 bg-black/5"></div>
                <CardHeader className="relative">
                  <CardTitle className="text-3xl text-white mb-2">Send Us a Message</CardTitle>
                  <CardDescription className="text-white/90 text-lg">
                    Fill out the form below and we'll get back to you within 2 hours with a detailed proposal.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>

            {/* Locations */}
            <motion.div variants={staggerItem}>
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-foreground mb-6">Our Locations</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  We serve businesses across Pune, Mumbai, and surrounding areas with local expertise and understanding.
                </p>
              </div>
              <div className="space-y-8">
                {locations.map((location, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-2xl flex items-center">
                          <MapPin className="w-6 h-6 mr-3 text-primary" />
                          {location.city} Office
                        </CardTitle>
                        <CardDescription className="text-lg">Serving {location.city} and surrounding areas</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <MapPin className="w-5 h-5 text-primary mr-3 mt-1" />
                            <div>
                              <div className="font-medium text-lg">{location.address}</div>
                              <div className="text-muted-foreground">{location.areas}</div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-5 h-5 text-primary mr-3" />
                            <a href={`tel:${location.phone}`} className="text-primary hover:underline text-lg font-medium">
                              {location.phone}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Mail className="w-5 h-5 text-primary mr-3" />
                            <a href={`mailto:${location.email}`} className="text-primary hover:underline text-lg font-medium">
                              {location.email}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center">
                        <MessageCircle className="w-6 h-6 mr-3 text-primary" />
                        Quick Contact Options
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-lg py-3"
                        onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                      >
                        <MessageCircle className="w-5 h-5 mr-3" /> WhatsApp: +91-9876543210
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-lg py-3"
                        onClick={() => window.location.href = 'tel:+919876543210'}
                      >
                        <Phone className="w-5 h-5 mr-3" /> Call Now for Free Consultation
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-lg py-3"
                        onClick={() => window.location.href = 'mailto:admin@nextreachstudio.com'}
                      >
                        <Mail className="w-5 h-5 mr-3" /> Email Us Directly
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join 200+ businesses in Pune and Mumbai who trust NextReach for their web design needs. Get your free consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3" onClick={() => window.location.href = 'tel:+919876543210'}>
                  <Phone className="w-5 h-5 mr-2" /> Free Consultation
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Mail className="w-5 h-5 mr-2" /> Get Quote
                </Button>
              </motion.div>
            </div>
          </motion.div>
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

export default Contact;