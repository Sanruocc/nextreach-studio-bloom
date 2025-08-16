import { ArrowRight, Globe, Heart, MessageCircle, Monitor, Smartphone, Users, Star, CheckCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import bakeryImage from "@/assets/portfolio-bakery.jpg";
import restaurantImage from "@/assets/portfolio-restaurant.jpg";
import fitnessImage from "@/assets/portfolio-fitness.jpg";
import showcaseCafe from "@/assets/showcase-cafe-laptop.jpg";
import showcaseGym from "@/assets/showcase-gym-devices.jpg";
import showcaseClinic from "@/assets/showcase-clinic-laptop.jpg";
import showcaseSocial from "@/assets/showcase-social-media.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center text-white font-bold">
              N
            </div>
            <span className="font-bold text-xl text-foreground">NextReach Studio</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          <Button variant="cta" size="sm">
            Get Started <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Helping Local
              <span className="block text-primary">Businesses</span>
              <span className="block text-accent">Grow Online</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              We build professional websites and manage social media to help your business succeed online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Digital Growth Partner
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At NextReach Studio, we specialize in helping local businesses establish and grow their online presence. 
              From professional websites to engaging social media campaigns, we're here to take your business to the next level.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Professional Websites</h3>
              <p className="text-muted-foreground">Modern, responsive websites that convert visitors into customers.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Social Media Marketing</h3>
              <p className="text-muted-foreground">Engaging content and campaigns that build your brand community.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-highlight rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-highlight-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Local Focus</h3>
              <p className="text-muted-foreground">We understand local markets and help you connect with your community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive digital solutions designed to grow your local business online.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground">Website Development</CardTitle>
                <CardDescription className="text-base">
                  We create professional and responsive websites that showcase your business beautifully.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-accent mr-3" />
                    Custom responsive design
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-accent mr-3" />
                    SEO optimization
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-accent mr-3" />
                    Content management system
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-accent mr-3" />
                    Mobile-first approach
                  </li>
                </ul>
                <Button variant="accent" className="w-full">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground">Social Media Marketing</CardTitle>
                <CardDescription className="text-base">
                  We help businesses grow their presence on social media platforms.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Content creation & scheduling
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Community management
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Paid advertising campaigns
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Analytics & reporting
                  </li>
                </ul>
                <Button variant="default" className="w-full">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Portfolio</h2>
            <p className="text-lg text-muted-foreground">
              See how we've helped local businesses transform their online presence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={bakeryImage} 
                  alt="Sweet Dreams Bakery Website" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Sweet Dreams Bakery</h3>
                <p className="text-muted-foreground mb-4">Modern bakery website with online ordering system and beautiful product showcase.</p>
                <Button variant="link" className="p-0">
                  View Project <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={restaurantImage} 
                  alt="Bella Vista Restaurant Website" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Bella Vista Restaurant</h3>
                <p className="text-muted-foreground mb-4">Elegant restaurant website with menu display and reservation system.</p>
                <Button variant="link" className="p-0">
                  View Project <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={fitnessImage} 
                  alt="FitZone Gym Website" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">FitZone Gym</h3>
                <p className="text-muted-foreground mb-4">Dynamic fitness website with class schedules and membership management.</p>
                <Button variant="link" className="p-0">
                  View Project <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 bg-card-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Professional Showcases</h2>
            <p className="text-lg text-muted-foreground">
              High-quality website designs and social media content that build trust and drive results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={showcaseCafe} 
                  alt="Cafe Website Showcase" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Cafe Website</h3>
                <p className="text-muted-foreground text-sm">Modern design with menu integration</p>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={showcaseGym} 
                  alt="Local Gym Website Showcase" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Local Gym Website</h3>
                <p className="text-muted-foreground text-sm">Responsive design with class schedules</p>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={showcaseClinic} 
                  alt="Clinic Website Showcase" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Clinic Website</h3>
                <p className="text-muted-foreground text-sm">Professional healthcare design</p>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={showcaseSocial} 
                  alt="Social Media Content Showcase" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Social Media Posts</h3>
                <p className="text-muted-foreground text-sm">Engaging content for all platforms</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Website Development Pricing</h2>
            <p className="text-lg text-muted-foreground">
              Professional websites designed to grow your business. Transparent pricing, no hidden costs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Basic Website */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-foreground mb-2">Basic Website</CardTitle>
                <div className="text-3xl font-bold text-primary mb-2">₹15,000</div>
                <CardDescription className="text-sm">Perfect for small businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    1-3 pages
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Mobile responsive
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    WhatsApp integration
                  </li>
                </ul>
                <Button variant="outline" className="w-full text-sm">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Standard Website */}
            <Card className="border-2 border-primary shadow-xl hover:shadow-2xl transition-shadow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                Popular
              </div>
              <CardHeader className="text-center pb-4 pt-6">
                <CardTitle className="text-xl text-foreground mb-2">Standard Website</CardTitle>
                <div className="text-3xl font-bold text-primary mb-2">₹22,000</div>
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
                    Modern design
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Basic SEO
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Social links
                  </li>
                </ul>
                <Button variant="cta" className="w-full text-sm">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Premium Website */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-foreground mb-2">Premium Website</CardTitle>
                <div className="text-3xl font-bold text-primary mb-2">₹30,000</div>
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
                    Advanced SEO
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Custom forms
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    1 month support
                  </li>
                </ul>
                <Button variant="accent" className="w-full text-sm">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Custom Website */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-foreground mb-2">Custom Website</CardTitle>
                <div className="text-3xl font-bold text-primary mb-2">₹30,000+</div>
                <CardDescription className="text-sm">Tailored to your needs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    7+ pages
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Special features
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Custom functionality
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Extended support
                  </li>
                </ul>
                <Button variant="default" className="w-full text-sm">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Pricing Section */}
      <section className="py-20 bg-card-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Social Media Marketing</h2>
            <p className="text-lg text-muted-foreground">
              Professional content creation for all your social media platforms. Quality visuals with consistent branding.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Per Post Pricing</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                        <div className="flex items-center space-x-3">
                          <MessageCircle className="w-6 h-6 text-primary" />
                          <span className="font-medium text-foreground">Facebook Posts</span>
                        </div>
                        <span className="text-xl font-bold text-primary">₹200 - ₹250</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Smartphone className="w-6 h-6 text-accent" />
                          <span className="font-medium text-foreground">Instagram Stories/Photos</span>
                        </div>
                        <span className="text-xl font-bold text-accent">₹200 - ₹250</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                        <div className="flex items-center space-x-3">
                          <MessageCircle className="w-6 h-6 text-highlight" />
                          <span className="font-medium text-foreground">WhatsApp Status Videos</span>
                        </div>
                        <span className="text-xl font-bold text-highlight">₹200 - ₹250</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-foreground mb-4">What You Get</h4>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-accent mr-3" />
                        High-quality visual content
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-accent mr-3" />
                        Consistent brand identity
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-accent mr-3" />
                        Engaging captions
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-accent mr-3" />
                        Optimized for each platform
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-accent mr-3" />
                        Regular posting schedule
                      </li>
                    </ul>
                    <Button variant="cta" size="lg" className="mt-6">
                      Start Social Media Marketing
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our satisfied clients have to say.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-highlight fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "NextReach Studio completely transformed our online presence. Our website looks amazing and we've seen a 300% increase in online orders!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    S
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground">Sweet Dreams Bakery</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-highlight fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "The team at NextReach Studio is fantastic. They understood our vision and delivered beyond our expectations. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Michael Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Bella Vista Restaurant</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-highlight fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "Professional, creative, and results-driven. Our new website has brought in so many new members. Thank you NextReach Studio!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-highlight rounded-full flex items-center justify-center text-highlight-foreground font-bold mr-4">
                    A
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Amanda Chen</div>
                    <div className="text-sm text-muted-foreground">FitZone Gym</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can help your business grow online. Get in touch with us today!
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send us a message</CardTitle>
                  <CardDescription>We'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Business Name" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your project..." className="min-h-24" />
                  </div>
                  <Button variant="cta" className="w-full">
                    Send Message <Mail className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info & CTA */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Get in touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Call us</div>
                        <div className="text-muted-foreground">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mr-4">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Email us</div>
                        <div className="text-muted-foreground">hello@nextreachstudio.com</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-highlight rounded-xl flex items-center justify-center mr-4">
                        <MessageCircle className="w-6 h-6 text-highlight-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">WhatsApp</div>
                        <div className="text-muted-foreground">+1 (555) 123-4567</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-brand p-8 rounded-2xl text-white">
                  <h4 className="text-xl font-bold mb-4">Ready to transform your business?</h4>
                  <p className="mb-6 opacity-90">
                    Join hundreds of local businesses that have grown their online presence with NextReach Studio.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="highlight" className="bg-highlight hover:bg-highlight-dark">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center text-white font-bold">
                N
              </div>
              <span className="font-bold text-xl">NextReach Studio</span>
            </div>
            <p className="text-background/80 mb-6">
              Helping local businesses grow online since 2020
            </p>
            <div className="flex justify-center space-x-6 text-background/60">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors">Contact</a>
            </div>
            <div className="border-t border-background/20 mt-8 pt-8 text-background/60">
              © 2024 NextReach Studio. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;