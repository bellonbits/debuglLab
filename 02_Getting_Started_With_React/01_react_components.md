# React Components

> **Source:** [https://www.thedebuglab.com/lessons/node-path-react-new-react-components](https://www.thedebuglab.com/lessons/node-path-react-new-react-components)

---

## Overview

In this lesson we'll be going over the basics of React components — what they are, how to create them, how to type them with TypeScript, and how to combine them into a complete interface.

**You will learn:**
- What React components are and why they are fundamental.
- How to create typed functional components using TypeScript.
- How to export and import components to build larger interfaces.
- How component trees are structured in a real project.

---

## Content

### What are Components?

The beauty of React is that it lets you break a UI down into independent, reusable, and composable chunks called **components**. Components are JavaScript (or TypeScript) functions that accept inputs and return JSX — a visual description of what to render on screen.

Think of a real application like our **GameHub** (Video Game Discovery Engine):

| Component | Responsibility |
|---|---|
| `App` | Root — holds the entire application |
| `NavBar` | Top navigation bar with search input |
| `GenreList` | Sidebar displaying filterable game genres |
| `GameGrid` | Main grid of game cards |
| `GameCard` | Individual game card with image and metadata |
| `PlatformIconList` | Row of platform SVG icons on each card |
| `CriticScore` | Colored badge showing the Metacritic score |

Every visible element on the screen is a component, and **components compose into a tree** with `App` at the root.

---

### How to Create a Functional Component (TypeScript)

In TypeScript React projects (`.tsx` files), functional components are plain functions that return JSX. All component names **must be capitalized** — this is how React tells the difference between a native HTML tag (`<div>`) and a custom component (`<GameCard />`).

```tsx
// GameCard.tsx
function GameCard() {
  return (
    <div className="game-card">
      <h3>The Legend of Zelda</h3>
      <p>Platform: Nintendo Switch</p>
    </div>
  );
}

export default GameCard;
```

#### Typing Component Props with Interfaces

In TypeScript, we define a strict **interface** to describe the shape of data passed into a component. This catches mistakes at compile time rather than runtime:

```tsx
// GameCard.tsx
interface Props {
  title: string;
  platform: string;
  score: number;
  imageUrl?: string; // optional prop
}

function GameCard({ title, platform, score, imageUrl }: Props) {
  return (
    <div className="game-card">
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h3>{title}</h3>
      <p>Platform: {platform}</p>
      <span className="score">{score}</span>
    </div>
  );
}

export default GameCard;
```

The `?` after `imageUrl` marks it as optional — the component works perfectly even if no image URL is passed in.

---

### Where Do Components Live?

Each component lives in its own file inside the `src/` directory. This keeps your codebase **modular and independently testable**.

#### Exporting Components

Use `export default` for the primary export of a file:

```tsx
// NavBar.tsx
function NavBar() {
  return (
    <nav>
      <input type="search" placeholder="Search games..." />
    </nav>
  );
}

export default NavBar;
```

#### Importing and Composing Components

In your `App.tsx` root component, import child components and compose them:

```tsx
// App.tsx
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <div>
      <NavBar />
      <div className="layout">
        <GenreList />
        <GameGrid />
      </div>
    </div>
  );
}

export default App;
```

#### Named Exports vs Default Exports

```tsx
// utilities.ts
export const API_BASE_URL = "https://api.rawg.io/api";  // named export
export function formatScore(score: number): string {     // named export
  return score.toString();
}

// Importing named exports
import { API_BASE_URL, formatScore } from "./utilities";

// Importing a default export
import GameCard from "./components/GameCard";
```

---

### The Component Tree in Practice

A React application builds its UI as a **tree structure**:

```
App
├── NavBar
│   └── SearchInput
├── GenreList
│   └── GenreItem (× many)
└── GameGrid
    └── GameCard (× many)
        ├── PlatformIconList
        │   └── PlatformIcon (× many)
        └── CriticScore
```

React renders this tree from top to bottom, and when any state changes, only the affected subtree is re-evaluated and committed to the real DOM.

---

## Assignment

1. Create a new component named `GameCard.tsx` that accepts `title`, `score`, and `imageUrl` props typed with a TypeScript interface. Render a card that displays the game's image, title, and score with basic styling.
2. Create an `App.tsx` that renders three `<GameCard />` components with different game data passed as props.
3. Experiment with named vs default exports — try exporting your component as both.

---

## Knowledge Check

- **What is a React component, and how does it differ from a plain HTML element?** (See [What are Components?](#what-are-components))
- **Why must React component names be capitalized?** (See [How to Create a Functional Component](#how-to-create-a-functional-component-typescript))
- **How do TypeScript interfaces improve the reliability of component props?** (See [Typing Component Props with Interfaces](#typing-component-props-with-interfaces))
- **Explain the difference between a named export and a default export.** (See [Named Exports vs Default Exports](#named-exports-vs-default-exports))
