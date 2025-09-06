import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [theme, setTheme] = useState('light');

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  // Toggle Theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <style>{`
      .fname{
      color: #1a80d3;
      }
        body.light {
          background-color: #fdfdfd;
          color: #111;
          font-family: "Courier New", monospace;
        }
        body.dark {
          background-color: #0d0d0d;
          font-family: "Courier New", monospace;
        }

        .header-logo {
          font-size: 1rem;
          font-weight: bold;
        }
        .fname {
  color: #00ddffff;
}

        .header-nav-link {
          font-size: 16px;
          font-weight: 500;
          color: inherit;
          text-decoration: none;
          margin-left: 30px;
          transition: color 0.3s ease;
        }

        .header-nav-link:hover {
          color: #00eeffff;
        }

        .theme-toggle-btn {
          margin-left: 30px;
          padding: 6px 10px;
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: inherit;
        }

        .theme-toggle-btn svg {
          width: 22px;
          height: 22px;
        }

        @media (max-width: 768px) {
          .header-logo {
            font-size: 20px;
          }
          .header-nav-link {
            font-size: 14px;
            margin-left: 15px;
          }
          .theme-toggle-btn {
            margin-left: 15px;
            font-size: 16px;
            padding: 4px 8px;
          }
        }

        .fname {
          color: #00ff66;
        }
      `}</style>

      <header style={styles.header}>
        <div style={styles.container}>
          <div className="header-logo">
            <span className="fname ">Krish@</span>_Shah-$
          </div>
          <nav style={styles.nav}>
            <Link to="/" className="header-nav-link">Blog</Link>
            <Link to="/about" className="header-nav-link">About</Link>
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {theme === 'light' ? (
                // Moon Icon
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.752 15.002a9.718 9.718 0 01-3.143.516c-5.385 0-9.75-4.365-9.75-9.75 0-1.094.178-2.145.516-3.143A9.753 9.753 0 003 11.25c0 5.385 4.365 9.75 9.75 9.75a9.753 9.753 0 009.002-6z"/>
                </svg>
              ) : (
                // Sun Icon
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5a1 1 0 011-1h0a1 1 0 110 2h0a1 1 0 01-1-1zm0 14a1 1 0 011 1h0a1 1 0 11-2 0h0a1 1 0 011-1zm7.5-6.5a1 1 0 011-1h0a1 1 0 110 2h0a1 1 0 01-1-1zM4.5 12a1 1 0 011-1h0a1 1 0 110 2h0a1 1 0 01-1-1zm11.95-5.657a1 1 0 011.414 0h0a1 1 0 01-1.414 1.414h0a1 1 0 010-1.414zm-9.9 9.9a1 1 0 011.414 0h0a1 1 0 01-1.414 1.414h0a1 1 0 010-1.414zm11.314 1.414a1 1 0 010-1.414h0a1 1 0 011.414 1.414h0a1 1 0 01-1.414 0zm-9.9-9.9a1 1 0 010-1.414h0a1 1 0 011.414 1.414h0a1 1 0 01-1.414 0zM12 7.5A4.5 4.5 0 1112 16.5a4.5 4.5 0 010-9z"/>
                </svg>
              )}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

const styles = {
  header: {
    width: '100%',
    background: 'inherit',
    top: 0,
    zIndex: 1000,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
  }
};

export default Header;
