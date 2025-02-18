import styled from "styled-components";

export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    border-radius: 5px;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 14px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: "Poppins";
    font-weight: 700;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

export const GoogleSignInButton = styled(BaseButton)`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;
    font-size: 13px;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;
