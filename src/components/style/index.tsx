import { createGlobalStyle } from "styled-components";

type Props = {
  theme?: any;
};

const GlobalStyles = createGlobalStyle<Props>`
  body{
    font-family: 'Macondo', cursive;
    background: #E3E3E3;
  }

  h1, h2, h3, h4, h5, h6, .ant-drawer-title, .ant-menu-submenu-title, .ant-tabs-tab-btn{
    font-family: 'Lobster', cursive;
  }

  .ant-menu{
    background: transparent !important;
  }

  .ant-menu-submenu-title{
    color: black;
  }
`;

export default GlobalStyles;
