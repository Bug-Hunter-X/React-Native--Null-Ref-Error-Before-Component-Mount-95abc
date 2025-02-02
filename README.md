# React Native Null Ref Error Before Component Mount

This repository demonstrates a common error in React Native where a ref is accessed before it's been assigned a value, resulting in a null pointer exception. The example showcases the error and provides a solution using useEffect and a null check.

## Problem
Attempting to access a ref's current value within a functional component's useEffect hook, before the component has mounted, results in a null value. The code in `bug.js` illustrates this issue.

## Solution
The solution, provided in `bugSolution.js`, uses the useRef hook and checks for null before accessing ref properties, thus preventing the error.