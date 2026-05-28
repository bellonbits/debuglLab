// SQLZoo Curriculum Database — The Debug Society
// Complete SQL Tutorial curriculum based on SQLZoo's official lessons

export interface SqlAssignment {
  id: string;
  instructions: string;
  defaultQuery: string;
  expectedResultPattern: string;
  targetLink: string;
}

export interface SqlLesson {
  id: string;
  title: string;
  description: string;
  content: string;
  assignments: SqlAssignment[];
}

export interface SqlSection {
  sectionId: string;
  sectionTitle: string;
  lessons: SqlLesson[];
}

export const sqlLessonsData: SqlSection[] = [
  // ─────────────────────────────────────────────
  // SECTION 0 — SQL FOUNDATIONS (Odin Project)
  // ─────────────────────────────────────────────
  {
    sectionId: "sql-foundations",
    sectionTitle: "0. SQL Foundations",
    lessons: [
      {
        id: "intro-databases",
        title: "Introduction to Databases",
        description: "Understand what databases are, how relational databases differ from other storage formats, and why SQL is the language used to talk to them.",
        content: `## What is a Database?

You might have wondered how websites keep track of all their users' data — who remembers that your login password is \`CatLover1985\`? The answer is the **database**. It sits at the bottom layer of any web application and handles all the remembering for you.

Databases can be relatively simple, like an Excel spreadsheet, or incredibly complex and split into many giant pieces, like Facebook's. Either way, they all follow the same core principles.

---

## Relational Databases

A **relational database** organises data into one or more **tables**. Think of each table as a spreadsheet:

- Each **row** is one record (e.g., one user).
- Each **column** is one attribute (e.g., name, email, password).
- Tables can be **linked** to each other through shared ID columns.

| Concept | Description |
|---------|-------------|
| Table | A grid of rows and columns, like a spreadsheet |
| Row | One record (one user, one post, one order) |
| Column | One attribute of that record |
| Primary Key | A unique ID that identifies every row |
| Foreign Key | A column that points to the primary key of another table |

---

## How is this different from XML or JSON?

XML and JSON store data in a **hierarchical / nested** structure — great for configuration files or API responses. Relational databases store data in **flat, linked tables** — much better for querying, filtering, joining, and aggregating large volumes of records.

---

## What is SQL?

**SQL** (Structured Query Language) is the standard language used to talk to relational databases. It has a short, readable syntax — only a handful of verbs to learn.

| SQL Verb | What it does |
|----------|--------------|
| \`SELECT\` | Read / retrieve data |
| \`INSERT\` | Add a new record |
| \`UPDATE\` | Change existing data |
| \`DELETE\` | Remove a record |
| \`CREATE TABLE\` | Define a new table |

---

## Getting All Records from a Table

The most basic SQL command reads every row from a table:

\`\`\`sql
SELECT * FROM users
\`\`\`

- \`*\` means "all columns"
- \`FROM users\` tells SQL which table to look in

---

## Inserting a Record

To add a new row, use \`INSERT INTO\`:

\`\`\`sql
INSERT INTO users (name, email)
VALUES ('Alice', 'alice@example.com');
\`\`\`

Always specify column names — it makes the query clear and safe.

---

## Recommended Resources

- [LaunchSchool: Introduction to SQL](https://launchschool.com/books/sql/read/introduction)
- [Short video: Intro to Relational Databases](http://www.youtube.com/watch?v=z2kbsG8zsLM)
- [Khan Academy: Hour of SQL](https://www.khanacademy.org/computing/hour-of-code/hour-of-sql/v/welcome-to-sql)
- [SQL vs NoSQL](https://circleci.com/blog/SQL-vs-NoSQL-databases/)`,
        assignments: [
          {
            id: "intro-select-all",
            instructions: "Write a query that retrieves every column and every row from the 'world' table. Use the * wildcard for columns.",
            defaultQuery: "SELECT * FROM world",
            expectedResultPattern: "world",
            targetLink: "https://sqlzoo.net/wiki/SELECT_basics"
          },
          {
            id: "intro-insert",
            instructions: "Write an INSERT statement that adds a row to the 'world' table with name='Neverland', continent='Fantasy', and population=1000.",
            defaultQuery: "SELECT name, continent, population FROM world\n  WHERE name = 'Germany'",
            expectedResultPattern: "insert",
            targetLink: "https://sqlzoo.net/wiki/SELECT_basics"
          },
          {
            id: "intro-filter",
            instructions: "Show only the name and population of countries where the population is more than 100 million.",
            defaultQuery: "SELECT name, population FROM world\n  WHERE population > 100000000",
            expectedResultPattern: "population",
            targetLink: "https://sqlzoo.net/wiki/SELECT_basics"
          }
        ]
      },
      {
        id: "sql-basics-deep",
        title: "SQL Basics — Queries, JOINs & Aggregates",
        description: "A complete overview of SQL — from basic SELECT queries through JOINs, aggregate functions, GROUP BY, and the HAVING clause.",
        content: `## Why Learn SQL Deeply?

Data is the core of any good web app. A strong understanding of SQL lets you:

- Write efficient queries instead of pulling data into JavaScript/Ruby to process it.
- Use ORMs (like Prisma or Active Record) confidently, knowing what they generate.
- Ask complex questions of your data — filtered, joined, grouped, and aggregated.

---

## Tables, Rows, and Keys

SQL databases use lots of tables to store different types of data (e.g., \`users\` and \`posts\`).

- Every table has an **ID column** — the record's **Primary Key** (unique row number).
- A **Foreign Key** is a column that stores the Primary Key of another table, linking them together.

\`\`\`sql
-- posts.user_id is a foreign key pointing to users.id
SELECT * FROM posts WHERE user_id = 42;
\`\`\`

---

## Setting Up: CREATE TABLE

\`\`\`sql
CREATE TABLE users (
  id    INT PRIMARY KEY,
  name  VARCHAR(100),
  email VARCHAR(255)
);
\`\`\`

The **Schema** is the complete definition of all your tables and columns — stored in a special file and updated every time you change the structure.

---

## CRUD — The Four Core Operations

| Operation | SQL Statement | Example |
|-----------|--------------|---------|
| Create | \`INSERT INTO\` | Add a new user |
| Read | \`SELECT\` | Show matching rows |
| Update | \`UPDATE ... SET\` | Change a user's email |
| Delete | \`DELETE FROM\` | Remove a record |

---

## INSERT — Creating Records

\`\`\`sql
INSERT INTO users (name, email)
VALUES ('foobar', 'foo@bar.com');
\`\`\`

Always specify column names. Always.

---

## UPDATE — Changing Records

\`\`\`sql
UPDATE users
SET name = 'barfoo', email = 'bar@foo.com'
WHERE email = 'foo@bar.com';
\`\`\`

> **Warning:** Without a \`WHERE\` clause, this updates *every row* in the table.

---

## DELETE — Removing Records

\`\`\`sql
DELETE FROM users WHERE id = 1;
\`\`\`

> **Classic mistake:** \`DELETE FROM users\` with no WHERE clause deletes *all users*. Always add a condition.

---

## SELECT — Reading Data

The most common operation. Every SELECT has:

- **Statement** — what to do (\`SELECT\`)
- **Table** — where to look (\`FROM users\`)
- **Clause** — conditions (\`WHERE\`, \`ORDER BY\`, \`LIMIT\`)

\`\`\`sql
SELECT users.id, users.name
FROM users
WHERE created_at < '2024-01-01';
\`\`\`

Use \`SELECT DISTINCT\` to remove duplicate values:

\`\`\`sql
SELECT DISTINCT users.name FROM users;
\`\`\`

---

## JOINs — Combining Tables

When you need data from two tables, use \`JOIN\`:

| JOIN Type | Behaviour |
|-----------|-----------|
| \`INNER JOIN\` (or \`JOIN\`) | Only rows that match in **both** tables |
| \`LEFT OUTER JOIN\` | All rows from the left table + matching right rows (NULLs for no match) |
| \`RIGHT OUTER JOIN\` | All rows from the right table + matching left rows |
| \`FULL OUTER JOIN\` | All rows from both tables; NULLs where no match |

\`\`\`sql
-- Get all posts with their author's name
SELECT users.name, posts.title
FROM users
JOIN posts ON users.id = posts.user_id;
\`\`\`

\`INNER JOIN\` is what you'll use 95% of the time.

---

## Aggregate Functions

Aggregate functions collapse multiple rows into a single value:

| Function | Returns |
|----------|---------|
| \`COUNT(*)\` | Number of rows |
| \`SUM(col)\` | Total of all values |
| \`AVG(col)\` | Average value |
| \`MIN(col)\` | Smallest value |
| \`MAX(col)\` | Largest value |

\`\`\`sql
SELECT MAX(users.age) AS highest_age FROM users;
\`\`\`

Use \`AS\` to give the result a readable column name.

---

## GROUP BY — Aggregating Per Group

\`GROUP BY\` runs an aggregate function **separately for each group**:

\`\`\`sql
SELECT users.id, users.name, COUNT(posts.id) AS posts_written
FROM users
JOIN posts ON users.id = posts.user_id
GROUP BY users.id, users.name;
\`\`\`

This shows how many posts **each user** has written — not the total for everyone.

---

## HAVING — Filtering on Aggregates

\`WHERE\` filters individual rows. \`HAVING\` filters the results **after** aggregation:

\`\`\`sql
SELECT users.id, users.name, COUNT(posts.id) AS posts_written
FROM users
JOIN posts ON users.id = posts.user_id
GROUP BY users.id, users.name
HAVING COUNT(posts.id) >= 10;
\`\`\`

> Rule of thumb: Use \`WHERE\` before aggregation, \`HAVING\` after.

---

## SQL is Faster Than Your Code

Instead of pulling data into JavaScript and filtering with \`.filter()\`:

\`\`\`sql
-- Bad: pulls ALL users, then filters in code
SELECT name FROM users

-- Good: SQL handles it, only sends distinct names
SELECT DISTINCT name FROM users
\`\`\`

SQL has a built-in **query optimizer** that figures out the fastest execution plan automatically.

---

## Recommended Resources

- [SQL Teaching — Interactive Tutorial](https://www.sqlteaching.com/)
- [SQL Bolt — In-depth Interactive Tutorial](http://sqlbolt.com/)
- [W3Schools SQL JOIN](http://www.w3schools.com/sql/sql_join.asp)
- [Visual Explanation of SQL Joins](http://blog.codinghorror.com/a-visual-explanation-of-sql-joins)`,
        assignments: [
          {
            id: "basics-join",
            instructions: "Write a JOIN query that selects 'name' from the world table and filters to countries in Europe with population > 50 million.",
            defaultQuery: "SELECT name FROM world\n  WHERE continent = 'Europe' AND population > 50000000",
            expectedResultPattern: "europe",
            targetLink: "https://sqlzoo.net/wiki/SELECT_from_WORLD_Tutorial"
          },
          {
            id: "basics-count",
            instructions: "Use COUNT(*) to find out how many countries are in the world table. Give the result column an alias of 'total_countries'.",
            defaultQuery: "SELECT COUNT(*) AS total_countries FROM world",
            expectedResultPattern: "count",
            targetLink: "https://sqlzoo.net/wiki/SELECT_from_WORLD_Tutorial"
          },
          {
            id: "basics-group-continent",
            instructions: "Show each continent and the total population of all countries in it. Use GROUP BY continent.",
            defaultQuery: "SELECT continent, SUM(population) AS total_pop\n  FROM world\n  GROUP BY continent",
            expectedResultPattern: "continent",
            targetLink: "https://sqlzoo.net/wiki/SUM_and_COUNT"
          }
        ]
      },
      {
        id: "sqlzoo-practice-guide",
        title: "SQL Zoo — Practice Guide (Tutorials 0–9)",
        description: "Work through SQLZoo's interactive tutorials 0 through 9. Each one teaches a new concept by running real queries against real data.",
        content: `## About SQL Zoo

[SQL Zoo](https://sqlzoo.net/wiki/SQL_Tutorial) is one of the best places online to practice SQL — it runs your queries against **real live databases** and shows you actual results instantly.

Each tutorial introduces a new concept and challenges you to write the query yourself.

---

## Before You Start

Set the **Engine** dropdown (top-right of SQLZoo) to **MySQL**. Large result sets may be trimmed, but your answers will still be validated correctly.

---

## Tutorial Roadmap

| Tutorial | Topic | What You'll Learn |
|----------|--------|-------------------|
| 0. SELECT basics | Basic filtering | WHERE, IN, BETWEEN |
| 1. SELECT names | Pattern matching | LIKE, %, _ wildcards |
| 2. SELECT from World | Calculations & logic | Arithmetic, AND/OR/NOT, ROUND |
| 3. SELECT from Nobel | Complex conditions | Combined AND/OR, date filtering |
| 4. SELECT within SELECT | Subqueries | Nested SELECT statements |
| 5. SUM and COUNT | Aggregation | SUM, COUNT, AVG, GROUP BY |
| 6. JOIN | Table joining | INNER JOIN, ON clause |
| 7. More JOIN | Multiple JOINs | Chained joins, DISTINCT |
| 8. Using NULL | Handling missing data | IS NULL, IS NOT NULL, COALESCE |
| 9. Self JOIN | Joining a table to itself | Aliasing the same table twice |

---

## Tutorial 0 — SELECT basics

Start here. Learn the three building blocks of every SQL query.

\`\`\`sql
-- Get a country's population
SELECT population FROM world WHERE name = 'Germany';

-- Match a list of values
SELECT name, population FROM world
  WHERE name IN ('France', 'Germany', 'Italy');

-- Filter by a range
SELECT name, area FROM world
  WHERE area BETWEEN 200000 AND 250000;
\`\`\`

[→ Open Tutorial 0](https://sqlzoo.net/wiki/SELECT_basics)

---

## Tutorial 1 — SELECT names

Learn to search by pattern using the \`LIKE\` operator.

\`\`\`sql
-- Countries starting with 'Y'
SELECT name FROM world WHERE name LIKE 'Y%';

-- Countries containing 'oo'
SELECT name FROM world WHERE name LIKE '%oo%';

-- Countries with exactly 4 characters
SELECT name FROM world WHERE name LIKE '____';
\`\`\`

[→ Open Tutorial 1](https://sqlzoo.net/wiki/SELECT_names)

---

## Tutorial 5 — SUM and COUNT

Aggregate functions collapse many rows into one answer.

\`\`\`sql
-- Total world population
SELECT SUM(population) FROM world;

-- Count of countries per continent
SELECT continent, COUNT(name)
  FROM world
  GROUP BY continent;

-- Only show continents with > 3 countries
SELECT continent, COUNT(name)
  FROM world
  GROUP BY continent
  HAVING COUNT(name) > 3;
\`\`\`

[→ Open Tutorial 5](https://sqlzoo.net/wiki/SUM_and_COUNT)

---

## Tutorial 6 — JOIN

Combine data from two tables using a shared key.

\`\`\`sql
-- Which player scored for Germany in game 1012?
SELECT player FROM goal
  JOIN game ON goal.matchid = game.id
  WHERE game.team1 = 'GER' OR game.team2 = 'GER';
\`\`\`

[→ Open Tutorial 6](https://sqlzoo.net/wiki/The_JOIN_operation)

---

## Tutorial 8 — Using NULL

Handle missing data gracefully with \`IS NULL\` and \`COALESCE\`.

\`\`\`sql
-- Teachers with no department assigned
SELECT name FROM teacher WHERE dept IS NULL;

-- Replace NULL with a default value
SELECT name, COALESCE(dept, 0) FROM teacher;
\`\`\`

[→ Open Tutorial 8](https://sqlzoo.net/wiki/Using_Null)

---

## After the Tutorials

Once you've completed all 9, fill out the feedback form linked on the SQL Zoo assignment page. Feedback helps The Odin Project improve the curriculum.

---

## Knowledge Check

Before moving on, make sure you can answer:

- What is a database?
- What are relational databases?
- What is a Primary Key?
- What is SQL used for?
- How do you get all records from a table?
- How do you insert a record?
- What is the difference between WHERE and HAVING?
- Which JOIN keeps only matching rows from both tables?
- How do you use an aggregate function like COUNT?`,
        assignments: [
          {
            id: "zoo-tutorial-0",
            instructions: "Complete Tutorial 0 on SQLZoo: show the name of Germany using SELECT and WHERE.",
            defaultQuery: "SELECT name FROM world\n  WHERE name = 'Germany'",
            expectedResultPattern: "germany",
            targetLink: "https://sqlzoo.net/wiki/SELECT_basics"
          },
          {
            id: "zoo-tutorial-5",
            instructions: "Complete Tutorial 5 on SQLZoo: count the number of countries in each continent using GROUP BY.",
            defaultQuery: "SELECT continent, COUNT(name) AS countries\n  FROM world\n  GROUP BY continent",
            expectedResultPattern: "count",
            targetLink: "https://sqlzoo.net/wiki/SUM_and_COUNT"
          },
          {
            id: "zoo-tutorial-6",
            instructions: "Complete Tutorial 6 on SQLZoo: JOIN the goal and game tables to find players who scored in the Euro 2012 final.",
            defaultQuery: "SELECT player FROM goal\n  JOIN game ON goal.matchid = game.id\n  WHERE game.id = 1012",
            expectedResultPattern: "join",
            targetLink: "https://sqlzoo.net/wiki/The_JOIN_operation"
          }
        ]
      }
    ]
  },
  // ─────────────────────────────────────────────
  // ORIGINAL SECTIONS — SQLZoo Hands-On Tutorials
  // ─────────────────────────────────────────────
  {
    sectionId: "sql-basics",
    sectionTitle: "1. SQL Querying Basics",
    lessons: [
      {
        id: "select-basics",
        title: "0. SELECT Basics",
        description: "Learn to retrieve data from a table using SELECT, WHERE, IN, and BETWEEN — the building blocks of every SQL query.",
        content: `## What is SQL?

**SQL** (Structured Query Language) is the standard language used to communicate with relational databases. You use it to read data, insert records, update values, and delete rows.

---

## The \`world\` Table

We'll work with a table called \`world\`, which contains one row per country.

| Column | Type | Description |
|--------|------|-------------|
| name | VARCHAR | Country name |
| continent | VARCHAR | Which continent it belongs to |
| area | INT | Land area in square kilometres |
| population | INT | Number of people |
| gdp | BIGINT | Gross Domestic Product (USD) |

---

## SELECT — Choosing Columns

A basic query reads like plain English:

\`\`\`sql
SELECT name FROM world
  WHERE population = 64105700
\`\`\`

- **SELECT** — which columns to show
- **FROM** — which table to look in
- **WHERE** — a filter condition (only show matching rows)

---

## IN — Matching a List

Use \`IN\` when you want to check if a value is one of several options:

\`\`\`sql
SELECT name, population FROM world
  WHERE name IN ('France', 'Germany', 'Italy')
\`\`\`

This returns all rows where \`name\` is exactly France, Germany, or Italy.

---

## BETWEEN — Range Checking

Use \`BETWEEN\` to filter within a numeric range (inclusive on both ends):

\`\`\`sql
SELECT name, area FROM world
  WHERE area BETWEEN 200000 AND 250000
\`\`\`

This returns countries whose area is at least 200,000 and at most 250,000 sq km.`,
        assignments: [
          {
            id: "population-germany",
            instructions: "The example shows France's population. Change 'France' to 'Germany' in the WHERE clause to show Germany's population instead.",
            defaultQuery: "SELECT population FROM world\n  WHERE name = 'France'",
            expectedResultPattern: "germany",
            targetLink: "https://sqlzoo.net/wiki/SELECT_basics"
          },
          {
            id: "scandinavia-in",
            instructions: "Use the IN operator to show the name and population for Sweden, Norway, and Denmark only.",
            defaultQuery: "SELECT name, population FROM world\n  WHERE name IN ('Brazil', 'Russia', 'India', 'China')",
            expectedResultPattern: "sweden",
            targetLink: "https://sqlzoo.net/wiki/SELECT_basics"
          },
          {
            id: "between-sizes",
            instructions: "Show the name and area for countries whose area is between 200,000 and 250,000 sq km (use BETWEEN).",
            defaultQuery: "SELECT name, area FROM world\n  WHERE area BETWEEN 250000 AND 300000",
            expectedResultPattern: "between",
            targetLink: "https://sqlzoo.net/wiki/SELECT_basics"
          }
        ]
      },
      {
        id: "select-names",
        title: "1. SELECT Names & Wildcards",
        description: "Use the LIKE operator with wildcard characters to search for patterns inside text columns.",
        content: `## Pattern Matching with LIKE

When you don't know the exact value, use \`LIKE\` to search by pattern.

---

## Wildcard Characters

| Symbol | Meaning |
|--------|---------|
| \`%\` | Matches **any sequence** of characters (including none) |
| \`_\` | Matches **exactly one** character |

---

## Examples

**Starts with 'F':**
\`\`\`sql
SELECT name FROM world
  WHERE name LIKE 'F%'
\`\`\`

**Ends with 'land':**
\`\`\`sql
SELECT name FROM world
  WHERE name LIKE '%land'
\`\`\`

**Contains the letter 'x' anywhere:**
\`\`\`sql
SELECT name FROM world
  WHERE name LIKE '%x%'
\`\`\`

**Exactly six letters:**
\`\`\`sql
SELECT name FROM world
  WHERE name LIKE '______'
\`\`\`
(six underscore characters)

---

## Important Rules

- Always wrap your pattern in **single quotes**: \`'F%'\`
- LIKE is **case-insensitive** in most databases
- \`%\` at the start means "anything before this"
- \`%\` at the end means "anything after this"`,
        assignments: [
          {
            id: "starts-with-y",
            instructions: "Find all country names that start with the letter 'Y'.",
            defaultQuery: "SELECT name FROM world\n  WHERE name LIKE 'F%'",
            expectedResultPattern: "y%",
            targetLink: "https://sqlzoo.net/wiki/SELECT_names"
          },
          {
            id: "ends-with-land",
            instructions: "Find all countries whose name ends with the word 'land'.",
            defaultQuery: "SELECT name FROM world\n  WHERE name LIKE '%g%'",
            expectedResultPattern: "%land",
            targetLink: "https://sqlzoo.net/wiki/SELECT_names"
          },
          {
            id: "contains-x",
            instructions: "Find all countries that have the letter 'x' anywhere in their name.",
            defaultQuery: "SELECT name FROM world\n  WHERE name LIKE '%a%'",
            expectedResultPattern: "%x%",
            targetLink: "https://sqlzoo.net/wiki/SELECT_names"
          }
        ]
      }
    ]
  },
  {
    sectionId: "sql-tables",
    sectionTitle: "2. Table Filters & Logic",
    lessons: [
      {
        id: "select-world",
        title: "2. SELECT from World",
        description: "Perform calculations, rounding, and use compound logic (AND/OR/NOT) on the World countries table.",
        content: `## Querying and Calculating

You can do **math inside a SELECT query** — calculating derived values on the fly without changing the database.

---

## Arithmetic in SELECT

**GDP per Capita** (GDP divided by population):
\`\`\`sql
SELECT name, gdp/population AS per_capita
  FROM world
\`\`\`

Use \`AS\` to give your calculated column a readable name.

---

## The ROUND Function

\`ROUND(value, decimals)\` rounds a number to a set number of decimal places.

| Example | Result |
|---------|--------|
| \`ROUND(7253.86, 0)\` | 7254 |
| \`ROUND(7253.86, -3)\` | 7000 |

**Tip:** A **negative** decimal value rounds to the left of the decimal point (thousands, millions, etc.).

---

## Comparison Operators

| Operator | Meaning |
|----------|---------|
| \`=\` | Equal to |
| \`<>\` or \`!=\` | Not equal to |
| \`>\` | Greater than |
| \`<\` | Less than |
| \`>=\` | Greater than or equal |
| \`<=\` | Less than or equal |

---

## Combining Conditions: AND / OR / NOT

\`\`\`sql
-- AND: both conditions must be true
SELECT name FROM world
  WHERE continent = 'Europe' AND population > 50000000

-- OR: at least one condition must be true
SELECT name FROM world
  WHERE area > 3000000 OR population > 250000000

-- NOT: exclude a condition
SELECT name FROM world
  WHERE NOT continent = 'Europe'
\`\`\``,
        assignments: [
          {
            id: "pop-200m",
            instructions: "Show the name of countries that have a population of at least 200 million (200,000,000).",
            defaultQuery: "SELECT name FROM world\n  WHERE population >= 50000000",
            expectedResultPattern: "200000000",
            targetLink: "https://sqlzoo.net/wiki/SELECT_from_WORLD_Tutorial"
          },
          {
            id: "gdp-capita",
            instructions: "For countries with at least 200 million people, show the name and the GDP per capita (gdp/population).",
            defaultQuery: "SELECT name, gdp/population FROM world\n  WHERE population >= 50000000",
            expectedResultPattern: "gdp/population",
            targetLink: "https://sqlzoo.net/wiki/SELECT_from_WORLD_Tutorial"
          },
          {
            id: "exclusive-or",
            instructions: "Show countries that are big by area (> 3 million sq km) OR big by population (> 250 million) — but NOT both. Show name, population, and area. Hint: use XOR or combine AND/OR/NOT.",
            defaultQuery: "SELECT name, population, area FROM world\n  WHERE area > 3000000 OR population > 250000000",
            expectedResultPattern: "xor",
            targetLink: "https://sqlzoo.net/wiki/SELECT_from_WORLD_Tutorial"
          }
        ]
      },
      {
        id: "select-nobel",
        title: "3. SELECT from Nobel",
        description: "Query the Nobel Prize winners table to practice complex AND/OR logic and the IN operator with real historical data.",
        content: `## The Nobel Prize Table

Every Nobel Prize ever awarded is stored in this table. It has three columns:

| Column | Type | Description |
|--------|------|-------------|
| yr | INT | Year the prize was awarded |
| subject | VARCHAR | Category (Chemistry, Physics, Literature, Peace, Medicine, Economics) |
| winner | VARCHAR | Full name of the winner |

---

## Example Queries

**All Chemistry prizes:**
\`\`\`sql
SELECT yr, winner FROM nobel
  WHERE subject = 'Chemistry'
\`\`\`

**Physics winners in 2000 or later:**
\`\`\`sql
SELECT winner FROM nobel
  WHERE subject = 'Physics' AND yr >= 2000
\`\`\`

**Multiple specific winners:**
\`\`\`sql
SELECT * FROM nobel
  WHERE winner IN ('Albert Einstein', 'Marie Curie')
\`\`\`

---

## Quoting Strings

Always wrap text values in **single quotes**:
- Correct: \`WHERE subject = 'Physics'\`
- Wrong: \`WHERE subject = Physics\` (will error)

---

## Using NOT

To exclude specific values:
\`\`\`sql
SELECT * FROM nobel
  WHERE subject != 'Peace'
\`\`\`

Or equivalently:
\`\`\`sql
SELECT * FROM nobel
  WHERE NOT subject = 'Peace'
\`\`\``,
        assignments: [
          {
            id: "nobel-1950",
            instructions: "Change the query to show all Nobel Prize winners from the year 1950.",
            defaultQuery: "SELECT yr, subject, winner FROM nobel\n  WHERE yr = 1960",
            expectedResultPattern: "1950",
            targetLink: "https://sqlzoo.net/wiki/SELECT_from_Nobel_Tutorial"
          },
          {
            id: "nobel-literature-1962",
            instructions: "Show the winner of the 1962 Nobel Prize for Literature.",
            defaultQuery: "SELECT winner FROM nobel\n  WHERE yr = 1960 AND subject = 'Physics'",
            expectedResultPattern: "literature",
            targetLink: "https://sqlzoo.net/wiki/SELECT_from_Nobel_Tutorial"
          },
          {
            id: "presidents",
            instructions: "Show all Nobel Prize details for US Presidents: Theodore Roosevelt, Woodrow Wilson, Jimmy Carter, Barack Obama. Use the IN operator.",
            defaultQuery: "SELECT * FROM nobel\n  WHERE winner IN ('Albert Einstein')",
            expectedResultPattern: "presidents",
            targetLink: "https://sqlzoo.net/wiki/SELECT_from_Nobel_Tutorial"
          }
        ]
      }
    ]
  },
  {
    sectionId: "sql-joins",
    sectionTitle: "3. Advanced Joins & Aggregates",
    lessons: [
      {
        id: "select-nested",
        title: "4. SELECT within SELECT (Subqueries)",
        description: "Write queries inside other queries to compare rows dynamically without hardcoding values.",
        content: `## What is a Subquery?

A **subquery** is a complete SELECT statement placed inside another query — usually in the WHERE clause. It runs first, and its result is used by the outer query.

---

## Why Use Subqueries?

Without subqueries, you'd have to run two separate queries:

1. Find Russia's population: 144,000,000
2. Then find countries bigger than 144,000,000

With a subquery, you do it in one step:

\`\`\`sql
SELECT name FROM world
  WHERE population > (
    SELECT population FROM world WHERE name = 'Russia'
  )
\`\`\`

The inner query \`(SELECT population FROM world WHERE name = 'Russia')\` returns a single number. The outer query uses that number as its threshold.

---

## Comparing with ALL

Use \`ALL\` to compare against every value returned by a subquery:

\`\`\`sql
SELECT name FROM world
  WHERE gdp > ALL (
    SELECT gdp FROM world
      WHERE continent = 'Europe' AND gdp IS NOT NULL
  )
\`\`\`

This finds countries whose GDP is larger than every single European country's GDP.

---

## Nested Subqueries in SELECT

You can also put a subquery inside the SELECT clause itself:

\`\`\`sql
SELECT name,
  (SELECT COUNT(*) FROM nobel WHERE winner = name) AS prizes_won
FROM world
\`\`\`

---

## Key Rules

- The subquery must be wrapped in **parentheses** \`( )\`
- A subquery that returns **one value** can be used with \`=\`, \`>\`, \`<\`, etc.
- A subquery that returns **multiple values** must use \`IN\`, \`ALL\`, or \`ANY\``,
        assignments: [
          {
            id: "bigger-than-russia",
            instructions: "List the names of countries with a population larger than Russia's. Use a subquery in the WHERE clause.",
            defaultQuery: "SELECT name FROM world\n  WHERE population > (SELECT population FROM world WHERE name = 'France')",
            expectedResultPattern: "russia",
            targetLink: "https://sqlzoo.net/wiki/SELECT_within_SELECT_Tutorial"
          },
          {
            id: "richer-than-uk",
            instructions: "Show the names of European countries whose GDP per capita (gdp/population) is greater than the UK's GDP per capita.",
            defaultQuery: "SELECT name FROM world\n  WHERE continent = 'Europe'",
            expectedResultPattern: "uk",
            targetLink: "https://sqlzoo.net/wiki/SELECT_within_SELECT_Tutorial"
          }
        ]
      },
      {
        id: "sum-count",
        title: "5. SUM and COUNT (Aggregation)",
        description: "Summarize data across many rows using aggregate functions: SUM, COUNT, AVG, MAX, MIN, GROUP BY, and HAVING.",
        content: `## Aggregate Functions

Instead of returning individual rows, aggregate functions **summarize** multiple rows into a single result.

---

## The Five Core Aggregates

| Function | What It Does |
|----------|--------------|
| \`COUNT(col)\` | Counts non-NULL values in the column |
| \`SUM(col)\` | Adds up all values |
| \`AVG(col)\` | Calculates the average |
| \`MIN(col)\` | Returns the smallest value |
| \`MAX(col)\` | Returns the largest value |

---

## COUNT Examples

\`\`\`sql
-- Count all rows in the table
SELECT COUNT(*) FROM world

-- Count only rows where gdp is not NULL
SELECT COUNT(gdp) FROM world
\`\`\`

## SUM Example

\`\`\`sql
-- Total world population
SELECT SUM(population) FROM world
\`\`\`

---

## GROUP BY — Grouping Rows

\`GROUP BY\` groups rows that share the same value in a column, then runs the aggregate on each group separately:

\`\`\`sql
-- Count countries per continent
SELECT continent, COUNT(name) AS num_countries
  FROM world
  GROUP BY continent
\`\`\`

---

## HAVING — Filtering Groups

\`WHERE\` filters rows **before** grouping. \`HAVING\` filters groups **after** aggregation:

\`\`\`sql
-- Only continents with more than 5 countries
SELECT continent, COUNT(name)
  FROM world
  GROUP BY continent
  HAVING COUNT(name) > 5
\`\`\`

---

## Execution Order (Mental Model)

1. \`FROM\` — choose the table
2. \`WHERE\` — filter rows
3. \`GROUP BY\` — group the remaining rows
4. \`HAVING\` — filter the groups
5. \`SELECT\` — calculate and show results`,
        assignments: [
          {
            id: "world-pop",
            instructions: "Show the total world population by using SUM(population) on the world table.",
            defaultQuery: "SELECT population FROM world",
            expectedResultPattern: "sum",
            targetLink: "https://sqlzoo.net/wiki/SUM_and_COUNT"
          },
          {
            id: "continents-group",
            instructions: "List each continent and how many countries it contains. Use GROUP BY continent.",
            defaultQuery: "SELECT continent FROM world",
            expectedResultPattern: "group",
            targetLink: "https://sqlzoo.net/wiki/SUM_and_COUNT"
          }
        ]
      },
      {
        id: "joins-basics",
        title: "6. The JOIN Operation",
        description: "Combine data from two tables using JOIN and ON to link related rows by their shared keys.",
        content: `## Why JOIN?

Real databases split data across many tables to avoid repetition. To answer questions that span tables, you \`JOIN\` them together.

---

## The Football Database

We'll use two tables about Euro 2012 matches:

**\`game\` table — one row per match:**

| Column | Description |
|--------|-------------|
| id | Unique match ID |
| mdate | Match date |
| stadium | Venue name |
| team1 | Home team code |
| team2 | Away team code |

**\`goal\` table — one row per goal scored:**

| Column | Description |
|--------|-------------|
| matchid | Links to game.id |
| teamid | Team that scored |
| player | Player who scored |
| gtime | Minute the goal was scored |

---

## Basic JOIN Syntax

\`\`\`sql
SELECT player, teamid, mdate
  FROM game
  JOIN goal ON (game.id = goal.matchid)
\`\`\`

- \`JOIN goal\` — bring in the goal table
- \`ON (game.id = goal.matchid)\` — the link between rows (primary key = foreign key)

---

## Reading the JOIN

Think of it like this: "For each row in \`goal\`, find the matching row in \`game\` where \`game.id = goal.matchid\`, then glue them together."

---

## Filtering Joined Data

\`\`\`sql
-- Goals scored by Germany
SELECT player, teamid, mdate
  FROM game
  JOIN goal ON (game.id = goal.matchid)
  WHERE teamid = 'GER'
\`\`\`

---

## Aliases to Avoid Ambiguity

If both tables have a column with the same name, prefix it with the table name:

\`\`\`sql
SELECT game.id, game.mdate, goal.player
  FROM game JOIN goal ON (game.id = goal.matchid)
\`\`\``,
        assignments: [
          {
            id: "goals-match",
            instructions: "Join the game and goal tables. Show the player names and team IDs (teamid) for all goals scored by Germany ('GER'). The join condition is: game.id = goal.matchid.",
            defaultQuery: "SELECT player, teamid FROM game\n  JOIN goal ON (game.id = goal.matchid)\n  WHERE teamid = 'POL'",
            expectedResultPattern: "join",
            targetLink: "https://sqlzoo.net/wiki/The_JOIN_operation"
          },
          {
            id: "stadium-goals",
            instructions: "Show the player, teamid, stadium, and mdate for every goal scored by Germany ('GER').",
            defaultQuery: "SELECT player, teamid FROM game\n  JOIN goal ON (id=matchid)",
            expectedResultPattern: "stadium",
            targetLink: "https://sqlzoo.net/wiki/The_JOIN_operation"
          }
        ]
      },
      {
        id: "more-joins",
        title: "7. More JOIN Operations",
        description: "Navigate many-to-many relationships in a movie database using junction tables and multiple JOINs.",
        content: `## The Movie Database

Three tables work together to model movies and their actors:

**\`movie\`** — one row per film:

| Column | Description |
|--------|-------------|
| id | Unique movie ID |
| title | Film title |
| yr | Release year |
| director | Director's actor ID |
| budget | Production budget (USD) |
| gross | Box office gross (USD) |

**\`actor\`** — one row per person:

| Column | Description |
|--------|-------------|
| id | Unique actor ID |
| name | Actor's full name |

**\`casting\`** — the junction table linking movies to actors:

| Column | Description |
|--------|-------------|
| movieid | Links to movie.id |
| actorid | Links to actor.id |
| ord | Billing order (1 = lead star) |

---

## Why a Junction Table?

One movie has many actors. One actor appears in many movies. This **many-to-many** relationship is modelled with a third table (\`casting\`) that holds pairs.

---

## Joining All Three Tables

\`\`\`sql
-- List all actors in the movie 'Alien'
SELECT actor.name
  FROM actor
  JOIN casting ON (actor.id = casting.actorid)
  JOIN movie ON (casting.movieid = movie.id)
  WHERE movie.title = 'Alien'
\`\`\`

---

## Filtering by Billing Order

\`ord = 1\` means the lead star:

\`\`\`sql
-- Find lead actors for movies released in 2000
SELECT movie.title, actor.name
  FROM movie
  JOIN casting ON (movie.id = casting.movieid)
  JOIN actor ON (casting.actorid = actor.id)
  WHERE casting.ord = 1 AND movie.yr = 2000
\`\`\``,
        assignments: [
          {
            id: "films-1962",
            instructions: "List the id and title of all movies released in the year 1962.",
            defaultQuery: "SELECT id, title FROM movie\n  WHERE yr = 1970",
            expectedResultPattern: "1962",
            targetLink: "https://sqlzoo.net/wiki/More_JOIN_operations"
          },
          {
            id: "alien-cast",
            instructions: "List all the actors in the movie 'Alien'. Join actor and casting tables, then filter by movie title.",
            defaultQuery: "SELECT name FROM actor\n  JOIN casting ON (actor.id=actorid)\n  WHERE movieid = 11768",
            expectedResultPattern: "alien",
            targetLink: "https://sqlzoo.net/wiki/More_JOIN_operations"
          }
        ]
      },
      {
        id: "using-null",
        title: "8. Using NULL",
        description: "Handle missing data in SQL using IS NULL, IS NOT NULL, LEFT JOIN, and RIGHT JOIN.",
        content: `## What is NULL?

\`NULL\` means **missing** or **unknown**. It is not zero, not an empty string — it is the complete absence of a value.

---

## Why NULL Matters

Standard comparison operators (\`=\`, \`<>\`) do not work with NULL:

\`\`\`sql
-- This does NOT find NULLs:
WHERE dept = NULL      -- Wrong!

-- This DOES work:
WHERE dept IS NULL     -- Correct
WHERE dept IS NOT NULL -- Also correct
\`\`\`

---

## The Teacher / Department Example

**\`teacher\` table:**

| id | name | dept |
|----|------|------|
| 1 | Cutkin | NULL |
| 2 | Spiky | 101 |
| 3 | Deap | 102 |

**\`dept\` table:**

| id | name |
|----|------|
| 101 | Computing |
| 102 | Design |
| 103 | Engineering |

---

## INNER JOIN vs LEFT JOIN

\`INNER JOIN\` only returns rows that match in **both** tables. Cutkin (no dept) would be lost.

\`LEFT JOIN\` returns **all rows from the left table**, even if there's no match on the right:

\`\`\`sql
SELECT teacher.name, dept.name
  FROM teacher
  LEFT JOIN dept ON (teacher.dept = dept.id)
\`\`\`

Result:

| teacher.name | dept.name |
|-------------|-----------|
| Cutkin | NULL |
| Spiky | Computing |
| Deap | Design |

---

## COALESCE — Replacing NULL

\`COALESCE(val1, val2)\` returns the first non-NULL value:

\`\`\`sql
SELECT COALESCE(dept, 'No Department') AS department
  FROM teacher
\`\`\``,
        assignments: [
          {
            id: "null-dept",
            instructions: "List the names of teachers who have no department assigned (dept IS NULL).",
            defaultQuery: "SELECT name FROM teacher",
            expectedResultPattern: "null",
            targetLink: "https://sqlzoo.net/wiki/Using_Null"
          },
          {
            id: "left-join-all",
            instructions: "Use LEFT JOIN to show every teacher's name alongside their department name. Include teachers with no department (they should show NULL for dept name).",
            defaultQuery: "SELECT teacher.name, dept.name\n  FROM teacher\n  INNER JOIN dept ON (teacher.dept=dept.id)",
            expectedResultPattern: "left",
            targetLink: "https://sqlzoo.net/wiki/Using_Null"
          }
        ]
      },
      {
        id: "self-join",
        title: "9. Self Join",
        description: "Join a table to itself to explore network graphs, bus routes, and tree-structured hierarchical data.",
        content: `## What is a Self Join?

A **self join** connects a table to itself. This sounds strange, but it's essential for querying data that describes relationships within a single dataset — like a bus network where stops are connected to each other.

---

## The Edinburgh Bus Database

**\`stops\` table** — locations in Edinburgh:

| id | name |
|----|------|
| 10 | Craiglockhart |
| 20 | Tollcross |
| 30 | Haymarket |

**\`route\` table** — which stops appear on which routes:

| num | company | pos | stop |
|-----|---------|-----|------|
| 4 | LRT | 1 | 10 |
| 4 | LRT | 2 | 20 |

---

## Self Join Syntax

Alias the same table twice with different names:

\`\`\`sql
SELECT a.company, a.num, a.stop AS stop_from, b.stop AS stop_to
  FROM route a
  JOIN route b ON (a.company = b.company AND a.num = b.num)
\`\`\`

---

## Finding Connected Stops

"What stops can I reach from Craiglockhart on the same route?"

\`\`\`sql
SELECT b.stop
  FROM route a
  JOIN route b ON (a.company = b.company AND a.num = b.num)
  WHERE a.stop = 53
\`\`\`

---

## Joining with Stop Names

To show stop **names** instead of IDs, join the stops table twice:

\`\`\`sql
SELECT stopa.name AS from_stop, stopb.name AS to_stop
  FROM route a
  JOIN route b ON (a.company = b.company AND a.num = b.num)
  JOIN stops stopa ON (a.stop = stopa.id)
  JOIN stops stopb ON (b.stop = stopb.id)
  WHERE stopa.name = 'Craiglockhart'
\`\`\`

---

## Use Cases for Self Joins

- **Bus / Rail networks** — which stations connect?
- **Org charts** — who reports to whom?
- **Family trees** — parent-child relationships
- **Social graphs** — who knows who?`,
        assignments: [
          {
            id: "bus-stops-count",
            instructions: "Count the total number of stops listed in the stops table using COUNT(*).",
            defaultQuery: "SELECT COUNT(*) FROM route",
            expectedResultPattern: "stops_count",
            targetLink: "https://sqlzoo.net/wiki/Self_join"
          },
          {
            id: "bus-routes-lrt",
            instructions: "Find all stop names on route number 4 operated by LRT company. Join stops to route on stops.id = route.stop, then filter by num='4' AND company='LRT'.",
            defaultQuery: "SELECT stops.name FROM stops\n  JOIN route ON stops.id=route.stop\n  WHERE route.num='4'",
            expectedResultPattern: "bus_route_4",
            targetLink: "https://sqlzoo.net/wiki/Self_join"
          }
        ]
      }
    ]
  }
];

export const getMockSqlData = (table: string, columns: string[], queryText: string) => {
  const normalizedQuery = queryText.toLowerCase().replace(/\s+/g, ' ');
  
  if (table === 'world') {
    const data = [
      { name: "France", continent: "Europe", area: 640679, population: 67000000, gdp: 2715000000000, capital: "Paris" },
      { name: "Germany", continent: "Europe", area: 357022, population: 83000000, gdp: 3845000000000, capital: "Berlin" },
      { name: "Sweden", continent: "Europe", area: 450295, population: 10000000, gdp: 538000000000, capital: "Stockholm" },
      { name: "Norway", continent: "Europe", area: 385207, population: 5400000, gdp: 362000000000, capital: "Oslo" },
      { name: "Denmark", continent: "Europe", area: 43094, population: 5800000, gdp: 352000000000, capital: "Copenhagen" },
      { name: "Brazil", continent: "Americas", area: 8515767, population: 211000000, gdp: 1847000000000, capital: "Brasilia" },
      { name: "Russia", continent: "Europe", area: 17098242, population: 144000000, gdp: 1700000000000, capital: "Moscow" },
      { name: "India", continent: "Asia", area: 3287263, population: 1380000000, gdp: 2875000000000, capital: "New Delhi" },
      { name: "China", continent: "Asia", area: 9596961, population: 1400000000, gdp: 14300000000000, capital: "Beijing" },
      { name: "Yemen", continent: "Asia", area: 527968, population: 29000000, gdp: 26000000000, capital: "Sanaa" },
      { name: "United Kingdom", continent: "Europe", area: 242495, population: 66000000, gdp: 2828000000000, capital: "London" },
      { name: "Argentina", continent: "Americas", area: 2780400, population: 45000000, gdp: 450000000000, capital: "Buenos Aires" },
      { name: "Australia", continent: "Oceania", area: 7692024, population: 25000000, gdp: 1390000000000, capital: "Canberra" },
      { name: "Canada", continent: "Americas", area: 9984670, population: 38000000, gdp: 1640000000000, capital: "Ottawa" },
      { name: "Poland", continent: "Europe", area: 312685, population: 38000000, gdp: 595000000000, capital: "Warsaw" },
      { name: "Italy", continent: "Europe", area: 301340, population: 60000000, gdp: 2000000000000, capital: "Rome" }
    ];

    if (normalizedQuery.includes("germany")) {
      return data.filter(d => d.name === "Germany").map(d => ({ name: d.name, population: d.population }));
    }
    if (normalizedQuery.includes("sweden") || normalizedQuery.includes("norway") || normalizedQuery.includes("denmark")) {
      return data.filter(d => ["Sweden", "Norway", "Denmark"].includes(d.name)).map(d => ({ name: d.name, population: d.population }));
    }
    if (normalizedQuery.includes("between 200000 and 250000")) {
      return data.filter(d => d.area >= 200000 && d.area <= 250000).map(d => ({ name: d.name, area: d.area }));
    }
    if (normalizedQuery.includes("like 'y%'")) {
      return data.filter(d => d.name.startsWith("Y")).map(d => ({ name: d.name }));
    }
    if (normalizedQuery.includes("like '%land'")) {
      return data.filter(d => d.name.endsWith("land")).map(d => ({ name: d.name }));
    }
    if (normalizedQuery.includes("like '%x%'")) {
      return data.filter(d => d.name.includes("x") || d.name.includes("X")).map(d => ({ name: d.name }));
    }
    if (normalizedQuery.includes("population >=") && normalizedQuery.includes("200000000")) {
      if (normalizedQuery.includes("gdp/population")) {
        return data.filter(d => d.population >= 200000000).map(d => ({ name: d.name, "gdp/population": Math.round(d.gdp / d.population) }));
      }
      return data.filter(d => d.population >= 200000000).map(d => ({ name: d.name }));
    }
    if (normalizedQuery.includes("gdp/population")) {
      return data.map(d => ({ name: d.name, "gdp/population": Math.round(d.gdp / d.population) }));
    }
    if (normalizedQuery.includes("sum(population)")) {
      const sum = data.reduce((acc, curr) => acc + curr.population, 0);
      return [{ "SUM(population)": sum }];
    }
    if (normalizedQuery.includes("group by continent")) {
      const grouped: any = {};
      data.forEach(d => {
        grouped[d.continent] = (grouped[d.continent] || 0) + 1;
      });
      return Object.keys(grouped).map(c => ({ continent: c, "COUNT(name)": grouped[c] }));
    }
    if (normalizedQuery.includes("russia") && normalizedQuery.includes("population >")) {
      return data.filter(d => d.population > 144000000).map(d => ({ name: d.name }));
    }
    if (normalizedQuery.includes("united kingdom") && normalizedQuery.includes("gdp/population >")) {
      const ukPerCapita = 2828000000000 / 66000000;
      return data.filter(d => d.continent === 'Europe' && (d.gdp / d.population) > ukPerCapita).map(d => ({ name: d.name }));
    }
    if (normalizedQuery.includes("xor") || (normalizedQuery.includes("area >") && normalizedQuery.includes("population >") && normalizedQuery.includes("not"))) {
      return data.filter(d => (d.area > 3000000 && d.population <= 250000000) || (d.area <= 3000000 && d.population > 250000000)).map(d => ({ name: d.name, population: d.population, area: d.area }));
    }

    return data.map(d => {
      const row: any = {};
      columns.forEach(col => {
        row[col] = (d as any)[col] !== undefined ? (d as any)[col] : null;
      });
      return row;
    });
  }

  if (table === 'nobel') {
    const data = [
      { yr: 1950, subject: "Literature", winner: "Bertrand Russell" },
      { yr: 1950, subject: "Physics", winner: "Cecil Powell" },
      { yr: 1962, subject: "Literature", winner: "John Steinbeck" },
      { yr: 1962, subject: "Medicine", winner: "Francis Crick" },
      { yr: 1960, subject: "Physics", winner: "Donald A. Glaser" },
      { yr: 2009, subject: "Peace", winner: "Barack Obama" },
      { yr: 2002, subject: "Peace", winner: "Jimmy Carter" },
      { yr: 1919, subject: "Peace", winner: "Woodrow Wilson" },
      { yr: 1906, subject: "Peace", winner: "Theodore Roosevelt" }
    ];

    if (normalizedQuery.includes("yr = 1950")) {
      return data.filter(d => d.yr === 1950);
    }
    if (normalizedQuery.includes("yr = 1962") && normalizedQuery.includes("literature")) {
      return data.filter(d => d.yr === 1962 && d.subject === "Literature").map(d => ({ winner: d.winner }));
    }
    if (normalizedQuery.includes("in (") && normalizedQuery.includes("roosevelt")) {
      return data.filter(d => ["Theodore Roosevelt", "Woodrow Wilson", "Jimmy Carter", "Barack Obama"].includes(d.winner));
    }

    return data.map(d => {
      const row: any = {};
      columns.forEach(col => {
        row[col] = (d as any)[col] !== undefined ? (d as any)[col] : null;
      });
      return row;
    });
  }

  if (table === 'game' || table === 'goal') {
    const gameData = [
      { id: 1012, mdate: "8 June 2012", stadium: "National Stadium, Warsaw", team1: "POL", team2: "GRE" },
      { id: 1015, mdate: "12 June 2012", stadium: "PGE Arena Gdansk", team1: "ESP", team2: "ITA" }
    ];
    const goalData = [
      { matchid: 1012, teamid: "GRE", player: "Dimitris Salpingidis", gtime: 51 },
      { matchid: 1012, teamid: "POL", player: "Robert Lewandowski", gtime: 17 },
      { matchid: 1015, teamid: "GER", player: "Mario Gomez", gtime: 24 }
    ];

    if (normalizedQuery.includes("id = 1012")) {
      return gameData.filter(g => g.id === 1012);
    }
    if (normalizedQuery.includes("teamid = 'ger'") || normalizedQuery.includes("teamid = 'pol'")) {
      const team = normalizedQuery.includes("'ger'") ? 'GER' : 'POL';
      return goalData.filter(g => g.teamid === team).map(g => ({ player: g.player, teamid: g.teamid }));
    }
    if (normalizedQuery.includes("join goal") && normalizedQuery.includes("stadium")) {
      return [
        { player: "Mario Gomez", teamid: "GER", stadium: "PGE Arena Gdansk", mdate: "12 June 2012" }
      ];
    }
    if (normalizedQuery.includes("join goal") && normalizedQuery.includes("ger")) {
      return goalData.filter(g => g.teamid === 'GER').map(g => ({ player: g.player, teamid: g.teamid }));
    }
    return table === 'game' ? gameData : goalData;
  }

  if (table === 'movie' || table === 'actor') {
    const movies = [
      { id: 11768, title: "Casablanca", yr: 1942 },
      { id: 12000, title: "Alien", yr: 1979 },
      { id: 13500, title: "Citizen Kane", yr: 1941 },
      { id: 14000, title: "Lawrence of Arabia", yr: 1962 }
    ];
    const actors = [
      { id: 456, name: "Glenn Close" },
      { id: 789, name: "Sigourney Weaver" },
      { id: 111, name: "Humphrey Bogart" }
    ];

    if (normalizedQuery.includes("yr = 1962")) {
      return movies.filter(m => m.yr === 1962).map(m => ({ id: m.id, title: m.title }));
    }
    if (normalizedQuery.includes("title = 'alien'") || normalizedQuery.includes("alien") && normalizedQuery.includes("join")) {
      return [{ name: "Sigourney Weaver" }, { name: "Tom Skerritt" }, { name: "John Hurt" }, { name: "Ian Holm" }];
    }
    return table === 'movie' ? movies : actors;
  }

  if (table === 'teacher' || table === 'dept') {
    const teachers = [
      { id: 1, name: "Cutkin", dept: null },
      { id: 2, name: "Spiky", dept: 101 },
      { id: 3, name: "Deap", dept: 102 }
    ];
    const depts = [
      { id: 101, name: "Computing" },
      { id: 102, name: "Design" }
    ];

    if (normalizedQuery.includes("dept is null")) {
      return teachers.filter(t => t.dept === null).map(t => ({ name: t.name }));
    }
    if (normalizedQuery.includes("left join")) {
      return [
        { "teacher.name": "Cutkin", "dept.name": null },
        { "teacher.name": "Spiky", "dept.name": "Computing" },
        { "teacher.name": "Deap", "dept.name": "Design" }
      ];
    }
    return table === 'teacher' ? teachers : depts;
  }

  if (table === 'stops' || table === 'route') {
    const stops = [
      { id: 10, name: "Craiglockhart" },
      { id: 20, name: "Tollcross" },
      { id: 30, name: "Haymarket" }
    ];
    const routes = [
      { num: "4", company: "LRT", pos: 1, stop: 10 },
      { num: "4", company: "LRT", pos: 2, stop: 20 }
    ];

    if (normalizedQuery.includes("count(*)")) {
      return [{ "COUNT(*)": 3 }];
    }
    if (normalizedQuery.includes("num = '4'") || normalizedQuery.includes("num='4'")) {
      return [{ name: "Craiglockhart" }, { name: "Tollcross" }];
    }
    return table === 'stops' ? stops : routes;
  }

  return [
    { "Status": "Simulated", "Message": "Query compiled. Click the SQLZoo link to run this live against the real database." }
  ];
};
