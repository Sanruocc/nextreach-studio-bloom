import { ArrowRight, Globe, Heart, MessageCircle, Monitor, Users, Star, CheckCircle, Mail, Phone } from "lucide-react";
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/4d24aea2-7d82-4e18-b806-b3b899ed818a.png" 
              alt="NextReach Studio Logo" 
              className="w-10 h-10"
            />
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
              Professional Websites
              <span className="block text-primary">That Convert</span>
              <span className="block text-accent">Visitors to Patients</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              We build stunning, professional websites for healthcare providers and service businesses that attract more patients and grow your practice.
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
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At NextReach Studio, we specialize in creating professional websites for doctors, dentists, clinics, and healthcare providers. 
              Our expertly crafted websites help you build trust, attract new patients, and grow your practice online.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Professional Websites</h3>
              <p className="text-muted-foreground">Modern, responsive websites that convert visitors into patients and build trust.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Healthcare Focused</h3>
              <p className="text-muted-foreground">Specialized experience in medical, dental, and healthcare website design.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-highlight rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-highlight-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Patient-Centric Design</h3>
              <p className="text-muted-foreground">We create websites that make it easy for patients to find and trust your practice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Premium Website Development</h2>
            <p className="text-lg text-muted-foreground">
              Specialized website solutions for healthcare professionals and service-based businesses that need to build trust and attract patients.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                      <Monitor className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">Professional Website Development</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      We create stunning, conversion-optimized websites specifically designed for healthcare providers, doctors, dentists, and service businesses.
                    </p>
                    <Button variant="cta" size="lg">
                      Start Your Project <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                  <div>
                    <ul className="space-y-4">
                      <li className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-6 h-6 text-accent mr-4" />
                        <span className="text-lg">Custom responsive design that builds trust</span>
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-6 h-6 text-accent mr-4" />
                        <span className="text-lg">Advanced SEO to attract more patients</span>
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-6 h-6 text-accent mr-4" />
                        <span className="text-lg">Online appointment booking systems</span>
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-6 h-6 text-accent mr-4" />
                        <span className="text-lg">HIPAA-compliant contact forms</span>
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-6 h-6 text-accent mr-4" />
                        <span className="text-lg">Mobile-optimized for on-the-go patients</span>
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-6 h-6 text-accent mr-4" />
                        <span className="text-lg">Fast loading speed for better user experience</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Healthcare Portfolio</h2>
            <p className="text-lg text-muted-foreground">
              See how we've helped healthcare professionals transform their online presence and attract more patients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={bakeryImage} 
                  alt="Dr. Sharma's Dental Clinic Website" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Dr. Sharma's Dental Clinic</h3>
                <p className="text-muted-foreground mb-4">Professional dental website with online appointment booking and patient portal.</p>
                <Button variant="link" className="p-0">
                  View Project <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={restaurantImage} 
                  alt="Mumbai Cardiology Center Website" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Mumbai Cardiology Center</h3>
                <p className="text-muted-foreground mb-4">Modern medical website with doctor profiles and patient testimonials.</p>
                <Button variant="link" className="p-0">
                  View Project <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={fitnessImage} 
                  alt="Delhi Pediatric Clinic Website" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Delhi Pediatric Clinic</h3>
                <p className="text-muted-foreground mb-4">Family-friendly medical website with easy appointment scheduling system.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Healthcare Website Showcases</h2>
            <p className="text-lg text-muted-foreground">
              Professional healthcare websites that build patient trust and drive appointment bookings.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={showcaseCafe} 
                  alt="Multi-Specialty Clinic Showcase" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Multi-Specialty Clinic</h3>
                <p className="text-muted-foreground text-sm">Complete healthcare solution</p>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={showcaseGym} 
                  alt="Dental Practice Website Showcase" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Dental Practice Website</h3>
                <p className="text-muted-foreground text-sm">Patient-focused design with booking</p>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={showcaseClinic} 
                  alt="Pediatric Clinic Showcase" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Pediatric Clinic</h3>
                <p className="text-muted-foreground text-sm">Family-friendly medical website</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Professional Website Packages</h2>
            <p className="text-lg text-muted-foreground">
              Specialized healthcare website solutions designed to attract more patients. Transparent pricing, premium quality.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Basic Website */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-foreground mb-2">Basic Website</CardTitle>
                <div className="text-3xl font-bold text-primary mb-2">₹9,999</div>
                <CardDescription className="text-sm">Perfect for new practices</CardDescription>
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
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Basic contact form
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
                Most Popular
              </div>
              <CardHeader className="text-center pb-4 pt-6">
                <CardTitle className="text-xl text-foreground mb-2">Standard Website</CardTitle>
                <div className="text-3xl font-bold text-primary mb-2">₹16,999</div>
                <CardDescription className="text-sm">Great for growing practices</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    4-5 pages
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Professional design
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Basic SEO optimization
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Appointment booking form
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
                <div className="text-3xl font-bold text-primary mb-2">₹24,999</div>
                <CardDescription className="text-sm">Complete practice solution</CardDescription>
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
                    Online booking system
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
                <div className="text-3xl font-bold text-primary mb-2">₹35,000+</div>
                <CardDescription className="text-sm">Tailored for large practices</CardDescription>
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
                    Patient portal
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

      {/* Testimonials Section */}
      <section className="py-20 bg-card-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">What Healthcare Professionals Say</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our satisfied healthcare clients have to say.
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
                  "NextReach Studio created an excellent website for our dental clinic. Patient appointments have increased by 40% since launch. Highly professional team!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    D
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Dr. Priya Sharma</div>
                    <div className="text-sm text-muted-foreground">Sharma Dental Clinic, Mumbai</div>
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
                  "Outstanding work! Our new website perfectly represents our cardiology practice. Patients can easily book appointments online now. Very satisfied!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                    D
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Dr. Rajesh Gupta</div>
                    <div className="text-sm text-muted-foreground">Heart Care Center, Delhi</div>
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
                  "The website design is perfect for our pediatric practice. Parents love the user-friendly interface and online booking system. Excellent service!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-highlight rounded-full flex items-center justify-center text-highlight-foreground font-bold mr-4">
                    D
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Dr. Meera Patel</div>
                    <div className="text-sm text-muted-foreground">Children's Clinic, Bangalore</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Grow Your Practice?</h2>
            <p className="text-lg text-muted-foreground">
              Let's create a professional website that attracts more patients to your practice. Get in touch with us today!
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Start Your Website Project</CardTitle>
                  <CardDescription>We'll provide a detailed proposal within 24 hours.</CardDescription>
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
                    <Label htmlFor="company">Practice Name</Label>
                    <Input id="company" placeholder="Your Practice/Clinic Name" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your practice and website requirements..." className="min-h-24" />
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
                        <div className="text-muted-foreground">+91 98765 43210</div>
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
                        <div className="text-muted-foreground">+91 98765 43210</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-brand p-8 rounded-2xl text-white">
                  <h4 className="text-xl font-bold mb-4">Ready to attract more patients online?</h4>
                  <p className="mb-6 opacity-90">Join hundreds of healthcare professionals who trust NextReach Studio for their online presence.</p>
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
              <img 
                src="/lovable-uploads/4d24aea2-7d82-4e18-b806-b3b899ed818a.png" 
                alt="NextReach Studio Logo" 
                className="w-8 h-8"
              />
              <span className="font-bold text-xl">NextReach Studio</span>
            </div>
            <p className="text-background/80 mb-6">
              Helping healthcare professionals grow online since 2020
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