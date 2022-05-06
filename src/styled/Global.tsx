import { createGlobalStyle } from 'styled-components'

interface globalStyleProps {
  theme: any
}

export const GlobalStyle = createGlobalStyle<globalStyleProps>`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        color: var(--main-text-color);
        font-weight: 300;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
   
    }
    :root{
        margin:0 auto;
        --main-bg-color: ${(props) => props.theme.mainBgColor};
        --main-text-color: ${(props) => props.theme.mainTextColor};
        --accent-color: ${(props) => props.theme.accentColor}
    }

    h1, h2 {
        margin-bottom: 2rem;   
    }
       
 `
