import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  
  :root {
    --blue: #476C86;
    --darkGray: #606060;
   --lightGray: #D7D7D7;
   --tr: all 0.3s linear;
  }
  html {
     

    /* font-size: 10px; */
  }

  body {
    /* font-size: 2rem;
     line-height:2; */
      direction: rtl;
  }
 
  /* .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  } */

ul{
  margin: 0;
}
 li{
  list-style-type: none;
 }
  img {
    max-width: 100%;
  }
  .slick-slide, .slick-slide *{ outline: none !important; }
   
`

export default GlobalStyles
