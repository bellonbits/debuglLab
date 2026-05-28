// Express REST API Curriculum — The Debug Society
// Source: The Odin Project — NodeJS Path (APIs section)

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
        content: `### Introduction

In recent years, a new pattern for developing websites has been gaining popularity. Instead of creating an app that hosts both the database and view templates, many developers are separating these concerns into separate projects, hosting their backend and database on a server (either on something like Heroku or on a VPS like Digital Ocean), then using a service such as GitHub Pages or Netlify to host their frontend. This technique is sometimes referred to as the **Jamstack**.

Organizing your project this way can be beneficial because it allows your project to be more modular instead of combining business logic with view logic. This also allows you to use a single backend source for multiple frontend applications, such as a website, a desktop app, or a mobile app. Other developers enjoy this pattern because they like using frontend frameworks such as React or Vue to create nice frontend-only, single-page applications.

Frontend and backend applications usually talk to each other using **JSON**. So at this point, all you really need to learn is how to get your Express application to speak JSON instead of HTML. Essentially all you have to do is pass your information into \`res.json()\` instead of \`res.send()\` or \`res.render()\`. How easy is that?

If you think back to the organization of the routes in the Routes lesson, we grouped related routes together and extracted each group into its own file. This approach allowed us to more easily modify specific routes without impacting others.

---

### Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Know what REST stands for.
- Explain the purpose of using REST when structuring an API.
- Detail the REST naming conventions for your API endpoints.
- Have a reinforced understanding of the HTTP Methods/Verbs.
- Describe the Same Origin Policy.
- Explain the purpose of CORS.
- Use CORS as middleware in Express (globally and on a single route).
- Configure CORS to only allow certain origins to access our API.
- Explain CORS headers.

---

### REST

The structure of an API can take many forms. For example, you could have routes named \`/api/getAllPostComments/:postid\` or \`/api/posts/:postid/comments\`. However, it's conventional to follow **REST** (an acronym for **Representational State Transfer**), a popular and common organizational method for your APIs which corresponds with CRUD actions. Following established patterns like REST makes your API more maintainable and easier for other developers to integrate with. Software development is often about clear communication — which is aided by following expectations.

The actual technical definition of REST is a little complicated, but for our purposes most of the elements (statelessness, cacheability, etc.) are covered by default just by using Express to output JSON. The piece that we specifically want to think about is how to organize our **endpoint URIs** (Uniform Resource Identifiers).

REST APIs are **resource based**, which means that instead of having names like \`/getPostComments\` or \`/savePostInDatabase\`, we refer directly to the resource (in this case, the blog post) and use HTTP verbs such as GET, POST, PUT, and DELETE to determine the action. Typically this takes the form of **2 URIs per resource** — one for the whole collection and one for a single object in that collection. For example, you might get a list of blog posts from \`/posts\` and then get a specific post from \`/posts/:postid\`. You can nest collections in the same way: to get the list of comments on a single post you'd access \`/posts/:postid/comments\`, and to get a single comment, \`/posts/:postid/comments/:commentid\`.

---

### HTTP Verbs Table

| Verb | Action | Example |
|------|--------|---------|
| POST | Create | \`POST /posts\` — creates a new blog post |
| GET | Read | \`GET /posts/:postid\` — fetches a single post |
| PUT | Update | \`PUT /posts/:postid\` — updates a single post |
| DELETE | Delete | \`DELETE /posts/:postid\` — deletes a single post |

Each part of an API URI specifies the resource. For example, \`GET /posts\` returns the entire list of blog posts, while \`GET /posts/:postid\` specifies the exact blog post we want. We can nest further: \`GET /posts/:postid/comments\` returns the list of comments for that blog post, or \`GET /posts/:postid/comments/:commentid\` returns one specific comment.

---

### CORS

The **Same Origin Policy** is an important security measure for browsers that restricts web pages from making requests to a different origin than the one that served the page.

In a typical project, we will be deploying our REST API and front end **separately** (different domains), meaning we need to enable **Cross-Origin Resource Sharing (CORS)** on the server to allow our separate front end to access its resources. Express has a CORS middleware package that lets us set everything up.

\`\`\`bash
npm install cors
\`\`\`

\`\`\`javascript
const express = require('express');
const cors = require('cors');
const app = express();

// Allow any origin (fine for development)
app.use(cors());

// Or restrict to specific origins for production
app.use(cors({
  origin: 'https://my-frontend.example.com'
}));
\`\`\`

For now, it is acceptable to just allow access from any origin. This makes development quite a bit easier. But for any real project, once you deploy to a production environment you will probably want to specifically block access from any origin except your frontend website.

---

### Assignment

1. Read about RESTful API design. If you want to code along with the first article, note this used to include the \`body-parser\` middleware — since Express 4.16.0 this parsing functionality has been incorporated directly into the Express package itself.
2. Read and code along with a tutorial on setting up a REST API in Express. Look for one that also talks about **modular code organization** and **writing middleware**.

---

### Knowledge check

- What does REST stand for?
- What are HTTP verbs and why are they important to an API?
- What is the Same-Origin Policy?
- How do you enable CORS in your Express app?
- Which HTTP verb does each letter in CRUD (Create, Read, Update, Delete) correspond to?`
      },
      {
        id: "express-apis-auth-jwt",
        title: "Authentication with JWT",
        url: "",
        content: `### Introduction

Securing your API is an important step. When we were using Express to serve view templates we used **PassportJS** along with a username and password to authenticate users, but that is not the only way to secure an Express app, and in the context of an API it often makes sense to use a different strategy. The username/password session pattern that we learned previously will still work of course, though it is made a little more complicated by the fact that we've separated our front-end code from the back-end.

Another strategy is to generate and pass a secure **token** between our back-end and front-end code. Doing so will make sure that our user's username and password are not compromised, and will also give us the ability to **expire** our user's session for added security. The basic idea: when a user signs in to our app, a secure token is created, and then for all subsequent requests **that token is passed in the header of our request object**. In the end, the process is straightforward since you should already be comfortable with using Passport to authenticate users.

This strategy, while particularly useful with APIs, can be used with a traditional view-template project as well. The main difference here is that instead of setting and checking a **cookie** we're passing a special token in the header of our request. In our previous Authentication Tutorial, the Passport middleware checked the cookie that was sent and then either authenticated or denied our user. In this case, we're going to do something very similar — but instead of using cookies, we're going to pass the token.

---

### Lesson overview

- Explain how token authentication differs from session-based authentication.
- Learn about JSON Web Tokens.
- Read about an Authorization header and how to use it.
- Identify and explain the methods used to sign and verify tokens.
- Write custom middleware to verify tokens on a given route.
- Have familiarity with token expiration with JWT.
- Expand PassportJS implementations to use JSON Web Tokens.

---

### JWT in a nutshell

A **JSON Web Token (JWT)** is a compact, URL-safe string with three parts separated by dots:

\`\`\`
header.payload.signature
\`\`\`

- **Header** — algorithm + token type.
- **Payload** — the claims (e.g. user id, role, expiration).
- **Signature** — \`HMAC(header + payload, secret)\` — proves the token wasn't tampered with.

The server signs the token with a secret only it knows. Anyone can read the payload, but no one can modify it without invalidating the signature.

---

### Signing & verifying with jsonwebtoken

\`\`\`bash
npm install jsonwebtoken
\`\`\`

\`\`\`javascript
const jwt = require('jsonwebtoken');

// On successful login, sign and return a token
function login(req, res) {
  const user = { id: 42, username: 'opus' };
  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
}

// Middleware: verify the token on protected routes
function authenticate(req, res, next) {
  const auth = req.headers.authorization;          // "Bearer <token>"
  if (!auth) return res.status(401).json({ error: 'no token' });

  const token = auth.split(' ')[1];
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    return res.status(403).json({ error: 'invalid token' });
  }
}

app.get('/posts', authenticate, (req, res) => {
  res.json({ message: \`Hello \${req.user.username}\` });
});
\`\`\`

---

### The Authorization header

Clients attach the token on every request using a standard header with the **Bearer** schema:

\`\`\`
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...
\`\`\`

Your middleware reads this header, verifies the signature, and either calls \`next()\` or returns 401/403.

---

### Assignment

1. Watch a video that explains everything you need to know about [creating and verifying JSON Web Tokens](https://www.youtube.com/watch?v=7nafaH9SddU).
2. Watch a video that presents [different ways in which JWTs can be useful](https://www.youtube.com/watch?v=7Q17ubqLfaM).

---

### Knowledge check

- What is a JSON Web Token?
- What are two things a secure token will do?
- Where in the code is a secure token passed?

---

### Additional resources

- A guide for **JWT Authentication Using Node.js and Express**.
- A more concise guide for using JWTs in Express.
- Not everyone agrees that JWTs are the best way to store authentication data — there are valid arguments against them, and some pitfalls to be aware of when using them.`
      },
      {
        id: "express-apis-blog-project",
        title: "Blog API Capstone Project",
        url: "",
        content: `### Introduction

Do you know what you need? You need a blog. Or maybe you don't, or maybe you already have one. In any case, this project will be a great way to practice and see the benefits of creating an **API-only backend**. We're actually going to create the backend and **two different front-ends** for accessing and editing your blog posts. One front-end site will be for people who want to read and comment on your posts, while the other will be just for you to write, edit, and publish your posts.

Why are we setting it up like this? Because we can! The important exercise here is setting up the API and then accessing it from the outside. There are some security benefits to setting up separate websites for blog consumption and blog editing, but really we're just doing it like this to demonstrate the **power and flexibility of separating your backend code from your frontend code**.

---

### Assignment

1. **Project structure** — How you structure this project is up to you. Some people prefer separate GitHub repos for each of the three apps to keep them and their commit histories separate. Others prefer a **monorepo** with each app in its own directory.

2. **Design your models & schemas** — Begin by designing your back-end models. How you design it is up to you, but think through a few things:
   - Your blog should have **posts** and **comments**, so think about the fields you'll want to include for each.
   - Are you going to require users to leave a username or email with their comments?
   - Are you going to display a date or timestamp for posts and comments?
   - Posts should probably have a title — but should comments?
   - A useful feature is the ability to have posts that are in the database but **not published** for the public to read. How might you designate published vs unpublished posts in your DB?
   - You'll want a **user model** for blog authors (and optionally normal user accounts). Even with a single author, a minimal user model makes route protection via authentication much easier.

3. **Set up Express** — Define the models in **Prisma** (or your ORM of choice).

4. **Set up routes and controllers** — Think about RESTful organization for this one. Most of the examples in the previous lesson centered around posts and comments, so this shouldn't be too tricky.
   - You can test your routes however you want. Using \`curl\` in a terminal is one handy way, but it can be just as effective to use a web browser. There are also platforms that allow you to send \`PUT\` and \`POST\` requests without needing to set up HTML forms — [Postman](https://www.postman.com/downloads/) is probably the most popular.

5. **Protect routes with authentication** — Certain routes will need to be protected. You wouldn't want any random stranger online to edit your articles! If you also implement normal user accounts, you may want to protect some routes behind being logged in too.
   - Though there are many ways to handle auth, in this project use **JWTs**.
   - You can use [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) to create and verify JWTs. You may wish to use [Passport's JWT strategy](https://github.com/mikenicholson/passport-jwt) for verifying tokens, especially if you already have Passport set up with a local strategy.
   - A successful login grants the user a JWT. That user attaches their JWT to future requests, where your API verifies it to allow or deny access. When the user logs out, the client removes the JWT from storage.
   - There are many ways to send and store JWTs — cookies, localStorage, access/refresh tokens, etc. Some are more complicated (and potentially more secure). For now, keep it simple: send JWTs via the **\`Authorization\` header with the \`Bearer\` schema**, and have the client store the JWT in localStorage.

6. **Build the public front-end** — Once your API is working, focus on the front-end. How you go about this is up to you. If you're comfortable with React, go for it. If you're happier using plain HTML, CSS, and vanilla JavaScript, that's fine too. To get posts into a website, \`fetch\` the correct API endpoint and display the results.

7. **Build the author dashboard** — Create a second website for **authoring and editing** posts. Useful features:
   - A list of all posts showing whether or not they have been published.
   - A button to publish unpublished posts (or unpublish published ones!).
   - A "NEW POST" form. If you want to get fancy, use a rich text editor such as [TinyMCE](https://www.tiny.cloud/docs/tinymce/6/cloud-quick-start/).
   - The ability to **manage comments** (delete or edit them).

8. **Front-end depth is your call** — How much work you want to put into the front-end code is up to you. Technically this is a backend-focused course, so if you would prefer, focus on the REST API.

9. **Deploy separately** — Deploy your API to a PaaS like Heroku/Render, and deploy the two front-ends to GitHub Pages, Netlify, or Vercel. If you used React, recall the hosting options from the CV Application project.

---

### Why this project matters

You'll come out of this with:

- A clean **REST API** that follows resource-based URI conventions.
- Hands-on experience with **JWT auth** end-to-end (sign on login, attach in header, verify in middleware).
- A practical mental model for how **frontend ↔ backend** communicate purely over JSON across **different origins** (with CORS configured).
- A reusable backend that can power any number of additional clients later — mobile, CLI, third-party integration.

This is the architecture pattern that dominates modern web development. Build it once here and the next ten projects come together faster.`
      }
    ]
  }
];
