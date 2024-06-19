import styled from "styled-components";

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    h2 {
        margin: 10px 0;
    }
    @media screen and (max-width: 820px) {
        width: 80%;
        padding: 0 20px;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        padding: 0 20px;
    }
`;
