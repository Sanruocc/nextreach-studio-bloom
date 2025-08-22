import { useState } from "react";
import { ArrowRight, Menu, FileText, Shield, Clock, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MobileNavigation from "@/components/MobileNavigation";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import { SEO } from "@/components/SEO";

const Terms = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <SEO pageKey="terms" />
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
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              className="w-20 h-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8"
              variants={staggerItem}
            >
              <FileText className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
              variants={staggerItem}
            >
              Terms of <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">Service</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={staggerItem}
            >
              Clear, transparent terms that protect both you and us. We believe in fair, honest business relationships.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"
              variants={staggerItem}
            >
                             <div className="flex items-center">
                 <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                 Last updated: January 2025
               </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Easy to understand
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Fair to all parties
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            {/* Agreement Section */}
            <motion.div variants={staggerItem}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-primary" />
                    1. Agreement to Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    By accessing and using NextReach Studio's services, you agree to be bound by these Terms of Service. 
                    If you disagree with any part of these terms, you may not access our services.
                  </p>
                  <p>
                    These terms apply to all visitors, users, and others who access or use our website design and 
                    development services.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Services Section */}
            <motion.div variants={staggerItem}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3 text-primary" />
                    2. Services Description
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    NextReach Studio provides professional website design and development services, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Custom website design and development</li>
                    <li>Mobile-responsive design</li>
                    <li>SEO optimization</li>
                    <li>Website hosting and maintenance</li>
                    <li>Technical support and training</li>
                  </ul>
                  <p>
                    All services are provided on an "as is" basis, and we reserve the right to modify or discontinue 
                    any service at any time.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Payment Terms */}
            <motion.div variants={staggerItem}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <Clock className="w-6 h-6 mr-3 text-primary" />
                    3. Payment Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Payment terms are as follows:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>50% payment required upfront to begin work</li>
                    <li>Remaining 50% due upon project completion</li>
                    <li>All prices are in Indian Rupees (₹)</li>
                    <li>Additional work beyond scope will be quoted separately</li>
                  </ul>
                  <p>
                    Late payments may result in project delays or suspension of services.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project Timeline */}
            <motion.div variants={staggerItem}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <Clock className="w-6 h-6 mr-3 text-primary" />
                    4. Project Timeline & Deliverables
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Project timelines are estimates and may vary based on:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Complexity of requirements</li>
                    <li>Client feedback and revision cycles</li>
                    <li>Content provision by client</li>
                    <li>Third-party integrations</li>
                  </ul>
                  <p>
                    We commit to regular communication and will provide progress updates throughout the project.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Client Responsibilities */}
            <motion.div variants={staggerItem}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <Users className="w-6 h-6 mr-3 text-primary" />
                    5. Client Responsibilities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Clients are responsible for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Providing accurate project requirements</li>
                    <li>Supplying content, images, and materials</li>
                    <li>Timely feedback and approvals</li>
                    <li>Maintaining backups of their content</li>
                    <li>Ensuring legal compliance of their content</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div variants={staggerItem}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-primary" />
                    6. Intellectual Property
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Upon full payment:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Final website design becomes client property</li>
                    <li>Client receives source code and assets</li>
                    <li>NextReach retains rights to portfolio display</li>
                    <li>Third-party assets remain under their respective licenses</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div variants={staggerItem}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-primary" />
                    7. Limitation of Liability
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    NextReach Studio's liability is limited to the amount paid for services. We are not liable for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Indirect or consequential damages</li>
                    <li>Loss of profits or business opportunities</li>
                    <li>Data loss or security breaches</li>
                    <li>Third-party service failures</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Termination */}
            <motion.div variants={staggerItem}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <Clock className="w-6 h-6 mr-3 text-primary" />
                    8. Termination
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Either party may terminate the agreement with written notice:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>For material breach of terms</li>
                    <li>With 30 days written notice</li>
                    <li>Client responsible for work completed up to termination</li>
                    <li>Refunds subject to work completed and costs incurred</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Changes to Terms */}
            <motion.div variants={staggerItem}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <FileText className="w-6 h-6 mr-3 text-primary" />
                    9. Changes to Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    We reserve the right to modify these terms at any time. Changes will be effective immediately 
                    upon posting. Continued use of services constitutes acceptance of new terms.
                  </p>
                  <p>
                    Clients will be notified of significant changes via email or website notice.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={staggerItem}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <Users className="w-6 h-6 mr-3 text-primary" />
                    10. Contact & Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    If you have questions about these terms, please contact us:
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p><strong>Email:</strong> admin@nextreachstudio.com</p>
                    <p><strong>Phone:</strong> +91 98765 43210</p>
                    <p><strong>Address:</strong> Pune, Maharashtra, India</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions About Our Terms?</h2>
            <p className="text-xl text-white/90 mb-8">
              We're here to help clarify any part of our terms of service. Get in touch for a friendly discussion.
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
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

export default Terms;
