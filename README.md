React Fundamentals - Task 2 (Advanced Hooks + Forms Kata)

This project contains the submission for Task 2 of Phase 8. It demonstrates an understanding of custom hooks, controlled forms with field-level validation, and when to use memoization hooks (`useMemo` and `useCallback`).

## 🚀 How to Run This Project

1. Clone or download this repository.
2. Open your terminal and navigate to the project folder.
3. Install the dependencies:
   ```bash
   npm install
Start the development server:

bash
npm run dev
Open the local URL provided in the terminal (usually http://localhost:5173) in your browser.

📦 Submission Details
1. Peer Review Thread
Link to Peer Review: [Insert Link Here]

2. Custom Hook: useLocalStorage
Location: src/hooks/useLocalStorage.js
I built a custom useLocalStorage hook that works exactly like useState, but persists the value in the browser's localStorage. This ensures data is not lost when the page refreshes.

Proof of Independent State:
I used this hook in two different components:

src/NameInput.jsx (Saves a "name" string)

src/ThemeToggle.jsx (Saves a "theme" string)

How to verify: Type a name into the input field in Component A, and then click the toggle button in Component B. You will see that changing the state in one component does not affect the state in the other. Each call to useLocalStorage creates its own independent useState and useEffect internally.

3. Controlled Form with Field-Level Validation
Location: src/SignupForm.jsx
This is a fully controlled form with 3 fields: Name, Email, and Age.

Every input's value is driven by React state.

Validation happens in real-time as the user types.

Errors are displayed specifically next to the field that failed the validation rule (not as a generic error at the top).

Validation Rules Implemented:

Name: Cannot be empty.

Email: Must contain an @ symbol.

Age: Must be a positive number.

4. useMemo and useCallback Notes
Here are specific scenarios where these hooks genuinely matter, rather than just restating the dictionary definitions:

useMemo Scenario: I have a component that receives an array of 10,000 products. If I need to filter and sort that list based on a search term, I would wrap that filter/sort logic in useMemo. This prevents the heavy array operation from re-running on every single render (for example, if the user just toggles a UI dropdown), dramatically improving performance.

useCallback Scenario: If I have a parent component that renders a list of Row components wrapped in React.memo, I would wrap my handleRowClick function in useCallback. Without useCallback, the function's identity changes on every render, which would trick React.memo into thinking the prop changed, causing all child rows to re-render unnecessarily.

🛠️ Built With
React

Vite# Advanced-Hooks-Forms
