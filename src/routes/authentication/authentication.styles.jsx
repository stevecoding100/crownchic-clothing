import styled from "styled-components";

export const AuthenticationContainer = styled.div`
    display: flex;
    width: 950px;
    justify-content: space-between;
    margin: 30px auto;

    @media screen and (max-width: 1024px) {
        width: 80%;
    }

    @media screen and (max-width: 950px) {
        flex-direction: column;
        width: 100%;
        align-items: center;
        margin: 20px auto;
    }

    @media screen and (max-width: 480px) {
        margin: 10px auto;
    }
`;
