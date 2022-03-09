import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #E5E5E5;
        --red: #FF4501;
        --green: #00B39D;

        --text-title: #343234;
        --text-subtitle: #888689;
        --text-body: #B1B0B2;

        --shape: #ffffff;
    }
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, button {
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        align-items: center;
        bottom: 0;
        background-color: rgba(0, 179, 157, 0.7);
        display: flex;
        height: 100vh;
        justify-content: center;
        left: 0;
        min-width: 306px;
        position: fixed;
        right: 0;
        top: 0;

        @media (max-width: 458px) {
            padding: 0 1rem;
        }
    }
    
    .react-modal-content {
        background: var(--shape);
        border-radius: 4px;
        max-width: 442px;
        position: relative;
        width: 100%;
    }
`
