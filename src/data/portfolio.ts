export interface Project {
  id: string;
  name: string;
  description: string;
  impact: string;
  tech: string[];
  color: string;
  image: string;
  gradient: string;
}

export interface CaseStudyData {
  id: string;
  projectName: string;
  role: string;
  //duration: string;
  problem: string;
  challenge: string;
  solution: string;
  architecture: string[];
  result: string;
  metrics: { label: string; value: string }[];
  gradient: string;
}

export interface TechCategory {
  name: string;
  icon: string;
  items: { name: string; level: "expert" | "advanced" | "proficient" }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Metric {
  value: string;
  label: string;
  suffix?: string;
}

export const projects: Project[] = [
  {
    id: "itms",
    name: "ITMS",
    description:
      "Integrated Toilet Management System — a real-time monitoring platform deployed at Soekarno-Hatta International Airport. Tracks facility conditions via IoT sensors with Android TV dashboard for 24/7 operational display across Domestic and International terminals.",
    impact: "Deployed at Soekarno-Hatta Airport",
    tech: ["Flutter", "GetX", "WebSocket", "IoT", "Android TV", "MDM"],
    color: "#FF6B00",
    image: "/projects/itms.jpg",
    gradient: "from-orange-500/10 to-amber-500/5",
  },
  {
    id: "pressensi",
    name: "Pressensi",
    description:
      "Enterprise attendance platform for field operators deployed across Java Island with nationwide expansion in progress. Selfie-based check-in with geofencing, scheduling, inspection, inventory, and ticketing modules.",
    impact: "100+ Devices • 130+ MAU • +49% Growth",
    tech: ["Flutter", "REST API", "Geofencing", "Firebase", "Android", "iOS"],
    color: "#FF6B00",
    image: "/projects/pressensi.jpg",
    gradient: "from-orange-500/10 to-amber-500/5",
  },
  {
    id: "tilikeen",
    name: "Tilikeen",
    description:
      "Smart Meeting Room system deployed across all meeting rooms at Sarinah Building, Jakarta. IoT-based room booking, real-time availability, and environmental monitoring on 21 devices. Published on Google Play Store.",
    impact: "21 Devices • Google Play Store",
    tech: ["Flutter", "Clean Architecture", "MVVM", "Socket.IO", "REST API"],
    color: "#FF6B00",
    image: "/projects/tilikeen.jpg",
    gradient: "from-orange-500/10 to-amber-500/5",
  },
  {
    id: "mides",
    name: "M-IDES",
    description:
      "Digital learning platform for M-IDES Skadik 502, Subang — West Java. Supports attendance, exams, quizzes, assignments, and event scheduling with multimedia learning materials.",
    impact: "Educational Platform • Huawei Tablets",
    tech: ["Flutter", "REST API", "PDF", "MP3/MP4", "Huawei Optimized"],
    color: "#FF6B00",
    image: "/projects/mides.jpg",
    gradient: "from-orange-500/10 to-amber-500/5",
  },
];

export const additionalProjects = [
  "Home Cleaning Service App",
  "Netflix Clone (TMDB API)",
  "Study Stream Learning Platform",
  "Food Recipe Catalog",
  "Food Ordering Application",
  "Boarding House Finder",
  "Laundry App",
  "Clinic Dr. Viandini",
];

export const caseStudies: CaseStudyData[] = [
  {
    id: "itms-case",
    projectName: "ITMS — Airport IoT Monitoring",
    role: "Mobile Engineer",
    problem:
      "Soekarno-Hatta International Airport needed a centralized, real-time monitoring system to track toilet facility conditions across Domestic and International terminals. Manual inspection was slow, inconsistent, and couldn't provide instant operational awareness for 24/7 airport operations.",
    challenge:
      "Build a resilient IoT-integrated monitoring platform that runs 24/7 on Android TV devices, communicates with sensor hardware in real-time via WebSocket, supports remote device management at scale, and enforces software licensing to prevent unauthorized usage.",
    solution:
      "Developed the complete Android TV application using Flutter and GetX. Integrated IoT sensors via WebSocket for real-time occupancy data synchronization. Implemented Device Owner Mode for full device control, Mobile Device Management (MDM) for remote operations, and a licensing system for access control. Optimized for long-term stability in operational environments.",
    architecture: [
      "Flutter with GetX state management",
      "WebSocket for real-time IoT sensor integration",
      "Android TV optimized dashboard interface",
      "Device Owner Mode for kiosk-style control",
      "MDM: remote update, install, reboot, kiosk mode",
      "Application licensing system for access control",
    ],
    result:
      "Successfully deployed across Domestic and International terminals at Soekarno-Hatta Airport. The system provides real-time toilet occupancy monitoring, enables remote device management, and maintains 24/7 operational stability — setting a new standard for smart facility management in Indonesian airports.",
    metrics: [
      { label: "Deployment", value: "Soekarno-Hatta" },
      { label: "Platform", value: "Android TV" },
      { label: "Protocol", value: "WebSocket IoT" },
    ],
    gradient: "from-orange-500 to-amber-600",
  },
  {
    id: "pressensi-case",
    projectName: "Pressensi — Nationwide Attendance",
    role: "Mobile Engineer",
    problem:
      "Field operators across Indonesia's industrial sites needed a reliable attendance system that validates physical presence, supports complex operational workflows, and scales from regional to national deployment — replacing fragmented manual processes.",
    challenge:
      "Deliver a dual-platform (Android & iOS) attendance application with selfie verification and geofencing validation, while integrating scheduling, inspection, inventory, ticketing, and productivity monitoring — all with reliable offline-capable data synchronization.",
    solution:
      "Built the application end-to-end using Flutter for both Android and iOS. Implemented selfie-based attendance with GPS geofencing, departure scheduling, travel history, equipment inspection, leave management, inventory tracking, ticketing, and productivity monitoring modules. Managed build signing and deployment to both Google Play Store and App Store in close collaboration with backend teams.",
    architecture: [
      "Flutter with dual-platform deployment",
      "Selfie attendance with geofencing validation",
      "REST API for enterprise backend integration",
      "Firebase for real-time data synchronization",
      "Google Play Store & App Store publishing",
    ],
    result:
      "Deployed across Java Island with nationwide expansion in progress. Achieved 100+ device acquisition and 130+ monthly active users with +49% growth in the last 28 days. The platform supports operators across multiple industrial sites with a comprehensive suite of operational modules.",
    metrics: [
      { label: "Platform", value: "Android & iOS" },
      { label: "Devices", value: "100+" },
      { label: "MAU", value: "130+" },
      { label: "Growth", value: "+49%" },
    ],
    gradient: "from-orange-500 to-amber-600",
  },
  {
    id: "tilikeen-case",
    projectName: "Tilikeen — Smart Meeting Room",
    role: "Mobile Engineer",
    problem:
      "Sarinah Building, a premium commercial space in Jakarta, struggled with fragmented meeting room management — double bookings, underutilized rooms, and no real-time visibility into room conditions and availability across 21 meeting spaces.",
    challenge:
      "Build a comprehensive IoT-integrated smart meeting room platform that handles real-time booking, environmental monitoring (temperature, humidity, occupancy), and instant status updates across all 21 rooms — with a polished mobile experience ready for Google Play Store publication.",
    solution:
      "Developed the complete application end-to-end using Flutter with Clean Architecture and Feature-Based MVVM. Integrated Socket.IO for real-time synchronization, built booking and scheduling modules, and connected IoT sensors for environmental monitoring. Published the final application to Google Play Store.",
    architecture: [
      "Flutter with Clean Architecture foundation",
      "Feature-Based MVVM for modular organization",
      "Socket.IO for real-time room status sync",
      "REST API for booking and scheduling operations",
      "IoT sensors: temperature, humidity, occupancy",
      "Published on Google Play Store",
    ],
    result:
      "Successfully deployed across all 21 meeting rooms at Sarinah Building, Jakarta, with publication on Google Play Store. The platform delivers real-time room availability, instant booking, environmental monitoring, and a seamless user experience for building management and tenants alike.",
    metrics: [
      { label: "Devices", value: "21" },
      { label: "Location", value: "Sarinah" },
      { label: "Store", value: "Play Store" },
    ],
    gradient: "from-orange-500 to-amber-600",
  },
  {
    id: "mides-case",
    projectName: "M-IDES — Digital Learning Platform",
    role: "Mobile Engineer",
    problem:
      "M-IDES Skadik 502 in Subang, West Java, needed a modern digital learning platform to replace traditional classroom-bound education methods. Students and instructors lacked a centralized system for attendance tracking, online examinations, assignments, and access to multimedia learning materials.",
    challenge:
      "Build a comprehensive e-learning platform from scratch that supports selfie-based attendance, online exams, quizzes, assignments, event scheduling, and multimedia content (MP3, MP4, PDF) — all optimized for Huawei tablet devices used in the learning environment.",
    solution:
      "Designed and developed the complete learning platform using Flutter. Implemented selfie attendance for student verification, examination and quiz modules with automated scoring, assignment submission workflows, event scheduling, and multimedia learning material access. Optimized the entire application for smooth performance on Huawei tablet hardware.",
    architecture: [
      "Flutter with custom learning modules",
      "Selfie attendance verification system",
      "Exam, quiz, and assignment modules",
      "Multimedia support: MP3, MP4, PDF",
      "Optimized for Huawei tablet devices",
      "REST API for backend integration",
    ],
    result:
      "Successfully deployed at M-IDES Skadik 502, Subang — West Java. The platform enables digital attendance tracking, online examinations and quizzes, assignment management, and multimedia learning — transforming the educational experience for students and instructors with a modern, tablet-optimized mobile solution.",
    metrics: [
      { label: "Location", value: "Subang, Jabar" },
      { label: "Platform", value: "Huawei Tablet" },
      { label: "Device", value: "51" },
    ],
    gradient: "from-blue-500 to-indigo-600",
  },
];

export const techCategories: TechCategory[] = [
  {
    name: "Mobile Development",
    icon: "Smartphone",
    items: [
      { name: "Flutter (Dart)", level: "expert" },
      { name: "Android", level: "advanced" },
      { name: "iOS", level: "advanced" },
      { name: "Android TV", level: "advanced" },
    ],
  },
  {
    name: "Architecture",
    icon: "Cpu",
    items: [
      { name: "Clean Architecture", level: "expert" },
      { name: "MVVM (Feature-Based)", level: "expert" },
      { name: "GetX", level: "expert" },
    ],
  },
  {
    name: "Integration",
    icon: "Layers",
    items: [
      { name: "REST API", level: "expert" },
      { name: "WebSocket", level: "advanced" },
      { name: "Socket.IO", level: "advanced" },
      { name: "Firebase", level: "advanced" },
    ],
  },
  {
    name: "Deployment & Tools",
    icon: "Cloud",
    items: [
      { name: "Play Store & App Store", level: "advanced" },
      { name: "MDM (Remote Mgmt)", level: "advanced" },
      { name: "Figma to Flutter", level: "advanced" },
      { name: "Device Owner Mode", level: "advanced" },
      { name: "AI-Assisted Development", level: "advanced" },
      { name: "Agentic Development Workflow", level: "advanced" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Mobile Engineer",
    company: "PT Ayodya Dialog Semesta",
    period: "Oct 2025 — Present",
    description:
      "Leading end-to-end mobile application development. Designing scalable architectures and building enterprise mobile applications using Flutter.",
    achievements: [
      "Lead end-to-end mobile application development lifecycle",
      "Design scalable application architectures",
      "Develop enterprise mobile applications using Flutter",
      "Implement responsive and intuitive user experiences",
      "Conduct code review and technical mentoring",
      "Optimize application performance and maintainability",
      "Prepare technical documentation and development guidelines",
    ],
  },
  {
    role: "Freelance Mobile Developer",
    company: "Independent",
    period: "Dec 2023 — 2024",
    description:
      "Delivered multiple custom mobile applications for various clients. Managed full development lifecycle from planning to deployment.",
    achievements: [
      "Delivered multiple custom mobile applications",
      "Managed full development lifecycle from planning to deployment",
      "Designed and implemented responsive user interfaces",
      "Performed maintenance and performance optimization",
      "Produced technical and user documentation",
    ],
  },
  {
    role: "Campers Internship",
    company: "PT AMPU Creative Studio",
    period: "Sep 2023 — May 2024",
    description:
      "Creative production internship focused on multimedia content for commercial and campus events.",
    achievements: [
      "Photo and video production for commercial and campus events",
      "Camera setup and equipment preparation",
      "Collaboration with creative teams for multimedia projects",
    ],
  },
];

export const metrics: Metric[] = [
  { value: "12+", label: "Mobile Applications Built" },
  { value: "100+", label: "Active Devices" },
  { value: "130+", label: "Monthly Active Users" },
  { value: "Android & iOS", label: "Cross Platform" },
];

export const contactInfo = {
  email: "iqromabadi15@gmail.com",
  linkedin: "www.linkedin.com/in/iqromabadi",
  //github: 'https://github.com/iqromabadi',
  whatsapp: "+6281234567890",
};
