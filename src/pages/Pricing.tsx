import { useState } from "react";
import { ArrowRight, Check, Star, Phone, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MobileNavigation from "@/components/MobileNavigation";

const Pricing = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const plans = [
    {
      name: "Starter",
      price: "₹15,000",
      period: "one-time",
      description: "Perfect for small clinics and local businesses",
      features: [
        "5-7 Professional Pages",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Contact Form",
        "Google Maps Integration",
        "1 Month Support",
        "Hosting Setup",
        "SSL Certificate"
      ],
      popular: false,
      bestFor: "Individual Doctors, Small Shops"
    },
    {
      name: "Professional",
      price: "₹35,000",
      period: "one-time",
      description: "Ideal for growing businesses and multi-specialty clinics",
      features: [
        "10-15 Custom Pages",
        "Advanced SEO Package",
        "Online Booking System",
        "Photo Gallery",
        "Blog Integration",
        "3 Months Support",
        "Analytics Setup",
        "Social Media Integration",
        "Email Newsletter Setup",
        "Speed Optimization"
      ],
      popular: true,
      bestFor: "Multi-specialty Clinics, Restaurants, Retail"
    },
    {
      name: "Premium",
      price: "₹75,000",
      period: "one-time",
      description: "Complete solution for established businesses",
      features: [
        "Unlimited Pages",
        "Custom Design System",
        "Advanced Booking & CRM",
        "E-commerce Integration",
        "Patient/Customer Portal",
        "6 Months Support",
        "Marketing Automation",
        "Multi-language Support",
        "Advanced Analytics",
        "Custom Integrations",
        "Training & Documentation",
        "Priority Support"
      ],
      popular: false,
      bestFor: "Hospitals, Large Retail Chains, Multi-location Businesses"
    }
  ];

  const addOns = [
    {
      name: "Monthly Maintenance",
      price: "₹3,000/month",
      description: "Regular updates, security patches, and content updates"
    },
    {
      name: "Local SEO Package",
      price: "₹5,000/month",
      description: "Google My Business optimization, local citations, review management"
    },
    {
      name: "Content Marketing",
      price: "₹8,000/month",
      description: "Blog posts, social media content, email newsletters"
    },
    {
      name: "Google Ads Management",
      price: "₹7,000/month",
      description: "Campaign setup, optimization, and monthly reporting"
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
          <Button className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white" size="sm" onClick={() => window.location.href = '/contact'}>
            Get Started <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Transparent <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Simple, transparent pricing for businesses in Pune and Mumbai. No hidden fees, just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white" onClick={() => window.location.href = '/contact'}>
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = 'tel:+919876543210'}>
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`border-0 shadow-lg relative ${plan.popular ? 'ring-2 ring-gradient-to-r from-green-400 to-blue-500 scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-1">
                    <Star className="w-3 h-3 mr-1" /> Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {plan.price}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">{plan.period}</div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <Badge variant="outline" className="mt-2">{plan.bestFor}</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular 
                      ? 'bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white' 
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'}`}
                    onClick={() => window.location.href = '/contact'}
                  >
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-card-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Enhance your website with these powerful add-ons for ongoing growth.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{addon.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {addon.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">What's included in the price?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All prices include complete website development, hosting setup, SSL certificate, basic SEO, and training. There are no hidden fees or surprises.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">How long does it take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most projects are completed within 2-4 weeks. The exact timeline depends on your requirements and how quickly you provide content and feedback.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Do you offer payment plans?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We offer flexible payment plans with 50% upfront and 50% on completion for all projects above ₹25,000.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">What if I need changes later?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We provide ongoing support and maintenance services. Small changes are often included in our monthly maintenance packages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8">
              Get a personalized quote for your Pune or Mumbai business. Free consultation included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" onClick={() => window.location.href = 'tel:+919876543210'}>
                <Phone className="w-4 h-4 mr-2" /> Call: +91-9876543210
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" onClick={() => window.location.href = '/contact'}>
                <Mail className="w-4 h-4 mr-2" /> Email Quote
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

export default Pricing;