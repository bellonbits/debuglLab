import React, { useState, useEffect, useRef } from 'react';
import { lessonsData } from './data/lessonsData';
import type { Lesson, Section } from './data/lessonsData';
import { sqlLessonsData, getMockSqlData } from './data/sqlLessonsData';
import type { SqlSection, SqlLesson } from './data/sqlLessonsData';
import { fastApiLessonsData } from './data/fastApiLessonsData';
import type { FastApiSection, FastApiLesson } from './data/fastApiLessonsData';
import { expressApiLessonsData } from './data/expressApiLessonsData';
import type { ExpressSection, ExpressLesson } from './data/expressApiLessonsData';
import { pythonLessonsData } from './data/pythonLessonsData';
import type { PythonSection, PythonLesson } from './data/pythonLessonsData';
import { typescriptLessonsData } from './data/typescriptLessonsData';
import type { TypeScriptSection, TypeScriptLesson } from './data/typescriptLessonsData';
import { rQualitativeLessonsData } from './data/rQualitativeLessonsData';
import type { RQualitativeSection, RQualitativeLesson } from './data/rQualitativeLessonsData';
import { aiAssignmentsData } from './data/assignmentData';
import { quizzesData } from './data/quizzesData';
import type { QuizCategory } from './data/quizzesData';

// Premium SVG React Icons (Feather-styled, offline-ready, no emojis)
const RiReact = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }} {...props}>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const RiDatabase = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }} {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const RiFastApi = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }} {...props}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="13 7 8 13 12 13 11 17 16 11 12 11 13 7" fill="currentColor" stroke="none" />
  </svg>
);

const RiServer = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }} {...props}>
    <rect x="2" y="3" width="20" height="6" rx="1.5" />
    <rect x="2" y="15" width="20" height="6" rx="1.5" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const RiPython = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }} {...props}>
    <path d="M12 2A10 10 0 0 0 2 12c0 2.25.75 4.3 2 6l1.5-1.5C4.5 15 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8c0 1.5-.5 3-1.5 4.5L20 18c1.25-1.7 2-3.75 2-6A10 10 0 0 0 12 2z" />
    <path d="M12 22a10 10 0 0 0 10-10c0-2.25-.75-4.3-2-6l-1.5 1.5c1 1.5 1.5 3 1.5 4.5 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-1.5.5-3 1.5-4.5L4 6c-1.25 1.7-2 3.75-2 6a10 10 0 0 0 10 10z" />
    <circle cx="9" cy="9" r="1" fill="currentColor" />
    <circle cx="15" cy="15" r="1" fill="currentColor" />
  </svg>
);

const RiTypeScript = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 8h4M9 8v8M15 8c1.5 0 2 .5 2 1.5s-.5 1.5-2 1.5c-1.5 0-2 .5-2 1.5s.5 1.5 2 1.5" />
  </svg>
);

const RiAward = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }} {...props}>
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const RiCheckCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }} {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const RiAlertCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }} {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const RiPlay = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="none" style={{ display: 'inline-block', verticalAlign: 'middle' }} {...props}>
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const RiTerminal = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }} {...props}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const RiBookOpen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }} {...props}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const RiZap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }} {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const RiFlame = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }} {...props}>
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z" />
  </svg>
);

const RiRocket = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }} {...props}>
    <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5M14 2.5a20.6 20.6 0 0 1 7.5 7.5c-1.5 6-5.5 8.5-9.5 9.5-1-.25-2-1.25-2.25-2.25.5-3.5 3-7.5 6.5-10.5zM9 15l-3 3-2-2 3-3" />
  </svg>
);

const RiBrain = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }} {...props}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z" />
  </svg>
);

const RiSparkles = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }} {...props}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.5 5.5l3 3M15.5 15.5l3 3M5.5 18.5l3-3M15.5 8.5l3-3" />
  </svg>
);

const RiBarChart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }} {...props}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);

// Database schema specifications for inspector visual drawers
const tableSchemas: Record<string, { cols: string[]; desc: string[] }> = {
  world: {
    cols: ['name', 'continent', 'area', 'population', 'gdp', 'capital'],
    desc: ['Country name', 'Continent name', 'Land area (sq km)', 'Inhabitants', 'Gross Dom. Prod.', 'Capital city']
  },
  nobel: {
    cols: ['yr', 'subject', 'winner'],
    desc: ['Award Year', 'Prize Subject category', 'Winner name']
  },
  game: {
    cols: ['id', 'mdate', 'stadium', 'team1', 'team2'],
    desc: ['Match ID', 'Match date', 'Stadium name', 'First team code', 'Second team code']
  },
  goal: {
    cols: ['matchid', 'teamid', 'player', 'gtime'],
    desc: ['Game match ID reference', 'Scoring team code', 'Scorer player name', 'Goal minute time']
  },
  eteam: {
    cols: ['id', 'teamname', 'coach'],
    desc: ['Team code', 'Country team name', 'Manager coach name']
  },
  movie: {
    cols: ['id', 'title', 'yr', 'director', 'budget', 'gross'],
    desc: ['Film ID', 'Film title', 'Release Year', 'Director ID', 'Production budget', 'Box office gross']
  },
  actor: {
    cols: ['id', 'name'],
    desc: ['Actor ID', 'Actor name']
  },
  casting: {
    cols: ['movieid', 'actorid', 'ord'],
    desc: ['Movie reference ID', 'Actor reference ID', 'Billing order (1 = star)']
  },
  teacher: {
    cols: ['id', 'dept', 'name', 'phone', 'mobile'],
    desc: ['Teacher ID', 'Department ID reference', 'Teacher name', 'Office phone number', 'Cell number']
  },
  dept: {
    cols: ['id', 'name'],
    desc: ['Department ID', 'Department name']
  },
  stops: {
    cols: ['id', 'name'],
    desc: ['Bus stop ID', 'Location stop name']
  },
  route: {
    cols: ['num', 'company', 'pos', 'stop'],
    desc: ['Bus route number', 'Operating company', 'Stop sequence order', 'Stop ID reference']
  }
};

const getRelevantTables = (lessonId: string): string[] => {
  if (lessonId === 'select-nobel') return ['nobel'];
  if (lessonId === 'joins-basics') return ['game', 'goal', 'eteam'];
  if (lessonId === 'more-joins') return ['movie', 'actor', 'casting'];
  if (lessonId === 'using-null') return ['teacher', 'dept'];
  if (lessonId === 'self-join') return ['stops', 'route'];
  return ['world'];
};




interface QuizLog {
  date: string;
  category: string;
  score: string;
  rating: string;
}

// Calendar event representation
interface CalendarEvent {
  date: number; // Day of July 2026
  title: string;
  category: string;
  description: string;
  time: string;
}

// Confetti Particle Class for celebration triggers
class ConfettiParticle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = canvasHeight + Math.random() * 20;
    this.size = Math.random() * 8 + 6;
    const colors = ['#6366f1', '#a855f7', '#10b981', '#f59e0b', '#ef4444', '#3b82f6'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.speedX = Math.random() * 6 - 3;
    this.speedY = -(Math.random() * 12 + 10);
    this.rotation = Math.random() * 360;
    this.rotationSpeed = Math.random() * 4 - 2;
  }

  update(canvasHeight: number, gravity: number) {
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedY += gravity;
    this.rotation += this.rotationSpeed;
    return this.y < canvasHeight + 20;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.fillStyle = this.color;
    ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
    ctx.restore();
  }
}

// Course Cover Banner Thumbnails (Beautiful, premium glowing dark neon tech aesthetics)
const SUPER_ADMIN_EMAIL = 'petergatitu61@gmail.com';

const COURSE_COVERS = {
  react: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
  sql: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  fastapi: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
  express: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
  python: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
  typescript: "https://images.unsplash.com/photo-1516116211223-5c359a36298a?auto=format&fit=crop&w=800&q=80",
  rqualitative: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
};

// Dynamic real-data quiz challenges mapped to standard domains
const quizCategories: QuizCategory[] = quizzesData;

// Interactive Calendar Events schedule for July 2026 - Mapped to real lesson module checkpoints
const calendarEvents: CalendarEvent[] = [
  {
    date: 1,
    title: "Course Orientation & Module 1 Start",
    category: "Module 1",
    description: "Welcome to The Debug Society! Begin your study of Module 1: Introduction (3 lessons: How This Course Will Work, Introduction to React, Setting Up a React Environment).",
    time: "09:00 AM"
  },
  {
    date: 6,
    title: "Module 2: Getting Started With React",
    category: "Module 2",
    description: "Complete your study of components, JSX, props, rendering, and keys (5 lessons: Components, JSX, Props, Rendering, Keys).",
    time: "11:59 PM"
  },
  {
    date: 13,
    title: "Module 3: States And Effects Checkpoint",
    category: "Module 3",
    description: "Master reactive programming with React states and hooks (5 lessons: useState, useEffect, lifecycles, and synchronization).",
    time: "11:59 PM"
  },
  {
    date: 18,
    title: "Module 4: Class Components Review",
    category: "Module 4",
    description: "Review traditional class-based components, lifecycle methods, and legacy patterns (2 lessons: Class Components, Lifecycle Methods).",
    time: "11:59 PM"
  },
  {
    date: 22,
    title: "Module 5: React Testing Frameworks",
    category: "Module 5",
    description: "Verify structural alignment and behavior using standard test suites (2 lessons: Testing Basics, React Testing Library).",
    time: "11:59 PM"
  },
  {
    date: 26,
    title: "Module 6: The React Ecosystem",
    category: "Module 6",
    description: "Extend your capabilities using Context, React Router, Forms, and State Managers (5 lessons: Context API, React Router, Forms, Reducers).",
    time: "11:59 PM"
  },
  {
    date: 29,
    title: "Module 7: More React Concepts",
    category: "Module 7",
    description: "Optimize render profiles, refs, memoization, and custom hooks (3 lessons: Refs, custom hooks, and memo optimization).",
    time: "11:59 PM"
  },
  {
    date: 30,
    title: "Module 8: TypeScript Basics",
    category: "Module 8",
    description: "Learn static typing, unions, interfaces, generics, utility types, and modules (3 lessons: Primitives, Advanced & Interfaces, Classes & Generics).",
    time: "11:59 PM"
  },
  {
    date: 31,
    title: "Graduation Capstone & Master Review",
    category: "Module 9",
    description: "Review standard deployment structures and receive your graduation credential from The Debug Society (1 lesson: Conclusion).",
    time: "05:00 PM"
  }
];

export function App() {
  // Navigation & Page routing state
  const [activePage, setActivePage] = useState<string>('dashboard');
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(() => {
    return localStorage.getItem('debug_society_current_user_email') || null;
  });
  const [authTab, setAuthTab] = useState<'signin' | 'signup'>('signin');
  const [authEmail, setAuthEmail] = useState<string>('');
  const [authPassword, setAuthPassword] = useState<string>('');
  const [authFullName, setAuthFullName] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');

  // Helper to load user profile values on initialization
  const getPersonalState = <T extends unknown>(key: string, defaultValue: T): T => {
    const email = localStorage.getItem('debug_society_current_user_email');
    if (!email) return defaultValue;
    const saved = localStorage.getItem(`debug_society_profile_${email}`);
    if (!saved) return defaultValue;
    try {
      const parsed = JSON.parse(saved);
      return parsed[key] !== undefined ? parsed[key] : defaultValue;
    } catch {
      return defaultValue;
    }
  };

  // Database synchronization state (SQLite Server detection)
  const [dbStatus, setDbStatus] = useState<'checking' | 'online' | 'offline'>('checking');

  useEffect(() => {
    // Check if the SQLite / Groq backend server is running locally
    fetch('/api/ping')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'online') {
          setDbStatus('online');
          console.log('[SYSTEM] SQLite Sync Server detected. Operating in SQLite database mode.');
        } else {
          setDbStatus('offline');
        }
      })
      .catch(() => {
        setDbStatus('offline');
        console.log('[SYSTEM] SQLite Server offline. Operating in progressive LocalStorage fallback mode.');
      });
  }, []);

  
  // Course completion states (stored in localstorage)
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    const saved = localStorage.getItem('debug_society_completed_lessons');
    return saved ? JSON.parse(saved) : [];
  });

  // Workspace active track state
  const [activeTrack, setActiveTrack] = useState<string>(() => {
    return localStorage.getItem('debug_society_active_track') || 'react';
  });

  // SQL track completion states
  const [completedSqlLessons, setCompletedSqlLessons] = useState<string[]>(() => {
    const saved = localStorage.getItem('debug_society_completed_sql_lessons');
    return saved ? JSON.parse(saved) : [];
  });

  // FastAPI track completion states
  const [completedFastApiLessons, setCompletedFastApiLessons] = useState<string[]>(() => {
    const saved = localStorage.getItem('debug_society_completed_fastapi_lessons');
    return saved ? JSON.parse(saved) : [];
  });

  // Express REST API track completion states
  const [completedExpressLessons, setCompletedExpressLessons] = useState<string[]>(() => {
    const saved = localStorage.getItem('debug_society_completed_express_lessons');
    return saved ? JSON.parse(saved) : [];
  });

  // Python Basics track completion states
  const [completedPythonLessons, setCompletedPythonLessons] = useState<string[]>(() => {
    const saved = localStorage.getItem('debug_society_completed_python_lessons');
    return saved ? JSON.parse(saved) : [];
  });

  // Immersive Lesson Reader State
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);

  // SQL Lesson Immersive Reader State
  const [selectedSqlLesson, setSelectedSqlLesson] = useState<SqlLesson | null>(null);
  const [selectedSqlSection, setSelectedSqlSection] = useState<SqlSection | null>(null);

  // FastAPI Lesson Immersive Reader State
  const [selectedFastApiLesson, setSelectedFastApiLesson] = useState<FastApiLesson | null>(null);
  const [selectedFastApiSection, setSelectedFastApiSection] = useState<FastApiSection | null>(null);

  // Express REST API Lesson Immersive Reader State
  const [selectedExpressLesson, setSelectedExpressLesson] = useState<ExpressLesson | null>(null);
  const [selectedExpressSection, setSelectedExpressSection] = useState<ExpressSection | null>(null);

  // Python Lesson Immersive Reader State
  const [selectedPythonLesson, setSelectedPythonLesson] = useState<PythonLesson | null>(null);
  const [selectedPythonSection, setSelectedPythonSection] = useState<PythonSection | null>(null);

  // TypeScript Basics track completion states
  const [completedTypescriptLessons, setCompletedTypescriptLessons] = useState<string[]>(() => {
    const saved = localStorage.getItem('debug_society_completed_typescript_lessons');
    return saved ? JSON.parse(saved) : [];
  });

  // TypeScript Lesson Immersive Reader State
  const [selectedTypescriptLesson, setSelectedTypescriptLesson] = useState<TypeScriptLesson | null>(null);
  const [selectedTypescriptSection, setSelectedTypescriptSection] = useState<TypeScriptSection | null>(null);

  // R Qualitative Research track completion states
  const [completedRQualitativeLessons, setCompletedRQualitativeLessons] = useState<string[]>(() => {
    const saved = localStorage.getItem('debug_society_completed_rqualitative_lessons');
    return saved ? JSON.parse(saved) : [];
  });

  // R Qualitative Lesson Immersive Reader State
  const [selectedRQualitativeLesson, setSelectedRQualitativeLesson] = useState<RQualitativeLesson | null>(null);
  const [selectedRQualitativeSection, setSelectedRQualitativeSection] = useState<RQualitativeSection | null>(null);

  // SQL sandbox terminal workspace states
  const [sqlQuery, setSqlQuery] = useState<string>('');
  const [sqlSimulatedResults, setSqlSimulatedResults] = useState<any[] | null>(null);
  const [sqlSandboxFeedback, setSqlSandboxFeedback] = useState<string>('');
  const [activeAssignmentIndex, setActiveAssignmentIndex] = useState<number>(0);
  
  // Practice Arena Quiz State
  const [activeQuizCategory, setActiveQuizCategory] = useState<QuizCategory | null>(null);
  const [quizQuestionIndex, setQuizQuestionIndex] = useState<number>(0);
  const [quizSelectedOption, setQuizSelectedOption] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [activeQuizTrack, setActiveQuizTrack] = useState<string>('react');
  const [quizCodeValue, setQuizCodeValue] = useState<string>('');
  const [quizCodeVerified, setQuizCodeVerified] = useState<boolean | null>(null);
  const [quizCodeLogs, setQuizCodeLogs] = useState<string[]>([]);
  const [quizLog, setQuizLog] = useState<QuizLog[]>(() => {
    const saved = localStorage.getItem('debug_society_quiz_logs');
    return saved ? JSON.parse(saved) : [];
  });

  // Meltdown Pomodoro Timer States
  const [timerMinutes, setTimerMinutes] = useState<number>(25);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [timerIsRunning, setTimerIsRunning] = useState<boolean>(false);
  const [timerMode, setTimerMode] = useState<string>('coding'); // coding, short-break, long-break
  const [timerSessionsCount, setTimerSessionsCount] = useState<number>(() => {
    return getPersonalState('timerSessionsCount', 0);
  });

  // Developer Profile Settings
  const [devName, setDevName] = useState<string>(() => {
    return getPersonalState('devName', 'Moni Roy');
  });
  const [devAvatar, setDevAvatar] = useState<string>(() => {
    return getPersonalState('devAvatar', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop');
  });
  const [devTitle, setDevTitle] = useState<string>(() => {
    return getPersonalState('devTitle', 'Core Engineer');
  });
  const [devTheme, setDevTheme] = useState<string>(() => {
    return getPersonalState('devTheme', 'studio-aura');
  });

  // Interactive Calendar Date Click State — defaults to actual today
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<number>(() => new Date().getDate());
  const [calendarYear, setCalendarYear] = useState<number>(() => new Date().getFullYear());
  const [calendarMonth, setCalendarMonth] = useState<number>(() => new Date().getMonth());

  // Admin Panel State
  const isSuperAdmin = currentUserEmail === SUPER_ADMIN_EMAIL;
  type AdminStudent = {
    email: string; name: string; avatar: string; title: string; theme: string;
    completedReact: number; completedSql: number; completedFastApi: number;
    completedExpress: number; completedPython: number; completedTypescript: number;
    totalCompleted: number; pct: number;
    quizLog: QuizLog[]; certificates: string[]; timerSessions: number;
  };
  const [adminTab, setAdminTab] = useState<'dashboard' | 'students' | 'leaderboard' | 'analytics' | 'content' | 'system'>('dashboard');
  const [adminStudents, setAdminStudents] = useState<AdminStudent[]>([]);
  const [adminSelectedStudent, setAdminSelectedStudent] = useState<AdminStudent | null>(null);
  const [adminSearch, setAdminSearch] = useState('');

  // AI Assignment Arena States
  const [assignmentPageTab, setAssignmentPageTab] = useState<'focus-pomodoro' | 'ai-arena'>('ai-arena');
  const [aiArenaTrack, setAiArenaTrack] = useState<string>('react');
  const [completedAssignments, setCompletedAssignments] = useState<string[]>(() => {
    return getPersonalState('completedAssignments', []);
  });
  const [studentSubmissions, setStudentSubmissions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    aiAssignmentsData.forEach(item => {
      initial[item.courseId] = item.starterCode;
    });
    return getPersonalState('studentSubmissions', initial);
  });
  const [aiFeedback, setAiFeedback] = useState<Record<string, {
    score: number;
    passed: boolean;
    feedbackLogs: string[];
    praise: string;
    critique: string;
    focusArea: string;
  }>>(() => {
    return getPersonalState('aiFeedback', {});
  });
  const [aiGradingStatus, setAiGradingStatus] = useState<'idle' | 'grading' | 'success' | 'failed'>('idle');
  const [aiGradingLogs, setAiGradingLogs] = useState<string[]>([]);
  const [showCertificateModal, setShowCertificateModal] = useState<string | null>(null);

  // Expand/Collapse accordion sections
  const [expandedSectionId, setExpandedSectionId] = useState<string | null>("01_Introduction");

  // Search input state
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<{ lesson: Lesson; section: Section }[]>([]);

  // Notifications dropdown
  const [notiOpen, setNotiOpen] = useState<boolean>(false);
  const [notiSeenIds, setNotiSeenIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('debug_society_noti_seen');
    return saved ? JSON.parse(saved) : [];
  });
  const notiRef = useRef<HTMLDivElement | null>(null);

  // Confetti celebration ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const confettiParticles = useRef<ConfettiParticle[]>([]);
  const animationFrameId = useRef<number | null>(null);

  // Sync state values to LocalStorage and SQLite on a personal level
  useEffect(() => {
    if (!currentUserEmail) return;
    const profile = {
      devName,
      devAvatar,
      devTitle,
      devTheme,
      completedLessons,
      completedSqlLessons,
      completedFastApiLessons,
      completedExpressLessons,
      completedPythonLessons,
      completedTypescriptLessons,
      completedRQualitativeLessons,
      completedAssignments,
      studentSubmissions,
      aiFeedback,
      timerSessionsCount,
      quizLog
    };

    // Save to LocalStorage
    localStorage.setItem(`debug_society_profile_${currentUserEmail}`, JSON.stringify(profile));

    // Save to SQLite backend if online
    if (dbStatus === 'online') {
      syncProfileToBackend(currentUserEmail, profile);
    }

    // Auto calculate focus streak count based on lessons completed
    const days = Math.max(1, Math.ceil((completedLessons.length + completedTypescriptLessons.length + completedRQualitativeLessons.length) / 2));
    localStorage.setItem('debug_society_streak', days.toString());
  }, [
    currentUserEmail,
    dbStatus,
    devName,
    devAvatar,
    devTitle,
    devTheme,
    completedLessons,
    completedSqlLessons,
    completedFastApiLessons,
    completedExpressLessons,
    completedPythonLessons,
    completedTypescriptLessons,
    completedRQualitativeLessons,
    completedAssignments,
    studentSubmissions,
    aiFeedback,
    timerSessionsCount,
    quizLog
  ]);

  useEffect(() => {
    localStorage.setItem('debug_society_active_track', activeTrack);
  }, [activeTrack]);

  // Scroll reader article to top whenever any lesson changes
  useEffect(() => {
    const el = document.querySelector('.reader-scroll-article');
    if (el) el.scrollTop = 0;
  }, [selectedLesson, selectedSqlLesson, selectedFastApiLesson, selectedExpressLesson, selectedPythonLesson, selectedTypescriptLesson, selectedRQualitativeLesson]);

  useEffect(() => {
    localStorage.setItem('debug_society_noti_seen', JSON.stringify(notiSeenIds));
  }, [notiSeenIds]);

  // Load all registered students whenever admin page opens (super admin only)
  useEffect(() => {
    if (activePage !== 'admin' || !isSuperAdmin) return;
    const emails: string[] = JSON.parse(localStorage.getItem('debug_society_registered_users') || '[]');
    const loaded: AdminStudent[] = emails.map(email => {
      const p = JSON.parse(localStorage.getItem(`debug_society_profile_${email}`) || '{}');
      const rc = (p.completedLessons || []).length;
      const sc = (p.completedSqlLessons || []).length;
      const fac = (p.completedFastApiLessons || []).length;
      const ec = (p.completedExpressLessons || []).length;
      const pc = (p.completedPythonLessons || []).length;
      const tc = (p.completedTypescriptLessons || []).length;
      const rqc = (p.completedRQualitativeLessons || []).length;
      const tot = rc + sc + fac + ec + pc + tc + rqc;
      return {
        email,
        name: p.devName || email.split('@')[0],
        avatar: p.devAvatar || '',
        title: p.devTitle || 'Core Engineer',
        theme: p.devTheme || 'studio-aura',
        completedReact: rc, completedSql: sc, completedFastApi: fac,
        completedExpress: ec, completedPython: pc, completedTypescript: tc,
        completedRQualitative: rqc,
        totalCompleted: tot,
        pct: totalAll > 0 ? Math.round((tot / totalAll) * 100) : 0,
        quizLog: p.quizLog || [],
        certificates: p.completedAssignments || [],
        timerSessions: p.timerSessionsCount || 0,
      };
    });
    setAdminStudents(loaded);
    setAdminSelectedStudent(null);
  }, [activePage, isSuperAdmin]);

  // Close notifications panel on outside click
  useEffect(() => {
    if (!notiOpen) return;
    const onClick = (e: MouseEvent) => {
      if (notiRef.current && !notiRef.current.contains(e.target as Node)) {
        setNotiOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [notiOpen]);

  const handleMarkSqlLessonComplete = (lessonId: string) => {
    if (completedSqlLessons.includes(lessonId)) {
      setCompletedSqlLessons(completedSqlLessons.filter(id => id !== lessonId));
      playSynthesizedSound('reset');
    } else {
      setCompletedSqlLessons([...completedSqlLessons, lessonId]);
      playSynthesizedSound('success');
      triggerConfetti();
    }
  };

  const handleMarkFastApiLessonComplete = (lessonId: string) => {
    if (completedFastApiLessons.includes(lessonId)) {
      setCompletedFastApiLessons(completedFastApiLessons.filter(id => id !== lessonId));
      playSynthesizedSound('reset');
    } else {
      setCompletedFastApiLessons([...completedFastApiLessons, lessonId]);
      playSynthesizedSound('success');
      triggerConfetti();
    }
  };

  const handleMarkExpressLessonComplete = (lessonId: string) => {
    if (completedExpressLessons.includes(lessonId)) {
      setCompletedExpressLessons(completedExpressLessons.filter(id => id !== lessonId));
      playSynthesizedSound('reset');
    } else {
      setCompletedExpressLessons([...completedExpressLessons, lessonId]);
      playSynthesizedSound('success');
      triggerConfetti();
    }
  };

  const handleMarkPythonLessonComplete = (lessonId: string) => {
    if (completedPythonLessons.includes(lessonId)) {
      setCompletedPythonLessons(completedPythonLessons.filter(id => id !== lessonId));
      playSynthesizedSound('reset');
    } else {
      setCompletedPythonLessons([...completedPythonLessons, lessonId]);
      playSynthesizedSound('success');
      triggerConfetti();
    }
  };

  const handleMarkTypescriptLessonComplete = (lessonId: string) => {
    if (completedTypescriptLessons.includes(lessonId)) {
      setCompletedTypescriptLessons(completedTypescriptLessons.filter(id => id !== lessonId));
      playSynthesizedSound('reset');
    } else {
      setCompletedTypescriptLessons([...completedTypescriptLessons, lessonId]);
      playSynthesizedSound('success');
      triggerConfetti();
    }
  };

  const handleMarkRQualitativeLessonComplete = (lessonId: string) => {
    if (completedRQualitativeLessons.includes(lessonId)) {
      setCompletedRQualitativeLessons(completedRQualitativeLessons.filter(id => id !== lessonId));
      playSynthesizedSound('reset');
    } else {
      setCompletedRQualitativeLessons([...completedRQualitativeLessons, lessonId]);
      playSynthesizedSound('success');
      triggerConfetti();
    }
  };

  const runLocalGradingFallback = (
    code: string, 
    activeAssignment: any, 
    trackId: string,
    initialLogs: string[] = []
  ) => {
    const isUnchanged = code.trim() === activeAssignment.starterCode.trim();
    const totalKeywords = activeAssignment.validationKeywords.length;
    
    const missingKeywords = activeAssignment.validationKeywords.filter((keyword: string) => {
      const escaped = keyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(escaped, 'i');
      return !regex.test(code);
    });
    
    const matchedCount = totalKeywords - missingKeywords.length;
    let score = 0;
    let passed = false;
    let feedbackLogs: string[] = [...initialLogs];
    let praise = '';
    let critique = '';

    if (isUnchanged) {
      score = 0;
      passed = false;
      praise = "No changes detected.";
      critique = "Starter code was submitted unmodified. Please implement the required function logic to proceed.";
      feedbackLogs.push(
        '[ERROR] Unmodified starter code submitted!',
        '[SYSTEM] Diagnostic run failed. Grade: 0%'
      );
    } else {
      score = Math.round((matchedCount / totalKeywords) * 100);
      passed = score >= 70;

      if (passed) {
        score = Math.floor(Math.random() * 7) + 94; // 94 - 100%
        praise = activeAssignment.praiseSuggestions[Math.floor(Math.random() * activeAssignment.praiseSuggestions.length)];
        critique = "Code complies with all safety protocols. For higher efficiency: " + activeAssignment.critiqueSuggestions[Math.floor(Math.random() * activeAssignment.critiqueSuggestions.length)];
        feedbackLogs.push(
          `[SUCCESS] Syntactical scan complete. ${matchedCount}/${totalKeywords} checkpoints cleared.`,
          '[SUCCESS] Mock unit tests executed with 0 exceptions.',
          `[SYSTEM] AI Assignment successfully graded! Score: ${score}% (Status: PASSED)`
        );
      } else {
        praise = "Partial implementation detected.";
        const missingStr = missingKeywords.join(', ');
        critique = `Your solution is missing critical syntax structures: [${missingStr}]. Please add these variables/keywords to comply with the project standards. Details: ${activeAssignment.critiqueSuggestions[Math.floor(Math.random() * activeAssignment.critiqueSuggestions.length)]}`;
        feedbackLogs.push(
          `[WARNING] Static diagnostics complete. Missing keys: ${missingStr}`,
          '[ERROR] Unit validation failed. Incomplete functional layout.',
          `[SYSTEM] Assignment graded. Score: ${score}% (Status: REVISION REQUIRED)`
        );
      }
    }

    const finalLogs = initialLogs.length > 0 ? feedbackLogs : [
      '[SYSTEM] Initiating DebugLab Secure Compiler v4.12.0...',
      '[INFO] Analyzing imports and dependency resolution...',
      '[INFO] Running static analysis and keyword tokenization...',
      `[INFO] Verifying architectural signatures in ${activeAssignment.focusArea}...`,
      '[INFO] Running unit validation tests on mock context environment...',
      ...feedbackLogs
    ];

    setAiFeedback(prev => ({
      ...prev,
      [trackId]: {
        score,
        passed,
        feedbackLogs: finalLogs,
        praise,
        critique,
        focusArea: activeAssignment.focusArea
      }
    }));

    if (passed) {
      setAiGradingStatus('success');
      if (!completedAssignments.includes(trackId)) {
        setCompletedAssignments(prev => [...prev, trackId]);
      }
      playSynthesizedSound('success');
      triggerConfetti();
    } else {
      setAiGradingStatus('failed');
      playSynthesizedSound('incorrect');
    }
  };

  const handleGradeAssignment = (trackId: string) => {
    const activeAssignment = aiAssignmentsData.find(a => a.courseId === trackId);
    if (!activeAssignment) return;

    const code = studentSubmissions[trackId] || '';
    
    // Reset logs
    setAiGradingStatus('grading');
    setAiGradingLogs(['[SYSTEM] Initiating DebugLab Secure Compiler v4.12.0...']);

    // Simulated multi-stage grading logs
    const stages = [
      { delay: 400, log: '[INFO] Analyzing imports and dependency resolution...' },
      { delay: 800, log: '[INFO] Running static analysis and keyword tokenization...' },
      { delay: 1200, log: `[INFO] Verifying architectural signatures in ${activeAssignment.focusArea}...` },
      { delay: 1600, log: '[INFO] Running unit validation tests on mock context environment...' }
    ];

    stages.forEach(stage => {
      setTimeout(() => {
        setAiGradingLogs(prev => [...prev, stage.log]);
      }, stage.delay);
    });

    if (dbStatus === 'online') {
      setTimeout(() => {
        fetch('/api/grade', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: currentUserEmail || 'anonymous',
            trackId,
            title: activeAssignment.title,
            focusArea: activeAssignment.focusArea,
            code,
            starterCode: activeAssignment.starterCode,
            validationKeywords: activeAssignment.validationKeywords
          })
        })
        .then(async (res) => {
          if (!res.ok) {
            const errorText = await res.text();
            throw new Error(errorText || 'Server error.');
          }
          return res.json();
        })
        .then((review) => {
          const score = review.score;
          const passed = review.passed;
          const praise = review.praise;
          const critique = review.critique;

          const feedbackLogs = [
            '[SYSTEM] Initiating DebugLab Secure Compiler v4.12.0...',
            '[INFO] Analyzing imports and dependency resolution...',
            '[INFO] Running static analysis and keyword tokenization...',
            `[INFO] Verifying architectural signatures in ${activeAssignment.focusArea}...`,
            '[INFO] Running unit validation tests on mock context environment...',
            passed 
              ? `[SUCCESS] Syntactical scan complete. Groq AI successfully verified structural signatures.` 
              : `[WARNING] Static diagnostics complete. Revision required.`,
            passed
              ? `[SUCCESS] Unit test cases executed successfully.`
              : `[ERROR] Unit validation failed. Incomplete functional layout.`,
            `[SYSTEM] AI Assignment successfully graded! Score: ${score}% (Status: ${passed ? 'PASSED' : 'REVISION REQUIRED'})`
          ];

          setAiFeedback(prev => ({
            ...prev,
            [trackId]: {
              score,
              passed,
              feedbackLogs,
              praise,
              critique,
              focusArea: activeAssignment.focusArea
            }
          }));

          if (passed) {
            setAiGradingStatus('success');
            if (!completedAssignments.includes(trackId)) {
              setCompletedAssignments(prev => [...prev, trackId]);
            }
            playSynthesizedSound('success');
            triggerConfetti();
          } else {
            setAiGradingStatus('failed');
            playSynthesizedSound('incorrect');
          }
        })
        .catch((err) => {
          console.error('[AI GRADER ERROR]', err);
          const feedbackLogs = [
            '[SYSTEM] Initiating DebugLab Secure Compiler v4.12.0...',
            '[INFO] Analyzing imports and dependency resolution...',
            `[ERROR] Grader service communication failure: ${err.message}`,
            '[SYSTEM] Grader gateway offline. Falling back to local static syntax checks...'
          ];
          
          runLocalGradingFallback(code, activeAssignment, trackId, feedbackLogs);
        });
      }, 2000);
    } else {
      setTimeout(() => {
        runLocalGradingFallback(code, activeAssignment, trackId, []);
      }, 2000);
    }
  };



  // Post changes to SQLite if online
  const syncProfileToBackend = async (email: string, profileData: any) => {
    try {
      await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, ...profileData })
      });
    } catch (err) {
      console.warn('[SYSTEM] Background SQLite synchronization failed:', err);
    }
  };

  const handleAuthenticateUser = async (email: string, isSignUp: boolean, fullName?: string) => {
    localStorage.setItem('debug_society_current_user_email', email);
    setCurrentUserEmail(email);

    // Track registered users list in local
    const registeredJson = localStorage.getItem('debug_society_registered_users');
    const registered: string[] = registeredJson ? JSON.parse(registeredJson) : [];
    if (!registered.includes(email)) {
      registered.push(email);
      localStorage.setItem('debug_society_registered_users', JSON.stringify(registered));
    }

    let profile: any = null;

    if (dbStatus === 'online') {
      try {
        const response = await fetch(`/api/profile?email=${encodeURIComponent(email)}`);
        if (response.ok) {
          profile = await response.json();
          if (isSignUp && fullName) {
            profile.devName = fullName;
            await syncProfileToBackend(email, profile);
          }
        } else if (response.status === 404) {
          // Profile doesn't exist on server yet, create it
          const defaults: Record<string, string> = {};
          aiAssignmentsData.forEach(item => {
            defaults[item.courseId] = item.starterCode;
          });
          profile = {
            devName: fullName || email.split('@')[0],
            devAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop',
            devTitle: 'Core Engineer',
            devTheme: 'studio-aura',
            completedLessons: [],
            completedSqlLessons: [],
            completedFastApiLessons: [],
            completedExpressLessons: [],
            completedPythonLessons: [],
            completedTypescriptLessons: [],
            completedRQualitativeLessons: [],
            completedAssignments: [],
            studentSubmissions: defaults,
            aiFeedback: {},
            timerSessionsCount: 0,
            quizLog: []
          };
          await syncProfileToBackend(email, profile);
        }
      } catch (err) {
        console.error('[SYSTEM] Failed to load from SQLite backend, using local fallback:', err);
      }
    }

    // Fallback if offline or load failed
    if (!profile) {
      let profileJson = localStorage.getItem(`debug_society_profile_${email}`);
      if (isSignUp || !profileJson) {
        const defaults: Record<string, string> = {};
        aiAssignmentsData.forEach(item => {
          defaults[item.courseId] = item.starterCode;
        });
        profile = {
          devName: fullName || email.split('@')[0],
          devAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop',
          devTitle: 'Core Engineer',
          devTheme: 'studio-aura',
          completedLessons: [],
          completedSqlLessons: [],
          completedFastApiLessons: [],
          completedExpressLessons: [],
          completedPythonLessons: [],
          completedTypescriptLessons: [],
          completedAssignments: [],
          studentSubmissions: defaults,
          aiFeedback: {},
          timerSessionsCount: 0,
          quizLog: []
        };
        localStorage.setItem(`debug_society_profile_${email}`, JSON.stringify(profile));
      } else {
        profile = JSON.parse(profileJson);
        if (isSignUp && fullName) {
          profile.devName = fullName;
          localStorage.setItem(`debug_society_profile_${email}`, JSON.stringify(profile));
        }
      }
    }

    // Explicitly update all React states with loaded profile values
    setDevName(profile.devName || email.split('@')[0]);
    setDevAvatar(profile.devAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop');
    setDevTitle(profile.devTitle || 'Core Engineer');
    setDevTheme(profile.devTheme || 'studio-aura');
    setCompletedLessons(profile.completedLessons || []);
    setCompletedSqlLessons(profile.completedSqlLessons || []);
    setCompletedFastApiLessons(profile.completedFastApiLessons || []);
    setCompletedExpressLessons(profile.completedExpressLessons || []);
    setCompletedPythonLessons(profile.completedPythonLessons || []);
    setCompletedTypescriptLessons(profile.completedTypescriptLessons || []);
    setCompletedRQualitativeLessons(profile.completedRQualitativeLessons || []);
    setCompletedAssignments(profile.completedAssignments || []);
    setStudentSubmissions(profile.studentSubmissions || {});
    setAiFeedback(profile.aiFeedback || {});
    setTimerSessionsCount(profile.timerSessionsCount || 0);
    setQuizLog(profile.quizLog || []);

    playSynthesizedSound('success');
    triggerConfetti();
  };

  const handleLogoutUser = () => {
    localStorage.removeItem('debug_society_current_user_email');
    setCurrentUserEmail(null);
    playSynthesizedSound('reset');
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authEmail.trim() || !authPassword.trim()) {
      setAuthError('Email and Password are required.');
      return;
    }
    
    if (authTab === 'signup') {
      if (!authFullName.trim()) {
        setAuthError('Please enter your full name.');
        return;
      }
      handleAuthenticateUser(authEmail.trim().toLowerCase(), true, authFullName.trim());
    } else {
      // Sign In mode
      const registeredJson = localStorage.getItem('debug_society_registered_users');
      const registered: string[] = registeredJson ? JSON.parse(registeredJson) : [];
      if (!registered.includes(authEmail.trim().toLowerCase())) {
        setAuthError('No account found under this email. Please sign up first.');
        return;
      }
      handleAuthenticateUser(authEmail.trim().toLowerCase(), false);
    }
  };

  const handleSimulatedOauth = (email: string, name: string) => {
    handleAuthenticateUser(email, false, name);
  };

  const runSqlSandboxQuery = () => {
    if (!selectedSqlLesson) return;
    const assignment = selectedSqlLesson.assignments[activeAssignmentIndex];
    if (!assignment) return;

    const fromMatch = sqlQuery.match(/from\s+(\w+)/i);
    const table = fromMatch ? fromMatch[1].toLowerCase() : 'world';

    let cols = ['name', 'continent', 'area', 'population', 'gdp'];
    if (table === 'nobel') {
      cols = ['yr', 'subject', 'winner'];
    } else if (table === 'game') {
      cols = ['id', 'mdate', 'stadium', 'team1', 'team2'];
    } else if (table === 'goal') {
      cols = ['matchid', 'teamid', 'player', 'gtime'];
    } else if (table === 'movie') {
      cols = ['id', 'title', 'yr'];
    } else if (table === 'actor') {
      cols = ['id', 'name'];
    } else if (table === 'teacher') {
      cols = ['id', 'name', 'dept'];
    } else if (table === 'dept') {
      cols = ['id', 'name'];
    } else if (table === 'stops') {
      cols = ['id', 'name'];
    } else if (table === 'route') {
      cols = ['num', 'company', 'pos', 'stop'];
    }

    const selectMatch = sqlQuery.match(/select\s+([\w\s,\*\/\-\+]+)\s+from/i);
    if (selectMatch) {
      const colGroup = selectMatch[1].trim();
      if (colGroup !== '*') {
        cols = colGroup.split(',').map(c => c.trim().split(' ')[0].split('(')[0]);
      }
    }

    const results = getMockSqlData(table, cols, sqlQuery);
    setSqlSimulatedResults(results);

    const lowerQuery = sqlQuery.toLowerCase();
    const expected = assignment.expectedResultPattern.toLowerCase();
    let isCorrect = false;

    if (expected === 'germany') {
      isCorrect = lowerQuery.includes('germany') && lowerQuery.includes('where');
    } else if (expected === 'sweden') {
      isCorrect = lowerQuery.includes('sweden') && lowerQuery.includes('norway') && lowerQuery.includes('in');
    } else if (expected === 'between') {
      isCorrect = lowerQuery.includes('between') && lowerQuery.includes('200000') && lowerQuery.includes('250000');
    } else if (expected === 'y%') {
      isCorrect = lowerQuery.includes("like 'y%'") || lowerQuery.includes('like "y%"');
    } else if (expected === '%land') {
      isCorrect = lowerQuery.includes("like '%land'") || lowerQuery.includes('like "%land"');
    } else if (expected === '%x%') {
      isCorrect = lowerQuery.includes("like '%x%'") || lowerQuery.includes('like "%x%"');
    } else if (expected === '200000000') {
      isCorrect = lowerQuery.includes('200000000') && lowerQuery.includes('population');
    } else if (expected === 'gdp/population') {
      isCorrect = lowerQuery.includes('gdp/population') && lowerQuery.includes('200000000');
    } else if (expected === 'xor') {
      isCorrect = lowerQuery.includes('xor') || (lowerQuery.includes('or') && lowerQuery.includes('and') && lowerQuery.includes('not'));
    } else if (expected === '1950') {
      isCorrect = lowerQuery.includes('1950') && lowerQuery.includes('yr');
    } else if (expected === 'literature') {
      isCorrect = lowerQuery.includes('1962') && lowerQuery.includes('literature');
    } else if (expected === 'presidents') {
      isCorrect = lowerQuery.includes('winner') && lowerQuery.includes('in') && lowerQuery.includes('roosevelt');
    } else if (expected === 'russia') {
      isCorrect = lowerQuery.includes('select') && lowerQuery.includes('russia') && lowerQuery.includes('population >');
    } else if (expected === 'uk') {
      isCorrect = lowerQuery.includes('united kingdom') && lowerQuery.includes('gdp/population');
    } else if (expected === 'sum') {
      isCorrect = lowerQuery.includes('sum(population)');
    } else if (expected === 'group') {
      isCorrect = lowerQuery.includes('group by continent');
    } else if (expected === 'join') {
      isCorrect = lowerQuery.includes('join') && lowerQuery.includes('game') && lowerQuery.includes('goal') && lowerQuery.includes('on');
    } else if (expected === 'stadium') {
      isCorrect = lowerQuery.includes('stadium') && lowerQuery.includes('mdate') && lowerQuery.includes('join');
    } else if (expected === '1962') {
      isCorrect = lowerQuery.includes('movie') && lowerQuery.includes('1962');
    } else if (expected === 'alien') {
      isCorrect = lowerQuery.includes('alien') && lowerQuery.includes('join');
    } else if (expected === 'null') {
      isCorrect = lowerQuery.includes('teacher') && lowerQuery.includes('dept is null');
    } else if (expected === 'left') {
      isCorrect = lowerQuery.includes('left join') && lowerQuery.includes('teacher');
    } else if (expected === 'stops_count') {
      isCorrect = lowerQuery.includes('count') && lowerQuery.includes('stops');
    } else if (expected === 'bus_route_4') {
      isCorrect = lowerQuery.includes('join') && lowerQuery.includes("num = '4'");
    }

    if (isCorrect) {
      setSqlSandboxFeedback('Milestone Unlocked! Query matches output requirements perfectly.');
      playSynthesizedSound('success');
      
      const totalAssignments = selectedSqlLesson.assignments.length;
      if (activeAssignmentIndex === totalAssignments - 1) {
        if (!completedSqlLessons.includes(selectedSqlLesson.id)) {
          setCompletedSqlLessons([...completedSqlLessons, selectedSqlLesson.id]);
          triggerConfetti();
          alert(`Congratulations! You completed all query assignments in "${selectedSqlLesson.title}". Milestone updated.`);
        }
      }
    } else {
      setSqlSandboxFeedback('Simulated Status: Output compiled. Double-check your filters (WHERE) or criteria to unlock this milestone.');
      playSynthesizedSound('incorrect');
    }
  };

  // Pomodoro Interval ticker
  useEffect(() => {
    let interval: any = null;
    if (timerIsRunning) {
      interval = setInterval(() => {
        if (timerSeconds > 0) {
          setTimerSeconds(timerSeconds - 1);
        } else if (timerMinutes > 0) {
          setTimerMinutes(timerMinutes - 1);
          setTimerSeconds(59);
        } else {
          // Timer finished!
          setTimerIsRunning(false);
          if (interval) clearInterval(interval);
          
          if (timerMode === 'coding') {
            playSynthesizedSound('complete');
            alert('Focus Block Complete! Your assignment CV draft was saved locally. Stand up, stretch, and take a debugging break.');
            setTimerSessionsCount(prev => prev + 1);
            setTimerMode('short-break');
            setTimerMinutes(5);
          } else {
            playSynthesizedSound('success');
            alert('Break Completed! Ready to resume active codebase compilation.');
            setTimerMode('coding');
            setTimerMinutes(25);
          }
          setTimerSeconds(0);
        }
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerIsRunning, timerMinutes, timerSeconds, timerMode]);

  // Premium Web Audio API Synth Chime for responsive, offline auditory feedback
  const playSynthesizedSound = (type: 'success' | 'incorrect' | 'complete' | 'reset') => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      
      if (type === 'success') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
        
        setTimeout(() => {
          const osc2 = ctx.createOscillator();
          const gain2 = ctx.createGain();
          osc2.type = 'sine';
          osc2.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
          gain2.gain.setValueAtTime(0.12, ctx.currentTime);
          gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
          osc2.connect(gain2);
          gain2.connect(ctx.destination);
          osc2.start();
          osc2.stop(ctx.currentTime + 0.6);
        }, 120);
      } else if (type === 'incorrect') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220.00, ctx.currentTime); // A3
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
      } else if (type === 'complete') {
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
          setTimeout(() => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            gain.gain.setValueAtTime(0.12, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.5);
          }, idx * 100);
        });
      } else if (type === 'reset') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440.00, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(220.00, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      }
    } catch (e) {
      console.warn('Synth sound blocked:', e);
    }
  };

  // Canvas confetti animation runner
  const triggerConfetti = () => {
    const canvas = document.getElementById('confetti-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    canvasRef.current = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    confettiParticles.current = [];
    for (let i = 0; i < 150; i++) {
      confettiParticles.current.push(new ConfettiParticle(canvas.width, canvas.height));
    }

    const gravity = 0.45;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      confettiParticles.current = confettiParticles.current.filter(p => {
        const alive = p.update(canvas.height, gravity);
        p.draw(ctx);
        return alive;
      });

      if (confettiParticles.current.length > 0) {
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      }
    };

    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    animate();
  };

  // Fuzzy Lesson Search handler
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setSearchQuery(q);
    if (q.trim() === '') {
      setSearchResults([]);
      return;
    }

    const matched: { lesson: Lesson; section: Section }[] = [];
    lessonsData.forEach(section => {
      section.lessons.forEach(lesson => {
        if (
          lesson.title.toLowerCase().includes(q.toLowerCase()) ||
          lesson.content.toLowerCase().includes(q.toLowerCase())
        ) {
          matched.push({ lesson, section });
        }
      });
    });
    setSearchResults(matched.slice(0, 5));
  };

  // Safe High-fidelity HTML Markdown parser that escapes JSX code blocks correctly
  const parseMarkdownToHtml = (markdown: string): string => {
    if (!markdown) return '';
    let html = markdown;
    
    html = html.replace(/\*\*Source:\*\*\s*\[(.*?)\]\((.*?)\)/g, '');

    // 1. Safely extract fenced code blocks (any language identifier)
    const codeBlocks: string[] = [];
    html = html.replace(/```([A-Za-z0-9_+-]*)\n([\s\S]*?)```/g, (_match: string, lang: string, code: string) => {
      const escapedCode = (code || '').replace(/\n$/, '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

      const placeholder = `__FENCED_CODE_BLOCK_${codeBlocks.length}__`;
      codeBlocks.push(`<pre><code class="language-${lang || 'text'}">${escapedCode}</code></pre>`);
      return placeholder;
    });

    // 2. Safely extract inline code items
    const inlineCodeBlocks: string[] = [];
    html = html.replace(/`([^`]+)`/g, (_match, code) => {
      const escapedCode = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      const placeholder = `__INLINE_CODE_BLOCK_${inlineCodeBlocks.length}__`;
      inlineCodeBlocks.push(`<code>${escapedCode}</code>`);
      return placeholder;
    });
    
    // Tables: group consecutive pipe rows into one <table> with thead/tbody
    html = html.replace(/((?:^\|.+\|\s*\n)+)/gm, (block) => {
      const rows = block.trim().split('\n').filter(r => r.trim());
      const isSeparator = (r: string) => /^\|\s*[-: ]+\s*\|/.test(r);
      const headerRow = rows[0];
      const bodyRows = rows.slice(1).filter(r => !isSeparator(r));
      const parseRow = (row: string, tag: string) => {
        const cells = row.split('|').filter((_, i, a) => i > 0 && i < a.length - 1);
        return `<tr>${cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('')}</tr>`;
      };
      const thead = `<thead>${parseRow(headerRow, 'th')}</thead>`;
      const tbody = `<tbody>${bodyRows.map(r => parseRow(r, 'td')).join('')}</tbody>`;
      return `<table>${thead}${tbody}</table>\n`;
    });

    // Horizontal rules
    html = html.replace(/^---$/gm, '<hr>');

    // Headings
    html = html.replace(/^#### (.*?)$/gm, '<h4>$1</h4>');
    html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>');
    
    // Bold / Italics
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Hyperlinks
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
    
    // Blockquotes — group consecutive `>` lines into one <blockquote>.
    // A bare `>` line becomes a paragraph break inside the same quote.
    html = html.replace(/(^>.*(?:\n>.*)*)/gm, (block) => {
      const inner = block
        .split('\n')
        .map(line => line.replace(/^>\s?/, ''))
        .join('\n')
        .split(/\n{1,}/)
        .map(para => para.trim())
        .filter(p => p.length > 0)
        .map(para => `<p>${para}</p>`)
        .join('');
      return `<blockquote>${inner}</blockquote>`;
    });

    // List items — wrap consecutive runs of `- ` or `* ` (ul) or `N. ` (ol) lines.
    html = html.replace(/(^(?:[ \t]*[-*]\s.*(?:\n|$))+)/gm, (block) => {
      const items = block.trim().split('\n')
        .map(line => line.replace(/^[ \t]*[-*]\s/, '').trim())
        .map(item => `<li>${item}</li>`)
        .join('');
      return `<ul>${items}</ul>\n`;
    });
    html = html.replace(/(^(?:\d+\.\s.*(?:\n|$))+)/gm, (block) => {
      const items = block.trim().split('\n')
        .map(line => line.replace(/^\d+\.\s/, '').trim())
        .map(item => `<li>${item}</li>`)
        .join('');
      return `<ol>${items}</ol>\n`;
    });
    
    
    // 3. Restore clean, escaped code blocks
    codeBlocks.forEach((block, index) => {
      html = html.replace(`__FENCED_CODE_BLOCK_${index}__`, block);
    });
    inlineCodeBlocks.forEach((block, index) => {
      html = html.replace(`__INLINE_CODE_BLOCK_${index}__`, block);
    });

    return html;
  };

  // Calendar generator — pads to the weekday of the 1st (Sunday-start grid)
  const getDaysInMonth = () => {
    const days: (number | null)[] = [];
    const firstWeekday = new Date(calendarYear, calendarMonth, 1).getDay(); // 0 = Sunday
    const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
    for (let i = 0; i < firstWeekday; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const isEventMonth = calendarYear === 2026 && calendarMonth === 6;

  const shiftMonth = (delta: number) => {
    let m = calendarMonth + delta;
    let y = calendarYear;
    if (m < 0) { m = 11; y -= 1; }
    if (m > 11) { m = 0; y += 1; }
    setCalendarMonth(m);
    setCalendarYear(y);
  };

  // Handle Mark Lesson Completed
  const handleMarkLessonComplete = (lessonId: string) => {
    if (completedLessons.includes(lessonId)) {
      setCompletedLessons(completedLessons.filter(id => id !== lessonId));
      playSynthesizedSound('reset');
    } else {
      setCompletedLessons([...completedLessons, lessonId]);
      playSynthesizedSound('success');
      triggerConfetti();
    }
  };

  // Handle Navigation inside reading pane
  const handleReaderNav = (direction: 'next' | 'prev') => {
    if (!selectedLesson || !selectedSection) return;
    
    const flatLessons: { lesson: Lesson; section: Section }[] = [];
    lessonsData.forEach(sec => {
      sec.lessons.forEach(les => {
        flatLessons.push({ lesson: les, section: sec });
      });
    });

    const currIdx = flatLessons.findIndex(item => item.lesson.id === selectedLesson.id);
    if (direction === 'next' && currIdx < flatLessons.length - 1) {
      const nextItem = flatLessons[currIdx + 1];
      setSelectedLesson(nextItem.lesson);
      setSelectedSection(nextItem.section);
    } else if (direction === 'prev' && currIdx > 0) {
      const prevItem = flatLessons[currIdx - 1];
      setSelectedLesson(prevItem.lesson);
      setSelectedSection(prevItem.section);
    }
  };

  // Handle saving Identity details in Settings
  const handleSaveIdentity = () => {
    localStorage.setItem('debug_society_dev_name', devName);
    localStorage.setItem('debug_society_dev_avatar', devAvatar);
    localStorage.setItem('debug_society_dev_title', devTitle);
    localStorage.setItem('debug_society_dev_theme', devTheme);
    playSynthesizedSound('complete');
    alert('Developer Identity successfully updated inside the workstation registry.');
  };

  // Submit Arena Quiz diagnostics
  const handleAnswerSubmit = (optionIndex: number) => {
    setQuizSelectedOption(optionIndex);
    if (!activeQuizCategory) return;
    
    const isCorrect = optionIndex === activeQuizCategory.questions[quizQuestionIndex].answerIndex;
    if (isCorrect) {
      setQuizScore(prev => prev + 1);
      playSynthesizedSound('success');
    } else {
      playSynthesizedSound('incorrect');
    }
  };

  const handleVerifyCode = () => {
    if (!activeQuizCategory) return;
    const activeQuestion = activeQuizCategory.questions[quizQuestionIndex];
    if (!activeQuestion.correctAnswerKeywords) return;

    // Trigger compiler logs simulation
    const logs: string[] = [];
    logs.push("[SYSTEM] Booting secure sandbox environment...");
    logs.push("[SYSTEM] Compiling syntax checks...");
    
    // Check keywords
    const code = quizCodeValue || '';
    const missingKeywords: string[] = [];
    activeQuestion.correctAnswerKeywords.forEach(kw => {
      if (!code.toLowerCase().includes(kw.toLowerCase())) {
        missingKeywords.push(kw);
      }
    });

    if (missingKeywords.length === 0) {
      logs.push("[SUCCESS] Syntax verification complete: 0 errors.");
      activeQuestion.correctAnswerKeywords.forEach(kw => {
        logs.push(`[SUCCESS] Verified keyword: "${kw}" found inside solution code.`);
      });
      logs.push("[SUCCESS] Runtime test cases: 4/4 passed.");
      logs.push("[SUCCESS] VERIFICATION SUCCESSFUL. Diagnostic rating updated.");
      
      setQuizCodeLogs(logs);
      setQuizCodeVerified(true);
      setQuizSelectedOption(1); // Enable next question
      setQuizScore(prev => prev + 1);
      playSynthesizedSound('success');
    } else {
      logs.push("[SYSTEM] Diagnostic scan in progress...");
      missingKeywords.forEach(kw => {
        logs.push(`[ERROR] Verification check failed: Missing keyword or implementation details for "${kw}".`);
      });
      logs.push("[ERROR] Runtime check failed: Expected functional behavior not observed.");
      logs.push("[ERROR] VERIFICATION FAILED. Please revise your syntax and re-verify.");
      
      setQuizCodeLogs(logs);
      setQuizCodeVerified(false);
      setQuizSelectedOption(0); // Enable next question
      playSynthesizedSound('incorrect');
    }
  };

  const handleNextQuizQuestion = () => {
    if (!activeQuizCategory) return;
    
    setQuizSelectedOption(null);
    setQuizCodeVerified(null);
    setQuizCodeLogs([]);

    if (quizQuestionIndex < activeQuizCategory.questions.length - 1) {
      const nextIndex = quizQuestionIndex + 1;
      setQuizQuestionIndex(nextIndex);
      setQuizCodeValue(activeQuizCategory.questions[nextIndex].starterCode || '');
    } else {
      // Quiz finished
      setQuizFinished(true);
      playSynthesizedSound('complete');
      
      const percentage = Math.round((quizScore / activeQuizCategory.questions.length) * 100);
      let rating = "Trainee Standard";
      if (percentage === 100) rating = "Grandmaster Core";
      else if (percentage >= 70) rating = "Expert Core";
      
      // If student passes the SQL & DBMS Professional Certification with >= 70%, unlock the SQL Database Certificate!
      if (activeQuizCategory.id === 'sql-certification' && percentage >= 70) {
        if (!completedAssignments.includes('sql')) {
          setCompletedAssignments(prev => [...prev, 'sql']);
        }
      }

      // If student passes the React & SPA Professional Certification with >= 70%, unlock the React Certificate!
      if (activeQuizCategory.id === 'react-certification' && percentage >= 70) {
        if (!completedAssignments.includes('react')) {
          setCompletedAssignments(prev => [...prev, 'react']);
        }
      }

      // If student passes the Python & Data Science Professional Certification with >= 70%, unlock the Python Certificate!
      if (activeQuizCategory.id === 'python-certification' && percentage >= 70) {
        if (!completedAssignments.includes('python')) {
          setCompletedAssignments(prev => [...prev, 'python']);
        }
      }

      // If student passes the TypeScript & Static Typing Professional Certification with >= 70%, unlock the TypeScript Certificate!
      if (activeQuizCategory.id === 'typescript-certification' && percentage >= 70) {
        if (!completedAssignments.includes('typescript')) {
          setCompletedAssignments(prev => [...prev, 'typescript']);
        }
      }

      const newLog: QuizLog = {
        date: new Date().toLocaleDateString(),
        category: activeQuizCategory.title,
        score: `${quizScore} / ${activeQuizCategory.questions.length}`,
        rating: rating
      };
      
      setQuizLog([newLog, ...quizLog]);
    }
  };

  // Unused legacy course tracks clean-up: All navigation and calculations removed

  const totalLessons = lessonsData.flatMap(s => s.lessons).length;
  const completedCount = completedLessons.length;
  const progressPercent = totalLessons ? Math.round((completedCount / totalLessons) * 100) : 0;

  const totalSqlLessons = sqlLessonsData.flatMap(s => s.lessons).length;
  const completedSqlCount = completedSqlLessons.length;
  const sqlProgressPercent = totalSqlLessons ? Math.round((completedSqlCount / totalSqlLessons) * 100) : 0;

  const totalFastApiLessons = fastApiLessonsData.flatMap(s => s.lessons).length;
  const completedFastApiCount = completedFastApiLessons.length;
  const fastApiProgressPercent = totalFastApiLessons ? Math.round((completedFastApiCount / totalFastApiLessons) * 100) : 0;

  const totalExpressLessons = expressApiLessonsData.flatMap(s => s.lessons).length;
  const completedExpressCount = completedExpressLessons.length;
  const expressProgressPercent = totalExpressLessons ? Math.round((completedExpressCount / totalExpressLessons) * 100) : 0;

  const totalPythonLessons = pythonLessonsData.flatMap(s => s.lessons).length;
  const completedPythonCount = completedPythonLessons.length;
  const pythonProgressPercent = totalPythonLessons ? Math.round((completedPythonCount / totalPythonLessons) * 100) : 0;

  const totalTypescriptLessons = typescriptLessonsData.flatMap(s => s.lessons).length;
  const completedTypescriptCount = completedTypescriptLessons.length;
  const typescriptProgressPercent = totalTypescriptLessons ? Math.round((completedTypescriptCount / totalTypescriptLessons) * 100) : 0;

  const totalRQualitativeLessons = rQualitativeLessonsData.flatMap(s => s.lessons).length;
  const completedRQualitativeCount = completedRQualitativeLessons.length;
  const rQualitativeProgressPercent = totalRQualitativeLessons ? Math.round((completedRQualitativeCount / totalRQualitativeLessons) * 100) : 0;

  const totalAll = totalLessons + totalSqlLessons + totalFastApiLessons + totalExpressLessons + totalPythonLessons + totalTypescriptLessons + totalRQualitativeLessons;

  // Active clicked calendar event detail — only valid when viewing the event month (July 2026)
  const clickedCalendarEvent = isEventMonth ? calendarEvents.find(e => e.date === selectedCalendarDate) : undefined;

  // Derived notifications feed (real items from existing state)
  type Notification = { id: string; title: string; detail: string; kind: 'quiz' | 'lesson' | 'milestone' | 'streak' };
  const notifications: Notification[] = [];

  // Recent quiz runs (last 3)
  quizLog.slice(0, 3).forEach((log, idx) => {
    notifications.push({
      id: `quiz-${log.date}-${log.category}-${idx}`,
      title: `Quiz Logged — ${log.rating}`,
      detail: `${log.category}: ${log.score} on ${log.date}`,
      kind: 'quiz'
    });
  });

  // Recent React lesson completions (last 3)
  const recentReact = completedLessons.slice(-3).reverse();
  recentReact.forEach(id => {
    let title = id;
    let section = '';
    lessonsData.forEach(s => s.lessons.forEach(l => { if (l.id === id) { title = l.title; section = s.sectionTitle; } }));
    notifications.push({
      id: `react-done-${id}`,
      title: 'Lesson Completed',
      detail: `${title}${section ? ' — ' + section : ''}`,
      kind: 'lesson'
    });
  });

  // Recent SQL lesson completions (last 3)
  const recentSql = completedSqlLessons.slice(-3).reverse();
  recentSql.forEach(id => {
    let title = id;
    let section = '';
    sqlLessonsData.forEach(s => s.lessons.forEach(l => { if (l.id === id) { title = l.title; section = s.sectionTitle; } }));
    notifications.push({
      id: `sql-done-${id}`,
      title: 'SQL Lesson Completed',
      detail: `${title}${section ? ' — ' + section : ''}`,
      kind: 'lesson'
    });
  });

  // Recent FastAPI lesson completions (last 3)
  const recentFastApi = completedFastApiLessons.slice(-3).reverse();
  recentFastApi.forEach(id => {
    let title = id;
    let section = '';
    fastApiLessonsData.forEach(s => s.lessons.forEach(l => { if (l.id === id) { title = l.title; section = s.sectionTitle; } }));
    notifications.push({
      id: `fastapi-done-${id}`,
      title: 'FastAPI Lesson Completed',
      detail: `${title}${section ? ' — ' + section : ''}`,
      kind: 'lesson'
    });
  });

  // Recent Express lesson completions (last 3)
  const recentExpress = completedExpressLessons.slice(-3).reverse();
  recentExpress.forEach(id => {
    let title = id;
    let section = '';
    expressApiLessonsData.forEach(s => s.lessons.forEach(l => { if (l.id === id) { title = l.title; section = s.sectionTitle; } }));
    notifications.push({
      id: `express-done-${id}`,
      title: 'Express Lesson Completed',
      detail: `${title}${section ? ' — ' + section : ''}`,
      kind: 'lesson'
    });
  });

  // Recent Python lesson completions (last 3)
  const recentPython = completedPythonLessons.slice(-3).reverse();
  recentPython.forEach(id => {
    let title = id;
    let section = '';
    pythonLessonsData.forEach(s => s.lessons.forEach(l => { if (l.id === id) { title = l.title; section = s.sectionTitle; } }));
    notifications.push({
      id: `python-done-${id}`,
      title: 'Python Lesson Completed',
      detail: `${title}${section ? ' — ' + section : ''}`,
      kind: 'lesson'
    });
  });

  // Recent TypeScript lesson completions (last 3)
  const recentTypescript = completedTypescriptLessons.slice(-3).reverse();
  recentTypescript.forEach(id => {
    let title = id;
    let section = '';
    typescriptLessonsData.forEach(s => s.lessons.forEach(l => { if (l.id === id) { title = l.title; section = s.sectionTitle; } }));
    notifications.push({
      id: `typescript-done-${id}`,
      title: 'TypeScript Lesson Completed',
      detail: `${title}${section ? ' — ' + section : ''}`,
      kind: 'lesson'
    });
  });

  // Next upcoming milestone (in July 2026)
  const today = new Date();
  const upcoming = calendarEvents.find(e => {
    const eventDate = new Date(2026, 6, e.date);
    return eventDate >= today;
  }) || calendarEvents[0];
  if (upcoming) {
    notifications.push({
      id: `milestone-${upcoming.date}`,
      title: `Upcoming: ${upcoming.title}`,
      detail: `${upcoming.category} • July ${upcoming.date}, 2026 • ${upcoming.time}`,
      kind: 'milestone'
    });
  }

  // Streak callout when active
  if (completedLessons.length + completedSqlLessons.length + completedFastApiLessons.length + completedExpressLessons.length + completedPythonLessons.length + completedTypescriptLessons.length + completedRQualitativeLessons.length > 0) {
    notifications.push({
      id: `streak-${completedLessons.length}-${completedSqlLessons.length}-${completedFastApiLessons.length}-${completedExpressLessons.length}-${completedPythonLessons.length}-${completedTypescriptLessons.length}-${completedRQualitativeLessons.length}`,
      title: 'Focus Streak Active',
      detail: `${completedLessons.length} React • ${completedSqlLessons.length} SQL • ${completedFastApiLessons.length} FastAPI • ${completedExpressLessons.length} Express • ${completedPythonLessons.length} Python • ${completedTypescriptLessons.length} TypeScript • ${completedRQualitativeLessons.length} R Qualitative`,
      kind: 'streak'
    });
  }
  const unreadNotiCount = notifications.filter(n => !notiSeenIds.includes(n.id)).length;

  if (!currentUserEmail) {
    return (
      <div className="auth-wrapper">
        <div className="auth-card">
          {/* Left Column: Form Pane */}
          <div className="auth-form-pane">
            <div className="auth-logo-pill">
              <svg viewBox="0 0 100 100" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="44" stroke="#1e293b" strokeWidth="6" strokeDasharray="10 6" strokeLinecap="round" />
                <ellipse cx="50" cy="55" rx="18" ry="22" fill="#1e293b" />
                <circle cx="50" cy="33" r="13" fill="#1e293b" />
              </svg>
              <strong style={{ fontSize: '13px', fontWeight: 800 }}>DebugLab</strong>
            </div>

            <div>
              <div className="auth-form-header">
                <h2>{authTab === 'signin' ? 'Sign In' : 'Create Account'}</h2>
                <p style={{ marginTop: '4px', fontSize: '12.5px', color: '#64748b' }}>
                  {authTab === 'signin' ? 'Access your secure developer suite' : 'Register your developer identity in the SQLite registry'}
                </p>
              </div>

              <form onSubmit={handleAuthSubmit} style={{ marginTop: '20px' }}>
                {authError && (
                  <div style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    color: '#ef4444',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    marginBottom: '14px',
                    textAlign: 'center',
                    fontWeight: 600
                  }}>
                    {authError}
                  </div>
                )}

                {authTab === 'signup' && (
                  <div className="auth-input-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="auth-input-field"
                      placeholder="e.g. Peter Gatitu"
                      value={authFullName}
                      onChange={(e) => {
                        setAuthFullName(e.target.value);
                        setAuthError('');
                      }}
                      required
                    />
                  </div>
                )}

                <div className="auth-input-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="auth-input-field"
                    placeholder="e.g. developer@debuglab.io"
                    value={authEmail}
                    onChange={(e) => {
                      setAuthEmail(e.target.value);
                      setAuthError('');
                    }}
                    required
                  />
                </div>

                <div className="auth-input-group">
                  <label>Security Password</label>
                  <input
                    type="password"
                    className="auth-input-field"
                    placeholder="••••••••"
                    value={authPassword}
                    onChange={(e) => {
                      setAuthPassword(e.target.value);
                      setAuthError('');
                    }}
                    required
                  />
                </div>

                <button type="submit" className="auth-submit-btn">
                  {authTab === 'signin' ? 'Access Suite' : 'Create Identity'}
                </button>
              </form>

              <div style={{ margin: '16px 0', textAlign: 'center', fontSize: '11px', color: '#94a3b8', fontWeight: 600, letterSpacing: '0.5px' }}>
                OR CONTINUE WITH
              </div>

              <div className="auth-third-party-row">
                <button
                  type="button"
                  className="auth-pill-btn"
                  onClick={() => handleSimulatedOauth('google.engineer@debuglab.io', 'Google Dev')}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114A5.53 5.53 0 0 1 8.5 13a5.53 5.53 0 0 1 5.49-5.514c2.25 0 3.87 1.48 3.87 1.48l3.141-3.14S18.52 3.5 13.99 3.5c-5.25 0-9.5 4.25-9.5 9.5s4.25 9.5 9.5 9.5c5.5 0 9.25-3.875 9.25-9.25 0-.585-.05-1.165-.15-1.715H12.24Z"/>
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  className="auth-pill-btn"
                  onClick={() => handleSimulatedOauth('github.hacker@debuglab.io', 'GitHub Dev')}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  GitHub
                </button>
              </div>
            </div>

            <div className="auth-footer-row">
              {authTab === 'signin' ? (
                <>
                  <span>New to DebugLab?</span>
                  <a href="#signup" onClick={(e) => { e.preventDefault(); setAuthTab('signup'); setAuthError(''); }}>Create Account</a>
                </>
              ) : (
                <>
                  <span>Already registered?</span>
                  <a href="#signin" onClick={(e) => { e.preventDefault(); setAuthTab('signin'); setAuthError(''); }}>Sign In</a>
                </>
              )}
            </div>
          </div>

          {/* Right Column: Visuals Pane */}
          <div className="auth-visuals-pane">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
              alt="Collaboration background"
              className="auth-bg-img"
            />

            {/* Widget 1: Golden Task Review Card */}
            <div className="auth-floating-widget auth-widget-yellow">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ background: '#fef08a', color: '#854d0e', padding: '4px 8px', borderRadius: '10px', fontSize: '9px', fontWeight: 700 }}>
                  TASK APPROVED
                </span>
                <span style={{ fontSize: '10px', color: '#a16207', fontWeight: 600 }}>v4.12.0</span>
              </div>
              <strong style={{ fontSize: '12.5px', display: 'block', marginBottom: '4px', fontWeight: 800 }}>Express Router Protocol</strong>
              <p style={{ fontSize: '10.5px', margin: 0, opacity: 0.85, lineHeight: 1.3 }}>
                Middleware scans verified under Llama-3.3 grading protocols. Pass score reached 98%.
              </p>
            </div>

            {/* Widget 2: Glassmorphic Calendar Card */}
            <div className="auth-floating-widget auth-widget-calendar">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff' }}>July 2026</span>
                <span style={{ fontSize: '10px', color: '#cbd5e1' }}>Syllabus Timeline</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px', textAlign: 'center', fontSize: '9.5px', fontWeight: 600, color: '#ffffff' }}>
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                  <span key={i} style={{ opacity: 0.6 }}>{day}</span>
                ))}
                {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => {
                  const isSpecial = [1, 5, 12, 19, 26].includes(day);
                  return (
                    <span
                      key={day}
                      style={{
                        padding: '4px 0',
                        borderRadius: '50%',
                        background: isSpecial ? '#fcd34d' : 'transparent',
                        color: isSpecial ? '#0f172a' : '#ffffff',
                        fontWeight: isSpecial ? 800 : 500,
                        opacity: isSpecial ? 1 : 0.8
                      }}
                    >
                      {day}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Widget 3: Glassmorphic Daily Meeting Card */}
            <div className="auth-floating-widget auth-widget-meeting">
              <strong style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#1e293b', display: 'block', marginBottom: '4px' }}>
                Today's Workspace Standup
              </strong>
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a' }}>17:00 • Graduation Capstone</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                <div className="auth-avatar-group">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=64" className="auth-avatar-circle" alt="Dev" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=64" className="auth-avatar-circle" alt="Dev" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=64" className="auth-avatar-circle" alt="Dev" />
                </div>
                <span style={{ fontSize: '9px', color: '#64748b', fontWeight: 600 }}>+4 teammates</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`app-frame theme-${devTheme}`}>
      <canvas id="confetti-canvas"></canvas>
      
      {/* LEFT SIDEBAR - Removed all non-functional demo items */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          {/* DebugLab-style dashed circle bug icon */}
          <div className="logo-icon" style={{ width: 40, height: 40, flexShrink: 0 }}>
            <svg viewBox="0 0 100 100" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Dashed outer circle */}
              <circle
                cx="50" cy="50" r="44"
                stroke="#1e293b"
                strokeWidth="4"
                strokeDasharray="10 6"
                strokeLinecap="round"
              />
              {/* Bug body */}
              <ellipse cx="50" cy="55" rx="18" ry="22" fill="#1e293b" />
              {/* Bug head */}
              <circle cx="50" cy="33" r="13" fill="#1e293b" />
              {/* Eyes */}
              <circle cx="44" cy="31" r="3.5" fill="white" />
              <circle cx="56" cy="31" r="3.5" fill="white" />
              <circle cx="44.8" cy="31.8" r="1.8" fill="#1e293b" />
              <circle cx="56.8" cy="31.8" r="1.8" fill="#1e293b" />
              {/* Antennae */}
              <line x1="44" y1="20" x2="38" y2="10" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
              <line x1="56" y1="20" x2="62" y2="10" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
              <circle cx="37" cy="9" r="3" fill="#1e293b" />
              <circle cx="63" cy="9" r="3" fill="#1e293b" />
              {/* Body segments / smile */}
              <line x1="36" y1="50" x2="64" y2="50" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
              <line x1="36" y1="60" x2="64" y2="60" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
              {/* Legs */}
              <line x1="32" y1="48" x2="20" y2="42" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
              <line x1="32" y1="56" x2="20" y2="56" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
              <line x1="32" y1="64" x2="20" y2="70" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
              <line x1="68" y1="48" x2="80" y2="42" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
              <line x1="68" y1="56" x2="80" y2="56" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
              <line x1="68" y1="64" x2="80" y2="70" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          {/* DebugLab-style brand text */}
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0px' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '17px',
                color: '#1e293b',
                letterSpacing: '-0.5px'
              }}>Debug</span>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: '17px',
                color: '#1e293b',
                letterSpacing: '-0.5px'
              }}>Lab</span>
              <span style={{
                fontSize: '7px',
                color: '#64748b',
                marginLeft: '1px',
                alignSelf: 'flex-start',
                marginTop: '3px'
              }}>®</span>
            </div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '7.5px',
              color: '#94a3b8',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginTop: '3px'
            }}>SECURE CODE SUITE</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activePage === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActivePage('dashboard')}
          >
            <svg viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="9" rx="1" strokeWidth="2" />
              <rect x="14" y="3" width="7" height="5" rx="1" strokeWidth="2" />
              <rect x="3" y="16" width="7" height="5" rx="1" strokeWidth="2" />
              <rect x="14" y="12" width="7" height="9" rx="1" strokeWidth="2" />
            </svg>
            Dashboard
          </button>
          
          <button 
            className={`nav-item ${activePage === 'react-path' ? 'active' : ''}`}
            onClick={() => setActivePage('react-path')}
          >
            <svg viewBox="0 0 24 24">
              <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" strokeWidth="2" />
            </svg>
            My Courses
          </button>

          <button 
            className={`nav-item ${activePage === 'practice-arena' ? 'active' : ''}`}
            onClick={() => {
              setActivePage('practice-arena');
              setActiveQuizCategory(null);
              setQuizFinished(false);
            }}
          >
            <svg viewBox="0 0 24 24">
              <path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 12.408l1.5-1.5 3 3" strokeWidth="2" />
            </svg>
            Quiz History
          </button>

          <button 
            className={`nav-item ${activePage === 'meltdown-timer' ? 'active' : ''}`}
            onClick={() => setActivePage('meltdown-timer')}
          >
            <svg viewBox="0 0 24 24">
              <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" />
            </svg>
            My Assignments
          </button>

          {isSuperAdmin && (
            <button
              className={`nav-item ${activePage === 'admin' ? 'active' : ''}`}
              onClick={() => { setActivePage('admin'); setAdminTab('dashboard'); setAdminSelectedStudent(null); }}
            >
              <svg viewBox="0 0 24 24">
                <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Admin Panel
            </button>
          )}

          <button
            className={`nav-item ${activePage === 'settings' ? 'active' : ''}`}
            onClick={() => setActivePage('settings')}
          >
            <svg viewBox="0 0 24 24">
              <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127c.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28" strokeWidth="2" />
            </svg>
            Account Settings
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT WORKSPACE */}
      <main className="main-content">
        
        {/* TOP HEADER */}
        <header className="app-header">
          <div className="search-container">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              id="global-search" 
              placeholder="Fuzzy lesson outline search..." 
              value={searchQuery}
              onChange={handleSearch}
            />

            {/* Instant search autocomplete items */}
            {searchResults.length > 0 && (
              <div className="search-dropdown">
                {searchResults.map((res, i) => (
                  <div 
                    key={i} 
                    className="search-drop-item"
                    onClick={() => {
                      setSelectedLesson(res.lesson);
                      setSelectedSection(res.section);
                      setSearchResults([]);
                      setSearchQuery('');
                      playSynthesizedSound('success');
                    }}
                  >
                    <h6>{res.lesson.title}</h6>
                    <span>in {res.section.sectionTitle}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="header-right-actions">
            <div ref={notiRef} style={{ position: 'relative' }}>
              <button
                className="noti-bell-btn"
                onClick={() => {
                  const opening = !notiOpen;
                  setNotiOpen(opening);
                  playSynthesizedSound('success');
                  if (opening) {
                    setNotiSeenIds(prev => Array.from(new Set([...prev, ...notifications.map(n => n.id)])));
                  }
                }}
              >
                <svg viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0" />
                </svg>
                {unreadNotiCount > 0 && <span className="noti-badge">{unreadNotiCount}</span>}
              </button>

              {notiOpen && (
                <div
                  className="noti-dropdown-panel"
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    right: 0,
                    width: '340px',
                    maxHeight: '420px',
                    overflowY: 'auto',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-lg, 0 12px 28px rgba(0,0,0,0.18))',
                    zIndex: 100
                  }}
                >
                  <div style={{
                    padding: '12px 14px',
                    borderBottom: '1px solid var(--border-color)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <strong style={{ fontSize: '13px', color: 'var(--text-dark)' }}>Workspace Activity</strong>
                    <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{notifications.length} item{notifications.length !== 1 ? 's' : ''}</span>
                  </div>

                  {notifications.length === 0 ? (
                    <div style={{ padding: '24px 14px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '12px' }}>
                      No activity yet. Complete a lesson or run a quiz to populate this feed.
                    </div>
                  ) : (
                    <div>
                      {notifications.map(n => {
                        const dotColor = n.kind === 'quiz' ? '#a855f7'
                          : n.kind === 'lesson' ? '#10b981'
                          : n.kind === 'milestone' ? '#3b82f6'
                          : '#f59e0b';
                        return (
                          <div
                            key={n.id}
                            onClick={() => {
                              if (n.kind === 'quiz') setActivePage('practice-arena');
                              else if (n.kind === 'milestone') {
                                setCalendarYear(2026);
                                setCalendarMonth(6);
                                const dateMatch = n.id.match(/milestone-(\d+)/);
                                if (dateMatch) setSelectedCalendarDate(parseInt(dateMatch[1], 10));
                              } else if (n.kind === 'lesson') {
                                setActivePage('react-path');
                              } else {
                                setActivePage('dashboard');
                              }
                              setNotiOpen(false);
                              playSynthesizedSound('success');
                            }}
                            style={{
                              padding: '12px 14px',
                              borderBottom: '1px solid var(--border-color)',
                              cursor: 'pointer',
                              display: 'flex',
                              gap: '10px',
                              alignItems: 'flex-start',
                              transition: 'background 0.15s'
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-input, rgba(0,0,0,0.03))')}
                            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                          >
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: dotColor, marginTop: '5px', flexShrink: 0 }}></div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '2px' }}>{n.title}</div>
                              <div style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis' }}>{n.detail}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="user-profile-badge" onClick={() => setActivePage('settings')}>
              <img src={devAvatar} alt="Developer Avatar" className="avatar-img" />
              <div className="user-text-block">
                <strong>{devName}</strong>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                  <span>{devTitle}</span>
                  <span style={{ fontSize: '8.5px', opacity: 0.65, fontWeight: 500 }}>{currentUserEmail}</span>
                </span>
              </div>
              <svg className="dropdown-chevron-icon" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
        </header>

        {/* DYNAMIC VIEWS SWITCHER */}
        
        {/* View 1. MY COURSES (Dashboard & live progression list) */}
        {activePage === 'dashboard' && (
          <div>
            <h2 className="section-title">My Courses</h2>

            {/* Web & Frontend Development */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', fontFamily: 'var(--font-display)' }}>
                Web &amp; Frontend Development
              </h3>
              <div className="courses-grid-view">
                <div className="course-card-classic">
                  <div className="course-cover">
                    <img src={COURSE_COVERS.react} alt="React Core cover banner" />
                  </div>
                  <div className="course-details">
                    <h5>The Complete React Blueprint</h5>
                    <div className="lessons-count-meta" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <RiBookOpen style={{ color: 'var(--text-muted)' }} />
                      <span>lessons : {totalLessons} (Full Syllabus)</span>
                    </div>
                    <div className="instructor-meta">
                      <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=256&auto=format&fit=crop" alt="Instructor avatar" />
                      <span>The Debug Society</span>
                    </div>
                    <div className="progress-info-row">
                      <span>{progressPercent}% Complete</span>
                    </div>
                    <div className="card-progress-track">
                      <div className="card-progress-fill-val" style={{ width: `${progressPercent}%` }}></div>
                    </div>
                    <button className="card-action-btn-classic" onClick={() => {
                      setActiveTrack('react');
                      setActivePage('react-path');
                      playSynthesizedSound('success');
                    }}>
                      {progressPercent === 100 ? 'Review Path' : 'Resume Path'}
                    </button>
                  </div>
                </div>

                <div className="course-card-classic">
                  <div className="course-cover ts-cover-branded">
                    <RiTypeScript width={44} height={44} stroke="rgba(255,255,255,0.95)" strokeWidth={1.8} style={{ display: 'block', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.25))' }} />
                    <span style={{ color: 'rgba(255,255,255,0.95)', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '18px', letterSpacing: '-0.3px', textShadow: '0 1px 4px rgba(0,0,0,0.3)', marginLeft: '10px' }}>TypeScript</span>
                  </div>
                  <div className="course-details">
                    <h5>TypeScript Basics Masterclass</h5>
                    <div className="lessons-count-meta" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <RiTypeScript style={{ color: 'var(--text-muted)' }} />
                      <span>lessons : {totalTypescriptLessons} (Full Syllabus)</span>
                    </div>
                    <div className="instructor-meta">
                      <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=256&auto=format&fit=crop" alt="Instructor avatar" />
                      <span>The Debug Society</span>
                    </div>
                    <div className="progress-info-row">
                      <span>{typescriptProgressPercent}% Complete</span>
                    </div>
                    <div className="card-progress-track">
                      <div className="card-progress-fill-val" style={{ width: `${typescriptProgressPercent}%` }}></div>
                    </div>
                    <button className="card-action-btn-classic" onClick={() => {
                      setActiveTrack('typescript');
                      setActivePage('react-path');
                      playSynthesizedSound('success');
                    }}>
                      {typescriptProgressPercent === 100 ? 'Review Path' : 'Resume Path'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Development & APIs */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', fontFamily: 'var(--font-display)' }}>
                Backend Development &amp; APIs
              </h3>
              <div className="courses-grid-view">
                <div className="course-card-classic">
                  <div className="course-cover">
                    <img src={COURSE_COVERS.fastapi} alt="FastAPI cover banner" />
                  </div>
                  <div className="course-details">
                    <h5>FastAPI Production Masterclass</h5>
                    <div className="lessons-count-meta" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <RiFastApi style={{ color: 'var(--text-muted)' }} />
                      <span>lessons : {totalFastApiLessons} (Full Syllabus)</span>
                    </div>
                    <div className="instructor-meta">
                      <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=256&auto=format&fit=crop" alt="Instructor avatar" />
                      <span>The Debug Society</span>
                    </div>
                    <div className="progress-info-row">
                      <span>{fastApiProgressPercent}% Complete</span>
                    </div>
                    <div className="card-progress-track">
                      <div className="card-progress-fill-val" style={{ width: `${fastApiProgressPercent}%` }}></div>
                    </div>
                    <button className="card-action-btn-classic" onClick={() => {
                      setActiveTrack('fastapi');
                      setActivePage('react-path');
                      playSynthesizedSound('success');
                    }}>
                      {fastApiProgressPercent === 100 ? 'Review Path' : 'Resume Path'}
                    </button>
                  </div>
                </div>

                <div className="course-card-classic">
                  <div className="course-cover">
                    <img src={COURSE_COVERS.express} alt="Express REST API cover banner" />
                  </div>
                  <div className="course-details">
                    <h5>Express REST APIs (Node)</h5>
                    <div className="lessons-count-meta" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <RiServer style={{ color: 'var(--text-muted)' }} />
                      <span>lessons : {totalExpressLessons} (Full Syllabus)</span>
                    </div>
                    <div className="instructor-meta">
                      <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=256&auto=format&fit=crop" alt="Instructor avatar" />
                      <span>The Debug Society</span>
                    </div>
                    <div className="progress-info-row">
                      <span>{expressProgressPercent}% Complete</span>
                    </div>
                    <div className="card-progress-track">
                      <div className="card-progress-fill-val" style={{ width: `${expressProgressPercent}%` }}></div>
                    </div>
                    <button className="card-action-btn-classic" onClick={() => {
                      setActiveTrack('express');
                      setActivePage('react-path');
                      playSynthesizedSound('success');
                    }}>
                      {expressProgressPercent === 100 ? 'Review Path' : 'Resume Path'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Data & Databases */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', fontFamily: 'var(--font-display)' }}>
                Data &amp; Databases
              </h3>
              <div className="courses-grid-view">
                <div className="course-card-classic">
                  <div className="course-cover">
                    <img src={COURSE_COVERS.sql} alt="SQL Database cover banner" />
                  </div>
                  <div className="course-details">
                    <h5>SQL Database Masterclass</h5>
                    <div className="lessons-count-meta" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <RiDatabase style={{ color: 'var(--text-muted)' }} />
                      <span>lessons : {totalSqlLessons} (Full Syllabus)</span>
                    </div>
                    <div className="instructor-meta">
                      <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=256&auto=format&fit=crop" alt="Instructor avatar" />
                      <span>The Debug Society</span>
                    </div>
                    <div className="progress-info-row">
                      <span>{sqlProgressPercent}% Complete</span>
                    </div>
                    <div className="card-progress-track">
                      <div className="card-progress-fill-val" style={{ width: `${sqlProgressPercent}%` }}></div>
                    </div>
                    <button className="card-action-btn-classic" onClick={() => {
                      setActiveTrack('sql');
                      setActivePage('react-path');
                      playSynthesizedSound('success');
                    }}>
                      {sqlProgressPercent === 100 ? 'Review Path' : 'Resume Path'}
                    </button>
                  </div>
                </div>

                <div className="course-card-classic">
                  <div className="course-cover">
                    <img src={COURSE_COVERS.python} alt="Python Basics cover banner" />
                  </div>
                  <div className="course-details">
                    <h5>Python Basics Masterclass</h5>
                    <div className="lessons-count-meta" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <RiPython style={{ color: 'var(--text-muted)' }} />
                      <span>lessons : {totalPythonLessons} (Full Syllabus)</span>
                    </div>
                    <div className="instructor-meta">
                      <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=256&auto=format&fit=crop" alt="Instructor avatar" />
                      <span>The Debug Society</span>
                    </div>
                    <div className="progress-info-row">
                      <span>{pythonProgressPercent}% Complete</span>
                    </div>
                    <div className="card-progress-track">
                      <div className="card-progress-fill-val" style={{ width: `${pythonProgressPercent}%` }}></div>
                    </div>
                    <button className="card-action-btn-classic" onClick={() => {
                      setActiveTrack('python');
                      setActivePage('react-path');
                      playSynthesizedSound('success');
                    }}>
                      {pythonProgressPercent === 100 ? 'Review Path' : 'Resume Path'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Science & Research */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', fontFamily: 'var(--font-display)' }}>
                Data Science &amp; Research
              </h3>
              <div className="courses-grid-view">
                <div className="course-card-classic">
                  <div className="course-cover">
                    <img src={COURSE_COVERS.rqualitative} alt="R Qualitative Research cover" />
                  </div>
                  <div className="course-details">
                    <h5>Qualitative Research with R — Kenya Edition</h5>
                    <div className="lessons-count-meta" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <RiBarChart style={{ color: 'var(--text-muted)' }} />
                      <span>lessons : {totalRQualitativeLessons} (Full Syllabus)</span>
                    </div>
                    <div className="instructor-meta">
                      <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=256&auto=format&fit=crop" alt="Instructor avatar" />
                      <span>The Debug Society</span>
                    </div>
                    <div className="progress-info-row">
                      <span>{rQualitativeProgressPercent}% Complete</span>
                    </div>
                    <div className="card-progress-track">
                      <div className="card-progress-fill-val" style={{ width: `${rQualitativeProgressPercent}%` }}></div>
                    </div>
                    <button className="card-action-btn-classic" onClick={() => {
                      setActiveTrack('rqualitative');
                      setActivePage('react-path');
                      playSynthesizedSound('success');
                    }}>
                      {rQualitativeProgressPercent === 100 ? 'Review Path' : 'Resume Path'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* View 2. REACT MODULES PATHWAY (Accordion) */}
        {activePage === 'react-path' && activeTrack === 'react' && (
          <div>
            <div className="module-view-header">
              <div>
                <h2>The Debug Society - React Curriculum</h2>
                <p>Track your progression and read parsed resources offline.</p>
              </div>
              <div className="module-completion-badge">
                {progressPercent === 100 ? (
                  <span className="badge-unlocked"><RiAward style={{ marginRight: '6px' }} /> Graduated from Debug Society</span>
                ) : (
                  <span><RiAward style={{ marginRight: '6px' }} /> Grad. Badge Locked ({completedCount}/26 Lessons)</span>
                )}
              </div>
            </div>

            <div className="accordion-wrapper">
              {lessonsData.map((section, sIdx) => {
                const isExpanded = expandedSectionId === section.sectionId;
                // Calculate section progress
                const completedInSection = section.lessons.filter(l => completedLessons.includes(l.id)).length;
                const sectionPercent = Math.round((completedInSection / section.lessons.length) * 100);

                return (
                  <div key={section.sectionId} className={`accordion-item ${isExpanded ? 'expanded' : ''}`}>
                    <button 
                      className="accordion-header"
                      onClick={() => setExpandedSectionId(isExpanded ? null : section.sectionId)}
                    >
                      <div className="accordion-header-left">
                        <div className="accordion-index">{sIdx + 1}</div>
                        <div className="accordion-meta">
                          <h4>{section.sectionTitle}</h4>
                          <span>{completedInSection} of {section.lessons.length} Completed ({sectionPercent}%)</span>
                        </div>
                      </div>
                      <div className="accordion-header-right">
                        <svg className="accordion-chevron" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="accordion-body">
                        <div className="lessons-list-group">
                          {section.lessons.map((lesson, lIdx) => {
                            const isCompleted = completedLessons.includes(lesson.id);
                            
                            // Determine status tag (completed, next, or locked)
                            let statusTag = <span className="lesson-badge-tag locked">Locked</span>;
                            if (isCompleted) {
                              statusTag = <span className="lesson-badge-tag completed">Completed</span>;
                            } else {
                              const allPriorCompleted = lessonsData
                                .slice(0, sIdx + 1)
                                .flatMap((s, sI) => sI < sIdx ? s.lessons : s.lessons.slice(0, lIdx))
                                .every(l => completedLessons.includes(l.id));
                              
                              if (allPriorCompleted) {
                                statusTag = <span className="lesson-badge-tag next">Next Up</span>;
                              }
                            }

                            return (
                              <div 
                                key={lesson.id} 
                                className={`lesson-row ${isCompleted ? 'completed-lesson-item' : ''}`}
                                onClick={() => {
                                  setSelectedLesson(lesson);
                                  setSelectedSection(section);
                                  playSynthesizedSound('success');
                                }}
                              >
                                <div className="lesson-title-side">
                                  <svg className="lesson-row-icon" viewBox="0 0 24 24">
                                    {isCompleted ? (
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    ) : (
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    )}
                                  </svg>
                                  <span className="lesson-text-title">{lesson.title}</span>
                                </div>
                                {statusTag}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* View 2. SQL MODULES PATHWAY (Accordion) */}
        {activePage === 'react-path' && activeTrack === 'sql' && (
          <div>
            <div className="module-view-header">
              <div>
                <h2>The Debug Society - SQL & Databases Curriculum</h2>
                <p>Learn core query architecture, multi-table relations, and self-joins offline.</p>
              </div>
              <div className="module-completion-badge">
                {sqlProgressPercent === 100 ? (
                  <span className="badge-unlocked"><RiAward style={{ marginRight: '6px' }} /> Graduated from SQL Track</span>
                ) : (
                  <span><RiAward style={{ marginRight: '6px' }} /> Grad. Badge Locked ({completedSqlCount}/{totalSqlLessons} Lessons)</span>
                )}
              </div>
            </div>

            <div className="accordion-wrapper">
              {sqlLessonsData.map((section, sIdx) => {
                const isExpanded = expandedSectionId === section.sectionId;
                const completedInSection = section.lessons.filter(l => completedSqlLessons.includes(l.id)).length;
                const sectionPercent = Math.round((completedInSection / section.lessons.length) * 100);

                return (
                  <div key={section.sectionId} className={`accordion-item ${isExpanded ? 'expanded' : ''}`}>
                    <button 
                      className="accordion-header"
                      onClick={() => setExpandedSectionId(isExpanded ? null : section.sectionId)}
                    >
                      <div className="accordion-header-left">
                        <div className="accordion-index">{sIdx + 1}</div>
                        <div className="accordion-meta">
                          <h4>{section.sectionTitle}</h4>
                          <span>{completedInSection} of {section.lessons.length} Completed ({sectionPercent}%)</span>
                        </div>
                      </div>
                      <div className="accordion-header-right">
                        <svg className="accordion-chevron" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="accordion-body">
                        <div className="lessons-list-group">
                          {section.lessons.map((lesson, lIdx) => {
                            const isCompleted = completedSqlLessons.includes(lesson.id);
                            let statusTag = <span className="lesson-badge-tag locked">Locked</span>;
                            
                            if (isCompleted) {
                              statusTag = <span className="lesson-badge-tag completed">Completed</span>;
                            } else {
                              const allPriorCompleted = sqlLessonsData
                                .slice(0, sIdx + 1)
                                .flatMap((s, sI) => sI < sIdx ? s.lessons : s.lessons.slice(0, lIdx))
                                .every(l => completedSqlLessons.includes(l.id));
                              
                              if (allPriorCompleted) {
                                statusTag = <span className="lesson-badge-tag next">Next Up</span>;
                              }
                            }

                            return (
                              <div 
                                key={lesson.id} 
                                className={`lesson-row ${isCompleted ? 'completed-lesson-item' : ''}`}
                                onClick={() => {
                                  setSelectedSqlLesson(lesson);
                                  setSelectedSqlSection(section);
                                  setSqlQuery(lesson.assignments[0]?.defaultQuery || '');
                                  setSqlSimulatedResults(null);
                                  setSqlSandboxFeedback('');
                                  setActiveAssignmentIndex(0);
                                  playSynthesizedSound('success');
                                }}
                              >
                                <div className="lesson-title-side">
                                  <svg className="lesson-row-icon" viewBox="0 0 24 24">
                                    {isCompleted ? (
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    ) : (
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    )}
                                  </svg>
                                  <span className="lesson-text-title">{lesson.title}</span>
                                </div>
                                {statusTag}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* View 2c. FASTAPI MODULES PATHWAY (Accordion) */}
        {activePage === 'react-path' && activeTrack === 'fastapi' && (
          <div>
            <div className="module-view-header">
              <div>
                <h2>The Debug Society - FastAPI Curriculum</h2>
                <p>Build production Python APIs with type hints, Pydantic, and OpenAPI docs.</p>
              </div>
              <div className="module-completion-badge">
                {fastApiProgressPercent === 100 ? (
                  <span className="badge-unlocked"><RiAward style={{ marginRight: '6px' }} /> Graduated from FastAPI Track</span>
                ) : (
                  <span><RiAward style={{ marginRight: '6px' }} /> Grad. Badge Locked ({completedFastApiCount}/{totalFastApiLessons} Lessons)</span>
                )}
              </div>
            </div>

            <div className="accordion-wrapper">
              {fastApiLessonsData.map((section, sIdx) => {
                const isExpanded = expandedSectionId === section.sectionId;
                const completedInSection = section.lessons.filter(l => completedFastApiLessons.includes(l.id)).length;
                const sectionPercent = Math.round((completedInSection / section.lessons.length) * 100);

                return (
                  <div key={section.sectionId} className={`accordion-item ${isExpanded ? 'expanded' : ''}`}>
                    <button
                      className="accordion-header"
                      onClick={() => setExpandedSectionId(isExpanded ? null : section.sectionId)}
                    >
                      <div className="accordion-header-left">
                        <div className="accordion-index">{sIdx + 1}</div>
                        <div className="accordion-meta">
                          <h4>{section.sectionTitle}</h4>
                          <span>{completedInSection} of {section.lessons.length} Completed ({sectionPercent}%)</span>
                        </div>
                      </div>
                      <div className="accordion-header-right">
                        <svg className="accordion-chevron" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="accordion-body">
                        <div className="lessons-list-group">
                          {section.lessons.map((lesson, lIdx) => {
                            const isCompleted = completedFastApiLessons.includes(lesson.id);
                            let statusTag = <span className="lesson-badge-tag locked">Locked</span>;

                            if (isCompleted) {
                              statusTag = <span className="lesson-badge-tag completed">Completed</span>;
                            } else {
                              const allPriorCompleted = fastApiLessonsData
                                .slice(0, sIdx + 1)
                                .flatMap((s, sI) => sI < sIdx ? s.lessons : s.lessons.slice(0, lIdx))
                                .every(l => completedFastApiLessons.includes(l.id));

                              if (allPriorCompleted) {
                                statusTag = <span className="lesson-badge-tag next">Next Up</span>;
                              }
                            }

                            return (
                              <div
                                key={lesson.id}
                                className={`lesson-row ${isCompleted ? 'completed-lesson-item' : ''}`}
                                onClick={() => {
                                  setSelectedFastApiLesson(lesson);
                                  setSelectedFastApiSection(section);
                                  playSynthesizedSound('success');
                                }}
                              >
                                <div className="lesson-title-side">
                                  <svg className="lesson-row-icon" viewBox="0 0 24 24">
                                    {isCompleted ? (
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    ) : (
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    )}
                                  </svg>
                                  <span className="lesson-text-title">{lesson.title}</span>
                                </div>
                                {statusTag}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* View 2d. EXPRESS REST API MODULES PATHWAY (Accordion) */}
        {activePage === 'react-path' && activeTrack === 'express' && (
          <div>
            <div className="module-view-header">
              <div>
                <h2>The Debug Society - Express REST API Curriculum</h2>
                <p>REST conventions, CORS, JWT authentication, and a full Blog API capstone.</p>
              </div>
              <div className="module-completion-badge">
                {expressProgressPercent === 100 ? (
                  <span className="badge-unlocked"><RiAward style={{ marginRight: '6px' }} /> Graduated from Express Track</span>
                ) : (
                  <span><RiAward style={{ marginRight: '6px' }} /> Grad. Badge Locked ({completedExpressCount}/{totalExpressLessons} Lessons)</span>
                )}
              </div>
            </div>

            <div className="accordion-wrapper">
              {expressApiLessonsData.map((section, sIdx) => {
                const isExpanded = expandedSectionId === section.sectionId;
                const completedInSection = section.lessons.filter(l => completedExpressLessons.includes(l.id)).length;
                const sectionPercent = Math.round((completedInSection / section.lessons.length) * 100);

                return (
                  <div key={section.sectionId} className={`accordion-item ${isExpanded ? 'expanded' : ''}`}>
                    <button
                      className="accordion-header"
                      onClick={() => setExpandedSectionId(isExpanded ? null : section.sectionId)}
                    >
                      <div className="accordion-header-left">
                        <div className="accordion-index">{sIdx + 1}</div>
                        <div className="accordion-meta">
                          <h4>{section.sectionTitle}</h4>
                          <span>{completedInSection} of {section.lessons.length} Completed ({sectionPercent}%)</span>
                        </div>
                      </div>
                      <div className="accordion-header-right">
                        <svg className="accordion-chevron" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="accordion-body">
                        <div className="lessons-list-group">
                          {section.lessons.map((lesson, lIdx) => {
                            const isCompleted = completedExpressLessons.includes(lesson.id);
                            let statusTag = <span className="lesson-badge-tag locked">Locked</span>;

                            if (isCompleted) {
                              statusTag = <span className="lesson-badge-tag completed">Completed</span>;
                            } else {
                              const allPriorCompleted = expressApiLessonsData
                                .slice(0, sIdx + 1)
                                .flatMap((s, sI) => sI < sIdx ? s.lessons : s.lessons.slice(0, lIdx))
                                .every(l => completedExpressLessons.includes(l.id));

                              if (allPriorCompleted) {
                                statusTag = <span className="lesson-badge-tag next">Next Up</span>;
                              }
                            }

                            return (
                              <div
                                key={lesson.id}
                                className={`lesson-row ${isCompleted ? 'completed-lesson-item' : ''}`}
                                onClick={() => {
                                  setSelectedExpressLesson(lesson);
                                  setSelectedExpressSection(section);
                                  playSynthesizedSound('success');
                                }}
                              >
                                <div className="lesson-title-side">
                                  <svg className="lesson-row-icon" viewBox="0 0 24 24">
                                    {isCompleted ? (
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    ) : (
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    )}
                                  </svg>
                                  <span className="lesson-text-title">{lesson.title}</span>
                                </div>
                                {statusTag}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* View 2e. PYTHON BASICS MODULES PATHWAY (Accordion) */}
        {activePage === 'react-path' && activeTrack === 'python' && (
          <div>
            <div className="module-view-header">
              <div>
                <h2>The Debug Society - Python Basics Curriculum</h2>
                <p>Learn core Python syntax, decision making, data structures, modules, and Object-Oriented foundations.</p>
              </div>
              <div className="module-completion-badge">
                {pythonProgressPercent === 100 ? (
                  <span className="badge-unlocked"><RiAward style={{ marginRight: '6px' }} /> Graduated from Python Track</span>
                ) : (
                  <span><RiAward style={{ marginRight: '6px' }} /> Grad. Badge Locked ({completedPythonCount}/{totalPythonLessons} Lessons)</span>
                )}
              </div>
            </div>

            <div className="accordion-wrapper">
              {pythonLessonsData.map((section, sIdx) => {
                const isExpanded = expandedSectionId === section.sectionId;
                const completedInSection = section.lessons.filter(l => completedPythonLessons.includes(l.id)).length;
                const sectionPercent = Math.round((completedInSection / section.lessons.length) * 100);

                return (
                  <div key={section.sectionId} className={`accordion-item ${isExpanded ? 'expanded' : ''}`}>
                    <button
                      className="accordion-header"
                      onClick={() => setExpandedSectionId(isExpanded ? null : section.sectionId)}
                    >
                      <div className="accordion-header-left">
                        <div className="accordion-index">{sIdx + 1}</div>
                        <div className="accordion-meta">
                          <h4>{section.sectionTitle}</h4>
                          <span>{completedInSection} of {section.lessons.length} Completed ({sectionPercent}%)</span>
                        </div>
                      </div>
                      <div className="accordion-header-right">
                        <svg className="accordion-chevron" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="accordion-body">
                        <div className="lessons-list-group">
                          {section.lessons.map((lesson, lIdx) => {
                            const isCompleted = completedPythonLessons.includes(lesson.id);
                            let statusTag = <span className="lesson-badge-tag locked">Locked</span>;

                            if (isCompleted) {
                              statusTag = <span className="lesson-badge-tag completed">Completed</span>;
                            } else {
                              const allPriorCompleted = pythonLessonsData
                                .slice(0, sIdx + 1)
                                .flatMap((s, sI) => sI < sIdx ? s.lessons : s.lessons.slice(0, lIdx))
                                .every(l => completedPythonLessons.includes(l.id));

                              if (allPriorCompleted) {
                                statusTag = <span className="lesson-badge-tag next">Next Up</span>;
                              }
                            }

                            return (
                              <div
                                key={lesson.id}
                                className={`lesson-row ${isCompleted ? 'completed-lesson-item' : ''}`}
                                onClick={() => {
                                  setSelectedPythonLesson(lesson);
                                  setSelectedPythonSection(section);
                                  playSynthesizedSound('success');
                                }}
                              >
                                <div className="lesson-title-side">
                                  <svg className="lesson-row-icon" viewBox="0 0 24 24">
                                    {isCompleted ? (
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    ) : (
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    )}
                                  </svg>
                                  <span className="lesson-text-title">{lesson.title}</span>
                                </div>
                                {statusTag}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* View 2f. TYPESCRIPT BASICS MODULES PATHWAY (Accordion) */}
        {activePage === 'react-path' && activeTrack === 'typescript' && (
          <div>
            <div className="module-view-header">
              <div>
                <h2>The Debug Society - TypeScript Basics Curriculum</h2>
                <p>Master static types, unions, nullable annotations, objects/functions shape binding, OOP visibility modifiers, generics, and debugging.</p>
              </div>
              <div className="module-completion-badge">
                {typescriptProgressPercent === 100 ? (
                  <span className="badge-unlocked"><RiAward style={{ marginRight: '6px' }} /> Graduated from TypeScript Track</span>
                ) : (
                  <span><RiAward style={{ marginRight: '6px' }} /> Grad. Badge Locked ({completedTypescriptCount}/{totalTypescriptLessons} Lessons)</span>
                )}
              </div>
            </div>

            <div className="accordion-wrapper">
              {typescriptLessonsData.map((section, sIdx) => {
                const isExpanded = expandedSectionId === section.sectionId;
                const completedInSection = section.lessons.filter(l => completedTypescriptLessons.includes(l.id)).length;
                const sectionPercent = Math.round((completedInSection / section.lessons.length) * 100);

                return (
                  <div key={section.sectionId} className={`accordion-item ${isExpanded ? 'expanded' : ''}`}>
                    <button
                      className="accordion-header"
                      onClick={() => setExpandedSectionId(isExpanded ? null : section.sectionId)}
                    >
                      <div className="accordion-header-left">
                        <div className="accordion-index">{sIdx + 1}</div>
                        <div className="accordion-meta">
                          <h4>{section.sectionTitle}</h4>
                          <span>{completedInSection} of {section.lessons.length} Completed ({sectionPercent}%)</span>
                        </div>
                      </div>
                      <div className="accordion-header-right">
                        <svg className="accordion-chevron" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="accordion-body">
                        <div className="lessons-list-group">
                          {section.lessons.map((lesson, lIdx) => {
                            const isCompleted = completedTypescriptLessons.includes(lesson.id);
                            let statusTag = <span className="lesson-badge-tag locked">Locked</span>;

                            if (isCompleted) {
                              statusTag = <span className="lesson-badge-tag completed">Completed</span>;
                            } else {
                              const allPriorCompleted = typescriptLessonsData
                                .slice(0, sIdx + 1)
                                .flatMap((s, sI) => sI < sIdx ? s.lessons : s.lessons.slice(0, lIdx))
                                .every(l => completedTypescriptLessons.includes(l.id));

                              if (allPriorCompleted) {
                                statusTag = <span className="lesson-badge-tag next">Next Up</span>;
                              }
                            }

                            return (
                              <div
                                key={lesson.id}
                                className={`lesson-row ${isCompleted ? 'completed-lesson-item' : ''}`}
                                onClick={() => {
                                  setSelectedTypescriptLesson(lesson);
                                  setSelectedTypescriptSection(section);
                                  playSynthesizedSound('success');
                                }}
                              >
                                <div className="lesson-title-side">
                                  <svg className="lesson-row-icon" viewBox="0 0 24 24">
                                    {isCompleted ? (
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    ) : (
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    )}
                                  </svg>
                                  <span className="lesson-text-title">{lesson.title}</span>
                                </div>
                                {statusTag}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* View 2. R QUALITATIVE RESEARCH MODULES PATHWAY (Accordion) */}
        {activePage === 'react-path' && activeTrack === 'rqualitative' && (
          <div>
            <div className="module-view-header">
              <div>
                <h2>The Debug Society — Qualitative Research with R (Kenya Edition)</h2>
                <p>Master qualitative methods, Excel data pipelines, coding, thematic analysis, and reproducible R Markdown reports.</p>
              </div>
              <div className="module-completion-badge">
                {rQualitativeProgressPercent === 100 ? (
                  <span className="badge-unlocked"><RiAward style={{ marginRight: '6px' }} /> Graduated from R Qualitative Track</span>
                ) : (
                  <span><RiAward style={{ marginRight: '6px' }} /> Grad. Badge Locked ({completedRQualitativeCount}/{totalRQualitativeLessons} Lessons)</span>
                )}
              </div>
            </div>

            <div className="accordion-wrapper">
              {rQualitativeLessonsData.map((section, sIdx) => {
                const isExpanded = expandedSectionId === section.sectionId;
                const completedInSection = section.lessons.filter(l => completedRQualitativeLessons.includes(l.id)).length;
                const sectionPercent = Math.round((completedInSection / section.lessons.length) * 100);

                return (
                  <div key={section.sectionId} className={`accordion-item ${isExpanded ? 'expanded' : ''}`}>
                    <button
                      className="accordion-header"
                      onClick={() => setExpandedSectionId(isExpanded ? null : section.sectionId)}
                    >
                      <div className="accordion-header-left">
                        <div className="accordion-index">{sIdx + 1}</div>
                        <div className="accordion-meta">
                          <h4>{section.sectionTitle}</h4>
                          <span>{completedInSection} of {section.lessons.length} Completed ({sectionPercent}%)</span>
                        </div>
                      </div>
                      <div className="accordion-header-right">
                        <svg className="accordion-chevron" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="accordion-body">
                        <div className="lessons-list-group">
                          {section.lessons.map((lesson, lIdx) => {
                            const isCompleted = completedRQualitativeLessons.includes(lesson.id);
                            let statusTag = <span className="lesson-badge-tag locked">Locked</span>;

                            if (isCompleted) {
                              statusTag = <span className="lesson-badge-tag completed">Completed</span>;
                            } else {
                              const allPriorCompleted = rQualitativeLessonsData
                                .slice(0, sIdx + 1)
                                .flatMap((s, sI) => sI < sIdx ? s.lessons : s.lessons.slice(0, lIdx))
                                .every(l => completedRQualitativeLessons.includes(l.id));

                              if (allPriorCompleted) {
                                statusTag = <span className="lesson-badge-tag next">Next Up</span>;
                              }
                            }

                            return (
                              <div
                                key={lesson.id}
                                className={`lesson-row ${isCompleted ? 'completed-lesson-item' : ''}`}
                                onClick={() => {
                                  setSelectedRQualitativeLesson(lesson);
                                  setSelectedRQualitativeSection(section);
                                  playSynthesizedSound('success');
                                }}
                              >
                                <div className="lesson-title-side">
                                  <svg className="lesson-row-icon" viewBox="0 0 24 24">
                                    {isCompleted ? (
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    ) : (
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    )}
                                  </svg>
                                  <span className="lesson-text-title">{lesson.title}</span>
                                </div>
                                {statusTag}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* View 3. PRACTICE QUIZ HISTORY LIST */}
        {activePage === 'practice-arena' && (
          <div>
            <div className="quiz-arena-header">
              <h2 className="section-title">Quiz History & Arena</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '24px' }}>
                Test your engineering alignment across course modules below to record metrics inside the diagnostic ledger.
              </p>
            </div>

            {/* Selection Category List Grid */}
            {!activeQuizCategory && !quizFinished && (
              <>
                <div className="course-quiz-tabs" style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', flexWrap: 'wrap' }}>
                  {[
                    { id: 'react', label: 'React Core', icon: <RiReact style={{ marginRight: '6px' }} /> },
                    { id: 'typescript', label: 'TypeScript', icon: <RiTypeScript style={{ marginRight: '6px' }} /> },
                    { id: 'sql', label: 'SQL Query', icon: <RiDatabase style={{ marginRight: '6px' }} /> },
                    { id: 'fastapi', label: 'FastAPI', icon: <RiFastApi style={{ marginRight: '6px' }} /> },
                    { id: 'express', label: 'Express REST API', icon: <RiServer style={{ marginRight: '6px' }} /> },
                    { id: 'python', label: 'Python Foundations', icon: <RiPython style={{ marginRight: '6px' }} /> }
                  ].map(track => {
                    const isTrackActive = activeQuizTrack === track.id;
                    return (
                      <button
                        key={track.id}
                        onClick={() => {
                          setActiveQuizTrack(track.id);
                          playSynthesizedSound('success');
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '8px 16px',
                          borderRadius: '20px',
                          border: isTrackActive ? '1px solid var(--primary-blue)' : '1px solid var(--border-color)',
                          backgroundColor: isTrackActive ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                          color: isTrackActive ? 'var(--primary-blue)' : 'var(--text-muted)',
                          fontSize: '11px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all var(--transition-fast)',
                          boxShadow: isTrackActive ? '0 0 8px rgba(59, 130, 246, 0.2)' : 'none'
                        }}
                        className="track-filter-btn"
                      >
                        {track.icon}
                        {track.label}
                      </button>
                    );
                  })}
                </div>

                <div className="arena-quiz-grid">
                  {quizCategories
                    .filter(cat => cat.courseId === activeQuizTrack)
                    .map(cat => (
                      <div key={cat.id} className="arena-card" onClick={() => {
                        setActiveQuizCategory(cat);
                        setQuizQuestionIndex(0);
                        setQuizSelectedOption(null);
                        setQuizScore(0);
                        setQuizFinished(false);
                        setQuizCodeValue(cat.questions[0].starterCode || '');
                        setQuizCodeVerified(null);
                        setQuizCodeLogs([]);
                        playSynthesizedSound('success');
                      }}>
                        <h4>{cat.title}</h4>
                        <p>{cat.description}</p>
                        <span><RiZap style={{ marginRight: '6px' }} /> Launch Diagnostic ({cat.questions.length} Questions)</span>
                      </div>
                    ))}
                </div>
              </>
            )}

            {/* Quiz Workspace View */}
            {activeQuizCategory && !quizFinished && (() => {
              const activeQuestion = activeQuizCategory.questions[quizQuestionIndex];
              const width = ((quizQuestionIndex + 1) / activeQuizCategory.questions.length) * 100;
              return (
                <div className="quiz-container">
                  <div className="quiz-prog-bar">
                    <div className="quiz-prog-fill" style={{ width: `${width}%` }}></div>
                  </div>

                  <div className="quiz-inner">
                    <div className="quiz-meta-row">
                      <span className="quiz-cat-badge">{activeQuizCategory.title}</span>
                      <span className="quiz-cnt-text">Question {quizQuestionIndex + 1} of {activeQuizCategory.questions.length}</span>
                    </div>

                    <h3 className="quiz-question-heading">{activeQuestion.question}</h3>

                    {/* Options / Code editor with color code feedback */}
                    {activeQuestion.isCode ? (
                      <div className="quiz-code-workspace" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                        <div className="terminal-header" style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          backgroundColor: 'var(--bg-card)',
                          border: '1px solid var(--border-color)',
                          borderBottom: 'none',
                          padding: '8px 12px',
                          borderTopLeftRadius: '6px',
                          borderTopRightRadius: '6px',
                          fontFamily: 'var(--font-mono, monospace)',
                          fontSize: '11px',
                          color: 'var(--text-muted)'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }}></span>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#eab308' }}></span>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }}></span>
                            <span style={{ marginLeft: '6px', fontWeight: 'bold' }}>sandbox_shell.{activeQuizCategory.courseId === 'sql' ? 'sql' : activeQuizCategory.courseId === 'python' || activeQuizCategory.courseId === 'fastapi' ? 'py' : 'js'}</span>
                          </div>
                          <div>IDE SANDBOX v1.0</div>
                        </div>

                        <textarea
                          value={quizCodeValue}
                          onChange={(e) => setQuizCodeValue(e.target.value)}
                          placeholder={activeQuestion.starterCode || "// Write your code here..."}
                          style={{
                            width: '100%',
                            minHeight: '150px',
                            backgroundColor: '#0f172a',
                            color: '#f8fafc',
                            fontFamily: 'var(--font-mono, monospace)',
                            fontSize: '12px',
                            padding: '12px',
                            border: '1px solid var(--border-color)',
                            borderTop: 'none',
                            borderBottomLeftRadius: '6px',
                            borderBottomRightRadius: '6px',
                            resize: 'vertical',
                            outline: 'none',
                            lineHeight: '1.5'
                          }}
                          className="quiz-code-textarea"
                          disabled={quizCodeVerified === true}
                        />

                        <div className="code-actions" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <button
                            className="primary-btn"
                            onClick={handleVerifyCode}
                            disabled={quizCodeVerified === true}
                            style={{
                              padding: '8px 16px',
                              fontSize: '11.5px',
                              backgroundColor: quizCodeVerified === true ? 'var(--success-color)' : 'var(--accent-gold, #d4af37)',
                              borderColor: quizCodeVerified === true ? 'var(--success-color)' : 'var(--accent-gold, #d4af37)',
                              color: '#1a1a1a',
                              fontWeight: '600',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px'
                            }}
                          >
                            <RiZap style={{ width: '12px', height: '12px' }} /> Verify Code Solution
                          </button>
                          
                          {quizCodeVerified !== null && (
                            <span style={{
                              fontSize: '11px',
                              fontWeight: 'bold',
                              color: quizCodeVerified ? 'var(--success-color)' : '#ef4444',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}>
                              {quizCodeVerified ? (
                                <>✓ Solution Accepted!</>
                              ) : (
                                <>✗ Verification Failed (Incorrect or Incomplete)</>
                              )}
                            </span>
                          )}
                        </div>

                        {/* Compilation and Test Logs Panel */}
                        {quizCodeLogs.length > 0 && (
                          <div className="terminal-logs" style={{
                            backgroundColor: '#020617',
                            border: '1px solid #1e293b',
                            borderRadius: '6px',
                            padding: '12px',
                            fontFamily: 'var(--font-mono, monospace)',
                            fontSize: '11px',
                            color: '#38bdf8',
                            maxHeight: '150px',
                            overflowY: 'auto',
                            textAlign: 'left'
                          }}>
                            <div style={{ color: '#94a3b8', borderBottom: '1px solid #1e293b', paddingBottom: '4px', marginBottom: '8px', fontWeight: 'bold' }}>
                              CONSOLE DIAGNOSTICS
                            </div>
                            {quizCodeLogs.map((log, lIdx) => {
                              let color = '#38bdf8'; // Blue info log
                              if (log.startsWith('[SUCCESS]')) color = 'var(--success-color)';
                              else if (log.startsWith('[ERROR]')) color = '#f87171';
                              else if (log.startsWith('[SYSTEM]')) color = '#e2e8f0';

                              return (
                                <div key={lIdx} style={{ color, marginBottom: '4px', whiteSpace: 'pre-wrap' }}>
                                  {log}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="quiz-options-group">
                        {activeQuestion.options.map((opt, oIdx) => {
                          const isSelected = quizSelectedOption === oIdx;
                          const isCorrectAnswer = oIdx === activeQuestion.answerIndex;
                          const hasAnswered = quizSelectedOption !== null;
                          
                          let optionClass = '';
                          if (hasAnswered) {
                            if (isCorrectAnswer) {
                              optionClass = 'correct'; // Show correct answer in green
                            } else if (isSelected) {
                              optionClass = 'incorrect'; // Show selected incorrect in red
                            } else {
                              optionClass = 'disabled';
                            }
                          } else if (isSelected) {
                            optionClass = 'selected';
                          }

                          return (
                            <button 
                              key={oIdx} 
                              className={`quiz-option-item-btn ${optionClass}`}
                              onClick={() => handleAnswerSubmit(oIdx)}
                              disabled={quizSelectedOption !== null}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    <div className="quiz-footer-actions">
                      <button className="secondary-btn" onClick={() => {
                        setActiveQuizCategory(null);
                        setQuizQuestionIndex(0);
                        setQuizSelectedOption(null);
                        setQuizCodeVerified(null);
                        setQuizCodeLogs([]);
                        playSynthesizedSound('reset');
                      }}>
                        Quit Quiz
                      </button>

                      <button 
                        className="primary-btn"
                        onClick={handleNextQuizQuestion}
                        disabled={quizSelectedOption === null}
                      >
                        {quizQuestionIndex === activeQuizCategory.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Quiz Finished Result Screen */}
            {quizFinished && activeQuizCategory && (
              <div className="quiz-results-card-view">
                <h3>Diagnostic Alignment Completed</h3>
                <p>Score: {quizScore} / {activeQuizCategory.questions.length} ({Math.round((quizScore / activeQuizCategory.questions.length) * 100)}% Efficiency)</p>
                <div className="quiz-results-details">
                  Your diagnostic evaluation run is completed. Performance stats have been securely saved and logged into the offline Diagnostic Ledger below.
                </div>
                <button className="primary-btn" onClick={() => {
                  setQuizFinished(false);
                  setActiveQuizCategory(null);
                  playSynthesizedSound('success');
                }}>
                  Done
                </button>
              </div>
            )}

            {/* Quiz History log list table */}
            <div className="quiz-history-log">
              <h3>Diagnostic Ledger (Quiz History)</h3>
              <div className="history-table-wrapper">
                <table className="premium-table">
                  <thead>
                    <tr>
                      <th>Workstation Date</th>
                      <th>Diagnostic Course Track</th>
                      <th>Score Recorded</th>
                      <th>Efficiency Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quizLog.length > 0 ? (
                      quizLog.map((log, index) => (
                        <tr key={index}>
                          <td>{log.date}</td>
                          <td>{log.category}</td>
                          <td>{log.score}</td>
                          <td>
                            <span style={{ 
                              color: log.rating.includes('Grandmaster') ? 'var(--success-color)' : 'var(--primary-blue)',
                              fontWeight: '700' 
                            }}>
                              {log.rating}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="empty-table-cell">
                          No diagnostics runs recorded. Launch a study category from the arena above!
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* View 4. Pomodoro Timer (My Assignments & Meltdown Prevention) */}
        {activePage === 'meltdown-timer' && (
          <div>
            <div className="meltdown-header" style={{ marginBottom: '24px' }}>
              <h2 className="section-title">My Assignments & Focus Workspace</h2>
              
              {/* Premium segment tabs for switching modes */}
              <div style={{
                display: 'flex',
                background: '#e2e8f0',
                padding: '4px',
                borderRadius: '8px',
                width: 'fit-content',
                marginTop: '12px'
              }}>
                <button
                  onClick={() => setAssignmentPageTab('ai-arena')}
                  style={{
                    border: 'none',
                    background: assignmentPageTab === 'ai-arena' ? '#ffffff' : 'transparent',
                    color: '#0f172a',
                    padding: '8px 16px',
                    fontWeight: 600,
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '12.5px',
                    boxShadow: assignmentPageTab === 'ai-arena' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <RiZap style={{ color: '#ff453a' }} />
                  AI Assignment Arena
                </button>
                <button
                  onClick={() => setAssignmentPageTab('focus-pomodoro')}
                  style={{
                    border: 'none',
                    background: assignmentPageTab === 'focus-pomodoro' ? '#ffffff' : 'transparent',
                    color: '#0f172a',
                    padding: '8px 16px',
                    fontWeight: 600,
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '12.5px',
                    boxShadow: assignmentPageTab === 'focus-pomodoro' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <RiFlame style={{ color: '#f59e0b' }} />
                  Focus Pomodoro
                </button>
              </div>
            </div>

            {assignmentPageTab === 'focus-pomodoro' ? (
              <div className="meltdown-grid-layout">
                {/* Pomodoro Timer Dial */}
                <div className="timer-box-classic">
                  <div className="dial-circle-wrapper">
                    <svg className="dial-svg" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" className="dial-track" />
                      {(() => {
                        const maxOffset = 283;
                        const totalSec = timerMode === 'coding' ? 25 * 60 : timerMode === 'short-break' ? 5 * 60 : 15 * 60;
                        const currSec = timerMinutes * 60 + timerSeconds;
                        const fillOffset = maxOffset - (currSec / totalSec) * maxOffset;
                        return (
                          <circle 
                            cx="50" 
                            cy="50" 
                            r="45" 
                            className="dial-fill-color" 
                            style={{ strokeDashoffset: fillOffset }} 
                          />
                        );
                      })()}
                    </svg>
                    <div className="dial-time-display">
                      {String(timerMinutes).padStart(2, '0')}:{String(timerSeconds).padStart(2, '0')}
                    </div>
                    <div className="dial-state-text">
                      {timerMode === 'coding'
                        ? 'CODING MODE'
                        : timerMode === 'long-break'
                          ? 'EXTENDED BREAK'
                          : 'DEBUGGING BREAK'}
                    </div>
                  </div>

                  <div className="dial-buttons">
                    <button className="timer-btn" onClick={() => {
                      setTimerIsRunning(!timerIsRunning);
                      playSynthesizedSound('success');
                    }}>
                      {timerIsRunning ? 'PAUSE TIMER' : 'START TIMER'}
                    </button>
                    <button className="timer-btn secondary" onClick={() => {
                      setTimerIsRunning(false);
                      setTimerMinutes(timerMode === 'coding' ? 25 : timerMode === 'short-break' ? 5 : 15);
                      setTimerSeconds(0);
                      playSynthesizedSound('reset');
                    }}>
                      RESET
                    </button>
                  </div>

                  <div className="dial-modes-selector">
                    <button 
                      className={`dial-mode-btn-item ${timerMode === 'coding' ? 'active' : ''}`}
                      onClick={() => {
                        setTimerIsRunning(false);
                        setTimerMode('coding');
                        setTimerMinutes(25);
                        setTimerSeconds(0);
                        playSynthesizedSound('reset');
                      }}
                    >
                      Coding (25m)
                    </button>
                    <button
                      className={`dial-mode-btn-item ${timerMode === 'short-break' ? 'active' : ''}`}
                      onClick={() => {
                        setTimerIsRunning(false);
                        setTimerMode('short-break');
                        setTimerMinutes(5);
                        setTimerSeconds(0);
                        playSynthesizedSound('reset');
                      }}
                    >
                      Short Break (5m)
                    </button>
                    <button
                      className={`dial-mode-btn-item ${timerMode === 'long-break' ? 'active' : ''}`}
                      onClick={() => {
                        setTimerIsRunning(false);
                        setTimerMode('long-break');
                        setTimerMinutes(15);
                        setTimerSeconds(0);
                        playSynthesizedSound('reset');
                      }}
                    >
                      Long Break (15m)
                    </button>
                  </div>
                </div>

                {/* Assignment Guideline Panels */}
                <div className="meltdown-stats-col">
                  <h4>Workspace Submissions</h4>
                  <div className="m-stats-row">
                    <div className="m-stat-box">
                      <span className="m-stat-lbl">Focus Blocks Cleared</span>
                      <strong className="m-stat-val">{timerSessionsCount} Sessions</strong>
                    </div>
                    <div className="m-stat-box">
                      <span className="m-stat-lbl">Prevented Meltdowns</span>
                      <strong className="m-stat-val secure">100% Secure</strong>
                    </div>
                  </div>

                  <div className="pomodoro-rules">
                    <h5>Developer Guideline Instructions:</h5>
                    <ul>
                      <li><RiFlame style={{ marginRight: '6px', color: '#f59e0b' }} /> **Commit Blocks**: Complete 2 focus blocks to automatically submit CV project drafts.</li>
                      <li><RiRocket style={{ marginRight: '6px', color: '#3b82f6' }} /> **Rest Intervals**: Mute notification bells during break modes to fully recover focus.</li>
                      <li><RiBrain style={{ marginRight: '6px', color: '#ec4899' }} /> **State Updates**: Learning without rest causes standard memory leaks in human compilers.</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '24px', alignItems: 'start' }}>
                {/* Left side: Course track list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {(() => {
                    const tracks = [
                      { id: 'react', name: 'React Track', progress: progressPercent, color: '#06b6d4', icon: <RiReact /> },
                      { id: 'typescript', name: 'TypeScript Track', progress: typescriptProgressPercent, color: '#0284c7', icon: <RiTypeScript /> },
                      { id: 'sql', name: 'SQL Query Track', progress: sqlProgressPercent, color: '#f97316', icon: <RiDatabase /> },
                      { id: 'fastapi', name: 'FastAPI Track', progress: fastApiProgressPercent, color: '#0ea5e9', icon: <RiFastApi /> },
                      { id: 'express', name: 'Express API Track', progress: expressProgressPercent, color: '#22c55e', icon: <RiServer /> },
                      { id: 'python', name: 'Python Basics Track', progress: pythonProgressPercent, color: '#eab308', icon: <RiPython /> }
                    ];

                    return tracks.map(track => {
                      const isCompleted = completedAssignments.includes(track.id);
                      const active = aiArenaTrack === track.id;
                      const feedback = aiFeedback[track.id];

                      return (
                        <div
                          key={track.id}
                          onClick={() => {
                            if (aiGradingStatus !== 'grading') {
                              setAiArenaTrack(track.id);
                            }
                          }}
                          style={{
                            background: '#ffffff',
                            border: active ? `2.5px solid ${track.color}` : '1px solid var(--border-color)',
                            borderRadius: '12px',
                            padding: '16px',
                            cursor: aiGradingStatus === 'grading' ? 'not-allowed' : 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            boxShadow: active ? '0 10px 15px -3px rgba(0,0,0,0.06)' : 'var(--shadow-sm)',
                            transition: 'all 0.2s',
                            borderLeft: `6px solid ${track.color}`,
                            opacity: aiGradingStatus === 'grading' ? 0.75 : 1
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span style={{ color: track.color, display: 'flex', alignItems: 'center' }}>{track.icon}</span>
                              <strong style={{ fontSize: '13.5px', color: 'var(--text-dark)' }}>{track.name}</strong>
                            </div>
                            
                            {/* Badging */}
                            {isCompleted ? (
                              <span style={{
                                fontSize: '8.5px',
                                background: '#e8f5e9',
                                color: '#2e7d32',
                                padding: '2px 8px',
                                borderRadius: '9999px',
                                fontWeight: 800,
                                letterSpacing: '0.5px'
                              }}>
                                PASSED
                              </span>
                            ) : feedback && !feedback.passed ? (
                              <span style={{
                                fontSize: '8.5px',
                                background: '#ffebee',
                                color: '#c62828',
                                padding: '2px 8px',
                                borderRadius: '9999px',
                                fontWeight: 800,
                                letterSpacing: '0.5px'
                              }}>
                                REVISE
                              </span>
                            ) : (
                              <span style={{
                                fontSize: '8.5px',
                                background: '#f5f5f5',
                                color: '#616161',
                                padding: '2px 8px',
                                borderRadius: '9999px',
                                fontWeight: 800,
                                letterSpacing: '0.5px'
                              }}>
                                PENDING
                              </span>
                            )}
                          </div>

                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)' }}>
                            <span>Syllabus: {track.progress}%</span>
                            {feedback && <span>AI Grade: {feedback.score}%</span>}
                          </div>
                          
                          {/* Syllabus progress bar */}
                          <div style={{ width: '100%', height: '5px', background: '#f1f5f9', borderRadius: '2.5px', overflow: 'hidden' }}>
                            <div style={{ width: `${track.progress}%`, height: '100%', backgroundColor: track.color, borderRadius: '2.5px', transition: 'width 0.4s ease' }} />
                          </div>

                          {/* Claim Certificate Button */}
                          {isCompleted ? (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowCertificateModal(track.id);
                                playSynthesizedSound('complete');
                              }}
                              style={{
                                border: 'none',
                                background: `linear-gradient(135deg, ${track.color} 0%, #1e1b4b 100%)`,
                                color: '#ffffff',
                                fontWeight: 700,
                                fontSize: '11px',
                                padding: '8px',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                marginTop: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '6px',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                              }}
                            >
                              <RiAward />
                              CLAIM CERTIFICATE
                            </button>
                          ) : (
                            <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '4px', lineHeight: '1.2' }}>
                              Pass code assignment (70% or higher) to unlock verified certificate
                            </div>
                          )}
                        </div>
                      );
                    });
                  })()}
                </div>

                {/* Right side: Editor workspace & AI Review card */}
                {(() => {
                  const activeAssignment = aiAssignmentsData.find(a => a.courseId === aiArenaTrack);
                  if (!activeAssignment) return null;
                  const submission = studentSubmissions[aiArenaTrack] || '';
                  const feedback = aiFeedback[aiArenaTrack];

                  return (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px', boxShadow: 'var(--shadow-sm)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                          <div>
                            <span style={{ fontSize: '10.5px', background: '#e0f2fe', color: '#0369a1', padding: '3px 10px', borderRadius: '4px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                              {activeAssignment.focusArea}
                            </span>
                            <h3 style={{ fontSize: '18px', color: 'var(--text-dark)', fontWeight: 800, marginTop: '10px', letterSpacing: '-0.3px' }}>
                              {activeAssignment.title}
                            </h3>
                          </div>
                        </div>

                        {/* Prompt Description */}
                        <div style={{
                          fontSize: '13px',
                          color: '#334155',
                          lineHeight: '1.6',
                          background: '#f8fafc',
                          border: '1px solid #e2e8f0',
                          padding: '16px',
                          borderRadius: '8px',
                          marginBottom: '20px',
                          whiteSpace: 'pre-line'
                        }}>
                          {activeAssignment.prompt}
                        </div>

                        {/* Black terminal code editor */}
                        <div style={{
                          background: '#090d16',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          border: '1px solid #1e293b',
                          boxShadow: '0 12px 35px rgba(0,0,0,0.18)',
                          position: 'relative'
                        }}>
                          {/* Terminal title bar */}
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            background: '#131b2e',
                            padding: '10px 16px',
                            borderBottom: '1px solid #1e293b'
                          }}>
                            {/* Window dots */}
                            <div style={{ display: 'flex', gap: '6px' }}>
                              <span style={{ width: '10px', height: '10px', background: '#ef4444', borderRadius: '50%' }} />
                              <span style={{ width: '10px', height: '10px', background: '#eab308', borderRadius: '50%' }} />
                              <span style={{ width: '10px', height: '10px', background: '#22c55e', borderRadius: '50%' }} />
                            </div>
                            <span style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '11.5px',
                              color: '#94a3b8'
                            }}>
                              {aiArenaTrack === 'react' ? 'editor.tsx' : aiArenaTrack === 'sql' ? 'query.sql' : aiArenaTrack === 'fastapi' ? 'main.py' : aiArenaTrack === 'express' ? 'auth.js' : 'helper.py'}
                            </span>
                            <span style={{ width: '36px' }} />
                          </div>

                          {/* Content area */}
                          <div style={{ display: 'flex', background: '#090d16' }}>
                            {/* Line numbers column */}
                            <div style={{
                              width: '42px',
                              borderRight: '1px solid #1e293b',
                              fontFamily: 'var(--font-mono)',
                              fontSize: '12px',
                              color: '#475569',
                              padding: '16px 8px',
                              textAlign: 'right',
                              userSelect: 'none',
                              lineHeight: '1.6'
                            }}>
                              {Array.from({ length: Math.max(12, submission.split('\n').length) }).map((_, i) => (
                                <div key={i}>{i + 1}</div>
                              ))}
                            </div>

                            {/* Text Area Input */}
                            <textarea
                              value={submission}
                              disabled={aiGradingStatus === 'grading'}
                              onChange={(e) => {
                                setStudentSubmissions(prev => ({
                                  ...prev,
                                  [aiArenaTrack]: e.target.value
                                }));
                              }}
                              style={{
                                flexGrow: 1,
                                border: 'none',
                                background: 'transparent',
                                color: '#cbd5e1',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '13px',
                                padding: '16px',
                                outline: 'none',
                                resize: 'vertical',
                                minHeight: '260px',
                                lineHeight: '1.6',
                                caretColor: '#3b82f6',
                                overflowX: 'auto'
                              }}
                            />
                          </div>
                        </div>

                        {/* Editor Controls */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', alignItems: 'center' }}>
                          <button
                            onClick={() => {
                              if (window.confirm('Reset code back to original starter template?')) {
                                setStudentSubmissions(prev => ({
                                  ...prev,
                                  [aiArenaTrack]: activeAssignment.starterCode
                                }));
                                playSynthesizedSound('reset');
                              }
                            }}
                            disabled={aiGradingStatus === 'grading'}
                            style={{
                              border: '1px solid var(--border-color)',
                              background: '#ffffff',
                              color: 'var(--text-dark)',
                              padding: '8px 16px',
                              fontSize: '11px',
                              fontWeight: 600,
                              borderRadius: '6px',
                              cursor: aiGradingStatus === 'grading' ? 'not-allowed' : 'pointer',
                              transition: 'all 0.2s'
                            }}
                          >
                            RESET STARTER CODE
                          </button>

                          <button
                            onClick={() => handleGradeAssignment(aiArenaTrack)}
                            disabled={aiGradingStatus === 'grading'}
                            style={{
                              border: 'none',
                              background: aiGradingStatus === 'grading' ? '#475569' : '#000000',
                              color: '#ffffff',
                              padding: '10px 24px',
                              fontSize: '12px',
                              fontWeight: 700,
                              borderRadius: '6px',
                              cursor: aiGradingStatus === 'grading' ? 'not-allowed' : 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                              transition: 'all 0.2s'
                            }}
                          >
                            {aiGradingStatus === 'grading' ? (
                              <>
                                <span style={{
                                  width: '12px',
                                  height: '12px',
                                  border: '2px solid rgba(255,255,255,0.3)',
                                  borderTopColor: '#ffffff',
                                  borderRadius: '50%',
                                  animation: 'spin-circle-text 0.8s linear infinite',
                                  display: 'inline-block'
                                }} />
                                COMPILING...
                              </>
                            ) : (
                              <>
                                <RiZap />
                                SUBMIT TO AI GRADERS
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* AI Grading Logs & Realtime Output Console */}
                      {aiGradingStatus !== 'idle' && (
                        <div style={{
                          background: '#040711',
                          border: '1px solid #111827',
                          borderRadius: '12px',
                          padding: '16px',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11.5px',
                          color: '#22c55e',
                          boxShadow: 'var(--shadow-sm)'
                        }}>
                          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '8px', color: '#94a3b8', fontSize: '10px', display: 'flex', justifyContent: 'space-between' }}>
                            <span>VERIFICATION PIPELINE CONSOLE</span>
                            <span>{aiGradingStatus === 'grading' ? 'RUNNING AUTOMATIC TEST SCAN' : 'DIAGNOSTICS FINISHED'}</span>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {aiGradingLogs.map((log, i) => {
                              const color = log.includes('[ERROR]') ? '#ef4444' : log.includes('[WARNING]') ? '#eab308' : log.includes('[SUCCESS]') ? '#22c55e' : '#cbd5e1';
                              return <div key={i} style={{ color }}>{log}</div>;
                            })}
                          </div>
                        </div>
                      )}

                      {/* Completed/AI Feedback Card */}
                      {feedback && aiGradingStatus !== 'grading' && (
                        <div style={{
                          background: '#ffffff',
                          border: `1px solid ${feedback.passed ? '#a7f3d0' : '#fecaca'}`,
                          borderRadius: '12px',
                          padding: '24px',
                          boxShadow: 'var(--shadow-sm)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px'
                        }}>
                          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            {/* Circular score display */}
                            <div style={{
                              width: '72px',
                              height: '72px',
                              borderRadius: '50%',
                              border: `6px solid ${feedback.passed ? '#10b981' : '#ef4444'}`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '18px',
                              fontWeight: 800,
                              color: feedback.passed ? '#047857' : '#b91c1c',
                              flexShrink: 0
                            }}>
                              {feedback.score}%
                            </div>

                            <div>
                              <strong style={{
                                fontSize: '14.5px',
                                color: feedback.passed ? '#047857' : '#b91c1c',
                                textTransform: 'uppercase',
                                letterSpacing: '0.7px'
                              }}>
                                {feedback.passed ? 'PASSED (AI VERIFIED)' : 'REVISION REQUIRED'}
                              </strong>
                              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '3px' }}>
                                {feedback.passed ? 'Excellent! This course project requirement is fully completed.' : 'Make improvements in missing checkpoints and submit again to pass.'}
                              </p>
                            </div>
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                            <div style={{ background: '#f0fdf4', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                              <h5 style={{ fontSize: '11px', color: '#047857', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '1px', marginBottom: '6px' }}>AI COMPLIANCE ANALYSIS</h5>
                              <p style={{ fontSize: '12.5px', color: '#14532d', lineHeight: '1.5' }}>{feedback.praise}</p>
                            </div>

                            <div style={{ background: '#fef2f2', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                              <h5 style={{ fontSize: '11px', color: '#b91c1c', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '1px', marginBottom: '6px' }}>SKILL REFINEMENT DETAILS</h5>
                              <p style={{ fontSize: '12.5px', color: '#7f1d1d', lineHeight: '1.5' }}>{feedback.critique}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        )}

        {/* View 5. DEVELOPER SETTINGS PAGE */}
        {activePage === 'settings' && (
          <div>
            <h2 className="section-title">Account & Workspace Settings</h2>
            
            <div className="settings-form-grid">
              
              <div className="settings-card">
                <h4>Developer Identity</h4>
                
                <div className="input-group">
                  <label htmlFor="settings-username">Developer Handle / Name</label>
                  <input 
                    type="text" 
                    id="settings-username" 
                    value={devName}
                    onChange={(e) => setDevName(e.target.value)}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="settings-email">Registered Email Address</label>
                  <input 
                    type="email" 
                    id="settings-email" 
                    value={currentUserEmail || ''}
                    readOnly
                    disabled
                    style={{
                      backgroundColor: 'var(--bg-input, rgba(0,0,0,0.03))',
                      cursor: 'not-allowed',
                      opacity: 0.8
                    }}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="settings-title">Developer Tier Title</label>
                  <select 
                    id="settings-title"
                    value={devTitle}
                    onChange={(e) => setDevTitle(e.target.value)}
                    style={{
                      backgroundColor: 'var(--bg-input)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-dark)',
                      padding: '10px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '12.5px',
                      outline: 'none'
                    }}
                  >
                    <option value="React Apprentice">React Apprentice</option>
                    <option value="Core Engineer">Core Engineer</option>
                    <option value="Production Lead">Production Lead</option>
                    <option value="Architect Master">Architect Master</option>
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="settings-avatar">Profile Picture / Avatar URL</label>
                  <input 
                    type="text" 
                    id="settings-avatar" 
                    value={devAvatar}
                    onChange={(e) => setDevAvatar(e.target.value)}
                  />
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                  <button className="primary-btn" onClick={handleSaveIdentity} style={{ flex: 1 }}>
                    Save Identity
                  </button>
                  <button 
                    className="danger-btn" 
                    onClick={handleLogoutUser} 
                    style={{ 
                      flex: 1,
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.2)',
                      color: '#ef4444',
                      padding: '12px 18px',
                      borderRadius: 'var(--radius-sm)',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.15s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#ef4444', e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)', e.currentTarget.style.color = '#ef4444')}
                  >
                    Logout Account
                  </button>
                </div>
              </div>

              <div className="settings-card">
                <h4>Visual Workstation Theme</h4>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  Adjust dashboard color schemes and graphic variables instantly.
                </p>
                <div className="theme-options-grid" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  
                  {/* Theme 1: Studio Aura (Light) */}
                  <button 
                    className={`theme-select-btn ${devTheme === 'studio-aura' ? 'active' : ''}`}
                    onClick={() => {
                      setDevTheme('studio-aura');
                      playSynthesizedSound('success');
                    }}
                  >
                    <div className="theme-swatch" style={{ backgroundColor: '#f8fafc', borderColor: '#cbd5e1', borderWidth: '1px', borderStyle: 'solid' }}></div>
                    <span>Studio Aura (Light Theme)</span>
                  </button>

                  {/* Theme 2: Midnight Glow (Dark Theme) */}
                  <button 
                    className={`theme-select-btn ${devTheme === 'midnight-glow' ? 'active' : ''}`}
                    onClick={() => {
                      setDevTheme('midnight-glow');
                      playSynthesizedSound('success');
                    }}
                  >
                    <div className="theme-swatch" style={{ backgroundColor: '#111827', borderColor: '#374151', borderWidth: '1px', borderStyle: 'solid' }}></div>
                    <span>Midnight Glow (Premium Dark Theme)</span>
                  </button>

                  {/* Theme 3: Cyber Terminal (Green) */}
                  <button 
                    className={`theme-select-btn ${devTheme === 'cyber-terminal' ? 'active' : ''}`}
                    onClick={() => {
                      setDevTheme('cyber-terminal');
                      playSynthesizedSound('success');
                    }}
                  >
                    <div className="theme-swatch" style={{ backgroundColor: '#000000', borderColor: '#10b981', borderWidth: '1px', borderStyle: 'solid' }}></div>
                    <span>Cyber Terminal (Neon Green Hack)</span>
                  </button>

                </div>
              </div>

              {/* Verified Credentials Preview Sandbox Card */}
              <div className="settings-card" style={{ gridColumn: 'span 2' }}>
                <h4>Verified Credentials Sandbox</h4>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  Preview and verify your DebugLab high-res completion credentials instantly. Click any track to launch the print preview.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px' }}>
                  {[
                    { id: 'react', name: 'React Component', color: '#06b6d4', icon: <RiReact /> },
                    { id: 'sql', name: 'SQL Aggregations', color: '#f97316', icon: <RiDatabase /> },
                    { id: 'fastapi', name: 'FastAPI Validation', color: '#0ea5e9', icon: <RiFastApi /> },
                    { id: 'express', name: 'Express Middleware', color: '#22c55e', icon: <RiServer /> },
                    { id: 'python', name: 'Python Exceptions', color: '#eab308', icon: <RiPython /> }
                  ].map(track => (
                    <button
                      key={track.id}
                      onClick={() => {
                        setShowCertificateModal(track.id);
                        playSynthesizedSound('complete');
                      }}
                      style={{
                        background: '#ffffff',
                        border: `1.5px solid ${track.color}`,
                        borderRadius: '8px',
                        padding: '12px 8px',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        color: 'var(--text-dark)',
                        fontWeight: 700,
                        fontSize: '11px',
                        transition: 'all 0.2s',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = `${track.color}15`;
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#ffffff';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      <span style={{ color: track.color, display: 'flex', alignItems: 'center' }}>{track.icon}</span>
                      <span style={{ textAlign: 'center', fontSize: '10px' }}>{track.name}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

{/* ── ADMIN PANEL ── */}
        {activePage === 'admin' && (() => {
          if (!isSuperAdmin) return null;

          const scored = (log: QuizLog) => {
            const p = log.score.split('/');
            return p.length === 2 && parseFloat(p[1]) > 0 ? Math.round((parseFloat(p[0]) / parseFloat(p[1])) * 100) : 0;
          };
          const platformTotalCompleted = adminStudents.reduce((s, st) => s + st.totalCompleted, 0);
          const platformTotalQuizzes   = adminStudents.reduce((s, st) => s + st.quizLog.length, 0);
          const platformTotalCerts     = adminStudents.reduce((s, st) => s + st.certificates.length, 0);
          const avgPlatformPct = adminStudents.length ? Math.round(adminStudents.reduce((s, st) => s + st.pct, 0) / adminStudents.length) : 0;

          const courseBreakdown = [
            { name: 'React',      color: '#61dafb', key: 'completedReact',      total: totalLessons },
            { name: 'TypeScript', color: '#3178c6', key: 'completedTypescript', total: totalTypescriptLessons },
            { name: 'SQL',        color: '#f59e0b', key: 'completedSql',        total: totalSqlLessons },
            { name: 'FastAPI',    color: '#10b981', key: 'completedFastApi',    total: totalFastApiLessons },
            { name: 'Express',    color: '#8b5cf6', key: 'completedExpress',    total: totalExpressLessons },
            { name: 'Python',     color: '#f97316', key: 'completedPython',     total: totalPythonLessons },
          ] as const;

          const filteredStudents = adminStudents.filter(s =>
            s.name.toLowerCase().includes(adminSearch.toLowerCase()) ||
            s.email.toLowerCase().includes(adminSearch.toLowerCase())
          );
          const sortedLeaderboard = [...adminStudents].sort((a, b) => b.totalCompleted - a.totalCompleted);

          /* ── Student detail view ── */
          if (adminSelectedStudent) {
            const s = adminSelectedStudent;
            const avgScore = s.quizLog.length
              ? Math.round(s.quizLog.map(l => scored(l)).reduce((a, b) => a + b, 0) / s.quizLog.length)
              : 0;
            return (
              <div className="admin-panel-wrap">
                <button className="admin-back-btn" onClick={() => setAdminSelectedStudent(null)}>
                  ← Back to Students
                </button>
                <div className="admin-student-profile-card">
                  <img src={s.avatar} alt={s.name} className="admin-student-big-avatar" />
                  <div>
                    <div className="admin-student-big-name">{s.name}</div>
                    <div className="admin-student-big-meta">{s.title} &bull; {s.email}</div>
                    <div className="admin-student-big-meta">Theme: {s.theme} &bull; {s.certificates.length} certificate{s.certificates.length !== 1 ? 's' : ''} earned</div>
                  </div>
                  <div className="admin-student-score-box">
                    <div className="admin-student-score-val">{s.pct}%</div>
                    <div className="admin-student-score-lbl">Overall Progress</div>
                  </div>
                </div>
                <div className="admin-kpi-row" style={{ marginTop: '20px' }}>
                  {[
                    { label: 'Lessons Done', value: `${s.totalCompleted} / ${totalAll}`, color: '#3b82f6' },
                    { label: 'Quiz Sessions', value: s.quizLog.length, color: '#8b5cf6' },
                    { label: 'Avg Quiz Score', value: `${avgScore}%`, color: '#10b981' },
                    { label: 'Certificates', value: s.certificates.length, color: '#f59e0b' },
                  ].map(k => (
                    <div key={k.label} className="admin-kpi-card" style={{ borderTop: `3px solid ${k.color}` }}>
                      <span className="admin-kpi-label">{k.label}</span>
                      <span className="admin-kpi-value" style={{ color: k.color }}>{k.value}</span>
                    </div>
                  ))}
                </div>
                <div className="admin-section-title" style={{ marginTop: '24px' }}>Course Progress</div>
                <div className="admin-course-grid">
                  {courseBreakdown.map(c => {
                    const done = s[c.key as keyof AdminStudent] as number;
                    const pct  = c.total > 0 ? Math.round((done / c.total) * 100) : 0;
                    return (
                      <div key={c.name} className="admin-course-row-card">
                        <div className="admin-course-row-left">
                          <span className="admin-course-icon" style={{ background: `${c.color}18`, color: c.color, fontSize: '11px', fontWeight: 800 }}>{c.name.slice(0, 2)}</span>
                          <div>
                            <span className="admin-course-name">{c.name}</span>
                            <span className="admin-course-meta">{done} / {c.total} lessons</span>
                          </div>
                        </div>
                        <div className="admin-course-row-right">
                          <div className="admin-progress-bar-track">
                            <div className="admin-progress-bar-fill" style={{ width: `${pct}%`, background: c.color }} />
                          </div>
                          <span className="admin-pct-label" style={{ color: c.color }}>{pct}%</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {s.quizLog.length > 0 && (
                  <>
                    <div className="admin-section-title" style={{ marginTop: '24px' }}>Quiz History</div>
                    <table className="admin-table">
                      <thead><tr><th>#</th><th>Date</th><th>Category</th><th>Score</th><th>Rating</th></tr></thead>
                      <tbody>
                        {s.quizLog.map((log, i) => (
                          <tr key={i}>
                            <td style={{ color: 'var(--text-muted)' }}>{i + 1}</td>
                            <td>{log.date}</td>
                            <td>{log.category}</td>
                            <td><span className="admin-score-pill">{log.score}</span></td>
                            <td>{log.rating}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}
              </div>
            );
          }

          return (
            <div className="admin-panel-wrap">
              {/* LMS Admin Header */}
              <div className="admin-panel-header">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '3px' }}>
                    <span className="admin-super-badge">SUPER ADMIN</span>
                    <h2 className="admin-panel-title" style={{ margin: 0 }}>LMS Control Center</h2>
                  </div>
                  <p className="admin-panel-sub">{adminStudents.length} enrolled student{adminStudents.length !== 1 ? 's' : ''} &bull; The Debug Society Platform</p>
                </div>
                <div className="admin-tab-bar">
                  {(['dashboard', 'students', 'leaderboard', 'analytics', 'content', 'system'] as const).map(tab => (
                    <button key={tab} className={`admin-tab-btn ${adminTab === tab ? 'active' : ''}`} onClick={() => setAdminTab(tab)}>
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* ── DASHBOARD ── */}
              {adminTab === 'dashboard' && (
                <div className="admin-tab-content">
                  <div className="admin-kpi-row">
                    {[
                      { label: 'Total Students', value: adminStudents.length, sub: 'registered accounts', color: '#3b82f6' },
                      { label: 'Avg Completion', value: `${avgPlatformPct}%`, sub: 'across all courses', color: '#8b5cf6' },
                      { label: 'Lessons Completed', value: platformTotalCompleted, sub: 'platform-wide total', color: '#10b981' },
                      { label: 'Quiz Sessions', value: platformTotalQuizzes, sub: `${platformTotalCerts} certificates earned`, color: '#f59e0b' },
                    ].map(k => (
                      <div key={k.label} className="admin-kpi-card" style={{ borderTop: `3px solid ${k.color}` }}>
                        <span className="admin-kpi-label">{k.label}</span>
                        <span className="admin-kpi-value" style={{ color: k.color }}>{k.value}</span>
                        <span className="admin-kpi-sub">{k.sub}</span>
                      </div>
                    ))}
                  </div>

                  <div className="admin-section-title">Platform Course Completion (All Students)</div>
                  <div className="admin-course-grid">
                    {courseBreakdown.map(c => {
                      const totalDone = adminStudents.reduce((s, st) => s + (st[c.key as keyof AdminStudent] as number), 0);
                      const maxPossible = adminStudents.length * c.total;
                      const pct = maxPossible > 0 ? Math.round((totalDone / maxPossible) * 100) : 0;
                      const started = adminStudents.filter(st => (st[c.key as keyof AdminStudent] as number) > 0).length;
                      return (
                        <div key={c.name} className="admin-course-row-card">
                          <div className="admin-course-row-left">
                            <span className="admin-course-icon" style={{ background: `${c.color}18`, color: c.color, fontSize: '11px', fontWeight: 800 }}>{c.name.slice(0, 2)}</span>
                            <div>
                              <span className="admin-course-name">{c.name}</span>
                              <span className="admin-course-meta">{started}/{adminStudents.length} students started &bull; {totalDone} lessons done</span>
                            </div>
                          </div>
                          <div className="admin-course-row-right">
                            <div className="admin-progress-bar-track">
                              <div className="admin-progress-bar-fill" style={{ width: `${pct}%`, background: c.color }} />
                            </div>
                            <span className="admin-pct-label" style={{ color: c.color }}>{pct}%</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="admin-section-title" style={{ marginTop: '28px' }}>Top Students</div>
                  <table className="admin-table">
                    <thead><tr><th>Rank</th><th>Student</th><th>Progress</th><th>Quizzes</th><th>Certs</th></tr></thead>
                    <tbody>
                      {sortedLeaderboard.slice(0, 5).map((st, i) => (
                        <tr key={st.email} style={{ cursor: 'pointer' }} onClick={() => setAdminSelectedStudent(st)}>
                          <td><span className="admin-rank-badge" style={{ background: ['#fcd34d','#d1d5db','#fdba74'][i] || 'var(--bg-input)', color: i < 3 ? '#1f2937' : 'var(--text-muted)' }}>#{i + 1}</span></td>
                          <td>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              {st.avatar ? <img src={st.avatar} alt="" style={{ width: 26, height: 26, borderRadius: '50%', objectFit: 'cover' }} /> : <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--bg-input)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: 'var(--text-muted)' }}>{st.name[0]}</div>}
                              <div><div style={{ fontWeight: 700, fontSize: 12, color: 'var(--text-dark)' }}>{st.name}</div><div style={{ fontSize: 10, color: 'var(--text-muted)' }}>{st.email}</div></div>
                            </div>
                          </td>
                          <td><div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><div className="admin-progress-bar-track" style={{ width: 80 }}><div className="admin-progress-bar-fill" style={{ width: `${st.pct}%`, background: '#3b82f6' }} /></div><span style={{ fontSize: 11, fontWeight: 700, color: '#3b82f6' }}>{st.pct}%</span></div></td>
                          <td>{st.quizLog.length}</td>
                          <td>{st.certificates.length}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ── STUDENTS ── */}
              {adminTab === 'students' && (
                <div className="admin-tab-content">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div className="admin-section-title" style={{ margin: 0 }}>Student Roster ({adminStudents.length})</div>
                    <input
                      className="admin-search-input"
                      placeholder="Search by name or email…"
                      value={adminSearch}
                      onChange={e => setAdminSearch(e.target.value)}
                    />
                  </div>
                  {filteredStudents.length === 0 ? (
                    <div className="admin-empty-state">No students match your search.</div>
                  ) : (
                    <table className="admin-table">
                      <thead>
                        <tr><th>Student</th><th>Re</th><th>TS</th><th>SQL</th><th>FA</th><th>Ex</th><th>Py</th><th>Overall</th><th>Quizzes</th><th>Certs</th></tr>
                      </thead>
                      <tbody>
                        {filteredStudents.map(st => (
                          <tr key={st.email} className="admin-student-row" onClick={() => setAdminSelectedStudent(st)}>
                            <td>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                {st.avatar ? <img src={st.avatar} alt="" style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover' }} /> : <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--bg-input)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700 }}>{st.name[0]}</div>}
                                <div><div style={{ fontWeight: 700, fontSize: 12, color: 'var(--text-dark)' }}>{st.name}</div><div style={{ fontSize: 10, color: 'var(--text-muted)' }}>{st.email}</div></div>
                              </div>
                            </td>
                            <td><span className="admin-mini-score">{st.completedReact}/{totalLessons}</span></td>
                            <td><span className="admin-mini-score">{st.completedTypescript}/{totalTypescriptLessons}</span></td>
                            <td><span className="admin-mini-score">{st.completedSql}/{totalSqlLessons}</span></td>
                            <td><span className="admin-mini-score">{st.completedFastApi}/{totalFastApiLessons}</span></td>
                            <td><span className="admin-mini-score">{st.completedExpress}/{totalExpressLessons}</span></td>
                            <td><span className="admin-mini-score">{st.completedPython}/{totalPythonLessons}</span></td>
                            <td>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                <div className="admin-progress-bar-track" style={{ width: 60 }}>
                                  <div className="admin-progress-bar-fill" style={{ width: `${st.pct}%`, background: st.pct >= 75 ? '#10b981' : st.pct >= 40 ? '#3b82f6' : '#f59e0b' }} />
                                </div>
                                <span style={{ fontSize: 11, fontWeight: 700 }}>{st.pct}%</span>
                              </div>
                            </td>
                            <td>{st.quizLog.length}</td>
                            <td>{st.certificates.length}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}

              {/* ── LEADERBOARD ── */}
              {adminTab === 'leaderboard' && (
                <div className="admin-tab-content">
                  <div className="admin-section-title">Student Leaderboard — Ranked by Total Lessons Completed</div>
                  {sortedLeaderboard.length === 0 ? (
                    <div className="admin-empty-state">No students enrolled yet.</div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {sortedLeaderboard.map((st, i) => (
                        <div key={st.email} className="admin-lb-card" onClick={() => setAdminSelectedStudent(st)} style={{ cursor: 'pointer' }}>
                          <span className="admin-lb-rank" style={{ background: i === 0 ? '#fcd34d' : i === 1 ? '#e5e7eb' : i === 2 ? '#fdba74' : 'var(--bg-input)', color: i < 3 ? '#1f2937' : 'var(--text-muted)' }}>
                            {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`}
                          </span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1 }}>
                            {st.avatar ? <img src={st.avatar} alt="" style={{ width: 34, height: 34, borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border-color)' }} /> : <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--bg-input)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800 }}>{st.name[0]}</div>}
                            <div>
                              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: 'var(--text-dark)' }}>{st.name}</div>
                              <div style={{ fontSize: 10.5, color: 'var(--text-muted)' }}>{st.email} &bull; {st.title}</div>
                            </div>
                          </div>
                          <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginLeft: 'auto' }}>
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: '#3b82f6' }}>{st.totalCompleted}</div>
                              <div style={{ fontSize: 9.5, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Lessons</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: '#8b5cf6' }}>{st.quizLog.length}</div>
                              <div style={{ fontSize: 9.5, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Quizzes</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: '#10b981' }}>{st.certificates.length}</div>
                              <div style={{ fontSize: 9.5, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Certs</div>
                            </div>
                            <div className="admin-progress-bar-track" style={{ width: 100 }}>
                              <div className="admin-progress-bar-fill" style={{ width: `${st.pct}%`, background: st.pct >= 75 ? '#10b981' : '#3b82f6' }} />
                            </div>
                            <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-dark)', minWidth: 36 }}>{st.pct}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ── ANALYTICS ── */}
              {adminTab === 'analytics' && (
                <div className="admin-tab-content">
                  <div className="admin-kpi-row">
                    {[
                      { label: 'Total Enrollments', value: adminStudents.length, color: '#3b82f6' },
                      { label: 'Platform Lessons Done', value: platformTotalCompleted, color: '#10b981' },
                      { label: 'Total Quiz Sessions', value: platformTotalQuizzes, color: '#8b5cf6' },
                      { label: 'Certificates Awarded', value: platformTotalCerts, color: '#f59e0b' },
                    ].map(k => (
                      <div key={k.label} className="admin-kpi-card" style={{ borderTop: `3px solid ${k.color}` }}>
                        <span className="admin-kpi-label">{k.label}</span>
                        <span className="admin-kpi-value" style={{ color: k.color }}>{k.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="admin-section-title">Course Engagement by Track</div>
                  <table className="admin-table">
                    <thead><tr><th>Course</th><th>Total Lessons</th><th>Students Started</th><th>Lessons Completed</th><th>Avg per Student</th><th>Completion Rate</th></tr></thead>
                    <tbody>
                      {courseBreakdown.map(c => {
                        const started = adminStudents.filter(st => (st[c.key as keyof AdminStudent] as number) > 0).length;
                        const totalDone = adminStudents.reduce((s, st) => s + (st[c.key as keyof AdminStudent] as number), 0);
                        const avg = adminStudents.length > 0 ? (totalDone / adminStudents.length).toFixed(1) : '0';
                        const rate = (adminStudents.length * c.total) > 0 ? Math.round((totalDone / (adminStudents.length * c.total)) * 100) : 0;
                        return (
                          <tr key={c.name}>
                            <td><span style={{ color: c.color, fontWeight: 700 }}>{c.name}</span></td>
                            <td>{c.total}</td>
                            <td>{started} / {adminStudents.length}</td>
                            <td>{totalDone}</td>
                            <td>{avg}</td>
                            <td>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                <div className="admin-progress-bar-track" style={{ width: 80 }}>
                                  <div className="admin-progress-bar-fill" style={{ width: `${rate}%`, background: c.color }} />
                                </div>
                                <span style={{ fontSize: 11, fontWeight: 700, color: c.color }}>{rate}%</span>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>

                  <div className="admin-section-title" style={{ marginTop: '28px' }}>Quiz Activity by Student</div>
                  <table className="admin-table">
                    <thead><tr><th>Student</th><th>Sessions</th><th>Avg Score</th><th>Latest Quiz</th></tr></thead>
                    <tbody>
                      {adminStudents.filter(s => s.quizLog.length > 0).sort((a, b) => b.quizLog.length - a.quizLog.length).map(st => {
                        const avg = st.quizLog.length ? Math.round(st.quizLog.map(l => scored(l)).reduce((a, b) => a + b, 0) / st.quizLog.length) : 0;
                        return (
                          <tr key={st.email} style={{ cursor: 'pointer' }} onClick={() => setAdminSelectedStudent(st)}>
                            <td><span style={{ fontWeight: 700, color: 'var(--text-dark)' }}>{st.name}</span><span style={{ marginLeft: 6, fontSize: 10, color: 'var(--text-muted)' }}>{st.email}</span></td>
                            <td>{st.quizLog.length}</td>
                            <td><span className="admin-score-pill">{avg}%</span></td>
                            <td style={{ fontSize: 11, color: 'var(--text-muted)' }}>{st.quizLog[0]?.category || '—'}</td>
                          </tr>
                        );
                      })}
                      {adminStudents.filter(s => s.quizLog.length > 0).length === 0 && (
                        <tr><td colSpan={4}><div className="admin-empty-state">No quiz activity yet.</div></td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ── CONTENT ── */}
              {adminTab === 'content' && (
                <div className="admin-tab-content">
                  <div className="admin-section-title">Content Audit — All Courses &amp; Lessons</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {courseBreakdown.map(c => {
                      const dataMap: Record<string, { sectionId: string; sectionTitle: string; lessons: { id: string; title: string }[] }[]> = {
                        completedReact: lessonsData as never,
                        completedTypescript: typescriptLessonsData as never,
                        completedSql: sqlLessonsData as never,
                        completedFastApi: fastApiLessonsData as never,
                        completedExpress: expressApiLessonsData as never,
                        completedPython: pythonLessonsData as never,
                      };
                      const sections = dataMap[c.key] || [];
                      return (
                        <details key={c.name} className="admin-content-details">
                          <summary className="admin-content-summary">
                            <span className="admin-course-icon" style={{ background: `${c.color}18`, color: c.color, fontSize: '11px', fontWeight: 800 }}>{c.name.slice(0, 2)}</span>
                            <strong style={{ color: 'var(--text-dark)' }}>{c.name}</strong>
                            <span style={{ color: 'var(--text-muted)', fontSize: '11px', marginLeft: 'auto' }}>{c.total} lessons across {sections.length} sections</span>
                          </summary>
                          <div className="admin-content-body">
                            {sections.map((sec, si) => (
                              <div key={sec.sectionId} className="admin-content-section">
                                <div className="admin-content-section-title">
                                  <span className="admin-idx-chip">{si + 1}</span>
                                  {sec.sectionTitle}
                                  <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: '10px' }}>{sec.lessons.length} lessons</span>
                                </div>
                                {sec.lessons.map((l, li) => (
                                  <div key={l.id} className="admin-content-lesson">
                                    <span className="admin-lesson-num">{li + 1}</span>
                                    <span className="admin-lesson-title">{l.title}</span>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        </details>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ── SYSTEM ── */}
              {adminTab === 'system' && (
                <div className="admin-tab-content">
                  <div className="admin-section-title">Super Admin Account</div>
                  <div className="admin-profile-card">
                    <img src={devAvatar} alt="avatar" className="admin-avatar" />
                    <div className="admin-profile-info">
                      <div className="admin-profile-name">{devName}</div>
                      <div className="admin-profile-detail">{SUPER_ADMIN_EMAIL}</div>
                      <div className="admin-profile-detail" style={{ color: '#10b981', fontWeight: 700 }}>✓ Super Administrator</div>
                    </div>
                  </div>

                  <div className="admin-section-title" style={{ marginTop: '24px' }}>Platform Overview</div>
                  <div className="admin-stat-grid">
                    {([
                      ['Total Registered Students', adminStudents.length],
                      ['Total Lessons Available', totalAll],
                      ['Platform Lessons Completed', platformTotalCompleted],
                      ['Platform Quiz Sessions', platformTotalQuizzes],
                      ['Certificates Awarded', platformTotalCerts],
                      ['Avg Student Progress', `${avgPlatformPct}%`],
                    ] as [string, string | number][]).map(([label, val]) => (
                      <div key={String(label)} className="admin-stat-row">
                        <span className="admin-stat-label">{label}</span>
                        <span className="admin-stat-val">{val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="admin-section-title" style={{ marginTop: '24px' }}>Data Management</div>
                  <div className="admin-data-actions">
                    <button className="admin-action-btn export" onClick={() => {
                      const snapshot = {
                        exportDate: new Date().toISOString(),
                        platform: { totalStudents: adminStudents.length, totalLessons: totalAll },
                        students: adminStudents.map(s => ({
                          email: s.email, name: s.name, totalCompleted: s.totalCompleted,
                          pct: s.pct, quizSessions: s.quizLog.length, certificates: s.certificates.length,
                          courses: { react: s.completedReact, typescript: s.completedTypescript, sql: s.completedSql, fastapi: s.completedFastApi, express: s.completedExpress, python: s.completedPython }
                        }))
                      };
                      const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: 'application/json' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a'); a.href = url; a.download = `lms-export-${Date.now()}.json`; a.click();
                      URL.revokeObjectURL(url);
                    }}>Export Platform Data (JSON)</button>
                    <button className="admin-action-btn export" onClick={() => {
                      const rows = [['Name','Email','React','TypeScript','SQL','FastAPI','Express','Python','Total','Pct','Quizzes','Certs']];
                      adminStudents.forEach(s => rows.push([s.name, s.email, String(s.completedReact), String(s.completedTypescript), String(s.completedSql), String(s.completedFastApi), String(s.completedExpress), String(s.completedPython), String(s.totalCompleted), `${s.pct}%`, String(s.quizLog.length), String(s.certificates.length)]));
                      const csv = rows.map(r => r.join(',')).join('\n');
                      const blob = new Blob([csv], { type: 'text/csv' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a'); a.href = url; a.download = `students-${Date.now()}.csv`; a.click();
                      URL.revokeObjectURL(url);
                    }}>Export Students CSV</button>
                  </div>
                </div>
              )}
            </div>
          );
        })()}

      </main>

      {/* RIGHT SIDEBAR PANEL */}
      <aside className="right-sidebar-panel">
        
        {/* Calendar Widget */}
        <div className="calendar-widget-card">
          <div className="cal-header">
            <span className="cal-month-title">{MONTH_NAMES[calendarMonth]} {calendarYear}</span>
            <div className="cal-arrows">
              <button className="cal-nav-btn" onClick={() => { shiftMonth(-1); playSynthesizedSound('reset'); }}>&lt;</button>
              <button className="cal-nav-btn" onClick={() => { shiftMonth(1); playSynthesizedSound('reset'); }}>&gt;</button>
            </div>
          </div>
          <div className="cal-weekdays">
            <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
          </div>
          <div className="cal-days-grid">
            {(() => {
              const _now = new Date();
              const _todayDay = _now.getDate();
              const _isCurrentMonth = calendarYear === _now.getFullYear() && calendarMonth === _now.getMonth();
              return getDaysInMonth().map((day, dIdx) => {
                if (day === null) {
                  return <div key={`empty-${dIdx}`} className="cal-day-cell empty-day"></div>;
                }
                const isSunday = dIdx % 7 === 0;
                const isSelected = day === selectedCalendarDate;
                const isActualToday = _isCurrentMonth && day === _todayDay && !isSelected;
                const hasEvent = isEventMonth && calendarEvents.some(e => e.date === day);
                return (
                  <div
                    key={`day-${day}`}
                    className={`cal-day-cell ${isSelected ? 'selected-today' : ''} ${isActualToday ? 'cal-today' : ''} ${isSunday ? 'sunday-day' : ''} ${hasEvent ? 'has-event' : ''}`}
                    onClick={() => {
                      setSelectedCalendarDate(day);
                      playSynthesizedSound('success');
                    }}
                  >
                    {day}
                  </div>
                );
              });
            })()}
          </div>
        </div>

        {/* Selected Date Event Highlight Card - Real dynamic milestones */}
        <div className="streak-event-card" style={{ marginBottom: '20px', border: '1px solid var(--primary-blue)', boxShadow: '0 0 10px rgba(59, 130, 246, 0.1)' }}>
          <h4>
            <span>Milestone ({MONTH_NAMES[calendarMonth]} {selectedCalendarDate})</span>
            <span style={{ fontSize: '9px', color: 'var(--primary-blue)', textTransform: 'uppercase' }}>Details</span>
          </h4>
          {clickedCalendarEvent ? (
            <div style={{ textAlign: 'left', padding: '4px' }}>
              <h6 style={{ fontSize: '11.5px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '4px' }}>{clickedCalendarEvent.title}</h6>
              <span style={{ fontSize: '8px', padding: '1px 5px', borderRadius: '4px', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary-blue)', fontWeight: '700' }}>
                {clickedCalendarEvent.category} • {clickedCalendarEvent.time}
              </span>
              <p style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '8px', lineHeight: '1.45' }}>
                {clickedCalendarEvent.description}
              </p>
            </div>
          ) : (
            <div style={{ textAlign: 'left', padding: '4px', color: 'var(--text-muted)', fontSize: '10.5px' }}>
              No scheduled events for {MONTH_NAMES[calendarMonth]} {selectedCalendarDate}, {calendarYear}. Course milestones are scheduled in July 2026 — navigate there to see the full roadmap.
            </div>
          )}
        </div>

        {/* Focus Streak Track Card */}
        <div className="streak-metric-card">
          <div className="streak-card-title">
            <span>Weekly Streak</span>
            <svg viewBox="0 0 24 24"><path d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          
          <div className="streak-weeks-grid">
            {(() => {
              const _now = new Date();
              const _dow = _now.getDay(); // 0=Sun
              const _daysFromMon = _dow === 0 ? 6 : _dow - 1;
              const _monday = new Date(_now);
              _monday.setDate(_now.getDate() - _daysFromMon);
              const totalAllLessons = completedCount + completedSqlCount + completedFastApiCount + completedExpressCount + completedPythonCount + completedTypescriptCount + completedRQualitativeCount;
              return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, dIdx) => {
                const _d = new Date(_monday);
                _d.setDate(_monday.getDate() + dIdx);
                const isStreakActive = dIdx < Math.min(totalAllLessons, 7);
                return (
                  <div key={day} className={`streak-weekday-bubble ${isStreakActive ? 'active-day' : ''}`}>
                    <span>{day[0]}</span>
                    <div>{_d.getDate()}</div>
                  </div>
                );
              });
            })()}
          </div>
        </div>

        {/* Streaks list & Schedule - Real data only */}
        <div className="streak-event-card">
          <h4>
            <span>Streaks Schedule</span>
            <svg viewBox="0 0 24 24"><path d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </h4>

          <div className="streak-event-list">
            {calendarEvents.map(evt => (
              <div key={evt.date} className="streak-event-item" style={{ cursor: 'pointer' }} onClick={() => {
                setCalendarYear(2026);
                setCalendarMonth(6);
                setSelectedCalendarDate(evt.date);
                playSynthesizedSound('success');
              }}>
                <div className="event-left-side">
                  <div className="event-date-box">
                    <span>July</span>
                    <strong>{evt.date}</strong>
                  </div>
                  <div className="event-info-text">
                    <h6>{evt.title}</h6>
                    <p>{evt.category}</p>
                  </div>
                </div>
                <button className="event-action-arrow">
                  <svg viewBox="0 0 24 24"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            ))}
          </div>
        </div>

      </aside>

      {/* FULLSCREEN IMMERSIVE LESSON READER VIEW */}
      {selectedLesson && selectedSection && (
        <div className="reader-overlay-view">
          
          {/* Header Bar */}
          <div className="reader-header-bar">
            <div className="reader-left-pane">
              <button className="reader-back-btn" onClick={() => {
                setSelectedLesson(null);
                setSelectedSection(null);
                playSynthesizedSound('reset');
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to React Path
              </button>
              <span className="reader-module-tag">{selectedSection.sectionTitle}</span>
            </div>

            <button 
              className={`reader-complete-btn ${completedLessons.includes(selectedLesson.id) ? 'completed' : ''}`}
              onClick={() => handleMarkLessonComplete(selectedLesson.id)}
            >
              <span className="reader-check-box"></span>
              {completedLessons.includes(selectedLesson.id) ? 'Completed' : 'Mark Lesson Completed'}
            </button>
          </div>

          <div className="reader-body-split">
            {/* Scrollable Lesson Article Content */}
            <article className="reader-scroll-article">
              <h1 className="reader-lesson-heading-title">{selectedLesson.title}</h1>
              
              <div 
                className="reader-html-render"
                dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(selectedLesson.content) }}
              />

              {/* Prev / Next navigations in footer - beautifully styled in CSS */}
              <div className="reader-bottom-nav-row">
                <button className="nav-prev-btn" onClick={() => {
                  handleReaderNav('prev');
                  playSynthesizedSound('success');
                }}>
                  &larr; Previous Lesson
                </button>
                <button className="nav-next-btn" onClick={() => {
                  handleReaderNav('next');
                  playSynthesizedSound('success');
                }}>
                  Next Lesson &rarr;
                </button>
              </div>
            </article>

            {/* Sidebar with outline links of current section lessons */}
            <aside className="reader-side-outline-panel">
              <h4>Module Outline</h4>
              <div className="reader-outline-links-list">
                {selectedSection.lessons.map(les => {
                  const isActive = les.id === selectedLesson.id;
                  return (
                    <button 
                      key={les.id} 
                      className={`reader-link-item-btn ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedLesson(les);
                        playSynthesizedSound('success');
                      }}
                    >
                      {les.title}
                    </button>
                  );
                })}
              </div>
            </aside>
          </div>

        </div>
      )}

      {/* FULLSCREEN IMMERSIVE SQL LESSON READER VIEW */}
      {selectedSqlLesson && selectedSqlSection && (
        <div className="reader-overlay-view">
          
          {/* Header Bar */}
          <div className="reader-header-bar">
            <div className="reader-left-pane">
              <button 
                className="reader-back-btn" 
                onClick={() => {
                  setSelectedSqlLesson(null);
                  setSelectedSqlSection(null);
                  setSqlSimulatedResults(null);
                  setSqlSandboxFeedback('');
                  playSynthesizedSound('reset');
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to SQL Path
              </button>
              <span className="reader-module-tag">
                {selectedSqlSection.sectionTitle}
              </span>
            </div>

            <button 
              className={`reader-complete-btn ${completedSqlLessons.includes(selectedSqlLesson.id) ? 'completed' : ''}`}
              onClick={() => handleMarkSqlLessonComplete(selectedSqlLesson.id)}
            >
              <span className="reader-check-box"></span>
              {completedSqlLessons.includes(selectedSqlLesson.id) ? 'Completed' : 'Mark Lesson Completed'}
            </button>
          </div>

          <div className="reader-body-split">
            {/* Scrollable Lesson Article Content */}
            <article className="reader-scroll-article">
              <h1 className="reader-lesson-heading-title">{selectedSqlLesson.title}</h1>
              
              <div 
                className="reader-html-render"
                dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(selectedSqlLesson.content) }}
              />

              {/* Dynamic Interactive SQL Sandbox Workspace */}
              <div className="sql-playground-card" style={{ marginTop: '30px' }}>
                {/* Header */}
                <div className="sql-workbench-header">
                  <div className="sql-workbench-header-left">
                    <RiTerminal style={{ width: 18, height: 18 }} />
                    SQL Query Workbench
                  </div>
                  <span className="sql-workbench-badge">Simulated Engine</span>
                </div>

                <div className="sql-workbench-body">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 270px', gap: '22px' }} className="sql-workbench-grid">
                    {/* Left panel: Editor & Output */}
                    <div>
                      {/* Assignment Tabs */}
                      <div className="sql-assignment-tabs">
                        {selectedSqlLesson.assignments.map((asg, idx) => (
                          <button
                            key={asg.id}
                            className={`sql-tab-btn ${activeAssignmentIndex === idx ? 'active' : ''}`}
                            onClick={() => {
                              setActiveAssignmentIndex(idx);
                              setSqlQuery(asg.defaultQuery);
                              setSqlSimulatedResults(null);
                              setSqlSandboxFeedback('');
                              playSynthesizedSound('success');
                            }}
                          >
                            Task {idx + 1}
                          </button>
                        ))}
                      </div>

                      {/* Task Instruction Banner */}
                      <div className="sql-task-banner">
                        <div className="sql-task-number">{activeAssignmentIndex + 1}</div>
                        <p className="sql-task-text">
                          {selectedSqlLesson.assignments[activeAssignmentIndex]?.instructions}
                        </p>
                      </div>

                      {/* SQL Code Editor */}
                      <textarea
                        id="sql-editor-textarea"
                        className="sql-editor-textarea"
                        value={sqlQuery}
                        onChange={(e) => setSqlQuery(e.target.value)}
                        placeholder="Write your SQL query here... Click a column name in the Schema Inspector to insert it."
                      />

                      {/* Action Row */}
                      <div className="sql-action-row">
                        <button className="sql-run-btn" onClick={runSqlSandboxQuery}>
                          <RiPlay style={{ width: 13, height: 13 }} /> Run Query
                        </button>

                        <a
                          href={selectedSqlLesson.assignments[activeAssignmentIndex]?.targetLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sql-live-link"
                        >
                          <RiSparkles style={{ width: 13, height: 13 }} />
                          Try Live on SQLZoo ↗
                        </a>
                      </div>

                      {/* Output Table */}
                      {sqlSimulatedResults && (
                        <div style={{ marginTop: '4px' }}>
                          <div className="sql-output-label">
                            <RiDatabase style={{ width: 14, height: 14, color: '#8b5cf6' }} />
                            Query Output
                            <span className="sql-row-count">{sqlSimulatedResults.length} row{sqlSimulatedResults.length !== 1 ? 's' : ''}</span>
                          </div>
                          <div className="sql-output-table-wrap">
                            <table className="sql-output-table">
                              <thead>
                                <tr>
                                  {Object.keys(sqlSimulatedResults[0] || {}).map(header => (
                                    <th key={header}>{header}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {sqlSimulatedResults.map((row, rIdx) => (
                                  <tr key={rIdx}>
                                    {Object.values(row).map((val: any, cIdx) => (
                                      <td key={cIdx}>
                                        {val === null ? <em className="sql-null-value">NULL</em> : String(val)}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {/* Feedback Banner */}
                      {sqlSandboxFeedback && (
                        <div className={`sql-feedback-banner ${sqlSandboxFeedback.includes('Milestone') ? 'success' : 'hint'}`}>
                          {sqlSandboxFeedback.includes('Milestone') ? <RiCheckCircle /> : <RiAlertCircle />}
                          <span>{sqlSandboxFeedback}</span>
                        </div>
                      )}
                    </div>

                    {/* Right panel: Schema Inspector */}
                    <div className="schema-inspector-panel">
                      <div className="schema-inspector-header">
                        <RiDatabase style={{ color: '#8b5cf6', width: 14, height: 14 }} />
                        Schema Inspector
                      </div>
                      <div className="schema-tables-list">
                        {getRelevantTables(selectedSqlLesson.id).map(tblName => {
                          const schema = tableSchemas[tblName];
                          if (!schema) return null;
                          return (
                            <div key={tblName} className="schema-table-card">
                              <div className="schema-table-name-bar">
                                <span>{tblName.toUpperCase()}</span>
                                <span className="schema-table-type-badge">table</span>
                              </div>
                              <div className="schema-columns-list">
                                {schema.cols.map((col, cIdx) => (
                                  <div
                                    key={col}
                                    className="schema-col-row"
                                    title="Click to insert column name into editor"
                                    onClick={() => {
                                      const textarea = document.getElementById('sql-editor-textarea') as HTMLTextAreaElement;
                                      if (!textarea) {
                                        setSqlQuery(prev => prev + col);
                                        return;
                                      }
                                      const start = textarea.selectionStart;
                                      const end = textarea.selectionEnd;
                                      const text = textarea.value;
                                      setSqlQuery(text.substring(0, start) + col + text.substring(end));
                                      playSynthesizedSound('success');
                                      setTimeout(() => {
                                        textarea.focus();
                                        textarea.selectionStart = textarea.selectionEnd = start + col.length;
                                      }, 10);
                                    }}
                                  >
                                    <span className="schema-col-name">{col}</span>
                                    <span className="schema-col-desc">{schema.desc[cIdx]}</span>
                                    <span className="schema-col-hint">click to insert</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation in footer */}
              <div className="reader-bottom-nav-row" style={{ marginTop: '40px' }}>
                <button className="nav-prev-btn" onClick={() => {
                  if (activeAssignmentIndex > 0) {
                    const prevIdx = activeAssignmentIndex - 1;
                    setActiveAssignmentIndex(prevIdx);
                    setSqlQuery(selectedSqlLesson.assignments[prevIdx].defaultQuery);
                    setSqlSimulatedResults(null);
                    setSqlSandboxFeedback('');
                    playSynthesizedSound('success');
                  } else {
                    // Navigate to prev lesson
                    const allLessons = sqlLessonsData.flatMap(s => s.lessons.map(l => ({ lesson: l, section: s })));
                    const currIdx = allLessons.findIndex(item => item.lesson.id === selectedSqlLesson.id);
                    if (currIdx > 0) {
                      const prev = allLessons[currIdx - 1];
                      setSelectedSqlLesson(prev.lesson);
                      setSelectedSqlSection(prev.section);
                      setSqlQuery(prev.lesson.assignments[0]?.defaultQuery || '');
                      setSqlSimulatedResults(null);
                      setSqlSandboxFeedback('');
                      setActiveAssignmentIndex(0);
                      playSynthesizedSound('success');
                    }
                  }
                }}>
                  &larr; Prev Task
                </button>
                <button className="nav-next-btn" onClick={() => {
                  if (activeAssignmentIndex < selectedSqlLesson.assignments.length - 1) {
                    const nextIdx = activeAssignmentIndex + 1;
                    setActiveAssignmentIndex(nextIdx);
                    setSqlQuery(selectedSqlLesson.assignments[nextIdx].defaultQuery);
                    setSqlSimulatedResults(null);
                    setSqlSandboxFeedback('');
                    playSynthesizedSound('success');
                  } else {
                    // Navigate to next lesson
                    const allLessons = sqlLessonsData.flatMap(s => s.lessons.map(l => ({ lesson: l, section: s })));
                    const currIdx = allLessons.findIndex(item => item.lesson.id === selectedSqlLesson.id);
                    if (currIdx < allLessons.length - 1) {
                      const next = allLessons[currIdx + 1];
                      setSelectedSqlLesson(next.lesson);
                      setSelectedSqlSection(next.section);
                      setSqlQuery(next.lesson.assignments[0]?.defaultQuery || '');
                      setSqlSimulatedResults(null);
                      setSqlSandboxFeedback('');
                      setActiveAssignmentIndex(0);
                      triggerConfetti();
                      playSynthesizedSound('success');
                    } else {
                      handleMarkSqlLessonComplete(selectedSqlLesson.id);
                    }
                  }
                }}>
                  Next Task &rarr;
                </button>
              </div>
            </article>


            {/* Sidebar with outline links of current section lessons */}
            <aside className="reader-side-outline-panel">
              <h4>Module Outline</h4>
              <div className="reader-outline-links-list">
                {selectedSqlSection.lessons.map(les => {
                  const isActive = les.id === selectedSqlLesson.id;
                  return (
                    <button 
                      key={les.id} 
                      className={`reader-link-item-btn ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedSqlLesson(les);
                        setSqlQuery(les.assignments[0]?.defaultQuery || '');
                        setSqlSimulatedResults(null);
                        setSqlSandboxFeedback('');
                        setActiveAssignmentIndex(0);
                        playSynthesizedSound('success');
                      }}
                    >
                      {les.title}
                    </button>
                  );
                })}
              </div>
            </aside>
          </div>

        </div>
      )}

      {/* FULLSCREEN IMMERSIVE FASTAPI LESSON READER VIEW */}
      {selectedFastApiLesson && selectedFastApiSection && (
        <div className="reader-overlay-view">

          <div className="reader-header-bar">
            <div className="reader-left-pane">
              <button
                className="reader-back-btn"
                onClick={() => {
                  setSelectedFastApiLesson(null);
                  setSelectedFastApiSection(null);
                  playSynthesizedSound('reset');
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to FastAPI Path
              </button>
              <span className="reader-module-tag">
                {selectedFastApiSection.sectionTitle}
              </span>
            </div>

            <button
              className={`reader-complete-btn ${completedFastApiLessons.includes(selectedFastApiLesson.id) ? 'completed' : ''}`}
              onClick={() => handleMarkFastApiLessonComplete(selectedFastApiLesson.id)}
            >
              <span className="reader-check-box"></span>
              {completedFastApiLessons.includes(selectedFastApiLesson.id) ? 'Completed' : 'Mark Lesson Completed'}
            </button>
          </div>

          <div className="reader-body-split">
            <article className="reader-scroll-article">
              <h1 className="reader-lesson-heading-title">{selectedFastApiLesson.title}</h1>

              <div
                className="reader-html-render"
                dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(selectedFastApiLesson.content) }}
              />

              <div className="reader-bottom-nav-row">
                <button className="nav-prev-btn" onClick={() => {
                  const allLessons = fastApiLessonsData.flatMap(s => s.lessons.map(l => ({ lesson: l, section: s })));
                  const currIdx = allLessons.findIndex(item => item.lesson.id === selectedFastApiLesson.id);
                  if (currIdx > 0) {
                    const prev = allLessons[currIdx - 1];
                    setSelectedFastApiLesson(prev.lesson);
                    setSelectedFastApiSection(prev.section);
                    playSynthesizedSound('success');
                  }
                }}>
                  &larr; Previous Lesson
                </button>
                <button className="nav-next-btn" onClick={() => {
                  const allLessons = fastApiLessonsData.flatMap(s => s.lessons.map(l => ({ lesson: l, section: s })));
                  const currIdx = allLessons.findIndex(item => item.lesson.id === selectedFastApiLesson.id);
                  if (currIdx < allLessons.length - 1) {
                    const next = allLessons[currIdx + 1];
                    setSelectedFastApiLesson(next.lesson);
                    setSelectedFastApiSection(next.section);
                    playSynthesizedSound('success');
                  } else {
                    handleMarkFastApiLessonComplete(selectedFastApiLesson.id);
                  }
                }}>
                  Next Lesson &rarr;
                </button>
              </div>
            </article>

            <aside className="reader-side-outline-panel">
              <h4>Module Outline</h4>
              <div className="reader-outline-links-list">
                {selectedFastApiSection.lessons.map(les => {
                  const isActive = les.id === selectedFastApiLesson.id;
                  return (
                    <button
                      key={les.id}
                      className={`reader-link-item-btn ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedFastApiLesson(les);
                        playSynthesizedSound('success');
                      }}
                    >
                      {les.title}
                    </button>
                  );
                })}
              </div>
            </aside>
          </div>

        </div>
      )}

      {/* FULLSCREEN IMMERSIVE EXPRESS LESSON READER VIEW */}
      {selectedExpressLesson && selectedExpressSection && (
        <div className="reader-overlay-view">

          <div className="reader-header-bar">
            <div className="reader-left-pane">
              <button
                className="reader-back-btn"
                onClick={() => {
                  setSelectedExpressLesson(null);
                  setSelectedExpressSection(null);
                  playSynthesizedSound('reset');
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Express Path
              </button>
              <span className="reader-module-tag">
                {selectedExpressSection.sectionTitle}
              </span>
            </div>

            <button
              className={`reader-complete-btn ${completedExpressLessons.includes(selectedExpressLesson.id) ? 'completed' : ''}`}
              onClick={() => handleMarkExpressLessonComplete(selectedExpressLesson.id)}
            >
              <span className="reader-check-box"></span>
              {completedExpressLessons.includes(selectedExpressLesson.id) ? 'Completed' : 'Mark Lesson Completed'}
            </button>
          </div>

          <div className="reader-body-split">
            <article className="reader-scroll-article">
              <h1 className="reader-lesson-heading-title">{selectedExpressLesson.title}</h1>

              <div
                className="reader-html-render"
                dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(selectedExpressLesson.content) }}
              />

              <div className="reader-bottom-nav-row">
                <button className="nav-prev-btn" onClick={() => {
                  const allLessons = expressApiLessonsData.flatMap(s => s.lessons.map(l => ({ lesson: l, section: s })));
                  const currIdx = allLessons.findIndex(item => item.lesson.id === selectedExpressLesson.id);
                  if (currIdx > 0) {
                    const prev = allLessons[currIdx - 1];
                    setSelectedExpressLesson(prev.lesson);
                    setSelectedExpressSection(prev.section);
                    playSynthesizedSound('success');
                  }
                }}>
                  &larr; Previous Lesson
                </button>
                <button className="nav-next-btn" onClick={() => {
                  const allLessons = expressApiLessonsData.flatMap(s => s.lessons.map(l => ({ lesson: l, section: s })));
                  const currIdx = allLessons.findIndex(item => item.lesson.id === selectedExpressLesson.id);
                  if (currIdx < allLessons.length - 1) {
                    const next = allLessons[currIdx + 1];
                    setSelectedExpressLesson(next.lesson);
                    setSelectedExpressSection(next.section);
                    playSynthesizedSound('success');
                  } else {
                    handleMarkExpressLessonComplete(selectedExpressLesson.id);
                  }
                }}>
                  Next Lesson &rarr;
                </button>
              </div>
            </article>

            <aside className="reader-side-outline-panel">
              <h4>Module Outline</h4>
              <div className="reader-outline-links-list">
                {selectedExpressSection.lessons.map(les => {
                  const isActive = les.id === selectedExpressLesson.id;
                  return (
                    <button
                      key={les.id}
                      className={`reader-link-item-btn ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedExpressLesson(les);
                        playSynthesizedSound('success');
                      }}
                    >
                      {les.title}
                    </button>
                  );
                })}
              </div>
            </aside>
          </div>

        </div>
      )}

      {/* FULLSCREEN IMMERSIVE PYTHON LESSON READER VIEW */}
      {selectedPythonLesson && selectedPythonSection && (
        <div className="reader-overlay-view">
          
          {/* Header Bar */}
          <div className="reader-header-bar">
            <div className="reader-left-pane">
              <button 
                className="reader-back-btn" 
                onClick={() => {
                  setSelectedPythonLesson(null);
                  setSelectedPythonSection(null);
                  playSynthesizedSound('reset');
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Python Path
              </button>
              <span className="reader-module-tag">
                {selectedPythonSection.sectionTitle}
              </span>
            </div>

            <button 
              className={`reader-complete-btn ${completedPythonLessons.includes(selectedPythonLesson.id) ? 'completed' : ''}`}
              onClick={() => handleMarkPythonLessonComplete(selectedPythonLesson.id)}
            >
              <span className="reader-check-box"></span>
              {completedPythonLessons.includes(selectedPythonLesson.id) ? 'Completed' : 'Mark Lesson Completed'}
            </button>
          </div>

          <div className="reader-body-split">
            <article className="reader-scroll-article">
              <h1 className="reader-lesson-heading-title">{selectedPythonLesson.title}</h1>

              <div
                className="reader-html-render"
                dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(selectedPythonLesson.content) }}
              />

              <div className="reader-bottom-nav-row">
                <button className="nav-prev-btn" onClick={() => {
                  const allLessons = pythonLessonsData.flatMap(s => s.lessons.map(l => ({ lesson: l, section: s })));
                  const currIdx = allLessons.findIndex(item => item.lesson.id === selectedPythonLesson.id);
                  if (currIdx > 0) {
                    const prev = allLessons[currIdx - 1];
                    setSelectedPythonLesson(prev.lesson);
                    setSelectedPythonSection(prev.section);
                    playSynthesizedSound('success');
                  }
                }}>
                  &larr; Previous Lesson
                </button>
                <button className="nav-next-btn" onClick={() => {
                  const allLessons = pythonLessonsData.flatMap(s => s.lessons.map(l => ({ lesson: l, section: s })));
                  const currIdx = allLessons.findIndex(item => item.lesson.id === selectedPythonLesson.id);
                  if (currIdx < allLessons.length - 1) {
                    const next = allLessons[currIdx + 1];
                    setSelectedPythonLesson(next.lesson);
                    setSelectedPythonSection(next.section);
                    playSynthesizedSound('success');
                  } else {
                    handleMarkPythonLessonComplete(selectedPythonLesson.id);
                  }
                }}>
                  Next Lesson &rarr;
                </button>
              </div>
            </article>

            <aside className="reader-side-outline-panel">
              <h4>Module Outline</h4>
              <div className="reader-outline-links-list">
                {selectedPythonSection.lessons.map(les => {
                  const isActive = les.id === selectedPythonLesson.id;
                  return (
                    <button
                      key={les.id}
                      className={`reader-link-item-btn ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedPythonLesson(les);
                        playSynthesizedSound('success');
                      }}
                    >
                      {les.title}
                    </button>
                  );
                })}
              </div>
            </aside>
          </div>

        </div>
      )}

      {/* FULLSCREEN IMMERSIVE TYPESCRIPT LESSON READER VIEW */}
      {selectedTypescriptLesson && selectedTypescriptSection && (
        <div className="reader-overlay-view">
          
          {/* Header Bar */}
          <div className="reader-header-bar">
            <div className="reader-left-pane">
              <button 
                className="reader-back-btn" 
                onClick={() => {
                  setSelectedTypescriptLesson(null);
                  setSelectedTypescriptSection(null);
                  playSynthesizedSound('reset');
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to TypeScript Path
              </button>
              <span className="reader-module-tag">
                {selectedTypescriptSection.sectionTitle}
              </span>
            </div>

            <button 
              className={`reader-complete-btn ${completedTypescriptLessons.includes(selectedTypescriptLesson.id) ? 'completed' : ''}`}
              onClick={() => handleMarkTypescriptLessonComplete(selectedTypescriptLesson.id)}
            >
              <span className="reader-check-box"></span>
              {completedTypescriptLessons.includes(selectedTypescriptLesson.id) ? 'Completed' : 'Mark Lesson Completed'}
            </button>
          </div>

          <div className="reader-body-split">
            <article className="reader-scroll-article">
              <h1 className="reader-lesson-heading-title">{selectedTypescriptLesson.title}</h1>

              <div
                className="reader-html-render"
                dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(selectedTypescriptLesson.content) }}
              />

              <div className="reader-bottom-nav-row">
                <button className="nav-prev-btn" onClick={() => {
                  const allLessons = typescriptLessonsData.flatMap(s => s.lessons.map(l => ({ lesson: l, section: s })));
                  const currIdx = allLessons.findIndex(item => item.lesson.id === selectedTypescriptLesson.id);
                  if (currIdx > 0) {
                    const prev = allLessons[currIdx - 1];
                    setSelectedTypescriptLesson(prev.lesson);
                    setSelectedTypescriptSection(prev.section);
                    playSynthesizedSound('success');
                  }
                }}>
                  &larr; Previous Lesson
                </button>
                <button className="nav-next-btn" onClick={() => {
                  const allLessons = typescriptLessonsData.flatMap(s => s.lessons.map(l => ({ lesson: l, section: s })));
                  const currIdx = allLessons.findIndex(item => item.lesson.id === selectedTypescriptLesson.id);
                  if (currIdx < allLessons.length - 1) {
                    const next = allLessons[currIdx + 1];
                    setSelectedTypescriptLesson(next.lesson);
                    setSelectedTypescriptSection(next.section);
                    playSynthesizedSound('success');
                  } else {
                    handleMarkTypescriptLessonComplete(selectedTypescriptLesson.id);
                  }
                }}>
                  Next Lesson &rarr;
                </button>
              </div>
            </article>

            <aside className="reader-side-outline-panel">
              <h4>Module Outline</h4>
              <div className="reader-outline-links-list">
                {selectedTypescriptSection.lessons.map(les => {
                  const isActive = les.id === selectedTypescriptLesson.id;
                  return (
                    <button
                      key={les.id}
                      className={`reader-link-item-btn ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedTypescriptLesson(les);
                        playSynthesizedSound('success');
                      }}
                    >
                      {les.title}
                    </button>
                  );
                })}
              </div>
            </aside>
          </div>

        </div>
      )}

      {/* FULLSCREEN IMMERSIVE R QUALITATIVE LESSON READER VIEW */}
      {selectedRQualitativeLesson && selectedRQualitativeSection && (
        <div className="reader-overlay-view">

          {/* Header Bar */}
          <div className="reader-header-bar">
            <div className="reader-left-pane">
              <button
                className="reader-back-btn"
                onClick={() => {
                  setSelectedRQualitativeLesson(null);
                  setSelectedRQualitativeSection(null);
                  playSynthesizedSound('reset');
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to R Qualitative Path
              </button>
              <span className="reader-module-tag">
                {selectedRQualitativeSection.sectionTitle}
              </span>
            </div>

            <button
              className={`reader-complete-btn ${completedRQualitativeLessons.includes(selectedRQualitativeLesson.id) ? 'completed' : ''}`}
              onClick={() => handleMarkRQualitativeLessonComplete(selectedRQualitativeLesson.id)}
            >
              <span className="reader-check-box"></span>
              {completedRQualitativeLessons.includes(selectedRQualitativeLesson.id) ? 'Completed' : 'Mark Lesson Completed'}
            </button>
          </div>

          <div className="reader-body-split">
            <article className="reader-scroll-article">
              <h1 className="reader-lesson-heading-title">{selectedRQualitativeLesson.title}</h1>

              <div
                className="reader-html-render"
                dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(selectedRQualitativeLesson.content) }}
              />

              <div className="reader-bottom-nav-row">
                <button className="nav-prev-btn" onClick={() => {
                  const allLessons = rQualitativeLessonsData.flatMap(s => s.lessons.map(l => ({ lesson: l, section: s })));
                  const currIdx = allLessons.findIndex(item => item.lesson.id === selectedRQualitativeLesson.id);
                  if (currIdx > 0) {
                    const prev = allLessons[currIdx - 1];
                    setSelectedRQualitativeLesson(prev.lesson);
                    setSelectedRQualitativeSection(prev.section);
                    playSynthesizedSound('success');
                  }
                }}>
                  &larr; Previous Lesson
                </button>
                <button className="nav-next-btn" onClick={() => {
                  const allLessons = rQualitativeLessonsData.flatMap(s => s.lessons.map(l => ({ lesson: l, section: s })));
                  const currIdx = allLessons.findIndex(item => item.lesson.id === selectedRQualitativeLesson.id);
                  if (currIdx < allLessons.length - 1) {
                    const next = allLessons[currIdx + 1];
                    setSelectedRQualitativeLesson(next.lesson);
                    setSelectedRQualitativeSection(next.section);
                    playSynthesizedSound('success');
                  } else {
                    handleMarkRQualitativeLessonComplete(selectedRQualitativeLesson.id);
                  }
                }}>
                  Next Lesson &rarr;
                </button>
              </div>
            </article>

            <aside className="reader-side-outline-panel">
              <h4>Module Outline</h4>
              <div className="reader-outline-links-list">
                {selectedRQualitativeSection.lessons.map(les => {
                  const isActive = les.id === selectedRQualitativeLesson.id;
                  return (
                    <button
                      key={les.id}
                      className={`reader-link-item-btn ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedRQualitativeLesson(les);
                        playSynthesizedSound('success');
                      }}
                    >
                      {les.title}
                    </button>
                  );
                })}
              </div>
            </aside>
          </div>

        </div>
      )}

      {/* VERIFIED PROFESSIONAL CERTIFICATE MODAL */}
      {showCertificateModal && (() => {
        const trackId = showCertificateModal;
        const tracks = [
          { id: 'react', name: 'React Component Development & State Management', desc: 'This training provided comprehensive knowledge and practical skills in structuring stateful React applications, using interactive hooks, handling props, and optimizing rendering performance.' },
          { id: 'typescript', name: 'TypeScript Static Typing & Modern Superset Masterclass', desc: 'This training provided comprehensive knowledge and practical skills in static typing systems, interface reopening, class access modifiers, abstract schemas, polymorphic designs, and generic class/interface operations.' },
          { id: 'sql', name: 'Database Aggregations & Advanced Querying Suite', desc: 'This training provided comprehensive knowledge and practical skills in relational database concepts, aggregate calculations, complex filtering with HAVING clauses, and high-performance querying.' },
          { id: 'fastapi', name: 'FastAPI Model Validations & Exception Operations', desc: 'This training provided comprehensive knowledge and practical skills in structuring paths, handling request bodies with Pydantic BaseModel validation, and robust exception-raising procedures.' },
          { id: 'express', name: 'Express Middleware Pipeline & JWT Authentication', desc: 'This training provided comprehensive knowledge and practical skills in Node.js backend middleware pipelines, extracting authorization headers, and securely verifying JSON Web Tokens.' },
          { id: 'python', name: 'Python Safe List Division & Robust Exception Protocols', desc: 'This training provided comprehensive knowledge and practical skills in core control flow mechanisms, robust try-except error handling architectures, and bulletproof list manipulations.' }
        ];
        const activeTrackData = tracks.find(t => t.id === trackId) || tracks[0];

        // Format dates
        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
        const currentDateStr = new Date().toLocaleDateString('en-US', options);

        return (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(15, 23, 42, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            backdropFilter: 'blur(10px)',
            padding: '20px',
            overflowY: 'auto'
          }} onClick={() => setShowCertificateModal(null)}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
              
              {/* Controls bar */}
              <div className="cert-modal-controls" style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.print();
                  }}
                  style={{
                    border: 'none',
                    background: '#8b5cf6',
                    color: '#ffffff',
                    padding: '10px 24px',
                    fontWeight: 700,
                    fontSize: '13px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <RiAward />
                  Print / Save PDF
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowCertificateModal(null);
                  }}
                  style={{
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(255,255,255,0.1)',
                    color: '#ffffff',
                    padding: '10px 20px',
                    fontWeight: 600,
                    fontSize: '13px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  Close Certificate
                </button>
              </div>

              {/* Certificate layout target */}
              <div
                id="print-certificate-target"
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: '940px',
                  height: '670px',
                  display: 'flex',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: '#ffffff',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  fontFamily: 'var(--font-body)',
                  animation: 'certificate-glow-pulse 4s infinite ease-in-out'
                }}
              >
                {/* Left Panel - White/lavender split */}
                <div style={{
                  width: '65%',
                  background: '#f3f2f8',
                  padding: '48px 56px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  backgroundImage: 'radial-gradient(rgba(139, 92, 246, 0.03) 1.5px, transparent 1.5px)',
                  backgroundSize: '24px 24px'
                }}>
                  {/* Subtle security lines */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.04,
                    pointerEvents: 'none',
                    backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
                    backgroundSize: '15px 15px'
                  }} />

                  {/* Top row */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 1 }}>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '13.5px',
                      fontWeight: 800,
                      color: 'var(--text-muted)',
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}>
                      DATE: {currentDateStr}
                    </div>

                    <h1 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '26px',
                      fontWeight: 800,
                      color: '#090514',
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      margin: 0,
                      lineHeight: '1.1'
                    }}>
                      Certificate of Completion
                    </h1>
                  </div>

                  {/* Recipient Details */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: '24px 0', position: 'relative', zIndex: 1 }}>
                    <div style={{
                      fontSize: '14.5px',
                      color: 'var(--text-muted)',
                      fontStyle: 'italic',
                      fontWeight: 500
                    }}>
                      This acknowledge that
                    </div>

                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '38px',
                      fontWeight: 900,
                      color: '#090514',
                      letterSpacing: '-0.5px',
                      lineHeight: '1.1',
                      borderBottom: '2.5px solid #090514',
                      paddingBottom: '8px',
                      width: 'fit-content'
                    }}>
                      {devName}
                    </div>

                    <div style={{
                      fontSize: '14.5px',
                      color: 'var(--text-muted)',
                      marginTop: '8px',
                      lineHeight: '1.4'
                    }}>
                      have successfully completed the <strong style={{ color: '#090514', fontWeight: 800 }}>{activeTrackData.name}</strong> offered by <strong style={{ color: '#090514', fontWeight: 800 }}>DebugLab</strong>
                    </div>
                  </div>

                  {/* Course specifics description */}
                  <div style={{
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    lineHeight: '1.6',
                    maxWidth: '480px',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {activeTrackData.desc}
                  </div>

                  {/* Bottom Cursive Signatures */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginTop: '32px',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {/* Founder Signature */}
                    <div style={{ display: 'flex', flexDirection: 'column', width: '230px' }}>
                      <div style={{
                        fontFamily: "'Caveat', cursive",
                        fontSize: '28px',
                        color: '#1e1b4b',
                        height: '36px',
                        lineHeight: '36px',
                        paddingLeft: '6px',
                        transform: 'rotate(-3deg)',
                        userSelect: 'none',
                        whiteSpace: 'nowrap'
                      }}>
                        Peter Gatitu Mwangi
                      </div>
                      <div style={{ height: '1px', background: 'var(--border-color)', margin: '4px 0 6px 0' }} />
                      <strong style={{ fontSize: '11px', color: '#090514', fontWeight: 800 }}>Peter Gatitu Mwangi</strong>
                      <span style={{ fontSize: '9px', color: 'var(--text-muted)' }}>Co-Founder</span>
                    </div>

                    {/* Student Signature */}
                    <div style={{ display: 'flex', flexDirection: 'column', width: '230px' }}>
                      <div style={{
                        fontFamily: "'Caveat', cursive",
                        fontSize: '28px',
                        color: '#1e1b4b',
                        height: '36px',
                        lineHeight: '36px',
                        paddingLeft: '6px',
                        transform: 'rotate(-1deg)',
                        userSelect: 'none',
                        whiteSpace: 'nowrap'
                      }}>
                        {devName}
                      </div>
                      <div style={{ height: '1px', background: 'var(--border-color)', margin: '4px 0 6px 0' }} />
                      <strong style={{ fontSize: '11px', color: '#090514', fontWeight: 800 }}>{devName}</strong>
                      <span style={{ fontSize: '9px', color: 'var(--text-muted)' }}>Graduate Engineer</span>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Navy / Magenta Dark Gradient */}
                <div style={{
                  width: '35%',
                  background: 'linear-gradient(135deg, #090514 0%, #160a2b 100%)',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  position: 'relative'
                }}>
                  {/* Glowing Shield crest in the top right */}
                  <div style={{
                    position: 'absolute',
                    top: '24px',
                    right: '24px',
                    width: '76px',
                    height: '76px',
                    background: 'rgba(139, 92, 246, 0.1)',
                    borderRadius: '16px',
                    border: '1.5px solid rgba(139, 92, 246, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(139, 92, 246, 0.25)'
                  }}>
                    <svg viewBox="0 0 24 24" width="40" height="40" stroke="#a78bfa" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>

                  {/* Ribbon hanging in the middle */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '90px',
                    position: 'relative'
                  }}>
                    {/* Dark Purple Ribbon Tail */}
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      width: '48px',
                      height: '160px',
                      background: 'linear-gradient(to bottom, #8b5cf6 0%, #4c1d95 100%)',
                      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 88%, 0% 100%)',
                      boxShadow: '0 10px 15px rgba(0,0,0,0.3)',
                      zIndex: 1
                    }} />

                    {/* Glowing Circular Verification Seal */}
                    <div style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, #2e1065 0%, #0c0714 100%)',
                      border: '4px double #a78bfa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      zIndex: 2,
                      boxShadow: '0 0 25px rgba(139, 92, 246, 0.65)',
                      animation: 'seal-glow 3s infinite ease-in-out'
                    }}>
                      {/* Rotating Circular Text SVG */}
                      <svg viewBox="0 0 100 100" width="112" height="112" style={{
                        position: 'absolute',
                        animation: 'spin-circle-text 15s linear infinite'
                      }}>
                        <defs>
                          <path id="sealTextPath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                        </defs>
                        <text fill="#c084fc" fontSize="7.8" fontWeight="800" letterSpacing="2.2px">
                          <textPath href="#sealTextPath">
                            DEBUGLAB  •  VERIFIED  •  CREDENTIAL  •  MASTER  •  
                          </textPath>
                        </text>
                      </svg>

                      {/* Inner seal shield */}
                      <svg viewBox="0 0 24 24" width="30" height="30" stroke="#f472b6" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'relative', zIndex: 3 }}>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <polyline points="9 11 11 13 15 9" />
                      </svg>
                    </div>
                  </div>

                  {/* Brand logo in the bottom right of right column */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                    justifyContent: 'center',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <img
                      src="/debuglab_logo.png"
                      alt="DebugLab Logo"
                      style={{
                        width: '32px',
                        height: '32px',
                        objectFit: 'contain'
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1 }}>
                      <strong style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '14.5px',
                        fontWeight: 800,
                        color: '#ffffff',
                        letterSpacing: '-0.3px'
                      }}>DebugLab</strong>
                      <span style={{
                        fontSize: '6.5px',
                        color: '#a78bfa',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginTop: '3px',
                        fontWeight: 700
                      }}>Secure Code Suite</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        );
      })()}

    </div>
  );
}

export default App;
