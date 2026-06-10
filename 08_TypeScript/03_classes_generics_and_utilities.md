# Classes, Generics & Utilities

> **Source:** [https://www.thedebuglab.com/lessons/node-path-typescript-classes-generics](https://www.thedebuglab.com/lessons/node-path-typescript-classes-generics)

---

## Overview

> In this lesson, we will cover object-oriented programming in TypeScript using Classes, write flexible type-safe abstractions using Generics (`<T>`), and master TypeScript's powerful built-in Utility Types to transform existing types dynamically. We'll also cover Type Assertions to explicitly tell the compiler what type a value is, and standard ECMAScript Module exporting and importing.

**You will learn:**

- Declare TypeScript classes with explicit attributes, constructors, and methods.
- Master class inheritance using `extends` and call base constructors using `super()`.
- Differentiate member visibility modifiers: `public`, `private`, and `protected`.
- Build highly reusable, type-safe generic functions (`identity<T>`) and generic classes (`Box<T>`).
- Transform types dynamically using built-in utility interfaces: `Partial<T>`, `Readonly<T>`, `Record<K, T>`, and `Pick<T, K>`.
- Override compiler inference safely using **Type Assertions** (`as string`).
- Export and import modular structures cleanly.

---

## Content

### Classes & Inheritance

TypeScript provides solid support for classes and object-oriented programming (OOP), enabling you to define encapsulated blueprints for runtime data structures.

#### 1. Standard Class & Constructors
Unlike vanilla JavaScript, attributes in TypeScript classes must be declared with their static types before they are referenced in constructors:

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a noise.`);
  }
}
```

#### 2. Inheritance and Super
You can inherit member fields and methods from another class using the `extends` keyword. When implementing a constructor in a derived subclass, you **must** call the base class constructor using the `super()` method before accessing `this`:

```typescript
class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name); // Invokes the parent Animal constructor!
    this.breed = breed;
  }

  speak(): void {
    console.log(`${this.name} barks!`);
  }
}

const rex = new Dog("Rex", "German Shepherd");
rex.speak(); // Output: Rex barks!
```

#### 3. Member Visibility Modifiers
TypeScript lets you enforce clear access rules for class fields and methods:
- **`public`** *(Default)*: Members are fully accessible from anywhere in the codebase.
- **`private`**: Members are accessible **only** inside the defining class itself.
- **`protected`**: Members are accessible only inside the defining class and any derived subclasses that extend it.

---

### Generics (`<T>`)

Generics allow you to write reusable functions and classes that can operate over a variety of types while still maintaining absolute type safety (no `any` types!).

#### 1. Generic Functions
By defining a type variable (traditionally `<T>`), you tell the compiler to dynamically track and capture the type passed during the function call:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

// T is explicitly set as string!
let valueOne = identity<string>("hello"); 

// T is inferred as number automatically!
let valueTwo = identity(42); 
```

#### 2. Generic Classes
You can make entire classes generic to store and manipulate various types safely:

```typescript
class Box<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

const stringBox = new Box<string>("Secret Message");
const numberBox = new Box<number>(100);
```

---

### Utility Types

TypeScript provides several built-in utility interfaces to easily transform existing interfaces into new, modified shapes.

#### 1. `Partial<T>`
Constructs a new type where all properties of the original type `T` are marked optional (`?`):

```typescript
interface User {
  id: string;
  name: string;
  age: number;
}

// partialUser allows you to define some or none of the fields!
const partialUser: Partial<User> = { name: "Alice" };
```

#### 2. `Readonly<T>`
Constructs a new type where all properties of type `T` are read-only. Any attempt to reassign these fields triggers a compile-time error:

```typescript
const frozenUser: Readonly<User> = { id: "u1", name: "Alice", age: 30 };

// Error: Cannot assign to 'name' because it is a read-only property
frozenUser.name = "Bob"; 
```

#### 3. `Record<K, T>`
Constructs an object type whose property keys are of type `K` and whose property values are of type `T`. It is highly useful for mapping lists or creating dynamic dictionary lookup tables:

```typescript
type MemberID = string;
const members: Record<MemberID, User> = {
  "user_1": { id: "user_1", name: "Alice", age: 30 },
  "user_2": { id: "user_2", name: "Bob", age: 25 }
};
```

#### 4. `Pick<T, K>`
Constructs a new type by picking a specific set of keys `K` from type `T`:

```typescript
type UserSummary = Pick<User, "name" | "age">;

const summary: UserSummary = {
  name: "Alice",
  age: 30
};
```

---

### Type Assertions

Sometimes, you will have more specific information about the type of a value than TypeScript can infer. In such cases, you can use a **Type Assertion** to override the compiler's inference using the `as` syntax:

```typescript
let rawResponse: any = "This is a response message";
let stringLength: number = (rawResponse as string).length;
```
> [!NOTE]
> Type assertions are evaluated purely at compile time and do not perform any runtime checks, type casting, or conversions.

---

### Modules

Modules organize your code into separate files. You must explicitly mark variables, functions, and classes using the `export` keyword so that other files can import them using the `import` statement:

```typescript
// mathUtils.ts
export const add = (x: number, y: number): number => x + y;

// App.tsx
import { add } from "./mathUtils";
```

---

## Assignment

1. Implement a class `Vehicle` with properties `make` and `year`. Implement a subclass `Car` that extends `Vehicle` and adds a `model` property.
2. Build a generic function `getFirstElement<T>(arr: T[]): T | undefined` that returns the first element of any array.
3. Review the official [TypeScript handbook on Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html).

---

## Knowledge Check

> The following questions are an opportunity to reflect on key topics in this lesson. If you can’t answer a question, click on it to review the material, but keep in mind you are not expected to memorize or master this knowledge.

- [What is the purpose of visibility modifiers like private and protected?](#3-member-visibility-modifiers)
- [How does a generic function preserve compile-time type safety compared to using the 'any' type?](#generics-t)
- [What transformation does the Partial utility type apply to an interface?](#1-partialt)
- [How does Readonly protect immutable configurations from being changed at runtime?](#2-readonlyt)
- [When is the Record utility type preferred over standard key-value maps?](#3-recordk-t)
- [What is the difference between compile-time type assertions and runtime type-casting?](#type-assertions)
