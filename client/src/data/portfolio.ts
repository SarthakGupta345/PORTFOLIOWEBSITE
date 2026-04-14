export const SKILLS_DATA = {
  "Front End": [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", level: "Expert", dot: "#22c55e" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg", level: "Expert", dot: "#22c55e" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg", level: "Expert", dot: "#22c55e" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", level: "Expert", dot: "#22c55e" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", level: "Expert", dot: "#22c55e" },
    { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", level: "Expert", dot: "#22c55e" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", level: "Expert", dot: "#22c55e" },
    { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framer/framer-original.svg", level: "Advanced", dot: "#3b82f6" }
  ],
  "Back End": [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", level: "Expert", dot: "#22c55e" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", level: "Advanced", dot: "#3b82f6" },
    { name: "Nest.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg", level: "Advanced", dot: "#3b82f6" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", level: "Advanced", dot: "#3b82f6" }
  ],
  "A.I": [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", level: "Advanced", dot: "#3b82f6" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", level: "Intermediate", dot: "#eab308" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg", level: "Intermediate", dot: "#eab308" }
  ]
};

export const PROJECTS_DATA = [
  {
    title: "Ever Teams",
    category: "Web",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    description: "Ever Teams is an all-in-one work and project management platform that helps teams manage tasks, track time and productivity.",
    link: "#",
    github: "#",
    techStack: ["React", "Nest.js", "GraphQL"]
  },
  {
    title: "AdminAtete",
    category: "Web",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description: "Company document archiving application that allows businesses to digitize, organize, and securely store their important documents for easy access and management.",
    link: "#",
    github: "#",
    techStack: ["React JS", "Express JS", "PostgreSQL", "Sequelize"]
  },
  {
    title: "Focus",
    category: "App",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    description: "App mobile for quotes.",
    link: "#",
    github: "#",
    techStack: ["React Native", "Next.js", "Nest.js", "PostgreSQL", "TypeORM", "Turbo"]
  },
  {
    title: "HIÜRD",
    category: "App",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    description: "HIÜRD is a local service marketplace that helps people hire and get hired for everyday tasks. Built on trust, local connections, and secure payments.",
    link: "#",
    github: "#",
    techStack: ["React Native", "Nest.js", "Stripe", "TypeORM", "Mobile"]
  }
];

export const EXPERIENCE_DATA = [
  {
    role: "Full Stack Engineer",
    company: "Ever Technologies",
    date: "Aug 2023 - Present",
    remote: "Remote",
    description: "Worked as a Full-stack Developer (Nest.js, Next.js, React Native) on Ever Teams (Open Work and Project Management Platform) and Ever Gauzy (Open Business Management Platform - ERP/CRM/HRM/ATS/PM). Also involved in various client projects."
  },
  {
    role: "Full Stack Engineer",
    company: "AdminAtete",
    date: "Jan 2023 - Jul 2023",
    remote: "Remote",
    description: "Developed as a Full-stack Developer (Express.js, Next.js) for AdminAtete, a tech startup offering digital solutions for business services, including a document archiving application."
  },
  {
    role: "Frontend Developer",
    company: "CRES Startup",
    date: "Jun 2022 - Dec 2022",
    remote: "Remote",
    description: "Worked as a Full-stack Web Developer (Nest.js, Next.js) for a start-up and research center focused on creating web applications and artificial intelligence solutions for business management and data collection."
  },
  {
    role: "Backend Developer",
    company: "Attendacy GDA (KADEA)",
    date: "Feb 2022 - May 2022",
    remote: "On-site",
    description: "Worked as a Full-stack Developer (Express.js, React.js) for Attendacy GDA, an application to manage student attendance within a coding academy."
  },
  {
    role: "Frontend Developer",
    company: "One Stop Center",
    date: "Sep 2021 - Feb 2022",
    remote: "Remote",
    description: "Worked as a Frontend Developer (Angular) on a web application that manages parcel-related information and shares it across multiple company agencies."
  },
  {
    role: "Frontend Web Developer",
    company: "Buku My Class",
    date: "Dec 2018 - Sep 2021",
    remote: "Remote",
    description: "Worked as a Full Stack Developer (Frontend and Backend) and Frontend Developer (React.js) for Buku, an application enabling secondary school students to access class notes from anywhere."
  }
];

export const CP_PROFILES = [
  {
    platform: "LeetCode",
    handle: "@ck_dev",
    profileUrl: "https://leetcode.com/u/ck_dev",
    color: "#FFA116",
    stats: [
      { label: "Problems Solved", value: "450+" },
      { label: "Contest Rating", value: "1820" },
      { label: "Global Rank", value: "Top 8%" },
    ],
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>`,
  },
  {
    platform: "Codeforces",
    handle: "@ck_coder",
    profileUrl: "https://codeforces.com/profile/ck_coder",
    color: "#1F8ACB",
    stats: [
      { label: "Problems Solved", value: "600+" },
      { label: "Max Rating", value: "1540" },
      { label: "Rank", value: "Specialist" },
    ],
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"/></svg>`,
  },
  {
    platform: "CodeChef",
    handle: "@ck_chef",
    profileUrl: "https://www.codechef.com/users/ck_chef",
    color: "#5B4638",
    stats: [
      { label: "Problems Solved", value: "300+" },
      { label: "Max Rating", value: "1750" },
      { label: "Stars", value: "3★" },
    ],
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.257.004c-.207.021-.378.064-.575.143-.381.153-.72.39-.983.689a2.24 2.24 0 0 0-.509 1.073c-.058.29-.063.376-.063.987v.574l-.147.018c-.55.065-1.044.237-1.482.515a3.39 3.39 0 0 0-1.37 1.576c-.075.18-.096.202-.173.183l-.105-.027c-.762-.2-1.576-.063-2.244.375-.455.299-.806.7-1.048 1.2a3.21 3.21 0 0 0-.245 1.808c.15.817.556 1.532 1.17 2.063.226.195.338.28.633.478.266.179.48.349.57.453.119.138.161.237.185.434.025.193.02.362-.012.515a1.14 1.14 0 0 1-.133.36c-.07.122-.195.274-.41.499-.377.395-.672.784-.88 1.16-.248.444-.373.866-.405 1.361a3.495 3.495 0 0 0 .603 2.2 3.543 3.543 0 0 0 1.826 1.387c.198.07.226.075.503.098.234.02.468-.003.694-.065a3.2 3.2 0 0 0 .596-.228l.073-.039.216.39c.573 1.028 1.37 1.768 2.389 2.218a5.04 5.04 0 0 0 1.39.417c.297.05.473.061.87.061.396 0 .572-.011.87-.061a5.023 5.023 0 0 0 1.388-.417c1.02-.45 1.816-1.19 2.39-2.218l.216-.39.072.039a3.2 3.2 0 0 0 .597.228c.225.062.46.085.694.065.277-.023.305-.028.503-.098a3.543 3.543 0 0 0 1.826-1.387 3.495 3.495 0 0 0 .603-2.2c-.032-.495-.157-.917-.404-1.361-.209-.376-.504-.765-.881-1.16-.215-.225-.34-.377-.41-.499a1.14 1.14 0 0 1-.133-.36c-.032-.153-.037-.322-.012-.515.024-.197.066-.296.185-.434.09-.104.304-.274.57-.453.295-.198.407-.283.633-.478a3.6 3.6 0 0 0 1.17-2.063 3.21 3.21 0 0 0-.245-1.808 3.048 3.048 0 0 0-1.048-1.2c-.668-.438-1.482-.575-2.244-.375l-.105.027c-.077.019-.098-.003-.173-.183a3.39 3.39 0 0 0-1.37-1.576 3.325 3.325 0 0 0-1.482-.515l-.147-.018v-.574c0-.611-.005-.697-.063-.987a2.24 2.24 0 0 0-.509-1.073 2.23 2.23 0 0 0-.983-.689 2.098 2.098 0 0 0-.83-.147z"/></svg>`,
  },
];
