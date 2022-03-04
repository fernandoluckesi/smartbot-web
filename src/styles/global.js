import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F5F5F5;
        --red: #FF4501;
        --green: #00B39D;

        --text-title: #343234;
        --text-body: #969cb3;

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

    body {
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
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
    }
    
    .react-modal-content {
        background: var(--background);
        border-radius: 0.24rem;
        max-width: 576px;
        padding: 3rem;
        position: relative;
        width: 100%;
    }

    .react-modal-close {
        background: transparent;
        border: 0;
        position: absolute;
        right: 1.5rem;
        transition: filter 0.3s;
        top: 1.5rem;

        &:hover {
            filter: brightness(0.8);
        }
    }
`