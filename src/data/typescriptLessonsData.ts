// TypeScript Basics Curriculum — The Debug Society
// Inspired by Glitchy Devs TypeScript Video Course

export interface TypeScriptLesson {
  id: string;
  title: string;
  url: string;
  content: string;
}

export interface TypeScriptSection {
  sectionId: string;
  sectionTitle: string;
  lessons: TypeScriptLesson[];
}

export const typescriptLessonsData: TypeScriptSection[] = [
  {
    sectionId: "01_Get_Started_With_TypeScript",
    sectionTitle: "1. Get Started with TypeScript",
    lessons: [
      {
        id: "ts-intro",
        title: "Intro & What Is TypeScript?",
        url: "",
        content: `## Overview

> Welcome to the TypeScript Basics course! Created by Muhammad from Glitchy Devs, this course is designed to take you from a complete beginner to mastering static type systems. TypeScript is a powerful programming language built on top of JavaScript, adding static typing to make your code robust, maintainable, and error-free.

**You will learn:**

- The fundamental differences between dynamically and statically typed languages.
- Why JavaScript exhibits unexpected behaviors (like \`2 + 2\` returning \`22\` in string concatenation).
- Compile-time checking benefits.
- Transpilation: How the TypeScript compiler compiles TS to JS.

---

## Content

### What is TypeScript?

TypeScript is **JavaScript with syntax for types**. It is all about **type safety**. While vanilla JavaScript is dynamically typed, which can lead to unexpected behaviors at runtime, TypeScript forces clear type definitions and catches bugs during the compilation phase.

### Statically vs. Dynamically Typed Languages

- **Statically Typed**: Languages like C++, C#, and Java require variable types to be declared during coding or compilation. A variable declared as an integer can only ever hold integer values. This fixed nature prevents unexpected runtime crashes.
- **Dynamically Typed**: Languages like JavaScript, Python, and Ruby determine variable types at runtime. While flexible, shifting a variable from a number to a string mid-execution frequently leads to crashes.

TypeScript brings the safety of static typing to JavaScript, acting as an optional static wrapper that type-checks your code at compile time!

---

## Assignment

1. Read through the introduction of the official [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/intro.html).
2. Reflect on a runtime bug you have previously faced in vanilla JavaScript due to an unexpected \`undefined\` or type mutation.
`
      },
      {
        id: "ts-setup",
        title: "Environment Setup & Git",
        url: "",
        content: `## Overview

> Before we start writing code, let's configure a professional developer workstation environment. We will set up Git, Node.js, Visual Studio Code, and install the TypeScript compiler.

**You will learn:**

- Downloading and installing VS Code, Git, and Node.js.
- Verifying installations using command-line arguments.
- Installing the TypeScript Compiler globally via npm.

---

## Content

### Workbench Prerequisites

1. **Git**: Install Git from the official website to enable version control.
2. **VS Code**: Install Visual Studio Code as our lightweight IDE.
3. **NodeJS**: Install Node.js, selecting the **LTS (Long Term Support)** version for stable packages.

Verify your Node.js engine installation in your terminal:
\`\`\`bash
node -v
\`\`\`

### Installing the compiler

With Node.js installed, use its package manager (\`npm\`) to install TypeScript globally on your operating system:
\`\`\`bash
npm install -g typescript
\`\`\`

Verify the TypeScript compiler (\`tsc\`) installation:
\`\`\`bash
tsc -v
\`\`\`

---

## Assignment

1. Verify that both \`node -v\` and \`tsc -v\` print valid versions in your terminal.
2. Open VS Code and configure a terminal shell of your preference (like bash or zsh).
`
      },
      {
        id: "ts-first-app",
        title: "Running Your First Application",
        url: "",
        content: `## Overview

> Let's write our first TypeScript program! We will learn how modern IDE editors (like VS Code) display type validation highlights instantly during coding, and compile our TypeScript code into runnable JavaScript.

**You will learn:**

- Creating an \`index.ts\` file.
- Understanding instant IDE validation.
- Compiling code with the \`tsc\` command.
- Running the output using Node.js.

---

## Content

### Step 1: Create a Source File
Create a folder named \`TypeScript\` and open it in VS Code. Create an \`index.ts\` file and write:
\`\`\`typescript
console.log(Math.floor());
\`\`\`

### Step 2: Hover Diagnostics
Notice that VS Code instantly highlights \`Math.floor\` in red. If you hover over it, you will see a detailed compile-time diagnostic:
> **"Expected 1 argument, but got 0."**

To fix the error, add a numeric argument inside:
\`\`\`typescript
console.log(Math.floor(11.3));
\`\`\`

### Step 3: Compile and Run
To execute your application, open your terminal and compile the TS file down to pure JavaScript:
\`\`\`bash
tsc index.ts
\`\`\`
This transpiles \`index.ts\` and outputs a clean \`index.js\` file in the same directory!
Now, execute the JavaScript file using Node.js:
\`\`\`bash
node index.js
\`\`\`
*Output*: \`11\`

---

## Assignment

1. Replicate the \`Math.floor()\` experiment in your local VS Code.
2. Verify that transpiling produces a clean \`index.js\` file and execute it.
`
      },
      {
        id: "ts-configuration",
        title: "Project Configuration",
        url: "",
        content: `## Overview

> As application projects grow, configuring folders for source code and compiled assets is vital. We will initialize a \`tsconfig.json\` configuration file and customize root directories.

**You will learn:**

- Initializing configurations using \`tsc --init\`.
- Managing target directories using \`rootDir\` and \`outDir\`.
- Compiling complex folder structures.

---

## Content

### Step 1: Initialize tsconfig
Run the initialization flag command at your project root:
\`\`\`bash
tsc --init
\`\`\`
This generates a \`tsconfig.json\` file filled with custom compiler options.

### Step 2: Configure Workspace Directories
Create a source folder named \`src\` and move your \`index.ts\` inside it. 
Open \`tsconfig.json\` and customize the following settings to organize files cleanly:

- **\`rootDir\`**: Set to \`"./src"\` to tell the compiler to look only in the source folder.
- **\`outDir\`**: Set to \`"./dist"\` to output all compiled JavaScript files into a distribution folder.

### Step 3: Build & Execute
Now, simply run:
\`\`\`bash
tsc
\`\`\`
TypeScript automatically compiles all files under \`src/\` and places the compiled output inside \`dist/\`! Run the application:
\`\`\`bash
node dist/index.js
\`\`\`

---

## Assignment

1. Generate a \`tsconfig.json\` in your workspace.
2. Structure your project with \`src\` and \`dist\` folders, adjust configurations, and verify the output compiles.
`
      }
    ]
  },
  {
    sectionId: "02_Annotations_And_Basic_Types",
    sectionTitle: "2. Annotations & Basic Types",
    lessons: [
      {
        id: "ts-basic-annotations",
        title: "Built-In Types & Annotations",
        url: "",
        content: `## Overview

> Let's examine the core type annotations in TypeScript. Type annotations explicitly tell the compiler the expected type of variables, functions, or objects, enforcing absolute structural alignment.

**You will learn:**

- Annotating basic types: string, number, and boolean.
- Variable declaration syntax using colons.
- Dynamic type inference fallback.

---

## Content

### Variable Annotations
To explicitly specify a type, append a colon (\`:\`) followed by the data type name:

\`\`\`typescript
let myNumber: number = 42;
let myString: string = "Hello, TypeScript!";
let isDone: boolean = true;
\`\`\`

If you assign a value of an incompatible type later, TypeScript immediately flags a compilation error:
\`\`\`typescript
myNumber = "forty-two"; // Error: Type 'string' is not assignable to type 'number'
\`\`\`

### Dynamic Type Inference
If you declare a variable and initialize it immediately *without* a type annotation, TypeScript will dynamically infer its type:
\`\`\`typescript
let greeting = "Hello!"; // Inferred as type string
\`\`\`
> [!NOTE]
> Even though TypeScript infers types, defining explicit annotations is recommended as a best practice in professional projects.

---

## Assignment

1. Write a script declaring a series of variables for a store item (e.g., name, price, availability) with strict type annotations.
2. Experiment with reassigning different type literals to observe compile-time errors.
`
      },
      {
        id: "ts-any-type",
        title: "Dynamic Typing Escape: Any Type",
        url: "",
        content: `## Overview

> TypeScript provides an escape hatch from its static verification checks known as the 'any' type. We'll explore when this is useful and why it should be avoided in production systems.

**You will learn:**

- Defining the \`any\` type.
- Disabling the compiler's strict validation checks.
- Best practices and warning indicators.

---

## Content

### The escape hatch

The \`any\` type represents any standard JavaScript value. When a variable is annotated as \`any\`, TypeScript completely disables all static validation checks on it:

\`\`\`typescript
let myVariable: any = 4;
myVariable = "now a string"; // Valid
myVariable = true; // Valid
\`\`\`

### When is it useful?
Using \`any\` is acceptable when:
- Parsing incoming payloads from remote APIs where the structure is unknown.
- Gradually migrating legacy JavaScript codebases into TypeScript.

> [!WARNING]
> Using \`any\` results in a complete loss of type safety, reduces code readability, and makes your application hard to maintain. Avoid using it whenever possible!

---

## Assignment

1. Parse a dynamic JSON string payload into an \`any\` typed variable.
2. Reflect on how configuring \`noImplicitAny: true\` in \`tsconfig.json\` forces developers to write safer code.
`
      },
      {
        id: "ts-object-annotations",
        title: "Type Annotations with Objects",
        url: "",
        content: `## Overview

> Objects are the core structures of JavaScript. TypeScript allows us to define precise contracts specifying exactly what properties an object must have, which are optional, and their types.

**You will learn:**

- Structuring object annotations.
- Declaring optional properties using the \`?\` symbol.
- Handling nested structural configurations.

---

## Content

### Object Annotations

You specify an object's structure by declaring key-type pairs inside curly braces:

\`\`\`typescript
const person: { name: string; age: number } = {
  name: "Alice",
  age: 25
};
\`\`\`

### Optional Fields
If a property is optional (meaning it may or may not be defined inside the object), append a question mark (\`?\`) after its name:

\`\`\`typescript
const student: { name: string; age: number; score?: number } = {
  name: "Bob",
  age: 22
  // score is omitted, which is perfectly valid!
};

student.score = 95; // Now set!
\`\`\`

### Nested Objects
TypeScript objects can represent complex nested structures:
\`\`\`typescript
const employee: {
  name: string;
  address: {
    street: string;
    city: string;
  }
} = {
  name: "Bob",
  address: {
    street: "123 main st",
    city: "Nairobi"
  }
};
\`\`\`

---

## Assignment

1. Declare a variable representing a laptop configuration including make, year, RAM size, and optional GPU model.
2. Try assigning a configuration omitting required values and observe the compiler error.
`
      },
      {
        id: "ts-function-annotations",
        title: "Type Annotations with Functions",
        url: "",
        content: `## Overview

> Enforcing clean function boundaries is critical. We'll explore how to type-annotate function parameters and return values, and implement optional or default arguments.

**You will learn:**

- Function parameter type signatures.
- Return annotations using colon declarations.
- Utilizing optional (\`?\`) and default (\`=\`) arguments.

---

## Content

### Standard Functions
You specify types for parameters and define the returned value type after the parameter block:

\`\`\`typescript
function calculateArea(length: number, width: number): number {
  return length * width;
}
\`\`\`

### Optional Parameters
To make an argument optional, append \`?\` after its name. Optional parameters must appear *after* any required parameters:

\`\`\`typescript
function greetUser(name: string, title?: string): string {
  if (title) {
    return \`Hello, \${title} \${name}\`;
  }
  return \`Hello, \${name}\`;
}
\`\`\`

### Default Parameters
If a parameter is omitted, a default parameter automatically assumes a defined fallback value:

\`\`\`typescript
function calculateTotal(price: number, discount: number = 0): number {
  return price - discount;
}
\`\`\`

---

## Assignment

1. Create a function \`formatCurrency\` that takes a \`number\` value and an optional \`symbol\` string (defaulting to \`$\`) and returns a formatted string.
2. Call the function with and without the optional parameter.
`
      },
      {
        id: "ts-arrow-anonymous",
        title: "Arrow & Anonymous Functions",
        url: "",
        content: `## Overview

> Let's analyze how to annotate arrow functions and anonymous expression scopes.

**You will learn:**

- Typing arrow functions.
- Implicit vs explicit block returns.
- Anonymous inline callbacks.

---

## Content

### Arrow Functions
Arrow functions can be cleanly typed with strict parameter and return configurations:

\`\`\`typescript
const multiply = (x: number, y: number): number => x * y;
\`\`\`

For complex calculations, you can open a block body and write an explicit return statement:
\`\`\`typescript
const formatUser = (name: string, age: number): string => {
  return \`Name: \${name}, Age: \${age}\`;
};
\`\`\`

### Anonymous Functions
Anonymous functions have no name and are defined inline as expressions, which is useful for callbacks without polluting the global namespace:

\`\`\`typescript
const add = function(a: number, b: number): number {
  return a + b;
};
\`\`\`

---

## Assignment

1. Write a callback expression inside an \`array.map\` function using a typed arrow function to stringify a list of ratings.
`
      },
      {
        id: "ts-void-never",
        title: "Special Return Types: Void & Never",
        url: "",
        content: `## Overview

> TypeScript introduces void and never to model specific function execution endpoints. We'll explore their distinct behaviors.

**You will learn:**

- The \`void\` type for side effects.
- The \`never\` type for unreachable code.
- Implementing exceptions and infinite loops.

---

## Content

### Void Return
\`void\` represents the absence of a returned value. It is used to annotate functions that perform side effects (like logging) but produce no output value:

\`\`\`typescript
function logMessage(message: string): void {
  console.log(message);
}
\`\`\`

### Never Return
\`never\` represents values that can *never* occur. In the context of functions, it indicates that a function will never return normally to its caller, either because it throws an exception or enters an infinite loop:

\`\`\`typescript
// Throws an exception and terminates
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

// Runs indefinitely
function runInfiniteLoop(): never {
  while (true) {
    console.log("Running...");
  }
}
\`\`\`

---

## Assignment

1. Write a helper function \`handleFailure\` that takes a string message and has a return type signature of \`never\`.
`
      }
    ]
  },
  {
    sectionId: "03_Advanced_Types_And_Aliases",
    sectionTitle: "3. Advanced Types & Aliases",
    lessons: [
      {
        id: "ts-union-intersection",
        title: "Union & Intersection Types",
        url: "",
        content: `## Overview

> Let's build flexible type models using Union and Intersection operators. These enable us to represent dynamic data combinations cleanly.

**You will learn:**

- Creating Union types (\`|\`) for multi-type variables.
- Combining schemas using Intersection types (\`&\`).
- Static safety validations across combinations.

---

## Content

### Union Types
Union types represent a value that can be one of several specified types, separated by a vertical bar (\`|\`):

\`\`\`typescript
let userId: string | number = "user_101";
userId = 101; // Perfectly valid!
\`\`\`
If you assign an unlisted type (like a boolean), the compiler flags a type error.

### Intersection Types
Intersection types allow you to combine multiple interfaces or schemas into a single unified type:

\`\`\`typescript
type FirstType = { a: number };
type SecondType = { b: string };

type CombinedType = FirstType & SecondType;

const obj: CombinedType = {
  a: 42,
  b: "universal answer"
};
\`\`\`

---

## Assignment

1. Build an interface \`Car\` and \`Electric\`. Create an intersection type \`ElectricCar\` and declare an object adhering to it.
`
      },
      {
        id: "ts-literal-nullable",
        title: "Literal & Nullable Types",
        url: "",
        content: `## Overview

> Let's lock variables down to exact values using Literal Types, and represent optional absences safely using Nullable Types.

**You will learn:**

- Locking down values using string and numeric literals.
- Creating Nullable types.
- Safer validation checks.

---

## Content

### Literal Types
Literal types allow you to specify exactly which values are permitted for a variable, rather than accepting broad primitives:

\`\`\`typescript
let direction: "left" | "right" | "up" | "down" = "left";
direction = "right"; // OK

// Error: Type '"forward"' is not assignable to type...
direction = "forward";
\`\`\`

### Nullable Types
Nullable types explicitly account for the potential absence of a value (represented by \`null\`):

\`\`\`typescript
let username: string | null = null;
username = "moni_roy";
\`\`\`
This forces you to check for \`null\` before performing operations, preventing standard runtime errors!

---

## Assignment

1. Write a function \`handleStatus\` that accepts a status literal (\`"success" | "loading" | "error"\`) and handles them cleanly.
`
      },
      {
        id: "ts-type-alias",
        title: "Type Aliases",
        url: "",
        content: `## Overview

> Type aliases allow you to give custom, meaningful names to existing types, improving readability and reusability.

**You will learn:**

- Defining Type Aliases using the \`type\` keyword.
- Creating reusable structures.
- Object type aliases.

---

## Content

### Type Aliases

A Type Alias creates a new name for any type construct, helping clean up complex unions or object definitions:

\`\`\`typescript
type CustomString = string;
type ID = string | number;

let userId: ID = 456;
\`\`\`

### Object Type Aliases
You can define structural object blueprints:
\`\`\`typescript
type Employee = {
  name: string;
  age: number;
  email?: string; // Optional field
};

const bob: Employee = {
  name: "Bob",
  age: 30
};
\`\`\`

---

## Assignment

1. Declare a type alias \`PaymentMethod\` as a union of literals (\`"cash" | "card" | "paypal"\`). Implement a checkout function using it.
`
      }
    ]
  },
  {
    sectionId: "04_Collections_And_Enums",
    sectionTitle: "4. Collections & Enums",
    lessons: [
      {
        id: "ts-array-annotations",
        title: "Type Annotations with Arrays",
        url: "",
        content: `## Overview

> Arrays are central to collections data. We will cover how to define typed arrays, multi-dimensional structures, and union arrays.

**You will learn:**

- Defining typed arrays.
- Multidimensional matrices.
- Mixed-type arrays using unions.

---

## Content

### Single-Type Arrays
Specify the element type followed by square brackets (\`[]\`):

\`\`\`typescript
const fruits: string[] = ["Apple", "Orange", "Banana"];
\`\`\`

### Multidimensional Arrays
To represent arrays containing nested arrays (matrices):
\`\`\`typescript
const matrix: number[][] = [
  [1, 2],
  [3, 4]
];
\`\`\`

### Mixed-Type Union Arrays
To represent an array that can hold a mixture of strings and numbers:
\`\`\`typescript
const mixedCollection: (string | number)[] = [28, "GeeksforGeeks", 99];
\`\`\`

---

## Assignment

1. Write a script that iterates over a strongly typed array of numbers, calculates the average, and prints it in the console.
`
      },
      {
        id: "ts-tuples",
        title: "Tuples",
        url: "",
        content: `## Overview

> A Tuple is a specialized array structure with a fixed size and strictly ordered types. We'll explore how to define, assign, and destructure tuples.

**You will learn:**

- Defining fixed-size tuples.
- Assigning values and size boundaries.
- Destructuring tuple elements.

---

## Content

### Defining Tuples
Specify the exact types for each index position inside brackets:

\`\`\`typescript
let article: [number, string, boolean] = [1, "TypeScript Basics", true];
\`\`\`

### Strict Size & Order
The compiler validates that the elements match the exact types and order:
\`\`\`typescript
// Error: Type 'string' is not assignable to type 'number'
article = ["TypeScript Basics", 1, true];
\`\`\`

### Destructuring Tuples
You can extract elements into distinct variables cleanly:
\`\`\`typescript
const [id, title, isActive] = article;
console.log(\`ID: \${id}, Title: \${title}\`);
\`\`\`

---

## Assignment

1. Declare a tuple representing coordinates \`[latitude, longitude]\`. Write a log function that destructures them.
`
      },
      {
        id: "ts-enums",
        title: "Enums",
        url: "",
        content: `## Overview

> Enums (Enumerations) define a set of named constants representing discrete options or categories, significantly improving code clarity.

**You will learn:**

- Defining Enums using the \`enum\` keyword.
- Default numeric increments.
- Custom initialization overrides.

---

## Content

### Standard Enums
By default, enums assign numeric values starting from 0:

\`\`\`typescript
enum Days {
  Monday,    // 0
  Tuesday,   // 1
  Wednesday, // 2
  Thursday   // 3
}

let today: Days = Days.Wednesday;
console.log(today); // Output: 2
\`\`\`

### Custom Initializations
You can explicitly initialize enum constants with numeric or string values:
\`\`\`typescript
enum DaysCustom {
  Monday = 1,
  Tuesday,     // 2 (auto-incremented!)
  Wednesday = 10,
  Thursday     // 11 (auto-incremented!)
}
\`\`\`

---

## Assignment

1. Create an enum \`ProductStatus\` with values for \`InStock\`, \`OutOfStock\`, and \`Discontinued\`. Assign it to a product object.
`
      }
    ]
  },
  {
    sectionId: "05_Object_Oriented_TypeScript_And_Interfaces",
    sectionTitle: "5. Object-Oriented TypeScript & Interfaces",
    lessons: [
      {
        id: "ts-interface-basic",
        title: "Interfaces Shape Contracts",
        url: "",
        content: `## Overview

> Interfaces define compile-time data blueprints specifying exactly what properties and methods an object or class must implement.

**You will learn:**

- Defining Interfaces.
- Enforcing structural contracts.
- Instant validation benefits.

---

## Content

### Defining Interfaces

An **Interface** acts as a structural contract for objects:

\`\`\`typescript
interface Person {
  name: string;
  age: number;
}

const alice: Person = {
  name: "Alice",
  age: 30
};
\`\`\`

TypeScript checks if objects meeting an interface contract satisfy all of its requirements, catching structural errors early.

---

## Assignment

1. Write an interface \`Book\` requiring \`title\` and \`author\`. Instantiate a book object adhering to the contract.
`
      },
      {
        id: "ts-interface-methods",
        title: "Interface Methods, Parameters & Reopening",
        url: "",
        content: `## Overview

> Interfaces can define method contracts and support progressive structural expansion through declaration merging (reopening).

**You will learn:**

- Declaring methods inside interfaces.
- Merging multiple interfaces with the same name.
- Real-world modular configurations.

---

## Content

### Interface Methods
You can define method signatures including parameter lists and return annotations:

\`\`\`typescript
interface Person {
  name: string;
  greet(message: string): void;
}

const alice: Person = {
  name: "Alice",
  greet(msg) {
    console.log(\`\${this.name} says: \${msg}\`);
  }
};
\`\`\`

### Reopening (Declaration Merging)
If you declare multiple interfaces with the identical name, TypeScript merges their fields together:

\`\`\`typescript
interface Setting {
  theme: string;
}

// Reopened to add font!
interface Setting {
  font: string;
}

const userSettings: Setting = {
  theme: "dark",
  font: "Outfit"
};
\`\`\`

---

## Assignment

1. Declare a reopened interface \`User\` across two blocks (adding \`id\` in block one and \`email\` in block two). Create an object utilizing the merged fields.
`
      },
      {
        id: "ts-interface-aliases",
        title: "Interface vs. Type Aliases",
        url: "",
        content: `## Overview

> Both interfaces and type aliases serve to model custom structures. We will analyze their exact differences and capabilities.

**You will learn:**

- Syntax comparisons.
- Declaration merging rules.
- Extensibility configurations.

---

## Content

### Core Differences

| Feature | Interface | Type Alias |
| :--- | :--- | :--- |
| **Syntax** | \`interface Person {}\` | \`type Person = {}\` |
| **Declaration Merging** | Supported (merges duplicate names) | Not supported (duplicate names throw errors) |
| **Extensibility** | Supports \`extends\` | Uses Intersection operators (\`&\`) |

### When to use which?
- Use **Interfaces** when defining the shape of public APIs, objects, or when extending classes using the \`implements\` keyword.
- Use **Type Aliases** when building complex unions, intersections, literal mappings, or working with tuple structures.

---

## Assignment

1. Create a Union Type using type aliases and attempt to build the identical structure using an interface to observe compilation constraints.
`
      },
      {
        id: "ts-class-basics",
        title: "Class Type Annotations & Access Modifiers",
        url: "",
        content: `## Overview

> TypeScript classes act as runtime blueprints. We will cover declaring attributes, class constructors, inheritance, and member access visibility modifiers.

**You will learn:**

- Attributes declarations.
- Constructor syntax and \`super()\` inheritance.
- Visibility modifiers: public, private, and protected.

---

## Content

### Attributes & Constructors
Unlike JavaScript, class attributes must be statically declared before referencing them:

\`\`\`typescript
class Product {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
\`\`s

### Inheritance & Super
Subclasses extend base classes. When derived constructors are implemented, they must call \`super()\` to execute parent properties:

\`\`\`typescript
class ChildProduct extends Product {
  category: string;

  constructor(id: number, name: string, category: string) {
    super(id, name);
    this.category = category;
  }
}
\`\`\`

### Access Modifiers
- **\`public\`** *(Default)*: Members are fully accessible from anywhere.
- **\`private\`**: Members are accessible only *inside* the defining class.
- **\`protected\`**: Members are accessible inside the defining class and any subclass.

---

## Assignment

1. Create a class \`Vehicle\` with a private property \`engineCode\` and a subclass \`Car\` that accesses it via a public method.
`
      },
      {
        id: "ts-class-accessors",
        title: "Class Accessors (Getters & Setters)",
        url: "",
        content: `## Overview

> Accessors (getters and setters) provide strict control over how private class fields are read and written.

**You will learn:**

- Declaring getters and setters using \`get\` and \`set\`.
- Enforcing validation checks.
- Price boundaries.

---

## Content

### Getters and Setters

Use the \`get\` and \`set\` keywords to intercept access to private properties:

\`\`\`typescript
class Product {
  private _price: number = 0;

  get price(): number {
    return this._price;
  }

  set price(val: number) {
    if (val < 0) {
      console.log("Price cannot be negative!");
      return;
    }
    this._price = val;
  }
}

const prod = new Product();
prod.price = -10; // "Price cannot be negative!"
\`\`\`

---

## Assignment

1. Implement a class \`Account\` with a private field \`balance\`. Add accessors ensuring deposits are never negative.
`
      },
      {
        id: "ts-class-static",
        title: "Class Static Members",
        url: "",
        content: `## Overview

> Static members belong to the class blueprint itself, rather than to instances of the class.

**You will learn:**

- Defining static properties and methods.
- Managing factory patterns.
- Global class helpers.

---

## Content

### Static Members

Static members are defined using the \`static\` keyword and can be accessed without instantiating the class:

\`\`\`typescript
class Product {
  private static nextId: number = 1;

  static generateId(): number {
    return this.nextId++;
  }
}

console.log(Product.generateId()); // Output: 1
\`\`\`

---

## Assignment

1. Implement a class \`Counter\` with static properties tracking total instances instantiated.
`
      },
      {
        id: "ts-class-implements",
        title: "Class Implement Interface",
        url: "",
        content: `## Overview

> The implements keyword guarantees that a class adheres strictly to the structural blueprint defined by an interface.

**You will learn:**

- Enforcing structural contracts on classes.
- Standardizing API models.
- Multi-interface implementations.

---

## Content

### Implements Contract

When a class implements an interface, it must provide all required properties and method signatures defined in that contract:

\`\`\`typescript
interface Printable {
  printInfo(): string;
}

class Book implements Printable {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  printInfo(): string {
    return \`Title: \${this.title}\`;
  }
}
\`\`\`

---

## Assignment

1. Create a class \`Printer\` that implements a \`Printable\` interface and print item summaries cleanly.
`
      },
      {
        id: "ts-abstract-classes",
        title: "Abstract Classes & Polymorphism",
        url: "",
        content: `## Overview

> Abstract classes serve as templates for other classes. They cannot be instantiated directly and can declare abstract method contracts.

**You will learn:**

- Creating abstract classes using the \`abstract\` keyword.
- Enforcing child class implementations.
- Polymorphism and method overrides using \`super\`.

---

## Content

### Abstract Templates
Abstract classes can house concrete methods as well as unimplemented abstract signatures:

\`\`\`typescript
abstract class Item {
  id: number;
  constructor(id: number) { this.id = id; }

  // Child classes MUST implement this!
  abstract getInfo(): string;
}

class Book extends Item {
  title: string;
  constructor(id: number, title: string) {
    super(id);
    this.title = title;
  }

  getInfo(): string {
    return \`Book: \${this.title}\`;
  }
}
\`\`\`

### Polymorphism & Method Override
Polymorphism allows objects of different concrete subclasses to be treated as instances of their shared abstract superclass, letting customized method overrides execute dynamically:

\`\`\`typescript
const items: Item[] = [
  new Book(1, "Clean Code"),
  new Book(2, "Refactoring")
];
\`\`\`

---

## Assignment

1. Implement an abstract class \`Employee\` with an abstract method \`getSalary\`. Create two concrete subclasses and verify polymorphism.
`
      }
    ]
  },
  {
    sectionId: "06_Generics_Assertions_And_Debugging",
    sectionTitle: "6. Generics, Assertions & Debugging",
    lessons: [
      {
        id: "ts-generics-basic",
        title: "Generics in TypeScript",
        url: "",
        content: `## Overview

> Generics allow you to write reusable, type-safe components that work with a variety of data types, completely avoiding the loose 'any' type.

**You will learn:**

- Creating generic type placeholders using \`<T>\`.
- Writing type-safe generic functions.
- Compiler type inferences.

---

## Content

### The Generic Placeholder
By capturing the argument's type in a type parameter variable (traditionally \`T\`), the compiler dynamically maps and enforces type safety throughout the execution:

\`\`\`typescript
function identity<T>(value: T): T {
  return value;
}

// T is explicitly string!
let msg = identity<string>("Glitchy Devs");

// T is inferred as number!
let num = identity(42);
\`\`\`

---

## Assignment

1. Write a generic function \`reverseArray<T>(arr: T[]): T[]\` that takes an array and returns it reversed.
`
      },
      {
        id: "ts-generics-advanced",
        title: "Generics Multiple Types & Classes",
        url: "",
        content: `## Overview

> Generics can map multiple distinct types simultaneously, and can be implemented to make entire class blueprints highly flexible.

**You will learn:**

- Handling multiple generic parameters like \`<T, S>\`.
- Building generic classes.
- Enforcing default parameters in generic signatures.

---

## Content

### Multiple Type Parameters
You can specify multiple generic type parameters simultaneously by separating them with commas:

\`\`\`typescript
function combine<T, S>(first: T, second: S): string {
  return \`\${first} & \${second}\`;
}
\`\`\`

### Generic Classes
Classes can utilize type parameter abstractions to manage varying payloads:

\`\`\`typescript
class User<T = string> {
  value: T;

  constructor(initial: T) {
    this.value = initial;
  }
}

const userOne = new User("Alice"); // Inferred string
const userTwo = new User<number>(100); // Set to number
\`\`\`

---

## Assignment

1. Write a generic class \`Pair<T, S>\` with properties \`first\` and \`second\`. Instantiate it with varying types.
`
      },
      {
        id: "ts-generics-interfaces",
        title: "Generics and Interfaces",
        url: "",
        content: `## Overview

> Let's analyze how generics can be bound inside interface definitions to create flexible collections standard shapes.

**You will learn:**

- Declaring generic interfaces.
- Binding data collections.
- Strict element push checking.

---

## Content

### Generic Interfaces

Interfaces can easily accept type parameter abstracts to standardize data storage:

\`\`\`typescript
interface Game {
  title: string;
}

class Collection<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }
}

const gamesCollection = new Collection<Game>();
gamesCollection.add({ title: "Halo" }); // Safe!
\`\`\`

---

## Assignment

1. Create a generic interface \`ResponsePayload<T>\` with an \`id\` and a \`data\` payload of type \`T\`. Implement objects modeling varying payloads.
`
      },
      {
        id: "ts-assertions",
        title: "Type Assertions",
        url: "",
        content: `## Overview

> Type assertions tell the compiler explicitly what type a value is when the compiler cannot infer it automatically.

**You will learn:**

- Explicit type assertion syntax using \`as\`.
- Handling dynamic \`any\` responses safely.
- Compile-time checking overrides.

---

## Content

### Assertions Syntax

Use the \`as\` operator to inform TypeScript that a variable is of a specific, targeted type:

\`\`\`typescript
let data: any = "This is a string";

// Overriding compile checks
let length: number = (data as string).length;
\`\`\`

> [!NOTE]
> Type assertions are analyzed purely at compile time and do not perform any runtime checks, conversions, or casting.

---

## Assignment

1. Parse a dynamic JSON response and assert the resulting payload as an interface contract \`User\`.
`
      },
      {
        id: "ts-debugging",
        title: "Debugging TypeScript in VS Code",
        url: "",
        content: `## Overview

> Debugging is an invaluable skill. We will cover enabling source maps, configuring breakpoints, and debugging TS code in Visual Studio Code.

**You will learn:**

- Configuring Source Maps in \`tsconfig.json\`.
- Inserting breakpoints in VS Code.
- Setting up a \`launch.json\` profile for Node.js debugging.

---

## Content

### Step 1: Enable Source Maps
Open your \`tsconfig.json\` and enable:
\`\`\`json
"sourceMap": true
\`\`\`
This produces \`.js.map\` files, mapping compiled JavaScript execution back to your original TypeScript source lines for the debugger.

### Step 2: Set Breakpoints
Open your \`index.ts\` file in VS Code and click on the margin next to the line numbers to set red **breakpoints**, which pause code execution when reached.

### Step 3: Configure launch.json
Go to the **Run & Debug** panel, select **Create a launch.json file**, and choose **NodeJS**. The debugger automatically utilizes your settings and source maps to debug your code safely!

---

## Assignment

1. Enable source maps, set a breakpoint in your \`index.ts\`, launch the VS Code debugger, and step through your code.
`
      }
    ]
  }
];
