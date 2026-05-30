import { useState } from 'react';
import { Calculator as CalcIcon, Hash, RefreshCw } from 'lucide-react';

/**
 * Calculator Component
 * Demonstrates:
 * - useState hook for managing input fields and operator selection
 * - Derived state computation during render (eliminates useEffect and avoids state synchronizations)
 * - Event Handling (handling inputs, active operator clicks, and reset events)
 * - Safe floating-point operations and division by zero protection
 */
function Calculator({ title, description }) {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState(''); // '+', '-', '*', '/'

  // Derived state calculations computed dynamically during render.
  // This is highly recommended by React to prevent cascading re-renders.
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  let result = null;
  let isError = false;

  if (operation) {
    if (num1 === '' || num2 === '') {
      result = 'Enter both numbers to calculate';
      isError = true;
    } else if (isNaN(n1) || isNaN(n2)) {
      result = 'Please enter valid numerical values';
      isError = true;
    } else {
      switch (operation) {
        case '+':
          result = n1 + n2;
          break;
        case '-':
          result = n1 - n2;
          break;
        case '*': {
          // Avoid deep floating-point issues (e.g. 0.1 * 0.2)
          const mult = n1 * n2;
          result = parseFloat(mult.toFixed(10));
          break;
        }
        case '/': {
          if (n2 === 0) {
            result = 'Cannot divide by zero!';
            isError = true;
          } else {
            const div = n1 / n2;
            // Cleanly truncate repeating decimals to 8 decimal places
            result = parseFloat(div.toFixed(8));
          }
          break;
        }
        default:
          result = null;
      }
    }
  }

  const handleClear = () => {
    setNum1('');
    setNum2('');
    setOperation('');
  };

  return (
    <section className="glass-card" aria-labelledby="calculator-title">
      <div>
        <h2 id="calculator-title" className="card-title">
          <CalcIcon className="card-icon" size={24} aria-hidden="true" />
          {title}
        </h2>
        <p className="card-description">{description}</p>
      </div>

      <div className="calculator-inputs">
        {/* First Number Input */}
        <div className="input-field-group">
          <label htmlFor="num1" className="input-label">
            First Number
          </label>
          <div className="input-container-inner">
            <input
              id="num1"
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              className="number-input"
              placeholder="e.g. 15"
              step="any"
              aria-required="true"
            />
            <Hash size={18} className="input-icon" aria-hidden="true" />
          </div>
        </div>

        {/* Second Number Input */}
        <div className="input-field-group">
          <label htmlFor="num2" className="input-label">
            Second Number
          </label>
          <div className="input-container-inner">
            <input
              id="num2"
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              className="number-input"
              placeholder="e.g. 5"
              step="any"
              aria-required="true"
            />
            <Hash size={18} className="input-icon" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Operator grid buttons */}
      <div className="operator-grid" role="group" aria-label="Arithmetic operators">
        <button
          onClick={() => setOperation('+')}
          className={`btn-operator ${operation === '+' ? 'active' : ''}`}
          title="Addition"
          aria-label="Add"
        >
          +
        </button>
        <button
          onClick={() => setOperation('-')}
          className={`btn-operator ${operation === '-' ? 'active' : ''}`}
          title="Subtraction"
          aria-label="Subtract"
        >
          -
        </button>
        <button
          onClick={() => setOperation('*')}
          className={`btn-operator ${operation === '*' ? 'active' : ''}`}
          title="Multiplication"
          aria-label="Multiply"
        >
          &times;
        </button>
        <button
          onClick={() => setOperation('/')}
          className={`btn-operator ${operation === '/' ? 'active' : ''}`}
          title="Division"
          aria-label="Divide"
        >
          &divide;
        </button>
      </div>

      {/* Result Display Box */}
      <div className="result-section">
        <div className="result-label">Result</div>
        <div 
          className={`result-box ${isError ? 'error' : result !== null ? 'has-result' : ''}`}
          aria-live="polite"
          aria-atomic="true"
        >
          {result !== null ? result : 'Enter numbers and select operation'}
        </div>
      </div>

      {/* Auxiliary Clear Button */}
      {(num1 !== '' || num2 !== '' || operation !== '') && (
        <button
          onClick={handleClear}
          className="btn btn-secondary"
          style={{ width: '100%', marginTop: '-0.5rem' }}
          title="Clear inputs and results"
        >
          <RefreshCw size={16} aria-hidden="true" />
          Reset Calculator
        </button>
      )}
    </section>
  );
}

export default Calculator;
