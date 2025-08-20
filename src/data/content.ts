// Enhanced content for NextReach Studio website

export const heroContent = {
  title: "NextReach Studio — Professional Websites That Build Trust & Bring Customers",
  subtitle: "We design fast, mobile-first, and SEO-ready websites for clinics, shops, and service providers in Pune, Mumbai, and beyond.",
  ctaButtons: [
    {
      text: "Get Your Website Today",
      variant: "primary" as const,
      href: "/contact"
    },
    {
      text: "View Our Work",
      variant: "secondary" as const,
      href: "/portfolio"
    }
  ]
};

export const aboutContent = {
  title: "About NextReach Studio",
  subtitle: "Your trusted digital partner for professional web design",
  sections: [
    {
      title: "Our Story",
      content: "At NextReach, we design websites that help local businesses stand out and grow. From clinics in Pune to cafés in Mumbai, our work speaks for itself — fast, mobile-first, and SEO-optimized websites that convert visitors into real customers."
    },
    {
      title: "Our Approach",
      content: "Our team understands the digital behavior of Indian audiences. That's why every site we build focuses on what matters most: quick load times, simple navigation, and clear calls-to-action that turn searches into sales."
    },
    {
      title: "Our Experience",
      content: "We've partnered with healthcare providers, retailers, and service businesses across Pune and Mumbai to create professional websites that inspire trust and deliver measurable results."
    },
    {
      title: "Our Mission",
      content: "To be the trusted digital partner for local businesses, making high-quality web design accessible and impactful across India."
    }
  ],
  stats: [
    { value: 50, label: "Projects Completed", suffix: "+" },
    { value: 45, label: "Happy Clients", suffix: "+" },
    { value: 98, label: "Client Satisfaction", suffix: "%" },
    { value: 24, label: "Average Delivery", suffix: " days" }
  ]
};

export const servicesContent = {
  title: "Our Services",
  subtitle: "Tailored website solutions for different business types in Pune and Mumbai",
  services: [
    {
      title: "Healthcare Websites",
      description: "Professional websites designed for doctors, clinics, and healthcare providers",
      features: [
        "Patient-friendly websites with appointment forms",
        "Before & after gallery integrations",
        "FAQ-driven content to answer patient questions",
        "Google Maps integration for easy location",
        "Mobile-optimized for patient convenience"
      ],
      pricing: "Starting from ₹16,999",
      cta: "Get Healthcare Website",
      industries: ["Dental Clinics", "Dermatology", "General Practice", "Specialty Clinics"]
    },
    {
      title: "Business Websites",
      description: "One-page and multi-page sites for shops, restaurants, and local services",
      features: [
        "One-page professional websites",
        "Online product/service showcase",
        "Google Maps & 'Call Now' integration",
        "SEO optimization for local searches",
        "Fast loading on 4G networks"
      ],
      pricing: "Starting from ₹9,999",
      cta: "Get Business Website",
      industries: ["Restaurants", "Retail Shops", "Service Providers", "Fitness Centers"]
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration and inventory management",
      features: [
        "Custom e-commerce design",
        "Payment gateway integration",
        "Inventory management system",
        "Mobile-first shopping experience",
        "SEO-optimized product pages"
      ],
      pricing: "Starting from ₹24,999",
      cta: "Get E-commerce Site",
      industries: ["Online Stores", "Fashion", "Electronics", "Home & Garden"]
    }
  ]
};

export const pricingContent = {
  title: "Clear Pricing",
  subtitle: "Transparent packages for Pune and Mumbai businesses. No hidden costs.",
  packages: [
    {
      name: "Starter",
      price: "₹9,999",
      description: "Perfect for new businesses",
      features: [
        "1-3 pages",
        "Mobile-first design",
        "Basic SEO",
        "Contact forms",
        "Google Maps integration",
        "1 month support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "₹16,999",
      description: "Great for growing businesses",
      features: [
        "4-5 pages",
        "Advanced SEO",
        "Google Maps integration",
        "Appointment booking",
        "Social media integration",
        "3 months support"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Premium",
      price: "₹24,999",
      description: "Complete business solution",
      features: [
        "6-7 pages",
        "Advanced SEO & analytics",
        "Online booking system",
        "Payment integration",
        "Custom features",
        "6 months support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Custom",
      price: "₹35,000+",
      description: "Tailored for large businesses",
      features: [
        "8+ pages",
        "Custom features",
        "Advanced integrations",
        "E-commerce functionality",
        "Multi-language support",
        "12 months support"
      ],
      cta: "Contact Us",
      popular: false
    }
  ]
};

export const contactContent = {
  title: "Ready to Grow Your Business?",
  subtitle: "Let's create a professional website that brings more customers to your Pune or Mumbai business. Get in touch today!",
  contactInfo: {
    phone: "+91 98765 43210",
    email: "hello@nextreachstudio.com",
    address: "Pune & Mumbai, Maharashtra",
    hours: "Mon-Sat: 9:00 AM - 7:00 PM"
  },
  form: {
    title: "Start Your Project",
    description: "We'll provide a detailed proposal within 24 hours",
    fields: [
      { name: "firstName", label: "First Name", type: "text", required: true },
      { name: "lastName", label: "Last Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "tel", required: false },
      { name: "business", label: "Business Name", type: "text", required: true },
      { name: "location", label: "Location", type: "text", required: true },
      { name: "service", label: "Service Needed", type: "select", required: true, options: [
        "New Website",
        "Website Redesign",
        "E-commerce Store",
        "SEO Optimization",
        "Maintenance & Support"
      ]},
      { name: "budget", label: "Budget Range", type: "select", required: false, options: [
        "₹10,000 - ₹20,000",
        "₹20,000 - ₹35,000",
        "₹35,000 - ₹50,000",
        "₹50,000+"
      ]},
      { name: "message", label: "Project Details", type: "textarea", required: true }
    ]
  }
};

export const footerContent = {
  company: {
    name: "NextReach Studio",
    description: "Professional web design and development for businesses in Pune and Mumbai.",
    logo: "/nextreach-logo.jpg"
  },
  links: {
    services: [
      { name: "Web Design", href: "/services" },
      { name: "Web Development", href: "/services" },
      { name: "SEO Optimization", href: "/services" },
      { name: "E-commerce", href: "/services" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Portfolio", href: "/portfolio" },
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
    email: "hello@nextreachstudio.com",
    address: "Pune & Mumbai, Maharashtra, India"
  },
  social: [
    { name: "LinkedIn", href: "https://linkedin.com/company/nextreach-studio", icon: "linkedin" },
    { name: "Twitter", href: "https://twitter.com/nextreachstudio", icon: "twitter" },
    { name: "Instagram", href: "https://instagram.com/nextreachstudio", icon: "instagram" }
  ]
};

export const whyChooseUsContent = {
  title: "Why Choose NextReach",
  subtitle: "We understand the unique needs of local businesses in Pune and Mumbai. Here's what sets us apart.",
  features: [
    {
      title: "Mobile-First, Always",
      description: "Over 80% of searches in India are on phones. Your site will look perfect on every device.",
      icon: "monitor"
    },
    {
      title: "Proven for Local Businesses",
      description: "From doctors to retailers, we know how to design websites that bring in foot traffic and appointments.",
      icon: "target"
    },
    {
      title: "SEO-Ready",
      description: "Show up when people search 'clinic near me' or 'best store in Mumbai.'",
      icon: "zap"
    },
    {
      title: "Fast & Reliable",
      description: "Lightweight builds that load quickly, even on 4G.",
      icon: "clock"
    },
    {
      title: "Clear Pricing",
      description: "Transparent packages, no hidden costs.",
      icon: "shield"
    },
    {
      title: "Local Expertise",
      description: "Deep understanding of Pune and Mumbai markets and customer behavior.",
      icon: "map-pin"
    }
  ]
};

export const processContent = {
  title: "Our Process",
  subtitle: "From concept to launch, we make it simple and transparent",
  steps: [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We understand your business, goals, and target audience to create the perfect strategy.",
      duration: "1-2 days"
    },
    {
      step: 2,
      title: "Design & Development",
      description: "Our team creates a beautiful, functional website tailored to your brand and needs.",
      duration: "2-3 weeks"
    },
    {
      step: 3,
      title: "Testing & Optimization",
      description: "We thoroughly test your website across all devices and optimize for performance.",
      duration: "3-5 days"
    },
    {
      step: 4,
      title: "Launch & Support",
      description: "We launch your website and provide ongoing support to ensure everything runs smoothly.",
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