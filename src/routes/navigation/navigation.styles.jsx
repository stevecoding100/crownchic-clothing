import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media (max-width: 600px) {
        height: 60px;
        margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    cursor: pointer;

    @media (max-width: 600px) {
        width: 50px;
        padding: 15px;
    }
`;

export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    @media (max-width: 600px) {
        width: 80%;
    }
`;

export const NavLink = styled(Link)`
    margin-top: 30px;
    padding: 10px 15px;
    font-weight: 500;
    cursor: pointer;

    @media (max-width: 600px) {
        padding: 10px;
        font-weight: 600;
        font-size: 14px;
    }
`;

// @media only screen and (max-width: 600px) {
//     .navigation {
//         .nav-links-container {
//             .nav-link {
//                 padding: 10px;
//                 font-weight: 600;
//                 font-size: 14px;
//                 cursor: pointer;
//             }
//         }
//     }
// }
