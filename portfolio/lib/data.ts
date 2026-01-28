import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { FaShieldAlt, FaReact } from "react-icons/fa";

import bykarImg from "@/public/bykar.png";
import tictactoeImg from "@/public/tictactoe.png";
import securityImg from "@/public/security_awareness.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Science (B.Sc)",
    location: "CSJM University, Kanpur",
    description: "Completed Bachelor of Science degree.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2021 – Jun 2024",
  },
  {
    title: "Master of Computer Applications (MCA)",
    location: "Pranveer Singh Institute of Technology, Kanpur",
    description: "Specialization in Cybersecurity and Web Technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2024 – Jun 2026",
  },
  {
    title: "Cybersecurity Intern",
    location: "Navodita Infotech",
    description:
      "Worked on cybersecurity fundamentals, phishing awareness, and security best practices with hands-on tools.",
    icon: React.createElement(FaShieldAlt),
    date: "Nov 2025 – Dec 2025",
  },
  {
    title: "Full Stack Web Developer (Academic Project)",
    location: "BYKAR – Vehicle Rental Platform",
    description:
      "Developed a full-stack vehicle rental website with authentication and database integration.",
    icon: React.createElement(FaReact),
    date: "Aug 2025 – Present",
  },
] as const;

export const projectsData = [
  {
    title: "BYKAR – Vehicle Rental Website",
    description:
      "A full-stack vehicle rental platform for browsing, booking, and managing vehicles with secure authentication.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Git",
    ],
    imageUrl: bykarImg,
  },
  {
    title: "Security Awareness Training Program",
    description:
      "Cybersecurity awareness project focusing on phishing attacks and safe online practices.",
    tags: [
      "Cybersecurity",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "Flask",
      "Kali Linux",
      "Wireshark",
    ],
    imageUrl: bykarImg,
  },
  {
    title: "Tic-Tac-Toe Web Game",
    description:
      "A web-based Tic-Tac-Toe game developed using core web technologies and deployed online.",
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
    imageUrl: bykarImg,
  },
] as const;

export const skillsData = [
  // Programming & Web
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "SQL",

  // Cybersecurity
  "Cyber Security Fundamentals",
  "Phishing Awareness",
  "Social Engineering Basics",
  "Security Awareness",

  // Frameworks & Tools
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Git",
  "GitHub",

  // Security Tools
  "Kali Linux",
  "Wireshark",
  "GoPhish",

  // Others
  "Netlify",
  "Excel",
  "Power BI",
] as const;
