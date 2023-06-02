import styled from 'styled-components';

type Props = {
  authCode: boolean;
};

export const Button = styled.button`
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  display: flex;

  width: 418px;
  height: 54px;
  left: 80px;
  top: 296px;
  bottom: 136px;
  right: 80px;

  background-color: #f16341;
  border-radius: 5px;
  color: #ffffff;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

export const NextBtn = styled.span`
  position: absolute;
  top: 512px;
  left: 79px;

  width: 418px;
  height: 54px;

  background-color: #f16341;
  color: #ffffff;
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: #ffffff;
`;

export const AuthSend = styled.button`
  position: absolute;
  top: 260px;
  left: 384px;
  right: 80px;
  bottom: 222px;
  height: 44px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 14px;
  gap: 4px;

  background-color: #f16341;
  border-radius: 5px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: #ffffff;
`;

export const AuthConfirm = styled(AuthSend)<Props>`
  top: 310px;
  height: 44px;
  background-color: ${(props) => `${props.authCode ? '#D5D5D5' : '#F16341'}`};
`;

export const ConfirmSend = styled.button`
  position: absolute;
  top: 392px;
  left: 80px;
  right: 80px;
  bottom: 80px;

  width: 418px;
  height: 54px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  background-color: #f16341;
  border-radius: 5px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: #ffffff;
`;
