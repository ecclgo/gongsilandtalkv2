import styled from 'styled-components';

export const RepleBox = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    width: 324px;
    height: 54px;
    left: 18px;
    top: 560px;
    background-color: #ffffff;
  }
`;

export const RepleUsername = styled.span`
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    width: 50px;
    height: 16px;
    left: 56px;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    align-items: center;
    letter-spacing: -0.03em;

    color: #666666;
  }
  display: none;
`;

export const RepleProfileBox = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    width: 30px;
    height: 30px;
    left: 18px;
    background: #f0f0f0;
    border: 1px solid #9b9b9b;
    box-sizing: border-box;
    border-radius: 15px;
  }
  display: none;
`;

export const RepleContents = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    left: 56px;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    margin-top: 18px;

    display: flex;
    align-items: center;
    letter-spacing: -0.03em;

    color: #282828;
  }
  display: none;
`;

export const RepleFooter = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    width: 111px;
    height: 16px;
    left: 56px;
    margin-top: 45px;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.02em;

    color: #9b9b9b;
  }
  display: none;
`;

export const RepleBtn = styled.button`
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;

    left: 175px;
    margin-top: 45px;
    width: 50px;
    height: 16px;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.02em;

    color: #666666;
  }
  display: none;
`;

export const MainRepleBox = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  display: flex;
  width: 702px;
  left: 38px;
  top: 1180px;
  background-color: #ffffff;
`;

export const MainRepleUsername = styled.span`
  @media screen and (max-width: 768px) {
    display: none;
  }
  display: flex;
  position: absolute;
  margin-bottom: 12px;
  left: 50px;
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

export const MainRepleProfileBox = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  display: flex;
  position: absolute;
  left: 0px;
  margin-top: 21px;
  width: 36px;
  height: 36px;
  margin-top: 0px;

  background-color: #f0f0f0;
  border-radius: 1px solid #9b9b9b;
  border-radius: 15px;
`;

export const MainRepleContents = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  display: flex;
  position: absolute;
  width: 616px;
  left: 50px;
  top: 24px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.03em;
  color: #282828;
`;

export const MainRepleFooter = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  display: flex;

  width: 111px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.02em;
  left: 50px;
  margin-top: 50px;

  color: #9b9b9b;
`;

export const MainRepleBtn = styled.button`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  display: flex;
  width: 50px;
  height: 16px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.02em;
  left: 165px;
  margin-top: 50px;

  color: #666666;
`;
