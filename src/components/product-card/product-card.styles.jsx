import styled from "styled-components";

export const ProductCartContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    margin: 2rem 0;

    img {
        width: 100%;
        height: 95%;
        object-fit: cover;
        margin-bottom: 5px;
        border-radius: 5px;
    }

    button {
        width: 50%;
        opacity: 0.7;
        position: absolute;
        top: 255px;
        display: none;
    }

    &:hover {
        img {
            opacity: 0.8;
        }

        button {
            opacity: 0.85;
            display: flex;
        }
    }

    @media (max-width: 768px) {
        height: 270px;

        img {
            height: 100%;
        }
        button {
            top: 200px;
            font-size: 12px;
        }
    }
`;

export const Footer = styled.div`
    width: 100%;
    height: 0;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const Name = styled.span`
    width: 90%;
    margin-bottom: 15px;
    font-size: 16px;
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 10px;
        font-size: 14px;
    }
`;

export const Price = styled.span`
    width: 15%;
    font-size: 20px;

    @media (max-width: 768px) {
        width: 25%;
        font-size: 16px;
    }
`;
