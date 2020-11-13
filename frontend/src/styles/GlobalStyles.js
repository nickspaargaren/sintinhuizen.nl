import { createGlobalStyle } from "styled-components";
import bg from "../assets/images/bg.jpg";

const GlobalStyles = createGlobalStyle`

html {}
body {
  margin:0;
  background: #c32c2b;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
  font-size: 15px;
  color: #fff;
  line-height: 1.5em;
  background-image: url(${bg});
  background-repeat: repeat;
}

h1, h2, h3 {line-height: 1.25em; margin: 0 0 20px; text-shadow: 0px 2px 0px rgba(0,0,0,.15);}

h1 {
  font-family: 'Alfa Slab One';
  font-size: 50px;
  letter-spacing: .05em;
  font-weight: normal;
  text-transform: uppercase;
  hyphens: none;
  line-height: 1.1em;
}

h2 {
  font-family: 'Alfa Slab One';
  font-size: 32px;
  letter-spacing: .05em;
  font-weight: normal;
  text-transform: uppercase;
  hyphens: none;
}

h3 {
  font-family: 'Alfa Slab One';
  font-size: 22px;
  letter-spacing: .05em;
  font-weight: normal;
  text-transform: uppercase;
  hyphens: none;
}

h1 span, h2 span {white-space: nowrap;}
h1 small, h2 small {font-size: 60%;}
h1 strong {font-weight: normal; color: #dc1f26;}
h2 strong {font-weight: normal; color: #f1cb19;}
h3 strong {font-weight: normal; color: #f1cb19;}

a {color: inherit;}
p {
  margin: 0 0 20px 0;
}

p.handtekening {
  font-family: 'Courgette';
  font-size: 25px;
  line-height: 1.25em;
}

p.handtekening span {
  opacity: .7;
  font-size: 60%;
  display: block;
  margin-top: -5px;  
}

main section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

main section > div {margin: auto 0; width: 100%; padding: 50px;}

main section.sponsoren {background: #fff; min-height: 0;}
main section.sponsoren > div {padding: 20px 50px;}


/* Grid Templates */
div[class*="grid"] {hyphens: auto; -webkit-hyphens: auto; display: grid; grid-gap: 30px; box-sizing: border-box;}
div[class*="grid"].vertical-align-middle > div {margin: auto 0;}
div[class*="grid"] img {max-width: 100%; height: auto !important;}
.grid-2x {grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));}
.grid-3x {grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));}
.grid-4x {grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));}
/* Einde Grid Templates */

footer {background: #b72322; text-align: center; padding: 20px;}


@media screen and (max-width: 768px) {
  h1 span, h2 span {white-space: normal;}
  h1 {font-size: 34px;}
  h2 {font-size: 22px;}

  main section > div {padding: 15px;}
}

`;

export default GlobalStyles