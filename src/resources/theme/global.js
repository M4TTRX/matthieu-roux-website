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
    background-color: ${({ theme }) => theme.background}
  }
  h1{
    color: ${({ theme }) => theme.header};
  }
  .title {
    color: ${({ theme }) => theme.header};
  }
  `;
