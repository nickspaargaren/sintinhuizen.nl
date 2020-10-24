import { createGlobalStyle } from "styled-components";
import bg from "../assets/images/bg.jpg";

const GlobalStyles = createGlobalStyle`

html {}
body {
  margin:0;
  background: #c32c2b;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
  font-size: 14px;
  color: #fff;
  line-height: 1.5em;
  background-image: url(${bg});
  background-repeat: repeat;
}

/* Grid Templates */
div[class*="grid"] {hyphens: auto; -webkit-hyphens: auto; display: grid; grid-gap: 30px;}
div[class*="grid"].vertical-align-middle > div {margin: auto 0;}
div[class*="grid"] img {max-width: 100%; height: auto !important;}
.grid-2x {grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));}
.grid-3x {grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));}
.grid-4x {grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));}
/* Einde Grid Templates */

`;

export default GlobalStyles