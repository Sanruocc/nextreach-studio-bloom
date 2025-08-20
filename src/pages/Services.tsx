import { ArrowRight, Stethoscope, Store, Smartphone, Search, Clock, Shield, MessageCircle, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
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
          <Button className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white" size="sm">
            Get Started <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive web design and digital solutions tailored for clinics, shops, and service providers in Pune and Mumbai.
            </p>
          </div>
        </div>
      </section>

      {/* Healthcare Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Healthcare Website Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Specialized websites for doctors, clinics, hospitals, and healthcare providers across Pune and Mumbai.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Doctor & Clinic Websites</CardTitle>
                <CardDescription>Professional websites for individual doctors and small clinics</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Online appointment booking system</li>
                  <li>• Doctor profiles and specializations</li>
                  <li>• Treatment information pages</li>
                  <li>• Patient testimonials</li>
                  <li>• Google Maps integration</li>
                  <li>• Mobile-responsive design</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Hospital & Multi-Specialty</CardTitle>
                <CardDescription>Comprehensive websites for hospitals and large healthcare facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multiple department pages</li>
                  <li>• Doctor directory with search</li>
                  <li>• Online consultation booking</li>
                  <li>• Health information resources</li>
                  <li>• Emergency contact systems</li>
                  <li>• Patient portal integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Healthcare SEO</CardTitle>
                <CardDescription>Specialized SEO for medical practices in Pune and Mumbai</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• "Doctor near me" optimization</li>
                  <li>• Local medical keywords</li>
                  <li>• Google My Business setup</li>
                  <li>• Patient review management</li>
                  <li>• Medical content marketing</li>
                  <li>• Competitor analysis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Services */}
      <section className="py-20 bg-card-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Business Website Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional websites for shops, restaurants, services, and local businesses across Maharashtra.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  <Store className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">E-commerce & Retail</CardTitle>
                <CardDescription>Online stores and retail business websites</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Product catalogs and galleries</li>
                  <li>• Shopping cart integration</li>
                  <li>• Payment gateway setup</li>
                  <li>• Inventory management</li>
                  <li>• Local delivery options</li>
                  <li>• Customer reviews system</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Service Business Sites</CardTitle>
                <CardDescription>Websites for service providers and consultants</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Service showcase pages</li>
                  <li>• Online booking system</li>
                  <li>• Quote request forms</li>
                  <li>• Portfolio galleries</li>
                  <li>• Client testimonials</li>
                  <li>• Contact integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Restaurant & Food</CardTitle>
                <CardDescription>Food business websites with online ordering</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Menu and pricing displays</li>
                  <li>• Online ordering system</li>
                  <li>• Table reservation booking</li>
                  <li>• Food photography galleries</li>
                  <li>• Location and hours info</li>
                  <li>• Customer reviews integration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete digital solutions to support your online growth.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Mobile Optimization</h3>
              <p className="text-sm text-muted-foreground">Perfect display on all devices</p>
            </Card>

            <Card className="border-0 shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Local SEO</h3>
              <p className="text-sm text-muted-foreground">Rank higher in local searches</p>
            </Card>

            <Card className="border-0 shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Fast Loading</h3>
              <p className="text-sm text-muted-foreground">Quick performance on all networks</p>
            </Card>

            <Card className="border-0 shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Support</h3>
              <p className="text-sm text-muted-foreground">Ongoing maintenance and updates</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss which services are right for your Pune or Mumbai business. Get a free consultation today!
            </p>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              Get Free Consultation
            </Button>
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
    </div>
  );
};

export default Services;