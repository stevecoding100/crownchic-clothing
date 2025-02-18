import styled from "styled-components";

export const CheckoutContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    @media (max-width: 900px) {
        width: 85%;
    }

    @media (max-width: 600px) {
        padding: 10px;
        width: 95%;
        font-size: 10px;
    }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

@media (max-width: 900px) {
    
       
            width: 100%;
            padding: 20px;
        }
        
}



  
`;

export const HeaderBlock = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
    }
`;

export const Total = styled.span`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;

    @media (max-width: 900px) {
        .total {
            padding: 20px;
        }
    }
`;
