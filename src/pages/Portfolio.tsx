import { ArrowRight, ExternalLink, Eye, Calendar, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "Dr. Sharma's Clinic - Pune",
      category: "Healthcare",
      location: "Koregaon Park, Pune",
      description: "Modern clinic website with online appointment booking and patient portal for a leading cardiologist.",
      features: ["Online Booking", "Patient Portal", "Mobile Responsive", "SEO Optimized"],
      image: "/api/placeholder/600/400",
      url: "#",
      rating: 5,
      testimonial: "NextReach transformed my practice with a website that patients love using."
    },
    {
      title: "Mumbai Dental Care",
      category: "Healthcare",
      location: "Bandra, Mumbai",
      description: "Comprehensive dental clinic website with service showcases and appointment scheduling.",
      features: ["Service Showcase", "Appointment System", "Before/After Gallery", "Reviews Integration"],
      image: "/api/placeholder/600/400",
      url: "#",
      rating: 5,
      testimonial: "Our appointments increased by 200% after the new website launch."
    },
    {
      title: "Pune Spice Restaurant",
      category: "Restaurant",
      location: "FC Road, Pune",
      description: "Elegant restaurant website with online ordering system and table reservations.",
      features: ["Online Ordering", "Table Booking", "Menu Display", "Photo Gallery"],
      image: "/api/placeholder/600/400",
      url: "#",
      rating: 5,
      testimonial: "The online ordering system has been a game-changer for our business."
    },
    {
      title: "Mumbai Fashion Store",
      category: "E-commerce",
      location: "Colaba, Mumbai",
      description: "Stylish e-commerce website for a boutique fashion store with product catalog and shopping cart.",
      features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Mobile App"],
      image: "/api/placeholder/600/400",
      url: "#",
      rating: 5,
      testimonial: "Our sales tripled within 3 months of launching the new website."
    },
    {
      title: "Dr. Patel's Dental Studio",
      category: "Healthcare",
      location: "Shivaji Nagar, Pune",
      description: "Professional dental website with advanced booking system and patient education resources.",
      features: ["Advanced Booking", "Patient Education", "Video Consultation", "Treatment Plans"],
      image: "/api/placeholder/600/400",
      url: "#",
      rating: 5,
      testimonial: "Patients can now book appointments easily, reducing our phone calls by 70%."
    },
    {
      title: "Pune Wellness Spa",
      category: "Service Business",
      location: "Viman Nagar, Pune",
      description: "Relaxing spa website with service booking system and wellness blog integration.",
      features: ["Service Booking", "Wellness Blog", "Gift Cards", "Loyalty Program"],
      image: "/api/placeholder/600/400",
      url: "#",
      rating: 5,
      testimonial: "The booking system is so intuitive, our staff loves it as much as our clients."
    }
  ];

  const stats = [
    { number: "150+", label: "Websites Launched", icon: Eye },
    { number: "95%", label: "Client Satisfaction", icon: Star },
    { number: "50+", label: "Healthcare Clients", icon: Calendar },
    { number: "2", label: "Cities Served", icon: MapPin }
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
              Our <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              See how we've helped businesses across Pune and Mumbai establish a strong online presence and grow their customer base.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our recent work with businesses in Pune and Mumbai across healthcare, retail, and service industries.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/80">
                      {project.category.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Button size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-primary hover:bg-white/90">
                      <ExternalLink className="w-4 h-4 mr-2" /> View Live
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-gradient-to-r from-green-100 to-blue-100 text-primary border-0">
                      {project.category}
                    </Badge>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-1" /> {project.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-italic">"{project.testimonial}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create a website that showcases your business and attracts more customers in Pune and Mumbai.
            </p>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              Start Your Project
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

export default Portfolio;