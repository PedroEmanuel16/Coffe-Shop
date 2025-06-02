import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background: ${props => props.theme.background};
        color: ${props => props.theme["base-text"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Robot', 'sans-serif';
    }
` 