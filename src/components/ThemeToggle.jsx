import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-color: var(--accent);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    background-color: var(--primary);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    top: 0.5rem;
    right: 0.5rem;
  }
`;

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      {isDark ? <FaSun /> : <FaMoon />}
    </ToggleButton>
  );
};

export default ThemeToggle;