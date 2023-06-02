import styled from 'styled-components';

export const BackArrow = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  display: flex;
  width: 9px;
  height: 16px;
  top: 32px;
  left: 40px;
  z-index: 99999;
  cursor: pointer;
`;

export const MBackArrow = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    width: 8px;
    height: 14px;
    left: 20px;
    top: 30px;
    z-index: 99999;
    cursor: pointer;
  }
  display: none;
`;

export const GongtalkBox = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 8px;
    gap: 10px;

    position: absolute;
    width: 74px;
    height: 26px;
    left: 19px;
    top: 90px;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;

    text-align: center;
    letter-spacing: -0.03em;

    background: rgba(241, 99, 65, 0.1);
    border-radius: 6px;

    color: #f16341;

    cursor: pointer;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 8px;
  gap: 10px;

  position: absolute;
  width: 82px;
  height: 30px;
  left: 38px;
  top: 76px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  text-align: center;
  letter-spacing: -0.03em;

  background: rgba(241, 99, 65, 0.1);
  border-radius: 6px;

  color: #f16341;

  cursor: pointer;
`;
