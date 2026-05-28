"""
One-shot reformatter for fastApiLessonsData.ts content strings.

For each lesson, prepends a ## Overview (one-sentence blockquote callout +
"You will learn" bullets) and a ## Content header, so the FastAPI lessons
visually match the reformatted React lessons.
"""

import re

PATH = "/Users/mac/Debug Society/src/data/fastApiLessonsData.ts"

# id -> (overview blockquote text, list of "you will learn" bullets)
OVERVIEWS = {
    "fastapi-what-is": (
        "FastAPI is a high-performing async web framework for building Python APIs with type hints — fast, self-documenting, and production-ready out of the box.",
        [
            "What FastAPI is and why it exists",
            "The frameworks it builds on (Starlette + Pydantic)",
            "The headline features that set it apart",
        ],
    ),
    "fastapi-installing": (
        "Get FastAPI running locally in three commands: install the framework, install an ASGI server, and verify the version.",
        [
            "Install FastAPI and Uvicorn",
            "Use the `[all]` extras bundle for development",
            "Verify the installed version",
        ],
    ),
    "fastapi-simple-api": (
        "Build a working FastAPI app in under fifteen lines — one `FastAPI()` instance and a couple of decorated functions.",
        [
            "Create the `app` instance",
            "Register endpoints with `@app.get(...)` decorators",
            "Use type hints to validate path and query parameters",
        ],
    ),
    "fastapi-running-uvicorn": (
        "Boot your API with the Uvicorn ASGI server and confirm both endpoints respond correctly in the browser.",
        [
            "Start the server with `uvicorn main:app --reload`",
            "Interpret the Uvicorn startup output",
            "See FastAPI reject invalid input automatically",
        ],
    ),
    "fastapi-interactive-docs": (
        "FastAPI generates Swagger UI and ReDoc documentation for every endpoint automatically — no extra code required.",
        [
            "What an OpenAPI schema is",
            "How to use the Swagger UI at `/docs` to test endpoints",
            "When to share ReDoc at `/redoc` as reference documentation",
        ],
    ),
    "fastapi-http-methods": (
        "FastAPI exposes every HTTP method through a matching decorator — `@app.get`, `@app.post`, `@app.put`, `@app.delete`, and more.",
        [
            "The role of each HTTP verb (GET, POST, PUT, PATCH, DELETE)",
            "How to declare path operations for each verb",
            "What the function signature contributes to the route",
        ],
    ),
    "fastapi-type-hints": (
        "Type hints are the engine of FastAPI: a single declaration drives validation, conversion, documentation, and editor support.",
        [
            "What Python type hints are",
            "How FastAPI reads them at request time",
            "What you get \"for free\" when you declare types correctly",
        ],
    ),
    "fastapi-pydantic-bodies": (
        "Declare a `pydantic.BaseModel` and FastAPI validates the entire request body against it — no manual parsing.",
        [
            "Why Pydantic models pair naturally with FastAPI",
            "Defining required vs. optional fields",
            "What FastAPI returns when validation fails",
        ],
    ),
    "fastapi-vs-django-flask": (
        "FastAPI, Django, and Flask each solve different problems — picking the right one depends on whether you're shipping a website, a microservice, or an API.",
        [
            "The strengths of Django, Flask, and FastAPI",
            "A side-by-side comparison of performance, async support, and tooling",
            "A simple rule of thumb for choosing between them",
        ],
    ),
    "fastapi-benchmarks": (
        "FastAPI's async-first design puts it near Go and Node.js on benchmarks — and pays off most when endpoints spend their time waiting on I/O.",
        [
            "Why FastAPI ranks so highly on TechEmpower",
            "The three architectural choices behind the speed",
            "When the speed actually matters in practice",
        ],
    ),
    "fastapi-pycaret-intro": (
        "PyCaret is a low-code ML library that handles data prep, training, and tuning — and integrates directly with FastAPI for deployment.",
        [
            "What PyCaret is and what it automates",
            "Loading a dataset and running `setup()`",
            "Comparing models with `compare_models()`",
        ],
    ),
    "fastapi-create-api": (
        "PyCaret's `create_api()` turns a trained model into a runnable FastAPI service in one function call.",
        [
            "How `create_api()` generates a FastAPI file from a model",
            "Running the generated server with Uvicorn",
            "The hand-written FastAPI code PyCaret produces",
        ],
    ),
    "fastapi-conclusion": (
        "A wrap-up of the FastAPI track — what you learned and where to go next in your Python API journey.",
        [
            "The key ideas from the course in one place",
            "Recommended next topics: dependency injection, WebSockets, OAuth2",
            "How to ship FastAPI to production with Docker",
        ],
    ),
}


def find_template_literal_end(text, start):
    """Given the index of the opening backtick of a template literal, return
    the index just past the closing backtick.  Accounts for escaped \` chars.
    """
    i = start + 1
    n = len(text)
    while i < n:
        ch = text[i]
        if ch == "\\":
            i += 2
            continue
        if ch == "`":
            return i + 1
        i += 1
    raise ValueError("Unterminated template literal starting at %d" % start)


def main():
    with open(PATH, "r", encoding="utf-8") as f:
        src = f.read()

    out = []
    i = 0
    n = len(src)
    id_pattern = re.compile(r'id:\s*"([^"]+)"\s*,\s*\n\s*title:\s*"[^"]+",\s*\n\s*url:\s*"[^"]*",\s*\n\s*content:\s*`', re.MULTILINE)

    modified = 0
    last_end = 0
    for m in id_pattern.finditer(src):
        lesson_id = m.group(1)
        if lesson_id not in OVERVIEWS:
            continue
        backtick_pos = m.end() - 1  # position of the opening backtick
        end_pos = find_template_literal_end(src, backtick_pos)
        original_content = src[backtick_pos + 1 : end_pos - 1]

        # Skip if already restructured (idempotency)
        if original_content.lstrip().startswith("## Overview"):
            continue

        # Detect the closing source blockquote if present and extract it so it
        # stays at the bottom of the body.
        overview_text, bullets = OVERVIEWS[lesson_id]
        bullets_md = "\n".join(f"- {b}" for b in bullets)

        new_content = (
            f"## Overview\n\n"
            f"> {overview_text}\n\n"
            f"**You will learn:**\n\n"
            f"{bullets_md}\n\n"
            f"---\n\n"
            f"## Content\n\n"
            f"{original_content.lstrip()}"
        )

        # Re-escape backticks: original_content already has escaped backticks,
        # and we preserve them since we sliced the raw source between the
        # outer backticks.
        out.append(src[last_end : backtick_pos + 1])
        out.append(new_content)
        out.append("`")
        last_end = end_pos
        modified += 1

    out.append(src[last_end:])

    new_src = "".join(out)

    with open(PATH, "w", encoding="utf-8") as f:
        f.write(new_src)

    print(f"Restructured {modified} FastAPI lesson(s).")


if __name__ == "__main__":
    main()
