import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.background};
  }
  h1{
    color: ${({ theme }) => theme.header};
  }
  .title {
    color: ${({ theme }) => theme.title};
  }

  // Button themes

  .project-card-button {
    border: 2px solid ${({ theme }) => theme.body};
    position: relative;
    flex-wrap: wrap;

    padding: 10px;
    margin-right: 10px;
    
    display: inline-block;
    text-align: center;
    color: ${({ theme }) => theme.body};

    border-radius: 2px;
    &:hover {
        border: 2px solid ${({ theme }) => theme.mainColor};
        box-shadow: 0px 0px 10px 0.5px rgba(255, 130, 74, 0.54);
    }
  `;
