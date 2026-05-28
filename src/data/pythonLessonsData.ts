// Python Basics Curriculum — The Debug Society
// Source: Official Python 3 Tutorial (python.org)

export interface PythonLesson {
  id: string;
  title: string;
  url: string;
  content: string;
}

export interface PythonSection {
  sectionId: string;
  sectionTitle: string;
  lessons: PythonLesson[];
}

export const pythonLessonsData: PythonSection[] = [
  {
    sectionId: "02_Using_Python_Interpreter",
    sectionTitle: "2. Using the Python Interpreter",
    lessons: [
      {
        id: "python-invoking-interpreter",
        title: "Invoking the Interpreter",
        url: "",
        content: `## Overview

> To write and run Python code, we must know how to invoke its core engine — the interpreter. We will learn how argument passing, interactive mode, and script execution work.

**You will learn:**

- How to start and exit the interactive interpreter prompt
- Passing arguments to scripts via the command line
- Customizing input/output file handles and commands

---

## Content

### Invoking the Interpreter

The Python interpreter is usually invoked by typing \`python3\` (or \`python\` on Windows) in your system terminal:

\`\`\`bash
python3
\`\`\`

If you want to run a script file directly instead of opening the shell, pass the filename as an argument:

\`\`\`bash
python3 script.py
\`\`\`

---

### Argument Passing

When running a script, Python captures any arguments passed to the script in the \`sys.argv\` list. 

- **\`sys.argv[0]\`**: Contains the name of the script itself.
- **\`sys.argv[1]\`**: Contains the first command-line argument, and so on.

To use this, import the standard \`sys\` module:

\`\`\`python
import sys
print("Script name:", sys.argv[0])
if len(sys.argv) > 1:
    print("First argument:", sys.argv[1])
\`\`\`

---

### Interactive Mode

When commands are read from a tty (terminal), the interpreter is in **interactive mode**. 
- **Primary Prompt (\`>>>\`\`)**: Prompts you for the next command.
- **Secondary Prompt (\`...\`\`)**: Prompts you for continued lines in multi-line blocks (like loops or functions).

\`\`\`python
>>> tax = 12.5 / 100
>>> price = 100.50
>>> price * tax
12.5625
\`\`\`

---

## Assignment

1. Open your terminal and invoke Python interactive mode.
2. Calculate \`12345 * 67890\` in the interpreter.
3. Exit the interpreter using \`exit()\` or \`Ctrl-D\`.

---

## Knowledge Check

- What command-line prompt symbol indicates Python is ready for interactive input?
- How are command-line arguments exposed within a Python script?
- What happens if you run \`python3 -c "print('hello')"\`? (Tip: \`-c\` executes a command directly!)`
      },
      {
        id: "python-interpreter-environment",
        title: "Interpreter & Its Environment",
        url: "",
        content: `## Overview

> Python operates inside an environment that supports global character sets and robust input/output behaviors. We will look at character encodings and terminal standards.

**You will learn:**

- Declaring source code encoding (UTF-8 defaults)
- Configuring custom script files for startup commands
- Managing system environment variables

---

## Content

### Source Code Encoding

By default, Python source files are treated as encoded in **UTF-8**. This allows you to use international character symbols, mathematical symbols, and emoji in string literals and comments.

If you ever need to use a different encoding (like Windows-1252 or Latin-1), you must declare it at the very first line of your Python file using a special comment:

\`\`\`python
# -*- coding: encoding_name -*-
\`\`\`

Example for Western European encoding:
\`\`\`python
# -*- coding: cp1252 -*-
\`\`\`

---

### The Startup File

If you want certain commands to run every time you launch the interactive interpreter (like importing \`math\` or defining a helper function), you can configure a **startup file** by setting the \`PYTHONSTARTUP\` environment variable pointing to your script file.

---

## Assignment

1. Create a script called \`test_enc.py\`.
2. Write a string variable containing standard characters and non-ascii symbols (like currency symbols: \`"€"\` or mathematical symbols: \`"π"\`).
3. Print the string and verify Python handles it perfectly without errors.

---

## Knowledge Check

- What is the default character encoding of Python 3 files?
- How do you override the default source file encoding?
- What environment variable lets you load utility scripts upon starting the interpreter?`
      }
    ]
  },
  {
    sectionId: "03_Informal_Introduction",
    sectionTitle: "3. An Informal Introduction to Python",
    lessons: [
      {
        id: "python-calculator-numbers",
        title: "Using Python as a Calculator: Numbers",
        url: "",
        content: `## Overview

> The simplest way to introduce Python programming is to use it as a highly capable calculator. We will explore numerical types, assignments, and operations.

**You will learn:**

- Integers (\`int\`), decimals (\`float\`), and variable assignments
- Standard arithmetic operators and operator precedence
- Specialized floor division (\`//\`) and modulo remainder (\`%\`) checks

---

## Content

### Mathematical Calculations

Python supports basic operators effortlessly:

\`\`\`python
>>> 2 + 2
4
>>> 50 - 5*6
20
>>> (50 - 5*6) / 4
5.0
\`\`\`

*Notice that standard division (\`/\`) always returns a decimal float!*

---

### Floor Division, Modulo, and Exponents

- **Floor Division (\`//\`\`)**: Discards any fractional decimal part and rounds down to the nearest integer.
  \`\`\`python
  >>> 17 // 3
  5
  \`\`\`
- **Modulo (\`%\`\`)**: Yields the integer remainder.
  \`\`\`python
  >>> 17 % 3
  2
  \`\`\`
- **Exponents (\`**\`\`)**: Calculates powers.
  \`\`\`python
  >>> 5 ** 2
  25
  \`\`\`

---

### Variable Assignment

Use the single equal sign (\`=\`) to bind a value to a variable name:

\`\`\`python
>>> width = 20
>>> height = 5 * 9
>>> width * height
900
\`\`\`

If a variable is not defined (assigned a value), trying to read it throws a \`NameError\`.

---

## Assignment

1. Write equations to convert 95 degrees Fahrenheit to Celsius. Formula: \`C = (F - 32) * 5/9\`.
2. Calculate the floor division of 22 by 7, and find the remainder.

---

## Knowledge Check

- What operator calculates the remainder of a division?
- What error is thrown when you access a variable before assigning a value to it?
- Does \`2 ** 3 * 2\` evaluate to 16 or 12? (Tip: Exponents bind tighter than multiplication!)`
      },
      {
        id: "python-calculator-text",
        title: "Using Python as a Calculator: Text (Strings)",
        url: "",
        content: `## Overview

> Python strings are used to manipulate text. We will explore string syntax, indexing offsets, substring slicing, and immutability.

**You will learn:**

- String literals and escaping characters
- Slicing and indexing mechanics
- String immutability rules

---

## Content

### String Literals

Text can be enclosed in single quotes (\`'\`) or double quotes (\`"\`):

\`\`\`python
>>> 'spam eggs'
'spam eggs'
>>> "doesn't"
"doesn't"
>>> 'doesn\\\'t' # escaping quotes
"doesn't"
\`\`\`

If you want a multi-line string, use triple quotes (\`"""..."""\`):

\`\`\`python
print("""\\
Usage: thingy [OPTIONS]
     -h                        Display this usage message
     -H hostname               Hostname to connect to
""")
\`\`\`

---

### Indexing and Slicing

Strings can be indexed (subscripted), with the first character at index 0.

\`\`\`python
>>> word = 'Python'
>>> word[0]  # character in position 0
'P'
>>> word[-1] # last character
'n'
\`\`\`

Slicing allows you to get a substring by specifying a range \`[start:end]\`:

\`\`\`python
>>> word[0:2]  # characters from position 0 (included) to 2 (excluded)
'Py'
>>> word[2:5]  # characters from position 2 (included) to 5 (excluded)
'tho'
\`\`\`

---

### Immutability

Python strings are **immutable** — they cannot be changed after creation. Assigning to an index throws a TypeError:

\`\`\`python
>>> word[0] = 'J'
# TypeError: 'str' object does not support item assignment
\`\`\`
If you need a new string, you must build it:
\`\`\`python
>>> 'J' + word[1:]
'Jython'
\`\`\`

---

## Assignment

1. Create a variable with the string \`"Supercalifragilistic"\`.
2. Print the first 5 characters.
3. Print the last 5 characters using negative indices.

---

## Knowledge Check

- How do you declare a multi-line string in Python?
- What index represents the last character of a string?
- What happens if you try to change the third character of a string directly?`
      },
      {
        id: "python-calculator-lists",
        title: "Using Python as a Calculator: Lists",
        url: "",
        content: `## Overview

> Python lists are compound data structures used to group values together. We will explore list elements, indexing, slicing, mutability, and nesting.

**You will learn:**

- Declaring lists and modifying elements in place
- Appending items and concatenating lists
- Nesting lists to create matrices

---

## Content

### Lists are Mutable

Unlike strings, which are immutable, lists are a **mutable** type. You can change their elements:

\`\`\`python
>>> squares = [1, 4, 9, 16, 25]
>>> squares[0] = 0
>>> squares
[0, 4, 9, 16, 25]
\`\`\`

---

### Operations & Methods

- **Concatenation**: Combine lists using \`+\`.
  \`\`\`python
  >>> squares + [36, 49]
  [0, 4, 9, 16, 25, 36, 49]
  \`\`\`

- **Appending**: Add new items to the end with \`.append()\`.
  \`\`\`python
  >>> cubes = [1, 8, 27]
  >>> cubes.append(64)
  >>> cubes
  [1, 8, 27, 64]
  \`\`\`

---

### Nesting Lists

You can create lists containing other lists (creating matrices or grids):

\`\`\`python
>>> a = ['a', 'b', 'c']
>>> n = [1, 2, 3]
>>> x = [a, n]
>>> x
[['a', 'b', 'c'], [1, 2, 3]]
>>> x[0][1]
'b'
\`\`\`

---

## Assignment

1. Create a list called \`inventory\` with values \`["bolts", "nuts"]\`.
2. Append \`"screws"\` to it.
3. Create a second list \`quantities = [100, 200, 50]\`.
4. Create a nested list containing both \`inventory\` and \`quantities\`, then print the first element of \`quantities\` from the nested structure.

---

## Knowledge Check

- What is the difference between strings and lists regarding mutability?
- What list method adds an item to the very end of the list?
- If \`matrix = [[1, 2], [3, 4]]\`, what does \`matrix[1][0]\` evaluate to?`
      },
      {
        id: "python-calculator-first-steps",
        title: "First Steps Towards Programming",
        url: "",
        content: `## Overview

> Now we transition from simple calculators to full programmatic loops. We will construct a Fibonacci sequence and examine variable bindings and printing structures.

**You will learn:**

- Multiple variable assignments in a single line
- Standard \`while\` loop loops
- Customizing print outputs using \`end\` keyword parameters

---

## Content

### The Fibonacci Sequence

Let's write a script to compute the Fibonacci series:

\`\`\`python
# Fibonacci series: the sum of two elements defines the next
a, b = 0, 1
while a < 10:
    print(a)
    a, b = b, a + b
\`\`\`

### Key Features Explained:

1. **Multiple Assignment**: \`a, b = 0, 1\` sets \`a\` to \`0\` and \`b\` to \`1\` simultaneously.
2. **Right-Hand Evaluation**: In \`a, b = b, a + b\`, the right-hand expressions are evaluated *before* any assignments happen! This avoids needing a temp variable.
3. **Loop Indentation**: All lines inside the \`while\` block must have equal indentation.

---

### Customizing Print Endings

By default, the \`print()\` function appends a newline at the end. You can override this using the \`end\` parameter:

\`\`\`python
a, b = 0, 1
while a < 100:
    print(a, end=', ')
    a, b = b, a + b
# Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 
\`\`\`

---

## Assignment

1. Write a \`while\` loop that calculates and prints the powers of 2 up to \`1024\` (e.g. 1, 2, 4, 8, 16...), printed on a single line separated by spaces.

---

## Knowledge Check

- How do you assign values to multiple variables in a single line?
- What does the \`end\` argument in \`print()\` do?
- When does a \`while\` loop exit?`
      }
    ]
  },
  {
    sectionId: "04_More_Control_Flow",
    sectionTitle: "4. More Control Flow Tools",
    lessons: [
      {
        id: "python-conditionals-loops",
        title: "Conditionals, Loops & Control",
        url: "",
        content: `## Overview

> Programming logic relies on control flow. We will review conditionals, loop structures, range sequences, and the helper keywords break, continue, and pass.

**You will learn:**

- \`if-elif-else\` structures
- \`for\` loops and \`range()\` sequences
- The special \`else\` clause on loops and the dummy \`pass\` statement

---

## Content

### if Statements

Python supports zero or more \`elif\` parts, and an optional \`else\` at the end:

\`\`\`python
x = int(input("Please enter an integer: "))
if x < 0:
    x = 0
    print('Negative changed to zero')
elif x == 0:
    print('Zero')
elif x == 1:
    print('Single')
else:
    print('More')
\`\`\`

---

### for and range()

Python's \`for\` loop iterates over the items of any sequence (a list or string) in order:

\`\`\`python
words = ['cat', 'window', 'defenestrate']
for w in words:
    print(w, len(w))
\`\`\`

To iterate over a sequence of numbers, use **\`range()\`**:

\`\`\`python
for i in range(5):
    print(i) # Prints 0, 1, 2, 3, 4
\`\`\`

---

### Loop else Clauses

Loops can have an \`else\` clause! It runs when the loop finishes normally (without encountering a \`break\`):

\`\`\`python
for n in range(2, 6):
    for x in range(2, n):
        if n % x == 0:
            print(n, 'equals', x, '*', n//x)
            break
    else:
        # loop fell through without finding a factor
        print(n, 'is a prime number')
\`\`\`

---

### The pass Statement

The \`pass\` statement does nothing. It is used as a placeholder when a statement is syntactically required but you don't want to run any code:

\`\`\`python
while True:
    pass  # Busy-wait for keyboard interrupt (Ctrl+C)
\`\`\`

---

## Assignment

1. Write a \`for\` loop over the numbers 1 to 20.
2. If a number is divisible by 3, print \`"Fizz"\`. If divisible by 5, print \`"Buzz"\`. If divisible by both, print \`"FizzBuzz"\`. Otherwise, print the number.

---

## Knowledge Check

- Does a \`for\` loop \`else\` block run if the loop was interrupted by a \`break\`?
- What does \`range(5, 10, 2)\` yield? (Tip: start, stop, step!)
- What is the purpose of the \`pass\` statement?`
      },
      {
        id: "python-pattern-matching",
        title: "Pattern Matching",
        url: "",
        content: `## Overview

> Python 3.10 introduced Structural Pattern Matching. Similar to switch-case statements in other languages, it offers a clean syntax to match patterns.

**You will learn:**

- Writing \`match-case\` statements
- Handling default matching catch-all cases
- Combining patterns with the \`|\` union operator

---

## Content

### Structural Pattern Matching

A match statement compares a subject value to one or more case patterns:

\`\`\`python
def http_error(status):
    match status:
        case 400:
            return "Bad request"
        case 404:
            return "Not found"
        case 418:
            return "I'm a teapot"
        case _:
            return "Something's wrong with the internet"
\`\`\`

### Key Features:

1. **The Catch-all (\`case _\`\`)**: The underscore \`_\` acts as a wildcard. If no other patterns match, this case executes.
2. **Pattern Unions (\`|\`\`)**: You can combine multiple matches in a single case block:
   \`\`\`python
           case 401 | 403 | 404:
               return "Not allowed or not found"
   \`\`\`

---

## Assignment

1. Define a function \`get_role_permissions(role)\`.
2. Use a \`match\` statement:
   - \`"admin"\` -> returns \`"All Access"\`
   - \`"editor"\` -> returns \`"Edit Content"\`
   - \`"user"\` -> returns \`"Read Content"\`
   - Any other role -> returns \`"Guest"\`
3. Call the function with different roles and print the output.

---

## Knowledge Check

- What symbol represents the default catch-all pattern in a \`match\` statement?
- Which Python version introduced structural pattern matching?
- How do you combine multiple match targets into a single case block?`
      },
      {
        id: "python-defining-functions",
        title: "Defining Functions",
        url: "",
        content: `## Overview

> Modularity is achieved by grouping related codes into custom blocks. We will master function definitions, parameter bindings, scopes, and local variable states.

**You will learn:**

- Creating functions with \`def\` and parameters
- Returning values using the \`return\` statement
- Renaming and assigning functions to new handles

---

## Content

### Function Basics

We define a function with the \`def\` keyword:

\`\`\`python
def fib(n):    # write Fibonacci series up to n
    """Print a Fibonacci series up to n."""
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a + b
    print()

# Call it!
fib(2000)
\`\`\`

---

### Return Values

If a function does not have a \`return\` statement, it implicitly returns \`None\`. To return custom results, use \`return\`:

\`\`\`python
def fib2(n):   # return Fibonacci series up to n
    """Return a list containing the Fibonacci series up to n."""
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)
        a, b = b, a + b
    return result

f100 = fib2(100)
print(f100)
# Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
\`\`\`

---

### Functions are First-Class Objects

In Python, functions can be assigned to variables, passed as arguments, or stored in containers:

\`\`\`python
f = fib
f(100)  # Calls the fib function!
\`\`\`

---

## Assignment

1. Write a function \`celsius_to_fahrenheit(c)\` that returns the equivalent Fahrenheit temperature.
2. Store the function in a variable named \`convert\`, call \`convert(25)\`, and print the result.

---

## Knowledge Check

- What value does a function return if it lacks an explicit \`return\` statement?
- What is the purpose of the triple-quoted string right underneath the function header? (Tip: it's a docstring!)
- Can you assign a function definition to another variable name?`
      },
      {
        id: "python-advanced-functions",
        title: "More on Defining Functions & Style",
        url: "",
        content: `## Overview

> Functions in Python are highly flexible. We will look at default parameter values, positional-only and keyword-only constraints, lambda expressions, annotations, and PEP 8 style standards.

**You will learn:**

- Default argument evaluations and keyword parameters
- Constraining positional-only (\`/\`) and keyword-only (\`*\`) parameters
- Writing single-line lambda expressions and type annotations

---

## Content

### Default & Keyword Arguments

You can specify default values for parameters. 

\`\`\`python
def ask_ok(prompt, retries=4, reminder='Please try again!'):
    # retries and reminder are optional!
    pass
\`\`\`

*Important: Default values are evaluated once at function definition time! If you use a mutable object (like a list) as a default, changes persist across calls.*

---

### Special Parameters: / and *

By default, arguments can be passed to a function by position or by keyword. You can restrict how arguments are passed:

\`\`\`
def f(pos_only, /, standard, *, kw_only):
\`\`\`

- **Positional-Only (\`/\`\`)**: Arguments before the slash \`/\` must be passed *only* by position.
- **Keyword-Only (\`*\`\`)**: Arguments after the star \`*\` must be passed *only* by keyword.

\`\`\`python
def pos_only_arg(arg, /):
    print(arg)

def kw_only_arg(*, arg):
    print(arg)

# pos_only_arg(arg=1)  # Throws TypeError! Must pass positionally.
# kw_only_arg(1)        # Throws TypeError! Must pass as keyword.
\`\`\`

---

### Lambda Expressions

Small, anonymous functions can be created with the \`lambda\` keyword:

\`\`\`python
pairs = [(1, 'one'), (2, 'two'), (3, 'three')]
# Sort by the string names
pairs.sort(key=lambda pair: pair[1])
\`\`\`

---

### PEP 8 Style Guide

For clean Python code, always follow the **PEP 8** style guide:
- Use 4 spaces per indentation level.
- Limit lines to 79 characters.
- Use blank lines to separate functions.
- Use docstrings for documentation.

---

## Assignment

1. Write a function \`create_user(username, *, email, admin=False)\` that returns a dictionary. The \`email\` must be passed as a keyword argument only.
2. Test calling this function with valid and invalid argument methods.

---

## Knowledge Check

- What symbol separates positional-only arguments from standard arguments in a function definition?
- What keyword declares small, single-line anonymous functions?
- How many spaces should be used for indentation according to PEP 8?`
      }
    ]
  },
  {
    sectionId: "05_Data_Structures",
    sectionTitle: "5. Data Structures",
    lessons: [
      {
        id: "python-advanced-lists",
        title: "Advanced Lists & Comprehensions",
        url: "",
        content: `## Overview

> Lists can do more than hold elements. We will implement stacks and queues, construct list comprehensions, and delete indices using the del statement.

**You will learn:**

- Using lists as Stacks and queues
- Writing list comprehensions and nested comprehensions
- Deleting items using the \`del\` statement

---

## Content

### Stacks and Queues

- **Stacks (LIFO)**: Easy to implement using standard list methods: \`append()\` to push and \`pop()\` to pull.
  \`\`\`python
  stack = [3, 4]
  stack.append(5)
  stack.pop() # Returns 5
  \`\`\`

- **Queues (FIFO)**: Standard lists are slow for queues because inserting/deleting at the beginning requires shifting all other items in memory. Instead, use \`collections.deque\`:
  \`\`\`python
  from collections import deque
  queue = deque(["Eric", "John"])
  queue.append("Terry")           # Terry arrives
  queue.popleft()                 # Eric leaves. Returns 'Eric'
  \`\`\`

---

### List Comprehensions

List comprehensions provide a concise way to create lists without writing verbose loops:

\`\`\`python
# Squares of numbers from 0 to 9
squares = [x**2 for x in range(10)]
print(squares) # Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Filter even numbers
evens = [x for x in range(10) if x % 2 == 0]
\`\`\`

---

### The del Statement

The \`del\` statement deletes an item from a list by its index rather than its value (unlike \`.remove()\`), or slices away entire chunks:

\`\`\`python
a = [-1, 1, 66.25, 333, 1234.5]
del a[0]
print(a)   # Output: [1, 66.25, 333, 1234.5]
del a[2:4]
print(a)   # Output: [1, 66.25]
\`\`\`

---

## Assignment

1. Write a list comprehension that takes a list of strings \`words = ["python", "code", "dev"]\` and creates a list containing their uppercase versions.
2. Initialize a list \`data = [10, 20, 30, 40, 50]\` and use \`del\` to remove the last two elements.

---

## Knowledge Check

- Why are standard Python lists inefficient for FIFO queue structures?
- What does the list comprehension \`[x for x in range(5) if x > 2]\` evaluate to?
- How does the \`del\` statement differ from the \`.remove()\` list method?`
      },
      {
        id: "python-tuples-sets-dicts-concepts",
        title: "Tuples, Sets & Dictionaries",
        url: "",
        content: `## Overview

> We will explore the specialized behaviors of Tuples (immutable sequences), Sets (unique, orderless collections), and Dictionaries (indexed key-value tables).

**You will learn:**

- Declaring tuples and tuple unpacking
- Set mathematics (unions, intersections, differences)
- Dictionary structures, keys, and values

---

## Content

### Tuples and Sequences

A tuple consists of a number of values separated by commas:

\`\`\`python
t = 12345, 54321, 'hello!'
# Tuples are immutable! t[0] = 8 throws TypeError
\`\`\`

You can **unpack** a tuple back into individual variables:
\`\`\`python
x, y, z = t
print(x) # Output: 12345
\`\`\`

---

### Sets

A set is an unordered collection with no duplicate elements. They support mathematical set operations:

\`\`\`python
a = set('abracadabra')
b = set('alacazam')

print(a)         # unique letters in a. Output: {'a', 'r', 'b', 'c', 'd'}
print(a - b)     # letters in a but not in b
print(a | b)     # letters in a or b or both (union)
print(a & b)     # letters in both a and b (intersection)
\`\`\`

---

### Dictionaries

Dictionaries are indexed by unique **keys** (which must be immutable, like strings or numbers):

\`\`\`python
tel = {'jack': 4098, 'sape': 4139}
tel['guido'] = 4127
print(tel) # Output: {'jack': 4098, 'sape': 4139, 'guido': 4127}

# Checking if a key exists
'jack' in tel # Output: True
\`\`\`

---

## Assignment

1. Declare a set called \`s1 = {1, 2, 3, 4}\` and \`s2 = {3, 4, 5, 6}\`.
2. Find the intersection of \`s1\` and \`s2\`.
3. Find the union of \`s1\` and \`s2\`.
4. Create a dictionary representing your favorite coding language, with keys \`name\` and \`year_created\`.

---

## Knowledge Check

- What is "tuple unpacking"?
- What operator calculates the intersection of two sets?
- Can you use a list as a key in a dictionary? (Tip: Think about immutability!)`
      },
      {
        id: "python-looping-techniques",
        title: "Looping Techniques & Conditions",
        url: "",
        content: `## Overview

> Python includes clean syntax helpers to iterate over complex data structures, compare sequences, and test boolean logic.

**You will learn:**

- Iterating over dictionary elements and tracking index offsets with \`enumerate()\`
- Zipping sequences and matching conditions
- Comparing sequences lexicographically

---

## Content

### Looping Helpers

- **\`enumerate()\`**: Yields position index and value.
  \`\`\`python
  for i, v in enumerate(['tic', 'tac', 'toe']):
      print(i, v)
  \`\`\`

- **\`zip()\`**: Loops over two or more sequences at the same time.
  \`\`\`python
  questions = ['name', 'quest']
  answers = ['lancelot', 'holy grail']
  for q, a in zip(questions, answers):
      print(f"What is your {q}? It is {a}.")
  \`\`\`

- **\`reversed()\`**: Loops backward over a sequence.
  \`\`\`python
  for i in reversed(range(1, 4)):
      print(i) # Prints 3, 2, 1
  \`\`\`

---

### Lexicographical Comparisons

Sequence objects can be compared to other objects of the same type. The comparison uses **lexicographical** ordering (alphabetical/numerical comparison element by element):

\`\`\`python
(1, 2, 3)             < (1, 2, 4)
[1, 2, 3]             < [1, 2, 4]
'ABC' < 'C' < 'Pascal' < 'Python'
\`\`\`

---

## Assignment

1. Create a dictionary \`grades = {"Alice": 95, "Bob": 80, "Charlie": 88}\`.
2. Write a loop using \`.items()\` that prints \`"Student X scored Y"\`.
3. Write a lexicographical comparison check to test if the tuple \`(1, 2)\` is less than \`(1, 2, -1)\` and print the resulting boolean.

---

## Knowledge Check

- What function combines multiple list elements element-by-element inside a loop?
- How do you loop through a sequence in reverse order?
- On what basis does Python compare sequence sizes (like tuples or lists)?`
      }
    ]
  },
  {
    sectionId: "06_Modules",
    sectionTitle: "6. Modules",
    lessons: [
      {
        id: "python-modules-foundations",
        title: "Modules Foundations",
        url: "",
        content: `## Overview

> As your script grows, you should split your code into multiple files for maintenance. We will cover modules, executable script logic, search paths, and compiled caches.

**You will learn:**

- Creating custom modules and importing them
- Executing modules as standalone scripts with \`__name__ == '__main__'\`
- The Module Search Path mechanics and compiled \`.pyc\` files

---

## Content

### Creating a Module

A module is simply a file containing Python definitions and statements. The file name is the module name with the suffix \`.py\` appended.

If we save this as \`fibo.py\`:
\`\`\`python
def fib(n):
    # print Fibonacci series...
    pass
\`\`\`

We can import it in another script:
\`\`\`python
import fibo
fibo.fib(100)
\`\`\`

---

### Executing Modules as Standalone Scripts

If you want a module file to double as a runnable script AND an importable library, include a check at the bottom of your module file:

\`\`\`python
if __name__ == "__main__":
    import sys
    print("Running module as a script!")
    # Call your module functions here using system arguments
\`\`\`

---

### The Module Search Path

When you import a module named \`spam\`, the interpreter searches for a built-in module, then searches in:
1. The directory containing the input script.
2. **\`PYTHONPATH\`** (a list of directories).
3. The installation-dependent default path (e.g. site-packages).

These directories are stored in the list variable **\`sys.path\`**.

---

## Assignment

1. Create a file \`utils.py\` with a function \`add(a, b)\`.
2. Create a separate file \`main.py\` that imports \`utils.py\` and calls the \`add()\` function.
3. In \`utils.py\`, add an \`if __name__ == "__main__":\` block that prints \`"Running utils directly!"\`. Try executing both files directly in your terminal to see the difference.

---

## Knowledge Check

- What string name variable check lets a module know it is being run as a standalone script rather than imported?
- In what system list variable is the module search directory path stored?
- What are \`__pycache__\` directories and \`.pyc\` files? (Tip: they cache compiled bytecode for faster loading!)`
      },
      {
        id: "python-standard-packages",
        title: "Standard Modules & Packages",
        url: "",
        content: `## Overview

> Python packages allow you to organize modules hierarchically using directory dots. We will explore standard modules, the dir() inspector, packages, and absolute/relative imports.

**You will learn:**

- Inspecting namespaces using the \`dir()\` function
- Designing packages with \`__init__.py\` files
- Writing intra-package relative imports

---

## Content

### The dir() Function

The built-in function \`dir()\` is used to find out which names a module defines. It returns a sorted list of strings:

\`\`\`python
import math
print(dir(math))
# Output: ['__doc__', '__file__', 'cos', 'sin', 'sqrt', ...]
\`\`\`

---

### Package Structures

Packages are a way of structuring Python’s module namespace by using "dotted module names". 

A package directory must contain a file named **\`__init__.py\`** (which can be empty) for Python to treat the directory as a package:

\`\`\`
sound/                          Top-level package
      __init__.py               Initialize the sound package
      effects/                  Subpackage for effects
              __init__.py
              echo.py
\`\`\`

Importing a module from a package:
\`\`\`python
import sound.effects.echo
sound.effects.echo.filter()
\`\`\`

---

### Relative Imports

Inside a package, modules can import from other subpackages using relative imports (using dots \`.\`):

\`\`\`python
# Inside sound.effects.echo:
from . import reverse          # relative import from same directory
from ..filters import equalizer # relative import from parent subpackage
\`\`\`

---

## Assignment

1. Import the built-in \`sys\` module.
2. Use \`dir(sys)\` to inspect all names defined in it and print the list.
3. Identify the \`version\` string variable name inside the returned list and print \`sys.version\`.

---

## Knowledge Check

- What built-in function returns all defined names in a module's namespace?
- What special file must reside in a folder for Python to recognize it as a package directory?
- What relative dot notation imports a module from the parent package level?`
      }
    ]
  },
  {
    sectionId: "07_Input_Output",
    sectionTitle: "7. Input and Output",
    lessons: [
      {
        id: "python-output-formatting",
        title: "Fancier Output Formatting",
        url: "",
        content: `## Overview

> Showing output cleanly is essential for great developer experience. We will master formatted string literals (f-strings), string.format(), and manual string padding operations.

**You will learn:**

- Structuring f-strings and format specifiers
- Aligning and padding text manually
- Utilizing old-style modulo string formatting

---

## Content

### Formatted String Literals (f-strings)

Formatted string literals (f-strings) let you include Python expressions inside string curly braces:

\`\`\`python
>>> year = 2026
>>> event = 'Conference'
>>> f'Results of the {year} {event}'
'Results of the 2026 Conference'
\`\`\`

You can append a colon followed by a format specifier to control decimals or padding:

\`\`\`python
>>> import math
>>> f'The value of pi is approximately {math.pi:.3f}.'
'The value of pi is approximately 3.142.'
\`\`\`

---

### The String format() Method

The basic usage of the \`.format()\` method:

\`\`\`python
print('We are the {} who say "{}!"'.format('knights', 'Ni'))
# Output: We are the knights who say "Ni!"
\`\`\`

---

### Manual Formatting & Padding

You can pad and align strings manually using methods like \`ljust()\`, \`rjust()\`, and \`center()\`, or \`zfill()\` (which pads a numeric string with zeros):

\`\`\`python
>>> '12'.zfill(5)
'00012'
>>> 'hello'.rjust(10)
'     hello'
\`\`\`

---

## Assignment

1. Define variables \`item = "Laptop"\` and \`price = 899.995\`.
2. Print a formatted string using an f-string: \`"The Laptop price is $899.99"\` (rounds \`price\` to two decimal places).
3. Print the number \`42\` padded with leading zeros to be exactly 6 digits long.

---

## Knowledge Check

- How do you limit a float to exactly two decimal places inside an f-string?
- What string method pads a numeric text string with leading zeros?
- What old symbol represents string interpolation formatting in Python versions prior to f-strings? (Tip: it's the \`%\` operator!)`
      },
      {
        id: "python-files-json",
        title: "Reading & Writing Files & JSON",
        url: "",
        content: `## Overview

> Files persist database records and logs. We will read and write text files, open them using context managers, and serialize nested data structures with JSON.

**You will learn:**

- Managing file handles using the \`with\` context block
- Utilizing file methods like \`read()\`, \`readline()\`, and \`write()\`
- Serializing structured Python data to JSON files

---

## Content

### File Operations with with

Always open files using the \`with\` statement. It is a best practice because it guarantees the file will be closed safely when the block exits:

\`\`\`python
with open('workfile.txt', 'w', encoding='utf-8') as f:
    f.write('First line.\\n')
\`\`\`

Standard file modes:
- \`"r"\`: Read-only (default)
- \`"w"\`: Write (overwrites existing file!)
- \`"a"\`: Append (appends to end of file)
- \`"r+"\`: Read and Write

---

### File Methods

- **\`read(size)\`**: Reads the entire file, or a specified number of characters.
- **\`readline()\`**: Reads a single line.
- **\`write(string)\`**: Writes string content to the file.

---

### Saving Structured Data with JSON

Rather than writing custom parsers to save lists or dictionaries in text files, use **JSON (JavaScript Object Notation)** representation!

Python has a built-in module named \`json\` for serializing structures:

\`\`\`python
import json

x = [1, 'simple', 'list']
# Serialize Python object to JSON string
json_str = json.dumps(x)
print(json_str) # Output: [1, "simple", "list"]

# Save straight to a file
with open('data.json', 'w') as f:
    json.dump(x, f)
\`\`\`

---

## Assignment

1. Write a script that saves a dictionary \`profile = {"name": "Alice", "score": 98}\` to a file \`profile.json\` using \`json.dump()\`.
2. Read the file back in and load it using \`json.load()\` to print the loaded dictionary.

---

## Knowledge Check

- Why is it unsafe to open files without using a \`with\` block?
- What is the difference between \`json.dumps()\` and \`json.dump()\`? (Tip: one outputs a string, the other writes to a file!)
- What mode argument should be passed to \`open()\` to add text to the end of a file without deleting existing content?`
      }
    ]
  },
  {
    sectionId: "08_Errors_Exceptions",
    sectionTitle: "8. Errors and Exceptions",
    lessons: [
      {
        id: "python-exceptions-handling",
        title: "Handling & Raising Exceptions",
        url: "",
        content: `## Overview

> Error safety makes code crash-resistant. We will look at syntax errors vs runtime exceptions, handling errors, raising custom exceptions, and exception chaining.

**You will learn:**

- Catching runtime exceptions using \`try-except\`
- Raising exceptions manually with \`raise\`
- Chaining exception origins using the \`from\` keyword

---

## Content

### Runtime Exceptions

Exceptions are errors detected during execution. For example, dividing by zero raises a \`ZeroDivisionError\`.

We handle them by nesting risk-prone blocks:

\`\`\`python
try:
    x = int(input("Enter index: "))
except ValueError:
    print("Oops! That was no valid number. Try again...")
\`\`\`

An \`except\` clause can capture multiple exceptions as a parenthesized tuple:
\`\`\`python
except (RuntimeError, TypeError, NameError):
    pass
\`\`\`

---

### Raising Exceptions

Use the \`raise\` statement to force a specified exception to occur:

\`\`\`python
raise NameError('HiThere')
\`\`\`

---

### Exception Chaining

If you catch an exception and want to raise a different one while preserving the original error context (for debugging), use the \`from\` clause:

\`\`\`python
try:
    open('database.txt')
except FileNotFoundError as exc:
    raise RuntimeError('Failed to load database') from exc
\`\`\`
The output will clearly show both the original exception and the new one.

---

## Assignment

1. Write a function \`divide_numbers(a, b)\` that divides \`a\` by \`b\`.
2. Use a \`try-except\` block to handle \`ZeroDivisionError\`. If b is zero, raise a custom \`ValueError("Division by zero is disallowed")\` chained from the original exception.

---

## Knowledge Check

- What statement forces an exception to occur manually in Python?
- How do you capture multiple different exceptions in a single \`except\` clause?
- What keyword is used to chain a new exception from an older captured one?`
      },
      {
        id: "python-advanced-exceptions",
        title: "Advanced Clean-up & Grouping",
        url: "",
        content: `## Overview

> Professional error handling requires precise clean-up triggers and advanced exception grouping. We will study finally blocks, custom errors, except* syntax, and notes.

**You will learn:**

- Cleaning up system handles using \`finally\`
- Grouping multiple unrelated exceptions using \`ExceptionGroup\` and \`except*\`
- Enriching exceptions with metadata notes

---

## Content

### Defining Clean-up Actions (finally)

The \`finally\` block executes **no matter what**, ensuring resources are cleaned up safely:

\`\`\`python
try:
    raise KeyboardInterrupt
finally:
    print('Goodbye, world!') # Runs before the crash!
\`\`\`

---

### Exception Groups and except* (Python 3.11+)

If you need to raise or handle multiple unrelated exceptions simultaneously (e.g. from concurrent tasks), use **\`ExceptionGroup\`** and catch them using **\`except*\`**:

\`\`\`python
try:
    raise ExceptionGroup(
        "errors",
        [ValueError("invalid val"), TypeError("wrong type")]
    )
except* ValueError as eg:
    print("Caught ValueErrors!")
except* TypeError as eg:
    print("Caught TypeErrors!")
\`\`\`
*Unlike standard except, which catches only the first matching error, except\* can catch multiple matching errors in a group.*

---

### Enriching Exceptions with Notes

Exceptions can be annotated with debug notes using the \`.add_note()\` method:

\`\`\`python
try:
    raise TypeError('bad type')
except TypeError as e:
    e.add_note('Note: Happened during database synchronization.')
    raise
\`\`\`

---

## Assignment

1. Write a \`try-finally\` block that prints \`"Cleaning up resources!"\` regardless of whether a division error occurs.
2. Raise a \`ValueError\`, add a custom note \`"User profile validation failed"\`, catch it, and print the exception object to see the note.

---

## Knowledge Check

- What block is guaranteed to execute whether an exception occurred or not?
- Which Python version introduced \`except*\` and \`ExceptionGroup\`?
- What method adds text metadata notes to an exception object?`
      }
    ]
  },
  {
    sectionId: "09_Classes",
    sectionTitle: "9. Classes",
    lessons: [
      {
        id: "python-scopes-namespaces",
        title: "Scopes, Namespaces & Classes",
        url: "",
        content: `## Overview

> Python classes organize variables and operations. We will study variable scopes (global and nonlocal), class definition blocks, instantiation, and class vs instance variables.

**You will learn:**

- Navigating namespaces and local, nonlocal, and global variable scopes
- Defining classes and instantiating instance objects
- Differentiating between class-level variables and instance variables

---

## Content

### Scopes and Namespaces

A **Namespace** is a mapping from names to objects. A **Scope** is a textual region of a program where a namespace is directly accessible.

Use **\`global\`** and **\`nonlocal\`** keywords to modify variables outside your immediate local scope:

\`\`\`python
def scope_test():
    def do_local():
        spam = "local spam" # Only exists inside do_local

    def do_nonlocal():
        nonlocal spam
        spam = "nonlocal spam" # Modifies scope_test's spam!

    def do_global():
        global spam
        spam = "global spam" # Creates/modifies global spam!

    spam = "test spam"
    do_local()
    print("After local:", spam)       # test spam
    do_nonlocal()
    print("After nonlocal:", spam)    # nonlocal spam
    do_global()
    print("After global:", spam)      # nonlocal spam
\`\`\`

---

### Class Definitions

A simple class declaration containing class variables and instantiating methods:

\`\`\`python
class Dog:
    kind = 'canine'         # class variable shared by all instances

    def __init__(self, name):
        self.name = name    # instance variable unique to each instance
\`\`\`

- **Class Variable**: Shared by all instances (e.g. \`kind\`). Be careful with mutable class variables!
- **Instance Variable**: Unique to each specific instance (e.g. \`name\`).

\`\`\`python
d = Dog('Fido')
e = Dog('Buddy')
print(d.name) # Fido
print(d.kind) # canine
\`\`\`

---

## Assignment

1. Write a class \`Counter\` with an instance variable \`count = 0\` initialized in the constructor.
2. Add a method \`increment(self)\` that adds 1 to \`count\`.
3. Instantiate a counter, call \`increment()\` twice, and print its final count.

---

## Knowledge Check

- What keyword is used to modify a variable in the enclosing outer scope (not the global scope)?
- What is the difference between a class variable and an instance variable?
- What does the first parameter \`self\` inside class methods represent?`
      },
      {
        id: "python-inheritance-generators",
        title: "Inheritance, Iterators & Generators",
        url: "",
        content: `## Overview

> Python supports powerful object hierarchies and sequential flows. We will study class inheritance, private variable conventions, iterators, and generators.

**You will learn:**

- Inheriting parent class behaviors and multiple inheritance
- Writing Custom Iterators using \`__iter__\` and \`__next__\`
- Implementing Generators using \`yield\` and generator expressions

---

## Content

### Inheritance

Python fully supports inheritance, including **multiple inheritance** (inheriting from multiple classes):

\`\`\`python
class Person:
    def __init__(self, name):
        self.name = name

class Student(Person): # Student inherits from Person!
    def __init__(self, name, student_id):
        super().__init__(name) # Call parent constructor
        self.student_id = student_id
\`\`\`

---

### Private Variables

Python doesn't have strict "private" keywords. Instead, any identifier prefixed with a **double underscore** (like \`__update\`) is text-mangled (\`_ClassName__update\`) to avoid name clashes:

\`\`\`python
class Mapping:
    def __init__(self):
        self.__update() # mangled to _Mapping__update
\`\`

This ensures subclasses don't accidentally overwrite parent internal methods!

---

### Iterators & Generators

- **Iterators**: Behind the scenes, \`for\` loops call \`iter()\` and \`next()\` on containers. You can make custom classes iterable by defining \`__iter__()\` and \`__next__()\` methods.

- **Generators (\`yield\`\`)**: A simple way to create iterators using the **\`yield\`** keyword. Generators automatically save their state across iterations:
  \`\`\`python
  def reverse(data):
      for index in range(len(data)-1, -1, -1):
          yield data[index]

  for char in reverse('golf'):
      print(char) # Prints f, l, o, g
  \`\`\`

---

## Assignment

1. Create a parent class \`Vehicle\` with a method \`info()\` returning \`"Vehicle"\`.
2. Create a child class \`Car\` inheriting from \`Vehicle\` that overrides \`info()\` to return \`"Car"\`. Test calling \`info()\` on both.
3. Write a generator function \`countdown(n)\` that yields numbers from \`n\` down to 1.

---

## Knowledge Check

- What function call lets a child class call the parent class's constructor?
- What prefix enables name-mangling to create private variable conventions in classes?
- What keyword is used inside generator functions to return values one-at-a-time while saving execution state?`
      }
    ]
  },
  {
    sectionId: "10_Standard_Library_1",
    sectionTitle: "10. Brief Tour of the Standard Library - Part I",
    lessons: [
      {
        id: "python-stdlib-core",
        title: "Core Utilities & Redirection",
        url: "",
        content: `## Overview

> Python follows a "batteries included" philosophy. We will tour operating system hooks, wildcard globbing, system arguments, and string regex pattern matching.

**You will learn:**

- Hooking into operating system commands with \`os\` and \`shutil\`
- Collecting command-line script arguments using \`sys\`
- Searching strings using regex patterns with \`re\`

---

## Content

### Operating System Interface

The **\`os\`** and **\`shutil\`** modules let you interact with the filesystem:

\`\`\`python
import os
import shutil

print(os.getcwd())      # Get current working directory
os.chdir('/tmp')        # Change directory
shutil.copyfile('data.db', 'archive.db') # Copy file
\`\`\`

---

### File Wildcards

The **\`glob\`** module provides a function for making file lists from directory wildcard searches:

\`\`\`python
import glob
print(glob.glob('*.py')) # Output list of all python files!
\`\`\`

---

### String Pattern Matching

The **\`re\`** module provides regular expression tools for advanced string searches and parsing:

\`\`\`python
import re

# Find all occurrences of words starting with 'f'
print(re.findall(r'\\bf[a-z]*', 'which foot or hand fell fastest'))
# Output: ['foot', 'fell', 'fastest']
\`\`\`

---

## Assignment

1. Import the \`os\` and \`glob\` modules.
2. Print your current working directory.
3. Search for and print all files ending in \`.json\` in your workspace.

---

## Knowledge Check

- What module copy-pastes file structures across folders?
- What does the \`glob.glob()\` function do?
- Which module is used for regular expression pattern matching?`
      },
      {
        id: "python-stdlib-math-performance",
        title: "Math, Date & Quality Control",
        url: "",
        content: `## Overview

> In this part of the Standard Library tour, we will study numerical mathematical modules, internet libraries, date/time parsers, and automated test libraries.

**You will learn:**

- Working with \`math\`, \`random\`, and \`statistics\`
- Fetching internet API endpoints using \`urllib.request\`
- Writing test suites with the \`unittest\` framework

---

## Content

### Mathematics & Statistics

- **\`math\`**: Standard floating-point trig and algebra:
  \`\`\`python
  import math
  math.cos(math.pi / 4)
  \`\`\`
- **\`random\`**: Generating random choices and integers:
  \`\`\`python
  import random
  random.choice(['apple', 'banana', 'cherry'])
  \`\`\`
- **\`statistics\`**: Basic statistical summary tools:
  \`\`\`python
  import statistics
  data = [2.75, 1.75, 1.25, 0.25, 0.5, 1.25, 3.5]
  statistics.mean(data) # Output: 1.6071...
  \`\`\`

---

### Internet Access

The **\`urllib.request\`** module retrieves data from URLs:

\`\`\`python
from urllib.request import urlopen

with urlopen('http://worldtimeapi.org/api/timezone/etc/UTC') as response:
    for line in response:
        line = line.decode('utf-8')  # Decoding to string
        if 'datetime' in line:
            print(line)
\`\`\`

---

### Quality Control & Unit Testing

The **\`unittest\`** module is a built-in testing framework:

\`\`\`python
import unittest

def add(a, b):
    return a + b

class TestMath(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(3, 4), 7)

if __name__ == '__main__':
    unittest.main() # Run tests!
\`\`\`

---

## Assignment

1. Import \`random\` and select a random choice from \`["heads", "tails"]\`.
2. Import \`statistics\` and calculate the median of \`[1, 5, 2, 8, 4]\`.

---

## Knowledge Check

- Which standard library module contains functions like \`mean()\`, \`median()\`, and \`variance()\`?
- What module pulls API endpoint payloads directly from web URLs?
- What class does a custom test suite inherit from inside the \`unittest\` module?`
      }
    ]
  },
  {
    sectionId: "11_Standard_Library_2",
    sectionTitle: "11. Brief Tour of the Standard Library — Part II",
    lessons: [
      {
        id: "python-stdlib-advanced",
        title: "Advanced Standard Library",
        url: "",
        content: `## Overview

> Master programmers use Python's secondary standard library modules to handle complex data records, multithreading, advanced logging, and high-precision calculations.

**You will learn:**

- Creating custom string templates and packing binary data structures
- Constructing concurrent tasks with \`threading\`
- Creating logs with \`logging\` and high-precision math with \`decimal\`

---

## Content

### Templating

The **\`string.Template\`** class allows developers to customize templates for string substitutions:

\`\`\`python
from string import Template
t = Template('\${village}folk send $10 to $cause.')
t.substitute(village='Nottingham', cause='the sheriff')
# Output: 'Nottinghamfolk send $10 to the sheriff.'
\`\`\`

---

### Multi-threading

Multithreading helps run tasks concurrently (especially I/O-bound tasks). The **\`threading\`** module handles thread creation:

\`\`\`python
import threading
import time

def worker():
    print("Worker starts...")
    time.sleep(1)
    print("Worker finished!")

t = threading.Thread(target=worker)
t.start()
t.join() # Wait for thread to finish
\`\`\`

---

### Logging

The **\`logging\`** module offers highly robust log reporting:

\`\`\`python
import logging

logging.warning('Warning:config file %s not found', 'server.conf')
logging.error('Error occurred!')
# Output:
# WARNING:root:Warning:config file server.conf not found
# ERROR:root:Error occurred!
\`\`\`

---

### High-Precision Decimal Math

Floating-point numbers can have small accuracy limits due to binary encoding:

\`\`\`python
>>> 0.1 + 0.1 + 0.1 - 0.3
5.551115123125783e-17
\`\`\`

The **\`decimal\`** module handles high-precision floating-point calculations with perfect decimal accuracy:

\`\`\`python
from decimal import Decimal
print(Decimal('0.1') + Decimal('0.1') + Decimal('0.1') - Decimal('0.3'))
# Output: 0.0
\`\`\`

---

## Assignment

1. Write a logging script that outputs an \`info\` message and an \`error\` message.
2. Calculate \`Decimal('0.70') * Decimal('1.05')\` and print the exact high-precision decimal output.

---

## Knowledge Check

- What module manages background threading concurrency in Python?
- Why is the \`decimal\` module preferred over standard floats for financial math?
- What module handles warning/error message reporting to system admins?`
      }
    ]
  },
  {
    sectionId: "12_Virtual_Environments",
    sectionTitle: "12. Virtual Environments and Packages",
    lessons: [
      {
        id: "python-virtual-envs-pip",
        title: "Virtual Environments & pip Rules",
        url: "",
        content: `## Overview

> Professional projects must isolate their dependency configurations. We will cover environment management with venv, package retrieval with pip, and critical dependency resolver rules.

**You will learn:**

- Isolating development workspaces using \`venv\`
- Freezing and restoring environment settings using \`requirements.txt\`
- The historical shift from **pip 8** to **pip 20 dependency resolver rules**

---

## Content

### Creating a Virtual Environment

Virtual environments prevent dependency clashes (e.g. project A requiring django 3, project B requiring django 5) by isolating packages locally.

To create one, invoke the built-in \`venv\` module in your **system terminal**:

\`\`\`bash
python3 -m venv myenv
\`\`\`

**Activation**:
- macOS / Linux: \`source myenv/bin/activate\`
- Windows: \`myenv\\Scripts\\activate\`

---

### Managing Packages with pip

Once activated, any package you install with \`pip\` goes directly inside your isolated environment folder:

\`\`\`bash
pip install requests
\`\`\`

---

### The Evolution of pip Resolver Rules

As Python libraries evolved, pip experienced major upgrades regarding how it resolves dependencies:

#### 1. pip 8 Rules (Historical)
- **Fast but Blind**: Under **pip 8**, the dependency resolver was quick but had no conflict verification. 
- **The Issue**: If you installed Package A (which needs library X version 1.0) and Package B (which needs library X version 2.0), pip would blindly install whatever was requested last! This left your environment silently **broken** and in an inconsistent state, causing runtime failures.

#### 2. pip 20 Rules (Modern Standard)
- **Strict Verification**: In **pip 20**, Python introduced a **strict dependency resolver** by default.
- **The Rule**: Pip 20 scans all dependencies *before* writing any files to disk. If it detects a conflict (e.g., incompatible version requirements between libraries), **it halts immediately, refuses to install the package, and logs a clear error**.
- **Result**: Highly secure, predictable development environments that prevent silent runtime crashes.

---

## Assignment

1. Write down the shell command to create a virtual environment named \`prod_env\`.
2. Write down the shell activation command for your specific operating system.
3. Describe what happens under pip 20 if you try to install two packages with conflicting requirements.

---

## Knowledge Check

- What command activates a virtual environment on macOS/Linux?
- What was the core danger of installing conflicting packages under the old **pip 8** resolver?
- How does the **pip 20** resolver protect your local environment from inconsistent dependency states?`
      }
    ]
  }
  ,
  {
    sectionId: "13_Python_Data_Science",
    sectionTitle: "13. Python for Data Science & Machine Learning",
    lessons: [
      {
        id: "python-ds-intro",
        title: "Data Science Foundations: is vs == & NumPy",
        url: "",
        content: `## Overview

> In data science, we handle large numerical computations and datasets. We will study Python identity vs equality checks and introduce the high-performance numerical array engine, NumPy.

**You will learn:**

- The critical difference between the \`is\` and \`==\` operators
- Introducing NumPy for numerical computing
- Creating and manipulating NumPy arrays

---

## Content

### Identity vs Equality: is vs ==

In Python, understanding how objects are compared is vital for tracking dataset memory and logic:
- **\`is\` (Identity comparison)**: Compares the **memory location** (id) of two objects. It returns \`True\` only if both variables reference the exact same object in private heaps.
- **\`==\` (Value comparison)**: Compares the **values** of two objects. It returns \`True\` if their values are equivalent, regardless of their physical memory addresses.

\`\`\`python
>>> a = [1, 2, 3]
>>> b = [1, 2, 3]
>>> a == b
True
>>> a is b
False
>>> c = a
>>> a is c
True
\`\`\`

---

### High-Performance Numerical Computing: NumPy

**NumPy** is the foundation for scientific computing in Python. It offers fast, memory-efficient operations on large arrays and matrices compared to standard Python loops:
- **Contiguous Memory**: NumPy arrays use contiguous blocks of memory, allowing vectorization and extreme speedups.
- **Array Creation**: Create arrays using \`np.array()\`, or initialize them using helpers like \`np.zeros()\`, \`np.ones()\`, or \`np.arange()\`:

\`\`\`python
import numpy as np

# Creating an array from a list
arr = np.array([1, 2, 3, 4, 5])
print(arr * 2) # Output: [2 4 6 8 10] (Element-wise broadcasting!)

# Quick helper initializations
zeros = np.zeros(5)
print(zeros) # Output: [0. 0. 0. 0. 0.]
\`\`\`

---

## Assignment

1. Define two lists \`x = [1, 2]\` and \`y = [1, 2]\`. Print the results of \`x == y\` and \`x is y\`.
2. Create a NumPy array from the list \`[10, 20, 30]\` and double each element using a vectorized expression.

---

## Knowledge Check

- What is the difference between \`is\` and \`==\` in Python?
- Why is NumPy preferred over standard Python lists for data science matrices?
- What function initializes a NumPy array with all zero elements?`
      },
      {
        id: "python-ds-pandas-viz",
        title: "Data Manipulation & Visualization: Pandas & Viz",
        url: "",
        content: `## Overview

> Data analysis requires clean structures and visualizations. We will study Pandas DataFrames, row filtering, .loc vs .iloc indexing, list and dictionary comprehensions, and attractive visual libraries.

**You will learn:**

- Handling structured data with Pandas DataFrames
- Differentiating between \`.loc\` and \`.iloc\` indexing
- Filtering rows, handling missing data, and merging datasets
- Beautiful data visualization with Matplotlib and Seaborn

---

## Content

### Data Manipulation: Pandas DataFrames

**Pandas** provides highly intuitive data structures like **Series** and **DataFrames** for handling large structured datasets:

\`\`\`python
import pandas as pd

# Creating a DataFrame
data = {'Name': ['John', 'Jane', 'Alice'], 'Age': [28, 32, 24]}
df = pd.DataFrame(data)

# Filtering rows based on condition
filtered_df = df[df['Age'] > 25]
print(filtered_df)
\`\`\`

#### Differentiating .loc and .iloc
- **\.loc (Label-based indexing)**: Selects rows and columns based on their active index labels.
- **\.iloc (Integer/Position-based indexing)**: Selects rows and columns based on their strict integer positions (0-indexed).

\`\`\`python
# Select first row's Name column by label
name_loc = df.loc[0, 'Name']

# Select first row, second column (Age) by position
age_iloc = df.iloc[0, 1]
\`\`\`

---

### Handling Missing Values & Duplicate Cleanses

Datasets frequently contain redundant values and missing entries:
- **Remove Duplicates**: Convert lists to sets \`list(set(original_list))\` to drop redundant rows.
- **Handle Missing Data**: Drop NaN values using \`.dropna()\` or impute them with mean values using \`.fillna(df.mean())\`.
- **Grouping**: Group values by criteria using \`.groupby('Category').sum()\`.

---

### Data Visualization: Matplotlib & Seaborn

Data visualization presents patterns cleanly:
- **Matplotlib**: Flexible, low-level charting engine for plots and bars.
- **Seaborn**: Built on top of Matplotlib, Seaborn provides a high-level statistical visualization interface (e.g. \`sns.heatmap()\` or \`sns.histplot(kde=True)\`).

\`\`\`python
import matplotlib.pyplot as plt
import seaborn as sns

# Create a simple line plot
plt.plot([1, 2, 3], [10, 20, 30])
plt.title('Performance Plot')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.show()
\`\`\`

---

## Assignment

1. Define a Pandas DataFrame containing column 'Salary' with values \`[50000, 62000, None, 48000]\`.
2. Fill the missing Salary row with the average salary of the column.
3. Write a Matplotlib code snippet to plot a scatter line plot.

---

## Knowledge Check

- How does \`.loc\` differ from \`.iloc\` in Pandas?
- What method replaces missing data values with a specified default or average?
- Which library offers higher-level statistical chart overlays (like heatmaps) built on top of Matplotlib?`
      },
      {
        id: "python-ds-ml-stats",
        title: "Machine Learning & Advanced Stats",
        url: "",
        content: `## Overview

> Building predictive models requires mathematical scaling and robust statistics. We will study Scikit-learn pipelines, model evaluations, hypothesis testing, and multicollinearity.

**You will learn:**

- Training Classifier and Regressor models in Scikit-learn
- Standardizing features using StandardScaler
- Splitting datasets and cross-validation workflows
- Navigating descriptive/inferential statistics, p-values, and VIF checks

---

## Content

### Machine Learning Pipelines: Scikit-learn

**Scikit-learn** provides robust APIs for training models:
- **Split Data**: Partition datasets using \`train_test_split()\` to evaluate generalization.
- **StandardScaler**: Removes the mean and scales features to unit variance (\`mean = 0, std = 1\`), which is critical for distance-sensitive algorithms.
- **Classification vs Regression**: Classifiers predict discrete categoric classes (e.g. spam/non-spam), while Regressors predict continuous numeric values (e.g. housing prices).

\`\`\`python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import numpy as np

# Mock features and continuous labels
X = np.array([[1], [2], [3]])
y = np.array([2, 4, 6])

model = LinearRegression().fit(X, y)
print(f"Coefficient: {model.coef_}")
\`\`\`

---

### Advanced Statistics: Hypothesis Testing & VIF

Data science relies on rigorous statistics to make claims:
- **Hypothesis Testing**: Check if two sets are significantly different. A **p-value** below 0.05 rejects the null hypothesis.
- **Multicollinearity**: Occurs when independent variables are highly correlated, degrading regression stability. We Vett this using **VIF (Variance Inflation Factor)**. VIF values above 5 or 10 indicate significant multicollinearity.

\`\`\`python
from scipy.stats import ttest_ind

# Perform independent t-test
t_stat, p_val = ttest_ind([1.2, 2.5, 3.4], [1.1, 2.3, 3.1])
print("P-value:", p_val)
\`\`\`

---

## Assignment

1. Import \`StandardScaler\` from \`sklearn.preprocessing\` and scale a mock array.
2. Describe what a VIF value of 12 indicates in a regression model.
3. Split features \`X\` and labels \`y\` into 80/20 train/test segments using \`train_test_split\`.

---

## Knowledge Check

- What is the difference between classification and regression in Scikit-learn?
- What standard statistics metric identifies multicollinearity in features?
- What does a p-value less than 0.05 tell a data scientist about the null hypothesis?`
      }
    ]
  }

];
