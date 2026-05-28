export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex?: number;
  isCode?: boolean;
  starterCode?: string;
  correctAnswerKeywords?: string[];
}

export interface QuizCategory {
  id: string;
  courseId: string; // 'react' | 'sql' | 'fastapi' | 'express' | 'python'
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export const quizzesData: QuizCategory[] = [
  // ==================== REACT TRACK ====================
  {
    id: "react-core",
    courseId: "react",
    title: "React Core & Component Architecture",
    description: "Validate your knowledge on functional components, nesting, JSX compiling, and unidirectional props flows.",
    questions: [
      {
        question: "What is JSX under the hood in React?",
        options: [
          "A direct HTML string parsed by the web browser",
          "Syntactic sugar that compiles to React.createElement or jsx function calls",
          "A custom XML format requiring separate web sockets to load",
          "A pre-processed CSS wrapper"
        ],
        answerIndex: 1
      },
      {
        question: "Write a React component 'Welcome' that returns a simple '<h1>Hello World</h1>' element.",
        options: [],
        isCode: true,
        starterCode: `import React from 'react';\n\nfunction Welcome() {\n  // Write your React return statement here\n  \n}`,
        correctAnswerKeywords: ["return", "<h1>", "Hello World", "</h1>"]
      },
      {
        question: "How do you pass data from a parent component down to a child component?",
        options: [
          "Using browser local storage structures",
          "Via state hook parameter assignments",
          "Using props passed as tag attributes",
          "Through window-global parameters"
        ],
        answerIndex: 2
      }
    ]
  },
  {
    id: "react-hooks",
    courseId: "react",
    title: "States, Effects & Lifecycles",
    description: "Diagnostic challenges on useState updates, lifecycle triggers, batched state runs, and side effect hooks.",
    questions: [
      {
        question: "What hook is used to introduce reactive state into functional components?",
        options: [
          "useEffect",
          "useRef",
          "useReducer",
          "useState"
        ],
        answerIndex: 3
      },
      {
        question: "Declare a count state variable initialized to 0 using the standard 'useState' hook structure.",
        options: [],
        isCode: true,
        starterCode: `import React, { useState } from 'react';\n\nfunction Counter() {\n  // Declare state here\n  \n  return <div>Counter</div>;\n}`,
        correctAnswerKeywords: ["const", "[count,", "setCount]", "useState(0)"]
      },
      {
        question: "Which hook acts as a merger of componentDidMount, componentDidUpdate, and componentWillUnmount?",
        options: [
          "useMemo",
          "useEffect",
          "useContext",
          "useCallback"
        ],
        answerIndex: 1
      }
    ]
  },

  // ==================== SQL QUERY TRACK ====================
  {
    id: "sql-grouping",
    courseId: "sql",
    title: "Aggregations & GROUP BY",
    description: "Test your skills in standard SQL grouping logic, HAVING filters, and multi-row aggregate counts.",
    questions: [
      {
        question: "Which SQL clause is used to filter aggregated records after a GROUP BY statement?",
        options: [
          "WHERE",
          "HAVING",
          "SELECT",
          "ORDER BY"
        ],
        answerIndex: 1
      },
      {
        question: "Write a SQL query to select continent and count all countries from the 'world' table, grouped by continent.",
        options: [],
        isCode: true,
        starterCode: `-- SQL Aggregations Challenge\nSELECT continent, COUNT(name)\nFROM world\n-- Write grouping clause here\n`,
        correctAnswerKeywords: ["GROUP BY", "continent"]
      },
      {
        question: "Which aggregate function is used to calculate the average of a numeric column in SQL?",
        options: [
          "SUM()",
          "AVG()",
          "MEAN()",
          "COUNT()"
        ],
        answerIndex: 1
      }
    ]
  },
  {
    id: "sql-joins",
    courseId: "sql",
    title: "Relational Queries & JOINs",
    description: "Verify your understanding of primary keys, foreign key constraints, and relational joins.",
    questions: [
      {
        question: "What type of join returns all rows from the left table, and matching rows from the right table?",
        options: [
          "INNER JOIN",
          "RIGHT JOIN",
          "LEFT JOIN",
          "FULL OUTER JOIN"
        ],
        answerIndex: 2
      },
      {
        question: "Join the 'movie' and 'casting' tables together on their movie ID columns.",
        options: [],
        isCode: true,
        starterCode: `-- Join movie and casting relational models\nSELECT title, actorid \nFROM movie\n-- Add JOIN and ON constraints here\n`,
        correctAnswerKeywords: ["JOIN", "casting", "ON", "movie.id", "=", "movieid"]
      }
    ]
  },

  // ==================== FASTAPI TRACK ====================
  {
    id: "fastapi-basics",
    courseId: "fastapi",
    title: "Path Operations & BaseModels",
    description: "Validate FastAPI route decorators, request bodies, and Pydantic validation structures.",
    questions: [
      {
        question: "What framework does FastAPI leverage for request body parsing and data schema validation?",
        options: [
          "Django Models",
          "SQLAlchemy ORM",
          "Pydantic BaseModels",
          "Flask Schemas"
        ],
        answerIndex: 2
      },
      {
        question: "Define an Express-like FastAPI POST handler decorated with @app.post('/items') returning a status.",
        options: [],
        isCode: true,
        starterCode: `from fastapi import FastAPI\napp = FastAPI()\n\n# Decorate and write path operation function here:\n`,
        correctAnswerKeywords: ["@app.post", "def", "/items"]
      }
    ]
  },
  {
    id: "fastapi-exceptions",
    courseId: "fastapi",
    title: "Query Validations & Exception Handling",
    description: "Diagnostic scans on status code declarations and raising standard HTTP Exceptions.",
    questions: [
      {
        question: "How do you securely trigger a client-side HTTP error response in FastAPI?",
        options: [
          "return {'error': 'Failed'}",
          "raise HTTPException(status_code=..., detail=...)",
          "sys.exit(1)",
          "abort(404)"
        ],
        answerIndex: 1
      },
      {
        question: "Write Python code to raise a FastAPI HTTPException with status code 400 and detail 'Invalid price'.",
        options: [],
        isCode: true,
        starterCode: `from fastapi import HTTPException\n\ndef validate_price(price: float):\n    if price < 0:\n        # Raise HTTPException here\n        `,
        correctAnswerKeywords: ["raise", "HTTPException", "status_code=400", "detail="]
      }
    ]
  },

  // ==================== EXPRESS TRACK ====================
  {
    id: "express-middleware",
    courseId: "express",
    title: "Route Handlers & Custom Middlewares",
    description: "Verify middleware request-response pipelines and custom next() executions.",
    questions: [
      {
        question: "Which function must be executed in Express middlewares to pass controls to the next handler?",
        options: [
          "res.send()",
          "next()",
          "res.next()",
          "nextRoute()"
        ],
        answerIndex: 1
      },
      {
        question: "Write an Express custom middleware function 'logger' that prints a message and calls next.",
        options: [],
        isCode: true,
        starterCode: `// Express Middleware structure\nfunction logger(req, res, next) {\n  // Write middleware body here\n  \n}`,
        correctAnswerKeywords: ["console.log", "next()"]
      }
    ]
  },
  {
    id: "express-jwt",
    courseId: "express",
    title: "JWT Authorization Scans",
    description: "Validate JWT header splits, signature validation, and verify tokens.",
    questions: [
      {
        question: "In standard REST practices, which HTTP header is typically used to carry JSON Web Tokens?",
        options: [
          "Cookie",
          "Authorization",
          "Content-Type",
          "Token-Payload"
        ],
        answerIndex: 1
      },
      {
        question: "Verify a token using express JWT helper function jwt.verify(token, 'SECRET').",
        options: [],
        isCode: true,
        starterCode: `const jwt = require('jsonwebtoken');\n\nfunction checkAccess(token) {\n  // Verify JWT signature using secret key 'SECRET' here\n  \n}`,
        correctAnswerKeywords: ["jwt.verify", "token,", "'SECRET'"]
      }
    ]
  },

  // ==================== PYTHON TRACK ====================
  {
    id: "python-control",
    courseId: "python",
    title: "Python Control Flow & Loops",
    description: "Test Python range protocols, loop pass clauses, and iteration continue blocks.",
    questions: [
      {
        question: "What statement is used to skip the rest of the current loop iteration and move to the next?",
        options: [
          "break",
          "pass",
          "continue",
          "skip"
        ],
        answerIndex: 2
      },
      {
        question: "Write a for loop that iterates through all numbers in range(1, 6) and prints them.",
        options: [],
        isCode: true,
        starterCode: `# Write iteration loop here\n`,
        correctAnswerKeywords: ["for", "in", "range(1,", "print"]
      }
    ]
  },
  {
    id: "python-exceptions",
    courseId: "python",
    title: "Exception Handling Blocks",
    description: "Diagnostic scans on Python try-except structures and capture statements.",
    questions: [
      {
        question: "Which keyword introduces the code block that executes if an exception is raised in try-except?",
        options: [
          "catch",
          "except",
          "error",
          "rescue"
        ],
        answerIndex: 1
      },
      {
        question: "Implement a try-except block that executes unsafe division and catches a ZeroDivisionError.",
        options: [],
        isCode: true,
        starterCode: `def safe_divide(a, b):\n    # Write try-except block here\n    `,
        correctAnswerKeywords: ["try:", "except", "ZeroDivisionError:"]
      }
    ]
  }
];
