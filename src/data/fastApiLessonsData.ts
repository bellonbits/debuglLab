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

> FastAPI is a high-performing async web framework for building Python APIs with type hints — fast, self-documenting, and production-ready out of the box.

**You will learn:**

- What FastAPI is and why it exists
- The frameworks it builds on (Starlette + Pydantic)
- The headline features that set it apart

---

## Content

### The framework at a glance

**FastAPI** is a high-performing web framework for building APIs with Python 3.7+ based on standard Python type hints. It helps developers build applications quickly and efficiently.

FastAPI is built on top of the **Starlette** ASGI framework and uses **Pydantic** for data validation. It includes features that make building web applications easier, such as automatic data validation, error handling, and interactive API documentation.

---

### Key Features

- **Performance**: On par with NodeJS and the Go language.
- **Speed**: Increase development speed by 2-3×.
- **Easy**: Great editor support. Completion everywhere. Easy to learn and use.
- **Robust**: Production-ready code with automatic interactive documentation.
- **OpenAPI based**: Fully compatible with OpenAPI and JSON Schema.

---

### Why FastAPI Matters

Modern API development demands speed without sacrificing safety. FastAPI delivers both — async by default, type-checked, self-documenting. It is the framework of choice when you want production-grade APIs with the minimum number of moving parts.

> **Source**: [Official FastAPI documentation](https://fastapi.tiangolo.com/) by Sebastián Ramírez (@tiangolo).`
      },
      {
        id: "fastapi-installing",
        title: "Installing FastAPI",
        url: "",
        content: `## Overview

> Get FastAPI running locally in three commands: install the framework, install an ASGI server, and verify the version.

**You will learn:**

- Install FastAPI and Uvicorn
- Use the \`[all]\` extras bundle for development
- Verify the installed version

---

## Content

### Requirements

FastAPI requires **Python 3.7+**. You will need to install FastAPI itself and an ASGI server such as \`uvicorn\` to run it.

---

### Install FastAPI

\`\`\`bash
pip install fastapi
\`\`\`

### Install Uvicorn

\`\`\`bash
pip install uvicorn
\`\`\`

---

### One-line install

You can also install both together along with optional extras (recommended for development):

\`\`\`bash
pip install "fastapi[all]"
\`\`\`

The \`[all]\` extra pulls in Uvicorn, email validators, and other commonly used packages so you can focus on building.

---

### Verify Installation

After installation, you can confirm it works:

\`\`\`bash
python -c "import fastapi; print(fastapi.__version__)"
\`\`\`

If the version prints without errors, you're ready to build your first API.`
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

> Build a working FastAPI app in under fifteen lines — one \`FastAPI()\` instance and a couple of decorated functions.

**You will learn:**

- Create the \`app\` instance
- Register endpoints with \`@app.get(...)\` decorators
- Use type hints to validate path and query parameters

---

## Content

### Your First Endpoint

Let's create a minimal toy API. Save the following as \`main.py\`:

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

---

### What's happening?

- \`app = FastAPI()\` creates the application instance.
- The \`@app.get(...)\` decorators register **path operations** — each one binds a URL path to a Python function.
- \`item_id: int\` is a **type hint** that FastAPI uses to validate input automatically. If a user sends a non-integer, FastAPI rejects the request with a clear error.
- \`q: Union[str, None] = None\` declares an optional query parameter.

That's it — no boilerplate, no routers, no config. You have a working API.`
      },
      {
        id: "fastapi-running-uvicorn",
        title: "Running with Uvicorn",
        url: "",
        content: `## Overview

> Boot your API with the Uvicorn ASGI server and confirm both endpoints respond correctly in the browser.

**You will learn:**

- Start the server with \`uvicorn main:app --reload\`
- Interpret the Uvicorn startup output
- See FastAPI reject invalid input automatically

---

## Content

### Start the Server

Open a terminal in the same folder as \`main.py\` and run:

\`\`\`bash
uvicorn main:app --reload
\`\`\`

- \`main\` refers to the Python file (\`main.py\`).
- \`app\` is the FastAPI variable inside that file.
- \`--reload\` makes the server restart automatically when you edit code (use only in development).

---

### Verify it's running

You should see output similar to:

\`\`\`
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process
INFO:     Started server process
INFO:     Waiting for application startup.
INFO:     Application startup complete.
\`\`\`

Open [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser. If you see \`{"Hello":"World"}\`, congratulations — your first API is live.

---

### Test the second endpoint

Try [http://127.0.0.1:8000/items/5?q=hello](http://127.0.0.1:8000/items/5?q=hello). You should get:

\`\`\`json
{"item_id": 5, "q": "hello"}
\`\`\`

Now try [http://127.0.0.1:8000/items/abc](http://127.0.0.1:8000/items/abc). FastAPI rejects it with a validation error — because \`item_id\` was declared as \`int\`.`
      },
      {
        id: "fastapi-interactive-docs",
        title: "Interactive API Docs",
        url: "",
        content: `## Overview

> FastAPI generates Swagger UI and ReDoc documentation for every endpoint automatically — no extra code required.

**You will learn:**

- What an OpenAPI schema is
- How to use the Swagger UI at \`/docs\` to test endpoints
- When to share ReDoc at \`/redoc\` as reference documentation

---

## Content

### Automatic OpenAPI Documentation

FastAPI generates an OpenAPI **schema** for all your endpoints — an abstract description, not the code itself. The OpenAPI schema powers two interactive documentation UIs included automatically with FastAPI.

---

### Swagger UI

Go to:

\`\`\`
http://127.0.0.1:8000/docs
\`\`\`

You will see an interactive interface listing every endpoint. Click any endpoint, then **"Try it out"** in the top-right corner to send a real request and inspect the response without writing a client.

---

### ReDoc

The second documentation UI is at:

\`\`\`
http://127.0.0.1:8000/redoc
\`\`\`

ReDoc presents the same schema in a three-column reference layout — great for sharing as developer-facing documentation.

---

### Why this matters

Both pages are generated from your code and stay in sync automatically. There is nothing to maintain. The moment you add an endpoint or change a type hint, the docs update.

> Both \`/docs\` and \`/redoc\` are powered by the **OpenAPI standard**. The raw schema lives at \`/openapi.json\` and you can feed it into any OpenAPI tool — code generators, postman, Insomnia, etc.`
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

> FastAPI exposes every HTTP method through a matching decorator — \`@app.get\`, \`@app.post\`, \`@app.put\`, \`@app.delete\`, and more.

**You will learn:**

- The role of each HTTP verb (GET, POST, PUT, PATCH, DELETE)
- How to declare path operations for each verb
- What the function signature contributes to the route

---

## Content

### Path Operations

When building an API, the **path** defines the route or endpoint. The second choice is the **operation** — one of the HTTP "methods" the protocol supports.

| Method | Purpose |
|--------|---------|
| GET | Read data |
| POST | Create data |
| PUT | Update data (replace) |
| PATCH | Partial update |
| DELETE | Delete data |

FastAPI supports all of them via decorators: \`@app.get\`, \`@app.post\`, \`@app.put\`, \`@app.patch\`, \`@app.delete\`, plus advanced ones like \`HEAD\`, \`OPTIONS\`, \`TRACE\`.

---

### Example: All four CRUD verbs

\`\`\`python
from fastapi import FastAPI

app = FastAPI()

@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"action": "read", "id": item_id}

@app.post("/items/")
def create_item(name: str):
    return {"action": "create", "name": name}

@app.put("/items/{item_id}")
def update_item(item_id: int, name: str):
    return {"action": "update", "id": item_id, "name": name}

@app.delete("/items/{item_id}")
def delete_item(item_id: int):
    return {"action": "delete", "id": item_id}
\`\`\`

Each decorator binds the HTTP verb + path to a Python function. The function signature defines what data the endpoint accepts.`
      },
      {
        id: "fastapi-type-hints",
        title: "Python Type Hints in FastAPI",
        url: "",
        content: `## Overview

> Type hints are the engine of FastAPI: a single declaration drives validation, conversion, documentation, and editor support.

**You will learn:**

- What Python type hints are
- How FastAPI reads them at request time
- What you get "for free" when you declare types correctly

---

## Content

### What are Type Hints?

Type hints are a Python 3.6+ syntax that lets you declare the type of a variable, function argument, or return value. They don't change runtime behavior on their own — but tools like editors, type checkers, and frameworks can read them.

FastAPI takes this further: it **uses type hints for everything** — validation, serialization, documentation.

---

### Simple example

\`\`\`python
def greet(name: str, age: int) -> str:
    return f"Hello {name}, you are {age}"
\`\`\`

The hints tell readers (and your editor) that \`name\` is a string and \`age\` is an integer. The \`-> str\` says the function returns a string.

---

### What you get for free in FastAPI

When you write a path operation like:

\`\`\`python
@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}
\`\`\`

You automatically get:

- **Editor support**: auto-completion, type checks, refactoring confidence.
- **Data validation**: incoming \`item_id\` must coerce to \`int\`, or the request is rejected with a clear 422 error.
- **Input conversion**: strings from the URL are converted to Python types.
- **Output conversion**: dicts/objects are serialised to JSON.
- **Self-documenting endpoints** in \`/docs\` and \`/redoc\`.

All from declaring types once.`
      },
      {
        id: "fastapi-pydantic-bodies",
        title: "Request Bodies with Pydantic",
        url: "",
        content: `## Overview

> Declare a \`pydantic.BaseModel\` and FastAPI validates the entire request body against it — no manual parsing.

**You will learn:**

- Why Pydantic models pair naturally with FastAPI
- Defining required vs. optional fields
- What FastAPI returns when validation fails

---

## Content

### Beyond Path & Query

For \`POST\` and \`PUT\` requests, you usually need a **request body** — structured JSON sent by the client. FastAPI uses **Pydantic models** to declare and validate them.

---

### Define a Pydantic model

\`\`\`python
from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}
\`\`\`

---

### What FastAPI checks

When a client sends \`PUT /items/3\` with a JSON body, FastAPI will check:

- \`name\` is a \`str\`.
- \`price\` is a \`float\`.
- \`is_offer\` is a \`bool\` if present.

If any of those fail, FastAPI returns a 422 with a precise list of which fields were wrong and why — no manual validation code required.

---

### The big payoff

Declaring types once gives you:

- Editor support including auto-completion and type checks
- Data validation
- Conversion of input data
- Conversion of output data
- Clear, easy-to-understand errors

This is what makes FastAPI feel **lightweight and safe** at the same time.`
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

> FastAPI, Django, and Flask each solve different problems — picking the right one depends on whether you're shipping a website, a microservice, or an API.

**You will learn:**

- The strengths of Django, Flask, and FastAPI
- A side-by-side comparison of performance, async support, and tooling
- A simple rule of thumb for choosing between them

---

## Content

### The Three Frameworks

All three are Python web frameworks for building web applications, each with distinct strengths.

- **Django** — full-featured, batteries-included framework with a built-in ORM and admin panel. It can be overwhelming for beginners but has comprehensive documentation.
- **Flask** — a microframework, lightweight and easy to get started with. Perfect for simple projects.
- **FastAPI** — a newer framework designed for speed and ease of use. Built-in data validation and interactive docs.

---

### Side-by-side

| Aspect | Django | Flask | FastAPI |
|--------|--------|-------|---------|
| Community | Big (~66K GitHub stars) | Big (~61K) | Big (~50K) |
| Performance | Massive — not the best perf | Better than Django | One of the fastest, native async |
| Async Support | Yes, with limited latency | No (needs Asyncio) | Native async |
| Ease of Use | Complicated to learn | Easy, straightforward | Simplest of the three |
| Interactive Docs | No | No | Yes (Swagger UI + ReDoc) |
| Data Verification | No | No | Yes |

---

### How to choose

- Pick **Django** when you need a CMS-style app with admin UI, auth, ORM, templates, all out of the box.
- Pick **Flask** when you want minimal scaffolding and total control over what gets added.
- Pick **FastAPI** when the product is an **API** — especially one serving ML models, microservices, or high-throughput JSON endpoints.`
      },
      {
        id: "fastapi-benchmarks",
        title: "Performance Benchmarks",
        url: "",
        content: `## Overview

> FastAPI's async-first design puts it near Go and Node.js on benchmarks — and pays off most when endpoints spend their time waiting on I/O.

**You will learn:**

- Why FastAPI ranks so highly on TechEmpower
- The three architectural choices behind the speed
- When the speed actually matters in practice

---

## Content

### TechEmpower Results

According to [TechEmpower benchmarks](https://www.techempower.com/benchmarks/), FastAPI is superior to most other Python frameworks in overall performance. It approaches Go and NodeJS performance because:

1. **ASGI / Starlette underneath** — async I/O without thread-per-request overhead.
2. **Pydantic for parsing** — compiled C-extensions for JSON validation in v2.
3. **Type-hint-driven serialization** — no reflection-at-request-time tax.

---

### Why this matters in practice

For typical CRUD APIs the absolute speed difference rarely dominates — network latency, the database, and the ML model usually do. But when you scale to thousands of concurrent connections (long-lived WebSockets, server-sent events, large fanout), the async-first design pays back many times over.

---

### Rule of thumb

> If your endpoint spends most of its time **waiting** (DB query, downstream API call, file I/O), FastAPI's async model gives you significantly more throughput per CPU core than sync Flask or Django.`
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

> PyCaret is a low-code ML library that handles data prep, training, and tuning — and integrates directly with FastAPI for deployment.

**You will learn:**

- What PyCaret is and what it automates
- Loading a dataset and running \`setup()\`
- Comparing models with \`compare_models()\`

---

## Content

### What is PyCaret?

[PyCaret](https://pycaret.org/) is an open-source, low-code machine-learning library in Python that automates ML workflows. It is end-to-end — data prep, training, tuning, evaluation, and **deployment** — all from a small number of function calls.

PyCaret integrates directly with FastAPI: it can generate a working REST API for a trained model with one call.

---

### Install

\`\`\`bash
pip install pycaret
\`\`\`

\`\`\`python
import pycaret
pycaret.__version__
# '2.3.10'
\`\`\`

---

### Load a dataset

We'll use the built-in \`insurance\` dataset — a regression task predicting medical charges from age, sex, BMI, and region.

\`\`\`python
from pycaret.datasets import get_data
data = get_data('insurance')
\`\`\`

---

### Setup the experiment

\`\`\`python
from pycaret.regression import *
s = setup(data, target='charges')
\`\`\`

\`setup()\` builds the transformation pipeline (encoding, imputation, scaling) based on the data. It must run before any other PyCaret function.

---

### Train and compare models

\`\`\`python
best = compare_models()
\`\`\`

This trains every estimator in PyCaret's library via cross-validation and returns the best one. In the source tutorial, the **Gradient Boosting Regressor** wins.`
      },
      {
        id: "fastapi-create-api",
        title: "Serving the Model as an API",
        url: "",
        content: `## Overview

> PyCaret's \`create_api()\` turns a trained model into a runnable FastAPI service in one function call.

**You will learn:**

- How \`create_api()\` generates a FastAPI file from a model
- Running the generated server with Uvicorn
- The hand-written FastAPI code PyCaret produces

---

## Content

### One-line API Creation

PyCaret's FastAPI integration generates a complete, runnable API file from a trained model:

\`\`\`python
create_api(best, 'insurance_prediction_model')
\`\`\`

This writes \`insurance_prediction_model.py\` to your working directory.

---

### Run it

\`\`\`bash
python insurance_prediction_model.py
\`\`\`

The script boots a Uvicorn server. Open:

- [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) — Swagger UI
- [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc) — ReDoc

Both interactive docs are powered by the OpenAPI standard automatically.

---

### Inside the generated file

The file PyCaret creates is plain, readable FastAPI code:

\`\`\`python
import pandas as pd
from pycaret.regression import load_model, predict_model
from fastapi import FastAPI
import uvicorn

# Create the app
app = FastAPI()

# Load trained Pipeline
model = load_model('my_lr_api')

# Define predict function
@app.post('/predict')
def predict(age, sex, bmi, children, smoker, region):
    data = pd.DataFrame([[age, sex, bmi, children, smoker, region]])
    data.columns = ['age', 'sex', 'bmi', 'children', 'smoker', 'region']
    predictions = predict_model(model, data=data)
    return {'prediction': list(predictions['Label'])}

if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)
\`\`\`

This is the same pattern you would write by hand — PyCaret just saves you the boilerplate.`
      },
      {
        id: "fastapi-conclusion",
        title: "Conclusion & Next Steps",
        url: "",
        content: `## Overview

> A wrap-up of the FastAPI track — what you learned and where to go next in your Python API journey.

**You will learn:**

- The key ideas from the course in one place
- Recommended next topics: dependency injection, WebSockets, OAuth2
- How to ship FastAPI to production with Docker

---

## Content

### What you have learned

- **APIs** let different software programs share data and functionality — the connective tissue of modern architecture.
- **FastAPI** is a high-performance Python web framework built on Starlette + Pydantic, designed for speed of both runtime and development.
- You can stand up a working API in **under 10 lines of code**, with automatic validation and interactive docs included.
- **Type hints + Pydantic models** drive validation, serialization, and documentation from a single declaration.
- FastAPI compares favorably to Django and Flask for API workloads, especially when **async I/O** matters.
- The framework slots cleanly into **ML deployment** workflows — tools like PyCaret can generate a production-ready FastAPI service with one call.

---

### Recommended next steps

- Read the [official FastAPI tutorial](https://fastapi.tiangolo.com/tutorial/) end to end — it is one of the best docs in any framework.
- Practise: rebuild the insurance prediction API by hand without PyCaret, so you understand each piece.
- Learn **dependency injection** in FastAPI — \`Depends()\` is how you wire auth, DB sessions, and configuration.
- Explore **background tasks**, **WebSockets**, and **OAuth2 with JWT** — all first-class in FastAPI.
- Containerize with Docker, then deploy to Render, Fly.io, or AWS Fargate.

---

### Final word

> FastAPI is a great option for developers who want to create an API quickly and easily — without giving up speed, validation, or documentation. Master it and you can ship production-grade Python APIs in hours, not days.

*Tutorial content adapted from the DataCamp FastAPI guide by Moez Ali and the official FastAPI documentation by Sebastián Ramírez.*`
      }
    ]
  }
];
