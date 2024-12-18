// Array of coding questions grouped by topics
const questions = [
  {
    topic: "Beginner-Level Questions",
    questions: [
      "Write a program to reverse a string.",
      "Check if a given string is a palindrome.",
      "Find the largest of three numbers.",
      "Write a program to sort an array in ascending order.",
      "Create a function to calculate the factorial of a number.",
      "Write a function to check if a number is even or odd.",
      "Find the sum of all numbers in an array.",
      "Write a function to merge two arrays.",
      "Create a program to find the maximum and minimum numbers in an array.",
      "Implement a function to count the occurrences of a character in a string.",
    ],
  },
  {
    topic: "Intermediate-Level Questions",
    questions: [
      "Implement a function to remove duplicates from an array.",
      "Write a function to check if two strings are anagrams.",
      "Create a function to find the nth Fibonacci number.",
      "Flatten a nested array.",
      "Write a program to shuffle an array randomly.",
      "Create a program to find the second largest number in an array.",
      "Implement a function to calculate the GCD of two numbers.",
      "Write a function to find the intersection of two arrays.",
      "Implement a function to capitalize the first letter of each word in a string.",
      "Write a function to rotate an array k times.",
    ],
  },
  {
    topic: "Array Manipulation",
    questions: [
      "Find the sum of the largest subarray.",
      "Write a function to check if an array is a subset of another array.",
      "Remove falsy values from an array.",
      "Create a function to find the longest consecutive sequence in an array.",
      "Write a program to calculate the product of all elements in an array.",
      "Find all pairs in an array whose sum is equal to a given number.",
      "Write a function to remove all negative numbers from an array.",
      "Find the missing number in a sequence.",
      "Write a function to move all zeroes to the end of an array.",
      "Create a program to find duplicate elements in an array.",
    ],
  },
  {
    topic: "String Manipulation",
    questions: [
      "Count the vowels and consonants in a string.",
      "Check if a string contains only digits.",
      "Write a function to replace spaces in a string with a given character.",
      "Check if a string ends with a given substring.",
      "Write a function to repeat a string n times.",
      "Implement a function to check if a string contains balanced parentheses.",
      "Reverse the words in a sentence.",
      "Find the longest word in a sentence.",
      "Write a function to truncate a string to a given length.",
      "Find the frequency of each word in a string.",
    ],
  },
  {
    topic:"Recursion",
    questions:[
        "Write a recursive function to calculate the factorial of a number.",
    "Implement a recursive Fibonacci sequence generator.",
    "Create a recursive function to reverse a string.",
    "Write a recursive function to flatten a nested object.",
    "Implement a recursive function to calculate the power of a number.",
    "Write a recursive function to check if a number is prime.",
    "Find the greatest common divisor (GCD) using recursion.",
    "Write a function to sum all numbers in a nested array using recursion.",
    "Implement a recursive function to calculate the sum of digits in a number.",
    "Create a recursive function to generate all permutations of a string.",
    ],
  },
  {
    topic:"Object-Oriented JavaScript",
    questions:[
        "Create a class for a simple calculator with methods for addition, subtraction, multiplication, and division.",
    "Write a program to implement a Stack using a class.",
    "Create a class for a Queue data structure.",
    "Implement a class for a Linked List.",
    "Write a function to compare two objects for equality.",
    "Implement a class for a binary search tree with methods for insertion, deletion, and search.",
    "Create a class for a Student with properties for name, age, and grades, and a method to calculate the average grade.",
    "Write a function to merge two objects deeply.",
    "Create a class for a Shape with a method to calculate the area, and extend it for Circle and Rectangle.",
    "Implement a class for an EventEmitter.",
    ],

  },
  {
    topic:"Asynchronous JavaScript",
    questions:[
        "Write a program using setTimeout to print numbers from 1 to 10 with a 1-second delay.",
    "Create a function to fetch data from an API using `fetch`.",
    "Implement a program to demonstrate the use of async/await.",
    "Write a function to read multiple API responses and merge the results.",
    "Create a function to demonstrate Promise.all.",
    "Implement a function that retries an API call up to 3 times if it fails.",
    "Write a program to execute multiple promises in sequence.",
    "Implement a debounce function.",
    "Write a throttle function.",
    "Create a program to simulate a simple progress bar using async functions.",
    ],
  },
  {
    topic:"DOM Manipulation",
    questions:[
        "Write a function to create and append an HTML element.",
    "Implement a program to toggle the visibility of a div on a button click.",
    "Write a function to change the background color of a page every 5 seconds.",
    "Implement a program to count the number of clicks on a button.",
    "Create a function to fetch and display data in a table dynamically.",
    "Write a program to validate a form using JavaScript.",
    "Implement a function to drag and drop elements.",
    "Create a program to create a dynamic image carousel.",
    "Write a function to highlight all links on a webpage.",
    "Implement a program to detect when an element is in the viewport.",
    ],
  },
  {
    topic:  "Advanced-Level Questions",
    questions:[
        "Write a function to memoize a given function.",
    "Implement a function to deep clone an object.",
    "Create a polyfill for `Array.prototype.map()`.",
    "Write a polyfill for `Promise.all()`.",
    "Create a custom implementation of `bind()`.",
    "Write a program to implement a LRU Cache.",
    "Implement a function to debounce an API call.",
    "Write a function to generate a random hex color code.",
    "Create a program to parse and stringify JSON without using `JSON.parse()` or `JSON.stringify()`.",
    "Write a function to perform binary search on a sorted array.",
    ],
  },
  {
    topic:"Coding Challenges",
    questions:[
        "Solve the FizzBuzz problem.",
        "Create a program to find the longest palindromic substring.",
        "Write a function to calculate the sum of two numbers represented as strings.",
        "Implement a program to generate all subsets of a set.",
        "Write a function to implement the Knapsack problem.",
        "Solve the Tower of Hanoi problem.",
        "Implement a function to solve the N-Queens problem.",
        "Write a program to find the shortest path in a maze.",
        "Implement the Dijkstra algorithm.",
        "Create a program to solve a Sudoku puzzle.",
    ]
  }
];

// Function to render questions dynamically
function renderQuestions() {
  const questionList = document.getElementById("questions-list");
  questionList.innerHTML = ""; // Clear the list before re-rendering

  questions.forEach((topic) => {
    // Render the topic as an h2
    const topicHeading = document.createElement("h2");
    topicHeading.textContent = topic.topic;
    questionList.appendChild(topicHeading);

    // Render the questions for that topic
    const ul = document.createElement("ul");
    topic.questions.forEach((question, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1}. ${question}`;
      ul.appendChild(li);
    });
    questionList.appendChild(ul);
  });
}

// Filter questions based on search input
function filterQuestions() {
  const searchValue = document.getElementById("search-bar").value.toLowerCase();
  const filteredQuestions = questions.map((topic) => {
    return {
      ...topic,
      questions: topic.questions.filter((question) =>
        question.toLowerCase().includes(searchValue)
      ),
    };
  });

  // Clear the list before re-rendering
  const questionList = document.getElementById("questions-list");
  questionList.innerHTML = "";

  filteredQuestions.forEach((topic) => {
    // Only render topics that have matching questions
    if (topic.questions.length > 0) {
      const topicHeading = document.createElement("h2");
      topicHeading.textContent = topic.topic;
      questionList.appendChild(topicHeading);

      const ul = document.createElement("ul");
      topic.questions.forEach((question, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${question}`;
        ul.appendChild(li);
      });
      questionList.appendChild(ul);
    }
  });
}

// Initialize the page by rendering all questions
renderQuestions();
