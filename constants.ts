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
  Github,
  Award,
  CheckCircle2,
  Terminal
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
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const TYPING_TEXTS = [
  'Web & Software Quality Assurance Specialist',
  '4th Year Computer Science Student',
  'Certified QC Member (MedicaSpace Internship)',
  'Test.io Freelance Bug Hunter',
  'Manual & API Testing Specialist'
];

export const STATS: StatItem[] = [
  { value: '250+', label: 'Test Scenarios Written', color: 'from-purple-600 to-indigo-600' },
  { value: '50+', label: 'Bugs Found & Reported', color: 'from-red-500 to-pink-600' },
  { value: '1', label: 'QC Internship Certificate', color: 'from-amber-500 to-orange-600' },
  { value: '6+', label: 'Projects Tested', color: 'from-emerald-500 to-teal-600' },
];

export const KEY_LEARNINGS: KeyLearning[] = [
  {
    title: "Mobile QA & Edge Cases",
    description: "Specialized in testing mobile apps on Android and iOS. I test real-world cases like lost internet connection, phone call interruptions, screen sizes, dark mode, and battery usage.",
    icon: Smartphone,
    color: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300"
  },
  {
    title: "Teamwork & Agile Roles",
    description: "I understand how software teams work. I collaborate easily with Developers, Product Managers, and Designers to build high-quality software.",
    icon: Users,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
  },
  {
    title: "Agile & Scrum Workflow",
    description: "I work in Sprints, attend daily standup meetings, and manage tasks easily using ClickUp, Jira, and Trello.",
    icon: Repeat,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
  },
  {
    title: "Testing Core Rules",
    description: "I know core testing rules, including Black-Box testing (testing app functions) and White-Box testing basics.",
    icon: Target,
    color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
  },
  {
    title: "Detailed Test Scenarios",
    description: "I have written over 250 test scenarios on real applications like Facebook and Talabat so no bug gets missed.",
    icon: FileEdit,
    color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
  },
  {
    title: "Clear Bug Reporting",
    description: "I write clear, step-by-step instructions and record video clips using Jam.dev so developers can understand and fix bugs fast.",
    icon: ClipboardCheck,
    color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
  }
];

// 1. Testing Core
export const TESTING_CORE: Skill[] = [
  { name: 'Mobile QA & Edge Case Testing', level: 98 },
  { name: 'Manual Testing (Black Box)', level: 95 },
  { name: 'Bug Reporting & Traceability', level: 95 },
  { name: 'API Testing (Postman & Hoppscotch)', level: 88 },
];

// 2. Tools
export const TOOLS_SKILLS: Skill[] = [
  { name: 'ClickUp & Jira', level: 95 },
  { name: 'Zephyr Scale', level: 90 },
  { name: 'Google Sheets', level: 95 },
  { name: 'Trello & Jam.dev', level: 90 },
];

// 3. Programming
export const PROGRAMMING_SKILLS: Skill[] = [
  { name: 'Java & OOP', level: 93 },
  { name: 'SQL Basics', level: 75 },
  { name: 'JSON Data', level: 88 },
  { name: 'Git & GitHub', level: 70 },
];

// 4. Concepts
export const CONCEPT_SKILLS: Skill[] = [
  { name: 'Mobile Testing & Interruption Checks', level: 98 },
  { name: 'Network Drop & Edge Case Testing', level: 95 },
  { name: 'Agile & Scrum (STLC / SDLC)', level: 95 },
  { name: 'Test Scenario & Execution Design', level: 92 },
];

export const SERVICES: Service[] = [
  {
    title: 'Mobile Quality Assurance',
    description: 'I test mobile apps on Android and iOS for real-world issues: internet drops, phone call interruptions, screen sizes, dark mode, and battery efficiency.',
    icon: Smartphone,
    color: 'text-teal-600 bg-teal-50 dark:bg-teal-900/20 dark:text-teal-400',
  },
  {
    title: 'Manual Software Testing',
    description: 'I test web and mobile apps step-by-step to make sure every feature works correctly and provides a smooth experience for users.',
    icon: Search,
    color: 'text-purple-600 bg-purple-50 dark:bg-purple-900/20 dark:text-purple-400',
  },
  {
    title: 'API Testing & Validation',
    description: 'I test backend REST APIs using Postman. I verify that data, status codes, and server responses are accurate, fast, and secure.',
    icon: Database,
    color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400',
  },
  {
    title: 'Test Planning & Management',
    description: 'I organize testing tasks using ClickUp and Jira with Zephyr Scale. I write clear test plans and test cases to track all testing steps.',
    icon: CheckSquare,
    color: 'text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400',
  },
  {
    title: 'Agile QA Integration',
    description: 'I join Agile/Scrum teams to participate in sprint planning, daily meetings, and collaborate with developers to deliver on time.',
    icon: Layout,
    color: 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 dark:text-yellow-400',
  },
  {
    title: 'Defect Logging & Bug Reports',
    description: 'I write easy-to-read bug reports with clear steps, console logs, and video recordings via Jam.dev so developers can fix bugs quickly.',
    icon: Bug,
    color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 dark:text-indigo-400',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'contact-list-app-agile-qa',
    title: 'Contact List App (End-to-End Agile QA)',
    category: 'agile',
    description: 'Full-stack Agile QA project for Contact List App. Built a 3-Epic, 9-User-Story Jira backlog with 36 BDD test scenarios (Given/When/Then) covering Auth, Contact CRUD, and Postman REST API testing.',
    fullDescription: 'The Contact List App is a full-stack web application requiring comprehensive testing across both the frontend user interface and backend REST API. As the QA Software Tester, I engineered the entire Agile testing backlog in Jira from scratch using Scrum methodology. I broke down requirements into 3 core Epics (Authentication, Contact Management CRUD, and API Testing), authored 9 User Stories with story point estimation, and wrote 36 BDD Given/When/Then acceptance criteria test scenarios covering happy paths, edge cases, and API status codes.',
    keyHighlights: [
      'Engineered a balanced Agile backlog in Jira with 3 Epics, 9 User Stories, and 36 BDD test scenarios',
      'Epic 1 (Auth & Access): 3 Stories | 12 Scenarios testing registration, password validation, lockout, and session token destruction',
      'Epic 2 (Contact CRUD): 3 Stories | 12 Scenarios testing adding, viewing, editing, deleting contacts, and browser alert handling',
      'Epic 3 (API Testing): 3 Stories | 12 Scenarios testing REST API endpoints in Postman checking status codes (201, 200, 204, 400, 401, 404) and JSON schemas',
      'Defined clear Given/When/Then Acceptance Criteria for developer clarity, Story Point estimation, and full requirement traceability'
    ],
    toolsUsed: ['Jira', 'Postman', 'BDD / Gherkin', 'Agile / Scrum', 'REST API Testing', 'Story Point Estimation'],
    tags: ['Agile QA', 'Jira Board', 'BDD / Gherkin', 'Postman API', 'Contact List App', 'CRUD Testing'],
    links: [
      { label: 'Jira Software Board', url: 'https://youssefhebish7.atlassian.net/jira/software/projects/CLA/summary', icon: LayoutDashboard },
      { label: 'Tested App Website', url: 'https://thinking-tester-contact-list.herokuapp.com/', icon: Globe }
    ],
    color: 'border-l-4 border-blue-500',
    icon: CheckSquare
  },
  {
    id: 'medicaspace-internship',
    title: 'MedicaSpace QC Member Internship (Web QA)',
    category: 'internship',
    description: 'Completed a 3-month Software QC Member internship focused on web application quality control. Led testing for the Partnership Program web module, validated web workflows, and found critical email delivery & data sync bugs on web.',
    fullDescription: 'During my 3-month internship as a QC Member at MedicaSpace (1 Jan - 1 Apr 2026), I took full responsibility for Quality Control of the Partnership Program web module. I tested the web platform across browsers and screen sizes, executed end-to-end user journeys, and identified critical software defects including race conditions and email delivery failures.',
    keyHighlights: [
      'Executed full E2E testing for the Partnership Program web feature',
      'Discovered critical web bugs including email delivery failures and race conditions',
      'Verified web UI responsiveness across desktop and mobile browsers',
      'Tested web app behavior under different network speeds and connection drops',
      'Logged and managed clear bug tickets on ClickUp'
    ],
    toolsUsed: ['ClickUp', 'Postman', 'Chrome DevTools', 'Web Testing', 'E2E Testing'],
    tags: ['MedicaSpace', 'Certified Internship', 'QC Member', 'Web QA', 'ClickUp', 'Postman'],
    links: [
      { label: 'View Certificate (PDF)', url: '/medicaspace-certificate.pdf', icon: FileText },
      { label: 'MedicaSpace Website', url: 'https://medicaspace.com', icon: Globe }
    ],
    color: 'border-l-4 border-teal-500',
    icon: Shield
  },
  {
    id: 'java-basics-for-qa',
    title: 'QA Automation Engine (Java Basics)',
    category: 'automation',
    description: 'A Java test runner program built to practice Java basics for Software Testing and Automation. Executes test cases, performs assertions, simulates retries with loops, and prints a QA Execution Report with a success rate percentage.',
    fullDescription: 'A custom mini test execution program built in pure Java to practice core programming fundamentals required for Software Automation. The program acts as a lightweight test runner: it executes test steps, verifies assertions (pass/fail), handles retries using loops (e.g. server connections), and generates a structured QA Execution Report log in the console.',
    keyHighlights: [
      'Applied Java variables for test data handling (String, int, double, boolean)',
      'Structured reusable test methods (e.g. verifyPayment)',
      'Implemented conditional assertions (If/Else) to check Pass or Fail criteria',
      'Built retry mechanisms using For loops to simulate network connection retries',
      'Formatted and printed an automated QA Execution Report with total tests and success rate percentage'
    ],
    toolsUsed: ['Java', 'OOP', 'Assertion Logic', 'Test Runner Engine', 'Git/GitHub'],
    tags: ['Java', 'Test Automation', 'OOP', 'QA Logic', 'Assertions'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/youssefhebish27/Java-Basics-For-QA', icon: Github }
    ],
    color: 'border-l-4 border-red-500',
    icon: Terminal
  },
  {
    id: 'test-io-freelance',
    title: 'Freelance Bug Testing on Test.io',
    category: 'crowdtesting',
    description: 'Certified Tester on Test.io. I find hidden bugs in live mobile apps and websites, write clear bug reports, and verify bug fixes from other testers.',
    fullDescription: 'As an active certified crowdtester on Test.io, I perform exploratory testing and bug hunting on live web and mobile applications from international clients. I focus on finding high-impact functional bugs, usability defects, and edge cases, providing detailed reproduction steps, logs, and video attachments.',
    keyHighlights: [
      'Found and reported 50+ real-world bugs on live mobile & web applications',
      'Specialized in mobile edge cases and functional testing',
      'Earned qualification status to verify and reproduce bug reports from other testers',
      'Delivered clear video recordings and console logs using Jam.dev'
    ],
    toolsUsed: ['Test.io Platform', 'Jam.dev', 'Android/iOS Devices', 'Chrome DevTools'],
    tags: ['Test.io', 'Exploratory Testing', 'User Experience', 'Bug Reporting'],
    links: [
      { label: 'View Test.io Profile', url: 'https://tester.test.io/profile_pages/youssefhebish', icon: Globe }
    ],
    color: 'border-l-4 border-emerald-500',
    icon: Globe
  },
  {
    id: 'rideshare-agile-qa',
    title: 'Rideshare App QA (Agile Project)',
    category: 'agile',
    description: 'Complete Agile QA project. Analyzed project requirements, created 6 Epics, 69 User Stories, and designed 94 detailed test cases in Zephyr Scale covering the full ride booking journey.',
    fullDescription: 'A comprehensive end-to-end Agile software testing project for a mobile rideshare application. Started by analyzing the Software Requirement Specification (SRS) and UI design kits, breaking requirements down into 6 Epics and 69 User Stories. Designed 94 detailed test cases in Zephyr Scale and uncovered 6 critical logical bugs before release.',
    keyHighlights: [
      'Analyzed SRS & UI Kit to write 6 Epics and 69 User Stories',
      'Designed 94 comprehensive test cases in Zephyr Scale',
      'Found 6 critical logical bugs in ride booking and fare calculations',
      'Maintained full requirement traceability matrix (RTM)',
      'Exported complete test cases to Google Sheets for permanent access'
    ],
    toolsUsed: ['Jira', 'Zephyr Scale', 'Gherkin', 'Google Sheets', 'Requirement Traceability'],
    tags: ['Agile', 'Jira', 'Zephyr Scale', 'Gherkin', 'Test Design'],
    links: [
      { label: 'Test Scenarios (Google Sheet)', url: 'https://docs.google.com/spreadsheets/d/1qcLDU6ucd3vgl8UlLf5cJRWtGs08rZOY/edit?usp=sharing&ouid=100866766662999307425&rtpof=true&sd=true', icon: FileSpreadsheet }
    ],
    color: 'border-l-4 border-purple-500',
    icon: Smartphone
  },
  {
    id: 'trello-api-automation',
    title: 'Trello API Test Automation',
    category: 'api',
    description: 'Automated Postman test suite for Trello REST API. Simulates board creation, adding lists, creating cards, and checklists with 133 automated tests and 0 failures.',
    fullDescription: 'An automated REST API testing collection built in Postman for Trello. It simulates a complete user workflow: creating a new board, adding lists, creating cards, and attaching checklists. Uses JavaScript test scripts, dynamic environment variables, and request chaining to achieve 133 automated test assertions with 100% pass rate.',
    keyHighlights: [
      'Executed 133 automated API tests with 0 failures',
      'Tested complete Board -> List -> Card -> Checklist user journey',
      'Used dynamic variables to pass IDs between API requests automatically',
      'Included negative testing and invalid token verification'
    ],
    toolsUsed: ['Postman', 'JavaScript', 'REST API', 'JSON Data'],
    tags: ['Postman', 'JavaScript', 'Rest API', 'Automation'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/youssefhebish27/Trello-API-Test-Automation', icon: Github }
    ],
    color: 'border-l-4 border-blue-600',
    icon: Code
  },
  {
    id: 'reqres-api-test-collection',
    title: 'Reqres.in API Test Collection',
    category: 'api',
    description: 'Postman test suite with 95+ automated tests checking user data, authentication, schema validation, and response speed across HTTP status codes.',
    fullDescription: 'A Postman API testing suite created for the Reqres.in mock API. Contains 95+ automated tests covering all CRUD operations (GET, POST, PUT, DELETE), user login authentication, schema validation, regex format checks, and API response time validation.',
    keyHighlights: [
      '95+ automated test scripts covering CRUD operations',
      'Validated HTTP status codes: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 404 Not Found',
      'Checked JSON Schema data types and email format rules',
      'Validated API response speed under 1000ms'
    ],
    toolsUsed: ['Postman', 'JSON Schema', 'JavaScript', 'REST API'],
    tags: ['Postman', 'CRUD Operations', 'Schema Validation', 'Performance Testing'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/youssefhebish27/Reqres-API-Test-Collection', icon: Github }
    ],
    color: 'border-l-4 border-indigo-500',
    icon: Database
  },
  {
    id: 'swagger-petstore-automation',
    title: 'Swagger Petstore API Automation',
    category: 'api',
    description: 'End-to-end API test collection testing pets, orders, and store users. Handles file uploads and dynamic data passing between API calls.',
    fullDescription: 'An end-to-end API testing collection for the Swagger Petstore service. It tests the complete lifecycle for Pets, Store Orders, and User accounts. Demonstrates advanced Postman features including multipart/form-data image uploads, dynamic data chaining, and comprehensive error status code checks.',
    keyHighlights: [
      'Tested full lifecycle for Pets, Store Orders, and Users',
      'Implemented multipart image file uploads in Postman requests',
      'Chained dynamic pet and order IDs across sequential API calls',
      'Verified proper error messages for invalid input data'
    ],
    toolsUsed: ['Postman', 'REST API', 'JavaScript', 'Dynamic Chaining'],
    tags: ['Postman', 'E2E Testing', 'JavaScript', 'Dynamic Chaining'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/youssefhebish27/Swagger-Petstore-API-Automation', icon: Github }
    ],
    color: 'border-l-4 border-yellow-600',
    icon: Box
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Science (4th Year Senior Student)',
    institution: 'Higher Institute for Commerce and Computers, Mansoura',
    year: 'Sep 2022 - Present (4th Year)',
    description: 'Studying core Computer Science topics: Object-Oriented Programming (Java/OOP), Database Systems (SQL), Software Engineering, Web & Mobile Development, System Analysis, and Data Structures.'
  },
  {
    degree: 'Software Testing Practical Bootcamp',
    institution: 'Tarek Roshdy',
    year: 'Present',
    description: 'Comprehensive practical training covering Manual Testing, API Testing (Postman), Mobile QA, Agile/Scrum, Defect Management (Jira/Zephyr Scale), Selenium Automation, Performance Testing (JMeter), and Freelance QA.',
    modules: [
      'Software Testing Fundamentals & ISTQB Foundation Level Concepts',
      'Requirement Analysis, Test Scenarios & Test Cases (Trello, Google Sheets)',
      'Defect Lifecycle & Test Management (Jira, Zephyr Scale, Defect Triage)',
      'API Testing & Validation (Postman)',
      'Mobile App Testing & Agile QA Workflows (Scrum)',
      'Test Automation Basics (Selenium WebDriver, Java, TestNG, POM)',
      'Performance Testing (JMeter) & Freelancing / CrowdTesting Platforms'
    ]
  },
  {
    degree: 'Selenium Test Automation Framework (TAF) with Java',
    institution: 'Ahmed Ashraf',
    year: 'Present',
    description: 'Practical training on building scalable Test Automation Frameworks (TAF) using Selenium WebDriver with Java, aligned with ISTQB TAE v2 standards.',
    modules: [
      'Automation Concepts & ISTQB TAE v2 Syllabus Alignment',
      'Selenium WebDriver & Java (Locators, Dynamic Waits, Actions)',
      'TestNG Framework (Annotations, Parallel Execution with ThreadLocal)',
      'Design Patterns (POM, Factory, Facade, Singleton, Bot Pattern & SOLID)',
      'Data-Driven Testing (DDT via Properties, JSON, Excel)',
      'Allure Reporting (Logs, Failure Screenshots & Video Captures)',
      'CI/CD Workflows (GitHub Actions & Git Version Control)'
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { 
    id: 'medicaspace-qc',
    title: 'QC Member Internship Certificate', 
    issuer: 'MedicaSpace (MEDICA space)', 
    role: 'Intern as QC Member',
    date: '1 January - 1 April 2026 (3 Months)',
    color: 'bg-teal-50 border-teal-200 dark:bg-teal-950/30 dark:border-teal-800/60',
    status: 'Completed & Certified',
    certificateUrl: '/medicaspace-certificate.pdf',
    hasModal: false,
    certificateDetails: {
      recipientName: 'Youssef Mohamed Hebish',
      description: 'HAS SUCCESSFULLY ATTENDED & COMPLETED INTERN AS QC MEMBER',
      period: 'For 3 Months (1 January - 1 April 2026)',
      signatoryName: 'Osama Helmy',
      signatoryTitle: 'CEO & Founder',
      organization: 'MEDICA space'
    }
  },
  { 
    id: 'digital-pioneers',
    title: 'Software Testing Track', 
    issuer: 'Digital Pioneers of Egypt (Rowad Masr)', 
    role: 'Software Testing Specialist Trainee',
    date: '2025 - 2026',
    color: 'bg-orange-50 border-orange-200 dark:bg-orange-950/30 dark:border-orange-800/60',
    status: 'Finished (Certificate Pending)',
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
  whatsapp: 'https://wa.me/201027335956',
  phone: '+20 10 27335956',
  location: 'Gharbia, Egypt',
  linkedin: 'https://www.linkedin.com/in/youssef-hebish/',
  github: 'https://github.com/youssefhebish27',
  formAction: 'https://formsubmit.co/youssefhebish27@gmail.com'
};

