export interface ProjectResult {
  metric: string;
  value: string;
  improvement?: string;
  description: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  type: 'hero' | 'before' | 'after' | 'mobile' | 'desktop';
}

export interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
  rating: number;
}

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'hosting';
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  client: {
    name: string;
    industry: string;
    location: string;
    size: 'startup' | 'small' | 'medium' | 'enterprise';
  };
  timeline: {
    start: Date;
    end: Date;
    duration: string;
  };
  technologies: Technology[];
  challenge: string;
  solution: string;
  results: ProjectResult[];
  images: ProjectImage[];
  testimonial?: Testimonial;
  featured: boolean;
  status: 'completed' | 'ongoing' | 'maintenance';
  category: 'healthcare' | 'restaurant' | 'fitness' | 'retail' | 'services' | 'education';
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'SmileCare Dental Clinic Website',
    slug: 'smilecare-dental-pune',
    client: {
      name: 'SmileCare Dental Clinic',
      industry: 'Healthcare',
      location: 'Koregaon Park, Pune',
      size: 'small'
    },
    timeline: {
      start: new Date('2024-01-15'),
      end: new Date('2024-03-01'),
      duration: '6 weeks'
    },
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Tailwind CSS', category: 'frontend' },
      { name: 'Vercel', category: 'hosting' },
      { name: 'Google Analytics', category: 'tools' }
    ],
    challenge: 'SmileCare Dental was struggling with low online visibility and appointment bookings. Their old website was not mobile-friendly and lacked clear call-to-action buttons. Patients found it difficult to book appointments online.',
    solution: 'We designed a modern, mobile-first website with prominent "Book Appointment" buttons, integrated Google Maps for easy location finding, and created dedicated pages for each dental service with clear pricing and before/after galleries.',
    results: [
      {
        metric: 'Online Appointments',
        value: '65%',
        improvement: '+65%',
        description: 'Increase in online appointment requests within 2 months'
      },
      {
        metric: 'Mobile Traffic',
        value: '78%',
        improvement: '+45%',
        description: 'Improvement in mobile user engagement'
      },
      {
        metric: 'Page Load Speed',
        value: '1.2s',
        improvement: '70% faster',
        description: 'Average page load time on mobile devices'
      },
      {
        metric: 'Local Search Ranking',
        value: 'Top 3',
        improvement: 'From page 2',
        description: 'Ranking for "dentist Koregaon Park Pune"'
      }
    ],
    images: [
      {
        src: '/placeholder-dental-hero.jpg',
        alt: 'SmileCare Dental Clinic homepage',
        type: 'hero'
      },
      {
        src: '/placeholder-dental-mobile.jpg',
        alt: 'Mobile view of appointment booking',
        type: 'mobile'
      }
    ],
    testimonial: {
      content: 'NextReach transformed our online presence completely. We now get 3-4 appointment requests daily through our website, compared to maybe 1 per week before. The mobile design is fantastic!',
      author: 'Dr. Priya Sharma',
      position: 'Founder & Chief Dentist',
      company: 'SmileCare Dental Clinic',
      rating: 5
    },
    featured: true,
    status: 'completed',
    category: 'healthcare'
  },
  {
    id: '2',
    title: 'BrightSkin Dermatology Clinic',
    slug: 'brightskin-dermatology-pune',
    client: {
      name: 'BrightSkin Dermatology',
      industry: 'Healthcare',
      location: 'Koregaon Park, Pune',
      size: 'medium'
    },
    timeline: {
      start: new Date('2024-02-01'),
      end: new Date('2024-04-15'),
      duration: '10 weeks'
    },
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'Tailwind CSS', category: 'frontend' },
      { name: 'Vercel', category: 'hosting' },
      { name: 'Google Search Console', category: 'tools' }
    ],
    challenge: 'BrightSkin needed to establish authority in dermatology services and compete with established clinics. They wanted to rank for competitive keywords like "dermatologist Pune" and "skin treatment Pune".',
    solution: 'We created a comprehensive multi-page website with detailed treatment pages, FAQ sections, before/after galleries, and educational blog content. Implemented advanced SEO strategies and local business schema markup.',
    results: [
      {
        metric: 'Search Rankings',
        value: 'Top 3',
        improvement: 'From unranked',
        description: 'Ranking for "dermatologist Pune" and related terms'
      },
      {
        metric: 'Organic Traffic',
        value: '340%',
        improvement: '+340%',
        description: 'Increase in organic search traffic'
      },
      {
        metric: 'Consultation Bookings',
        value: '85%',
        improvement: '+85%',
        description: 'Increase in online consultation requests'
      },
      {
        metric: 'Page Authority',
        value: '45',
        improvement: '+35 points',
        description: 'Domain authority improvement in 6 months'
      }
    ],
    images: [
      {
        src: '/placeholder-dermatology-hero.jpg',
        alt: 'BrightSkin Dermatology homepage',
        type: 'hero'
      },
      {
        src: '/placeholder-dermatology-treatments.jpg',
        alt: 'Treatment pages layout',
        type: 'desktop'
      }
    ],
    testimonial: {
      content: 'The SEO results have been incredible. We now rank on the first page for multiple dermatology keywords in Pune. Our patient inquiries have tripled since the website launch.',
      author: 'Dr. Rajesh Mehta',
      position: 'Senior Dermatologist',
      company: 'BrightSkin Dermatology',
      rating: 5
    },
    featured: true,
    status: 'completed',
    category: 'healthcare'
  },
  {
    id: '3',
    title: 'CityCare Multi-Specialty Hospital',
    slug: 'citycare-hospital-mumbai',
    client: {
      name: 'CityCare Hospital',
      industry: 'Healthcare',
      location: 'Andheri, Mumbai',
      size: 'enterprise'
    },
    timeline: {
      start: new Date('2024-03-01'),
      end: new Date('2024-05-30'),
      duration: '12 weeks'
    },
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'AWS', category: 'hosting' },
      { name: 'Stripe', category: 'tools' }
    ],
    challenge: 'CityCare Hospital had a high bounce rate on their existing website and low online appointment bookings. The site was slow, not mobile-optimized, and lacked clear navigation for different medical departments.',
    solution: 'We built a streamlined, mobile-first website with department-wise navigation, online appointment booking system, doctor profiles, and integrated payment gateway for consultation fees.',
    results: [
      {
        metric: 'Bounce Rate',
        value: '40%',
        improvement: '-40%',
        description: 'Reduction in bounce rate across all pages'
      },
      {
        metric: 'Online Appointments',
        value: '120%',
        improvement: '+120%',
        description: 'Increase in online appointment bookings'
      },
      {
        metric: 'Mobile Conversions',
        value: '95%',
        improvement: '+95%',
        description: 'Improvement in mobile appointment completions'
      },
      {
        metric: 'Patient Satisfaction',
        value: '4.8/5',
        improvement: '+1.2 points',
        description: 'Average rating for online booking experience'
      }
    ],
    images: [
      {
        src: '/placeholder-hospital-hero.jpg',
        alt: 'CityCare Hospital homepage',
        type: 'hero'
      },
      {
        src: '/placeholder-hospital-booking.jpg',
        alt: 'Online appointment booking system',
        type: 'desktop'
      }
    ],
    testimonial: {
      content: 'NextReach delivered exactly what we needed - a professional, fast website that our patients love using. The online booking system has streamlined our operations significantly.',
      author: 'Dr. Anjali Desai',
      position: 'Chief Medical Officer',
      company: 'CityCare Hospital',
      rating: 5
    },
    featured: true,
    status: 'completed',
    category: 'healthcare'
  },
  {
    id: '4',
    title: 'Taste Junction Café Website',
    slug: 'taste-junction-cafe-mumbai',
    client: {
      name: 'Taste Junction Café',
      industry: 'Food & Beverage',
      location: 'Bandra, Mumbai',
      size: 'small'
    },
    timeline: {
      start: new Date('2024-04-01'),
      end: new Date('2024-05-15'),
      duration: '6 weeks'
    },
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Tailwind CSS', category: 'frontend' },
      { name: 'Vercel', category: 'hosting' },
      { name: 'WhatsApp API', category: 'tools' },
      { name: 'Google Maps', category: 'tools' }
    ],
    challenge: 'Taste Junction wanted to increase online orders and showcase their menu effectively. Their previous website had poor food photography and no clear ordering system.',
    solution: 'We created a visual-heavy, single-page website with high-quality food photography, sticky "Order Now" CTA that connects to WhatsApp, and integrated Google Maps for delivery areas.',
    results: [
      {
        metric: 'Online Orders',
        value: '100%',
        improvement: '+100%',
        description: 'Doubling of online orders through website'
      },
      {
        metric: 'WhatsApp Inquiries',
        value: '250%',
        improvement: '+250%',
        description: 'Increase in WhatsApp order inquiries'
      },
      {
        metric: 'Average Order Value',
        value: '₹450',
        improvement: '+₹120',
        description: 'Increase in average order value'
      },
      {
        metric: 'Customer Retention',
        value: '65%',
        improvement: '+35%',
        description: 'Repeat customers from online orders'
      }
    ],
    images: [
      {
        src: '/placeholder-cafe-hero.jpg',
        alt: 'Taste Junction Café homepage',
        type: 'hero'
      },
      {
        src: '/placeholder-cafe-menu.jpg',
        alt: 'Menu showcase section',
        type: 'desktop'
      }
    ],
    testimonial: {
      content: 'Our online orders have doubled since the new website launched. The WhatsApp integration makes it so easy for customers to place orders. Great work by NextReach!',
      author: 'Rohit Patel',
      position: 'Owner',
      company: 'Taste Junction Café',
      rating: 5
    },
    featured: false,
    status: 'completed',
    category: 'restaurant'
  },
  {
    id: '5',
    title: 'FixPro Home Services Website',
    slug: 'fixpro-services-pune',
    client: {
      name: 'FixPro Services',
      industry: 'Home Services',
      location: 'Kothrud, Pune',
      size: 'small'
    },
    timeline: {
      start: new Date('2024-05-01'),
      end: new Date('2024-06-30'),
      duration: '8 weeks'
    },
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'Tailwind CSS', category: 'frontend' },
      { name: 'Vercel', category: 'hosting' },
      { name: 'Google Ads', category: 'tools' }
    ],
    challenge: 'FixPro needed to rank for local service keywords like "AC repair near me" and "plumber Pune". They were getting very few leads from online sources.',
    solution: 'We built an SEO-focused service website with location-specific landing pages, service area maps, customer reviews section, and emergency contact features.',
    results: [
      {
        metric: 'Local Leads',
        value: '120+',
        improvement: '+400%',
        description: 'Qualified leads in first 6 weeks'
      },
      {
        metric: 'Search Rankings',
        value: 'Top 5',
        improvement: 'From unranked',
        description: 'Ranking for "AC repair Pune" and similar terms'
      },
      {
        metric: 'Call Conversions',
        value: '35%',
        improvement: '+25%',
        description: 'Website visitors who called for service'
      },
      {
        metric: 'Service Bookings',
        value: '180%',
        improvement: '+180%',
        description: 'Increase in monthly service bookings'
      }
    ],
    images: [
      {
        src: '/placeholder-services-hero.jpg',
        alt: 'FixPro Services homepage',
        type: 'hero'
      },
      {
        src: '/placeholder-services-areas.jpg',
        alt: 'Service areas and contact section',
        type: 'desktop'
      }
    ],
    testimonial: {
      content: 'The website has transformed our business. We now get 4-5 service calls daily from the website alone. The local SEO work has been exceptional.',
      author: 'Suresh Kumar',
      position: 'Founder',
      company: 'FixPro Services',
      rating: 5
    },
    featured: false,
    status: 'completed',
    category: 'services'
  },
  {
    id: '6',
    title: 'FitZone Gym & Fitness Center',
    slug: 'fitzone-gym-mumbai',
    client: {
      name: 'FitZone Gym',
      industry: 'Fitness',
      location: 'Powai, Mumbai',
      size: 'medium'
    },
    timeline: {
      start: new Date('2024-06-01'),
      end: new Date('2024-07-30'),
      duration: '8 weeks'
    },
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Tailwind CSS', category: 'frontend' },
      { name: 'Vercel', category: 'hosting' },
      { name: 'Razorpay', category: 'tools' }
    ],
    challenge: 'FitZone wanted to increase membership sign-ups and showcase their facilities effectively. They needed online membership payment integration and class scheduling features.',
    solution: 'We created a dynamic fitness website with virtual gym tours, trainer profiles, class schedules, online membership payments, and member testimonials with transformation stories.',
    results: [
      {
        metric: 'Membership Sign-ups',
        value: '75%',
        improvement: '+75%',
        description: 'Increase in monthly membership registrations'
      },
      {
        metric: 'Online Payments',
        value: '90%',
        improvement: 'New feature',
        description: 'Members now pay fees online'
      },
      {
        metric: 'Class Bookings',
        value: '60%',
        improvement: '+60%',
        description: 'Increase in fitness class bookings'
      },
      {
        metric: 'Member Retention',
        value: '85%',
        improvement: '+20%',
        description: 'Improvement in member retention rate'
      }
    ],
    images: [
      {
        src: '/placeholder-gym-hero.jpg',
        alt: 'FitZone Gym homepage',
        type: 'hero'
      },
      {
        src: '/placeholder-gym-classes.jpg',
        alt: 'Class schedules and booking system',
        type: 'desktop'
      }
    ],
    testimonial: {
      content: 'The website perfectly captures the energy of our gym. Online membership payments have made everything so much easier for both us and our members.',
      author: 'Vikram Singh',
      position: 'Gym Owner',
      company: 'FitZone Gym',
      rating: 5
    },
    featured: false,
    status: 'completed',
    category: 'fitness'
  }
];

export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getProjectsByCategory = (category: string) => projects.filter(project => project.category === category);
export const getProjectById = (id: string) => projects.find(project => project.id === id);
export const getProjectBySlug = (slug: string) => projects.find(project => project.slug === slug);