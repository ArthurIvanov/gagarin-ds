import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

    body {
        font-family: 'sans-serif';
        box-sizing: border-box;
        display: block;
        margin: 0;
        padding: 0;
        position: relative;
    }
`;

export default GlobalStyles;
