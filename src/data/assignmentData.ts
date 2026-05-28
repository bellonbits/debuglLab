export interface AIAssignment {
  id: string;
  courseId: string;
  title: string;
  prompt: string;
  starterCode: string;
  validationKeywords: string[];
  praiseSuggestions: string[];
  critiqueSuggestions: string[];
  focusArea: string;
}

export const aiAssignmentsData: AIAssignment[] = [
  {
    id: "assignment-react",
    courseId: "react",
    title: "React Component: UserCard & State Toggle",
    prompt: `Create a functional React component named UserCard that accepts three props: name, role, and avatarUrl.

Visual Structure:
1. An img tag using the avatarUrl prop as its source and the name prop as its alt text.
2. An h3 tag displaying the name prop.
3. A p tag displaying the role prop.
4. An interactive button.

Functional Requirements:
1. Use the useState hook to manage a state variable tracking whether the user is followed (defaults to false).
2. When the button is clicked, trigger a handler that toggles this followed state.
3. Set the button text dynamically: display "Follow" when the state is unfollowed, and "Following" when followed.`,
    starterCode: `import React, { useState } from 'react';

export default function UserCard({ name, role, avatarUrl }) {
  // 1. Initialize followed state here (default false)
  
  // 2. Write follow toggle click handler
  
  return (
    <div className="user-card" style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      {/* 3. Render avatar image, name, role, and toggle button */}
      
    </div>
  );
}`,
    validationKeywords: ["useState", "avatarUrl", "name", "role", "Follow"],
    praiseSuggestions: [
      "Excellent job structuring the functional component! You correctly passed the required props and mapped them to their visual HTML tags.",
      "Flawless use of the React `useState` hook to build highly responsive, state-controlled interactive behaviors.",
      "Great attention to code quality! Structuring inline styles and utilizing key props is clean and follows modern React guidelines."
    ],
    critiqueSuggestions: [
      "To optimize rendering profiles, consider implementing standard default fallback values for your avatarUrl in case it is passed as undefined.",
      "For accessible frontend design, ensure you add descriptive `aria-live` or keyboard navigation selectors for the Follow button state change.",
      "Think about extracting the styles into a separate module or using class names to keep the JSX extremely readable."
    ],
    focusArea: "Mastering React Hooks & Props Destructuring"
  },
  {
    id: "assignment-sql",
    courseId: "sql",
    title: "SQL Query: Aggregating & Filtering High GDPs",
    prompt: `Write a robust SQL query using the world table to aggregate and filter wealthy continents.

Calculations Needed:
1. Return the continent name.
2. Calculate the total population of that continent using SUM(population).
3. Calculate the average GDP of countries on that continent using AVG(gdp).

Aggregating and Filtering Rules:
1. Group the calculations by the continent column.
2. Filter the grouped results to only show continents where the average GDP is greater than 50,000 using a HAVING clause.
3. Sort the final output in descending order based on the calculated average GDP.`,
    starterCode: `-- SQL Query Assignment: Aggregating & Filtering
SELECT continent, SUM(population), AVG(gdp)
FROM world
-- Write your GROUP BY, HAVING, and ORDER BY checks here
`,
    validationKeywords: ["GROUP BY", "HAVING", "AVG(gdp)", "gdp >", "ORDER BY", "desc"],
    praiseSuggestions: [
      "Outstanding query organization! You correctly recognized that filtering calculated aggregates requires `HAVING` rather than `WHERE`.",
      "Perfect implementation of table aggregation methods (`SUM`, `AVG`) coupled with robust multi-column grouping.",
      "Excellent logical order of operations! Your `GROUP BY` -> `HAVING` -> `ORDER BY` execution is clean and extremely efficient."
    ],
    critiqueSuggestions: [
      "Make sure you alias your calculated fields using `AS total_population` and `AS avg_gdp` to make database schemas more readable.",
      "Remember that some countries might have NULL values for population or GDP. Look into using `COALESCE` to handle potential nulls.",
      "Double-check your sorting syntax to ensure it matches precisely; descending sorting always requires the `DESC` keyword suffix."
    ],
    focusArea: "Advanced SQL Aggregations & HAVING clauses"
  },
  {
    id: "assignment-fastapi",
    courseId: "fastapi",
    title: "FastAPI Endpoint: Validating Item Body",
    prompt: `Construct a complete FastAPI endpoint inside a Python script to validate item request bodies.

Model Declaration:
1. Define a Pydantic model named Item that inherits from BaseModel.
2. Add a name field as a string (str).
3. Add a price field as a decimal number (float).

Endpoint Logic:
1. Register a POST path operation at path "/items/".
2. Inside the handler, evaluate the incoming item price.
3. Price Validation Check: if the price is less than 0, raise a HTTPException with status code 400 and detail message "Price cannot be negative".
4. Successful response: return a dictionary containing the item data and a simulated id of 101.`,
    starterCode: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

# 1. Define Item BaseModel

# 2. Register POST endpoint at /items/
`,
    validationKeywords: ["BaseModel", "HTTPException", "status_code=400", "price < 0", "@app.post"],
    praiseSuggestions: [
      "Exceptional integration of FastAPI path operations and Pydantic request models! Your code binds request payloads perfectly.",
      "Perfect use of `HTTPException` validation raising! Halting request pipelines early with 400 Bad Request error codes is a great practice.",
      "Clean, readable model structure. You declared Pydantic schemas beautifully, driving self-documentation automatically."
    ],
    critiqueSuggestions: [
      "Consider using Pydantic's built-in field validators (e.g. `Field(gt=0)`) to validate positive numbers before it hits your endpoint.",
      "For production-ready logging, think about adding request/response models as types in the function signature.",
      "To avoid hardcoded statuses, use standard constants from FastAPI (e.g. `status.HTTP_400_BAD_REQUEST`)."
    ],
    focusArea: "FastAPI Pydantic validation & Exception raising"
  },
  {
    id: "assignment-express",
    courseId: "express",
    title: "Express Middleware: JWT Token Authentication",
    prompt: `Write a secure Express middleware function named authenticateJWT(req, res, next) to authenticate API requests.

Authentication Flow:
1. Read the authorization header from the req.headers object.
2. Missing Token Safeguards: If the authorization header is missing, return a status code of 401 (Unauthorized) with a JSON error body: { "error": "Access token is missing" }.
3. Extracting Token: If present, split the header string to extract the raw token (format: "Bearer token").
4. Verification Check: Verify the extracted token using jwt.verify and your secret key process.env.JWT_SECRET.
5. Valid Token Behavior: Store the decoded payload inside the req.user object and call next() to proceed.
6. Invalid Token Safeguards: If the verification fails, return a status code of 403 (Forbidden) with a JSON error body: { "error": "Token is invalid" }.`,
    starterCode: `const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  
  // 1. Check if authHeader is missing
  
  // 2. Extract and verify token using process.env.JWT_SECRET
  
}`,
    validationKeywords: ["headers.authorization", "jwt.verify", "JWT_SECRET", "req.user", "next()", "401", "403"],
    praiseSuggestions: [
      "Outstanding middleware implementation! You accurately extracted the token and wired up the success/failure callbacks cleanly.",
      "Perfect logical separation of HTTP status codes (401 for completely unauthenticated, 403 for invalid/forbidden credentials).",
      "Great structure mapping decoded claims back to the request object (`req.user = user`), facilitating clean context flows downstream."
    ],
    critiqueSuggestions: [
      "Always add robust string splitting safeguards in case the Authorization header is passed with a malformed prefix instead of 'Bearer '.",
      "Consider wrapping the token validation in a standard `try-catch` block to handle signature exceptions gracefully.",
      "For production security, make sure to read the secret strictly from environment files rather than hardcoding default strings."
    ],
    focusArea: "Express Custom Middleware & JWT Token validation"
  },
  {
    id: "assignment-python",
    courseId: "python",
    title: "Python Basics: Safe List Division & Exceptions",
    prompt: `Write a resilient Python function named safe_divide_list(numbers, divisor) that divides list elements safely.

Processing Steps:
1. Initialize an empty list called results.
2. Iterate through each element in the numbers list.
3. Divide each element by the divisor parameter and append the result to results.

Robust Error Handling:
1. Wrap the division process in a try-except block to capture division errors.
2. Zero Division Guard: If a ZeroDivisionError occurs, append None to the results list instead of crashing.
3. Type Safety Guard: If a TypeError occurs (for example, if a list item is a non-numeric string), capture it and append None.
4. Final Return: Return the fully completed results list.`,
    starterCode: `def safe_divide_list(numbers, divisor):
    results = []
    
    # Write a loop to iterate numbers and divide safely
    
    return results
`,
    validationKeywords: ["try", "except", "ZeroDivisionError", "TypeError", "results", "None"],
    praiseSuggestions: [
      "Superb Python exception handling! Capturing multiple specialized errors separately prevents sudden runtime Meltdowns.",
      "Flawless list traversal and mapping logic! Appending individual state values makes your data pipeline resilient.",
      "Very clean Pythonic implementation! You correctly declared variables and structured exception blocks following PEP 8 standards."
    ],
    critiqueSuggestions: [
      "For an advanced Python style, you could look into using list comprehensions combined with inline conditional checks.",
      "Ensure you log or print diagnostic messages when TypeError occurs so that developers are aware of corrupt data in lists.",
      "Think about adding type hints in your function header (e.g. `numbers: list[int | float]`) for enhanced editor support."
    ],
    focusArea: "Robust Python Exception Handling & Iteration"
  }
];
