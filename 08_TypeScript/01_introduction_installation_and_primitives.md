# Introduction, Installation & Primitives

> **Source:** [https://www.thedebuglab.com/lessons/node-path-typescript-primitives](https://www.thedebuglab.com/lessons/node-path-typescript-primitives)

---

## Overview

> In this lesson, we will explore the core fundamentals of TypeScript. Developed by Microsoft, TypeScript is a strongly typed superset of JavaScript that compiles down to pure, platform-independent JavaScript. We'll walk through why it is widely used in large-scale modern applications (by companies like Meta, LinkedIn, and Evernote), how to install and compile TypeScript on your machine, and deep dive into the static primitive data types.

**You will learn:**

- What TypeScript is and its compile-time safety benefits.
- How to install TypeScript globally or locally in your project.
- How to use the `tsc` compiler command to compile `.ts` files to `.js`.
- Differentiate between `.ts` and `.tsx` file extensions.
- How to declare variables using `var`, `let`, and `const` with typed annotations.
- Master primitive types: `boolean`, `number`, `string`, arrays, tuples, `any`, `void`, `undefined`, and `null`.

---

## Content

### Why TypeScript?

JavaScript is a dynamically typed language, meaning that variables can hold any type of value and their types can change during execution. While this provides maximum flexibility, it also leads to hard-to-debug runtime errors in large production codebases.

TypeScript addresses this by introducing **Static Typing**—allowing developers to define precise structural contracts and type constraints that are verified at **compile time** during development, rather than runtime!

#### Main Features & Advantages:

1. **Static Typing & Type Checking**: Catch bugs and type errors before your code ever runs in a browser.
2. **Enhanced IDE Support**: Provides robust autocomplete, instant refactoring, and rich IntelliSense navigation.
3. **ECMAScript Alignment**: Fully supports modern ES6+ features and compiles them down to highly compatible target JavaScript.
4. **Interoperability**: You can import any vanilla JavaScript library and even gradually migrate JS files to TS!

---

### Installation & Compilation

To compile and use TypeScript, we need the standard **TypeScript Compiler (tsc)**.

#### 1. Installing TypeScript

You can install it globally on your machine:
```bash
npm install -g typescript
```

Or locally as a development dependency inside a specific project workspace:
```bash
npm install typescript --save-dev
```

To verify that the installation succeeded, check the compiler version:
```bash
tsc --version
```

#### 2. Compiling TypeScript to JavaScript

Browsers cannot run TypeScript files directly. Instead, we write our code in `.ts` files and compile them down to standard `.js` files using the `tsc` command:
```bash
tsc filename.ts
```

This compiles your `filename.ts` source file and outputs a clean `filename.js` file in the same directory, which can run on any modern browser or Node.js environment!

#### 3. Understanding File Extensions

- **`.ts`**: Used for pure TypeScript logic, helper utilities, classes, interfaces, reducers, and functions that do **not** contain React JSX markup.
- **`.tsx`**: Used specifically for React components that contain and return JSX markup.

---

### Basic Variables & Explicit Annotations

In TypeScript, there are three keywords to declare variables: `var` (legacy/functional-scoped), `let` (block-scoped), and `const` (constant block-scoped). 

You declare a variable with an **explicit type annotation** using the colon (`:`) syntax:

```typescript
let companyName: string = "The Debug Society";
companyName = "DebugLab"; // OK - value is of type string

// Throws compilation error: Type '28' is not assignable to type 'string'
companyName = 28; 
```

---

### TypeScript Primitives & Built-in Types

TypeScript provides several essential built-in types to define structural contracts:

#### 1. Boolean
Represents standard `true` or `false` logical flags.
```typescript
let isCompleted: boolean = false;
```

#### 2. Number
TypeScript represents all numbers as floating-point numbers or integers. It supports decimal, hexadecimal, binary, and octal literals.
```typescript
let score: number = 42;
let average: number = 88.5;
```

#### 3. String
Represents textual character data. You can use single quotes (`'`), double quotes (`"`), or backticks (`` ` ``) for template literal string interpolation:
```typescript
let studentName: string = "Alice";
let introduction: string = `Hello, my name is ${studentName}!`;
```

#### 4. Arrays
In TypeScript, arrays are strongly typed and can only contain values matching their defined type:
```typescript
let marks: number[] = [85, 90, 78];

// Throws compilation error: Type 'string' is not assignable to type 'number'
let badMarks: number[] = [85, "ninety", 78]; 
```

#### 5. Tuples
A tuple is a specialized array with a **fixed number of elements** whose types are known and ordered:
```typescript
let studentTuple: [string, number] = ["Alice", 95];

// Error: Type 'number' is not assignable to type 'string'
studentTuple = [95, "Alice"]; 
```

#### 6. Any
The `any` type represents a dynamic escape hatch from type checks. It allows a variable to hold any kind of value, which is useful when migrating legacy JavaScript projects or dealing with raw JSON payloads from APIs.
> [!WARNING]
> Use `any` sparingly! Extensive use of `any` disables TypeScript's safety validation, rendering static typing useless.

```typescript
let rawJson: any = JSON.parse('{"name": "Alice", "id": 123}');
```

#### 7. Void
`void` indicates the complete absence of a type. It is primarily used as the return annotation for functions that do **not** return a value:
```typescript
function logGreeting(): void {
  console.log("Welcome to TypeScript basics!");
}
```

#### 8. Null & Undefined
TypeScript has separate types for `null` (deliberate absence of value) and `undefined` (uninitialized variable). They behave similarly to JavaScript and are highly useful for checking optional fields:
```typescript
let optionalValue: string | null = null;
```

---

## Assignment

1. Install TypeScript locally in your environment or explore the [TypeScript Playground](https://www.typescriptlang.org/play) to write basic type declarations.
2. Create a basic `.ts` file containing a typed function, compile it using the terminal command `tsc filename.ts`, and inspect the compiled output inside the generated `.js` file.
3. Skim through the official [TypeScript Handbook on Primitives](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html).

---

## Knowledge Check

> The following questions are an opportunity to reflect on key topics in this lesson. If you can’t answer a question, click on it to review the material, but keep in mind you are not expected to memorize or master this knowledge.

- [What is the difference between a dynamically typed language and a statically typed language?](#why-typescript)
- [Which compiler command converts a TypeScript file into standard JavaScript?](#2-compiling-typescript-to-javascript)
- [When should you use the .ts extension versus the .tsx extension?](#3-understanding-file-extensions)
- [How do you define a strongly-typed array of strings in TypeScript?](#4-arrays)
- [What is a Tuple and how does it differ from a standard Array?](#5-tuples)
- [Why is the extensive use of the 'any' type discouraged in production environments?](#6-any)
