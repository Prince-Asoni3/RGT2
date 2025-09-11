import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    /* Color Variables */
    --primary: #0F76BC;
    --accent: #F16522;
    --text: #213547;
    --background: #ffffff;
    --gray: #f9f9f9;
    
    /* Dark Mode Colors */
    &[data-theme='dark'] {
      --primary: #0F76BC;
      --accent: #F16522;
      --text: #ffffff;
      --background: #1a1a1a;
      --gray: #2a2a2a;
    }
    
    /* Typography */
    --font-primary: 'Helvetica Neue', sans-serif;
    --font-secondary: 'Arial', sans-serif;
    
    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 3rem;
    --spacing-xl: 4rem;
    
    /* Container */
    --container-width: 1200px;
    --container-padding: 2rem;
    
    /* Responsive Breakpoints */
    --mobile: 480px;
    --tablet: 768px;
    --laptop: 1024px;
    --desktop: 1200px;
    
    /* Responsive Container Widths */
    --container-width-mobile: 100%;
    --container-width-tablet: 90%;
    --container-width-laptop: 85%;
    --container-width-desktop: 1200px;
    
    /* Responsive Spacing */
    --container-padding-mobile: 1rem;
    --container-padding-tablet: 2rem;
    --container-padding-desktop: 2rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-primary);
    color: var(--text);
    background-color: var(--background);
    background-image: url('/images/back.png');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: var(--primary);
    text-decoration: none;
    transition: color 0.3s ease;
  
    &:hover {
      color: var(--accent);
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  /* Container Class */
  .container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 var(--container-padding);
  }

  /* Utility Classes */
  .text-center { text-align: center; }
  .mb-1 { margin-bottom: var(--spacing-xs); }
  .mb-2 { margin-bottom: var(--spacing-sm); }
  .mb-3 { margin-bottom: var(--spacing-md); }
  .mb-4 { margin-bottom: var(--spacing-lg); }
  .mb-5 { margin-bottom: var(--spacing-xl); }
  
  /* Enhanced Responsive Base Styles */
  html {
    font-size: 16px;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  body {
    min-width: 320px;
    overflow-x: hidden;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Responsive Container */
  .container {
    width: 100%;
    max-width: var(--container-width-desktop);
    margin: 0 auto;
    padding: 0 var(--container-padding-desktop);

    @media (max-width: 1200px) {
      max-width: var(--container-width-laptop);
      padding: 0 var(--container-padding-tablet);
    }

    @media (max-width: 768px) {
      max-width: var(--container-width-tablet);
      padding: 0 var(--container-padding-mobile);
    }

    @media (max-width: 480px) {
      max-width: var(--container-width-mobile);
      padding: 0 var(--container-padding-mobile);
    }
  }
`