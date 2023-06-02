import styled from 'styled-components';

type Props = {
  clickedTab: number;
};

export const GlobalBox = styled.div`
  background-color: #ffffff;
  width: 1920px;
  height: 1200px;
`;

export const AlarmText = styled.span`
  position: absolute;
  width: 44px;
  height: 30px;
  left: calc(50% - 44px / 2);
  top: 50px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: #000000;
`;

export const SubTabBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 400px;
  height: 51px;
  left: calc(50% - 400px / 2);
  top: 148px;

  background: #ffffff;
  z-index: 99999;
`;

export const TopBox = styled.div`
  position: absolute;
  width: 1920px;
  height: 147px;
  left: 0px;
  top: 60px;

  background: #ffffff;
  border-bottom: 1px solid #f0f0f0;
`;

export const ProductAlarmText = styled.div<Props>`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: ${(props) => `${props.clickedTab === 0 ? '#2A2828' : '#9D9999'}`};

  position: absolute;
  top: -30px;
  left: 50px;
  cursor: pointer;
`;

export const UnderLine = styled.div<Props>`
  position: absolute;
  width: 150px;
  height: 1px;
  border: 1px solid;
  color: black;
  top: -1px;
  left: ${(props) => `${props.clickedTab === 0 ? '23px' : '250px'}`};
`;

export const ProductInfoAlarmText = styled.div<Props>`
  position: absolute;
  left: 275px;
  top: -30px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: ${(props) => `${props.clickedTab === 1 ? '#2A2828' : '#9D9999'}`};
  cursor: pointer;
`;

export const NotCheckedAlarm = styled.span`
  position: absolute;
  top: 245px;
  left: 472px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #2a2828;
`;

export const NotCheckedCnt = styled.span`
  color: #f16341;
  margin-left: 5px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
`;

export const InfoMessage = styled.span`
  position: absolute;
  top: 555px;
  left: 890px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  text-align: center;
  letter-spacing: -0.03em;

  color: #2a2828;
`;

export const InfoMessageSub = styled.span`
  position: absolute;
  width: 400px;
  height: 20px;
  left: calc(50% - 400px / 2);
  top: 581px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  text-align: center;
  letter-spacing: -0.03em;

  color: #9d9999;
`;
