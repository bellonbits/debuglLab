# Keys In React

> **Source:** [https://www.theodinproject.com/lessons/node-path-react-new-keys-in-react](https://www.theodinproject.com/lessons/node-path-react-new-keys-in-react)

---

## Overview

Keys are React's internal identity system for items in a dynamic list. They are small but critical — misusing them causes confusing re-rendering bugs that are very hard to track down. In this lesson, we'll master the rules of keys and avoid common anti-patterns.

**You will learn:**
- Why React needs keys on dynamic lists.
- How to choose a good key value (database `id` vs array index).
- Anti-patterns to avoid.
- How keys can be used intentionally to force component resets.

---

## Content

### Why React Needs Keys

React manages a **Virtual DOM** — a lightweight JavaScript copy of the real browser DOM. When state changes, React recreates the virtual DOM tree, **diffs** it against the previous version, and makes only the minimal set of real DOM updates needed.

When you render a dynamic list via `.map()`, React generates multiple instances of the same component. Without keys, React cannot tell which item is which across re-renders. If you add, remove, or reorder items, React might update the wrong instances — leading to incorrect state, animation glitches, or duplicated data.

**Keys give each list item a stable identity across renders.**

```tsx
interface Game {
  id: number;
  title: string;
  score: number;
}

// ✅ Correct — using a stable database id as key
{games.map((game) => (
  <GameCard key={game.id} title={game.title} score={game.score} />
))}
```

React uses the `key` to match virtual DOM nodes across renders. If a key is the same between renders, React knows it's the **same instance** and updates it in place. If the key changes, React destroys the old instance and mounts a brand new one with fresh state.

---

### What Makes a Good Key?

| Strategy | Example | Use When |
|---|---|---|
| **Database ID** ✅ | `key={game.id}` | Always preferred — stable and unique |
| **UUID generated before render** ✅ | `crypto.randomUUID()` once at data init | When generating your own data |
| **Array index** ⚠️ | `key={index}` | **Only** for static, never-reordered lists |
| **Random value in render** ❌ | `key={Math.random()}` | Never — defeats the entire purpose |

#### The Right Way: Database IDs

```tsx
const games: Game[] = [
  { id: 1, title: "Elden Ring", score: 97 },
  { id: 2, title: "Hollow Knight", score: 90 },
  { id: 3, title: "Celeste", score: 92 },
];

function GameGrid() {
  return (
    <div className="game-grid">
      {games.map((game) => (
        <GameCard key={game.id} title={game.title} score={game.score} />
      ))}
    </div>
  );
}
```

#### When Array Index is Acceptable

Array index as key is **only safe** when:
1. The list is completely static (never reordered, never filtered)
2. Items are never inserted in the middle
3. Items are never deleted from the middle

```tsx
// ✅ Fine — months never change order
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

{months.map((month, index) => (
  <option key={index} value={month}>{month}</option>
))}
```

---

### The Anti-Pattern: Generating Keys During Render

**Never generate a new key inside the `.map()` callback.** This creates a brand new key on every render cycle, which tells React to destroy and recreate every component from scratch — defeating reconciliation entirely.

```tsx
// ❌ WRONG — new key on every render = React remounts every GameCard
{games.map((game) => (
  <GameCard key={crypto.randomUUID()} title={game.title} />
))}

// ❌ WRONG — same problem with Math.random()
{games.map((game) => (
  <GameCard key={Math.random()} title={game.title} />
))}

// ✅ CORRECT — generate UUIDs once when defining the data
const games = [
  { id: crypto.randomUUID(), title: "Elden Ring" },
  { id: crypto.randomUUID(), title: "Hollow Knight" },
];

// id is now stable across renders
{games.map((game) => (
  <GameCard key={game.id} title={game.title} />
))}
```

---

### Using Keys to Force Component Resets

There is one deliberate and powerful use of keys beyond lists: **forcing a component to completely reset its state** by changing its key.

Imagine a filter sidebar in GameHub. When a user picks a new genre, you want the search input inside the sidebar to reset to empty. Rather than manually clearing each state variable, you can change the component's key:

```tsx
function App() {
  const [selectedGenre, setSelectedGenre] = useState<string>("All");

  return (
    <div>
      <GenreList onSelect={setSelectedGenre} />
      {/* Changing key unmounts and remounts FilterPanel with fresh state */}
      <FilterPanel key={selectedGenre} genre={selectedGenre} />
    </div>
  );
}
```

When `selectedGenre` changes, `FilterPanel` gets a new `key`. React treats it as an entirely new component instance with brand new internal state — a clean, effortless reset.

---

## Assignment

1. Read [Keeping List Items in Order with Key](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key) from the React docs.
2. Watch this short video: [Index as key — an anti-pattern](https://youtu.be/xlPxnc5uUPQ).
3. Build a `GameGrid` that renders a typed `Game[]` array with proper database `id` keys. Add a "Shuffle" button that randomizes the order of games and observe how React efficiently reorders the cards without remounting them.

---

## Knowledge Check

- **Why can't React automatically assign stable keys to dynamically mapped components?** (See [Why React Needs Keys](#why-react-needs-keys))
- **What is the best source for a key value and why?** (See [What Makes a Good Key?](#what-makes-a-good-key))
- **Why is generating a key value inside `.map()` with `Math.random()` a critical anti-pattern?** (See [The Anti-Pattern](#the-anti-pattern-generating-keys-during-render))
- **How can you intentionally use a key to force a component to reset its internal state?** (See [Using Keys to Force Component Resets](#using-keys-to-force-component-resets))
