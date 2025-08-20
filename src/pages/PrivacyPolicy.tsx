import { ArrowRight, Shield, Eye, Lock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: [
        "Personal identification information (Name, email address, phone number, business details)",
        "Website usage data and analytics",
        "Communication records (emails, messages, consultation notes)",
        "Payment information for services rendered",
        "Technical information (IP address, browser type, device information)"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: FileText,
      content: [
        "To provide and maintain our web design services",
        "To communicate with you about your project requirements",
        "To send invoices and process payments",
        "To improve our services and customer experience",
        "To comply with legal obligations and prevent fraud"
      ]
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        "All data is encrypted using industry-standard SSL encryption",
        "Access to personal information is restricted to authorized personnel only",
        "Regular security audits and updates to protect your information",
        "Secure payment processing through trusted payment gateways",
        "Data backup and disaster recovery procedures in place"
      ]
    },
    {
      title: "Your Rights",
      icon: Shield,
      content: [
        "Right to access your personal information",
        "Right to correct inaccurate data",
        "Right to request deletion of your data",
        "Right to object to data processing",
        "Right to data portability"
      ]
    }
  ];

  const lastUpdated = "January 2024";

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
              Privacy <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
              Your privacy matters to us. Learn how we protect your information and respect your rights.
            </p>
            <p className="text-lg text-muted-foreground">
              Last updated: <span className="text-primary font-medium">{lastUpdated}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Our Commitment to Privacy</CardTitle>
                <CardDescription>
                  At NextReach, we take your privacy seriously and are committed to protecting your personal information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This Privacy Policy outlines how NextReach collects, uses, and protects your personal information when you use our web design services. 
                  We operate primarily in Pune and Mumbai, serving businesses across Maharashtra.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By using our services, you agree to the collection and use of information in accordance with this policy. 
                  We comply with all applicable Indian data protection laws and regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-20 bg-card-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Policies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Cookies and Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
                    Cookies are files with a small amount of data which may include an anonymous unique identifier.
                  </p>
                  <p className="text-muted-foreground">
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                    However, if you do not accept cookies, you may not be able to use some portions of our service.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Third-Party Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We may employ third-party companies and individuals to facilitate our services, provide service on our behalf, 
                    perform service-related services, or assist us in analyzing how our service is used.
                  </p>
                  <p className="text-muted-foreground">
                    These third parties have access to your personal information only to perform these tasks on our behalf 
                    and are obligated not to disclose or use it for any other purpose.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Data Retention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We retain your personal information only for as long as necessary to provide you with our services and as described in this Privacy Policy. 
                    We will also retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Changes to This Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
                    and updating the "Last updated" date at the top of this Privacy Policy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions About Your Privacy?</h2>
            <p className="text-xl text-white/90 mb-8">
              If you have any questions about this Privacy Policy or how we handle your data, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Request Data Deletion
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
    </div>
  );
};

export default PrivacyPolicy;