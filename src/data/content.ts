export type Theme = "light" | "dark";

export type Social = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "x" | "gmail";
};

export type NavItem = {
  id: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "activities", label: "Activities" },
  { id: "contact", label: "Contact" },
];

export const profile = {
  name: "Christian De Gala",
  role: "IT Student, Web Dev",
  initials: "CDG",
  tagline: "I build stuff. Still a beginner, but willing to learn.",
  summary:
    "Third-year Information Technology student with hands-on experience shipping full-stack web applications for coursework. Comfortable owning a feature end to end: modeling data, designing APIs, wiring authentication, and delivering a responsive UI that feels good to use.",
  location: "Taguig City, Philippines",
  university: "Mapúa University - Makati Campus",
  degree: "BS Information Technology",
  email: "christiannoeldegala@gmail.com",
  uni_email: "cnrdegala@mymail.mapua.edu.ph",
  phone: "+63 906 264 6043",
  resumeHref: "assets/resume.pdf",
  available: "Open to internship & freelance work",
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/unawarespecs", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/christian-noel-de-gala-0ab5bb34b/",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:christiannoeldegala@gmail.com",
    icon: "gmail",
  },
  {
    label: "University Email",
    href: "mailto:cnrdegala@mymail.mapua.edu.ph",
    icon: "mail",
  },
  { label: "X", href: "https://x.com/chrisdg__", icon: "x" },
];

export const stats = [
  { value: "4+", label: "Projects shipped" },
  { value: "6", label: "Years studying" },
  { value: "8", label: "Certifications" },
  { value: "2", label: "Stack projects" },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Frontend",
    items: ["React", "Angular", "Vite", "HTML5", "CSS3", "Tailwind"],
  },
  {
    title: "Backend",
    items: ["REST APIs", "Spring Boot"],
  },
  {
    title: "Data & Infra",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Programming Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java"],
  },
];

export const principles = [
  {
    title: "Full-stack ownership",
    body: "I take a feature from schema to screen — modelling the data, exposing a clean API, and shipping the UI that consumes it.",
  },
  {
    title: "Always learning",
    body: "I write, break, and document what I build. Coursework doubles as a testing ground for ideas I want to ship for real.",
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  location: string;
  kind: "internship" | "role" | "project";
  points: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: "Administrative Assistant Intern",
    org: "Technology Application and Promotion Institute, Department of Science and Technology (DOST)",
    period: "May 2024 - July 2024",
    location: "Taguig City",
    kind: "internship",
    points: [
      "Assisted in TAPI's IT department (MIS) as helpdesk technician, working with software and hardware.",
      "Facilitated the moving of documents between departments in the TAPI.",
      "Handled legal documents as a member of the Legal Unit.",
      "Performed inventory management of legal documents.",
    ],
    stack: [],
  },
];

export type Project = {
  title: string;
  blurb: string;
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
  year: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Veloce Auto",
    blurb: "Full-stack car rental application",
    description:
      "A full-stack car rental application that provides a user-friendly way to rent a premium vehicle. A backend Spring Boot REST API manages car rentals, customers, and rental history, consumed by the Angular frontend. Built as coursework for the subject, Application Development 2 (ITS181-02).",
    stack: ["Angular", "TypeScript", "Spring Boot", "Java", "MySQL"],
    links: [
      { label: "Live demo", href: "https://sixth-crowd-05418823.figma.site" },
      { label: "Source", href: "https://github.com/unawarespecs/veloce" },
    ],
    year: "2026",
    featured: true,
  },
  {
    title: "sKonnect",
    blurb: "Barangay community portal",
    description:
      "A community portal website for the community of Barangay Sta Cruz, Bayan ng Malitbog. Bootstrap CSS was used to improve legibility and accessibility, allowing citizens of that community to easily read announcements and updates from the barangay officials.",
    stack: ["React", "TypeScript", "PostgreSQL", "Supabase", "Bootstrap"],
    links: [
      { label: "Source", href: "https://github.com/unawarespecs/kim-finalproj-uistuff" }
    ],
    year: "2025",
    featured: false,
  },
  {
    title: "An unnamed social media app",
    blurb: "Simple social media app inspired by Threads",
    description:
      "A practical group project made as coursework. Heavily inspired by Instagram's Threads app, this social media app allowed students to communicate with each other, with image support.",
    stack: ["React", "JavaScript", "Supabase"],
    links: [
      { label: "Source", href: "https://github.com/Kimochei/WebSys2-EM01-Group5-PE1" },
    ],
    year: "2025",
  },
  {
    title: "Kuroba Experimental",
    blurb: "A fork of an Android app for bug fixing purposes",
    description:
      "A fork of an imageboard browser app made by another developer. Fixed some bugs related to archive sites and the CAPTCHA, which was upstreamed a year later.",
    stack: ["Android", "Kotlin"],
    links: [{ label: "Source", href: "https://github.com/unawarespecs/kurobaex" }],
    year: "2025",
  },
  {
    title: "Tahanan Outreach Projects & Services, Inc.",
    blurb: "A website for a non-governmental organization",
    description:
      "A website for the aforementioned organization. Also serves as a secondary means to show the organization's activities alongside with their Facebook page. Built an administrator dashboard allowing them to post announcements, event schedules, and a donation tracker.",
    stack: ["PHP", "MySQL", "Bootstrap"],
    links: [
      { label: "Source", href: "https://github.com/unawarespecs/its122l-project-tops" }
    ],
    year: "2024",
  }
];

export type Seminar = {
  name: string;
  event: string;
  date: string;
  location: string;
  note: string;
};

export const seminars: Seminar[] = [
  {
    name: "Google Sync: Timeless 26'-27'",
    event: "GDGoC Mapua Makati General Assembly - organization meetup",
    date: "September 2026",
    location: "Mapua University Makati Campus",
    note: "Met up with members of the Mapua GDGoC and learned about their future projects and endeavors.",
  },
  {
    name: "From Likes to Logins: Why Identity Security Powers Safe Innovation",
    event: "Cybersecurity seminar",
    date: "February 2026",
    location: "Mapua University Makati Campus",
    note: "A cybersecurity seminar discussing about opsec and social media threats.",
  },
  {
    name: "Capcom Masterclass: Intellectual Property and the Game Business",
    event: "Game dev webinar",
    date: "January 2026",
    location: "Online",
    note: "An online webinar from renowned game developer Capcom, discussing about protection of intellectual property in the video game industry.",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  credential: string;
};

export const certifications: Certification[] = [
  {
    name: "Enterprise Systems",
    issuer: "University of Minnesota (Coursera)",
    date: "October 2026",
    credential: "6AKY3PXL9YZH",
  },
  {
    name: "Angular for Front End Engineers",
    issuer: "Codio (Coursera)",
    date: "August 2026",
    credential: "SJOI9DB17X9G",
  },
  {
    name: "Operating Systems Fundamentals",
    issuer: "Akamai (Coursera)",
    date: "July 2026",
    credential: "5AOV5FQG0WCF",
  },
  {
    name: "Principles of Secure Coding",
    issuer: "University of California, Davis (Coursera)",
    date: "July 2026",
    credential: "SWMNUJTDQAQZ",
  },
  {
    name: "Version Control with Git",
    issuer: "Atlassian (Coursera)",
    date: "April 2026",
    credential: "S86JNQ5RJW7U",
  },
  {
    name: "Essential Tools for Application Development",
    issuer: "LearnQuest (Coursera)",
    date: "April 2026",
    credential: "63V8LB74LTTH",
  },
  {
    name: "Essentials of Enterpreneurship: Thinking & Action",
    issuer: "University of California, Irvine (Coursera)",
    date: "December 2025",
    credential: "K058NK4DK0BZ",
  },
  {
    name: "Agile Project Management",
    issuer: "Packt (Coursera)",
    date: "February 2025",
    credential: "J81T7H6ITRJ1",
  },
  {
    name: "Introduction to DevOps",
    issuer: "IBM (Coursera)",
    date: "February 2025",
    credential: "SJOI9DB17X9G",
  },
  {
    name: "Foundations of Cybersecurity",
    issuer: "Google (Coursera)",
    date: "February 2025",
    credential: "NPAQJ7NW8ATD",
  },
  {
    name: "The Critical Role of IT Support Staff in Healthcare",
    issuer: "Johns Hopkins University (Coursera)",
    date: "September 2024",
    credential: "LD9DJTPWIH5U",
  },
];
