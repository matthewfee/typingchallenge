import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        color: #333;
        font-weight: 300;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
   
    }
    #root{
        margin:0 auto;
    }

    h1, h2 {
        margin-bottom: 2rem;   
    }
       
 `
