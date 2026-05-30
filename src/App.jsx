import { useState, useEffect } from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';
import Counter from './components/Counter';
import Calculator from './components/Calculator';
import './App.css';

/**
 * Main Application Component
 * Coordinates:
 * - Application-wide state for theme selection (light / dark)
 * - Persistent theme preferences using localStorage & system prefers-color-scheme
 * - Responsive grid container layout rendering Counter and Calculator cards side-by-side
 * - High-end premium layout architecture with polished visual cues
 */
function App() {
  // Initialize dark/light mode from localStorage or falling back to browser setting
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('calculator-app-theme');
    if (savedTheme !== null) {
      return savedTheme === 'dark';
    }
    // Fallback to system preferences
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply or remove the 'dark' utility class on the HTML document root element
  useEffect(() => {
    const rootElement = document.documentElement;
    if (isDark) {
      rootElement.classList.add('dark');
      localStorage.setItem('calculator-app-theme', 'dark');
    } else {
      rootElement.classList.remove('dark');
      localStorage.setItem('calculator-app-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prevDark => !prevDark);
  };

  return (
    <div className="app-container">
      {/* Premium Navigation Header */}
      <header className="app-header">
        <div className="logo-section">
          <Sparkles className="logo-icon" size={28} aria-hidden="true" />
          <h1 className="logo-text">OmniCount</h1>
        </div>

        {/* Dynamic Theme Mode Switcher */}
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
          {isDark ? (
            <Sun size={20} className="animate-fade-in" aria-hidden="true" />
          ) : (
            <Moon size={20} className="animate-fade-in" aria-hidden="true" />
          )}
        </button>
      </header>

      {/* Main Responsive Grid Layout containing interactive widgets */}
      <main className="dashboard-grid">
        {/* State & Props Demo: Interactive Counter Widget */}
        <Counter 
          title="Interactive Counter" 
          description="Manage values with instant localStorage state preservation and active high-limit warnings." 
        />

        {/* State & Props Demo: Precision Calculator Widget */}
        <Calculator 
          title="Precision Calculator" 
          description="Execute exact arithmetic math operations immediately backed by real-time reactive calculations." 
        />
      </main>

      {/* Decorative Brand Footer */}
      <footer className="app-footer">
        <p>
          &copy; {new Date().getFullYear()} OmniCount App. Created for React Learning Roadmap.
        </p>
        <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>
          Built with <span style={{ color: 'var(--accent)' }}>React 19</span> &bull; Styled with <span style={{ color: 'var(--accent)' }}>Vanilla CSS Custom Properties</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
