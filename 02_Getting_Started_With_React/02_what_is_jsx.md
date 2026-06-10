# What Is JSX?

> **Source:** [https://www.thedebuglab.com/lessons/node-path-react-new-what-is-jsx](https://www.thedebuglab.com/lessons/node-path-react-new-what-is-jsx)

---

## Overview

JSX is the syntax that makes React so visually intuitive. In this lesson we learn exactly what JSX is, why it exists, how it differs from plain HTML, and how to write expressive, dynamic JSX with TypeScript in `.tsx` files.

**You will learn:**
- What JSX is and how it compiles.
- The core rules that make JSX different from HTML.
- How to embed dynamic TypeScript expressions inside JSX.
- File extension conventions (`.tsx` vs `.jsx`).

---

## Content

### What is JSX?

**JSX** (JavaScript XML) is a syntax extension that lets you write HTML-like markup directly inside a TypeScript or JavaScript file. It is not valid JavaScript on its own — a compiler (Babel or ESBuild inside Vite) transforms it into `React.createElement()` function calls at build time.

```tsx
// What you write:
const element = <h1 className="title">Hello, GameHub!</h1>;

// What the compiler transforms it to:
const element = React.createElement("h1", { className: "title" }, "Hello, GameHub!");
```

Both produce an identical React element — a plain JavaScript object that describes what to render. JSX is purely syntactic sugar, but it makes components dramatically more readable.

#### File Extensions: `.tsx` vs `.jsx`
In our TypeScript React project:
- **`.tsx`** — TypeScript files containing JSX (use this for components)
- **`.ts`** — TypeScript files with no JSX (use this for utilities, hooks, data)

---

### Why Do We Use JSX?

JSX keeps **rendering logic and UI markup together** in one place: the component. This is intentional — in React, they are inherently coupled. Rather than maintaining a separate HTML template and a JavaScript controller, one component function manages both.

Additional benefits:
* **Rich error messages**: React gives precise error descriptions pointing to specific JSX lines.
* **IDE support**: Full autocomplete, type checking, and inline prop validation.
* **Natural data binding**: Any JavaScript/TypeScript expression can be embedded directly in markup.

---

### The Three Rules of JSX

#### Rule 1 — Return a Single Root Element
A component must return one parent wrapper element. Use a `<div>`, or use a **React Fragment** (`<>...</>`) to avoid adding unnecessary DOM nodes:

```tsx
// ✅ Correct — Fragment wraps multiple elements without extra DOM nodes
function GameInfo() {
  return (
    <>
      <h2>Elden Ring</h2>
      <p>Score: 97</p>
    </>
  );
}

// ❌ Incorrect — two root elements will cause a compiler error
function GameInfo() {
  return (
    <h2>Elden Ring</h2>
    <p>Score: 97</p>
  );
}
```

#### Rule 2 — Close All Tags
Unlike HTML, JSX requires **explicit closing** for every element, including self-closing ones:

```tsx
// ✅ Correct
<img src={game.imageUrl} alt={game.title} />
<input type="search" placeholder="Search..." />

// ❌ Incorrect
<img src={game.imageUrl} alt={game.title}>
<input type="search" placeholder="Search...">
```

#### Rule 3 — camelCase Attributes
Since JSX compiles to JavaScript objects, attribute names follow camelCase conventions. Reserved JavaScript words like `class` become `className`:

| HTML Attribute | JSX Equivalent |
|---|---|
| `class` | `className` |
| `for` | `htmlFor` |
| `stroke-width` | `strokeWidth` |
| `onclick` | `onClick` |
| `tabindex` | `tabIndex` |

```tsx
// ✅ Correct JSX
<div className="game-card" onClick={handleClick}>
  <svg><circle strokeWidth={2} /></svg>
</div>

// ❌ Incorrect — HTML attributes in JSX
<div class="game-card" onclick={handleClick}>
  <svg><circle stroke-width="2" /></svg>
</div>
```

---

### Embedding Dynamic Expressions in JSX

Any valid TypeScript expression can be embedded in JSX using **curly braces** `{}`. This is the "window into JavaScript" inside your markup:

```tsx
interface Props {
  title: string;
  score: number;
  released: number;
}

function GameCard({ title, score, released }: Props) {
  const currentYear = new Date().getFullYear();
  const isNew = released >= currentYear - 1;

  return (
    <div className={`game-card ${isNew ? "new-release" : ""}`}>
      <h3>{title.toUpperCase()}</h3>
      <p>Score: {score}/100</p>
      <p>Released: {released}</p>
      {isNew && <span className="badge">🆕 New Release</span>}
    </div>
  );
}
```

Key patterns demonstrated:
- **String expression**: `{title.toUpperCase()}` — any JS expression resolves inline
- **Dynamic className**: `className={\`game-card ${isNew ? "new-release" : ""}\`}`
- **Conditional rendering**: `{isNew && <span>...</span>}` — render only when `true`
- **Computed values**: `{score}/100` — mix static text and dynamic values

---

### Converting HTML to JSX

Here's a practical HTML snippet and its correct JSX conversion:

```html
<!-- Raw HTML -->
<div class="card">
  <img src="cover.jpg">
  <h2 for="game-title">Hollow Knight</h2>
  <input type="text" tabindex="1">
</div>
```

```tsx
// ✅ Correct JSX
<div className="card">
  <img src="cover.jpg" alt="Hollow Knight cover" />
  <label htmlFor="game-title">Hollow Knight</label>
  <input type="text" tabIndex={1} />
</div>
```

Changes made:
1. `class` → `className`
2. `<img>` → `<img />` (explicit self-close)
3. `for` → `htmlFor`
4. `tabindex` → `tabIndex` with numeric value `{1}`

---

## Assignment

1. Read [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx) from the React docs to review JSX rules with interactive examples.
2. Read [JavaScript in JSX with Curly Braces](https://react.dev/learn/javascript-in-jsx-with-curly-braces) to explore all the places you can embed expressions.
3. Convert a small HTML layout (a navigation bar with 3 links and a search input) into a valid JSX component in a new `.tsx` file.

---

## Knowledge Check

- **What is JSX and how does it get transformed into runnable JavaScript?** (See [What is JSX?](#what-is-jsx))
- **What is the difference between a `.tsx` and a `.ts` file?** (See [File Extensions](#file-extensions-tsx-vs-jsx))
- **Name the three core rules of JSX and explain each.** (See [The Three Rules of JSX](#the-three-rules-of-jsx))
- **How do you embed a conditional TypeScript expression inside JSX markup?** (See [Embedding Dynamic Expressions](#embedding-dynamic-expressions-in-jsx))
