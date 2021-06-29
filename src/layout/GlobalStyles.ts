import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 14px;

        @media screen and (min-width: ${({theme}) => theme.breakPoints.md}) {
            font-size: 15px;
        }

        @media screen and (min-width: ${({theme}) => theme.breakPoints.lg}) {
            font-size: 16px;
        }
    }

    html, body {
        height: 100%;
        width: 100%;
    }

    body {
        background-color: ${({theme}) => theme.pallet.white};
    }

    button, a {
        cursor: pointer;
        appearance: none;
        outline: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyle;