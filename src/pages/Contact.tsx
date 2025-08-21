import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageCircle, Send, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import ContactForm from "@/components/ContactForm";
import MobileNavigation from "@/components/MobileNavigation";

const Contact = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91-9876543210",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      value: "hello@nextreach.in",
      description: "Send us your requirements"
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Pune & Mumbai",
      description: "Serving businesses across Maharashtra"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 2 Hours",
      description: "Quick response to all inquiries"
    }
  ];

  const locations = [
    {
      city: "Pune",
      address: "Koregaon Park, Pune - 411001",
      phone: "+91-9876543210",
      email: "pune@nextreach.in",
      areas: "Koregaon Park, FC Road, Shivaji Nagar, Viman Nagar, Hinjewadi"
    },
    {
      city: "Mumbai",
      address: "Bandra West, Mumbai - 400050",
      phone: "+91-9876543210",
      email: "mumbai@nextreach.in",
      areas: "Bandra, Colaba, Andheri, Powai, Thane, Navi Mumbai"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
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
            <a href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
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
          <Button className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white" size="sm" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Get Started <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Get In <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with a professional website? Contact us for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-card-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-foreground mb-1">{info.value}</div>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Locations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div id="contact-form">
              <Card className="border-0 shadow-lg bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Send Us a Message</CardTitle>
                  <CardDescription className="text-white/90">
                    Fill out the form below and we'll get back to you within 2 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Locations</h3>
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl">{location.city} Office</CardTitle>
                      <CardDescription>Serving {location.city} and surrounding areas</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5" />
                          <div>
                            <div className="font-medium">{location.address}</div>
                            <div className="text-sm text-muted-foreground">{location.areas}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-5 h-5 text-primary mr-3" />
                          <a href={`tel:${location.phone}`} className="text-primary hover:underline">
                            {location.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-5 h-5 text-primary mr-3" />
                          <a href={`mailto:${location.email}`} className="text-primary hover:underline">
                            {location.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-0 shadow-lg mt-6">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2 text-primary" />
                    Quick Contact Options
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp: +91-9876543210
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => window.location.href = 'tel:+919876543210'}
                  >
                    <Phone className="w-4 h-4 mr-2" /> Call Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => window.location.href = 'mailto:hello@nextreach.in'}
                  >
                    <Mail className="w-4 h-4 mr-2" /> Email Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join 150+ businesses in Pune and Mumbai who trust NextReach for their web design needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" onClick={() => window.location.href = 'tel:+919876543210'}>
                <Phone className="w-4 h-4 mr-2" /> Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                <Mail className="w-4 h-4 mr-2" /> Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
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
        </div>
      </footer>
      
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