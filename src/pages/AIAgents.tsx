import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Menu, MessageCircle, Mail, Bot, Zap, Clock, Sparkles, AlertCircle, CheckCircle, Users, FileText, Calendar, Settings, Target, TrendingUp, DollarSign, Smile, Workflow, Database, Layers, Boxes, Send, Lightbulb, Rocket, Award, Globe2, Code2, HeadphonesIcon, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";
import MobileNavigation from "@/components/MobileNavigation";
import Footer from "@/components/Footer";
import {
  fadeInVariants,
  fadeInUpVariants,
  staggerContainer,
  staggerItem
} from "@/lib/motion";

const AIAgents = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210?text=Hi%20NextReach%2C%20I%20want%20to%20learn%20more%20about%20AI%20Agents', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:admin@nextreachstudio.com?subject=AI%20Agents%20Consultation';
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO pageKey="home" />

      {/* Navigation */}
      <motion.nav
        className={`border-b border-border sticky top-0 z-50 transition-all duration-300 ${scrollY > 50
          ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm'
          : 'bg-transparent'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="hidden md:flex bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white"
              size="sm"
              onClick={handleWhatsAppClick}
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-card-subtle to-background overflow-hidden relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400/10 via-emerald-500/10 to-blue-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-green-400/20 mb-8"
              variants={fadeInUpVariants}
            >
              <Sparkles className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
                AI Automation Specialists
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
              variants={fadeInUpVariants}
            >
              Custom AI Agents That Help
              <motion.span
                className="block bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent mt-2"
                variants={fadeInUpVariants}
              >
                Your Business Reach the Next Level
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUpVariants}
            >
              At <span className="font-semibold text-foreground">NextReach Studio</span>, we build powerful AI agents that automate support, sales, workflows and operations — fully custom to your business.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              variants={fadeInUpVariants}
            >
              <motion.div
                className="flex items-center space-x-2 bg-white/80 dark:bg-white/10 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg border border-border/20"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Bot className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium">NextReach AI Specialists</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 bg-white/80 dark:bg-white/10 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg border border-border/20"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Zap className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">100% Custom Workflows</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 bg-white/80 dark:bg-white/10 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg border border-border/20"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Clock className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">AI Agents 24/7</span>
              </motion.div>
            </motion.div>

            {/* Additional Benefits */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-12 max-w-2xl mx-auto"
              variants={fadeInUpVariants}
            >
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full" />
                <span>Dedicated Support</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
                <span>Free WhatsApp Consultation</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUpVariants}
            >
              {/* Primary CTA - WhatsApp */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="hero"
                  size="xl"
                  className="group bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white shadow-2xl shadow-emerald-500/20"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp (Free Consultation)
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Secondary CTA - Email */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="xl"
                  className="shadow-lg"
                  onClick={handleEmailClick}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email NextReach Studio
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicator */}
            <motion.p
              className="text-sm text-muted-foreground mt-8"
              variants={fadeInUpVariants}
            >
              ✨ Join 200+ businesses automating with AI • No-code setup available
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Problem Header */}
          <motion.div
            className="max-w-4xl mx-auto text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-red-50 dark:bg-red-950/30 px-4 py-2 rounded-full mb-6 border border-red-200 dark:border-red-800"
              variants={fadeInUpVariants}
            >
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-sm font-semibold text-red-600 dark:text-red-400">The Problem</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              variants={fadeInUpVariants}
            >
              Is Your Business Struggling With{" "}
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Repetitive or Manual Work?
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
              variants={fadeInUpVariants}
            >
              Most growing businesses waste hours on tasks that should be automated.
            </motion.p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Automation Areas */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <motion.div
                className="mb-8"
                variants={fadeInUpVariants}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  At{" "}
                  <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
                    NextReach Studio
                  </span>
                  , we help you reach the next level of efficiency
                </h3>
                <p className="text-lg text-muted-foreground">
                  Through fully custom AI agents that automate:
                </p>
              </motion.div>

              <motion.div
                className="space-y-3"
                variants={staggerContainer}
              >
                {[
                  { icon: MessageCircle, label: "Customer support", gradient: "from-blue-500 to-cyan-500" },
                  { icon: TrendingUp, label: "Sales workflows", gradient: "from-green-500 to-emerald-500" },
                  { icon: FileText, label: "Data entry & document handling", gradient: "from-purple-500 to-pink-500" },
                  { icon: Settings, label: "Internal operations", gradient: "from-orange-500 to-red-500" },
                  { icon: Target, label: "Lead qualification", gradient: "from-indigo-500 to-blue-500" },
                  { icon: Calendar, label: "Appointment management", gradient: "from-teal-500 to-green-500" },
                  { icon: Users, label: "Team communication", gradient: "from-violet-500 to-purple-500" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Card className="border-0 shadow-md hover:shadow-xl transition-all bg-white/80 dark:bg-white/5 backdrop-blur-sm group">
                      <CardContent className="p-4 flex items-center space-x-4">
                        <motion.div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <p className="text-lg font-semibold text-foreground">{item.label}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Solution Benefits */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="lg:sticky lg:top-24"
            >
              <motion.div variants={fadeInUpVariants}>
                <div className="inline-flex items-center space-x-2 bg-green-50 dark:bg-green-950/30 px-4 py-2 rounded-full mb-6 border border-green-200 dark:border-green-800">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">The Solution</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
                    NextReach AI Agents
                  </span>{" "}
                  Solve This Instantly
                </h3>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 dark:from-green-950/20 dark:via-emerald-950/20 dark:to-blue-950/20 rounded-3xl p-8 md:p-10 shadow-2xl border border-green-200/50 dark:border-green-800/30"
                variants={fadeInUpVariants}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="space-y-6">
                  {[
                    { icon: Zap, label: "Faster responses", description: "Instant replies 24/7" },
                    { icon: TrendingUp, label: "Higher productivity", description: "Free up your team's time" },
                    { icon: DollarSign, label: "Lower operational cost", description: "Reduce manual labor expenses" },
                    { icon: Clock, label: "More free time for your team", description: "Focus on strategic work" },
                    { icon: Smile, label: "Better customer experience", description: "Consistent, quality service" },
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 group"
                      variants={staggerItem}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-foreground mb-1 flex items-center">
                          {benefit.label}
                        </h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA in Solution Box */}
                <motion.div
                  className="mt-10 pt-8 border-t border-green-200 dark:border-green-800"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className="w-full bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white text-lg py-6 shadow-xl shadow-emerald-500/20"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Start Automating Today (Free Consultation)
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-card-subtle via-background to-card-subtle relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400/10 via-emerald-500/10 to-blue-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-400/20 mb-8"
              variants={fadeInUpVariants}
            >
              <Boxes className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
                Our Solutions
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              variants={fadeInUpVariants}
            >
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
                NextReach AI Agent
              </span>{" "}
              Solutions
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
              variants={fadeInUpVariants}
            >
              We create fully custom AI systems designed to match your business needs.
            </motion.p>
          </motion.div>

          {/* Solutions Grid */}
          <motion.div
            className="max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            {/* Bento Grid Layout */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Solution 1 - Custom AI Agents */}
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all h-full bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-blue-950/20 dark:via-background dark:to-cyan-950/20 group overflow-hidden relative">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />

                  <CardContent className="p-8 md:p-10 relative">
                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                    >
                      <Bot className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex items-start space-x-3 mb-4">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        Custom AI Agents
                      </h3>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Built to automate the exact workflows your business depends on. Tailored solutions that understand your unique processes.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Solution 2 - WhatsApp & Website Chatbots */}
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all h-full bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-green-950/20 dark:via-background dark:to-emerald-950/20 group overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 transition-all duration-500" />

                  <CardContent className="p-8 md:p-10 relative">
                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                    >
                      <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex items-start space-x-3 mb-4">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        WhatsApp & Website AI Chatbots
                      </h3>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Your brand, your tone — available 24/7. Engage customers instantly across all platforms with intelligent conversations.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Solution 3 - AI Workflow Automation */}
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all h-full bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-purple-950/20 dark:via-background dark:to-pink-950/20 group overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500" />

                  <CardContent className="p-8 md:p-10 relative">
                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                    >
                      <Workflow className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex items-start space-x-3 mb-4">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        AI Workflow Automation
                      </h3>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Connect your CRM, emails, databases, tools & APIs into one automated system. Seamless integration across all your platforms.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Solution 4 - Multi-Agent Systems */}
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all h-full bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-orange-950/20 dark:via-background dark:to-amber-950/20 group overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/5 group-hover:to-amber-500/5 transition-all duration-500" />

                  <CardContent className="p-8 md:p-10 relative">
                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                    >
                      <Layers className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex items-start space-x-3 mb-4">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        Multi-Agent Systems
                      </h3>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Multiple AI agents working together for complex companies. Orchestrated intelligence for enterprise-level automation.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Statement */}
          <motion.div
            className="max-w-4xl mx-auto text-center mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-blue-50 dark:from-green-950/20 dark:via-emerald-950/20 dark:to-blue-950/20 rounded-3xl p-8 md:p-12 border border-green-200/50 dark:border-green-800/30">
              <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
                  NextReach Studio
                </span>{" "}
                helps your business reach further through intelligent automation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400/10 to-emerald-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            className="max-w-4xl mx-auto text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-400/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-400/20 mb-8"
              variants={fadeInUpVariants}
            >
              <Workflow className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Simple Process
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              variants={fadeInUpVariants}
            >
              Partnering With{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
                NextReach Studio
              </span>
              <br />
              is Fast & Simple
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
              variants={fadeInUpVariants}
            >
              From concept to deployment in just 3 easy steps
            </motion.p>
          </motion.div>

          {/* Steps Timeline */}
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <div className="relative">
              {/* Connecting Line - Desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 opacity-20 -translate-x-1/2" />

              {/* Steps */}
              <div className="space-y-12 lg:space-y-24">
                {/* Step 1 */}
                <motion.div
                  className="relative"
                  variants={staggerItem}
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Number Badge (Desktop) */}
                    <div className="hidden lg:flex justify-end">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
                          <span className="text-6xl font-bold text-white">1</span>
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                          <Send className="w-5 h-5 text-white" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Right Side - Content Card */}
                    <motion.div
                      whileHover={{ x: 10, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Card className="border-0 shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-blue-950/20 dark:via-background dark:to-cyan-950/20 overflow-hidden relative group">
                        {/* Mobile Number Badge */}
                        <div className="lg:hidden absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                          <span className="text-3xl font-bold text-white">1</span>
                        </div>

                        <CardContent className="p-8 md:p-10">
                          <div className="flex items-start space-x-4 mb-4">
                            <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 lg:hidden">
                              <Send className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                                Share Your Use Case
                              </h3>
                              <p className="text-lg text-muted-foreground leading-relaxed">
                                Tell us what you want automated via WhatsApp or email. Our team will understand your needs and business challenges.
                              </p>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-blue-200/50 dark:border-blue-800/30">
                            <Button
                              variant="outline"
                              size="sm"
                              className="group/btn"
                              onClick={handleWhatsAppClick}
                            >
                              <MessageCircle className="w-4 h-4 mr-2" />
                              WhatsApp Us
                              <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={handleEmailClick}
                            >
                              <Mail className="w-4 h-4 mr-2" />
                              Email Us
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  className="relative"
                  variants={staggerItem}
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Content Card (Reversed on Desktop) */}
                    <motion.div
                      className="lg:order-1"
                      whileHover={{ x: -10, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Card className="border-0 shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-purple-950/20 dark:via-background dark:to-pink-950/20 overflow-hidden relative group">
                        {/* Mobile Number Badge */}
                        <div className="lg:hidden absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                          <span className="text-3xl font-bold text-white">2</span>
                        </div>

                        <CardContent className="p-8 md:p-10">
                          <div className="flex items-start space-x-4 mb-4">
                            <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 lg:hidden">
                              <Lightbulb className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                                We Design Your AI Workflow
                              </h3>
                              <p className="text-lg text-muted-foreground leading-relaxed">
                                You get a clear automation plan designed by NextReach specialists. We'll map out every step and confirm it matches your vision.
                              </p>
                            </div>
                          </div>

                          {/* Features List */}
                          <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-purple-200/50 dark:border-purple-800/30">
                            <div className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-muted-foreground">Custom workflow</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-muted-foreground">Clear timeline</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-muted-foreground">Expert guidance</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-muted-foreground">Full transparency</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    {/* Right Side - Number Badge (Desktop) */}
                    <div className="hidden lg:flex justify-start lg:order-2">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/30">
                          <span className="text-6xl font-bold text-white">2</span>
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                          <Lightbulb className="w-5 h-5 text-white" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  className="relative"
                  variants={staggerItem}
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Number Badge (Desktop) */}
                    <div className="hidden lg:flex justify-end">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-green-500/30">
                          <span className="text-6xl font-bold text-white">3</span>
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center">
                          <Rocket className="w-5 h-5 text-white" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Right Side - Content Card */}
                    <motion.div
                      whileHover={{ x: 10, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Card className="border-0 shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-green-950/20 dark:via-background dark:to-emerald-950/20 overflow-hidden relative group">
                        {/* Mobile Number Badge */}
                        <div className="lg:hidden absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                          <span className="text-3xl font-bold text-white">3</span>
                        </div>

                        <CardContent className="p-8 md:p-10">
                          <div className="flex items-start space-x-4 mb-4">
                            <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 lg:hidden">
                              <Rocket className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                                Build, Test & Deliver
                              </h3>
                              <p className="text-lg text-muted-foreground leading-relaxed">
                                Your custom AI agent goes live — with ongoing support included. We ensure everything runs smoothly and optimize as you grow.
                              </p>
                            </div>
                          </div>

                          {/* Success Indicators */}
                          <div className="mt-6 pt-6 border-t border-green-200/50 dark:border-green-800/30">
                            <div className="flex items-center space-x-2 text-green-600 dark:text-green-400 mb-2">
                              <Rocket className="w-5 h-5" />
                              <span className="font-semibold">Live in days, not months</span>
                            </div>
                            <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                              <CheckCircle className="w-5 h-5" />
                              <span className="font-semibold">Ongoing support & optimization included</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="max-w-3xl mx-auto text-center mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <div className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 rounded-3xl p-10 md:p-12 text-white shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Automate Your Business?
              </h3>
              <p className="text-xl text-white/90 mb-8">
                Join 200+ businesses already using NextReach AI agents
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-foreground hover:bg-white/90 shadow-xl text-lg px-8 py-6"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Your Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Trust NextReach Studio Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-background to-gray-50 dark:from-slate-950/50 dark:via-background dark:to-gray-950/50 relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-r from-green-400/10 via-emerald-500/10 to-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            className="max-w-5xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-400/10 via-orange-500/10 to-red-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-400/20 mb-8"
              variants={fadeInUpVariants}
            >
              <Shield className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Trusted Partner
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              variants={fadeInUpVariants}
            >
              Why Trust{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
                NextReach Studio?
              </span>
            </motion.h2>

            <motion.p
              className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight"
              variants={fadeInUpVariants}
            >
              Because You're Not Hiring a Freelancer —
              <br className="hidden sm:block" />
              <span className="text-muted-foreground font-normal">
                You're Partnering With a Dedicated AI Automation Studio.
              </span>
            </motion.p>
          </motion.div>

          {/* Stats Section - Animated Counters */}
          <motion.div
            className="max-w-6xl mx-auto mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Stat 1 - AI Agents Delivered */}
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 text-center group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-cyan-400/0 group-hover:from-blue-400/10 group-hover:to-cyan-400/10 transition-all duration-500" />
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Bot className="w-8 h-8 text-white" />
                    </div>
                    <motion.div
                      className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      40+
                    </motion.div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Custom AI Agents<br />Delivered
                    </p>
                  </motion.div>
                </Card>
              </motion.div>

              {/* Stat 2 - Client Satisfaction */}
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 text-center group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-emerald-400/0 group-hover:from-green-400/10 group-hover:to-emerald-400/10 transition-all duration-500" />
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Star className="w-8 h-8 text-white fill-white" />
                    </div>
                    <motion.div
                      className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      97%
                    </motion.div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Client<br />Satisfaction
                    </p>
                  </motion.div>
                </Card>
              </motion.div>

              {/* Stat 3 - Countries Served */}
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 text-center group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 to-pink-400/0 group-hover:from-purple-400/10 group-hover:to-pink-400/10 transition-all duration-500" />
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Globe2 className="w-8 h-8 text-white" />
                    </div>
                    <motion.div
                      className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      3
                    </motion.div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Countries<br />Trusted In
                    </p>
                  </motion.div>
                </Card>
              </motion.div>

              {/* Stat 4 - Technologies */}
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-6 text-center group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/0 to-amber-400/0 group-hover:from-orange-400/10 group-hover:to-amber-400/10 transition-all duration-500" />
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Code2 className="w-8 h-8 text-white" />
                    </div>
                    <motion.div
                      className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      5+
                    </motion.div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Advanced<br />Technologies
                    </p>
                  </motion.div>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Value Proposition */}
          <motion.div
            className="max-w-6xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div
              className="bg-gradient-to-br from-white via-slate-50 to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 dark:border-slate-700"
              variants={fadeInUpVariants}
            >
              <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  At NextReach Studio, We Bring Together:
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Award, label: "Technical Expertise", description: "Deep AI & automation knowledge", gradient: "from-blue-500 to-cyan-500" },
                  { icon: Target, label: "Real-World Experience", description: "40+ successful deployments", gradient: "from-green-500 to-emerald-500" },
                  { icon: Zap, label: "Fast Delivery", description: "Live in days, not months", gradient: "from-purple-500 to-pink-500" },
                  { icon: MessageCircle, label: "Clean Communication", description: "Always responsive & clear", gradient: "from-orange-500 to-red-500" },
                  { icon: Settings, label: "Professional Systems", description: "Enterprise-grade solutions", gradient: "from-indigo-500 to-blue-500" },
                  { icon: HeadphonesIcon, label: "Long-Term Support", description: "We're here after launch", gradient: "from-teal-500 to-green-500" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{ y: -5, scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 group">
                      <div className={`w-14 h-14 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-2">
                        {item.label}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Brand Promise */}
          <motion.div
            className="max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-r from-green-500 via-emerald-500 to-blue-500 p-10 md:p-12 text-white text-center overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-white/10"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
              <div className="relative z-10">
                <Rocket className="w-16 h-16 mx-auto mb-6 text-white" />
                <p className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  We help businesses reach the next level by deploying AI that works
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6" />
                    <span>Without breaks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6" />
                    <span>Without errors</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6" />
                    <span>Without delays</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div
              className="text-center mb-10"
              variants={fadeInUpVariants}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Built On Industry-Leading Technology
              </h3>
              <p className="text-xl text-muted-foreground">
                We use the best tools to deliver enterprise-grade AI solutions
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-slate-900 to-gray-900 dark:from-slate-950 dark:to-gray-950 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700"
              variants={fadeInUpVariants}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { name: "OpenAI", description: "GPT Models" },
                  { name: "LangChain", description: "AI Framework" },
                  { name: "Vector DBs", description: "Smart Memory" },
                  { name: "APIs", description: "Integrations" },
                  { name: "Custom ML", description: "Tailored Models" },
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    variants={staggerItem}
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-6 mb-3 group-hover:scale-110 transition-transform">
                      <Code2 className="w-8 h-8 text-white mx-auto" />
                    </div>
                    <h4 className="text-white font-bold mb-1">{tech.name}</h4>
                    <p className="text-sm text-gray-400">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Global Trust Indicator */}
          <motion.div
            className="max-w-4xl mx-auto mt-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <div className="inline-flex items-center space-x-3 bg-white dark:bg-slate-800 px-8 py-4 rounded-full shadow-xl border border-slate-200 dark:border-slate-700">
              <Globe2 className="w-6 h-6 text-blue-500" />
              <span className="text-lg font-semibold text-foreground">
                Trusted across Romania 🇷🇴 • Poland 🇵🇱 • Malaysia 🇲🇾
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio / Demos Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/20 mb-8"
              variants={fadeInUpVariants}
            >
              <Boxes className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Real Solutions
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              variants={fadeInUpVariants}
            >
              AI Solutions Built by{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
                NextReach Studio
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
              variants={fadeInUpVariants}
            >
              Examples of what we've delivered for businesses like yours
            </motion.p>
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            className="max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Demo 1 - AI Appointment Booking */}
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all overflow-hidden group h-full">
                  {/* Image */}
                  <div className="relative h-64 bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600 overflow-hidden">
                    <img
                      src="/ai-appointment-booking.png"
                      alt="AI Appointment Booking Agent Interface"
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
                    {/* "Demo" Badge */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-white">DEMO AVAILABLE</span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      AI Appointment Booking Agent
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Automated scheduling assistant that handles bookings 24/7, sends reminders, and syncs with your calendar.
                    </p>

                    <Button
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0"
                      onClick={handleWhatsAppClick}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      See Demo on WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Demo 2 - Data Extraction AI */}
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all overflow-hidden group h-full">
                  {/* Image */}
                  <div className="relative h-64 bg-gradient-to-br from-purple-400 via-pink-500 to-purple-600 overflow-hidden">
                    <img
                      src="/data-extraction-ai.png"
                      alt="Data Extraction & Classification AI Interface"
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-white">DEMO AVAILABLE</span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Data Extraction & Classification AI
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Intelligent document processing that extracts, categorizes, and organizes data from PDFs, emails, and forms.
                    </p>

                    <Button
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                      onClick={handleWhatsAppClick}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      See Demo on WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Demo 3 - Customer Support Chatbot */}
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all overflow-hidden group h-full">
                  {/* Image */}
                  <div className="relative h-64 bg-gradient-to-br from-green-400 via-emerald-500 to-green-600 overflow-hidden">
                    <img
                      src="/customer-support-chatbot.png"
                      alt="Customer Support Chatbot Interface"
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20" />
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-white">DEMO AVAILABLE</span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Full Customer Support Chatbot
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      AI-powered support agent that answers FAQs, handles inquiries, and escalates complex issues intelligently.
                    </p>

                    <Button
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-0"
                      onClick={handleWhatsAppClick}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      See Demo on WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Demo 4 - Lead Qualification */}
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all overflow-hidden group h-full">
                  {/* Image */}
                  <div className="relative h-64 bg-gradient-to-br from-orange-400 via-red-500 to-orange-600 overflow-hidden">
                    <img
                      src="/lead-qualification-crm.png"
                      alt="Lead Qualification CRM Interface"
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20" />
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-white">DEMO AVAILABLE</span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Lead Qualification + CRM Automation
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Smart lead scoring system that qualifies prospects, updates CRM, and triggers follow-ups automatically.
                    </p>

                    <Button
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0"
                      onClick={handleWhatsAppClick}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      See Demo on WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Demo 5 - Operations AI */}
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all overflow-hidden group h-full">
                  {/* Image */}
                  <div className="relative h-64 bg-gradient-to-br from-indigo-400 via-blue-500 to-indigo-600 overflow-hidden">
                    <img
                      src="/operations-ai-assistant.png"
                      alt="Operations AI Assistant Interface"
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20" />
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-white">DEMO AVAILABLE</span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Internal Operations AI Assistant
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Custom AI that streamlines internal workflows, automates reporting, and assists your team with daily tasks.
                    </p>

                    <Button
                      className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white border-0"
                      onClick={handleWhatsAppClick}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      See Demo on WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* CTA Card - Stand Out */}
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all overflow-hidden group h-full bg-gradient-to-br from-green-500 via-emerald-500 to-blue-500 text-white">
                  <CardContent className="p-8 flex flex-col items-center justify-center h-full text-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Sparkles className="w-20 h-20 mb-6 text-white" />
                    </motion.div>

                    <h3 className="text-3xl font-bold mb-4">
                      Ready to See Your Custom Solution?
                    </h3>
                    <p className="text-lg text-white/90 mb-6 leading-relaxed">
                      Get instant demos and discuss your specific automation needs with our team.
                    </p>

                    <Button
                      size="lg"
                      className="bg-white text-foreground hover:bg-white/90 shadow-xl"
                      onClick={handleWhatsAppClick}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat With Us Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="max-w-3xl mx-auto text-center mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <p className="text-2xl font-bold text-foreground mb-6">
              See all demos instantly on WhatsApp
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 hover:from-green-500 hover:via-emerald-600 hover:to-blue-600 border-0 text-white text-lg px-8 py-6 shadow-2xl"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Request Demo Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-background to-gray-50 dark:from-slate-950/30 dark:via-background dark:to-gray-950/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-400/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-400/20 mb-8"
              variants={fadeInUpVariants}
            >
              <MessageCircle className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Common Questions
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              variants={fadeInUpVariants}
            >
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
                Questions
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
              variants={fadeInUpVariants}
            >
              Everything you need to know about working with NextReach Studio
            </motion.p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <Card className="border-0 shadow-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <Accordion type="single" collapsible className="w-full space-y-6">
                  {/* FAQ 1 - Pricing */}
                  <AccordionItem value="item-1" className="border-0">
                    <AccordionTrigger className="text-left hover:no-underline group">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                          <DollarSign className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-foreground pr-4">
                          Does NextReach Studio offer pricing packages?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="ml-14 pt-4">
                      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                        Every AI system is custom-built to match your exact requirements. There's no one-size-fits-all solution.
                      </p>
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl p-6 border border-blue-200/50 dark:border-blue-800/30">
                        <p className="text-foreground font-semibold mb-2">
                          📩 Share your use case for a tailored quote
                        </p>
                        <p className="text-sm text-muted-foreground">
                          We'll provide transparent pricing based on complexity, integrations, and your specific automation needs.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* FAQ 2 - Delivery Time */}
                  <AccordionItem value="item-2" className="border-0">
                    <AccordionTrigger className="text-left hover:no-underline group">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-foreground pr-4">
                          How fast is delivery?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="ml-14 pt-4">
                      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                        We pride ourselves on fast, reliable delivery without compromising quality.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl p-6 border border-green-200/50 dark:border-green-800/30">
                          <div className="flex items-center space-x-2 mb-2">
                            <Zap className="w-5 h-5 text-green-600" />
                            <p className="text-foreground font-bold">Simple Agents</p>
                          </div>
                          <p className="text-2xl font-bold text-green-600 mb-1">3–5 days</p>
                          <p className="text-sm text-muted-foreground">Basic chatbots, simple automations</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-6 border border-purple-200/50 dark:border-purple-800/30">
                          <div className="flex items-center space-x-2 mb-2">
                            <Layers className="w-5 h-5 text-purple-600" />
                            <p className="text-foreground font-bold">Complex Workflows</p>
                          </div>
                          <p className="text-2xl font-bold text-purple-600 mb-1">7–14 days</p>
                          <p className="text-sm text-muted-foreground">Multi-agent systems, advanced integrations</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* FAQ 3 - Support */}
                  <AccordionItem value="item-3" className="border-0">
                    <AccordionTrigger className="text-left hover:no-underline group">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                          <HeadphonesIcon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-foreground pr-4">
                          Do you provide support?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="ml-14 pt-4">
                      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                        Absolutely! NextReach Studio is committed to your long-term success.
                      </p>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-6 border border-purple-200/50 dark:border-purple-800/30">
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <p className="text-foreground"><span className="font-semibold">Ongoing support</span> after launch</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <p className="text-foreground"><span className="font-semibold">Continuous improvements</span> as your business evolves</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <p className="text-foreground"><span className="font-semibold">Optimization</span> and performance monitoring</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <p className="text-foreground"><span className="font-semibold">Responsive communication</span> whenever you need us</p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* FAQ 4 - Integrations */}
                  <AccordionItem value="item-4" className="border-0">
                    <AccordionTrigger className="text-left hover:no-underline group">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                          <Workflow className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-foreground pr-4">
                          Can you integrate our existing tools?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="ml-14 pt-4">
                      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                        Yes! We specialize in connecting your AI agents with your entire tech stack.
                      </p>
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-xl p-6 border border-orange-200/50 dark:border-orange-800/30">
                        <p className="text-foreground font-semibold mb-4">✅ We integrate with:</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {[
                            { icon: Database, label: "CRM Systems" },
                            { icon: MessageCircle, label: "WhatsApp" },
                            { icon: Mail, label: "Email Platforms" },
                            { icon: Code2, label: "Custom APIs" },
                            { icon: Database, label: "Databases" },
                            { icon: Boxes, label: "And More..." },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2 bg-white/50 dark:bg-slate-800/50 rounded-lg p-3"
                            >
                              <item.icon className="w-4 h-4 text-orange-600" />
                              <span className="text-sm font-medium text-foreground">{item.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="max-w-3xl mx-auto text-center mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <Card className="border-0 shadow-xl bg-gradient-to-r from-green-500 via-emerald-500 to-blue-500 text-white overflow-hidden relative">
              <CardContent className="p-10 md:p-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-xl text-white/90 mb-8">
                  Get instant answers from our team on WhatsApp
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-white text-foreground hover:bg-white/90 shadow-xl text-lg px-8 py-6"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Ask Us Anything
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
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

export default AIAgents;
