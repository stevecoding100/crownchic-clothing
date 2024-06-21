import styled from "styled-components";

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
    height: 120px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;

    h2 {
        font-weight: bold;
        margin: 0 6px 0;
        font-size: 22px;
        color: #4a4a4a;
    }
    p {
        font-weight: lighter;
        font-size: 16px;
    }

    @media (max-width: 1024px) {
        height: 100px;
        padding: 0 20px;
        h2 {
            font-size: 20px;
        }
        p {
            font-size: 14px;
        }
    }

    @media (max-width: 768px) {
        height: 90px;
        padding: 0 15px;
        h2 {
            font-size: 18px;
        }
        p {
            font-size: 12px;
        }
    }
`;

export const DirectoryItemContainer = styled.div`

    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;
    &:hover {
        cursor: pointer;
        & ${BackgroundImage} {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
        & ${Body} {
            opacity: 0.9;
        }
             &:first-child {
        margin-right: 7.5px;
    }
    &:last-child {
        margin-left: 7.5px;
    }

    @media (max-width: 1024px) {
    
    min-width: 45%;
        height: 200px;
        margin: 0 5px 10px;
    }

    
@media (max-width: 768px) {
        min-width: 100%;
        height: 180px;
        margin: 0 0 10px;
    
}
`;
