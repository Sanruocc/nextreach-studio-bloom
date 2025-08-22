import { ArrowRight, Target, Heart, Shield, Globe, Users, Star, Award, CheckCircle, MapPin, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { SEO } from "@/components/SEO";
import Footer from "@/components/Footer";

const About = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <SEO pageKey="about" />
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
             <a href="/about" className="text-primary font-medium">About</a>
             <a href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
             <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
           </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white" 
              size="sm"
              onClick={() => window.location.href = '/contact'}
            >
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
              About <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">NextReach</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
              variants={staggerItem}
            >
              We're Pune and Mumbai's trusted partner for professional websites that help local businesses thrive in the digital age.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              variants={staggerItem}
            >
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">200+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <MapPin className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">Pune & Mumbai</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Our Mission: <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Empowering Local Businesses</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in Pune, NextReach was born from a simple observation: local businesses in Pune and Mumbai were struggling to establish a strong online presence. While big agencies focused on large corporations, small and medium businesses were left behind.
                </p>
                <p>
                  We set out to change that. Our mission is to provide world-class web design and digital solutions specifically tailored for the unique needs of local businesses, clinics, shops, and service providers across Maharashtra.
                </p>
                <p>
                  Today, we've helped over <span className="font-semibold text-foreground">200+ businesses</span> across Pune, Mumbai, and surrounding areas build trust online and attract more customers through strategic web design.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={staggerItem}
            >
              <motion.div 
                className="group"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-blue-50 p-8 text-center h-full">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-3">200+</h3>
                  <p className="text-muted-foreground font-medium">Happy Clients</p>
                </Card>
              </motion.div>
              <motion.div 
                className="group"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 text-center h-full">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-3">5+</h3>
                  <p className="text-muted-foreground font-medium">Years Experience</p>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-card-subtle via-background to-card-subtle">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">What Drives Us</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our core values shape every website we build and every client relationship we nurture.
            </p>
          </motion.div>
          <motion.div 
            className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem}>
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm p-8 h-full group">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Local Focus</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We understand the unique challenges and opportunities of businesses in Pune and Mumbai. Our solutions are designed specifically for the local market.
                  </p>
                </Card>
              </motion.div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm p-8 h-full group">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Client Success</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Your success is our success. We measure our achievements by the growth and satisfaction of our clients across Maharashtra.
                  </p>
                </Card>
              </motion.div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm p-8 h-full group">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Transparency</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Clear pricing, honest timelines, and open communication. We believe in building trust through transparency in every interaction.
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A dedicated team of designers, developers, and digital strategists based in Pune, passionate about helping local businesses succeed online.
            </p>
          </motion.div>
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50 p-12">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">Pune-Based & Proud</h3>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                    Our team combines global web design expertise with deep local knowledge of the Pune and Mumbai markets. We understand the unique needs of local businesses because we're part of this community too.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Local Expertise</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
                      <Zap className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">Fast Delivery</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-medium text-purple-800">24/7 Support</span>
                    </div>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white text-lg px-8 py-3"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Work With Us
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Grow Your Business?</h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Let's discuss how we can help your Pune or Mumbai business establish a strong online presence and attract more customers.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
                onClick={() => window.location.href = '/contact'}
              >
                Get Started Today
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
                onClick={() => window.location.href = '/#projects'}
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;