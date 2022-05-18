import { createGlobalStyle } from "styled-components";

type Props = {
  theme?: any;
};

const GlobalStyles = createGlobalStyle<Props>`
  body{
    font-family: 'Macondo', cursive;
  }
`;

export default GlobalStyles;
