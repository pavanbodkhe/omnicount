# OmniCount - Counter & Calculator React App

A visually stunning, premium-quality modern React application that integrates  a **State-Persistent Counter** and a **Reactive Precision Calculator** in a beautiful glassmorphic dashboard  layout. This project was developed as a hands-on learning roadmap project focusing on essential modern React fundamentals.

--- 
 
## 🌟 Features 

### ⏱️ Interactive Counter
*   **State Persistence**: Counter value is fully preserved inside  browser `localStorage` across page refreshes.
*   **Safety Limits**: Counter is prevented from dipping below `0`. 
*   **Visual Celebration Warning**: Triggers an elegant notification toast when the counter reaches `10` or more.
*   **Quick Reset**: Instantly restore state back to zero 

### 🧮 Precision Calculator
*   **Reactive Calculations**: Automatically updates the result in real-time as you type, with no manual "equal" click required.
*   **Precise Arithmetic**: Supports addition, subtraction, multiplication, and division of floating-point and integer numbers.
*   **Smart Decimals**: Rounds off recurring numbers cleanly to avoid layout overflow issues (e.g. `0.1 * 0.2` or division fractions).
*   **Safety Division Guard**: Renders an alert panel and custom styling when trying to divide a value by zero (`Cannot divide by zero!`).

### 🎨 Visual & Experience Excellence
*   **Dynamic Theme Toggle**: Seamless transition between a dark space-indigo theme and a light pastel theme.
*   **Responsive Layout**: Beautiful side-by-side card grid on tablets and desktops that seamlessly stacks into a single-column layout on mobile devices.
*   **Glassmorphic Design**: Clean UI with custom blur effects, color glows, and micro-animations.
*   **Vector Iconography**: Enhanced with highly polished vector elements powered by `lucide-react`.

---

## ⚙️ Technologies Used

*   **Framework**: [React 19](https://react.dev/) (Functional Components & Hooks)
*   **Build Tool**: [Vite](https://vite.dev/) (HMR & fast compilation)
*   **Styling**: Vanilla CSS with modern CSS Custom Properties (Variables)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Static Code Analysis**: [ESLint](https://eslint.org/)

---
<img width="1900" height="949" alt="image" src="https://github.com/user-attachments/assets/1a37a3a0-0c9b-4295-85ef-120e1b388ef9" />
<img width="1914" height="958" alt="image" src="https://github.com/user-attachments/assets/4b3061f1-2c33-44e9-b263-4dd720ccb1c2" />
<img width="1427" height="953" alt="image" src="https://github.com/user-attachments/assets/722adf40-0f49-46d6-a2ed-663ee281f969" />




## 🚀 Installation & Local Development

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended ).

### 2. Clone and Install Dependencies
Navigate to the project root directory and run :
```bash
npm install
```

### 3. Start the Development Server
Launch the local Vite server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to interact with the application.

### 4. Build for Production
Generate optimized static bundle assets inside the `/dist` folder:
```bash
npm run build
```

---

## 🎓 React Concept Explanations

This application demonstrates the primary pillars of React development for beginners:

### 1. JSX (JavaScript XML)
JSX allows us to write HTML-like elements inside JavaScript, providing a visual structure for components. It parses expression evaluations inside curly braces `{}`.
*   *Example in our code:* Renders dynamic variables directly inside tags:
    ```jsx
    <span className="counter-value">{count}</span>
    ```

### 2. Components
Components are the reusable, modular building blocks of a React user interface. We split the UI into functional components: `App.jsx`, `Counter.jsx`, and `Calculator.jsx`.
*   *Why this is useful:* It keeps our code base tidy, makes debugging easier, and allows individual blocks of the page to focus on their respective duties.

### 3. Props
Props (short for properties) allow parent components to pass data or configurations downward to child components.
*   *Example in our code:* In `App.jsx`, we pass custom title strings to the widgets:
    ```jsx
    <Counter 
      title="Interactive Counter" 
      description="Manage values with instant localStorage state preservation..." 
    />
    ```
    Inside `Counter.jsx`, we receive and display these props parameters:
    ```jsx
    function Counter({ title, description }) {
      return (
        <h2>{title}</h2>
      );
    }
    ```

### 4. `useState` (State Management)
State is a component's memory. While props are read-only and passed from above, state is managed locally and can change dynamically over time. When state updates, React automatically schedules a re-render of the component.
*   *Example in our code:* Handling reactive inputs:
    ```javascript
    const [num1, setNum1] = useState('');
    ```

### 5. `useEffect` (Side Effects)
The `useEffect` hook lets us synchronize a component with external systems (like browser storage or document theme APIs).
*   *Example in our code:* Syncing the counter value to `localStorage`:
    ```javascript
    useEffect(() => {
      localStorage.setItem('counter-app-value', count.toString());
    }, [count]); // This effect executes every single time the `count` state updates
    ```

### 6. Event Handling
React handles browser actions (like button clicks or input typing) using camelCase event listeners like `onClick` and `onChange`. We pass reference handlers directly to these listeners.
*   *Example in our code:*      
    ```jsx
    <button onClick={handleIncrement}>+</button>
    ```

---

## 🛠️ Future Improvements
1.  **Operation History Log**: Keep an interactive side drawer displaying the last 10 calculations performed.
2.  **Sound Effects**: Add optional playful tick sounds when incrementing buttons or changing modes.
3.  **Keyboard Shortcuts**: Enable numeric keypad keys (`+`, `-`, `*`, `/`, `Enter`, `Esc`) to trigger operations directly.
4.  **Scientific Mode**: Add standard mathematical operators (like square roots, percentages, and exponents).
