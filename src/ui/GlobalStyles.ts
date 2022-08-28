import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";

const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  
  body {
    font-family: "Inter", Sans-Serif;
    font-style: normal;
    font-weight: 400;
    color: ${Color.Black};
  }

  li {
    list-style-type: none;
  }

  ::-webkit-input-placeholder {
    color: ${Color.DarkGray};
  }  
  
  ::-moz-placeholder { 
    color: ${Color.DarkGray};
  }

  :-ms-input-placeholder {
    color: ${Color.DarkGray};
  }
     
  :-moz-placeholder { 
      color: ${Color.DarkGray};
  }
`;

export default GlobalStyle;
