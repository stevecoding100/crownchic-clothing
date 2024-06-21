import styled from "styled-components";

export const DirectoryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    @media screen and (max-width: 1024px) {
        gap: 15px;
    }

    @media screen and (max-width: 768px) {
        justify-content: center;
        gap: 10px;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
        gap: 5px;
    }
`;
