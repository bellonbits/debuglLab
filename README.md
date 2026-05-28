# The Debug Society — React Course Archive

> An offline-ready, beautifully formatted Markdown archive of the **React Course** from **The Odin Project**.
> Twenty-six lessons across eight modules, structured so each file reads the same way: a short **Overview**, the **Content** itself, the **Assignment**, and a **Knowledge Check**.

---

## How a lesson is laid out

Every lesson in this archive follows the same skeleton, so you always know where to look:

```markdown
# Lesson Title

> **Source:** [original lesson link]

---

## Overview

> A short intro paragraph as a blockquote callout.

**You will learn:**
- bullet 1
- bullet 2

---

## Content

### Concept one
body...

### Concept two
body...

---

## Assignment

1. task
2. task

---

## Knowledge Check

> Reflection prompts — click a question to jump back to its anchor.

- [Question 1](#anchor)
- [Question 2](#anchor)
```

---

## Curriculum

### Module 1 — Introduction

- [How This Course Will Work](./01_Introduction/01_how_this_course_will_work.md) — The structure of the course and what to expect.
- [Introduction to React](./01_Introduction/02_introduction_to_react.md) — What React is, why it exists, and how it differs from vanilla JS.
- [Setting Up a React Environment](./01_Introduction/03_setting_up_a_react_environment.md) — Vite, npm, and the initial boilerplate.

### Module 2 — Getting Started With React

- [React Components](./02_Getting_Started_With_React/01_react_components.md) — The building blocks: functional components.
- [What is JSX?](./02_Getting_Started_With_React/02_what_is_jsx.md) — JavaScript-XML syntax and what it compiles to.
- [Passing Data Between Components](./02_Getting_Started_With_React/03_passing_data_between_components.md) — Props and unidirectional data flow.
- [Rendering Techniques](./02_Getting_Started_With_React/04_rendering_techniques.md) — Conditional rendering and rendering lists.
- [Keys in React](./02_Getting_Started_With_React/05_keys_in_react.md) — Why unique keys matter to reconciliation.

### Module 3 — States and Effects

- [Introduction to State](./03_States_And_Effects/01_introduction_to_state.md) — Reactive components with `useState`.
- [More on State](./03_States_And_Effects/02_more_on_state.md) — Batched updates and functional updates.
- [Project: CV Application](./03_States_And_Effects/03_project_cv_application.md) — Build an interactive CV generator.
- [How to Deal with Side Effects](./03_States_And_Effects/04_how_to_deal_with_side_effects.md) — The `useEffect` lifecycle.
- [Project: Memory Card](./03_States_And_Effects/05_project_memory_card.md) — A memory game that shuffles cards on click.

### Module 4 — Class Components

- [Class Based Components](./04_Class_Components/01_class_based_components.md) — Legacy React and class syntax.
- [Component Lifecycle Methods](./04_Class_Components/02_component_lifecycle_methods.md) — `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.

### Module 5 — React Testing

- [Introduction to React Testing](./05_React_Testing/01_introduction_to_react_testing.md) — Vitest and React Testing Library.
- [Mocking Callbacks and Components](./05_React_Testing/02_mocking_callbacks_and_components.md) — Isolating components by mocking dependencies.

### Module 6 — The React Ecosystem

- [Type Checking with PropTypes](./06_The_React_Ecosystem/01_type_checking_with_proptypes.md) — Runtime prop validation.
- [React Router](./06_The_React_Ecosystem/02_react_router.md) — Multi-page navigation and client-side routing.
- [Fetching Data in React](./06_The_React_Ecosystem/03_fetching_data_in_react.md) — APIs, loaders, and error boundaries.
- [Styling React Applications](./06_The_React_Ecosystem/04_styling_react_applications.md) — Plain CSS, CSS Modules, CSS-in-JS, Tailwind.
- [Project: Shopping Cart](./06_The_React_Ecosystem/05_project_shopping_cart.md) — A routed shopping app with a dynamic cart.

### Module 7 — More React Concepts

- [Managing State with the Context API](./07_More_React_Concepts/01_managing_state_with_the_context_api.md) — Solving prop drilling.
- [Reducing State](./07_More_React_Concepts/02_reducing_state.md) — `useReducer` for complex state.
- [Refs and Memoization](./07_More_React_Concepts/03_refs_and_memoization.md) — `useRef`, `useMemo`, `useCallback`.

### Module 8 — Conclusion

- [Conclusion](./08_Conclusion/01_conclusion.md) — Wrap-up, key takeaways, and next steps.

---

## Reading offline

The lessons are plain GitHub-flavored Markdown — readable anywhere a renderer is available (GitHub, VS Code, Obsidian, a local viewer). External lesson links pointing at `theodinproject.com` are stripped to `#` at parse time so the bundled app stays fully offline.

## Reading inside the app

A small Vite + React reader lives alongside the markdown. To run it:

```bash
npm install
npm run dev
```

When you change a lesson file, regenerate the bundled data with:

```bash
python3 compile_lessons.py
```

That rewrites `src/data/lessonsData.ts`, which the reader imports at startup.
# debuglLab
