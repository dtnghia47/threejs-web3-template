import styled from 'styled-components/macro';
import { createGlobalStyle } from 'styled-components';

/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    font-family: sans-serif;

    * {
      outline: none !important;
    }

    // @media (min-width: 1960px) {
    //   font-size: 16px;
    // }

    // @media (max-width: 1959px) {
    //   font-size: 14px;
    // }
    .fade {
      transition: opacity 0.4s linear !important;
    }
  }

  body {
    font-family: sans-serif;
    opacity: 0;
  }

  body.fontLoaded {
    font-family: sans-serif;
    opacity: 1;
  }
  
  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }
  
  a {
    padding: 0;
    text-decoration: revert;
    background-color: transparent;
  }
  
  a:hover, a:visited {
    border: 1px solid transparent;
  }
  
  .icon {
    width: 1.5rem;
    height: 1.5rem;
    color: ${props => props?.theme?.brandingColors?.primary};
  }

  /* Hide "key" icon in Safari browser */
  input[type="password"]::-webkit-textfield-decoration-container {
    visibility: hidden;
  }
`;

export const ScrollbarStyled = `
  ::-webkit-scrollbar {
    width: 6px;
    background: white;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    background: white;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(29,31,33,0.6);
    border-radius: 8px;
  }
`;