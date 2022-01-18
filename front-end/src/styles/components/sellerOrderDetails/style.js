import styled from 'styled-components';

export const ContainerSellerOrderDetails = styled.div`
  width: 1640px;
  margin: 80px auto;
`;

export const TitleSellerDetail = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  display: inline-block;
  margin-bottom: 20px;
`;

export const ContainerSellerInformation = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #EAF1EF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SellerOrderId = styled.span`
  margin-left: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-indent: 20px;

  color: #001813; 
`;

export const SellerSaleDate = styled.span`
  display: inline-block;
  text-align: center;
  width: 300px;
  margin-left: 25px;
  background: rgba(242, 255, 252, 0.75);
  border-radius: 10px;

  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #001813;
`;

export const SellerOrderStatus = styled.span`
  display: inline-block;
  width: 230px;
  height: 52px;
  text-align: center;
  margin-right: 15px;

  background: rgba(0, 204, 155, 0.75);
  border-radius: 10px;

  border-style: none;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #001813;
`;

export const ContainerSellerOrdersItems = styled.div`
  width: 1634px;
  height: 727px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #FBFFFE;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SellerTotalPrice = styled.span`
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 300px;

  background: #036B52;
  border-radius: 10px;

  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;

  align-self: flex-end;
  text-align: center;
  justify-content: flex-end;
  color: #F2FFFC;
`;

export const ButtonDelivered = styled.button`
  margin-right: 20px;
  height: 52px;
  background: #036B52;
  border-radius: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #F2FFFC; 
  border-style: none;
`;

export const ButtonToPrepare = styled.button`
  width: 200px;
  margin-right: 20px;
  height: 52px;
  background: #2FC18C;
  border-radius: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #F2FFFC; 
  border-style: none;
`;
