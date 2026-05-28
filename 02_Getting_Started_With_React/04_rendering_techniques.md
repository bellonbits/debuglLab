# Rendering Techniques

> **Source:** [https://www.theodinproject.com/lessons/node-path-react-new-rendering-techniques](https://www.theodinproject.com/lessons/node-path-react-new-rendering-techniques)

---

## Overview

Now that we understand components and props, let's explore the two most powerful JSX patterns: **rendering dynamic lists** and **conditionally rendering UI**. These are the building blocks behind every real-world data-driven React application.

**You will learn:**
- How to map over typed arrays and render lists of components.
- Three techniques for conditional rendering (`&&`, ternary `? :`, and early-return guards).
- How to handle loading and empty states gracefully.

---

## Content

### Rendering a List of Components

In the GameHub app, we fetch an array of game objects from an API and render one `<GameCard />` for each game. We use JavaScript's `.map()` method to transform the data array into a JSX array:

```tsx
// types.ts
export interface Game {
  id: number;
  title: string;
  score: number;
  imageUrl: string;
  genre: string;
}
```

```tsx
// GameGrid.tsx
import GameCard from "./GameCard";
import { Game } from "../types";

interface Props {
  games: Game[];
}

function GameGrid({ games }: Props) {
  return (
    <div className="game-grid">
      {games.map((game) => (
        <GameCard
          key={game.id}
          title={game.title}
          score={game.score}
          imageUrl={game.imageUrl}
          genre={game.genre}
        />
      ))}
    </div>
  );
}

export default GameGrid;
```

**Important**: Every element inside a `.map()` **must have a unique `key` prop**. React uses this to efficiently identify which items changed, were added, or were removed during re-renders. Always use a stable database `id` as the key — never a random value or array index.

---

### Conditionally Rendering UI

Real applications constantly show/hide elements based on state. React gives us three clean patterns for this.

#### Pattern 1: The `&&` Operator (Render or Nothing)

Use `&&` when you want to render something or render nothing at all. If the left side is truthy, the right side renders:

```tsx
interface Props {
  title: string;
  score: number;
  isNew: boolean;
  metacriticScore?: number;
}

function GameCard({ title, score, isNew, metacriticScore }: Props) {
  return (
    <div className="game-card">
      <h3>{title}</h3>
      {isNew && <span className="badge new">🆕 New Release</span>}
      {metacriticScore && (
        <span className="critic-score">{metacriticScore}</span>
      )}
    </div>
  );
}
```

> ⚠️ **Common Pitfall**: Never put a number on the left of `&&`. If `metacriticScore` is `0`, JSX renders the number `0` literally! Use `{metacriticScore !== undefined && ...}` to be safe.

#### Pattern 2: Ternary Operator (One Thing or Another)

Use `? :` when you want to render one of two possible outputs:

```tsx
function CriticScore({ score }: { score: number }) {
  return (
    <span
      className={`critic-score ${score >= 75 ? "green" : score >= 60 ? "yellow" : "red"}`}
    >
      {score}
    </span>
  );
}
```

#### Pattern 3: Early Return Guards (Clean Complex Logic)

For multi-condition logic, use early `return` statements **before** the main JSX. This is the cleanest pattern for loading and error states:

```tsx
// GameGrid.tsx
interface Props {
  games: Game[];
  isLoading: boolean;
  error: string | null;
}

function GameGrid({ games, isLoading, error }: Props) {
  // Guard 1: error state
  if (error) {
    return (
      <div className="error-message">
        <p>⚠️ {error}</p>
      </div>
    );
  }

  // Guard 2: loading state
  if (isLoading) {
    return (
      <div className="skeleton-grid">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className="skeleton-card" />
        ))}
      </div>
    );
  }

  // Guard 3: empty state
  if (games.length === 0) {
    return <p className="no-results">No games found. Try a different filter.</p>;
  }

  // Happy path: render the full grid
  return (
    <div className="game-grid">
      {games.map((game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </div>
  );
}
```

This pattern is highly readable — each guard handles one failure mode, and the main return at the bottom is the successful path.

---

### Conditional CSS Classes

A common pattern is applying CSS classes conditionally based on state:

```tsx
// Dark/light mode toggle
interface Props {
  isDarkMode: boolean;
}

function NavBar({ isDarkMode }: Props) {
  return (
    <nav className={`navbar ${isDarkMode ? "dark" : "light"}`}>
      <h1>GameHub</h1>
    </nav>
  );
}
```

For multiple conditional classes, build a string:

```tsx
function GameCard({ title, score, isSelected, isNew }: Props) {
  const classes = [
    "game-card",
    isSelected ? "selected" : "",
    isNew ? "new-release" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{title}</div>;
}
```

---

## Assignment

1. Read [Conditional Rendering](https://react.dev/learn/conditional-rendering) from the React docs and complete all interactive examples.
2. Read [Rendering Lists](https://react.dev/learn/rendering-lists) from the React docs to strengthen your understanding of `.map()` and keys.
3. Build a `GameGrid` component that accepts a `Game[]` prop and renders `<GameCard />` for each game. Add `isLoading` and `error` props with appropriate early-return guards.

---

## Knowledge Check

- **How do you render a list of typed components from an array using `.map()`?** (See [Rendering a List of Components](#rendering-a-list-of-components))
- **What is the pitfall of using a numeric value on the left side of a `&&` expression in JSX?** (See [Pattern 1: The `&&` Operator](#pattern-1-the--operator-render-or-nothing))
- **When would you use early return guards instead of ternary operators?** (See [Pattern 3: Early Return Guards](#pattern-3-early-return-guards-clean-complex-logic))
- **How do you conditionally apply CSS classNames in JSX?** (See [Conditional CSS Classes](#conditional-css-classes))
