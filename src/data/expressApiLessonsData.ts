// Express REST API Curriculum — The Debug Society
// Source: The Debug Lab — NodeJS Path (APIs section)

export interface ExpressLesson {
  id: string;
  title: string;
  url: string;
  content: string;
}

export interface ExpressSection {
  sectionId: string;
  sectionTitle: string;
  lessons: ExpressLesson[];
}

export const expressApiLessonsData: ExpressSection[] = [
  {
    sectionId: "01_Express_APIs_Foundations",
    sectionTitle: "1. APIs: REST & CORS",
    lessons: [
      {
        id: "express-apis-intro",
        title: "APIs Introduction",
        url: "",
        content: `## Overview

> A **REST API** is the architectural backbone of modern web development — it lets any frontend (web, mobile, CLI) talk to your server through clean, resource-based URLs and standard HTTP verbs.

**You will learn:**

- What REST stands for and why it exists
- How to design endpoints using resource-based URI conventions
- The five HTTP verbs and their CRUD roles
- What the Same-Origin Policy is and how CORS solves it
- How to add and configure CORS middleware in Express

---

## Content

### The Jamstack Pattern

Modern web applications separate the **frontend** (served on Netlify, Vercel, or GitHub Pages) from the **backend** (hosted on Render, Heroku, or a VPS). These two halves communicate exclusively through **JSON over HTTP** — and that interface is your API.

> **Why separate concerns?** A single backend can power a web app, a mobile app, and a desktop client simultaneously — all reading from the same API, without duplicating any business logic.

Switching from template rendering to an API is literally one word:

\`\`\`javascript
// Serving HTML (traditional MVC)
app.get('/posts', (req, res) => {
  res.render('posts', { posts });
});

// Serving JSON (API-first)
app.get('/posts', (req, res) => {
  res.json(posts);
});
\`\`\`

---

### REST: Resource-Based Routing

**REST** (Representational State Transfer) is the most widely adopted convention for structuring API endpoints. Instead of action-based names, you name endpoints after the **resource** and let the HTTP verb express the action.

| Anti-Pattern (action-based) | REST Style (resource-based) |
|---|---|
| \`GET /getAllPosts\` | \`GET /posts\` |
| \`POST /createPost\` | \`POST /posts\` |
| \`GET /getPostById?id=5\` | \`GET /posts/5\` |
| \`PUT /updatePost?id=5\` | \`PUT /posts/5\` |
| \`DELETE /deletePost?id=5\` | \`DELETE /posts/5\` |

#### Nested URI Patterns

Resources nest naturally to express relationships:

| URI | Meaning |
|---|---|
| \`GET /posts\` | All blog posts |
| \`GET /posts/:id\` | One specific post |
| \`POST /posts\` | Create a new post |
| \`GET /posts/:id/comments\` | All comments on a post |
| \`POST /posts/:id/comments\` | Add a comment to a post |
| \`GET /posts/:id/comments/:cid\` | One specific comment |

---

### The Five HTTP Verbs

| Verb | CRUD Role | Safe? | Idempotent? |
|---|---|---|---|
| **GET** | Read | Yes | Yes |
| **POST** | Create | No | No |
| **PUT** | Replace (full update) | No | Yes |
| **PATCH** | Partial update | No | No |
| **DELETE** | Delete | No | Yes |

> **Safe** means the request never changes server state. **Idempotent** means calling it twice has the same result as calling it once — useful for retries.

---

### CORS: Cross-Origin Resource Sharing

When your frontend (\`https://myapp.netlify.app\`) calls your API (\`https://api.myapp.com\`), the browser blocks it by default. This is the **Same-Origin Policy** — a critical browser security feature.

**CORS** is the HTTP header mechanism that lets your server declare which origins it trusts.

\`\`\`bash
npm install cors
\`\`\`

\`\`\`javascript
const express = require('express');
const cors = require('cors');
const app = express();

// Allow any origin — acceptable during development
app.use(cors());

// Restrict to your frontend domain — required for production
app.use(cors({
  origin: 'https://myapp.netlify.app',
}));

// CORS on a single route only
app.get('/public-data', cors(), (req, res) => {
  res.json({ message: 'This endpoint accepts any origin' });
});
\`\`\`

> **Warning:** Never ship \`cors()\` with no restrictions to production. Any website could make authenticated requests on behalf of your users. Always whitelist specific origins before deploying.

---

## Assignment

1. Create a minimal Express app with a \`GET /posts\` endpoint that returns a hardcoded array of post objects as JSON. Test it with \`curl http://localhost:3000/posts\`.
2. Install the \`cors\` package and configure it to allow requests only from \`http://localhost:5173\` (a typical Vite frontend dev server).
3. Open your browser console on a different port and run \`fetch('http://localhost:3000/posts')\` — observe the CORS error, then fix it by adjusting the origin config.

---

## Knowledge Check

- What does REST stand for and what makes an API "RESTful"?
- Given the resource \`/articles/:id/tags\`, write the URIs for listing all tags and for adding a new tag.
- Which HTTP verb is both **safe** and **idempotent** — meaning it only reads data and can be retried safely?
- What is the Same-Origin Policy and why does the browser enforce it?
- What is the difference between applying \`cors()\` globally versus on a single specific route?`
      },
      {
        id: "express-apis-auth-jwt",
        title: "Authentication with JWT",
        url: "",
        content: `## Overview

> **JSON Web Tokens (JWT)** are the standard authentication mechanism for stateless REST APIs — the server issues a cryptographically signed token on login, and the client attaches it to every subsequent request in the \`Authorization\` header.

**You will learn:**

- How token-based auth differs from session/cookie auth
- The three-part structure of a JWT (header, payload, signature)
- How to sign a token on login with \`jsonwebtoken\`
- How to write middleware that verifies and decodes the token
- Best practices for token expiration

---

## Content

### Sessions vs. Tokens

| Feature | Session Auth (Cookie) | Token Auth (JWT) |
|---|---|---|
| State stored on | Server (session store) | Client (localStorage / memory) |
| Stateless? | No — server tracks each session | Yes — server only needs the secret |
| Works across domains | Requires extra config | Built-in via header |
| Scales horizontally | Hard — sessions must be shared | Easy — any server can verify the token |
| Best for | Same-origin, full-stack apps | Separate frontend / backend |

When your frontend and backend live on **different domains**, JWT is the natural choice.

---

### JWT Anatomy

A JWT is three **Base64URL-encoded** JSON objects separated by dots:

\`\`\`
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9    ← Header
.
eyJ1c2VySWQiOjQyLCJleHAiOjE3MDAwMDB9     ← Payload
.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQ  ← Signature
\`\`\`

| Part | Contains | Purpose |
|---|---|---|
| **Header** | Algorithm (\`HS256\`) + type (\`JWT\`) | Describes how to verify |
| **Payload** | Claims: user ID, role, expiry | Carries the actual data |
| **Signature** | \`HMAC(header + payload, SECRET)\` | Proves the token is authentic |

> **Note:** The payload is only Base64-encoded — it is **not encrypted**. Anyone can decode and read it. Never put passwords, credit card numbers, or sensitive secrets in a JWT payload. Only store IDs and non-sensitive metadata.

---

### Signing & Verifying Tokens

\`\`\`bash
npm install jsonwebtoken
\`\`\`

\`\`\`javascript
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET; // always store in .env — never hardcode

// ─── On successful login: sign and return a token ───────────────
function login(req, res) {
  const { username, password } = req.body;
  // validate credentials against your DB here...

  const user = { id: 42, username, role: 'author' };

  const token = jwt.sign(
    user,                  // payload embedded in the token
    SECRET,                // secret used to sign and later verify
    { expiresIn: '2h' }    // token becomes invalid after 2 hours
  );

  res.json({ token });
}

// ─── Middleware: verify the token on every protected route ───────
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization; // "Bearer <token>"

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  const token = authHeader.split(' ')[1];

  try {
    req.user = jwt.verify(token, SECRET); // throws if expired or tampered
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Token invalid or expired' });
  }
}

// ─── Apply middleware to protected routes ────────────────────────
app.get('/dashboard', authenticate, (req, res) => {
  res.json({ message: \`Welcome, \${req.user.username}\` });
});
\`\`\`

---

### The Authorization Header

The client sends the token with every request using the standard **Bearer schema**:

\`\`\`
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...
\`\`\`

Your middleware reads \`req.headers.authorization\`, splits on the space, and passes the token string to \`jwt.verify()\`.

---

### Token Expiration Strategy

Always set an expiry — a token that never expires is a permanent backdoor if it's stolen.

| Scenario | Recommended Expiry |
|---|---|
| Standard web session | \`2h\` |
| "Remember me" / long session | \`7d\` – \`30d\` |
| High-security app (access + refresh) | Access: \`15m\`, Refresh: \`7d\` |

> **Tip:** The access + refresh token pattern is the gold standard for production. A short-lived access token limits exposure if stolen. A refresh token (stored in an HttpOnly cookie) silently issues a new access token without requiring the user to log in again.

---

## Assignment

1. Create a \`POST /login\` route that accepts \`{ username, password }\` in the body, validates credentials against a hardcoded user object, and returns a signed JWT.
2. Write an \`authenticate\` middleware that reads the \`Authorization: Bearer\` header and attaches the decoded payload to \`req.user\` on success.
3. Protect a \`GET /profile\` route with the middleware — it should return \`req.user\` only when a valid token is present.
4. Test the full login → token → protected route flow using \`curl\` or Postman.

---

## Knowledge Check

- What is the key architectural difference between session-based and token-based authentication?
- Which part of a JWT prevents tampering — and what would happen if someone modified the payload?
- Why must you never store sensitive data like passwords in the JWT payload?
- What HTTP status code should a **missing** token return vs. a **tampered or expired** token?
- What is the benefit of using short-lived access tokens combined with a refresh token?`
      },
      {
        id: "express-apis-blog-project",
        title: "Blog API Capstone Project",
        url: "",
        content: `## Overview

> Build a complete, production-structured blog platform: one REST API backend, a public reader frontend, and an authenticated author dashboard — three apps communicating purely through JSON.

**You will learn:**

- Design data models for a real content platform (posts, comments, users)
- Structure a REST API with public and protected route groups
- Apply JWT authentication end-to-end across a multi-app project
- Deploy three separate apps and wire them together over CORS

---

## Content

### Architecture Overview

This project puts the Jamstack pattern into practice: **one backend, two frontends**.

| App | Purpose | Who Accesses It |
|---|---|---|
| **Backend API** | Express + Database | Serves JSON to both frontends |
| **Public Reader Site** | Displays published posts | Any visitor |
| **Author Dashboard** | Create, edit, manage posts | Authenticated authors only |

---

### Designing Your Data Models

Plan the data layer before writing a single route — it shapes everything else.

#### Post Model

| Field | Type | Notes |
|---|---|---|
| \`id\` | Integer (PK) | Auto-incremented |
| \`title\` | String | Required |
| \`body\` | Text | Full article content |
| \`published\` | Boolean | Defaults to \`false\` (draft) |
| \`createdAt\` | DateTime | Auto-set on creation |
| \`authorId\` | FK → User | Required |

#### Comment Model

| Field | Type | Notes |
|---|---|---|
| \`id\` | Integer (PK) | Auto-incremented |
| \`body\` | Text | Required |
| \`authorName\` | String | Optional — allow anonymous comments |
| \`createdAt\` | DateTime | Auto-set |
| \`postId\` | FK → Post | Required |

#### User Model

| Field | Type | Notes |
|---|---|---|
| \`id\` | Integer (PK) | |
| \`username\` | String | Unique |
| \`passwordHash\` | String | Always hash — never store plaintext |
| \`role\` | Enum | \`author\` or \`admin\` |

> **Note:** Even with a single author, a User model makes authentication far simpler — you validate credentials *against* the record, and the JWT payload carries the user ID.

---

### REST Route Design

Separate public routes (no auth) from protected routes (JWT required) from the start.

\`\`\`
── Public Routes (no authentication) ──────────────────────────
GET    /posts                   list all published posts
GET    /posts/:id               one published post + its comments
POST   /posts/:id/comments      submit a comment on a post

── Auth Route ──────────────────────────────────────────────────
POST   /auth/login              returns a signed JWT

── Protected Routes (JWT required) ────────────────────────────
GET    /posts/all               list ALL posts including drafts
POST   /posts                   create a new post
PUT    /posts/:id               update a post (full replace)
PATCH  /posts/:id/publish       toggle the published flag
DELETE /posts/:id               delete a post
DELETE /posts/:id/comments/:cid delete a specific comment
\`\`\`

> **Tip:** Apply the \`authenticate\` middleware to a dedicated protected router rather than repeating it on each route. This ensures no protected route is accidentally left open.

---

### Testing Your API

Verify every route works before building the frontends.

| Tool | Best For |
|---|---|
| \`curl\` (terminal) | Quick, scriptable tests from the command line |
| **Postman** | Full GUI with saved collections and environments |
| **Thunder Client** | VS Code extension — same idea, no separate app |
| **Insomnia** | Clean GUI, great for REST + GraphQL |

\`\`\`bash
# Create a new post (replace YOUR_TOKEN with the JWT from /auth/login)
curl -X POST http://localhost:3000/posts \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"title":"Hello World","body":"My first post.","published":false}'
\`\`\`

---

### Frontend Features

#### Public Reader Site
- List of published posts with title, date, and excerpt
- Full post detail page (body + comments)
- Comment submission form at the bottom of each post

#### Author Dashboard
- All posts list with draft / published status badges
- Publish / Unpublish toggle per post
- New Post form — consider a rich text editor like TinyMCE for the body
- Comment moderation (edit or delete)
- Logout button that clears the JWT from localStorage

---

## Assignment

Work through these steps in order — each stage builds on the previous.

1. **Design your schema** — Write your Prisma schema (or plain SQL) for \`User\`, \`Post\`, and \`Comment\`.
2. **Bootstrap Express** — Create the project, install \`express\`, \`cors\`, \`bcrypt\`, and \`jsonwebtoken\`.
3. **Auth route** — Implement \`POST /auth/login\`: hash check + JWT sign, returning the token.
4. **Public routes** — Build \`GET /posts\` (published only) and \`GET /posts/:id\`.
5. **Protected routes** — Add \`POST /posts\`, \`PUT /posts/:id\`, \`PATCH /posts/:id/publish\`, \`DELETE /posts/:id\` — all behind the \`authenticate\` middleware.
6. **Comments** — Add \`POST /posts/:id/comments\` (public) and \`DELETE /posts/:id/comments/:cid\` (protected).
7. **Public frontend** — Fetch and display posts; implement the comment submission form.
8. **Author dashboard** — Login → store JWT → build the full CRUD management interface.
9. **Deploy** — API to Render or Heroku; both frontends to Netlify or Vercel with the correct CORS origin set.

---

## Knowledge Check

- What does the \`published\` boolean field enable architecturally — why not just delete draft posts?
- How do you ensure the author dashboard routes are inaccessible without a valid token?
- Why must passwords be hashed before storing, and which Node.js library handles bcrypt hashing?
- What CORS configuration does your backend need when you have two separate frontend origins?
- What is the trade-off between a monorepo and three separate repositories for this project?`
      }
    ]
  }
];
