// Enhanced content for NextReach Studio - AI Automation & Custom AI Agents

export const heroContent = {
  title: "NextReach Studio — Custom AI Agents That Automate Your Business",
  subtitle: "We build intelligent AI agents that handle your support, sales, workflows, and operations — 24/7 automation designed for your business.",
  ctaButtons: [
    {
      text: "Get Your AI Agent",
      variant: "primary" as const,
      href: "/ai-agents"
    },
    {
      text: "See How It Works",
      variant: "secondary" as const,
      href: "/ai-agents#how-it-works"
    }
  ]
};

export const aboutContent = {
  title: "About NextReach Studio",
  subtitle: "Your trusted partner in AI automation and intelligent business solutions",
  sections: [
    {
      title: "Our Story",
      content: "At NextReach Studio, we specialize in building custom AI agents that automate repetitive work and streamline operations. From chatbot automation to complex multi-agent systems, we help businesses reach their next level through intelligent automation."
    },
    {
      title: "Our Approach",
      content: "Every AI agent we build is custom-designed for your specific workflows and business needs. We don't use templates — we create tailored solutions that integrate with your existing tools and work exactly how you need them to."
    },
    {
      title: "Our Experience",
      content: "We've partnered with businesses globally to deploy AI agents for customer support, lead qualification, data processing, and internal operations. Our solutions are trusted across Romania, Poland, and Malaysia."
    },
    {
      title: "Our Mission",
      content: "To empower businesses with AI automation that works 24/7 without breaks, errors, or delays — helping you reach the next level of efficiency and growth."
    }
  ],
  stats: [
    { value: 40, label: "AI Agents Delivered", suffix: "+" },
    { value: 97, label: "Client Satisfaction", suffix: "%" },
    { value: 5, label: "Average Delivery Days", suffix: "" },
    { value: 200, label: "Businesses Automated", suffix: "+" }
  ]
};

export const servicesContent = {
  title: "AI Solutions We Build",
  subtitle: "Custom AI agents designed for your specific business needs and workflows",
  services: [
    {
      title: "Custom AI Agents",
      description: "Fully tailored AI automation built specifically for your business processes",
      features: [
        "100% custom workflows — not templates",
        "AI agents that work 24/7",
        "Integration with your existing tools",
        "Multi-channel automation (WhatsApp, Email, Web)",
        "Ongoing optimization and support"
      ],
      pricing: "Custom Quote",
      cta: "Get Your AI Agent",
      industries: ["Any Industry", "Custom Workflows", "Scalable Solutions", "Enterprise-Ready"]
    },
    {
      title: "AI Chatbots",
      description: "WhatsApp and website chatbots that handle customer support automatically",
      features: [
        "24/7 customer support automation",
        "Multi-language support",
        "Branded voice and tone",
        "CRM integration",
        "Smart escalation to humans"
      ],
      pricing: "From $999/month",
      cta: "Get AI Chatbot",
      industries: ["E-commerce", "Healthcare", "SaaS", "Service Businesses"]
    },
    {
      title: "Workflow Automation",
      description: "AI-powered automation for repetitive business processes and operations",
      features: [
        "CRM and database integration",
        "Email and calendar automation",
        "Document processing and data extraction",
        "API connections to your tools",
        "Custom reporting and analytics"
      ],
      pricing: "From $1,499/month",
      cta: "Automate Workflows",
      industries: ["Operations", "Sales Teams", "Data Processing", "Admin Tasks"]
    }
  ]
};

export const pricingContent = {
  title: "Custom AI Solutions",
  subtitle: "Every AI agent is custom-built. Share your use case for a tailored quote.",
  packages: [
    {
      name: "AI Chatbot",
      price: "$999/mo",
      description: "Perfect for customer support automation",
      features: [
        "WhatsApp or website chatbot",
        "24/7 automated responses",
        "FAQ and knowledge base",
        "Basic CRM integration",
        "Multi-language support",
        "Monthly optimization"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "AI Agent",
      price: "Custom",
      description: "Full automation for your workflows",
      features: [
        "Custom AI workflow design",
        "Multi-tool integration",
        "Advanced automation logic",
        "Data processing capabilities",
        "Ongoing support included",
        "Continuous improvements"
      ],
      cta: "Get Quote",
      popular: true
    },
    {
      name: "Multi-Agent System",
      price: "Enterprise",
      description: "Complex automation for large teams",
      features: [
        "Multiple coordinated AI agents",
        "Advanced enterprise integrations",
        "Custom reporting dashboards",
        "Dedicated automation specialist",
        "Priority support",
        "Quarterly strategy reviews"
      ],
      cta: "Contact Us",
      popular: false
    },
    {
      name: "Consultation",
      price: "Free",
      description: "Discover what AI can automate for you",
      features: [
        "Free WhatsApp consultation",
        "Automation opportunity analysis",
        "Custom workflow recommendations",
        "ROI projections",
        "No commitment required",
        "Available worldwide"
      ],
      cta: "Book Consultation",
      popular: false
    }
  ]
};

export const contactContent = {
  title: "Ready to Automate Your Business?",
  subtitle: "Let's build custom AI agents that work 24/7 for your business. Get in touch today for a free consultation!",
  contactInfo: {
    phone: "+91 98765 43210",
    email: "admin@nextreachstudio.com",
    address: "Global: Romania, Poland, Malaysia",
    hours: "Available 9AM-7PM IST"
  },
  form: {
    title: "Start Your AI Automation",
    description: "We'll provide a custom automation plan within 24 hours",
    fields: [
      { name: "firstName", label: "First Name", type: "text", required: true },
      { name: "lastName", label: "Last Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone/WhatsApp", type: "tel", required: false },
      { name: "business", label: "Business Name", type: "text", required: true },
      { name: "industry", label: "Industry", type: "text", required: true },
      {
        name: "service", label: "What Do You Want to Automate?", type: "select", required: true, options: [
          "Customer Support",
          "Lead Qualification",
          "Data Entry & Processing",
          "Appointment Booking",
          "Internal Operations",
          "Multi-Agent System",
          "Other"
        ]
      },
      {
        name: "budget", label: "Monthly Budget", type: "select", required: false, options: [
          "$500 - $1,000",
          "$1,000 - $2,500",
          "$2,500 - $5,000",
          "$5,000+"
        ]
      },
      { name: "message", label: "Describe Your Automation Needs", type: "textarea", required: true }
    ]
  }
};

export const footerContent = {
  company: {
    name: "NextReach Studio",
    description: "Custom AI agents and automation specialists helping businesses automate support, sales, and operations.",
    logo: "/nextreach-logo.jpg"
  },
  links: {
    services: [
      { name: "Custom AI Agents", href: "/ai-agents" },
      { name: "AI Chatbots", href: "/ai-agents#chatbots" },
      { name: "Workflow Automation", href: "/ai-agents#automation" },
      { name: "Multi-Agent Systems", href: "/ai-agents#multi-agent" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Case Studies", href: "/ai-agents#portfolio" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" }
    ]
  },
  contact: {
    phone: "+91 98765 43210",
    email: "admin@nextreachstudio.com",
    address: "Romania, Poland, Malaysia"
  },
  social: [
    { name: "LinkedIn", href: "https://linkedin.com/company/nextreach-studio", icon: "linkedin" },
    { name: "Twitter", href: "https://twitter.com/nextreachstudio", icon: "twitter" },
    { name: "Instagram", href: "https://instagram.com/nextreachstudio", icon: "instagram" }
  ]
};

export const whyChooseUsContent = {
  title: "Why Choose NextReach Studio",
  subtitle: "We build AI agents that actually work for your business. Here's what sets us apart.",
  features: [
    {
      title: "100% Custom Solutions",
      description: "No templates. Every AI agent is built specifically for your workflows and business needs.",
      icon: "bot"
    },
    {
      title: "Fast Delivery",
      description: "Simple agents in 3-5 days, complex systems in 7-14 days. Live quickly, optimize continuously.",
      icon: "zap"
    },
    {
      title: "Expert Team",
      description: "Built by NextReach AI automation specialists with deep expertise in OpenAI, LangChain, and vector databases.",
      icon: "award"
    },
    {
      title: "24/7 Automation",
      description: "AI agents that work around the clock without breaks, errors, or delays.",
      icon: "clock"
    },
    {
      title: "Full Integration",
      description: "Connect with CRMs, WhatsApp, email systems, databases, APIs, and more.",
      icon: "workflow"
    },
    {
      title: "Ongoing Support",
      description: "Continuous optimization and dedicated support to ensure your AI performs at its best.",
      icon: "headphones"
    }
  ]
};

export const processContent = {
  title: "How It Works",
  subtitle: "Partnering with NextReach Studio is fast and simple",
  steps: [
    {
      step: 1,
      title: "Share Your Use Case",
      description: "Tell us what you want automated via WhatsApp or email. We'll understand your needs.",
      duration: "Same day"
    },
    {
      step: 2,
      title: "We Design Your AI Workflow",
      description: "Get a clear automation plan designed by NextReach specialists.",
      duration: "1-2 days"
    },
    {
      step: 3,
      title: "Build, Test & Deliver",
      description: "Your custom AI agent goes live with ongoing support included.",
      duration: "3-14 days"
    },
    {
      step: 4,
      title: "Optimize & Scale",
      description: "We continuously improve your AI and help you automate even more.",
      duration: "Ongoing"
    }
  ]
};

export default {
  heroContent,
  aboutContent,
  servicesContent,
  pricingContent,
  contactContent,
  footerContent,
  whyChooseUsContent,
  processContent
};