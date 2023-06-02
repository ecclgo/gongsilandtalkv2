import styled from 'styled-components';

export const MyPage = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    left: 0px;
    top: 0px;
    height: 500px;
  }
  position: absolute;
  display: flex;
  width: 359px;

  left: 1560px;
  top: 9px;
  background-color: #f0f0f0;
  height: 866px;
  transition: all 0.35s;
  z-index: 99999;
`;

export const TopBar = styled.div`
  position: absolute;
  width: 360px;
  height: 50px;
  left: 0px;
  top: 0px;
  background-color: #ffffff;
`;

export const TopBarText = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;

  position: absolute;
  width: 50px;
  height: 18px;
  left: calc(50% - 47px / 2 - 0px);
  top: calc(50% - 18px / 2);

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
`;

export const CloseBtn = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  display: flex;
  left: 20px;
  top: 30%;
  cursor: pointer;
`;

export const MyInfoBox = styled.div`
  position: absolute;
  width: 360px;
  height: 154px;
  left: 0px;
  top: 51px;
  background-color: #ffffff;
`;

export const LoginInfo = styled.span`
  position: absolute;
  width: 184px;
  height: 38px;
  left: 68px;
  top: 31px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #343232;
`;

export const LoginBtn = styled.button`
  position: absolute;
  width: 155px;
  height: 44px;
  left: 20px;
  bottom: 28px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  background-color: #f16341;
  border-radius: 5px;
  color: #ffffff;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
`;

export const RegiBtn = styled.button`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 155px;
  height: 44px;
  left: 185px;
  bottom: 28px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  text-align: center;
  letter-spacing: -0.03em;
  color: #f16341;
  border: 1px solid #f16341;
  border-radius: 5px;
`;

export const SubBox = styled.div`
  @media screen and (max-width: 768px) {
    height: 410px;
  }
  position: absolute;
  width: 360px;
  height: 866px;
  left: 0px;
  top: 214px;
  background-color: #ffffff;
`;

export const CenterCallBtn = styled.button`
  position: absolute;
  display: flex;
  bottom: 38px;
  left: 16px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 10px 0px 0px;
  gap: 6px;

  width: 328px;
  height: 50px;

  border: 1px solid #f16341;
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
  color: #f16341;
`;

export const PhoneLogo = styled.div`
  width: 14.07px;
  height: 14px;
  position: absolute;
  left: 70px;
  top: 15px;
`;

export const LoggedInUsername = styled.div`
  position: absolute;
  width: 65px;
  height: 20px;
  left: 68px;
  top: 50px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #000000;
`;

export const CorpName = styled.div`
  position: absolute;
  width: 150px;
  height: 16px;
  left: 68px;
  top: 33px;

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

export const MyBox = styled.div`
  position: absolute;
  width: 320px;
  height: 85px;
  left: 20px;
  top: 90px;

  box-sizing: border-box;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
`;

export const MyLoggedInInfoBox = styled.div`
  position: absolute;
  width: 360px;
  height: 311px;
  left: 0px;
  top: 51px;
  background-color: #ffffff;
`;

export const MyProductBox = styled.div`
  position: absolute;
  display: flex;
  width: 53px;
  height: 48px;
  left: 32px;
  top: 19px;
  cursor: pointer;
`;

export const LikedProduct = styled.div`
  position: absolute;
  width: 53px;
  height: 47px;
  left: 131px;
  top: 20px;
  cursor: pointer;
`;

export const ContractList = styled.div`
  position: absolute;
  width: 69px;
  height: 48px;
  left: 223px;
  top: 19px;
  cursor: pointer;
`;

export const SubMenuBox = styled.div`
  position: absolute;
  width: 320px;
  height: 98px;
  left: 0px;
  top: 100px;
`;

export const SubMenu1 = styled.div`
  position: absolute;
  width: 320px;
  height: 18px;
  left: 0px;
  top: 0px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #000000;

  cursor: pointer;
`;

export const SubMenu2 = styled(SubMenu1)`
  margin-top: 40px;
`;

export const SubMenu3 = styled(SubMenu1)`
  margin-top: 80px;
`;

export const NoticeBox = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    height: 260px;
  }
  position: absolute;
  width: 360px;
  height: 709px;
  left: 0px;
  top: 371px;

  background-color: #ffffff;
`;

export const SubMenu4 = styled(SubMenu1)`
  left: 20px;
  top: 28px;
`;

export const AlarmBox = styled.div`
  position: absolute;
  width: 18px;
  height: 22px;
  left: 322px;
  top: 14px;
  cursor: pointer;
`;
