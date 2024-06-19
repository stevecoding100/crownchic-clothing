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
        width: 80%;
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
            width: 50%;
        }
    }
`;

export const Footer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    @media (max-width: 768px) {
        .footer {
            font-size: 14px;
            flex-direction: column;
            align-items: flex-start;
        }
    }
`;

export const Name = styled.span`
    width: 90%;
    margin-bottom: 15px;

    @media (max-width: 768px) {
        .name {
            width: 100%;
            margin-bottom: 10px;
        }
    }
`;

export const Price = styled.span`
    width: 10%;

    @media (max-width: 768px) {
        .price {
            width: 100%;
        }
    }
`;
