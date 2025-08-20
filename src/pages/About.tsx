import { ArrowRight, Target, Heart, Shield, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
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
              About <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">NextReach</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We're Pune and Mumbai's trusted partner for professional websites that help local businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission: Empowering Local Businesses
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in Pune, NextReach was born from a simple observation: local businesses in Pune and Mumbai were struggling to establish a strong online presence. While big agencies focused on large corporations, small and medium businesses were left behind.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We set out to change that. Our mission is to provide world-class web design and digital solutions specifically tailored for the unique needs of local businesses, clinics, shops, and service providers across Maharashtra.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we've helped over 200+ businesses across Pune, Mumbai, and surrounding areas build trust online and attract more customers through strategic web design.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">200+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </Card>
              <Card className="border-0 shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">5+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">What Drives Us</h2>
            <p className="text-lg text-muted-foreground">
              Our core values shape every website we build and every client relationship we nurture.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Local Focus</h3>
              <p className="text-muted-foreground">
                We understand the unique challenges and opportunities of businesses in Pune and Mumbai. Our solutions are designed specifically for the local market.
              </p>
            </Card>
            <Card className="border-0 shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Client Success</h3>
              <p className="text-muted-foreground">
                Your success is our success. We measure our achievements by the growth and satisfaction of our clients across Maharashtra.
              </p>
            </Card>
            <Card className="border-0 shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Transparency</h3>
              <p className="text-muted-foreground">
                Clear pricing, honest timelines, and open communication. We believe in building trust through transparency in every interaction.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              A dedicated team of designers, developers, and digital strategists based in Pune, passionate about helping local businesses succeed online.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Pune-Based & Proud</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Our team combines global web design expertise with deep local knowledge of the Pune and Mumbai markets. We understand the unique needs of local businesses because we're part of this community too.
                </p>
                <Button className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white">
                  Work With Us
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help your Pune or Mumbai business establish a strong online presence and attract more customers.
            </p>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              Get Started Today
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

export default About;