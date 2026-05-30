import { useState, useEffect } from 'react';
import { Plus, Minus, RotateCcw, Sparkles } from 'lucide-react';

/**
 * Counter Component
 * Demonstrates:
 * - Functional Components
 * - useState hook for managing local count state
 * - useEffect hook for synchronization with localStorage
 * - Event Handling (onClick events)
 * - Props usage (title and description passed from parent)
 * - Conditional Rendering (showing message when count >= 10)
 */
function Counter({ title, description }) {
  // Initialize state from localStorage if it exists, otherwise default to 0
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('counter-app-value');
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });

  // Synchronize count state with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('counter-app-value', count.toString());
  }, [count]);

  // Handler functions for event handling
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    // Prevent count from going below 0
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  // Helper to determine active digit description dynamically
  const getDigitLabel = () => {
    const length = count.toString().length;
    if (length === 2) return 'double-digit';
    if (length === 3) return 'triple-digit';
    if (length === 4) return 'quadruple-digit';
    return `${length}-digit`;
  };

  return (
    <section className="glass-card" aria-labelledby="counter-title">
      <div>
        <h2 id="counter-title" className="card-title">
          <Sparkles className="card-icon" size={24} aria-hidden="true" />
          {title}
        </h2>
        <p className="card-description">{description}</p>
      </div>

      {/* Visual Counter Circle */}
      <div className="counter-display-wrapper">
        <div className={`counter-circle ${count >= 10 ? 'glow' : ''}`}>
          <span className="counter-value" aria-live="polite" aria-atomic="true">
            {count}
          </span>
          <span className="counter-label">Current Count</span>
        </div>
      </div>

      {/* Control Action Buttons */}
      <div className="button-grid">
        <button
          onClick={handleDecrement}
          className="btn btn-secondary btn-icon-only"
          title="Decrease count"
          aria-label="Decrease count"
          disabled={count === 0}
          style={{ opacity: count === 0 ? 0.5 : 1, cursor: count === 0 ? 'not-allowed' : 'pointer' }}
        >
          <Minus size={20} aria-hidden="true" />
        </button>

        <button
          onClick={handleReset}
          className="btn btn-danger-outline"
          title="Reset count"
          aria-label="Reset count to zero"
        >
          <RotateCcw size={18} aria-hidden="true" />
          Reset
        </button>

        <button
          onClick={handleIncrement}
          className="btn btn-primary btn-icon-only"
          title="Increase count"
          aria-label="Increase count"
        >
          <Plus size={20} aria-hidden="true" />
        </button>
      </div>

      {/* Conditional Rendering: Alert banner when count >= 10 */}
      {count >= 10 && (
        <div className="counter-alert animate-fade-in" role="status">
          <Sparkles className="counter-alert-icon" size={18} aria-hidden="true" />
          <span><strong>Awesome!</strong> You've reached a {getDigitLabel()} count of {count}!</span>
        </div>
      )}
    </section>
  );
}

export default Counter;
