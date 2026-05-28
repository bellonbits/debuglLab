# Passing Data Between Components

> **Source:** [https://www.theodinproject.com/lessons/node-path-react-new-passing-data-between-components](https://www.theodinproject.com/lessons/node-path-react-new-passing-data-between-components)

---

## Overview

React's data flow is **unidirectional** — data only flows downward from parent to child via **props** (short for properties). In this lesson, we'll learn how to define, type, and pass props between components using TypeScript interfaces.

**You will learn:**
- How data flows from parent to child via props.
- How to type props with TypeScript interfaces.
- How to destructure props for clean, readable code.
- How to set default prop values.
- How to pass functions as event handler props.

---

## Content

### Data Transfer in React: Unidirectional Flow

In React, **props flow in one direction only**: from parent down to child. A child component can never directly modify its parent's data. This explicit, controlled flow makes data predictable and debugging straightforward.

```
App (parent)
 │
 │ props: { title, score, imageUrl }
 ▼
GameCard (child) — reads props, cannot push data back up
```

If a child needs to communicate back (e.g., user clicked a like button), the parent passes down a **callback function** as a prop. The child calls it — the parent reacts. This is the standard pattern.

---

### Typing Props with TypeScript Interfaces

In TypeScript, we define an **interface** that strictly describes the shape of a component's props. This gives compile-time safety — if you pass the wrong type or forget a required field, TypeScript tells you immediately.

```tsx
// Without TypeScript — no protection
function GameCard(props) {
  return <h3>{props.titl}</h3>; // typo goes unnoticed
}

// With TypeScript interface — error caught at compile time
interface Props {
  title: string;
  score: number;
  imageUrl: string;
  genre?: string; // optional with ?
}

function GameCard({ title, score, imageUrl, genre }: Props) {
  return (
    <div className="game-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>Score: {score}</p>
      {genre && <span className="badge">{genre}</span>}
    </div>
  );
}
```

---

### Prop Destructuring

Instead of receiving the whole `props` object and referencing `props.title`, `props.score`, etc., we **destructure** the interface directly in the function signature. This is the modern, preferred pattern:

```tsx
// ❌ Verbose — accessing props.X everywhere
function GameCard(props: Props) {
  return <h3>{props.title} — {props.score}</h3>;
}

// ✅ Clean — destructure directly
function GameCard({ title, score, genre }: Props) {
  return <h3>{title} — {score}</h3>;
}
```

---

### Default Props

Use JavaScript's default parameter syntax inside the destructuring to supply fallback values when a prop is not provided:

```tsx
interface Props {
  title: string;
  score?: number;      // optional
  genre?: string;      // optional
}

function GameCard({ title, score = 0, genre = "Unknown Genre" }: Props) {
  return (
    <div className="game-card">
      <h3>{title}</h3>
      <p>Score: {score}/100</p>
      <p>Genre: {genre}</p>
    </div>
  );
}

// Usage — score and genre will use their defaults:
<GameCard title="Hollow Knight" />
// Renders: Score: 0/100, Genre: Unknown Genre

// Explicit overrides:
<GameCard title="Elden Ring" score={97} genre="RPG" />
```

---

### Functions as Props: Callback Handlers

When a child component needs to report an event (a click, a form submission, a selection change) back to its parent, the parent **passes a callback function down as a prop**. The child calls it at the right moment — this is the backbone of interactive React UIs.

```tsx
// Parent: App.tsx
import { useState } from "react";
import GameCard from "./components/GameCard";

interface Game {
  id: number;
  title: string;
  score: number;
}

function App() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const games: Game[] = [
    { id: 1, title: "Elden Ring", score: 97 },
    { id: 2, title: "Hollow Knight", score: 90 },
    { id: 3, title: "Celeste", score: 92 },
  ];

  return (
    <div>
      {selectedGame && <p>Selected: {selectedGame.title}</p>}
      <div className="game-grid">
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            score={game.score}
            onSelect={() => setSelectedGame(game)}
          />
        ))}
      </div>
    </div>
  );
}
```

```tsx
// Child: GameCard.tsx
interface Props {
  title: string;
  score: number;
  onSelect: () => void; // function prop with no return value
}

function GameCard({ title, score, onSelect }: Props) {
  return (
    <div className="game-card" onClick={onSelect}>
      <h3>{title}</h3>
      <p>Score: {score}</p>
    </div>
  );
}

export default GameCard;
```

**Key rules for function props:**
- Pass a **reference** (no parentheses): `onSelect={handleSelect}` ✅
- **Never call immediately**: `onSelect={handleSelect()}` ❌ — this fires on render, not on click
- For inline arguments: wrap in an arrow: `onClick={() => onSelect(game.id)}`

---

### TypeScript: Typing Different Prop Shapes

```tsx
interface Props {
  // Primitives
  title: string;
  score: number;
  isNew: boolean;

  // Optional
  genre?: string;

  // Arrays
  platforms: string[];

  // Objects
  developer: {
    name: string;
    country: string;
  };

  // Functions
  onSelect: () => void;
  onRateGame: (score: number) => void;

  // React children
  children: React.ReactNode;
}
```

---

## Assignment

1. Read [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component) from the React docs and complete the embedded code exercises.
2. Build a `GameCard` component with a TypeScript `Props` interface containing `title`, `score`, `genre` (optional), and an `onSelect` callback. Render 3 `<GameCard />` elements in `App.tsx` and display the selected game title above the grid.

---

## Knowledge Check

- **How does data flow between React components — from child to parent, or parent to child?** (See [Data Transfer in React](#data-transfer-in-react-unidirectional-flow))
- **What is a TypeScript interface and why do we use one to type component props?** (See [Typing Props with TypeScript Interfaces](#typing-props-with-typescript-interfaces))
- **How do you supply a default value for an optional prop in TypeScript?** (See [Default Props](#default-props))
- **Why do we pass a function reference instead of calling the function when wiring event handlers?** (See [Functions as Props](#functions-as-props-callback-handlers))
