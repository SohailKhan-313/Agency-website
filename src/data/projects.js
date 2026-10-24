export const projects = [
  {
    id: 'hms-portal',
    title: 'Hospital Management System (HMS)',
    category: 'web',
    categoryLabel: 'Web Development',
    lead: 'Sohail Khan',
    client: 'Healthcare ERP',
    image: '/images/project-analytics.jpg',
    metric: 'Live on Railway Cloud',
    summary: 'Clinical hospital portal featuring multi-role authentication (admins, doctors, receptionists), appointment booking, and patient records.',
    description: 'Designed and deployed by Sohail Khan with secure role-based access control (RBAC). Features patient registration, appointment scheduling, digital medical history storage, and billing management.',
    highlights: [
      'Multi-role authentication & portal access (Doctor, Admin, Staff)',
      'Patient registration and electronic medical records',
      'Doctor appointment scheduling with real-time updates',
      'Live production deployment on Railway Cloud'
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Railway Cloud', 'REST API'],
    liveUrl: 'https://hms-production-2e9b.up.railway.app/login',
    githubUrl: 'https://github.com/SohailKhan-313',
    demoType: 'Live Portal'
  },
  {
    id: 'school-management-system',
    title: 'School Management System & Academic Portal',
    category: 'web',
    categoryLabel: 'Web Development',
    lead: 'Sohail Khan',
    client: 'Academic Institutions ERP',
    image: '/images/project-school.jpg',
    metric: 'Live on Railway Cloud',
    summary: 'Comprehensive academic ERP for student enrollment, daily attendance tracking, mark sheets, and automated fee receipt generation.',
    description: 'Architected by Sohail Khan to digitize educational workflows. Features dedicated portals for school administrators, teachers, parents, and students with real-time record synchronization.',
    highlights: [
      'Dedicated dashboards for School Admins, Teachers, Parents, and Students',
      'Student enrollment, class allocations, and profile management',
      'Daily attendance tracking with automated absence alerts',
      'Exam mark sheets & automated printable report card generation'
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Blade'],
    liveUrl: 'https://cms-school-based-production.up.railway.app',
    githubUrl: 'https://github.com/SohailKhan-313',
    demoType: 'Live Academic Portal'
  },
  {
    id: 'property-advertisement',
    title: 'Property Advertisement Application',
    category: 'web',
    categoryLabel: 'Web Development',
    lead: 'Sohail Khan',
    client: 'Real Estate Platform',
    image: '/images/project-fintech.jpg',
    metric: 'Live on Netlify',
    summary: 'Real estate portal connecting buyers, sellers, and agents with interactive property discovery and specifications.',
    description: 'Developed by Sohail Khan with dynamic listing filters, location search, specification breakdowns, and direct agent inquiry connections.',
    highlights: [
      'Filter properties by location, price bracket, and property type',
      'Seller listing dashboard with photo uploads & specs',
      'Direct WhatsApp and email lead connection for agents',
      'Mobile-responsive layout hosted live on Netlify'
    ],
    techStack: ['Laravel', 'PHP', 'React', 'MySQL', 'Tailwind CSS', 'Netlify'],
    liveUrl: 'https://propertyadvatisment.netlify.app/',
    githubUrl: 'https://github.com/SohailKhan-313',
    demoType: 'Live Property App'
  },
  {
    id: 'restaurant-management',
    title: 'Restaurant Management System (RMS)',
    category: 'web',
    categoryLabel: 'Web Development',
    lead: 'Sohail Khan',
    client: 'Hospitality Operating System',
    image: '/images/project-analytics.jpg',
    metric: 'Live on Railway Cloud',
    summary: 'All-in-one platform managing restaurant tables, digital food menus, kitchen orders, and customer billing.',
    description: 'Streamlines dining room turnover and order accuracy. Developed by Sohail Khan with live table status tracking, digital menu categorization, and instant invoice printing.',
    highlights: [
      'Digital menu management with item categories and pricing',
      'Table reservation & dining status tracker',
      'Live kitchen order tickets and invoice printing',
      'Admin dashboard for sales and turnover monitoring'
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Railway Cloud'],
    liveUrl: 'https://rms-production-4975.up.railway.app',
    githubUrl: 'https://github.com/SohailKhan-313',
    demoType: 'Live RMS Platform'
  },
  {
    id: 'notes-app',
    title: 'Modern Notes Application',
    category: 'web',
    categoryLabel: 'Web Development',
    lead: 'Sohail Khan',
    client: 'Productivity Web App',
    image: '/images/project-ai.jpg',
    metric: 'Live on Vercel',
    summary: 'Fast, minimalist digital notepad with categorization, tags, search-as-you-type, and persistent database storage.',
    description: 'Built with MERN Stack by Sohail Khan. Offers instant CRUD note creation, category tagging, responsive layout, and cloud synchronization.',
    highlights: [
      'Instant note creation, editing, and deletion (CRUD)',
      'Live keyword search and category tag filtering',
      'Responsive minimalist UI designed for rapid capture',
      'Live production deployment on Vercel'
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
    liveUrl: 'https://notes-app-mocha-gamma.vercel.app/',
    githubUrl: 'https://github.com/SohailKhan-313',
    demoType: 'Live Web App'
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast Application',
    category: 'web',
    categoryLabel: 'Web Development',
    lead: 'Sohail Khan',
    client: 'Weather Analytics Tool',
    image: '/images/project-ai.jpg',
    metric: 'Live on Netlify',
    summary: 'Interactive real-time weather analytics application providing localized meteorological forecasts.',
    description: 'Engineered by Sohail Khan with external REST API integration, instant city search, humidity, wind conditions, and responsive UI.',
    highlights: [
      'Real-time weather data fetching via external REST APIs',
      'Instant city/location search with error handling',
      'Dynamic weather conditions display & responsive UI',
      'Live production deployment on Netlify'
    ],
    techStack: ['React', 'JavaScript', 'Weather API', 'CSS3', 'Netlify'],
    liveUrl: 'https://wheatherappsohail.netlify.app/',
    githubUrl: 'https://github.com/SohailKhan-313',
    demoType: 'Live Web App'
  },
  {
    id: 'pulsepay-fintech-app',
    title: 'PulsePay - Next-Gen Mobile Wallet',
    category: 'app',
    categoryLabel: 'App Development',
    lead: 'Waqas Khan',
    client: 'PulsePay Financial',
    image: '/project_app.jpg',
    metric: '4.9★ App Store Rating',
    summary: 'Cross-platform mobile fintech app enabling instant transfers, virtual debit cards, and contactless payments.',
    description: 'Engineered by Waqas Khan using Flutter and native bridges. Features biometric authorization, silky-smooth 60fps micro-animations, and real-time transaction tracking.',
    highlights: [
      'Multi-currency digital wallet with contactless payments',
      'Biometric authentication with FaceID / Fingerprint security',
      'Real-time push notifications via Firebase Cloud Messaging',
      'Offline-first transaction queuing'
    ],
    techStack: ['Flutter', 'Dart', 'Firebase', 'Swift', 'Kotlin'],
    liveUrl: 'https://wa.me/923470232059?text=Hi%20Waqas!%20I%20want%20to%20discuss%20a%20mobile%20app%20project.',
    githubUrl: 'https://github.com',
    demoType: 'Mobile App Demo'
  },
  {
    id: 'aura-beauty-campaign',
    title: 'Aura Beauty - Viral Social Growth',
    category: 'social',
    categoryLabel: 'Social Media Marketing',
    lead: 'Hassan Munir',
    client: 'Aura Luxury Skincare',
    image: '/project_social.jpg',
    metric: '2.4M+ Viral Reel Views',
    summary: 'Brand identity revamp and viral short-form video campaign driving 410% growth in direct customer orders.',
    description: 'Directed by Hassan Munir. Developed aesthetic content calendars, viral TikTok and Instagram Reel hooks, and high-converting Meta ad campaigns.',
    highlights: [
      '30+ bespoke lifestyle posts and high-converting viral reels',
      '8.4% average engagement rate across TikTok & Instagram',
      'Targeted ad funnels delivering 4.8x average ROAS',
      'Influencer partnership coordination'
    ],
    techStack: ['Meta Ads Manager', 'TikTok Creative Center', 'Canva Pro', 'CapCut Studio'],
    liveUrl: 'https://wa.me/923470232059?text=Hi%20Hassan!%20I%20want%20to%20scale%20my%20social%20media%20marketing.',
    githubUrl: 'https://instagram.com',
    demoType: 'Social Media Campaign'
  }
];
