import { 
  Bug, 
  Code, 
  Search, 
  Smartphone, 
  Shield, 
  FileText,
  Database,
  Layout,
  Globe,
  CheckSquare,
  Users,
  Repeat,
  Target,
  FileEdit,
  ClipboardCheck,
  LayoutDashboard,
  FileSpreadsheet,
  Box,
  Github
} from 'lucide-react';
import { NavItem, Skill, Service, EducationItem, CertificationItem, StatItem, Project, KeyLearning } from './types';

// INSTRUCTION: Put your PDF file in the 'public' folder and name it 'cv.pdf'
export const RESUME_LINK = "/cv.pdf"; 

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const TYPING_TEXTS = [
  'Software Tester',
  'Test.io Tester',
  'Manual & API Tester',
  'Computer Science Student',
  'Bug Hunter'
];

export const STATS: StatItem[] = [
  { value: '250+', label: 'Scenarios & Cases', color: 'from-purple-600 to-indigo-600' },
  { value: '50+', label: 'Bugs Reported', color: 'from-red-500 to-pink-600' },
  { value: '6', label: 'Projects Tested', color: 'from-emerald-500 to-teal-600' },
];

export const KEY_LEARNINGS: KeyLearning[] = [
  {
    title: "Teamwork & Roles",
    description: "I understand how teams work. I know the difference between a Developer, a Product Owner, and a Designer, and how we all work together.",
    icon: Users,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
  },
  {
    title: "Agile & Scrum",
    description: "I know how modern software is built. I can work in Sprints, attend Daily Meetings, and help deliver features fast and efficiently.",
    icon: Repeat,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
  },
  {
    title: "Testing Basics",
    description: "I know the core rules of testing. I understand different testing types like Black-Box (testing functions) and White-Box (testing code logic).",
    icon: Target,
    color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
  },
  {
    title: "Extensive Scenarios",
    description: "I have written A LOT of scenarios (168+). I practiced on real apps like Facebook and Talabat to make sure I don't miss any test possibility.",
    icon: FileEdit,
    color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
  },
  {
    title: "Writing Test Cases",
    description: "I write clear, step-by-step instructions for testing. I make sure anyone can read my test cases and understand exactly what to do.",
    icon: ClipboardCheck,
    color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
  },
  {
    title: "Using Jira & Tools",
    description: "I use professional tools like Jira and Zephyr to manage my work. I can create test plans and link bugs to requirements so nothing gets lost.",
    icon: LayoutDashboard,
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
  }
];

// 1. Testing Core
export const TESTING_CORE: Skill[] = [
  { name: 'Manual Testing (Black Box)', level: 95 },
  { name: 'Bug Reporting', level: 95 },
  { name: 'API Testing (Postman & Hoppscotch)', level: 85 },
];

// 2. Tools
export const TOOLS_SKILLS: Skill[] = [
  { name: 'Jira & Zephyr Scale', level: 90 },
  { name: 'Google Sheets', level: 95 },
  { name: 'ClickUp / Trello', level: 90 },
];

// 3. Programming
export const PROGRAMMING_SKILLS: Skill[] = [
  { name: 'Java & OOP', level: 93 },
  { name: 'SQL Basics', level: 70 },
  { name: 'JSON', level: 85 },
  { name: 'Git & GitHub', level: 65 },
];

// 4. Concepts
export const CONCEPT_SKILLS: Skill[] = [
  { name: 'Agile & Scrum', level: 95 },
  { name: 'SDLC / STLC', level: 95 },
  { name: 'Test Scenario Design', level: 90 },
  { name: 'Defect Lifecycle', level: 95 },
];

export const SERVICES: Service[] = [
  {
    title: 'Manual Testing',
    description: 'I test websites and apps to make sure they work correctly. I focus on functionality and design (UI/UX) to ensure a smooth user experience.',
    icon: Search,
    color: 'text-purple-600 bg-purple-50 dark:bg-purple-900/20 dark:text-purple-400',
  },
  {
    title: 'API Testing',
    description: 'I check the backend using Postman to ensure data is correct. I verify that the server sends the right responses and status codes.',
    icon: Database,
    color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400',
  },
  {
    title: 'Test Management',
    description: 'I organize all my testing work using Jira and Zephyr Scale. I create test plans and track progress to make sure nothing is missed.',
    icon: CheckSquare,
    color: 'text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400',
  },
  {
    title: 'Mobile App Testing',
    description: 'I test mobile apps on Android and iOS (iPhone). I check how the app behaves with bad internet, screen rotation, and interruptions.',
    icon: Smartphone,
    color: 'text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400',
  },
  {
    title: 'Agile Workflow',
    description: 'I work well in teams using the Agile method. I use tools like ClickUp and Trello to track my tasks and finish work on time.',
    icon: Layout,
    color: 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 dark:text-yellow-400',
  },
  {
    title: 'Defect Reporting',
    description: 'I report bugs clearly using **Jam** to record screens and logs. This helps developers understand and fix the issue much faster.',
    icon: Bug,
    color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 dark:text-indigo-400',
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Freelance & Crowdtesting',
    description: 'Certified Tester on Test.io. I specialize in finding hidden bugs and checking user experience. I focus on important issues and providing clear feedback. I am also qualified to verify bugs reported by other testers.',
    tags: ['Test.io', 'Exploratory', 'User Experience', 'Bug Reporting'],
    links: [
      { label: 'View Test.io Profile', url: 'https://tester.test.io/profile_pages/youssefhebish', icon: Globe }
    ],
    color: 'border-l-4 border-emerald-500',
    icon: Globe
  },
  {
    title: 'Rideshare App QA (Agile)',
    description: 'Comprehensive Agile QA Project. Analyzed SRS & UI Kit to define 6 Epics and 69 User Stories. Designed 94 Detailed Test Cases in Zephyr Scale covering the full user journey. Identified & documented 6 critical logical bugs with full traceability. Note: Test artifacts were exported to Google Sheets/CSV to ensure permanent access after the Zephyr Scale trial ended.',
    tags: ['Agile', 'Jira', 'Zephyr Scale', 'Gherkin', 'Test Design'],
    links: [
      { label: 'Test Scenarios (Sheet)', url: 'https://docs.google.com/spreadsheets/d/1qcLDU6ucd3vgl8UlLf5cJRWtGs08rZOY/edit?usp=sharing&ouid=100866766662999307425&rtpof=true&sd=true', icon: FileSpreadsheet }
    ],
    color: 'border-l-4 border-purple-500',
    icon: Smartphone
  },
  {
    title: 'Trello API Automation',
    description: 'Comprehensive E2E automation for Trello\'s REST API. Simulates full user journey: Board > List > Card > Checklist. Features dynamic data chaining, negative testing, and environment variable management. Executed 133 tests with 0 failures.',
    tags: ['Postman', 'JavaScript', 'Rest API', 'Automation'],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/youssefhebish27/Trello-API-Test-Automation', icon: Github }
    ],
    color: 'border-l-4 border-blue-600',
    icon: Code
  },
  {
    title: 'Reqres.in API Test Collection',
    description: 'A comprehensive Postman suite with 95+ automated tests covering CRUD operations, Auth, and Schema Validation. Includes advanced checks for data types, regex formats, and performance. Validates 200, 201, 204, 400, and 404 statuses.',
    tags: ['Postman', 'CRUD', 'Schema Validation', 'Performance Testing'],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/youssefhebish27/Reqres-API-Test-Collection', icon: Github }
    ],
    color: 'border-l-4 border-indigo-500',
    icon: Database
  },
  {
    title: 'Swagger Petstore Automation',
    description: 'Advanced E2E automation demonstrating request chaining and dynamic data handling. Covers full lifecycles for Pets, Orders, and Users. Handles complex scenarios like multipart/form-data file uploads and robust error handling.',
    tags: ['Postman', 'E2E Testing', 'JavaScript', 'Dynamic Chaining'],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/youssefhebish27/Swagger-Petstore-API-Automation', icon: Github }
    ],
    color: 'border-l-4 border-yellow-600',
    icon: Box
  },
  {
    title: 'MedicaSpace Internship',
    description: 'Led QA for the "Partnership Program" module. Validated E2E integration and identified critical bugs like Race Conditions and Email failures. Verified UI responsiveness and network stability using Chrome DevTools. Documented high-quality reports on ClickUp.',
    tags: ['ClickUp', 'Postman', 'Chrome DevTools', 'E2E Testing', 'Bug Reporting'],
    links: [
      { label: 'MedicaSpace Website', url: 'https://medicaspace.com', icon: Globe }
    ],
    color: 'border-l-4 border-blue-500',
    icon: Shield
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'Higher Institute for Commerce and Computers, Mansoura',
    year: 'Sep 2023 - Present',
    description: 'Key Courses: Object-Oriented Programming (OOP), Data Structures, Systems Analysis & Design, Database Management, Web Programming, Software Engineering, Mobile App Development, and Algorithms.'
  },
  {
    degree: 'Software Testing Bootcamp',
    institution: 'Tarek Roshdy Courses',
    year: '2025 - Present',
    description: 'Intensive practical training covering Manual Testing, Agile/Scrum, API Testing (Postman), Mobile Testing, and Tools (Jira, Zephyr, Trello).'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { 
    title: 'Software Testing Track', 
    issuer: 'Digital Pioneers of Egypt (Rowad Masr)', 
    color: 'bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800',
    status: 'In Progress',
    courses: [
      'Prompt Engineering',
      'Java Programming Fundamentals',
      'Fundamentals Of Testing (ISTQB 4)',
      'Testing Throughout the SDLC (ISTQB 4)',
      'Static Testing Techniques (Jira)',
      'Test Tools (Postman, Selenium)',
      'Test Analysis & Design',
      'Managing Test Activities (Database/Agile)',
      'Capstone Project'
    ]
  },
];

export const CONTACT_INFO = {
  email: 'youssefhebish27@gmail.com',
  whatsapp: 'https://wa.me/201550234911',
  phone: '+20 15 50234911',
  location: 'Cairo, Egypt',
  linkedin: 'https://www.linkedin.com/in/youssef-hebish/',
  github: 'https://github.com/youssefhebish27',
  formAction: 'https://formsubmit.co/youssefhebish27@gmail.com'
};