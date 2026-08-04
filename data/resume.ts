export const profile = {
  name: "Omymah Naveed",
  firstName: "Omymah",
  role: "Associate Software Engineer",
  tagline: "Full Stack Developer",
  location: "Karachi, Pakistan",
  email: "omymahnaveed94@gmail.com",
  linkedin: "https://linkedin.com/in/omymah-naveed",
  github: "https://github.com/Omymah-Naveed",
  resumePdf: "/Omymah-Naveed.pdf",
  summary:
    "Motivated Software Engineering student and Full Stack Developer with a strong creative edge in Adobe Photoshop and Illustrator. Hands-on experience in building scalable web applications using the MERN stack and SQL. Passionate about bridging the gap between clean backend logic, responsive frontend code, and high-quality visual design to deliver impactful user experiences.",
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages & Frameworks",
    items: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      "MySQL",
      "SQL",
      "C#",
      "RESTful APIs",
      "Postman",
      "MongoDB",
      "SQL Server",
    ],
  },
  {
    category: "Design & Creative Tools",
    items: ["Figma", "Adobe Illustrator", "Photoshop", "Canva"],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  tech: string[];
  description: string;
};

export const projects: Project[] = [
  {
    title: "Event Sphere",
    subtitle: "Expo Management System",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    description:
      "Developed a responsive React.js frontend to streamline expo registrations and enable real-time data visualization. Engineered a scalable Node.js/Express REST API architecture to efficiently handle high-traffic registration periods.",
  },
  {
    title: "Star Security Services",
    subtitle: "Security Management System",
    tech: ["SQL", "Bootstrap", "C#", "JavaScript"],
    description:
      "Built an interactive administrative dashboard with secure authentication to manage records for 300+ employees. Optimized backend performance using C# and SQL to deliver seamless real-time updates and ensure data availability.",
  },
  {
    title: "Online Test & Vaccination System",
    subtitle: "",
    tech: ["CSS", "HTML", "JavaScript", "MySQL"],
    description:
      "Developed a comprehensive health platform using CSS and MySQL to manage online test bookings and vaccination tracking. Designed a dynamic and accessible user interface focused on clear data visualization for digital medical reports.",
  },
  {
    title: "Zyro Agency",
    subtitle: "Digital Marketing Agency Platform",
    tech: ["ASP.NET Core", "C#", "Entity Framework", "SQL Server", "RESTful APIs"],
    description:
      "Architected a market-ready platform from scratch using ASP.NET Core, balancing clean frontend design with automated backend services. Implemented secure relational databases with SQL Server and Entity Framework, ensuring cross-device responsiveness.",
  },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
};

export const education: Education[] = [
  {
    school: "APTECH North Nazimabad Campus",
    degree: "Advanced Diploma in Software Engineering (ADSE)",
    period: "2023 - Present",
  },
  {
    school: "University of Karachi",
    degree: "Associate Degree in Arts (ADA)",
    period: "2024 - Present",
  },
  {
    school: "Govt. Degree Engineering & Commerce College Block-7",
    degree: "Intermediate (Engineering)",
    period: "2020 - 2022",
  },
  {
    school: "S.M. Public Academy Gulshan Campus",
    degree: "Matriculation",
    period: "2019 - 2020",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
