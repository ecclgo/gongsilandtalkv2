import styled from 'styled-components';

interface Props {
  emailRegi: boolean;
}

export const Label = styled.span`
  position: absolute;
  top: 80px;
  bottom: 378px;
  left: 218px;
  right: 217px;
  width: 209px;
  height: 28px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  font-size: 22px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
`;

export const SignUpLabel = styled(Label)`
  left: 184px;
  width: 210px;
`;

export const EmailLabel = styled.span`
  position: absolute;
  left: 79px;
  top: 66px;
  width: 38px;
  height: 18px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #666666;
`;

export const PassLabel = styled(EmailLabel)`
  top: 154px;
  width: 50px;
`;

export const AllAgree = styled.span`
  position: absolute;
  top: 302px;
  left: 101px;

  width: 94px;
  height: 18px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #000000;
`;

export const DetailAgree = styled.span`
  position: absolute;
  left: 42px;
  width: 217px;
  height: 16px;
  cursor: pointer;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #666666;
`;

export const AuthName = styled.span`
  position: absolute;
  top: 146px;
  left: 80px;

  width: 26px;
  height: 18px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #666666;
`;

export const AuthPhone = styled(AuthName)`
  top: 234px;
  left: 80px;
  bottom: 274px;
  right: 447px;

  width: 51px;
`;
