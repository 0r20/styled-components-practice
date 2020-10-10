import React from 'react';

// Styled components
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';

// Components
import {Header} from './Header'

// Context
import { useGlobalStateContext } from '../context/globalContext';


const GlobalStyle = createGlobalStyle`
    ${normalize}
    *   {
        text-decoration: none;
    }

    p {
        margin: 0;
    }

    html {
        box-sizing: border-box;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: ${props => props.theme.background};
        overscroll-behavior: none;
        overflow-x: hidden;
    }
`;


const darkTheme = {
    background: '#000',
    text: '#fff',
}

const lightTheme = {
    background: '#fff',
    text: '#000',
    space: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512],
    white: '#fff',
    black: '#000',
    red: '#D43F3F',
    blue: '#5E81FE',
    middleBlue: '#3A79FF',
    darkBlue: '#3D4F9F',
    bgcBlue: '#F1F5FF',
    bgcDarkBlue: '#D2E1FF',
    bgcDarkRed: '#FFD7D7'
}


export const Layout = ({ children }) => {

    const { currentTheme } = useGlobalStateContext();

    return (
        <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
        </ThemeProvider>
    );
}


