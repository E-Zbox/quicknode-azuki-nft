import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: Source Sans Pro;
        transition: 350ms linear;
        color: ${({ theme: { blue01 } }) => blue01};

        // variables
        --three-px: 3px;
        --seven-px: 7px;
        --ten-px: 10px;
    }

    body {
        position: relative;
        height: 100vh;
        width: 100vw;
        background-color: ${({ theme: { brown03 } }) => `${brown03}ae`};

        &::before {
            content: "";
            position: absolute;
            top: 0px;
            left: 0px;
            height: 100%;
            width: 100%;
            z-index: -1;
            background-color: ${({ theme: { black01 } }) => `${black01}f3`};
        }
    }
`;
