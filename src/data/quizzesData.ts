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
  {
    id: "react-certification",
    courseId: "react",
    title: "React & SPA Professional Certification",
    description: "A comprehensive 15-question certification evaluation covering component rendering, virtual DOM diffing, JSX conversion, hooks rules, state vs props, form control strategies, routing paradigms, and rendering optimization. Passing this with >= 70% unlocks your React Verified Professional Certificate!",
    questions: [
      {
        question: "How does the Virtual DOM reconciliation process work in React?",
        options: [
          "It physically duplicates the entire HTML document in secondary threads and replaces the body element on every click.",
          "It maintains a lightweight JavaScript representation of the real DOM, compares the new Virtual DOM with the previous version using a diffing algorithm (Reconciliation), and batch-updates only the changed elements in the real DOM.",
          "It compiles all JSX code directly into WebAssembly to query relational databases in real-time.",
          "It bypasses browser CSS processing to render directly on hardware-accelerated canvas components."
        ],
        answerIndex: 1
      },
      {
        question: "How is JSX syntax transpiled and understood by standard browsers?",
        options: [
          "JSX runs natively inside all modern HTML5 rendering engines without processing.",
          "JSX is pre-compiled as standard CSS properties within CSS modules.",
          "A build compiler (such as Babel or ESBuild) converts JSX elements into executable JavaScript call objects using React.createElement or similar JSX runtime functions.",
          "It requires an SQLite backend adapter to dynamically parse HTML strings before load."
        ],
        answerIndex: 2
      },
      {
        question: "What is the primary architectural difference between functional components and class components in modern React?",
        options: [
          "Class components are strictly rendered on the server side, while functional components are executed on the client side.",
          "Class components are JavaScript ES6 classes extending React.Component that manage state and lifecycles via constructor methods and this.setState, while functional components are pure JavaScript functions that use React Hooks to handle states and side effects.",
          "Functional components are required to call a render() method returning JSX elements, whereas class components return values directly.",
          "There is no difference; they are exact syntax synonyms initialized using identical constructors."
        ],
        answerIndex: 1
      },
      {
        question: "How do props differ from state in React component data flow?",
        options: [
          "Props represent mutable internal component values; state is the immutable metadata received from parent nodes.",
          "Props can only contain numeric variables, whereas state is restricted to string sequences.",
          "Props are read-only, immutable configuration values passed down from parent components; state represents mutable internal data managed within the component that triggers re-renders on change.",
          "Props are processed exclusively within database models, whereas state handles routes."
        ],
        answerIndex: 2
      },
      {
        question: "What is the core distinction between Controlled and Uncontrolled input elements in React forms?",
        options: [
          "Controlled inputs are managed by direct SQLite sync scripts; uncontrolled inputs run without databases.",
          "Controlled components have their value properties fully driven and synchronized by React state (via value and onChange), whereas uncontrolled components delegate value tracking to the DOM itself, retrieved via React Refs.",
          "Controlled components are only allowed inside class components, while uncontrolled components are hook-only.",
          "There is no functional difference; they are identical rendering models."
        ],
        answerIndex: 1
      },
      {
        question: "What does a React Fragment (<>...</> or <React.Fragment>...</React.Fragment>) accomplish?",
        options: [
          "It splits a component bundle into asynchronous lazy-loaded files.",
          "It groups multiple DOM elements together without introducing extra wrapper nodes (like <div>) to the final DOM hierarchy.",
          "It dynamically caches styling information in localStorage.",
          "It establishes an active WebSocket connection to database sync pools."
        ],
        answerIndex: 1
      },
      {
        question: "Under what conditions does a useEffect cleanup return function execute?",
        options: [
          "It executes during static analysis to verify compilation errors.",
          "It fires synchronously right before the parent component's first mounting step.",
          "It executes immediately before the component is unmounted or before the effect re-runs (due to changed dependencies), enabling cleanup of timers, subscriptions, or event listeners to prevent memory leaks.",
          "It only triggers if a subquery database failure occurs."
        ],
        answerIndex: 2
      },
      {
        question: "How do useEffect and useLayoutEffect differ in terms of browser painting behavior?",
        options: [
          "useLayoutEffect is non-blocking and executes after browser paint; useEffect blocks all rendering tasks.",
          "useEffect executes asynchronously after DOM updates and browser paint (non-blocking), whereas useLayoutEffect executes synchronously after DOM updates but before the browser paints the screen, making it suitable for blocking DOM layout measurements.",
          "useEffect operates solely on server environments; useLayoutEffect runs on both mobile and desktop compilers.",
          "They are compile-time aliases and exhibit identical browser scheduling behaviors."
        ],
        answerIndex: 1
      },
      {
        question: "What is the primary benefit of utilizing the useReducer hook over useState in functional components?",
        options: [
          "It runs complex state evaluations in background WebWorker threads.",
          "It automatically saves all state transitions inside cookies and sessionStorage.",
          "It organizes complex state logic and multiple action transitions using a centralized reducer function, keeping state updates predictable, organized, and scalable.",
          "It is the only hook allowed to access global contexts."
        ],
        answerIndex: 2
      },
      {
        question: "What does the React.memo higher-order component perform?",
        options: [
          "It saves the entire component tree structure in indexedDB caches.",
          "It shallowly compares incoming props and prevents unnecessary re-renders of the wrapped component if the props have not changed, optimizing rendering performance.",
          "It automatically creates dynamic CSS classes based on tailwind setups.",
          "It intercepts routing links to force a page reload."
        ],
        answerIndex: 1
      },
      {
        question: "Why is using an array index as the key prop in dynamic lists generally discouraged?",
        options: [
          "Keys are required to be full URL paths in order for index maps to function.",
          "If the list items are reordered, inserted, or deleted, using array indices can confuse React's element-matching algorithm, leading to rendering bugs, inconsistent input values, and slower diffing.",
          "Array index keys are completely ignored by the Virtual DOM compiler, causing a fatal crash.",
          "It blocks the list from receiving flexbox styles in custom themes."
        ],
        answerIndex: 1
      },
      {
        question: "How do the performance hooks useMemo and useCallback differ conceptually?",
        options: [
          "useMemo caches a computed value result, whereas useCallback caches the callback function definition itself to prevent unnecessary re-creations across renders.",
          "useCallback is designed strictly for class constructors, while useMemo is functional-only.",
          "useMemo connects components to context providers; useCallback handles redirect routes.",
          "There is no difference; they are exact functional synonyms sharing identical code signatures."
        ],
        answerIndex: 0
      },
      {
        question: "In client-side SPAs using React Router, what is the primary benefit of <Link> over the standard HTML <a> tag?",
        options: [
          "The <a> tag uses client-side transitions, whereas <Link> forces a server query.",
          "The <a> tag completely reloads the web page and requests resources from the server, while the <Link> component intercepts navigation, updates the URL, and dynamically swaps components in the browser without a full page reload.",
          "The <Link> component is required for backend database mutations.",
          "There is no difference; they reload in the exact same manner."
        ],
        answerIndex: 1
      },
      {
        question: "Complete the body of 'handleChange' to dynamically update the 'formState' object state based on the input field's name and value, preserving other fields using the spread operator.",
        options: [],
        isCode: true,
        starterCode: "import React, { useState } from 'react';\n\nexport function Form() {\n  const [formState, setFormState] = useState({ username: '', email: '' });\n\n  const handleChange = (e) => {\n    // Write state setter call here (use ES6 spread and dynamic keys):\n    \n  };\n}",
        correctAnswerKeywords: ["setFormState", "...formState", "[e.target.name]", "e.target.value"]
      },
      {
        question: "Write a line of code using 'useMemo' to calculate and store the memoized value of 'count * 2', depending on the 'count' state.",
        options: [],
        isCode: true,
        starterCode: "import React, { useMemo } from 'react';\n\nexport function MemoizedCounter({ count }) {\n  // Memoize count * 2 below depending on the count parameter:\n  const doubleValue = \n}",
        correctAnswerKeywords: ["useMemo", "() =>", "count * 2", "[count]"]
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
  {
    id: "sql-certification",
    courseId: "sql",
    title: "SQL & DBMS Professional Certification",
    description: "A comprehensive 15-question certification evaluation covering physical storage, normalization, window aggregates, transactions, and indexing. Passing this with >= 70% unlocks your Database Certificate!",
    questions: [
      {
        question: "What is the key storage difference between CHAR and VARCHAR2 data types?",
        options: [
          "CHAR stores numeric data while VARCHAR2 stores alphanumeric characters only.",
          "CHAR stores fixed-length data padding unused space with trailing spaces, whereas VARCHAR2 stores variable-length data without padding.",
          "VARCHAR2 can only store binary data while CHAR stores string representation.",
          "CHAR is processed dynamically on server requests while VARCHAR2 is precompiled."
        ],
        answerIndex: 1
      },
      {
        question: "What is a database view in relational SQL environments?",
        options: [
          "A physically duplicated table that auto-syncs on insert triggers.",
          "A graphical diagram representing the foreign key relations.",
          "A virtual table created from a SELECT query that displays dynamic data without physical storage.",
          "A secure table partition that isolates memory cache values."
        ],
        answerIndex: 2
      },
      {
        question: "Write an aggregate query grouping by customer_id, filtering for order_date in 2025 (>= '2025-01-01' and < '2026-01-01') and having count of orders > 5.",
        options: [],
        isCode: true,
        starterCode: `-- SQL Grouping and Aggregation\nSELECT customer_id, COUNT(*) AS orders_2025\nFROM orders\n-- Write query constraints below\n`,
        correctAnswerKeywords: ["WHERE", "order_date", "GROUP BY", "customer_id", "HAVING", "COUNT(*) > 5"]
      },
      {
        question: "Which JOIN type returns all rows from the left table and matching rows from the right table, filling with NULL when a match is absent?",
        options: [
          "INNER JOIN",
          "FULL OUTER JOIN",
          "RIGHT OUTER JOIN",
          "LEFT OUTER JOIN"
        ],
        answerIndex: 3
      },
      {
        question: "Describe how a PRIMARY KEY differs from a UNIQUE key constraint.",
        options: [
          "A PRIMARY KEY constraint permits multiple NULL fields while UNIQUE keys restrict them completely.",
          "A table can have only one PRIMARY KEY (combining UNIQUE + NOT NULL) but multiple UNIQUE constraints (which permit NULLs).",
          "PRIMARY KEY is parsed only in NoSQL schemas while UNIQUE is standard SQL.",
          "There is no functional difference; they are direct synonym aliases in all DBMS systems."
        ],
        answerIndex: 1
      },
      {
        question: "What is a Common Table Expression (CTE) defined with the WITH keyword?",
        options: [
          "A permanent database index cached across system reboots.",
          "A relational database trigger executed on transaction rollback.",
          "A temporary, named result set that exists only for the duration of a single execution statement.",
          "An encrypted schema security key used for authentication."
        ],
        answerIndex: 2
      },
      {
        question: "Which database Normal Form (NF) is violated if a non-key column depends on only part of a composite primary key?",
        options: [
          "1NF",
          "2NF",
          "3NF",
          "BCNF"
        ],
        answerIndex: 1
      },
      {
        question: "What is the structural difference between UNION and UNION ALL commands?",
        options: [
          "UNION joins columns horizontally while UNION ALL joins them vertically.",
          "UNION ALL combines results and removes duplicates, while UNION keeps all duplicates.",
          "UNION combines query results and removes duplicate rows (slower), while UNION ALL keeps all duplicates (faster).",
          "UNION operates only on clustered tables while UNION ALL operates on unindexed partitions."
        ],
        answerIndex: 2
      },
      {
        question: "How do clustered and non-clustered indexes differ?",
        options: [
          "Non-clustered indexes physicalize rows in memory, whereas clustered indexes only exist on temporary directories.",
          "A clustered index physicalizes the table rows in the index order (max 1 per table); a non-clustered index is a separate pointer structure (can be many).",
          "A clustered index is used exclusively for key-value document databases.",
          "Non-clustered indexes must always contain a single unique column."
        ],
        answerIndex: 1
      },
      {
        question: "Write a SQL query using the SUM window function to calculate the running total of sales for each product, ordered by sale_date.",
        options: [],
        isCode: true,
        starterCode: `-- Window Function Challenge\nSELECT product_id, sale_date, amount,\n  -- Add SUM analytic window function below\n  \nFROM sales;\n`,
        correctAnswerKeywords: ["SUM(amount) OVER", "PARTITION BY", "product_id", "ORDER BY", "sale_date"]
      },
      {
        question: "What defines a correlated subquery in SQL?",
        options: [
          "A subquery that compiles in parallel with index creation threads.",
          "A subquery that runs once and stores results in a global temp table.",
          "A nested query that depends on columns from the outer query, re-evaluating itself for each outer row.",
          "A subquery that can only contain arithmetic operators."
        ],
        answerIndex: 2
      },
      {
        question: "Which window ranking function assigns the same rank to ties but leaves gaps in the ranking sequence?",
        options: [
          "ROW_NUMBER()",
          "DENSE_RANK()",
          "RANK()",
          "LAG()"
        ],
        answerIndex: 2
      },
      {
        question: "What property of ACID transactions guarantees that all database updates within a transaction succeed or fail together as a single unit?",
        options: [
          "Durability",
          "Atomicity",
          "Consistency",
          "Isolation"
        ],
        answerIndex: 1
      },
      {
        question: "What is the key structural difference between a standard view and a materialized view?",
        options: [
          "A standard view is physicalized on hard storage, while a materialized view is strictly runtime-virtual.",
          "A standard view is virtual and runs its query on reference; a materialized view is a physical table storing precomputed query results.",
          "Materialized views can only represent simple tables without joins.",
          "Standard views are only accessible to administrative users."
        ],
        answerIndex: 1
      },
      {
        question: "How do blocking and deadlocking behaviors differ in concurrent DBMS environments?",
        options: [
          "Blocking is an active runtime crash, while deadlocking is a logical partition drop.",
          "Blocking occurs when a transaction waits for a lock release (resolves automatically); deadlocking is a circular wait cycle requiring database engine rollback.",
          "Deadlocking happens only on read-uncommitted transactions.",
          "There is no difference; they both represent the identical thread locking state."
        ],
        answerIndex: 1
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
