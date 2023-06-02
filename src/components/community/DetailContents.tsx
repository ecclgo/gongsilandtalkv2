import styled from 'styled-components';

export const DetailTopBox = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 0px;
    background-color: #ffffff;
    width: 359px;
    left: 0px;
  }
  display: none;
`;

export const DetailBox = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    width: 359px;
    height: 620px;
    background-color: #ffffff;
    left: 0px;
    top: -12px;
  }
  position: absolute;
  width: 778px;
  height: 1600px;
  background-color: #ffffff;
  left: 21%;
  right: 40%;
  margin-top: 4.5%;
`;

export const UserInfoBox = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    width: 205px;
    top: 171px;
    left: 19px;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 220px;
  height: 40px;
  left: 38px;
  top: 173px;
`;

export const DetailProBox = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
`;

export const TopLine = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    top: 70px;
    left: 0px;
    width: 359px;
    border: 1px solid #f0f0f0;
  }
  display: none;
`;

export const DetailLine = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    top: 230px;
    left: 0px;
    width: 359px;
  }
  position: absolute;
  top: 243px;
  left: 38px;

  width: 702px;
  border: 1px solid #f0f0f0;
`;

export const DetailContent = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    width: 324px;
    height: 42px;
    left: 18px;
    top: 247px;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;

    letter-spacing: -0.03em;

    color: #000000;
  }
  position: absolute;
  top: 260px;
  width: 702px;
  left: 38px;
`;

export const ImgBox = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    width: 324px;
    height: 182px;
    left: 18px;
    top: 400px;
  }
  position: absolute;
  width: 702px;
  height: 394px;
  top: 436px;
  left: 38px;
`;

export const EndLine = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    left: 0px;
    top: 500px;
    border: 1px solid #f0f0f0;
    width: 359px;
  }
  position: absolute;
  top: 1100px;
  left: 38px;

  width: 702px;
  border: 1px solid #f0f0f0;
`;

export const Repl = styled.input`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  display: flex;
  left: 52px;
  bottom: 46px;
  width: 674px;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  height: 80px;

  color: #333333;
`;
