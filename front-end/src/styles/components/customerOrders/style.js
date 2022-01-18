import styled from 'styled-components';

export const ContainerWithOrders = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  width: 1640px;
  height: 500px;
  margin: 80px auto;
`;

export const CardOrder = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  width: 750px;
  height: 164px;
  
  background: #EAF1EF;
  border: 1px solid #B1C2BE;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const OrderId = styled.section`
  margin: 5px;
  display: inline;
  width: 202px;
  height: 150px;
  text-align: center;
  background-color: white;
`;

export const TitleId = styled.h3`
  display: inline-block;
  margin-top: 34%;

  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
`;

export const OrderStatus = styled.section`
  text-align: center;
  margin-top: 1.5%;
  width: 300px;
  height: 141px;
  display: inline;
  background: rgba(204, 184, 0, 0.75);
  border-radius: 10px;
  text-decoration: none;
`;

export const TitleStatus = styled.h3`
  display: inline-block;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  margin-top: 15%;
  color: #001813;
`;

export const DateAndPrice = styled.section`
  display: flex;
  width: 220px;
  flex-direction: column;
  justify-content: space-around;
`;

export const OrderDate = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 42px;
  color: #001813;
  background: rgba(242, 255, 252, 0.75);
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
`;

export const OrderPrice = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 42px;
  color: #001813;
  background: rgba(242, 255, 252, 0.75);
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  box-shadow: none;
`;
