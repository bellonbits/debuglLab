# Advanced Types, Functions & Interfaces

> **Source:** [https://www.theodinproject.com/lessons/node-path-typescript-advanced-types](https://www.theodinproject.com/lessons/node-path-typescript-advanced-types)

---

## Overview

> Building on top of primitive annotations, TypeScript provides robust strategies to model complex, real-world data structures. In this lesson, we will cover how to build flexible and combined type constructs using Union and Intersection operators, define strict function signatures, and build strict contracts for object shapes using Interfaces.

**You will learn:**

- Combine multiple types using **Union Types** (`|`) and **Intersection Types** (`&`).
- Lock values down using **Literal Types**.
- Create custom type names with **Type Aliases**.
- Define typed functions with type signatures for parameters and returns.
- Declare arrow functions with explicit or implicit return styles.
- Manage **Optional Parameters** (`?`) and **Default Parameters** (`= value`) in functions.
- Create data contracts using **Interfaces** and define structural objects adhering to them.

---

## Content

### Advanced Types

#### 1. Union Types
Union types allow a variable to hold values of multiple different types. You define unions using the vertical bar (`|`) operator:

```typescript
let identifier: string | number = "id_1024";
identifier = 1024; // OK - both types are permitted!
```

#### 2. Intersection Types
Intersection types allow you to combine multiple existing types into a single new type containing all structural members:

```typescript
type Admin = { privileges: string[] };
type Employee = { name: string; startDate: Date };

// ElevatedAdmin contains all properties from Admin and Employee!
type ElevatedAdmin = Admin & Employee;

const manager: ElevatedAdmin = {
  name: "Bob",
  startDate: new Date(),
  privileges: ["server-reboot", "database-flush"]
};
```

#### 3. Literal Types
Literal types restrict a variable to represent only specific, exact literal values rather than broad primitive classes:

```typescript
let direction: "left" | "right" | "up" | "down" = "left";
direction = "right"; // OK

// Error: Type '"forward"' is not assignable to type '"left" | "right" | "up" | "down"'
direction = "forward"; 
```

#### 4. Type Aliases
Type aliases allow you to create a new, reusable custom name for any combined or existing type construct using the `type` keyword:

```typescript
type ID = string | number;
let userId: ID = "user_99";
```

---

### Functions in TypeScript

Functions are highly critical structures where static compile-time safety is essential to ensure parameters are passed and returned in the expected formats.

#### 1. Typed Parameters and Return Annotations
You define typed parameter signatures and specify the returned type after the parameter list:

```typescript
function add(x: number, y: number): number {
  return x + y;
}
```

#### 2. Typed Arrow Functions
Arrow functions can be typed cleanly. You can utilize implicit returns (concise single-line expression body) or explicit block returns:

```typescript
// Concise arrow function (implicit return)
const multiply = (a: number, b: number): number => a * b;

// Block body arrow function (explicit return)
const greet = (name: string): string => {
  return `Hello, ${name}!`;
};
```

#### 3. Optional & Default Parameters
- **Optional Parameters**: Indicated by appending `?` to the parameter name. Optional parameters must be placed *after* any mandatory parameters and default to `undefined`.
- **Default Parameters**: Indicated by assigning a fallback value using the `=` operator:

```typescript
// Optional parameter 'message'
function notify(user: string, message?: string): void {
  console.log(`User: ${user}, Msg: ${message ?? "No message"}`);
}

// Default parameter 'greeting'
function welcome(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}
```

---

### Interfaces

An **Interface** defines a structural contract or shape specification that an object or class must adhere to. They are declared using the `interface` keyword:

```typescript
interface Person {
  name: string;
  age: number;
  greet(): void; // Method signature contract
}

// Object 'student' binds strictly to interface 'Person'
const student: Person = {
  name: "Charlie",
  age: 22,
  greet() {
    console.log(`Hi, I am ${this.name}!`);
  }
};
```

#### Optional Properties in Interfaces
Just like functions and objects, interface properties can be marked optional using the `?` symbol:

```typescript
interface UserProfile {
  username: string;
  email: string;
  avatarUrl?: string; // Optional URL field
}

const userOne: UserProfile = {
  username: "coder101",
  email: "coder@gmail.com"
  // avatarUrl is omitted, which is perfectly valid!
};
```

---

## Assignment

1. Write a TypeScript script declaring an interface `Book` with properties `title` (string), `author` (string), and an optional `pages` (number). Declare an array of books adhering to this shape.
2. Build an arrow function that accepts a union parameter `string | number` and returns its string length or stringified value.
3. Review the official [TypeScript handbook on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html).

---

## Knowledge Check

> The following questions are an opportunity to reflect on key topics in this lesson. If you can’t answer a question, click on it to review the material, but keep in mind you are not expected to memorize or master this knowledge.

- [What is the difference between a Union Type and an Intersection Type?](#advanced-types)
- [How do Type Aliases help improve code readability?](#4-type-aliases)
- [What happens if you omit a parameter that has not been marked as optional?](#3-optional-default-parameters)
- [Where must optional parameters be declared in a function's parameter list?](#3-optional-default-parameters)
- [How do Interfaces act as structural contracts for modern object-oriented JS?](#interfaces)
- [What syntax allows you to mark an interface property as optional?](#optional-properties-in-interfaces)
