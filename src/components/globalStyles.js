import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-size: 18px;
        font-family: 'Poppins', sans-serif;
        line-height: 1.2;
        box-sizing: border-box;
        list-style:none;
    }

    body {
        max-width: 100%;
        min-height: 100vh;
        overflow-y: ${props => props.showMenu ? "hidden" : "scroll"};
    }
`;