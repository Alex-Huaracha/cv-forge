export const defaultData = {
  personalInfo: {
    firstName: 'Alex',
    lastName: 'Huaracha',
    phone: '+51 962334712',
    email: 'alexhuarachaq@gmail.com',
    linkedin: 'https://www.linkedin.com/in/alex-huaracha/',
    github: 'https://github.com/Alex-Huaracha',
    portfolio: 'https://portfolio-khaki-seven-93.vercel.app/',
  },

  education: [
    {
      id: crypto.randomUUID(),
      university: 'National University of Saint Augustine',
      degree: 'BS Computer Science',
      description:
        'Courses: Software Engineering Practice, Applied Machine Learning, Operating Systems, Computer Architecture, Model-Based Programming, Algorithms and Data Structures, Databases.',
      startDate: 'Jun 2020',
      endDate: 'Aug 2025',
      location: 'Arequipa, Peru',
    },
  ],

  workExperience: [
    {
      id: crypto.randomUUID(),
      company: 'asd',
      position: 'asd',
      description: 'asd',
      startDate: 'asd',
      endDate: 'asd',
      location: 'ads',
    },
  ],

  projects: [
    {
      id: crypto.randomUUID(),
      name: 'Personal Portfolio',
      website: 'https://portfolio-khaki-seven-93.vercel.app/',
      sourceCode: 'https://github.com/Alex-Huaracha/portfolio',
      description:
        'Responsive portfolio built with Next.js and Tailwind CSS to showcase projects, blog posts, and contact info. Supports SSG, SEO optimizations, and dark mode.',
      technologies: 'Next.js, React, Tailwind CSS, Vercel',
    },
    {
      id: crypto.randomUUID(),
      name: 'Expense Tracker API',
      website: '',
      sourceCode: 'https://github.com/Alex-Huaracha/expense-tracker-api',
      description:
        'RESTful API for tracking personal expenses with user authentication, transaction categories, and monthly reports. Includes unit tests and Docker setup for local development.',
      technologies: 'Django REST Framework, PostgreSQL, Docker, pytest',
    },
  ],

  technicalSkills: [
    {
      id: crypto.randomUUID(),
      title: 'Languages',
      skills: 'Python, Java, SQL, HTML5, CSS, JavaScript',
    },
    {
      id: crypto.randomUUID(),
      title: 'Developer Tools',
      skills: 'Git, Docker, Postman, JIRA, AWS, Azure',
    },
    {
      id: crypto.randomUUID(),
      title: 'Libraries/Frameworks',
      skills: 'Django, React, Node.js, Next.js, PostgreSQL',
    },
  ],
};
