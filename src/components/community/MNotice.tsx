import styled from 'styled-components';

export const MNoticeBox = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 0px;
    gap: 6px;

    position: absolute;
    width: 40px;
    height: 78px;
    top: 40px;
  }
  display: none;
`;

export const MNoticeTag = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 8px;
    gap: 10px;

    width: 40px;
    height: 25px;

    background-color: #f0f0f0;
    border-radius: 6px;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    letter-spacing: -0.03em;
    color: #666666;
  }
  display: none;
`;

export const MNoticeTitle = styled.span`
  @media screen and (max-width: 768px) {
    display: flex;

    position: absolute;
    width: 274px;
    height: 18px;
    left: 55px;
    margin-top: -22px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;

    letter-spacing: -0.03em;

    color: #343232;
  }
  display: none;
`;
