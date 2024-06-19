import styled from "styled-components";

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-bottom: 4rem;

    h2 {
        margin: 10px 0;
    }
    @media screen and (max-width: 768px) {
        width: 80%;
        padding: 0 20px;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        padding: 0 20px;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;

        button {
            width: 100%;
            margin-bottom: 10px;
        }
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
        align-items: center;

        button {
            width: 100%;
            margin-bottom: 5px;
        }
    }
`;
