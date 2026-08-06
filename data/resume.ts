export const profile = {
  name: "Omymah Naveed",
  firstName: "Omymah",
  role: "Associate Software Engineer",
  tagline: "Full Stack Developer",
  location: "Karachi, Pakistan",
  email: "omymahnaveed94@gmail.com",
  linkedin: "https://linkedin.com/in/omymah-naveed-080756274",
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
  slug: string;
  tech: string[];
  description: string;
  overview: string;
  highlights: string[];
  images: string[];
  captions?: string[];
  logo?: string;
  linkedinUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Event Sphere",
    subtitle: "Expo Management System",
    slug: "event-sphere",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    description:
      "Developed a responsive React.js frontend to streamline expo registrations and enable real-time data visualization. Engineered a scalable Node.js/Express REST API architecture to efficiently handle high-traffic registration periods.",
    overview:
      "EventSphere is a high-performance Expo Management System designed to digitize large-scale trade shows through role-based dashboards (Admin, Exhibitor, Attendee), real-time booth allocation, and automated session scheduling. Built with the MERN stack, it focuses on scalability and a seamless UI/UX experience while streamlining registrations and enabling real-time data visualization.",
    highlights: [
      "Admin Command Center — real-time analytics, speaker scheduling, and full system moderation",
      "Digital Floor Planning — dynamic booth allocation logic and real-time space tracking",
      "Exhibitor Management — automated participation workflows with status tracking (Pending/Approved)",
      "Attendee Experience — seamless event discovery, personalized registrations, and interactive feedback",
      "Scalable Node.js/Express REST API to handle high-traffic registration periods",
    ],
    images: [
      "/projects/event-sphere/HeroHeader.png",
      "/projects/event-sphere/02-User-Login.png",
      "/projects/event-sphere/07-User-Events.png",
      "/projects/event-sphere/09-User-Your-Registration.png",
      "/projects/event-sphere/10-User-Feedback-Form.png",
      "/projects/event-sphere/19-Exhibitor-Add-Company.png",
      "/projects/event-sphere/20-Exhibitor-Update-Company.png",
      "/projects/event-sphere/21-Exhibitor-Your-Participations.png",
      "/projects/event-sphere/26-Admin-Dashboard.png",
      "/projects/event-sphere/29-Admin-Show-Admin.png",
      "/projects/event-sphere/30-Admin-Users-Registered.png",
      "/projects/event-sphere/39-Admin-Show-Exhibitions.png",
      "/projects/event-sphere/41-Admin-Registered-Exhibitors.png",
      "/projects/event-sphere/42-Admin-Ratings.png",
    ],
    captions: [
      "Home — Hero Section",
      "User Login",
      "User — Event Listings",
      "User — My Registration",
      "User — Feedback Form",
      "Exhibitor — Add Company",
      "Exhibitor — Update Company",
      "Exhibitor — My Participations",
      "Admin — Dashboard",
      "Admin — Manage Admins",
      "Admin — Registered Users",
      "Admin — Manage Exhibitions",
      "Admin — Registered Exhibitors",
      "Admin — Ratings & Analytics",
    ],
    linkedinUrl:
      "https://www.linkedin.com/posts/omymah-naveed-080756274_eventsphere-a-comprehensive-expo-management-activity-7451464297852903424-9qW2",
    githubUrl: "https://github.com/Omymah-Naveed/EventSphere",
  },
  {
    title: "Star Security Services",
    subtitle: "Security Management System",
    slug: "star-security-services",
    tech: ["SQL", "Bootstrap", "C#", "JavaScript"],
    description:
      "Built an interactive administrative dashboard with secure authentication to manage records for 300+ employees. Optimized backend performance using C# and SQL to deliver seamless real-time updates and ensure data availability.",
    overview:
      "A comprehensive web-based management system and corporate portal for a large-scale security firm, streamlining service delivery, recruitment, and internal operations while centralizing multi-regional business data with secure role-based access for employees.",
    highlights: [
      "Interactive administrative dashboard with secure authentication",
      "Employee records management for 300+ employees",
      "Role-based access for secure multi-regional data handling",
      "Optimized C# and SQL backend for seamless real-time updates",
    ],
    images: [
      "/projects/star-security-services/UserHeroCarousel.png",
      "/projects/star-security-services/userIndex.PNG",
      "/projects/star-security-services/UserServicesPage.png",
      "/projects/star-security-services/UserAboutCompanyHistory.png",
      "/projects/star-security-services/UserAboutOurTeam.png",
      "/projects/star-security-services/careerWithUs.png",
      "/projects/star-security-services/contactUs.png",
      "/projects/star-security-services/BookingForm.png",
      "/projects/star-security-services/userProfile.png",
      "/projects/star-security-services/OurNetwork.png",
      "/projects/star-security-services/AdminLogin.png",
      "/projects/star-security-services/adminDashboard.png",
      "/projects/star-security-services/adminServices.png",
      "/projects/star-security-services/adminEmployeeInfo1.png",
    ],
    captions: [
      "Home — Hero Carousel",
      "Home — Index Page",
      "User — Services Page",
      "User — About / Company History",
      "User — About / Our Team",
      "User — Career With Us",
      "User — Contact Us",
      "User — Booking Form",
      "User — Profile",
      "User — Our Network",
      "Admin — Login",
      "Admin — Dashboard",
      "Admin — Services Management",
      "Admin — Employee Information",
    ],
  },
  {
    title: "COVID-19",
    subtitle: "Online Test & Vaccination System",
    slug: "covid-19",
    tech: ["CSS", "HTML", "JavaScript", "MySQL"],
    description:
      "Developed a comprehensive health platform using CSS and MySQL to manage online test bookings and vaccination tracking. Designed a dynamic and accessible user interface focused on clear data visualization for digital medical reports.",
    overview:
      "COVID-19 is an end-to-end healthcare platform designed to streamline pandemic response by connecting patients with hospitals for efficient testing and vaccination workflows, from patient registration and appointment scheduling to automated reporting. The system enables patients to book online tests and vaccine slots digitally, while hospitals manage capacity, track results, and generate reports in real time.",
    highlights: [
      "Online test booking — patients schedule COVID-19 tests digitally and receive automated reports",
      "Vaccination tracking — vaccination history and slot booking for patients and staff",
      "Integrated hospital portal for onboarding and appointment management",
      "Patient dashboard for vaccination history and test tracking",
      "Automated reporting for hospital administrators",
    ],
    images: [
      "/projects/covid-19/indexHeroUser.png",
      "/projects/covid-19/indexStatisticSectionUser.png",
      "/projects/covid-19/covidTestFormUser.png",
      "/projects/covid-19/vaccinationFormUser.png",
      "/projects/covid-19/vaccinesUser.png",
      "/projects/covid-19/Login.png",
      "/projects/covid-19/Signup.png",
      "/projects/covid-19/profileUser.png",
      "/projects/covid-19/PatientDetailsTable.png",
      "/projects/covid-19/HospitalLogin.png",
      "/projects/covid-19/HospitalRegister.png",
      "/projects/covid-19/HospitalDetails.png",
      "/projects/covid-19/adminLogin.png",
      "/projects/covid-19/adminDashboard.png",
    ],
    captions: [
      "Home — Hero Section",
      "Home — Statistics Section",
      "Online COVID-19 Test Booking Form",
      "Vaccination Booking Form",
      "Vaccines & Slots",
      "User Login",
      "User Sign Up",
      "User Profile & Appointments",
      "Hospital — Patient Records",
      "Hospital Portal — Login",
      "Hospital Portal — Registration",
      "Hospital Details & Slots",
      "Admin Login",
      "Admin Dashboard",
    ],
    logo: "/projects/covid-19/Logo-banner.png",
    githubUrl: "https://github.com/Omymah-Naveed/COVID-19",
    linkedinUrl:
      "https://www.linkedin.com/posts/omymah-naveed_this-platform-is-designed-to-streamline-the-ugcPost-7451697097751486464-skcg",
  },
  {
    title: "Zyro Agency",
    subtitle: "Digital Marketing Agency Platform",
    slug: "zyro-agency",
    tech: ["ASP.NET Core", "C#", "Entity Framework", "SQL Server", "RESTful APIs"],
    description:
      "Architected a market-ready platform from scratch using ASP.NET Core, balancing clean frontend design with automated backend services. Implemented secure relational databases with SQL Server and Entity Framework, ensuring cross-device responsiveness.",
    overview:
      "A market-ready digital marketing agency platform built from scratch using ASP.NET Core, balancing clean frontend design with automated backend services and secure relational databases using SQL Server and Entity Framework.",
    highlights: [
      "Clean frontend design with automated backend services",
      "Secure relational databases with SQL Server and Entity Framework",
      "Cross-device responsive layout",
      "Built entirely from scratch using ASP.NET Core",
    ],
    images: [
      "/projects/zyro/Userindexhero.png",
      "/projects/zyro/userservices.png",
      "/projects/zyro/useraboutfeaturessection.png",
      "/projects/zyro/userabouthistoryssection.png",
      "/projects/zyro/userfaqssection.png",
      "/projects/zyro/userblog.png",
      "/projects/zyro/usercontactus.png",
      "/projects/zyro/admindashboard.png",
      "/projects/zyro/adminorders.png",
      "/projects/zyro/adminemployeemanage.png",
    ],
    captions: [
      "Home — Hero Section",
      "User — Services",
      "User — About / Features Section",
      "User — About / History Section",
      "User — FAQ Section",
      "User — Blog",
      "User — Contact Us",
      "Admin — Dashboard",
      "Admin — Orders",
      "Admin — Employee Management",
    ],
    githubUrl: "https://github.com/Omymah-Naveed/Zyro-Agency",
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
