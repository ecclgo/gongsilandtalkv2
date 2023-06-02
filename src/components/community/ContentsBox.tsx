import styled from 'styled-components';

export const ContentsBox = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  width: 778px;
  height: 1200px;
  left: 370px;
  top: 290px;
  border: none;
  background-color: #ffffff;
`;

export const Ytitle = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }

  width: 532px;
  height: 25px;
  margin-left: 38px;
  cursor: pointer;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;

  letter-spacing: -0.03em;

  color: #000000;
`;

export const YContents = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }

  width: 520px;
  height: 44px;

  margin-left: 38px;
  margin-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: '-webkit-box';
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  flex-direction: row;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.03em;

  color: #666666;
`;

export const YFooter = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-left: 38px;
  letter-spacing: -0.02em;

  color: #9b9b9b;
  margin-top: 16px;
  margin-bottom: 22px;
`;

export const YUsername = styled.span`
  @media screen and (max-width: 768px) {
    display: none;
  }
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-left: 8px;
  margin-top: 10px;
  align-items: center;
  letter-spacing: -0.03em;

  color: #282828;
`;

export const ProfileBox = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  margin-left: 38px;
`;

export const Line = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  width: 702px;
  height: 0px;

  opacity: 0.6;

  border: 1px solid #d5d5d5;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const MovingBox = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  display: none;
  width: 379px;
  height: 319px;
  left: 62%;
  top: 40%;

  background-color: #ffffff;
  border-radius: 10px;
`;
