# Setting Up A React Environment

> **Source:** [https://www.theodinproject.com/lessons/node-path-react-new-setting-up-a-react-environment](https://www.theodinproject.com/lessons/node-path-react-new-setting-up-a-react-environment)

---

## Overview

Now that you understand what React is and how components shape a web application, it's time to build a robust, premium local development environment on your machine. This lesson will guide you through installing required dependencies, configuring your editor, scaffolding a new project using Vite, and understanding folder layouts.

---

## Setting Up the Development Environment

To construct high-performance React web applications, we must first assemble our runtime platform and tools:

### 1. Install Node.js (Version 16 or Higher Required)
**Node.js** is a JavaScript runtime environment that compiles and aggregates frontend assets and runs package management tools.
* **Requirement**: You **MUST** run Node version **16 or higher** on your machine.
* **Verification Check**: Open up your terminal or command prompt window and run:
  ```bash
  node -v
  ```
  This will print the currently installed Node.js version (e.g., `v19.4.0` or `v20.11.0`). If the output is a version lower than 16, or if Node is not found:
* **Installation**: Navigate to [nodejs.org](https://nodejs.org/), download, and run the latest **LTS (Long Term Support)** installer for your specific operating system.

### 2. Configure Your Code Editor (VS Code)
While you are free to write code in any text editor, we strongly recommend using **Visual Studio Code (VS Code)**. 

To maintain clean, consistent, and standard styling across all your project files:
* **Install Prettier Extension**: 
  1. Open the **Extensions Panel** in VS Code (shortcut: `Cmd + Shift + X` on Mac, `Ctrl + Shift + X` on Windows/Linux).
  2. Search for **"Prettier - Code formatter"**.
  3. Click **Install**.
* **Auto-Formatting Setup**: Once installed, configure VS Code to automatically format files upon saving:
  1. Open settings (`Cmd + ,` or `Ctrl + ,`).
  2. Search for **"Format On Save"** and check the box to enable it.
  3. Search for **"Default Formatter"** and select `esbenp.prettier-vscode` from the dropdown list.

---

## Modern Toolchains & Project Scaffolding

Historically, standard React projects were created using **Create React App (CRA)**. However, owing to slow build speeds and legacy Webpack parameters, CRA was deprecated. Today, modern React applications are scaffolded using **Vite**.

Vite is a fast build tool that provides a premium, high-speed development experience with Hot Module Replacement (HMR).

### Creating a React App via Vite
Open your terminal inside the workspace folder where you store coding projects. Run the following command:

```bash
npm create vite@latest my-first-react-app -- --template react-ts
```
*(Note: We append `-ts` to the template parameter to automatically enable TypeScript compiler configurations inside the React scaffolding!)*

Follow the terminal prompts:
1. `cd my-first-react-app`
2. Run `npm install` to download all core package dependencies.
3. Start the high-speed local dev server:
   ```bash
   npm run dev
   ```

Open your browser and navigate to `http://localhost:5173/` to view the running template React homepage.

---

## Inspecting the Scaffolding Directory

Let's open our new project folder in VS Code to examine the directory layout:

* **`package.json`**: Lists all third-party libraries, compile targets, and terminal execution commands (`dev`, `build`, `preview`).
* **`public/`**: Stores raw static assets like favicons and configuration profiles that are served directly without processing.
* **`src/`**: The home for your application logic!
  * **`main.tsx`**: The entry point of your application. It uses `createRoot` to grab an HTML div element (with an ID of `root` inside your `index.html`) and renders your `<App />` component hierarchy inside it:
    ```typescript
    import { StrictMode } from "react";
    import { createRoot } from "react-dom/client";
    import App from "./App.tsx";
    import "./index.css";

    createRoot(document.getElementById("root")!).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    ```
  * **`App.tsx`**: The root component of your application containing visual state and child components.

### Dynamic Inspection: React Developer Tools Extension
To debug states, props, and component trees inside running browser tabs:
1. Search your browser's extension store for the **React Developer Tools** extension.
2. Once installed, open Chrome DevTools (`Cmd + Option + I` on Mac) while running your React app.
3. You will see two new tabs: **"Components"** (to inspect prop values and states live) and **"Profiler"** (to measure rendering performance).

---

## Assignment

1. **Clean Scaffolding**: Open your newly created Vite React application, delete the default styles inside `App.css` and template logic in `App.tsx`, and make it render a beautiful `<h1>Hello, World!</h1>` header.
2. **Explore Vite**: Check the [Vite Documentation](https://vitejs.dev/guide/) to understand how Hot Module Replacement accelerates feedback cycles.

---

## Knowledge Check

* **What terminal commands verify your Node.js setup and run local React servers?** (See [Setting Up the Development Environment](#setting-up-the-development-environment) and [Creating a React App](#creating-a-react-app-via-vite))
* **Why is Prettier standardly integrated into modern engineering workflows?** (See [Configure Your Code Editor](#2-configure-your-code-editor-vs-code))
* **What is the entry point file inside a Vite React template and what does it do?** (See [Inspecting the Scaffolding Directory](#inspecting-the-scaffolding-directory))
