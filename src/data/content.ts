import type { Certification } from "./certification";
import type { Experience } from "./experience";
import type { Project } from "./project";
import type { Seminar } from "./seminar";

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
  tagline: "I build stuff. Still learning as I go.",
  summary:
    "Third-year Information Technology student at Mapúa. I've built full-stack web apps for coursework, doing the database schema, the API, and the interface myself. Still early in this, but I like the moment when the pieces finally fit.",
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
  { label: "Twitter", href: "https://x.com/chrisdg__", icon: "x" },
];

export const stats = [
  { value: "4+", label: "Projects shipped" },
  { value: "6", label: "Years studying" },
  { value: "8", label: "Certifications" },
  { value: "4", label: "Stack projects" },
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
    body: "When I build a feature I try to finish it: the schema, the API, and the screen the user actually touches.",
  },
  {
    title: "Always learning",
    body: "I write code, break it, and write down what went wrong. Coursework is where I try ideas out before using them on something real.",
  },
];

export const experiences: Experience[] = [
  {
    role: "Administrative Assistant Intern",
    org: "Technology Application and Promotion Institute, Department of Science and Technology (DOST)",
    period: "May 2024 - July 2024",
    location: "Taguig City",
    kind: "internship",
    points: [
      "Worked the helpdesk in TAPI's IT department (MIS), handling software and hardware problems for staff.",
      "Moved documents between TAPI departments.",
      "Processed legal documents while assigned to the Legal Unit.",
      "Kept an inventory of the Legal Unit's documents.",
    ],
    stack: [],
  },
];

export const projects: Project[] = [
  {
    title: "Veloce Auto",
    blurb: "Car rental app with a Spring Boot API",
    description:
      "A full-stack app for renting premium cars. A Spring Boot REST API handles cars, customers, and rental history, with an Angular frontend on top. Built for Application Development 2 (ITS181-02).",
    stack: ["Angular", "TypeScript", "Spring Boot", "Java", "MySQL"],
    links: [
      { label: "Live demo (frontend only)", href: "https://sixth-crowd-05418823.figma.site" },
      { label: "Source", href: "https://github.com/unawarespecs/veloce" },
    ],
    year: "2026",
    featured: true,
  },
  {
    title: "sKonnect",
    blurb: "Community portal for a barangay",
    description:
      "A community portal for Barangay Sta. Cruz in Malitbog. Built as a practical project for Web Systems and Technologies 2 (ITS122L). Residents use it to read announcements and updates from barangay officials, and I used Bootstrap so the text stays readable on phones.",
    stack: ["React", "TypeScript", "PostgreSQL", "Supabase", "Bootstrap"],
    links: [
      {
        label: "Source",
        href: "https://github.com/unawarespecs/kim-finalproj-uistuff",
      },
    ],
    year: "2025",
    featured: false,
  },
  {
    title: "An unnamed social media app",
    blurb: "Small social app inspired by Threads",
    description:
      "A group project for one of my web systems courses. The idea came straight from Threads: a place where students post updates and talk to each other, with image support.",
    stack: ["React", "JavaScript", "Supabase"],
    links: [
      {
        label: "Source",
        href: "https://github.com/Kimochei/WebSys2-EM01-Group5-PE1",
      },
    ],
    year: "2025",
  },
  {
    title: "Kuroba Experimental",
    blurb: "Fork of an Android imageboard app I fixed up",
    description:
      "A fork of an imageboard browser built by another developer. I fixed bugs in archive site support and the CAPTCHA; both fixes went upstream a year later.",
    stack: ["Android", "Kotlin"],
    links: [
      { label: "Source", href: "https://github.com/unawarespecs/kurobaex" },
    ],
    year: "2025",
  },
  {
    title: "Tahanan Outreach Projects & Services, Inc.",
    blurb: "Website for an NGO",
    description:
      "A website for the NGO Tahanan Outreach Projects & Services. It gives them somewhere besides Facebook to post announcements and event schedules. There's an admin dashboard for posting updates and tracking donations.",
    stack: ["PHP", "MySQL", "Bootstrap"],
    links: [
      {
        label: "Source",
        href: "https://github.com/unawarespecs/its122l-project-tops",
      },
    ],
    year: "2024",
  },
];

export const seminars: Seminar[] = [
  {
    name: "Google Sync: Timeless 26'-27'",
    event: "GDGoC Mapúa Makati General Assembly - organization meetup",
    date: "September 2026",
    location: "Mapúa University Makati Campus",
    note: "Met members of Mapúa's Google Developers Groups on Campus (GDGoC) organization and heard about the projects they have coming up.",
  },
  {
    name: "From Likes to Logins: Why Identity Security Powers Safe Innovation",
    event: "Cybersecurity seminar",
    date: "February 2026",
    location: "Mapúa University Makati Campus",
    note: "Learned about effective opsec (operational security) and the threats people run into on social media.",
  },
  {
    name: "Capcom Masterclass: Intellectual Property and the Game Business",
    event: "Game dev webinar",
    date: "January 2026",
    location: "Online",
    note: "An online session from Capcom on how the game industry protects intellectual property.",
  },
];

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
    name: "Essentials of Entrepreneurship: Thinking & Action",
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
