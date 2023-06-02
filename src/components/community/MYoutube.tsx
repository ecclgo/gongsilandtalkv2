import styled from 'styled-components';

export const MYoutubeBox = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    width: 360px;
    height: 456px;
    left: -15px;
    top: 130px;
    overflow: scroll;

    background-color: #ffffff;
  }
`;

export const MYoutubeContents = styled.div`
  @media screen and (max-width: 768px) {
    width: 324px;
    height: 138px;
    margin-top: 14px;
    margin-left: 18px;
    right: 18px;
    bottom: 14px;

    background-color: #ffffff;
  }
`;

export const MYoutubeProfileBox = styled.div`
  @media screen and (max-width: 768px) {
    box-sizing: border-box;

    width: 30px;
    height: 30px;
    left: 0px;
    top: 0px;
    border-radius: 15px;

    background-color: #f0f0f0;

    border: 1px solid #9b9b9b;
  }
`;

export const MYoutubeProfileName = styled.span`
  @media screen and (max-width: 768px) {
    position: absolute;
    width: 47px;
    height: 16px;
    left: 57px;
    margin-top: 8px;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: -0.03em;

    color: #282828;
  }
`;

export const MYoutubeContentsBox = styled.div`
  @media screen and (max-width: 768px) {
    width: 324px;
    height: 95px;
    top: 43px;

    background-color: #ffffff;
  }
`;

export const MYoutubeContentsTitle = styled.span`
  @media screen and (max-width: 768px) {
    width: 216px;
    height: 20px;
    left: 0px;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    letter-spacing: -0.03em;
    color: #343232;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const MYoutubeContentsDetail = styled.div`
  position: absolute;
  width: 216px;
  height: 36px;
  left: 18px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.03em;

  color: #666666;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const MYoutubeFooter = styled.div`
  position: absolute;
  width: 163px;
  height: 15px;
  left: 19px;
  margin-top: 38px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.02em;

  color: #9b9b9b;
`;

export const MYoutubeImg = styled.div`
  position: absolute;
  width: 92px;
  height: 92px;
  left: 250px;
  margin-top: 40px;
`;

export const MYoutubeLine = styled.div`
  @media screen and (max-width: 768px) {
    width: 359px;
    height: 0px;
    opacity: 0.6;
    border: 1px solid #f0f0f0;
  }
`;
