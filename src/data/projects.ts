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
        start: new Date('2025-01-15'),
  end: new Date('2025-03-01'),
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
        src: 'smilecare-dental.png',
        alt: 'SmileCare Dental Clinic homepage',
        type: 'hero'
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
        start: new Date('2025-02-01'),
  end: new Date('2025-04-15'),
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
        src: 'brightskin-dermatology.png',
        alt: 'BrightSkin Dermatology homepage',
        type: 'hero'
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
    title: 'Taste Junction Café Website',
    slug: 'taste-junction-cafe-mumbai',
    client: {
      name: 'Taste Junction Café',
      industry: 'Food & Beverage',
      location: 'Bandra, Mumbai',
      size: 'small'
    },
    timeline: {
        start: new Date('2025-04-01'),
  end: new Date('2025-05-15'),
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
        src: 'taste-junctio-cafe.png',
        alt: 'Taste Junction Café homepage',
        type: 'hero'
      }
    ],
    testimonial: {
      content: 'Our online orders have doubled since the new website launched. The WhatsApp integration makes it so easy for customers to place orders. Great work by NextReach!',
      author: 'Rohit Patel',
      position: 'Owner',
      company: 'Taste Junction Café',
      rating: 5
    },
    featured: true,
    status: 'completed',
    category: 'restaurant'
  }
];

export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getProjectsByCategory = (category: string) => projects.filter(project => project.category === category);
export const getProjectById = (id: string) => projects.find(project => project.id === id);
export const getProjectBySlug = (slug: string) => projects.find(project => project.slug === slug);