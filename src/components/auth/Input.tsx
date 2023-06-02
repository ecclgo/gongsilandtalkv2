import styled from 'styled-components';

export const Input = styled.input`
  position: absolute;
  left: 80px;
  right: 80px;
  bottom: 296px;

  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 70px 12px 14px;
  gap: 10px;

  width: 418px;
  height: 44px;

  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  flex: none;
  order: 0;
  flex-grow: 0;

  :focus {
    outline: 1px;
    outline-color: #f16341;
    outline-style: solid;
  }
`;

export const EInput = styled(Input)`
  top: 146px;
`;
export const PInput = styled(Input)`
  top: 196px;
`;

export const RegiEInput = styled(Input)`
  top: 88px;
`;

export const RegiPInput = styled(Input)`
  top: 180px;
`;

export const RegiPInputConfirm = styled(Input)`
  top: 230px;
`;

export const AuthNameInput = styled(Input)`
  top: 172px;
  left: 80px;
`;

export const AuthPhoneNum = styled(Input)`
  top: 260px;
  left: 80px;
  width: 298px;
  height: 44px;
`;

export const AuthPhoneSMS = styled(AuthPhoneNum)`
  top: 310px;
`;
