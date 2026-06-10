// TypeScript Full Course — The Debug Society
// A comprehensive TypeScript curriculum covering everything from setup to advanced patterns.

export interface TypeScriptLesson {
  id: string;
  title: string;
  duration: string;
  content: string;
}

export interface TypeScriptSection {
  sectionId: string;
  sectionTitle: string;
  description: string;
  lessons: TypeScriptLesson[];
}

export const typescriptLessonsData: TypeScriptSection[] = [
  // ─────────────────────────────────────────────────────────────
  // SECTION 1 — GETTING STARTED
  // ─────────────────────────────────────────────────────────────
  {
    sectionId: "01_getting_started",
    sectionTitle: "1. Getting Started",
    description: "Set up your TypeScript environment, understand the TypeScript compiler, and write your first typed program.",
    lessons: [
      {
        id: "ts-what-is-typescript",
        title: "What Is TypeScript?",
        duration: "8 min",
        content: `## Overview

> TypeScript is JavaScript with static types added on top. It was created by Microsoft and designed to scale JavaScript to large, complex codebases — catching bugs at compile time before your code ever runs.

**You will learn:**
- Why TypeScript exists and what problem it solves.
- The difference between statically and dynamically typed languages.
- How the TypeScript compiler (tsc) works.
- What "transpilation" means.

---

## Content

### The Problem With JavaScript

JavaScript is a **dynamically typed** language. Types are checked at **runtime** — not when you write the code. This means you only discover type errors when the program is already running, often in production.

\`\`\`javascript
// JavaScript — no error until runtime
function add(a, b) {
  return a + b;
}

add(5, "10"); // Returns "510" — not 15!
\`\`\`

This is unexpected behavior. The developer passed a number and a string, expecting a sum — they got string concatenation.

---

### Statically vs. Dynamically Typed Languages

| Feature | Statically Typed | Dynamically Typed |
|---|---|---|
| **Type checking** | At compile time | At runtime |
| **Examples** | TypeScript, C#, Java, Go | JavaScript, Python, Ruby |
| **Errors caught** | Before execution | During execution |
| **IDE support** | Rich autocomplete & inference | Limited |

TypeScript brings the safety of statically typed languages to the JavaScript ecosystem.

---

### What TypeScript Does

TypeScript is a **superset of JavaScript** — every valid JavaScript file is also valid TypeScript. TypeScript adds:

1. **Type annotations** — explicitly declare the type of a variable, parameter, or return value.
2. **Type inference** — TypeScript figures out types from context without you writing them.
3. **Compile-time checking** — the TypeScript compiler (\`tsc\`) catches errors before the code runs.
4. **Transpilation** — \`tsc\` compiles TypeScript into clean JavaScript that browsers and Node.js understand.

\`\`\`text
yourFile.ts  →  [tsc compiler]  →  yourFile.js
\`\`\`

> **Note:** TypeScript types disappear entirely at runtime. They only exist at compile time to help you catch bugs early. The output is always standard JavaScript.

---

### A Quick Taste

\`\`\`typescript
// TypeScript — error caught immediately by the compiler
function add(a: number, b: number): number {
  return a + b;
}

add(5, "10"); // ❌ Argument of type 'string' is not assignable to parameter of type 'number'
add(5, 10);   // ✅ Returns 15
\`\`\`

The \`: number\` annotations after each parameter and after the \`)\` are **type annotations**. They tell TypeScript exactly what types this function expects and returns.

---

## Knowledge Check

- **What is the core difference between a statically and dynamically typed language?**
- **Does TypeScript run in the browser directly? Why or why not?**
- **What does the TypeScript compiler (\`tsc\`) produce?**

---

## Assignment

1. Read the introduction of the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).
2. Think of a real JavaScript bug you've seen or encountered that would have been caught by TypeScript's type system.
`
      },
      {
        id: "ts-environment-setup",
        title: "Environment Setup",
        duration: "10 min",
        content: `## Overview

> Before writing TypeScript, we need to configure our development environment. We'll install Node.js, the TypeScript compiler, and configure VS Code for the best developer experience.

**You will learn:**
- Installing Node.js and verifying it works.
- Installing the TypeScript compiler globally via npm.
- Configuring VS Code with essential extensions.
- Compiling and running your first TypeScript program.

---

## Content

### Step 1: Install Node.js

Download Node.js from [nodejs.org](https://nodejs.org) and select the **LTS** (Long Term Support) version. After installation, verify it works:

\`\`\`bash
node -v    # Should print something like: v20.11.0
npm -v     # Should print something like: 10.2.0
\`\`\`

### Step 2: Install TypeScript

Use npm to install the TypeScript compiler globally on your system:

\`\`\`bash
npm install -g typescript
\`\`\`

Verify the installation:

\`\`\`bash
tsc -v     # Should print: Version 5.x.x
\`\`\`

### Step 3: Configure VS Code

Install the following VS Code extensions for the best TypeScript experience:

| Extension | Purpose |
|---|---|
| **ESLint** | Code quality and style enforcement |
| **Prettier** | Automatic code formatting |
| **Error Lens** | Inline error highlighting (highly recommended) |

> **Tip:** VS Code has built-in TypeScript support. You get rich IntelliSense, hover types, and error highlighting out of the box — no extra extension required.

### Step 4: Write & Compile Your First Program

Create a folder and open it in VS Code. Create \`index.ts\`:

\`\`\`typescript
let message: string = "Hello, TypeScript!";
console.log(message);
\`\`\`

Compile it to JavaScript:

\`\`\`bash
tsc index.ts
\`\`\`

This creates an \`index.js\` file. Run it with Node:

\`\`\`bash
node index.js
# Output: Hello, TypeScript!
\`\`\`

---

## Knowledge Check

- **What command installs TypeScript globally?**
- **What command compiles a \`.ts\` file to \`.js\`?**
- **Why do you need Node.js to work with TypeScript?**

---

## Assignment

1. Verify that \`node -v\` and \`tsc -v\` both print valid versions.
2. Create \`index.ts\`, write a console.log, compile it, and run the output with Node.
`
      },
      {
        id: "ts-tsconfig",
        title: "Project Configuration (tsconfig.json)",
        duration: "12 min",
        content: `## Overview

> Real projects need proper folder structure and compiler settings. \`tsconfig.json\` is the TypeScript project configuration file that controls how the compiler behaves.

**You will learn:**
- Generating and understanding \`tsconfig.json\`.
- Setting \`rootDir\` and \`outDir\` for clean project structure.
- Key compiler options you'll use in every project.
- Using \`tsc --watch\` for automatic recompilation.

---

## Content

### Generating tsconfig.json

Run this command at your project root to generate a \`tsconfig.json\` with all options and their documentation:

\`\`\`bash
tsc --init
\`\`\`

### Project Structure

Create this folder structure:

\`\`\`text
my-project/
├── src/          ← TypeScript source files
│   └── index.ts
├── dist/         ← Compiled JavaScript output
└── tsconfig.json
\`\`\`

### Essential Compiler Options

Open \`tsconfig.json\` and configure the key settings:

\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",          // JavaScript version to compile to
    "module": "commonjs",        // Module system (use "ESNext" for Vite/React)
    "rootDir": "./src",          // Source TypeScript files
    "outDir": "./dist",          // Compiled JavaScript output
    "strict": true,              // Enable ALL strict type checks
    "noImplicitAny": true,       // Error on implicit 'any' types
    "strictNullChecks": true,    // Variables can't be null/undefined unless declared
    "noUnusedLocals": true,      // Error on unused variables
    "noUnusedParameters": true,  // Error on unused function parameters
    "sourceMap": true,           // Generate source maps for debugging
    "esModuleInterop": true      // Better CommonJS/ES module interop
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
\`\`\`

| Option | What it does |
|---|---|
| \`strict: true\` | Master switch enabling all strict checks |
| \`noImplicitAny\` | Disallow variables that get typed as \`any\` accidentally |
| \`strictNullChecks\` | Makes \`null\` and \`undefined\` distinct, non-assignable types |
| \`sourceMap\` | Maps compiled JS back to TS for debugging |

### Compile the Whole Project

With \`tsconfig.json\` in place, just run:

\`\`\`bash
tsc          # One-time build
tsc --watch  # Rebuild automatically on every file save
\`\`\`

Output goes into \`dist/\`. Run with:

\`\`\`bash
node dist/index.js
\`\`\`

> **Note:** Always commit your \`tsconfig.json\` to version control. It is the authoritative description of how your project is compiled and should be consistent across all developer machines.

---

## Knowledge Check

- **What is the purpose of \`rootDir\` and \`outDir\` in \`tsconfig.json\`?**
- **Why is \`strict: true\` strongly recommended for new projects?**
- **What does \`tsc --watch\` do?**

---

## Assignment

1. Run \`tsc --init\` and configure \`rootDir\`, \`outDir\`, and \`strict: true\`.
2. Create a \`src/index.ts\` and compile the project. Verify the output appears in \`dist/\`.
3. Enable \`tsc --watch\` and observe it recompile when you save changes.
`
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SECTION 2 — TYPES & ANNOTATIONS
  // ─────────────────────────────────────────────────────────────
  {
    sectionId: "02_types_and_annotations",
    sectionTitle: "2. Types & Annotations",
    description: "Master TypeScript's type system — from primitive annotations to objects, arrays, and special types.",
    lessons: [
      {
        id: "ts-primitive-types",
        title: "Primitive Types & Annotations",
        duration: "10 min",
        content: `## Overview

> Type annotations are the foundation of TypeScript. They tell the compiler exactly what kind of data a variable holds, making your code self-documenting and safe.

**You will learn:**
- Annotating the three core primitives: \`string\`, \`number\`, \`boolean\`.
- TypeScript's type inference (when you don't need annotations).
- The \`any\` type and why to avoid it.

---

## Content

### Type Annotation Syntax

To annotate a variable, place a colon (\`:\`) after the variable name, followed by the type:

\`\`\`typescript
let username: string = "alice";
let score: number = 97;
let isActive: boolean = true;
\`\`\`

Once annotated, TypeScript enforces the type across all assignments:

\`\`\`typescript
username = 42;     // ❌ Type 'number' is not assignable to type 'string'
score = "ninety";  // ❌ Type 'string' is not assignable to type 'number'
username = "bob";  // ✅ Correct
\`\`\`

### Type Inference

When you declare and initialize a variable in the same statement, TypeScript **infers** the type automatically — no annotation needed:

\`\`\`typescript
let city = "Nairobi";   // Inferred as: string
let count = 0;          // Inferred as: number
let isDone = false;     // Inferred as: boolean
\`\`\`

Hover over the variable in VS Code to see the inferred type shown as a tooltip.

> **Tip:** Use inference for local variables with obvious types. Use explicit annotations for function parameters, return types, and public API shapes — where clarity matters most.

### The \`any\` Type (Avoid It!)

\`any\` is an escape hatch that disables all type checking on a variable:

\`\`\`typescript
let data: any = "hello";
data = 42;       // No error
data = true;     // No error
data.foo.bar();  // No error — but crashes at runtime!
\`\`\`

> **Warning:** Using \`any\` defeats the entire purpose of TypeScript. Every \`any\` in your code is a potential runtime bug hiding in plain sight. Enable \`noImplicitAny: true\` in your \`tsconfig.json\` to ban accidental \`any\` types.

---

## Knowledge Check

- **What is the syntax for adding a type annotation to a variable?**
- **When does TypeScript infer types automatically?**
- **Why is \`any\` dangerous and when (if ever) is it acceptable?**

---

## Assignment

1. Declare annotated variables for a product listing: \`name\` (string), \`price\` (number), \`inStock\` (boolean).
2. Try assigning the wrong type and observe the compiler error.
3. Remove the annotations — does TypeScript still catch the wrong-type assignment using inference?
`
      },
      {
        id: "ts-object-types",
        title: "Object Types",
        duration: "12 min",
        content: `## Overview

> Objects are the most common data structure in JavaScript. TypeScript lets you define exactly what properties an object must have, their types, and whether they are required or optional.

**You will learn:**
- Inline object type annotations.
- Optional properties with \`?\`.
- Readonly properties with \`readonly\`.
- Nested object shapes.

---

## Content

### Inline Object Type Annotations

\`\`\`typescript
const user: { name: string; age: number; email: string } = {
  name: "Alice",
  age: 30,
  email: "alice@example.com"
};
\`\`\`

TypeScript checks that every required property exists and has the correct type. Adding an extra property or missing one is a compile error.

### Optional Properties

Append \`?\` to make a property optional. It may be \`undefined\` or absent:

\`\`\`typescript
const product: {
  id: number;
  name: string;
  description?: string;   // Optional — may be omitted
} = {
  id: 1,
  name: "Laptop"
  // description omitted — perfectly valid
};
\`\`\`

### Readonly Properties

Use \`readonly\` to prevent a property from being reassigned after initialization:

\`\`\`typescript
const config: {
  readonly apiUrl: string;
  readonly version: number;
} = {
  apiUrl: "https://api.example.com",
  version: 2
};

config.apiUrl = "https://other.com"; // ❌ Cannot assign to 'apiUrl' — it is a read-only property
\`\`\`

### Nested Objects

\`\`\`typescript
const order: {
  id: number;
  customer: {
    name: string;
    address: {
      city: string;
      country: string;
    };
  };
} = {
  id: 1001,
  customer: {
    name: "Bob",
    address: {
      city: "Nairobi",
      country: "Kenya"
    }
  }
};
\`\`\`

> **Note:** Inline object types are useful for one-off shapes. For reusable shapes, use **interfaces** or **type aliases** (covered in the next section).

---

## Knowledge Check

- **How do you make a property optional in an object type?**
- **What does \`readonly\` do — is it enforced at runtime?**
- **What's the trade-off between inline object types and interfaces?**

---

## Assignment

1. Define an object type for a \`Car\` with required \`make\`, \`model\`, \`year\` and optional \`color\`.
2. Add \`readonly vin: string\` to represent the Vehicle Identification Number. Try reassigning it.
3. Nest an \`owner\` object with \`name\` and \`licenseNumber\` fields.
`
      },
      {
        id: "ts-function-types",
        title: "Function Types",
        duration: "14 min",
        content: `## Overview

> Functions are where most bugs hide. TypeScript lets you precisely annotate parameter types, return types, optional arguments, and default values — making every function call safe.

**You will learn:**
- Annotating function parameters and return types.
- Optional and default parameters.
- \`void\` for functions with no return value.
- \`never\` for functions that never return.
- Arrow function type annotations.

---

## Content

### Basic Function Annotations

\`\`\`typescript
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

calculateTotal(9.99, 3);      // ✅ Returns 29.97
calculateTotal("9.99", 3);    // ❌ Argument of type 'string' is not assignable to 'number'
\`\`\`

The annotation after the closing \`)\` is the **return type**. TypeScript also checks that you actually return the correct type inside the function body.

> **Note:** TypeScript will give an error if a code path exists in the function body that doesn't return the declared type. This catches missing \`return\` statements before they become runtime bugs.

### Optional Parameters

Add \`?\` to mark a parameter as optional. Optional parameters must come **after** required ones:

\`\`\`typescript
function greet(name: string, title?: string): string {
  if (title) {
    return \`Hello, \${title} \${name}!\`;
  }
  return \`Hello, \${name}!\`;
}

greet("Alice");           // ✅ "Hello, Alice!"
greet("Alice", "Dr.");    // ✅ "Hello, Dr. Alice!"
\`\`\`

### Default Parameters

Default parameters provide a fallback when an argument is omitted:

\`\`\`typescript
function createUser(name: string, role: string = "viewer"): string {
  return \`\${name} (\${role})\`;
}

createUser("Bob");           // ✅ "Bob (viewer)"
createUser("Alice", "admin"); // ✅ "Alice (admin)"
\`\`\`

### The \`void\` Return Type

\`void\` means the function performs a side effect and returns nothing:

\`\`\`typescript
function logMessage(message: string): void {
  console.log(\`[LOG] \${message}\`);
  // No return statement — or: return; with no value
}
\`\`\`

### The \`never\` Return Type

\`never\` means the function **never completes normally** — it always throws or runs forever:

\`\`\`typescript
// Always throws — never returns
function throwError(message: string): never {
  throw new Error(message);
}

// Runs forever — never returns
function keepAlive(): never {
  while (true) {
    // polling logic
  }
}
\`\`\`

| Return Type | When to use |
|---|---|
| \`number\`, \`string\`, etc. | Function produces and returns a value |
| \`void\` | Function performs side effects, no meaningful return |
| \`never\` | Function always throws or runs infinitely |

### Arrow Function Types

\`\`\`typescript
// Arrow function with explicit types
const multiply = (x: number, y: number): number => x * y;

// Multi-line arrow function
const formatPrice = (amount: number, currency: string = "USD"): string => {
  return \`\${currency} \${amount.toFixed(2)}\`;
};

// Arrow function as a variable type
const validator: (input: string) => boolean = (input) => input.length > 0;
\`\`\`

---

## Knowledge Check

- **Where do you place the return type annotation in a function signature?**
- **What is the difference between a parameter typed \`string | undefined\` and one marked \`?\`?**
- **Explain the difference between \`void\` and \`never\`.**

---

## Assignment

1. Write a \`calculateDiscount(price: number, percent?: number): number\` function where \`percent\` defaults to \`10\`.
2. Write a \`logError(message: string, code: number): void\` function.
3. Write a \`handleFatalError(message: string): never\` function that always throws.
`
      },
      {
        id: "ts-arrays-tuples",
        title: "Arrays & Tuples",
        duration: "12 min",
        content: `## Overview

> Arrays hold ordered collections of data. Tuples are fixed-length arrays where each index has a specific type. TypeScript makes both safe and predictable.

**You will learn:**
- Typed array declarations (\`string[]\`, \`Array<number>\`).
- Multidimensional arrays.
- Tuples: fixed-length, ordered-type arrays.
- Destructuring tuples.
- \`readonly\` arrays.

---

## Content

### Typed Arrays

Two equivalent syntaxes for typed arrays:

\`\`\`typescript
// Syntax 1 — preferred for simplicity
const fruits: string[] = ["Apple", "Mango", "Banana"];

// Syntax 2 — generic notation
const scores: Array<number> = [97, 88, 74];
\`\`\`

TypeScript prevents pushing the wrong type:

\`\`\`typescript
fruits.push(42);   // ❌ Argument of type 'number' is not assignable to 'string'
fruits.push("Peach"); // ✅
\`\`\`

### Union-Type Arrays

When an array can hold mixed types, use a union:

\`\`\`typescript
const mixed: (string | number)[] = ["Alice", 30, "Bob", 25];
\`\`\`

### Multidimensional Arrays

\`\`\`typescript
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const grid: string[][] = [
  ["X", "O", "X"],
  ["O", "X", "O"]
];
\`\`\`

### Readonly Arrays

\`readonly\` prevents mutation after creation:

\`\`\`typescript
const DAYS: readonly string[] = ["Mon", "Tue", "Wed", "Thu", "Fri"];
DAYS.push("Sat");     // ❌ Property 'push' does not exist on type 'readonly string[]'
DAYS[0] = "Monday";  // ❌ Cannot assign to '0' because it is a read-only index
\`\`\`

### Tuples

A **tuple** is a fixed-length array where each element has a specific, ordered type:

\`\`\`typescript
// Declare a tuple: [id, title, isPublished]
let post: [number, string, boolean] = [1, "TypeScript Basics", true];

// Order matters — swapping types is a compile error
post = ["TypeScript Basics", 1, true]; // ❌ Type 'string' is not assignable to type 'number' at index 0
\`\`\`

### Destructuring Tuples

\`\`\`typescript
const coordinates: [number, number] = [40.7128, -74.0060];
const [latitude, longitude] = coordinates;

console.log(\`Lat: \${latitude}, Lon: \${longitude}\`);
\`\`\`

### Named Tuples (TypeScript 4.0+)

\`\`\`typescript
type Range = [start: number, end: number];

const validRange: Range = [0, 100];
\`\`\`

Named tuples make your intent crystal clear — each position has a documented name.

> **Tip:** Prefer tuples over plain arrays when a fixed structure with mixed types is intentional — such as a \`[latitude, longitude]\` coordinate pair or a \`[error, result]\` Node.js-style callback return.

---

## Knowledge Check

- **What is the difference between \`string[]\` and \`Array<string>\`?**
- **When would you use a tuple instead of an array?**
- **Why is \`readonly string[]\` useful for constant data?**

---

## Assignment

1. Declare a typed \`number[]\` array of exam scores and write a function that returns the average.
2. Define a \`[string, number, boolean]\` tuple representing \`[username, age, isAdmin]\`. Destructure it.
3. Create a \`readonly\` array of country codes and verify mutation is prevented.
`
      },
      {
        id: "ts-enums",
        title: "Enums",
        duration: "10 min",
        content: `## Overview

> Enums (Enumerations) let you define a set of named, related constants. Instead of magic strings or numbers scattered through your code, you group them under one meaningful name.

**You will learn:**
- Numeric enums (auto-incrementing).
- String enums (explicit string values).
- \`const enum\` for zero-cost abstractions.
- When to use enums vs union literal types.

---

## Content

### Numeric Enums

By default, enum members are assigned numeric values starting from 0:

\`\`\`typescript
enum Direction {
  Up,     // 0
  Down,   // 1
  Left,   // 2
  Right   // 3
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0
\`\`\`

You can customize the starting value:

\`\`\`typescript
enum StatusCode {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  InternalServerError = 500
}

function handleResponse(code: StatusCode): void {
  if (code === StatusCode.OK) {
    console.log("Success!");
  }
}
\`\`\`

### String Enums

String enums have explicit string values — making them more readable in logs and debugging:

\`\`\`typescript
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER"
}

const role: UserRole = UserRole.Admin;
console.log(role); // Output: "ADMIN"
\`\`\`

### \`const enum\` — Zero Runtime Cost

A \`const enum\` is inlined at compile time — no JavaScript enum object is emitted:

\`\`\`typescript
const enum Size {
  Small = "S",
  Medium = "M",
  Large = "L"
}

let shirtSize: Size = Size.Medium;
// Compiles to: let shirtSize = "M"; — no object created
\`\`\`

### Enums vs Union Literals

| Feature | Enum | Union Literal |
|---|---|---|
| Syntax | \`enum Role { Admin, User }\` | \`type Role = "admin" \\| "user"\` |
| Runtime object | Yes | No |
| Iteration | Yes (\`Object.keys\`) | No |
| Readability | Clear, named | Inline, compact |

> **Tip:** For simple sets of string values, prefer union literals (\`"admin" | "editor" | "viewer"\`). Use full \`enum\` when you need iteration, comparison with numbers, or when the values need to be grouped under a name in a library API.

---

## Knowledge Check

- **What value does the first member of a numeric enum have by default?**
- **Why are string enums more useful than numeric enums for debugging?**
- **What is the advantage of \`const enum\` over a regular \`enum\`?**

---

## Assignment

1. Create a \`ProductStatus\` string enum with \`Available\`, \`OutOfStock\`, \`Discontinued\`.
2. Write a function \`describeStatus(status: ProductStatus): string\` that returns a human-readable description.
3. Refactor the enum to a union literal type. Which do you prefer and why?
`
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SECTION 3 — TYPE SYSTEM MASTERY
  // ─────────────────────────────────────────────────────────────
  {
    sectionId: "03_type_system_mastery",
    sectionTitle: "3. Type System Mastery",
    description: "Master TypeScript's powerful type-composition tools: unions, intersections, literals, aliases, and narrowing.",
    lessons: [
      {
        id: "ts-union-types",
        title: "Union Types",
        duration: "10 min",
        content: `## Overview

> Union types let a variable or parameter hold one of several specified types. They are one of TypeScript's most expressive tools for modeling real-world variability in data.

**You will learn:**
- Creating union types with \`|\`.
- Type narrowing to handle each union member safely.
- Union types with functions and parameters.

---

## Content

### Defining Union Types

Use the pipe \`|\` to create a union — "this OR that":

\`\`\`typescript
let id: string | number;
id = "user_101";  // ✅
id = 101;         // ✅
id = true;        // ❌ Type 'boolean' is not assignable to type 'string | number'
\`\`\`

### Unions in Function Parameters

\`\`\`typescript
function formatId(id: string | number): string {
  return \`ID-\${id}\`;
}

formatId("abc123");  // ✅ "ID-abc123"
formatId(42);        // ✅ "ID-42"
\`\`\`

### Type Narrowing

When you have a union type, TypeScript requires you to **narrow** before using type-specific methods:

\`\`\`typescript
function processInput(input: string | number): void {
  if (typeof input === "string") {
    // TypeScript knows 'input' is string here
    console.log(input.toUpperCase());
  } else {
    // TypeScript knows 'input' is number here
    console.log(input.toFixed(2));
  }
}
\`\`\`

The \`typeof\` check is a **type guard** — it narrows the type within each branch.

> **Note:** TypeScript performs **control flow analysis** — it tracks the type of a variable through every branch of your code. After a \`typeof\` or equality check, TypeScript automatically knows the narrowed type without any extra annotation.

### Union with Null (Nullable Types)

\`\`\`typescript
// Without strictNullChecks, null can sneak in anywhere
// With strict mode, null must be declared explicitly:
let username: string | null = null;
username = "alice";  // ✅

// Safe access pattern:
if (username !== null) {
  console.log(username.toUpperCase()); // ✅ Safe — TypeScript knows it's a string here
}
\`\`\`

---

## Knowledge Check

- **What does the \`|\` operator do in a type annotation?**
- **Why does TypeScript require narrowing before calling string-specific methods on a \`string | number\`?**
- **What is a type guard?**

---

## Assignment

1. Write a function \`printLength(value: string | number[]): void\` that prints the length of either a string or an array.
2. Handle the narrowing properly using \`typeof\` and \`Array.isArray\`.
`
      },
      {
        id: "ts-intersection-types",
        title: "Intersection Types",
        duration: "8 min",
        content: `## Overview

> Intersection types combine multiple types into one — the resulting type must satisfy ALL of the combined types simultaneously.

**You will learn:**
- Creating intersection types with \`&\`.
- Combining object types to create richer shapes.
- When to use intersection vs \`extends\`.

---

## Content

### Defining Intersection Types

\`\`\`typescript
type HasName = { name: string };
type HasAge = { age: number };
type HasEmail = { email: string };

type Person = HasName & HasAge & HasEmail;

const alice: Person = {
  name: "Alice",
  age: 30,
  email: "alice@example.com"
  // All three shapes must be satisfied
};
\`\`\`

### Practical Example: Combining Domain Types

\`\`\`typescript
type BaseEntity = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
};

type GameAttributes = {
  title: string;
  genre: string;
  rating: number;
};

// A database Game record must have both shapes
type Game = BaseEntity & GameAttributes;

const game: Game = {
  id: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  title: "Elden Ring",
  genre: "RPG",
  rating: 97
};
\`\`\`

### Intersection vs Interface Extends

| Feature | Intersection (\`&\`) | Interface \`extends\` |
|---|---|---|
| Works with type aliases | ✅ Yes | ❌ No |
| Works with interfaces | ✅ Yes | ✅ Yes |
| Declaration merging | ❌ No | ✅ Yes |

> **Tip:** Use \`&\` when combining type aliases. Use \`extends\` when building a hierarchy of interfaces.

---

## Knowledge Check

- **What does \`A & B\` mean in TypeScript?**
- **If \`A\` has \`{ x: string }\` and \`B\` has \`{ y: number }\`, what does \`A & B\` require?**
- **When would you choose intersection over interface extends?**

---

## Assignment

1. Create types \`Flyable = { fly(): void }\` and \`Swimmable = { swim(): void }\`.
2. Create \`Duck = Flyable & Swimmable\` and implement an object that satisfies it.
`
      },
      {
        id: "ts-literal-types",
        title: "Literal Types",
        duration: "8 min",
        content: `## Overview

> Literal types restrict a variable to exact specific values rather than all values of a primitive type. Combined with unions, they become one of TypeScript's most powerful patterns.

**You will learn:**
- String, number, and boolean literal types.
- Combining literals with union (\`|\`) to create discriminated unions.
- \`as const\` to infer literal types from objects.

---

## Content

### String Literal Types

\`\`\`typescript
type Direction = "north" | "south" | "east" | "west";

let move: Direction = "north"; // ✅
move = "forward";              // ❌ Not a valid Direction
\`\`\`

### Number Literal Types

\`\`\`typescript
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): DiceRoll {
  return Math.floor(Math.random() * 6 + 1) as DiceRoll;
}
\`\`\`

### Literal Types in Function Parameters

\`\`\`typescript
function setAlignment(align: "left" | "center" | "right"): void {
  console.log(\`Aligning text: \${align}\`);
}

setAlignment("center");  // ✅
setAlignment("justify"); // ❌
\`\`\`

### \`as const\` — Inferring Literal Types

Without **\`as const\`**, TypeScript **widens** types to their primitives — the specific literal value is broadened to the general primitive category (e.g., \`"production"\` becomes \`string\`):

\`\`\`typescript
const config = {
  env: "production",
  port: 3000
};
// TypeScript infers: { env: string; port: number }
// "production" widens to string!

const config2 = {
  env: "production",
  port: 3000
} as const;
// TypeScript infers: { readonly env: "production"; readonly port: 3000 }
// Values are locked to their exact literal types!
\`\`\`

---

## Knowledge Check

- **What is the difference between typing a variable as \`string\` vs \`"hello"\`?**
- **Why would you use \`"left" | "center" | "right"\` instead of just \`string\` for an alignment parameter?**
- **What does \`as const\` do to an object's inferred types?**

---

## Assignment

1. Create a \`ButtonVariant = "primary" | "secondary" | "danger"\` literal type.
2. Write a \`Button\` component props type using this literal and verify that wrong values are rejected.
`
      },
      {
        id: "ts-type-aliases",
        title: "Type Aliases",
        duration: "10 min",
        content: `## Overview

> Type aliases let you give a name to any type — from simple primitives to complex unions, intersections, and object shapes. They are the building blocks of a clean, readable type system.

**You will learn:**
- Defining type aliases with the \`type\` keyword.
- Aliases for primitives, objects, unions, and functions.
- The difference between \`type\` and \`interface\`.

---

## Content

> **Note:** A **type alias** is purely a compile-time construct — it creates no JavaScript output whatsoever. Two type aliases with identical shapes are interchangeable; TypeScript uses **structural typing**, not nominal typing.

### Basic Type Aliases

\`\`\`typescript
// Alias for a primitive
type UserId = string;
type Score = number;

// Alias for a union
type StringOrNumber = string | number;

// Alias for a literal union
type Status = "pending" | "active" | "suspended";

let userId: UserId = "u_101";
let status: Status = "active";
\`\`\`

### Object Type Aliases

\`\`\`typescript
type Address = {
  street: string;
  city: string;
  country: string;
  postalCode?: string;
};

type User = {
  id: number;
  name: string;
  email: string;
  address: Address;    // Nested type alias
  role: "admin" | "user" | "guest";
};

const alice: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  address: { street: "123 Main St", city: "Nairobi", country: "Kenya" },
  role: "admin"
};
\`\`\`

### Function Type Aliases

\`\`\`typescript
// Give a name to a function signature
type Formatter = (value: number) => string;
type Comparator<T> = (a: T, b: T) => number;

const formatPrice: Formatter = (value) => \`$\${value.toFixed(2)}\`;
const compareNumbers: Comparator<number> = (a, b) => a - b;
\`\`\`

### \`type\` vs \`interface\` — At a Glance

| Feature | \`type\` | \`interface\` |
|---|---|---|
| Object shapes | ✅ | ✅ |
| Union types | ✅ | ❌ |
| Intersection (\`&\`) | ✅ | Uses \`extends\` |
| Declaration merging | ❌ | ✅ |
| \`implements\` in classes | ❌ | ✅ |
| Primitives & tuples | ✅ | ❌ |

> **Tip:** Use \`interface\` for object shapes that will be implemented by classes or extended. Use \`type\` for everything else — unions, intersections, function signatures, and primitives.

---

## Knowledge Check

- **What keyword creates a type alias?**
- **Can a type alias represent a union type? Can an interface?**
- **When would you choose \`interface\` over \`type\`?**

---

## Assignment

1. Create type aliases for \`ProductId\`, \`Price\`, and a full \`Product\` object shape.
2. Create a \`Callback = (error: string | null, result?: string) => void\` function type alias.
`
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SECTION 4 — INTERFACES & CLASSES
  // ─────────────────────────────────────────────────────────────
  {
    sectionId: "04_interfaces_and_classes",
    sectionTitle: "4. Interfaces & Classes",
    description: "Define structural contracts with interfaces, and build robust, type-safe object-oriented code with TypeScript classes.",
    lessons: [
      {
        id: "ts-interfaces",
        title: "Interfaces",
        duration: "14 min",
        content: `## Overview

> Interfaces are TypeScript's primary way to define the **shape** of objects and the **contracts** that classes must fulfill. They are the cornerstone of clean API design in TypeScript.

**You will learn:**
- Defining and implementing interfaces.
- Optional and readonly interface properties.
- Method signatures in interfaces.
- Interface extension.
- Declaration merging.

---

## Content

### Defining an Interface

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
}

const alice: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  role: "admin"
};
\`\`\`

### Optional & Readonly Properties

\`\`\`typescript
interface Product {
  readonly id: number;       // Cannot be changed after creation
  name: string;
  price: number;
  description?: string;      // Optional — may be absent
  tags?: string[];           // Optional array
}
\`\`\`

### Method Signatures

\`\`\`typescript
interface Logger {
  log(message: string): void;
  warn(message: string): void;
  error(message: string, code?: number): void;
}

const consoleLogger: Logger = {
  log: (msg) => console.log(\`[LOG] \${msg}\`),
  warn: (msg) => console.warn(\`[WARN] \${msg}\`),
  error: (msg, code) => console.error(\`[ERR \${code ?? "?"}] \${msg}\`)
};
\`\`\`

### Extending Interfaces

\`\`\`typescript
interface Animal {
  name: string;
  sound(): string;
}

interface Pet extends Animal {
  owner: string;
  isVaccinated: boolean;
}

const myDog: Pet = {
  name: "Buddy",
  owner: "Bob",
  isVaccinated: true,
  sound: () => "Woof!"
};
\`\`\`

### Declaration Merging

Unlike type aliases, interfaces with the **same name** are automatically merged:

\`\`\`typescript
interface Settings {
  theme: "light" | "dark";
}

// Merged — adds font to the same Settings interface
interface Settings {
  fontSize: number;
}

// Must now satisfy both blocks:
const userSettings: Settings = {
  theme: "dark",
  fontSize: 16
};
\`\`\`

This is powerful for augmenting third-party library types without modifying their source.

> **Tip:** Use **declaration merging** to add custom properties to Express's \`Request\` type or to extend Window globals — a common pattern for attaching user session data without modifying library source code.

---

## Knowledge Check

- **What is the difference between \`interface\` and \`type\` for object shapes?**
- **How do you make a property required only in a subinterface but optional in the base?**
- **What is declaration merging and when is it useful?**

---

## Assignment

1. Define a \`Vehicle\` interface with \`make\`, \`model\`, \`year\`, and \`describe(): string\`.
2. Extend it into an \`ElectricVehicle\` interface adding \`batteryCapacityKwh\` and \`chargeLevel\`.
3. Create an object satisfying \`ElectricVehicle\` and implement the \`describe\` method.
`
      },
      {
        id: "ts-classes",
        title: "Classes & Access Modifiers",
        duration: "16 min",
        content: `## Overview

> TypeScript classes extend JavaScript classes with type annotations, access modifiers, and compile-time safety. They are the foundation of object-oriented design in TypeScript applications.

**You will learn:**
- Class properties and constructors.
- Access modifiers: \`public\`, \`private\`, \`protected\`.
- Shorthand parameter properties.
- Class-based inheritance with \`super\`.
- Implementing interfaces with \`implements\`.

---

## Content

### Basic Class with Types

\`\`\`typescript
class BankAccount {
  // Properties must be declared before use
  id: number;
  owner: string;
  private balance: number;  // Private — only accessible inside this class

  constructor(id: number, owner: string, initialBalance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Deposit must be positive");
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(1, "Alice", 500);
account.deposit(200);
account.balance;       // ❌ Property 'balance' is private
account.getBalance();  // ✅ Returns 700
\`\`\`

### Access Modifiers

| Modifier | Accessible from |
|---|---|
| \`public\` *(default)* | Anywhere |
| \`private\` | Only inside the class itself |
| \`protected\` | Inside the class AND subclasses |

> **Note:** TypeScript's **access modifiers** (\`public\`, \`private\`, \`protected\`) are compile-time-only. They are erased in the JavaScript output. For true runtime privacy, use JavaScript's native **private fields** syntax (\`#fieldName\`).

### Shorthand Parameter Properties

Instead of declaring and assigning in the constructor separately, TypeScript offers a shorthand:

\`\`\`typescript
class Point {
  constructor(
    public x: number,
    public y: number,
    private label: string = "point"
  ) {
    // No manual assignment needed — TypeScript handles it!
  }

  toString(): string {
    return \`\${this.label}(\${this.x}, \${this.y})\`;
  }
}

const p = new Point(3, 4);
console.log(p.toString()); // "point(3, 4)"
\`\`\`

### Inheritance

\`\`\`typescript
class SavingsAccount extends BankAccount {
  private interestRate: number;

  constructor(id: number, owner: string, balance: number, rate: number) {
    super(id, owner, balance);  // Must call parent constructor first
    this.interestRate = rate;
  }

  applyInterest(): void {
    const interest = this.getBalance() * this.interestRate;
    this.deposit(interest);
  }
}
\`\`\`

### Implementing Interfaces

\`\`\`typescript
interface Serializable {
  serialize(): string;
  deserialize(data: string): void;
}

class UserProfile implements Serializable {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  serialize(): string {
    return JSON.stringify({ name: this.name, email: this.email });
  }

  deserialize(data: string): void {
    const parsed = JSON.parse(data);
    this.name = parsed.name;
    this.email = parsed.email;
  }
}
\`\`\`

---

## Knowledge Check

- **What is the difference between \`private\` and \`protected\`?**
- **What does shorthand parameter property syntax do?**
- **What is the difference between \`extends\` and \`implements\`?**

---

## Assignment

1. Create a \`Vehicle\` class with \`protected speed: number\` and a \`public accelerate(amount: number): void\` method.
2. Create a \`Car\` that \`extends Vehicle\` and adds a \`gear: number\` property.
3. Create a \`Drivable\` interface and make \`Car\` implement it.
`
      },
      {
        id: "ts-getters-setters-static",
        title: "Getters, Setters & Static Members",
        duration: "12 min",
        content: `## Overview

> Getters and setters provide controlled, validated access to private class properties. Static members belong to the class blueprint itself rather than to instances.

**You will learn:**
- Defining getters (\`get\`) and setters (\`set\`).
- Adding validation logic inside setters.
- Static properties and methods.
- Singleton pattern with static members.

---

## Content

### Getters & Setters

\`\`\`typescript
class Temperature {
  private _celsius: number;

  constructor(celsius: number) {
    this._celsius = celsius;
  }

  // Getter — access as a property, not a method call
  get fahrenheit(): number {
    return (this._celsius * 9) / 5 + 32;
  }

  // Getter for Celsius with validation via setter
  get celsius(): number {
    return this._celsius;
  }

  // Setter — runs validation before assignment
  set celsius(value: number) {
    if (value < -273.15) {
      throw new Error("Temperature below absolute zero is impossible");
    }
    this._celsius = value;
  }
}

const temp = new Temperature(100);
console.log(temp.fahrenheit);  // 212 — accessed like a property
temp.celsius = -300;           // ❌ Throws error
temp.celsius = 0;              // ✅
\`\`\`

### Static Members

Static members belong to the class, not instances. Access them via the class name:

\`\`\`typescript
class IdGenerator {
  private static nextId: number = 1;

  static generate(): number {
    return this.nextId++;
  }

  static reset(): void {
    this.nextId = 1;
  }
}

IdGenerator.generate(); // 1
IdGenerator.generate(); // 2
IdGenerator.generate(); // 3
IdGenerator.reset();
IdGenerator.generate(); // 1 again
\`\`\`

> **Note:** A **getter** without a corresponding **setter** is automatically treated as \`readonly\` — TypeScript will prevent assignment to it at compile time, even without the \`readonly\` keyword.

### Singleton Pattern with Static

\`\`\`typescript
class AppConfig {
  private static instance: AppConfig | null = null;
  private constructor(public readonly apiUrl: string) {}

  static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig("https://api.example.com");
    }
    return AppConfig.instance;
  }
}

const config = AppConfig.getInstance();
const config2 = AppConfig.getInstance();
console.log(config === config2); // true — same instance
\`\`\`

---

## Knowledge Check

- **How do you access a getter — as \`obj.get()\` or \`obj.property\`?**
- **What happens if you try to instantiate a class with a \`private\` constructor?**
- **What is the Singleton pattern and why is it useful?**

---

## Assignment

1. Create a \`Rectangle\` class with private \`_width\` and \`_height\`. Add getters/setters that validate values > 0.
2. Add a static \`fromSquare(side: number): Rectangle\` factory method.
`
      },
      {
        id: "ts-abstract-classes",
        title: "Abstract Classes & Polymorphism",
        duration: "14 min",
        content: `## Overview

> Abstract classes are class templates that cannot be instantiated directly. They define a structure and shared behavior, while forcing subclasses to implement specific methods.

**You will learn:**
- Declaring abstract classes and abstract methods.
- Implementing abstract methods in subclasses.
- Polymorphism — treating different subclasses through a shared base type.
- When to use abstract classes vs interfaces.

---

## Content

### Abstract Classes

\`\`\`typescript
abstract class Shape {
  // Concrete method — shared behavior
  color: string;
  constructor(color: string) {
    this.color = color;
  }

  toString(): string {
    return \`A \${this.color} \${this.constructor.name}\`;
  }

  // Abstract method — MUST be implemented by subclasses
  abstract area(): number;
  abstract perimeter(): number;
}

// new Shape("red"); // ❌ Cannot create an instance of an abstract class
\`\`\`

### Implementing Abstract Methods

\`\`\`typescript
class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(
    public width: number,
    public height: number,
    color: string
  ) {
    super(color);
  }

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}
\`\`\`

### Polymorphism

Once multiple subclasses share an abstract base, you can treat them **uniformly** through the base type:

\`\`\`typescript
const shapes: Shape[] = [
  new Circle(5, "red"),
  new Rectangle(4, 6, "blue"),
  new Circle(3, "green")
];

// Works on all shapes without knowing the specific type
shapes.forEach(shape => {
  console.log(\`\${shape.toString()} — Area: \${shape.area().toFixed(2)}\`);
});
// "A red Circle — Area: 78.54"
// "A blue Rectangle — Area: 24.00"
// "A green Circle — Area: 28.27"
\`\`\`

### Abstract Classes vs Interfaces

| Feature | Abstract Class | Interface |
|---|---|---|
| Can have concrete methods | ✅ Yes | ❌ No (all methods are abstract) |
| Can have constructor | ✅ Yes | ❌ No |
| Multiple inheritance | ❌ No (extend one class) | ✅ Yes (implement many) |
| Can have state (fields) | ✅ Yes | Properties only (no state) |

> **Tip:** Use **abstract classes** when subclasses share state and behavior. Use **interfaces** when you only need to define a structural contract.

---

## Knowledge Check

- **Can you instantiate an abstract class directly?**
- **What happens if a subclass fails to implement all abstract methods?**
- **Explain polymorphism in your own words.**

---

## Assignment

1. Create an abstract class \`Employee\` with abstract method \`calculateSalary(): number\`.
2. Create \`FullTimeEmployee\` (monthly salary × 12) and \`ContractEmployee\` (hourly rate × hours worked).
3. Create an \`Employee[]\` array and calculate total annual payroll.
`
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SECTION 5 — GENERICS
  // ─────────────────────────────────────────────────────────────
  {
    sectionId: "05_generics",
    sectionTitle: "5. Generics",
    description: "Write reusable, type-safe components and functions that work with any data type using TypeScript's powerful generics system.",
    lessons: [
      {
        id: "ts-generic-functions",
        title: "Generic Functions",
        duration: "14 min",
        content: `## Overview

> Generics allow you to write functions, classes, and interfaces that work correctly with any type — without sacrificing type safety. They are TypeScript's answer to code reuse without using \`any\`.

**You will learn:**
- The generic type parameter \`<T>\`.
- Generic functions and type inference.
- Multiple generic parameters.
- Generic constraints with \`extends\`.

---

## Content

### The Problem Generics Solve

\`\`\`typescript
// Without generics — forces us to use any
function first(arr: any[]): any {
  return arr[0];
}

const result = first([1, 2, 3]);
result.toUpperCase(); // No error — but crashes! result is number, not string
\`\`\`

### Generic Solution

\`\`\`typescript
// With generics — type is preserved
function first<T>(arr: T[]): T {
  return arr[0];
}

const num = first([1, 2, 3]);       // TypeScript infers T = number
const str = first(["a", "b", "c"]); // TypeScript infers T = string

num.toUpperCase(); // ❌ Property 'toUpperCase' does not exist on type 'number'
str.toUpperCase(); // ✅ Works perfectly
\`\`\`

TypeScript infers \`T\` from the argument — you usually don't need to specify it explicitly.

> **Note:** The \`<T>\` is a **type parameter** — a placeholder that gets replaced with a real type at the call site. By convention, single-letter names like \`T\`, \`U\`, \`K\`, \`V\` are used, but descriptive names like \`TItem\` or \`TKey\` are preferred in larger codebases.

### Multiple Generic Parameters

\`\`\`typescript
function zip<T, U>(arr1: T[], arr2: U[]): [T, U][] {
  return arr1.map((item, i) => [item, arr2[i]]);
}

const pairs = zip([1, 2, 3], ["a", "b", "c"]);
// Type: [number, string][]
// Value: [[1, "a"], [2, "b"], [3, "c"]]
\`\`\`

### Generic Constraints

Sometimes you need to restrict what \`T\` can be. Use \`extends\` to set a minimum shape:

\`\`\`typescript
interface HasId {
  id: number;
}

// T must have at least an 'id' property
function findById<T extends HasId>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id);
}

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const found = findById(users, 1); // Type: { id: number; name: string } | undefined
console.log(found?.name);         // "Alice"
\`\`\`

### Generic Utility Functions

\`\`\`typescript
// Type-safe filtering
function filterBy<T, K extends keyof T>(
  items: T[],
  key: K,
  value: T[K]
): T[] {
  return items.filter(item => item[key] === value);
}

const products = [
  { id: 1, category: "electronics", name: "Phone" },
  { id: 2, category: "books", name: "TypeScript Handbook" },
  { id: 3, category: "electronics", name: "Laptop" }
];

const electronics = filterBy(products, "category", "electronics");
// Returns products 1 and 3
\`\`\`

---

## Knowledge Check

- **What is the difference between a generic function and one that uses \`any\`?**
- **How does TypeScript infer the generic type parameter without you writing it explicitly?**
- **What does \`T extends HasId\` mean in a generic constraint?**

---

## Assignment

1. Write a generic \`last<T>(arr: T[]): T | undefined\` function that returns the last element.
2. Write a generic \`keyBy<T, K extends keyof T>(items: T[], key: K): Record<string, T>\` function.
3. Add a constraint to ensure \`K\` must be a key whose value is a string.
`
      },
      {
        id: "ts-generic-classes-interfaces",
        title: "Generic Classes & Interfaces",
        duration: "12 min",
        content: `## Overview

> Generics extend beyond functions — entire classes and interfaces can be made generic, enabling powerful, type-safe data structures and reusable API patterns.

**You will learn:**
- Generic classes.
- Generic interfaces.
- Generic default type parameters.
- Building a type-safe collection class.

---

## Content

### Generic Classes

\`\`\`typescript
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  get size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

// Instantiate with a specific type
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.pop();           // Returns: 2
numberStack.push("hello");   // ❌ Type 'string' is not assignable to 'number'

const stringStack = new Stack<string>();
stringStack.push("hello");   // ✅
\`\`\`

### Generic Interfaces

\`\`\`typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  timestamp: Date;
}

interface User {
  id: number;
  name: string;
}

interface PaginatedList<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

// Type-safe API response shapes
type UserResponse = ApiResponse<User>;
type UserListResponse = ApiResponse<PaginatedList<User>>;

const response: UserResponse = {
  data: { id: 1, name: "Alice" },
  status: 200,
  message: "OK",
  timestamp: new Date()
};
\`\`\`

### Default Type Parameters

\`\`\`typescript
class Repository<T = Record<string, unknown>> {
  protected store: Map<number, T> = new Map();

  save(id: number, item: T): void {
    this.store.set(id, item);
  }

  findById(id: number): T | undefined {
    return this.store.get(id);
  }

  getAll(): T[] {
    return Array.from(this.store.values());
  }
}

> **Tip:** Generic classes are ideal for building reusable data structure abstractions — stacks, queues, caches, repositories — where the logic is identical regardless of what type the data holds.

// Explicit type
class UserRepository extends Repository<User> {
  findByName(name: string): User | undefined {
    return this.getAll().find(u => u.name === name);
  }
}

const userRepo = new UserRepository();
userRepo.save(1, { id: 1, name: "Alice" });
userRepo.findByName("Alice"); // Type: User | undefined
\`\`\`

---

## Knowledge Check

- **How do you make a class generic?**
- **What is a default type parameter and when is it useful?**
- **How does \`ApiResponse<User>\` differ from \`ApiResponse<PaginatedList<User>>\`?**

---

## Assignment

1. Build a generic \`Queue<T>\` class with \`enqueue(item: T)\`, \`dequeue(): T | undefined\`, and \`isEmpty(): boolean\`.
2. Create a \`Cache<T>\` class that stores items by string key with a \`get\`, \`set\`, and \`has\` method.
`
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SECTION 6 — ADVANCED TYPESCRIPT
  // ─────────────────────────────────────────────────────────────
  {
    sectionId: "06_advanced_typescript",
    sectionTitle: "6. Advanced TypeScript",
    description: "Master advanced TypeScript features: utility types, conditional types, mapped types, decorators, and module patterns.",
    lessons: [
      {
        id: "ts-utility-types",
        title: "Utility Types",
        duration: "16 min",
        content: `## Overview

> TypeScript ships with a set of built-in generic utility types that transform existing types into new ones. Mastering them dramatically reduces type duplication.

**You will learn:**
- \`Partial<T>\` and \`Required<T>\`.
- \`Readonly<T>\` and \`Record<K, V>\`.
- \`Pick<T, K>\` and \`Omit<T, K>\`.
- \`ReturnType<T>\` and \`Parameters<T>\`.

---

## Content

### \`Partial<T>\` — All Properties Optional

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

// For update payloads — you only send fields you want to change
function updateUser(id: number, updates: Partial<User>): void {
  // updates can have any subset of User's fields
}

updateUser(1, { name: "Bob" });             // ✅
updateUser(1, { email: "new@email.com" });  // ✅
updateUser(1, { age: 30 });                 // ❌ 'age' is not in User
\`\`\`

### \`Required<T>\` — All Properties Required

The opposite of \`Partial\` — makes all optional properties required:

\`\`\`typescript
interface Config {
  host?: string;
  port?: number;
  debug?: boolean;
}

type StrictConfig = Required<Config>;
// { host: string; port: number; debug: boolean }
\`\`\`

### \`Readonly<T>\` — Immutable Type

\`\`\`typescript
interface AppState {
  user: User;
  theme: string;
}

type FrozenState = Readonly<AppState>;

const state: FrozenState = {
  user: { id: 1, name: "Alice", email: "a@a.com", role: "admin" },
  theme: "dark"
};

state.theme = "light"; // ❌ Cannot assign to 'theme' — it is a read-only property
\`\`\`

### \`Record<K, V>\` — Dictionary Type

Create a type with specific key and value types:

\`\`\`typescript
type UserMap = Record<string, User>;
type ScoreMap = Record<"math" | "english" | "science", number>;

const scores: ScoreMap = {
  math: 95,
  english: 88,
  science: 92
};
\`\`\`

### \`Pick<T, K>\` — Select a Subset of Properties

\`\`\`typescript
type UserPreview = Pick<User, "id" | "name">;
// { id: number; name: string }

const preview: UserPreview = { id: 1, name: "Alice" }; // ✅
\`\`\`

### \`Omit<T, K>\` — Exclude Specific Properties

\`\`\`typescript
// Remove 'id' from User (for create payloads — id is generated by DB)
type CreateUserInput = Omit<User, "id">;
// { name: string; email: string; role: string }
\`\`\`

> **Tip:** Combine utility types for maximum expressiveness: \`Readonly<Partial<User>>\` gives you an immutable partial user shape — perfect for configuration diffs or patch previews.

### \`ReturnType<T>\` and \`Parameters<T>\`

\`\`\`typescript
function createGame(title: string, genre: string, score: number) {
  return { id: Date.now(), title, genre, score };
}

// Extract the return type of a function
type Game = ReturnType<typeof createGame>;
// { id: number; title: string; genre: string; score: number }

// Extract the parameter types of a function
type CreateGameArgs = Parameters<typeof createGame>;
// [string, string, number]
\`\`\`

---

## Knowledge Check

- **What is the difference between \`Partial<T>\` and \`Required<T>\`?**
- **How would you type a dictionary of string keys to User values?**
- **When would you use \`Pick\` vs \`Omit\`?**

---

## Assignment

1. Given a full \`BlogPost\` interface with 8 fields, create:
   - \`CreatePostInput\` (Omit \`id\` and \`createdAt\`)
   - \`UpdatePostInput\` (Partial of CreatePostInput)
   - \`PostPreview\` (Pick \`id\`, \`title\`, \`author\`)
`
      },
      {
        id: "ts-type-guards-narrowing",
        title: "Type Guards & Narrowing",
        duration: "14 min",
        content: `## Overview

> Type narrowing is TypeScript's way of refining a broad type to a more specific one inside a conditional block. It's what makes union types practical and safe.

**You will learn:**
- \`typeof\` type guards.
- \`instanceof\` type guards.
- \`in\` operator narrowing.
- Custom type guard functions (\`is\` predicates).
- Discriminated unions.

---

## Content

### \`typeof\` Narrowing

\`\`\`typescript
function processValue(value: string | number | boolean): string {
  if (typeof value === "string") {
    return value.toUpperCase();   // TypeScript knows: string
  }
  if (typeof value === "number") {
    return value.toFixed(2);      // TypeScript knows: number
  }
  return value ? "YES" : "NO";   // TypeScript knows: boolean
}
\`\`\`

### \`instanceof\` Narrowing

\`\`\`typescript
class ApiError {
  constructor(public statusCode: number, public message: string) {}
}

class NetworkError {
  constructor(public message: string, public isTimeout: boolean) {}
}

function handleError(error: ApiError | NetworkError): void {
  if (error instanceof ApiError) {
    console.log(\`API Error \${error.statusCode}: \${error.message}\`);
  } else {
    console.log(\`Network Error: \${error.message} (timeout: \${error.isTimeout})\`);
  }
}
\`\`\`

### \`in\` Operator Narrowing

Check if a property exists to narrow the type:

\`\`\`typescript
interface Dog { bark(): void; breed: string; }
interface Cat { meow(): void; indoor: boolean; }

function makeSound(animal: Dog | Cat): void {
  if ("bark" in animal) {
    animal.bark();  // TypeScript knows: Dog
  } else {
    animal.meow();  // TypeScript knows: Cat
  }
}
\`\`\`

### Custom Type Guards (Predicate Functions)

When built-in narrowing isn't enough, write a custom type guard:

\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "name" in value
  );
}

const parsed = JSON.parse(responseData);
if (isUser(parsed)) {
  console.log(parsed.name); // TypeScript knows: User
}
\`\`\`

### Discriminated Unions

A discriminated union uses a common **literal type property** to narrow between union members:

\`\`\`typescript
type LoadingState = { status: "loading" };
type SuccessState = { status: "success"; data: User[] };
type ErrorState   = { status: "error"; error: string };

type FetchState = LoadingState | SuccessState | ErrorState;

function renderUI(state: FetchState): string {
  switch (state.status) {
    case "loading": return "Loading...";
    case "success": return \`Found \${state.data.length} users\`;
    case "error":   return \`Error: \${state.error}\`;
  }
}
\`\`\`

TypeScript ensures the \`switch\` is exhaustive — if you add a new union member, TypeScript will warn you that the switch is incomplete.

> **Note:** For true **exhaustiveness checking**, add a \`default\` branch that assigns the value to \`never\`: \`const _exhaustive: never = state;\`. If a union member is not handled, the \`never\` assignment will produce a compile error, catching the gap immediately.

---

## Knowledge Check

- **What is the difference between \`typeof\` and \`instanceof\` guards?**
- **What does \`value is string\` in a function return type mean?**
- **How does a discriminated union ensure exhaustive handling?**

---

## Assignment

1. Create a \`Shape\` discriminated union with \`Circle\`, \`Square\`, and \`Triangle\` (each with a \`kind\` discriminant).
2. Write an \`area(shape: Shape): number\` function using a \`switch\` statement.
3. Add a \`Pentagon\` to the union — TypeScript should warn you that \`area\` is not exhaustive.
`
      },
      {
        id: "ts-type-assertions",
        title: "Type Assertions & Non-Null Assertion",
        duration: "8 min",
        content: `## Overview

> Type assertions tell TypeScript to trust you about the type of a value when the compiler can't verify it automatically. Used carefully, they are a necessary escape hatch.

**You will learn:**
- The \`as\` assertion syntax.
- The non-null assertion operator \`!\`.
- When assertions are safe vs dangerous.
- \`satisfies\` operator for safer assertions (TypeScript 4.9+).

---

## Content

### The \`as\` Keyword

\`\`\`typescript
const input = document.getElementById("name-input");
// TypeScript sees: HTMLElement | null

// Assert we know it's specifically an HTMLInputElement
const textInput = input as HTMLInputElement;
textInput.value = "Alice"; // ✅ TypeScript now knows it has .value

// Also valid — angle bracket syntax (can't be used in TSX files)
const textInput2 = <HTMLInputElement>input;
\`\`\`

> **Warning:** \`as\` doesn't do any runtime conversion — it's a compile-time-only override. If the actual value is not what you asserted, you'll get a runtime crash. Only assert when you're certain.

### Asserting API Responses

\`\`\`typescript
interface Game {
  id: number;
  title: string;
}

const response = await fetch("/api/games/1");
const game = (await response.json()) as Game;
// TypeScript now treats game as Game — but the actual data might differ!
\`\`\`

> **Tip:** For safer API response handling, use a validation library like **Zod** that parses and validates the shape at runtime, rather than just asserting it.

### Non-Null Assertion Operator \`!\`

Use \`!\` to tell TypeScript "I know this is not null or undefined":

\`\`\`typescript
const form = document.getElementById("login-form");
// TypeScript: HTMLElement | null

form!.addEventListener("submit", handleSubmit); // ✅ assert not null
// Equivalent to: (form as HTMLElement).addEventListener(...)

// Or handle it properly:
if (form) {
  form.addEventListener("submit", handleSubmit); // ✅ safe narrowing
}
\`\`\`

### The \`satisfies\` Operator (TypeScript 4.9+)

\`satisfies\` validates that a value matches a type without widening its inferred type:

\`\`\`typescript
type Theme = {
  colors: Record<string, string | [number, number, number]>;
};

const myTheme = {
  colors: {
    primary: "#3B82F6",
    accent: [59, 130, 246]
  }
} satisfies Theme;

// TypeScript preserves that 'primary' is 'string' and 'accent' is [number, number, number]
myTheme.colors.primary.toUpperCase(); // ✅ TypeScript knows it's a string!
\`\`\`

---

## Knowledge Check

- **What does \`as\` do at runtime?**
- **When is it appropriate to use \`!\` vs explicitly checking for null?**
- **What is the advantage of \`satisfies\` over \`as\`?**

---

## Assignment

1. Query a DOM element and use \`as\` to assert its specific HTML type.
2. Refactor using proper null checking with \`if\` instead of \`!\`.
`
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SECTION 7 — REAL-WORLD TYPESCRIPT
  // ─────────────────────────────────────────────────────────────
  {
    sectionId: "07_real_world_typescript",
    sectionTitle: "7. Real-World TypeScript",
    description: "Apply TypeScript in practical real-world scenarios: modules, declaration files, React integration, and debugging.",
    lessons: [
      {
        id: "ts-modules",
        title: "Modules & Namespaces",
        duration: "12 min",
        content: `## Overview

> TypeScript uses the ES module system (\`import\`/\`export\`) for organizing code. Understanding how to structure a multi-file TypeScript project is essential for production work.

**You will learn:**
- Named and default exports.
- Re-exporting (barrel files / index.ts).
- \`import type\` for type-only imports.
- Module resolution configuration.

---

## Content

### Named Exports

\`\`\`typescript
// types.ts
export interface User {
  id: number;
  name: string;
}

export type Status = "active" | "suspended";

export function formatUser(user: User): string {
  return \`\${user.id}: \${user.name}\`;
}
\`\`\`

\`\`\`typescript
// main.ts
import { User, Status, formatUser } from "./types";
\`\`\`

### Default Exports

\`\`\`typescript
// UserService.ts
class UserService {
  findAll(): User[] { return []; }
  findById(id: number): User | undefined { return undefined; }
}

export default UserService;
\`\`\`

\`\`\`typescript
// main.ts — default imports can be named anything
import UserService from "./UserService";
const service = new UserService();
\`\`\`

> **Tip:** Prefer **named exports** over default exports in large projects. Named exports make refactoring safer (renaming is caught by the compiler) and make auto-import in VS Code more predictable.

### Barrel Files (index.ts)

Bundle related exports into a single entry point:

\`\`\`typescript
// models/index.ts — barrel file
export type { User } from "./User";
export type { Product } from "./Product";
export type { Order } from "./Order";
export { UserService } from "./UserService";
\`\`\`

\`\`\`typescript
// Elsewhere — clean single import instead of many paths
import { User, Product, UserService } from "./models";
\`\`\`

### \`import type\` — Type-Only Imports

Use \`import type\` to import types that are erased at compile time, preventing accidental circular dependencies and keeping runtime bundles clean:

\`\`\`typescript
import type { User } from "./types"; // Erased at runtime — zero bundle impact
import { fetchUsers } from "./api";  // This is runtime code — kept in bundle
\`\`\`

---

## Knowledge Check

- **What is the difference between a named export and a default export?**
- **What is a barrel file and why is it useful?**
- **Why would you use \`import type\` over regular \`import\`?**

---

## Assignment

1. Create a \`models/\` folder with \`User.ts\`, \`Product.ts\`, and an \`index.ts\` barrel.
2. Import from the barrel in \`main.ts\` and verify types flow correctly.
`
      },
      {
        id: "ts-declaration-files",
        title: "Declaration Files (.d.ts)",
        duration: "10 min",
        content: `## Overview

> Declaration files (\`.d.ts\`) describe the types of existing JavaScript libraries. They allow TypeScript to work safely with libraries written in plain JavaScript.

**You will learn:**
- What \`.d.ts\` files are and why they exist.
- Installing type declarations from \`@types\`.
- Writing basic declaration files.
- The \`declare\` keyword.

---

## Content

### What Are Declaration Files?

When you use a JavaScript library in a TypeScript project, TypeScript needs to know the types. Declaration files provide this information without modifying the library's source code.

\`\`\`text
lodash/
├── lodash.js       ← Runtime JavaScript
└── lodash.d.ts     ← Type declarations (describes the shapes)
\`\`\`

### Installing Type Declarations

Many popular libraries ship their own types. Others have community-maintained types in the **DefinitelyTyped** repository, installable via \`@types\`:

\`\`\`bash
# React ships its own types
npm install react

# For libraries that don't ship types:
npm install --save-dev @types/node
npm install --save-dev @types/express
npm install --save-dev @types/lodash
\`\`\`

### Writing a Simple Declaration File

If a library has no types, write your own:

\`\`\`typescript
// analytics.d.ts
declare module "analytics-sdk" {
  export function track(event: string, properties?: Record<string, unknown>): void;
  export function identify(userId: string): void;
  export function page(name: string): void;
}
\`\`\`

\`\`\`typescript
// Now TypeScript knows the shape:
import { track, identify } from "analytics-sdk";
track("button_click", { label: "Sign Up" }); // ✅ Fully typed
\`\`\`

> **Note:** Declaration files (\`.d.ts\`) contain only **type information** — they produce zero JavaScript output. They are the bridge between the type-safe world of TypeScript and untyped JavaScript libraries.

### The \`declare\` Keyword

\`declare\` tells TypeScript about values that exist in the runtime environment but aren't in your code:

\`\`\`typescript
// Declare a global variable injected by the build tool
declare const __APP_VERSION__: string;
declare const __IS_PRODUCTION__: boolean;

// Declare global functions from a script tag
declare function gtag(command: string, ...args: unknown[]): void;
\`\`\`

---

## Knowledge Check

- **What problem do \`.d.ts\` files solve?**
- **Where do \`@types\` packages come from?**
- **When would you write your own declaration file?**

---

## Assignment

1. Install \`@types/node\` and verify TypeScript now understands Node.js built-ins like \`process.env\`.
2. Write a \`.d.ts\` file for a hypothetical \`payment-sdk\` with \`charge\`, \`refund\`, and \`getBalance\` functions.
`
      },
      {
        id: "ts-react-integration",
        title: "TypeScript with React",
        duration: "16 min",
        content: `## Overview

> TypeScript and React are a powerful combination. In this lesson, we integrate everything we've learned into React — typing props, state, events, refs, and hooks.

**You will learn:**
- Typing React props with interfaces.
- Typing \`useState\`, \`useRef\`, and \`useEffect\`.
- Typing event handlers.
- Children props with \`React.ReactNode\`.
- Generic components.

---

## Content

### Typing Component Props

\`\`\`tsx
interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  onClick: () => void;
}

function Button({ label, variant = "primary", disabled = false, onClick }: ButtonProps) {
  return (
    <button
      className={\`btn btn-\${variant}\`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
\`\`\`

### Typing useState

\`\`\`tsx
import { useState } from "react";

interface User {
  id: number;
  name: string;
}

function UserProfile() {
  // TypeScript infers: useState<string>
  const [name, setName] = useState("Alice");

  // Explicit generic for complex types
  const [user, setUser] = useState<User | null>(null);

  // Array state
  const [items, setItems] = useState<string[]>([]);

  return <div>{name}</div>;
}
\`\`\`

### Typing Event Handlers

\`\`\`tsx
function SearchInput() {
  const [query, setQuery] = useState("");

  // React provides specific event types
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Search:", query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" value={query} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}
\`\`\`

### Typing Children

\`\`\`tsx
interface CardProps {
  title: string;
  children: React.ReactNode;  // Accepts any valid JSX
}

function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-body">{children}</div>
    </div>
  );
}
\`\`\`

### Typing useRef

\`\`\`tsx
function VideoPlayer() {
  // Generic tells TypeScript what the ref points to
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = (): void => {
    videoRef.current?.play(); // Optional chain — might be null before mount
  };

  return <video ref={videoRef} src="movie.mp4" />;
}
\`\`\`

> **Tip:** Always define your event handler types using React's built-in event types (\`React.ChangeEvent\`, \`React.FormEvent\`, \`React.MouseEvent\`) rather than the DOM's native types. React's synthetic event system wraps native events, so React-specific types are always the correct choice.

### Generic Components

\`\`\`tsx
interface SelectProps<T> {
  options: T[];
  value: T | null;
  getLabel: (option: T) => string;
  onSelect: (option: T) => void;
}

function Select<T>({ options, value, getLabel, onSelect }: SelectProps<T>) {
  return (
    <ul>
      {options.map((option, i) => (
        <li
          key={i}
          className={option === value ? "selected" : ""}
          onClick={() => onSelect(option)}
        >
          {getLabel(option)}
        </li>
      ))}
    </ul>
  );
}

// Usage — T is inferred as Game
<Select
  options={games}
  value={selectedGame}
  getLabel={(game) => game.title}
  onSelect={setSelectedGame}
/>
\`\`\`

---

## Knowledge Check

- **How do you type a nullable state variable with \`useState\`?**
- **What is the TypeScript type for a form submit event handler?**
- **How does \`React.ReactNode\` differ from \`React.ReactElement\`?**

---

## Assignment

1. Build a typed \`GameCard\` component with a \`Game\` interface and an \`onSelect: (game: Game) => void\` prop.
2. Build a \`GameGrid\` component that accepts \`Game[]\` and renders cards.
3. Manage selected game state in \`App\` with \`useState<Game | null>(null)\`.
`
      },
      {
        id: "ts-debugging",
        title: "Debugging TypeScript",
        duration: "8 min",
        content: `## Overview

> Effective debugging is a superpower. TypeScript's source maps let you debug your original \`.ts\` code directly in VS Code and Chrome DevTools, even though the browser runs \`.js\`.

**You will learn:**
- Enabling source maps in \`tsconfig.json\`.
- Setting breakpoints in VS Code.
- Configuring the VS Code debugger with \`launch.json\`.
- Reading TypeScript error messages efficiently.

---

## Content

### Step 1: Enable Source Maps

In \`tsconfig.json\`:

\`\`\`json
{
  "compilerOptions": {
    "sourceMap": true
  }
}
\`\`\`

This generates \`.js.map\` files alongside the compiled \`.js\` output. They tell debuggers how to map compiled JavaScript lines back to your original TypeScript source.

### Step 2: Set Breakpoints in VS Code

1. Open your \`.ts\` file in VS Code.
2. Click on the **gutter** (left margin next to line numbers) to set a red breakpoint dot.
3. Press **F5** to start debugging.

### Step 3: Configure launch.json

Go to **Run & Debug → Create a launch.json file → Node.js**. VS Code generates this:

\`\`\`json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug TypeScript",
      "program": "\${workspaceFolder}/src/index.ts",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "outFiles": ["\${workspaceFolder}/dist/**/*.js"],
      "sourceMaps": true
    }
  ]
}
\`\`\`

### Reading TypeScript Error Messages

TypeScript errors can look intimidating. Here's how to read them:

\`\`\`text
src/app.ts(12,5): error TS2345: Argument of type 'string' is
not assignable to parameter of type 'number'.
\`\`\`

- **\`src/app.ts(12,5)\`** — file, line 12, column 5
- **\`error TS2345\`** — TypeScript error code (searchable in docs)
- **The message** — what went wrong

> **Tip:** Search the error code (e.g. TS2345) in the [TypeScript error reference](https://www.typescriptlang.org/tsconfig) for detailed explanations and solutions.

---

## Knowledge Check

- **What does a source map file do?**
- **How do you set a breakpoint in VS Code?**
- **What information does a TypeScript error message give you?**

---

## Assignment

1. Enable \`sourceMap: true\` in your \`tsconfig.json\`.
2. Set a breakpoint inside a function, launch the debugger, and step through the code line by line.
3. Add a deliberate type error and practice reading the error message format.
`
      }
    ]
  }
];
