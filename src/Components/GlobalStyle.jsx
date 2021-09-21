import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
    body {
        margin: 0;
        padding: 0;
        background: #0D1017;
    }
    a {
        text-decoration: none;
    }
`; 

export default GlobalStyle;