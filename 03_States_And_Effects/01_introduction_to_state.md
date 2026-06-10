# Introduction To State

> **Source:** [https://www.thedebuglab.com/lessons/node-path-react-new-introduction-to-state](https://www.thedebuglab.com/lessons/node-path-react-new-introduction-to-state)

---

## Overview

Any exciting application you build is likely to change as the user explores it — toggling themes, selecting filters, fetching new data. React provides **state** — a component's persistent, reactive memory — to make UIs dynamic and responsive. In this lesson, we master state in TypeScript React.

**You will learn:**
- What state is and how it differs from props.
- How to use `useState` with TypeScript generics for type-safe state.
- What happens under the hood when state changes (re-rendering & reconciliation).
- The two essential rules of React Hooks.

---

## Content

### What is State in React?

**State is a component's memory** — data that the component tracks between renders and can update in response to events. When state changes, React automatically re-renders the component with the new values.

**Props vs State:**

| | Props | State |
|---|---|---|
| Who controls it? | Parent component | The component itself |
| Can it change? | Read-only (immutable) | Yes, via setter function |
| When does it update the UI? | When parent re-renders | Immediately on change |
| Example | `title`, `score` passed down | Selected genre, search query |

---

### The `useState` Hook: TypeScript Generics

`useState` is the most fundamental React hook. It returns an array with exactly two elements:
1. The **current state value**
2. A **setter function** that updates the value and triggers a re-render

```tsx
const [stateValue, setStateValue] = useState(initialValue);
```

In TypeScript, `useState` is a **generic function**. You can explicitly annotate the type, which is especially important for complex types like objects or union types:

```tsx
import { useState } from "react";

// ✅ TypeScript infers the type from the initial value
const [count, setCount] = useState(0);          // inferred: number
const [query, setQuery] = useState("");          // inferred: string
const [isLoading, setIsLoading] = useState(false); // inferred: boolean

// ✅ Explicit generic when inference isn't enough
const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
const [selectedGame, setSelectedGame] = useState<Game | null>(null);

// TypeScript will now error if you try to set the wrong type:
setSelectedGenre(42); // ❌ Error: Argument of type 'number' is not assignable
setSelectedGenre("RPG"); // ✅ Correct
```

---

### A Practical Example: GameHub Filters

In GameHub, the user can filter games by genre and platform. We manage these as state in the root `App` component, then pass them down to `GameGrid` as props:

```tsx
// App.tsx
import { useState } from "react";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";

interface Genre {
  id: number;
  name: string;
}

interface Platform {
  id: number;
  name: string;
}

function App() {
  // Filter state — null means "show all"
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <NavBar onSearch={setSearchQuery} />
      <div className="layout">
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={setSelectedGenre}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
}
```

When the user clicks a genre in `GenreList`, it calls `onSelectGenre(genre)`. This triggers `setSelectedGenre`, which updates state in `App`. React re-renders `App`, and the new `selectedGenre` flows down as a prop to `GameGrid`, which fetches and renders filtered games.

---

### How State Works Under the Hood

#### Rendering and Re-rendering
When you call a setter (e.g., `setSelectedGenre(newGenre)`):
1. React queues the state update (multiple updates can be batched).
2. React **re-runs the entire component function** from the top with the new state value.
3. It produces a new virtual DOM tree.
4. The **reconciliation algorithm** diffs the old vs new virtual DOM.
5. Only the changed DOM nodes are committed to the real browser DOM.

The component re-renders, but the state isn't lost — React preserves the latest state values across re-renders. The initial value passed to `useState(initialValue)` is only used on the **first** render.

#### The Reconciliation Algorithm
React's reconciliation (also called "the diffing algorithm") is what makes React fast:
- React compares the old virtual DOM tree with the new one node by node.
- It identifies the minimum set of real DOM operations needed.
- Only those specific changes are applied — not a full page repaint.

This is why React apps feel instant even with complex UIs.

---

### State Update Patterns

#### Updating Simple Values
```tsx
const [count, setCount] = useState(0);

// ✅ Direct value
setCount(count + 1);

// ✅ Functional update (use when new value depends on previous)
setCount(prev => prev + 1);
```

Always use the **functional form** when the new state depends on the previous value — especially inside event handlers that might fire rapidly.

#### Updating Arrays (Immutably)
```tsx
const [games, setGames] = useState<Game[]>([]);

// ✅ Add a game — create new array
setGames(prev => [...prev, newGame]);

// ✅ Remove a game — filter out by id
setGames(prev => prev.filter(g => g.id !== removedId));

// ✅ Update a game — map and replace
setGames(prev =>
  prev.map(g => g.id === updatedGame.id ? updatedGame : g)
);
```

**Never mutate state directly.** Always create a new value:
```tsx
// ❌ WRONG — mutates existing state array
games.push(newGame);
setGames(games);

// ✅ CORRECT — creates a new array
setGames([...games, newGame]);
```

#### Updating Objects
```tsx
interface Filters {
  genre: string | null;
  platform: string | null;
  searchQuery: string;
}

const [filters, setFilters] = useState<Filters>({
  genre: null,
  platform: null,
  searchQuery: "",
});

// ✅ Spread and override — preserves other fields
setFilters(prev => ({ ...prev, genre: "RPG" }));
```

---

### The Rules of Hooks

React hooks must follow two rules. These are enforced by the `eslint-plugin-react-hooks` linter plugin (included in Vite templates):

1. **Only call hooks at the top level of a component function.** Never inside loops, conditions, or nested functions. This ensures hook call order is consistent across every render.

2. **Only call hooks inside React function components (or custom hooks).** Never in plain utility functions or class methods.

```tsx
// ❌ WRONG — hook inside a condition
function GameCard({ isLoggedIn }: Props) {
  if (isLoggedIn) {
    const [liked, setLiked] = useState(false); // ❌ violates Rule 1
  }
}

// ✅ CORRECT — hook always at the top level
function GameCard({ isLoggedIn }: Props) {
  const [liked, setLiked] = useState(false); // ✅ always runs

  if (!isLoggedIn) return null;
  return <div>...</div>;
}
```

---

## Assignment

1. Read [State: A Component's Memory](https://react.dev/learn/state-a-components-memory) from the React docs.
2. Read [Render and Commit](https://react.dev/learn/render-and-commit) to understand how React commits updates to the DOM.
3. Build a `GenreList` and `App` component where clicking a genre button updates a `selectedGenre` state variable (typed as `Genre | null`). Display the selected genre name above the list.

---

## Knowledge Check

- **What is the difference between props and state?** (See [What is State in React?](#what-is-state-in-react))
- **How do you use TypeScript generics with `useState` to type complex state?** (See [The `useState` Hook: TypeScript Generics](#the-usestate-hook-typescript-generics))
- **Why must you never mutate state arrays or objects directly?** (See [Updating Arrays (Immutably)](#updating-arrays-immutably))
- **What are the two Rules of Hooks and why do they exist?** (See [The Rules of Hooks](#the-rules-of-hooks))
