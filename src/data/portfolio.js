export const portfolio = {
  name: 'Somu Mahesh Kiran Babu',
  role: 'Java Full Stack Developer',
  location: 'Tirupati,Andhra Pradesh,India',
  availability: 'Available for internship and placement opportunities',
  tagline: 'Building fast, thoughtful and accessible digital experiences with React.',
  email: 'somumahesh8886@gmail.com',
  phone: '+91 8886888139',
  github: 'https://github.com/MaheshSomu',
  linkedin: 'https://www.linkedin.com/in/mahesh-somu-533044315/',
  resume: '/Somu_Mahesh_Resume.pdf',
  leetcode: 'https://leetcode.com/u/MaheshSomu/',
  hackerrank: 'https://www.hackerrank.com/profile/somumahesh8886',
  githubContributions: 'https://github.com/MaheshSomu',

  hero: {
    headline: 'Building digital experiences that matter.',
    highlightWord: 'experiences',
    subtext:
      "I'm Somu Mahesh Kiran Babu, a Java Full Stack Developer focused on building scalable, accessible and modern web applications with Java, Spring Boot and React.",
    tags: ['Java', 'Springboot', 'React', 'JavaScript'],
  },

  about: {
    heading: 'A developer who cares about the details.',
    bio: [
      'I am a software engineering student focused on building modern full-stack applications with Java, Spring Boot and React. I enjoy turning ideas into fast, accessible and reliable products with clean, maintainable code.',
      'My work spans responsive web applications, REST APIs and component-driven interfaces. I care about thoughtful UX, performance and building solutions that solve real problems.',
      'Currently seeking internship and campus placement opportunities where I can contribute to meaningful products, strengthen my engineering skills and grow alongside a strong development team.',
    ],
    exploring: [
      { label: 'Full-Stack Architecture', icon: 'palette' },
      { label: 'System Design', icon: 'gauge' },
      { label: 'Cloud & Deployment', icon: 'accessibility' },
      { label: 'Advanced Docker / AWS', icon: 'layers' },
    ],
  },

  skills: [
    { name: 'Java', icon: 'node', description: 'Object-oriented programming for robust applications', color: 'group-hover:shadow-[0_0_15px_rgba(234,179,8,0.05)] group-hover:border-yellow-500/20', iconColor: 'group-hover:text-yellow-500' },
    { name: 'Spring Boot', icon: 'api', description: 'Building REST APIs and backend applications', color: 'group-hover:shadow-[0_0_15px_rgba(34,197,94,0.05)] group-hover:border-green-500/20', iconColor: 'group-hover:text-green-500' },
    { name: 'React.js', icon: 'react', description: 'Building modern and responsive user interfaces', color: 'group-hover:shadow-[0_0_15px_rgba(97,218,251,0.05)] group-hover:border-[#61DAFB]/20', iconColor: 'group-hover:text-[#61DAFB]' },
    { name: 'JavaScript', icon: 'javascript', description: 'Creating interactive web applications', color: 'group-hover:shadow-[0_0_15px_rgba(247,223,30,0.05)] group-hover:border-[#F7DF1E]/20', iconColor: 'group-hover:text-[#F7DF1E]' },
    { name: 'Python', icon: 'typescript', description: 'Programming, automation and problem solving', color: 'group-hover:shadow-[0_0_15px_rgba(59,130,246,0.05)] group-hover:border-blue-500/20', iconColor: 'group-hover:text-blue-400' },
    { name: 'HTML5', icon: 'html', description: 'Semantic structure for modern web applications', color: 'group-hover:shadow-[0_0_15px_rgba(227,79,38,0.05)] group-hover:border-[#E34F26]/20', iconColor: 'group-hover:text-[#E34F26]' },
    { name: 'CSS3', icon: 'css', description: 'Responsive styling and modern web interfaces', color: 'group-hover:shadow-[0_0_15px_rgba(21,114,182,0.05)] group-hover:border-[#1572B6]/20', iconColor: 'group-hover:text-[#1572B6]' },
    { name: 'Bootstrap', icon: 'tailwind', description: 'Responsive UI development with reusable components', color: 'group-hover:shadow-[0_0_15px_rgba(147,51,234,0.05)] group-hover:border-purple-500/20', iconColor: 'group-hover:text-purple-400' },
    { name: 'REST APIs', icon: 'api', description: 'Building and integrating web APIs', color: 'group-hover:shadow-[0_0_15px_rgba(20,184,166,0.05)] group-hover:border-teal-500/20', iconColor: 'group-hover:text-teal-400' },
    { name: 'Docker', icon: 'mongodb', description: 'Containerizing applications and development environments', color: 'group-hover:shadow-[0_0_15px_rgba(14,165,233,0.05)] group-hover:border-sky-500/20', iconColor: 'group-hover:text-sky-400' },
    { name: 'AWS', icon: 'html', description: 'Cloud fundamentals and application deployment', color: 'group-hover:shadow-[0_0_15px_rgba(249,115,22,0.05)] group-hover:border-orange-500/20', iconColor: 'group-hover:text-orange-400' },
    { name: 'Git', icon: 'git', description: 'Version control for reliable development', color: 'group-hover:shadow-[0_0_15px_rgba(240,80,50,0.05)] group-hover:border-[#F05032]/20', iconColor: 'group-hover:text-[#F05032]' },
    { name: 'GitHub', icon: 'github', description: 'Code hosting and collaborative development', color: 'group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:border-white/20', iconColor: 'group-hover:text-white' },
  ],

  tools: [
    { name: 'Maven', icon: 'node' },
    { name: 'IntelliJ IDEA', icon: 'react' },
    { name: 'Eclipse', icon: 'javascript' },
    { name: 'VS Code', icon: 'typescript' },
    { name: 'Postman', icon: 'api' },
    { name: 'Swagger / OpenAPI', icon: 'html' },
  ],

  projects: [
    {
      id: 'hackhive',
      number: '01',
      title: 'HackHive',
      category: 'Full-Stack Web Application',
      description:
        'A full-stack hackathon collaboration platform built with React and Spring Boot, designed to support hackathon participants and provide a secure, interactive application experience.',
      technologies: [
        'React.js',
        'Java',
        'Spring Boot',
        'MySQL',
        'REST APIs',
        'WebSockets',
        'JWT',
        'OAuth2',
        'OpenAPI / Swagger',
      ],
      github: 'https://github.com/MaheshSomu/HackHive',
      liveDemo: null,
      gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
      accent: '#8b5cf6',
      overview:
        'HackHive is a full-stack platform built to streamline hackathon team formation, project submissions, and real-time collaboration. The system connects a React/Vite frontend with a modular Spring Boot REST backend.',
      problem:
        'Hackathon participants frequently face challenges with fragmented team creation, insecure session handling, delayed notifications, and unstructured project submission workflows during fast-paced hackathons.',
      solution:
        'Developed an integrated full-stack platform featuring JWT and OAuth2 session management, a relational MySQL database with JPA, real-time WebSocket messaging, and interactive API documentation with OpenAPI/Swagger.',
      keyFeatures: [
        'React/Vite frontend with component-driven architecture',
        'Spring Boot REST backend with modular service architecture',
        'JWT and OAuth2 authentication for secure user sessions',
        'MySQL database schema with relational data modeling',
        'WebSocket-based real-time communication functionality',
        'API documentation with OpenAPI / Swagger',
        'Client-side and server-side form validation',
        'Secure backend architecture and endpoint protection',
      ],
      implementation:
        'Engineered the application using React on Vite for the client interface and Spring Boot for backend micro-services. Integrated WebSockets for real-time messaging, JPA/Hibernate for relational MySQL persistence, and Spring Security with JWT & OAuth2.',
      whatIWorkedOn:
        'Developed and integrated frontend and backend functionality across the application.',
    },
    {
      id: 'farmchainx',
      number: '02',
      title: 'FarmchainX',
      category: 'Full-Stack Web Application',
      description:
        'A full-stack agricultural platform connecting farmers, customers and administrators through a React frontend and Spring Boot backend, with secure authentication, product workflows and digital services.',
      technologies: [
        'React.js',
        'Java',
        'Spring Boot',
        'MySQL',
        'REST APIs',
        'JWT',
        'Google OAuth',
        'QR Functionality',
        'Maps Integration',
        'Razorpay',
      ],
      github: 'https://github.com/MaheshSomu/FarmchainX',
      liveDemo: null,
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      accent: '#10b981',
      overview:
        'FarmchainX is a digital agricultural platform connecting farmers, customers, and administrators. It provides role-based product management workflows, location mapping, QR verification, and sandbox payment integration.',
      problem:
        'Agricultural supply chains face challenges with transparency, inefficient intermediary channels, multi-role workflow management, and accessibility for regional users.',
      solution:
        'Built a responsive React frontend paired with a Spring Boot REST API and MySQL database. Implemented role-based workflows for farmers, customers, and admins, JWT and Google OAuth authentication, Razorpay sandbox test payments, QR verification, and maps integration.',
      keyFeatures: [
        'React frontend with responsive user interfaces',
        'Spring Boot backend with REST API architecture',
        'MySQL database integration using Spring Data JPA',
        'JWT authentication and Google OAuth integration',
        'Farmer, customer, and admin multi-role workflows',
        'Multilingual support for accessible user experiences',
        'QR code generation and verification functionality',
        'Interactive Maps integration for location-based services',
        'Razorpay sandbox test payment integration',
        'Email notification functionality where implemented',
      ],
      implementation:
        'Constructed a multi-tier web application using React.js for the UI and Spring Boot for API services. Leveraged Spring Data JPA for MySQL persistence, Spring Security for JWT/Google OAuth authentication, Razorpay sandbox API for test payments, and location/QR services.',
      whatIWorkedOn:
        'Developed and integrated frontend and backend functionality across the application.',
    },
  ],

  experience: [
    {
      id: 'infosys-intern',
      number: '01',
      date: 'Feb 2026 — Apr 2026',
      role: 'Java Full Stack Intern',
      organization: 'Infosys Springboard',
      assignment: 'FarmChainX: AI-Driven Agricultural Traceability Network',
      description:
        'Completed a virtual internship through Infosys Springboard, actively participating in and completing the mandatory FarmChainX assignment focused on an AI-driven agricultural traceability network.',
      technologies: ['Java', 'Spring Boot', 'React.js', 'AI Traceability'],
      certificate: null,
    },
    {
      id: 'btech-mbu',
      number: '02',
      date: '2023 — 2027',
      role: 'B.Tech — Computer Science and Engineering',
      organization: 'Mohan Babu University',
      description:
        'Pursuing a B.Tech in Computer Science and Engineering with a focus on software development, data structures, algorithms, databases and full-stack web development.',
      technologies: ['Java', 'DSA', 'Web Development', 'DBMS'],
    },
    {
      id: 'intermediate-vit',
      number: '03',
      date: '2021 — 2023',
      role: 'Intermediate / Class XII',
      organization: 'VIT Junior College',
      description:
        'Completed intermediate education with a foundation in mathematics, computer science and analytical problem solving.',
      technologies: ['Mathematics', 'Computer Science', 'Analytical Skills'],
    },
    {
      id: 'secondary-oxford',
      number: '04',
      date: '2020 — 2021',
      role: 'Secondary School / Class X',
      organization: 'Oxford High School',
      description:
        'Completed secondary education with a strong foundation in mathematics, science and computer fundamentals.',
      technologies: ['Mathematics', 'Science', 'Computer Fundamentals'],
    },
  ],

  achievements: [
    { label: 'Hackathon Finalist', icon: 'trophy' },
    { label: '350+ Coding Problems', icon: 'code' },
    { label: 'AWS Cloud Practitioner', icon: 'certificate' },
    { label: 'Microsoft Azure Fundamentals', icon: 'certificate' },
    { label: 'Technical Event Winner', icon: 'award' },
  ],

  certifications: [
    { name: 'Microsoft Azure Fundamentals', issuer: 'Microsoft', year: '2026' },
    { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2026' },
  ],

  codingProfiles: {
    heading: 'Where I build in public.',
    description:
      'I actively solve problems, contribute to projects and maintain a consistent development practice.',
    profiles: [
      {
        name: 'GitHub',
        username: '@MaheshSomu',
        url: 'https://github.com/MaheshSomu',
        description: 'Open-source projects and portfolio code',
        icon: 'github',
      },
      {
        name: 'LeetCode',
        username: '@MaheshSomu',
        url: 'https://leetcode.com/u/MaheshSomu/',
        description: 'Data structures and algorithms practice',
        icon: 'leetcode',
      },
      {
        name: 'HackerRank',
        username: '@MaheshSomu',
        url: 'https://www.hackerrank.com/profile/somumahesh8886',
        description: 'Problem solving and skill assessments',
        icon: 'hackerrank',
      },
    ],
  },

  seo: {
    title: 'Mahesh — Fullstack Developer | Java',
    description:
      'Portfolio of Mahesh, a fullstack developer specializing in React.js, JavaScript and modern web development.',
    ogImage: '/og-image.png',
    url: 'https://MaheshSomu.dev',
  },

  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
}

export const getProjectById = (id) =>
  portfolio.projects.find((project) => project.id === id)
