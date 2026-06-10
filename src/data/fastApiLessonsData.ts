// FastAPI Curriculum — The Debug Society
// Sources: DataCamp FastAPI tutorial (Moez Ali) and official FastAPI documentation

export interface FastApiLesson {
  id: string;
  title: string;
  url: string;
  content: string;
}

export interface FastApiSection {
  sectionId: string;
  sectionTitle: string;
  lessons: FastApiLesson[];
}

export const fastApiLessonsData: FastApiSection[] = [
  {
    sectionId: "01_Introduction_FastAPI",
    sectionTitle: "1. Introduction to FastAPI",
    lessons: [
      {
        id: "fastapi-what-is",
        title: "What is FastAPI",
        url: "",
        content: `## Overview

> **FastAPI** is a high-performance async Python web framework for building APIs with type hints — fast, self-documenting, and production-ready out of the box.

**You will learn:**

- What FastAPI is and the problem it solves
- The two frameworks it builds on: Starlette and Pydantic
- The headline features that set it apart from Flask and Django
- Why type hints are central to how FastAPI works

---

## Content

### The Framework at a Glance

**FastAPI** is a modern web framework for building APIs with Python 3.7+ based on standard Python type hints. It was created by Sebastián Ramírez (@tiangolo) and has quickly become one of the most popular Python frameworks.

FastAPI is built on two powerful libraries:

| Foundation | Role |
|---|---|
| **Starlette** | ASGI web framework — handles routing, requests, WebSockets |
| **Pydantic** | Data validation via Python type annotations |

Together, they give FastAPI automatic request validation, serialization, and interactive documentation — all driven by the type hints you write in normal Python functions.

---

### Key Features

| Feature | What It Means |
|---|---|
| **High performance** | On par with NodeJS and Go for async workloads |
| **Fast to code** | Increase development speed by 2–3× vs. Flask |
| **Fewer bugs** | Type-hint validation catches errors before they reach production |
| **Editor support** | Full autocompletion and inline type checking |
| **Self-documenting** | Swagger UI + ReDoc generated automatically — zero config |
| **OpenAPI + JSON Schema** | Fully compatible with the API tooling ecosystem |

---

### Why FastAPI Exists

Modern API development demands speed **without** sacrificing safety. Older Python frameworks either give you speed (Flask — minimal but manual) or safety (Django — comprehensive but heavy). FastAPI gives you both — async by default, type-checked, self-documenting.

> **Note:** FastAPI is the framework of choice when your product *is* the API — microservices, ML model serving, data pipelines, or any JSON-over-HTTP interface.

---

## Assignment

1. Read the [official FastAPI homepage](https://fastapi.tiangolo.com/) and skim the feature highlights.
2. In your own words, explain to a classmate what Starlette and Pydantic each contribute to FastAPI — without looking at your notes.
3. List three situations where you would choose FastAPI over Flask, and three where Flask would still be appropriate.

---

## Knowledge Check

- What are the two underlying libraries that FastAPI is built on, and what does each one do?
- Why does FastAPI generate interactive documentation automatically, and what standard powers it?
- What does "async by default" mean for a web framework, and why does it matter for performance?`
      },
      {
        id: "fastapi-installing",
        title: "Installing FastAPI",
        url: "",
        content: `## Overview

> Get FastAPI running locally in three commands: install the framework, install an ASGI server, and verify the version.

**You will learn:**

- Install FastAPI and Uvicorn individually or together
- Understand what the \`[all]\` extras bundle provides
- Verify the installation succeeded

---

## Content

### Requirements

FastAPI requires **Python 3.7 or higher**. Check your version before installing:

\`\`\`bash
python3 --version
# Python 3.11.4
\`\`\`

You need two packages: FastAPI itself, and an **ASGI server** to run it. The standard choice is Uvicorn.

---

### Install Options

#### Option 1 — Install Separately

\`\`\`bash
pip install fastapi
pip install uvicorn
\`\`\`

#### Option 2 — Install Everything at Once (Recommended for Development)

\`\`\`bash
pip install "fastapi[all]"
\`\`\`

The \`[all]\` extra installs FastAPI + Uvicorn + email validators + several other commonly used packages, so you can focus on building rather than hunting down dependencies.

---

### What You Just Installed

| Package | Purpose |
|---|---|
| \`fastapi\` | The web framework |
| \`uvicorn\` | ASGI server that runs your app |
| \`pydantic\` | Data validation (installed as a FastAPI dependency) |
| \`starlette\` | ASGI toolkit (installed as a FastAPI dependency) |

---

### Verify the Installation

\`\`\`bash
python -c "import fastapi; print(fastapi.__version__)"
# 0.115.0
\`\`\`

If the version prints without errors, you are ready to build your first API.

> **Tip:** Use a **virtual environment** for every project. Run \`python -m venv venv && source venv/bin/activate\` before installing packages to keep project dependencies isolated.

---

## Assignment

1. Create a new folder for your FastAPI project and set up a virtual environment inside it.
2. Activate the virtual environment and run \`pip install "fastapi[all]"\`.
3. Verify the install with the version command above. Take a screenshot of the output.
4. Run \`pip list | grep -E "fastapi|uvicorn|pydantic|starlette"\` to see all four packages installed.

---

## Knowledge Check

- What is the difference between \`pip install fastapi\` and \`pip install "fastapi[all]"\`?
- Why is Uvicorn required in addition to FastAPI itself?
- What is a virtual environment and why should you always use one for Python projects?`
      }
    ]
  },
  {
    sectionId: "02_FastAPI_First_API",
    sectionTitle: "2. Building Your First API",
    lessons: [
      {
        id: "fastapi-simple-api",
        title: "Create a Simple API",
        url: "",
        content: `## Overview

> Build a working FastAPI app in under fifteen lines — one \`FastAPI()\` instance and a couple of decorated functions is all it takes.

**You will learn:**

- Create the application instance with \`FastAPI()\`
- Register endpoints using \`@app.get()\` decorators
- Use type hints to declare path parameters and query parameters
- Understand how FastAPI validates input automatically

---

## Content

### Your First Endpoint

Create a new file called \`main.py\` and add the following:

\`\`\`python
from typing import Union
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
\`\`\`

That is a complete, runnable API.

---

### What Each Part Does

| Code | Purpose |
|---|---|
| \`app = FastAPI()\` | Creates the application instance |
| \`@app.get("/")\` | Registers a GET handler for the root path |
| \`item_id: int\` | Path parameter — FastAPI validates it must be an integer |
| \`q: Union[str, None] = None\` | Optional query parameter — defaults to None |

#### Path vs. Query Parameters

\`\`\`
GET /items/5         → item_id = 5   (path parameter — part of the URL)
GET /items/5?q=hello → item_id = 5, q = "hello"  (query parameter — after ?)
\`\`\`

> **Note:** Path parameters are declared in the URL pattern (\`{item_id}\`) and the function signature. Query parameters are only declared in the function signature — FastAPI infers them automatically.

---

### Automatic Validation

If a client sends a non-integer for \`item_id\`:

\`\`\`
GET /items/abc
\`\`\`

FastAPI automatically rejects the request with a precise 422 error — no manual validation code needed:

\`\`\`json
{
  "detail": [
    {
      "loc": ["path", "item_id"],
      "msg": "value is not a valid integer",
      "type": "type_error.integer"
    }
  ]
}
\`\`\`

---

## Assignment

1. Create \`main.py\` with the code above and save it.
2. Start the server (see the next lesson) and visit \`http://127.0.0.1:8000\` in your browser.
3. Add a third endpoint \`GET /users/{user_id}\` that accepts a \`user_id: int\` and an optional \`name: str\` query parameter, and returns them in a JSON response.
4. Test what happens when you pass \`user_id=abc\` — observe the validation error response.

---

## Knowledge Check

- What is the difference between a path parameter and a query parameter in FastAPI?
- What happens automatically when a client sends the wrong type for a path parameter?
- Where do you declare an optional query parameter, and what default value should it have?`
      },
      {
        id: "fastapi-running-uvicorn",
        title: "Running with Uvicorn",
        url: "",
        content: `## Overview

> Boot your API with the Uvicorn ASGI server, understand the startup output, and confirm all endpoints respond correctly.

**You will learn:**

- The \`uvicorn main:app --reload\` command and each flag explained
- How to interpret the startup console output
- How to test endpoint responses in the browser
- What \`--reload\` does and when to remove it

---

## Content

### Start the Server

Open a terminal in the same folder as \`main.py\` and run:

\`\`\`bash
uvicorn main:app --reload
\`\`\`

| Part | Meaning |
|---|---|
| \`main\` | The Python file name (\`main.py\`) |
| \`app\` | The FastAPI variable inside that file |
| \`--reload\` | Restart the server automatically when you edit any file |

> **Warning:** The \`--reload\` flag is for development only. It adds overhead and should never be used in production.

---

### Reading the Startup Output

You should see something like:

\`\`\`
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [28720]
INFO:     Started server process [28722]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
\`\`\`

If you see "Application startup complete", your API is live.

---

### Testing Your Endpoints

| URL | Expected Response |
|---|---|
| \`http://127.0.0.1:8000\` | \`{"Hello":"World"}\` |
| \`http://127.0.0.1:8000/items/5\` | \`{"item_id":5,"q":null}\` |
| \`http://127.0.0.1:8000/items/5?q=hello\` | \`{"item_id":5,"q":"hello"}\` |
| \`http://127.0.0.1:8000/items/abc\` | 422 validation error |

---

### Stopping the Server

Press **Ctrl + C** in the terminal to stop Uvicorn.

---

## Assignment

1. Start the server with \`uvicorn main:app --reload\` and confirm the startup output.
2. Open all four test URLs in the table above and verify each response.
3. Edit \`main.py\` while the server is running — add a new string to the response — and confirm \`--reload\` picks up the change without restarting manually.
4. Stop the server and try starting it on a different port: \`uvicorn main:app --port 9000\`.

---

## Knowledge Check

- What does each part of \`uvicorn main:app --reload\` mean?
- Why should you remove \`--reload\` when deploying to production?
- What HTTP status code does FastAPI return for a type validation failure?`
      },
      {
        id: "fastapi-interactive-docs",
        title: "Interactive API Docs",
        url: "",
        content: `## Overview

> FastAPI generates Swagger UI and ReDoc documentation for every endpoint automatically — no extra code, no configuration, no maintenance.

**You will learn:**

- What an OpenAPI schema is and where to find it
- How to use Swagger UI at \`/docs\` to test endpoints interactively
- When to share ReDoc at \`/redoc\` as reference documentation
- Why keeping docs in sync is automatic, not manual

---

## Content

### Automatic OpenAPI Documentation

Every FastAPI application generates an **OpenAPI schema** automatically. This schema is an abstract description of all your endpoints — their paths, methods, parameters, and response shapes.

The schema powers two interactive documentation UIs that are included with FastAPI by default.

---

### Swagger UI — Interactive Testing at \`/docs\`

Navigate to:

\`\`\`
http://127.0.0.1:8000/docs
\`\`\`

You will see a list of every endpoint. Click any endpoint, then press **"Try it out"** in the top-right corner to fill in parameters and send a real request — all from the browser, no separate API client needed.

> **Tip:** Swagger UI is the fastest way to manually test your API during development. Use it before building the frontend to confirm every route works as expected.

---

### ReDoc — Reference Documentation at \`/redoc\`

The second documentation UI is at:

\`\`\`
http://127.0.0.1:8000/redoc
\`\`\`

ReDoc presents the same schema in a clean three-column layout — ideal for sharing as developer-facing reference documentation.

---

### The Raw OpenAPI Schema

The underlying JSON schema lives at:

\`\`\`
http://127.0.0.1:8000/openapi.json
\`\`\`

You can feed this JSON into any OpenAPI-compatible tool — code generators, Postman, Insomnia, or custom client SDKs.

---

### Why This Matters

| Comparison | Traditional Docs | FastAPI Docs |
|---|---|---|
| Written by | Developer (manually) | Generated from code |
| Stays in sync | Only if you remember to update | Always — code **is** the docs |
| Interactive testing | Requires a separate tool | Built in at \`/docs\` |
| Schema standard | Varies | OpenAPI 3.0 |

---

## Assignment

1. With your server running, open \`http://127.0.0.1:8000/docs\` and use "Try it out" to send requests to both endpoints.
2. Open \`http://127.0.0.1:8000/redoc\` and compare the layout to Swagger UI.
3. Add a new endpoint to \`main.py\` and confirm the docs update automatically without any extra steps.
4. Open \`http://127.0.0.1:8000/openapi.json\` and inspect the raw schema — find the description of \`item_id\`.

---

## Knowledge Check

- What is an OpenAPI schema and what does it describe?
- What is the key difference between Swagger UI and ReDoc?
- Where does the raw OpenAPI JSON live, and what can you do with it?
- Why do FastAPI's docs always stay in sync with the code?`
      }
    ]
  },
  {
    sectionId: "03_FastAPI_Advanced",
    sectionTitle: "3. HTTP Methods & Type Hints",
    lessons: [
      {
        id: "fastapi-http-methods",
        title: "Understanding HTTP Methods",
        url: "",
        content: `## Overview

> FastAPI exposes every HTTP verb through a matching decorator — \`@app.get\`, \`@app.post\`, \`@app.put\`, \`@app.patch\`, \`@app.delete\` — and the function signature defines what data the route accepts.

**You will learn:**

- The purpose of each HTTP method (GET, POST, PUT, PATCH, DELETE)
- How to register path operations for each verb in FastAPI
- Why the choice of HTTP verb matters for REST API design

---

## Content

### Path Operations

Every FastAPI endpoint is a combination of a **path** (the URL) and an **operation** (the HTTP method). Together they form a **path operation**.

| Method | CRUD Role | Use When |
|---|---|---|
| **GET** | Read | Retrieve data — no side effects |
| **POST** | Create | Add a new resource |
| **PUT** | Replace | Fully replace an existing resource |
| **PATCH** | Partial update | Update specific fields only |
| **DELETE** | Delete | Remove a resource |

FastAPI supports all of them: \`@app.get\`, \`@app.post\`, \`@app.put\`, \`@app.patch\`, \`@app.delete\`, plus advanced ones like \`HEAD\`, \`OPTIONS\`, and \`TRACE\`.

---

### All Four CRUD Verbs in Practice

\`\`\`python
from fastapi import FastAPI

app = FastAPI()

# READ — safe, no side effects
@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"action": "read", "id": item_id}

# CREATE — adds a new resource
@app.post("/items/")
def create_item(name: str):
    return {"action": "create", "name": name}

# REPLACE — full update of an existing resource
@app.put("/items/{item_id}")
def update_item(item_id: int, name: str):
    return {"action": "update", "id": item_id, "name": name}

# DELETE — removes the resource
@app.delete("/items/{item_id}")
def delete_item(item_id: int):
    return {"action": "delete", "id": item_id}
\`\`\`

> **Note:** Each decorator binds the HTTP verb + URL path to a Python function. The function signature defines what data the endpoint accepts. FastAPI handles everything else — parsing, validation, and error responses.

---

### PUT vs. PATCH

| | PUT | PATCH |
|---|---|---|
| Sends | The entire updated resource | Only the fields that changed |
| Effect | Replaces the whole record | Merges changes into the record |
| Idempotent | Yes — same result every time | Depends on implementation |

---

## Assignment

1. Add all four CRUD endpoints to your \`main.py\` as shown above.
2. Use the Swagger UI at \`/docs\` to test each verb — create an item, read it, update it, then delete it.
3. Add a \`PATCH /items/{item_id}\` endpoint that accepts an optional \`name\` parameter and demonstrates partial updating.
4. Explain in your own words why GET is "safe" but POST is not.

---

## Knowledge Check

- What is a "path operation" in FastAPI terminology?
- Which HTTP verbs are idempotent, and what does idempotent mean?
- What is the practical difference between PUT and PATCH for updating a resource?`
      },
      {
        id: "fastapi-type-hints",
        title: "Python Type Hints in FastAPI",
        url: "",
        content: `## Overview

> Type hints are the engine of FastAPI — one declaration simultaneously drives input validation, data conversion, API documentation, and editor support.

**You will learn:**

- What Python type hints are and how to read them
- How FastAPI reads type hints at request time
- The four things you get "for free" from a single type declaration
- Common type patterns for path params, query params, and return types

---

## Content

### What Are Type Hints?

Type hints are a Python 3.6+ syntax that lets you annotate variables and function arguments with their expected types. They are optional hints — Python itself doesn't enforce them at runtime — but tools like editors, type checkers, and frameworks can read and act on them.

\`\`\`python
# Without type hints
def greet(name, age):
    return f"Hello {name}, you are {age}"

# With type hints — same runtime behavior, but tools now know the types
def greet(name: str, age: int) -> str:
    return f"Hello {name}, you are {age}"
\`\`\`

FastAPI takes this further: it **uses type hints for everything** — validation, serialization, documentation.

---

### What FastAPI Gives You for Free

When you write a typed path operation:

\`\`\`python
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}
\`\`\`

You automatically receive:

| Benefit | What Happens |
|---|---|
| **Editor support** | Full autocomplete, type checks, safe refactoring |
| **Input validation** | \`item_id\` must coerce to \`int\` — invalid input returns 422 |
| **Type conversion** | URL strings are automatically converted to Python types |
| **Self-documenting endpoints** | Parameter names and types appear in \`/docs\` and \`/redoc\` |

All from one type annotation.

---

### Common Type Patterns

\`\`\`python
from typing import Union

# Required path parameter (int)
@app.get("/posts/{post_id}")
def get_post(post_id: int): ...

# Optional query parameter (str or None)
@app.get("/search")
def search(query: str, limit: Union[int, None] = 10): ...

# Python 3.10+ shorthand for Union
@app.get("/search")
def search(query: str, limit: int | None = 10): ...
\`\`\`

> **Tip:** \`Union[str, None]\` and \`str | None\` are identical. Use the \`|\` syntax if you're on Python 3.10+.

---

## Assignment

1. Write a \`GET /products/{product_id}\` endpoint where \`product_id\` is an \`int\` and \`category\` is an optional \`str\` query parameter.
2. Test what happens in Swagger UI when you pass a float for \`product_id\` (e.g., \`3.5\`).
3. Add a return type annotation (\`-> dict\`) to one of your path operation functions and verify your editor picks it up.

---

## Knowledge Check

- Do Python type hints change runtime behavior on their own? Explain.
- What four things does FastAPI derive automatically from a single type annotation?
- What is the difference between \`Union[str, None]\` and \`str | None\`?`
      },
      {
        id: "fastapi-pydantic-bodies",
        title: "Request Bodies with Pydantic",
        url: "",
        content: `## Overview

> Declare a \`pydantic.BaseModel\` subclass as a parameter and FastAPI validates the entire JSON request body against it automatically — no manual parsing required.

**You will learn:**

- Why \`POST\` and \`PUT\` requests need request bodies
- How to define required and optional fields in a Pydantic model
- What FastAPI returns when body validation fails
- How path params, query params, and body params coexist in one function

---

## Content

### Beyond Path & Query Parameters

\`GET\` requests pass data in the URL. For \`POST\` and \`PUT\` requests, you typically need a **request body** — structured JSON sent by the client.

FastAPI uses **Pydantic models** to declare and validate them.

---

### Defining a Pydantic Model

\`\`\`python
from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Define the shape of the expected request body
class Item(BaseModel):
    name: str            # required — must be present and a string
    price: float         # required — must be present and a float
    is_offer: Union[bool, None] = None  # optional — defaults to None

@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    # FastAPI injects the validated Item object directly
    return {"item_name": item.name, "item_id": item_id}
\`\`\`

---

### What FastAPI Validates

When a client sends \`PUT /items/3\` with a JSON body, FastAPI checks every field:

| Field | Rule | Error if violated |
|---|---|---|
| \`name\` | Must be a string | 422 — wrong type |
| \`price\` | Must be a float | 422 — wrong type or missing |
| \`is_offer\` | Bool or absent | 422 — wrong type |

If any field fails, FastAPI returns a **422 Unprocessable Entity** with a precise list of which fields were wrong and why — no manual validation code needed.

---

### Mixing Path, Query, and Body Parameters

FastAPI figures out which parameters are which based on where they're declared:

\`\`\`python
@app.put("/items/{item_id}")
def update_item(
    item_id: int,        # path parameter — declared in the URL pattern
    item: Item,          # request body — a Pydantic model
    q: str | None = None # query parameter — everything else
):
    return {"item_id": item_id, "item_name": item.name, "q": q}
\`\`\`

> **Note:** FastAPI's rule: if the parameter is a Pydantic model, it's the body. If it appears in the URL pattern, it's a path param. Everything else is a query param.

---

### The Full Benefit

Declaring your request body with Pydantic gives you:

- Editor autocompletion and type checking
- Automatic input validation on every request
- Clear, structured 422 error responses for invalid data
- Body schema automatically shown in Swagger UI

All from writing a regular Python class.

---

## Assignment

1. Define an \`Item\` Pydantic model with \`name: str\`, \`description: str | None = None\`, \`price: float\`, and \`tax: float | None = None\`.
2. Create a \`POST /items/\` endpoint that accepts the body and returns the item back plus a calculated \`price_with_tax\` field.
3. In Swagger UI, test: a valid body, a body missing \`price\`, and a body with \`price\` as a string — observe the 422 responses.
4. Add a \`PUT /items/{item_id}\` that takes both the path param and the body, and returns both.

---

## Knowledge Check

- How does FastAPI distinguish between a path parameter, a query parameter, and a request body parameter?
- What HTTP status code does FastAPI return for invalid request body data?
- What is the difference between a required field and an optional field in a Pydantic model?`
      }
    ]
  },
  {
    sectionId: "04_FastAPI_Compared",
    sectionTitle: "4. Comparison & Performance",
    lessons: [
      {
        id: "fastapi-vs-django-flask",
        title: "FastAPI vs Django vs Flask",
        url: "",
        content: `## Overview

> FastAPI, Django, and Flask each solve different problems. Choosing between them depends on whether you're shipping a website, a microservice, or a pure API backend.

**You will learn:**

- The core philosophy of each framework
- A side-by-side feature comparison
- A simple decision rule for choosing the right one

---

## Content

### The Three Frameworks

All three are Python web frameworks, but they target very different use cases.

| Framework | Philosophy | Best For |
|---|---|---|
| **Django** | "Batteries included" — everything built in | Full websites with admin UI, ORM, auth, templates |
| **Flask** | Minimal microframework — add only what you need | Small apps, prototypes, total flexibility |
| **FastAPI** | Type-hint-driven API framework | Pure API backends, ML serving, microservices |

---

### Side-by-Side Comparison

| Aspect | Django | Flask | FastAPI |
|---|---|---|---|
| GitHub Stars | ~74K | ~66K | ~74K |
| Learning Curve | Steep | Gentle | Gentle |
| Performance | Moderate | Moderate | High (native async) |
| Async Support | Partial | Requires Asyncio | Native |
| Interactive Docs | None | None | Yes (Swagger + ReDoc) |
| Data Validation | Manual (Forms) | Manual | Automatic (Pydantic) |
| ORM Included | Yes (Django ORM) | No | No |
| Admin Interface | Yes | No | No |

---

### How to Choose

> - Pick **Django** when you need a CMS-style application: admin panel, ORM, user auth, templates — all out of the box.
> - Pick **Flask** when you want a blank slate and maximum control over every component you add.
> - Pick **FastAPI** when your product **is** an API — especially one serving ML models, microservices, or high-throughput JSON endpoints.

---

### Code Comparison: A Simple Route

\`\`\`python
# Flask
from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/items/<int:item_id>')
def get_item(item_id):
    return jsonify({"id": item_id})
\`\`\`

\`\`\`python
# FastAPI — same result, but with automatic validation and docs
from fastapi import FastAPI
app = FastAPI()

@app.get("/items/{item_id}")
def get_item(item_id: int):
    return {"id": item_id}
\`\`\`

Both return the same JSON. FastAPI adds free validation (pass \`"abc"\` and get a 422) and free docs at \`/docs\`.

---

## Assignment

1. In two sentences, explain when you would recommend Django over FastAPI to a colleague.
2. Build the same simple route in both Flask and FastAPI. Notice the differences in boilerplate and what you get automatically.
3. Look up one real-world company that uses FastAPI in production and describe their use case.

---

## Knowledge Check

- What is the primary reason to choose FastAPI over Flask for a new API project?
- What does Django provide out of the box that FastAPI does not include?
- Which of the three frameworks has native async support — what does native async enable?`
      },
      {
        id: "fastapi-benchmarks",
        title: "Performance Benchmarks",
        url: "",
        content: `## Overview

> FastAPI's async-first design puts it near Go and NodeJS on standard benchmarks — and the advantage is most pronounced when endpoints spend their time waiting on I/O.

**You will learn:**

- Why FastAPI ranks near the top of the TechEmpower benchmarks
- The three architectural decisions behind the speed
- When the performance advantage actually matters in practice
- How to write async endpoints correctly

---

## Content

### TechEmpower Results

[TechEmpower Framework Benchmarks](https://www.techempower.com/benchmarks/) are the industry standard for comparing web framework performance. FastAPI consistently outperforms other Python frameworks and approaches Go and NodeJS.

The three reasons:

| Factor | Why It Helps |
|---|---|
| **ASGI / Starlette** | Async I/O without thread-per-request overhead |
| **Pydantic v2** | Validation via compiled C extensions — not pure Python |
| **Type-hint serialization** | No reflection at request time — schema is pre-compiled |

---

### Sync vs. Async Endpoints

FastAPI supports both. Choose correctly:

\`\`\`python
# Sync — fine for CPU-bound work or if you don't call async code
@app.get("/sync")
def sync_endpoint():
    result = do_some_computation()
    return {"result": result}

# Async — required when awaiting I/O (database, HTTP, files)
@app.get("/async")
async def async_endpoint():
    result = await database.fetch_one(query)
    return {"result": result}
\`\`\`

> **Warning:** Using a blocking call (like a regular \`requests.get()\`) inside an \`async def\` endpoint blocks the entire event loop. For outbound HTTP calls in async endpoints, use \`httpx.AsyncClient\` instead.

---

### When Performance Matters

For typical CRUD applications, the absolute speed difference between Python frameworks rarely dominates. Network latency and database queries are usually the bottleneck.

**FastAPI's async model pays off most when:**

| Scenario | Why Async Helps |
|---|---|
| High concurrent connections | No thread per connection — scales to thousands |
| Long-lived WebSockets | Efficient multiplexing on a single process |
| Downstream API calls | Await multiple calls concurrently instead of sequentially |
| ML model inference pipelines | Overlap I/O while model computes |

---

## Assignment

1. Write a \`GET /slow\` endpoint that uses \`asyncio.sleep(1)\` to simulate a slow I/O call — observe that the event loop is not blocked.
2. Write a second \`GET /fast\` endpoint and use your browser (or \`curl\`) to call both simultaneously. Notice how the async version handles concurrent requests.
3. Research what \`httpx.AsyncClient\` is and write a short async endpoint that fetches JSON from a public API using it.

---

## Knowledge Check

- What are the three architectural factors that make FastAPI so fast?
- What is the risk of using a blocking call inside an \`async def\` endpoint?
- In which real-world scenarios does FastAPI's async performance advantage become significant?`
      }
    ]
  },
  {
    sectionId: "05_FastAPI_ML_Pipeline",
    sectionTitle: "5. Deploying ML Models with FastAPI",
    lessons: [
      {
        id: "fastapi-pycaret-intro",
        title: "Pipeline with PyCaret",
        url: "",
        content: `## Overview

> PyCaret is a low-code ML library that automates everything from data preparation to model training — and integrates directly with FastAPI for one-line deployment.

**You will learn:**

- What PyCaret automates across the ML workflow
- How to load a dataset and run \`setup()\`
- How to compare all models in one call with \`compare_models()\`

---

## Content

### What is PyCaret?

[PyCaret](https://pycaret.org/) is an open-source, low-code machine-learning library that automates the full ML workflow: data prep, training, tuning, evaluation, and **deployment** — all with a small number of function calls.

PyCaret integrates directly with FastAPI: \`create_api()\` generates a complete, runnable FastAPI service from any trained model.

---

### The Automated ML Workflow

| Stage | PyCaret Function | What It Does |
|---|---|---|
| Environment setup | \`setup()\` | Builds preprocessing pipeline |
| Model selection | \`compare_models()\` | Trains + ranks all estimators |
| Fine-tuning | \`tune_model()\` | Hyperparameter optimization |
| Evaluation | \`evaluate_model()\` | Interactive visual diagnostics |
| Deployment | \`create_api()\` | Generates a FastAPI service |

---

### Install

\`\`\`bash
pip install pycaret
\`\`\`

\`\`\`python
import pycaret
print(pycaret.__version__)  # e.g., '3.3.1'
\`\`\`

---

### Load a Dataset

We'll use the built-in \`insurance\` dataset — a regression task predicting medical charges from age, sex, BMI, and region.

\`\`\`python
from pycaret.datasets import get_data

data = get_data('insurance')
print(data.head())
\`\`\`

---

### Set Up the Experiment

\`\`\`python
from pycaret.regression import *

# setup() builds the entire preprocessing pipeline
s = setup(data, target='charges')
\`\`\`

\`setup()\` performs feature encoding, imputation, and scaling automatically. It must be called before any other PyCaret function.

---

### Train and Compare Models

\`\`\`python
# Trains every regressor via cross-validation and ranks them
best = compare_models()
\`\`\`

This single call trains and cross-validates every estimator in PyCaret's library and returns the best performer. For the insurance dataset, the **Gradient Boosting Regressor** typically wins.

> **Note:** \`compare_models()\` can take a few minutes on a laptop. It is running full cross-validation for every model, not just a single fit.

---

## Assignment

1. Install PyCaret and load the \`insurance\` dataset as shown above.
2. Run \`setup(data, target='charges')\` and read the preprocessing summary it prints.
3. Run \`compare_models()\` and note which estimator ranks highest on RMSE.
4. Look up what \`tune_model(best)\` does and run it on the winner — does the score improve?

---

## Knowledge Check

- What does \`setup()\` do before training begins?
- Why is \`compare_models()\` more useful than picking a single algorithm yourself?
- What does PyCaret's \`create_api()\` generate, and what format is the output?`
      },
      {
        id: "fastapi-create-api",
        title: "Serving the Model as an API",
        url: "",
        content: `## Overview

> PyCaret's \`create_api()\` turns a trained model into a complete, runnable FastAPI service in a single function call — no boilerplate required.

**You will learn:**

- How \`create_api()\` generates a FastAPI file from a model
- How to run the generated server with Uvicorn
- How to read and understand the generated FastAPI code
- How to test the prediction endpoint

---

## Content

### One-Line API Generation

After training your best model, convert it to a FastAPI service:

\`\`\`python
# Generates insurance_prediction_model.py in your working directory
create_api(best, 'insurance_prediction_model')
\`\`\`

---

### Run the Generated Service

\`\`\`bash
python insurance_prediction_model.py
\`\`\`

The script boots a Uvicorn server. Open:

| URL | What You'll See |
|---|---|
| \`http://127.0.0.1:8000/docs\` | Swagger UI — test predictions interactively |
| \`http://127.0.0.1:8000/redoc\` | ReDoc — reference documentation |
| \`http://127.0.0.1:8000/predict\` | The prediction endpoint itself |

---

### Inside the Generated File

PyCaret generates plain, readable FastAPI code — the same pattern you would write by hand:

\`\`\`python
import pandas as pd
from pycaret.regression import load_model, predict_model
from fastapi import FastAPI
import uvicorn

# Create the application instance
app = FastAPI()

# Load the trained preprocessing + model pipeline
model = load_model('insurance_prediction_model')

# Prediction endpoint — accepts features, returns predicted charge
@app.post('/predict')
def predict(age: int, sex: str, bmi: float, children: int, smoker: str, region: str):
    data = pd.DataFrame([[age, sex, bmi, children, smoker, region]])
    data.columns = ['age', 'sex', 'bmi', 'children', 'smoker', 'region']
    predictions = predict_model(model, data=data)
    return {'prediction': list(predictions['prediction_label'])}

if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)
\`\`\`

> **Note:** The generated code uses \`load_model()\` to restore both the preprocessing pipeline **and** the trained estimator. When a request arrives, the full pipeline runs — including the feature transformations from \`setup()\`.

---

### Testing the Prediction Endpoint

\`\`\`bash
curl -X POST http://127.0.0.1:8000/predict \\
  -H "Content-Type: application/json" \\
  -d '{"age": 30, "sex": "male", "bmi": 28.5, "children": 1, "smoker": "no", "region": "southwest"}'
\`\`\`

Expected response:

\`\`\`json
{"prediction": [4823.17]}
\`\`\`

---

## Assignment

1. Run \`create_api(best, 'insurance_prediction_model')\` and open the generated \`.py\` file.
2. Start the server and open the Swagger UI at \`/docs\`.
3. Use "Try it out" to send a prediction request with your own values for age, bmi, etc.
4. Modify the generated file to add a \`GET /health\` endpoint that returns \`{"status": "ok"}\`.

---

## Knowledge Check

- What does \`load_model()\` restore, and why does it need to restore more than just the estimator?
- What is the endpoint path and HTTP method for predictions in the generated file?
- How would you extend the generated API to accept batch predictions (a list of inputs)?`
      },
      {
        id: "fastapi-conclusion",
        title: "Conclusion & Next Steps",
        url: "",
        content: `## Overview

> A complete recap of the FastAPI track — what you learned, the patterns to remember, and the clearest next steps to deepen your skills.

**You will learn:**

- The key concepts from the course consolidated in one place
- Recommended next topics: dependency injection, WebSockets, OAuth2
- A practical path to production: Docker + cloud deployment

---

## Content

### What You Have Learned

| Topic | Key Takeaway |
|---|---|
| **What FastAPI is** | Built on Starlette + Pydantic — async, typed, self-documenting |
| **Installation** | \`pip install "fastapi[all]"\` + Uvicorn to serve |
| **Path operations** | Decorator + function signature = a complete endpoint |
| **Type hints** | One annotation drives validation, conversion, and docs |
| **HTTP methods** | GET / POST / PUT / PATCH / DELETE map to CRUD |
| **Pydantic models** | Declare request body shape — FastAPI validates automatically |
| **Interactive docs** | \`/docs\` (Swagger) and \`/redoc\` always in sync |
| **Performance** | Native async puts FastAPI near Go/Node on benchmarks |
| **ML deployment** | PyCaret \`create_api()\` generates a FastAPI service in one call |

---

### Recommended Next Steps

Follow this progression to go from the basics to production-ready:

1. **Dependency Injection** — Learn \`Depends()\`. It is how you wire database sessions, auth checks, and configuration into routes without repetition.

2. **Database Integration** — Connect FastAPI to a real database using SQLAlchemy + Alembic (migrations) or Prisma.

3. **OAuth2 + JWT Auth** — FastAPI has first-class OAuth2 support. The [official security guide](https://fastapi.tiangolo.com/tutorial/security/) is the best place to start.

4. **Background Tasks** — Use \`BackgroundTasks\` for work that shouldn't block the response (sending emails, processing uploads).

5. **WebSockets** — FastAPI handles WebSocket connections natively — great for real-time features.

6. **Containerization** — Wrap your app in Docker, then deploy to Render, Fly.io, or AWS Fargate.

---

### Production Deployment Checklist

\`\`\`
Before deploying to production:
[ ]  Remove --reload from the Uvicorn command
[ ]  Set all secrets via environment variables (never hardcode)
[ ]  Configure CORS with a specific origin allowlist
[ ]  Add a health check endpoint (GET /health → {"status": "ok"})
[ ]  Set up structured logging (uvicorn's access log + your own)
[ ]  Run behind a reverse proxy (Nginx or Caddy) in production
\`\`\`

---

### Final Word

> FastAPI is a great option for developers who want to build APIs quickly — without giving up speed, validation, or documentation. Master it and you can ship production-grade Python APIs in hours, not days.

*Tutorial content adapted from the DataCamp FastAPI guide by Moez Ali and the official FastAPI documentation by Sebastián Ramírez.*

---

## Assignment

1. Review your code from all previous FastAPI lessons. Refactor it into a single well-organized \`main.py\` with multiple endpoints.
2. Add a \`GET /health\` endpoint to your app — this is standard in every production API.
3. Read the [FastAPI dependency injection tutorial](https://fastapi.tiangolo.com/tutorial/dependencies/) and implement one simple dependency (e.g., a reusable function that validates an API key from headers).
4. Deploy your app: containerize with Docker and push to Render or Fly.io.

---

## Knowledge Check

- What is the purpose of \`Depends()\` in FastAPI, and what problem does it solve?
- Why should \`--reload\` be removed before production deployment?
- What is the advantage of running FastAPI behind a reverse proxy like Nginx?
- Name three HTTP features FastAPI supports that make it suitable for real-time applications.`
      }
    ]
  }
];
