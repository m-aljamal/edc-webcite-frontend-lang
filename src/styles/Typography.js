import { createGlobalStyle } from "styled-components"
import "@fontsource/cairo"
const Typography = createGlobalStyle`
   
 
  body{
    font-family: "Cairo", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important; 
  }
  p, li {
     
    margin:0;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
    font-family: "Cairo", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important; 
  }
   ul{
     list-style:none;
   }
  .center {
    text-align: center;
  }
  .textJustify{
    text-align: justify;
    text-align-last: end;
  }
  .container {
  width: 95vw;
  max-width: 1300px;
  margin: 0 auto;
}
.seeMore {
            color: white;
            background-color: var(--blue);
            padding: 0 4px;
            font-size: 1.7rem;
            &:hover {
               transition: transition all 0.3s ease;
              background-color: var(--darkGray);
              color:white;
            }
          }


  .md-font{
    @media(max-width: 800px){
      font-size: 1.5rem;
    }
  }        

`

export default Typography
