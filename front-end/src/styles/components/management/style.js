import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 60px;
  background: #036B52;
`;

export const ButtonUsers = styled.button`
  width: 367px;
  background: #2FC18C;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  color: #001813;
  border-style: none;
`;

export const SpanCurrentUser = styled.span`
  display: inline-block;
  padding-top: 5px;
  margin-top: -1%;
  width: 359px;
  height: 55px;
  background: #421981;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  text-align: center;
  color: #F2FFFC;
`;

export const ButtonExit = styled.button`
  width: 180px;
  height: 60px;
  background: #056CF9;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  text-align: center;

  border-style: none;
  color: #F2FFFC;
`;

export const TitleAdmRegister = styled.h1`
  margin-top: 8px;
  margin-left: 15px;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: flex-end;

  color: #343434;
`;

export const SectionAdm = styled.section`
  width: 1640px;
  height: 200px;
  margin: 80px auto;
  background: green;
  background: #EAF1EF;
  border: 1px solid #B1C2BE;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const FormRegister = styled.form`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  align-items: center;
`;

export const LabelName = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-indent: 19px;

  color: #001813;
`;

export const InputName = styled.input`
  width: 300px;
  background: #FFFFFF;
  border: 1px solid #001813;
  box-sizing: border-box;
  border-radius: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-indent: 20px;
  color: #828282;
  margin-left: 8px;
`;

export const LabelEmail = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-indent: 19px;
  margin-left: -30px;
  color: #001813;
`;

export const InputEmail = styled.input`
  width: 280px;
  background: #FFFFFF;
  border: 1px solid #001813;
  box-sizing: border-box;
  border-radius: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-indent: 20px;
  color: #828282;
  margin-left: 8px;
`;

export const PasswordLabel = styled.label`
  margin-left: -30px;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-indent: 19px;

  color: #001813;
`;

export const InputPassword = styled.input`
  width: 200px;
  background: #FFFFFF;
  border: 1px solid #001813;
  box-sizing: border-box;
  border-radius: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-indent: 20px;
  color: #828282;
  margin-left: 8px;
`;

export const LabelType = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-indent: 19px;
  margin-left: -30px;
  color: #001813;
`;

export const SelectType = styled.select`
  margin-left: 8px;
  background: #FFFFFF;
  border: 1px solid #001813;
  box-sizing: border-box;
  border-radius: 5px;
  width: 180px;
  height: 35px;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-indent: 20px;
  color: #001813;
`;

export const ButtonRegister = styled.button`
  width: 200px;
  height: 36px;
  background: #036B52;
  border-radius: 10px;
  
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 26px;
  text-align: center;
  color: #F2FFFC;
`;
