import styled from 'styled-components';

export const NavBarSubComponent = styled.nav`
  background: #036B52;
  height: 50px;
  max-width: 100%;
  border: none;
  position: top fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NameDiv = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #421981;
  height: 100%;
  color: #fafafa;
  min-width: 180px;
`;

export const NavButtonOne = styled.button`
  background: #036B52;
  width: 150px;
  height: 100%;
  border: none;
  color: #fafafa;
  font-size: 16px;
  cursor: pointer;
`;

export const NavButtonTwo = styled.button`
  background: #2FC18C;
  width: 150px;
  height: 100%;
  border: none;
  color: #fafafa;
  font-size: 16px;
  cursor: pointer;
`;

export const NavOutButton = styled.button`
  background: #056CF9;
  width: 100px;
  height: 100%;
  border: none;
  color: #fafafa;
  font-size: 16px;
  cursor: pointer;
`;
