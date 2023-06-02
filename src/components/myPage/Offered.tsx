import styled from 'styled-components';

type Props = {
  subTab?: number;
  innerTab?: number;
  needTab?: number;
};

export const AddressBox = styled.div`
  @media screen and (max-width: 768) {
  }
  position: absolute;
  display: flex;
  top: 140px;

  box-sizing: border-box;
  width: 976px;
  height: 217px;
  left: 472px;

  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
`;

export const OfferTitle = styled.span`
  @media screen and (max-width: 768px) {
  }
  position: absolute;
  width: 360px;
  height: 30px;
  left: 853px;
  top: 96px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #2a2828;
`;

export const PageCnt = styled.span`
  @media screen and (max-width: 768px) {
  }
  position: absolute;
  width: 46px;
  height: 30px;
  left: 170px;
  top: 0px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  margin-left: 5px;
  margin-right: 5px;

  color: #9b9b9b;
`;

export const AddressTitle = styled.span`
  position: absolute;
  width: 229px;
  height: 23px;
  left: 22px;
  top: 20px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #000000;
`;

export const CitySearchBox = styled.div`
  position: absolute;
  top: 61px;
  left: 22px;
`;

export const SelectedCityInfo = styled.span`
  position: absolute;
  width: 135px;
  height: 18px;
  left: 0px;
  top: 45px;

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

export const ConditionBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 976px;
  height: 327px;
  left: 472px;
  top: 370px;

  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
`;

export const ConditionText = styled.span`
  position: absolute;
  width: 240px;
  height: 23px;
  left: 22px;
  top: 20px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #000000;
`;

export const SubTabs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;

  position: absolute;
  width: 155px;
  height: 40px;
  left: 22px;
  top: 61px;
`;

export const BuildingTab = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;
  left: 0px;

  width: 65px;
  height: 40px;

  border-radius: 50px;

  flex: none;
  order: 0;
  flex-grow: 0;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  border: ${(props) =>
    `${props.subTab === 0 ? '1px solid #F16341' : '1px solid #D5D5D5'}}`};
  background: ${(props) =>
    `${props.subTab === 0 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}}`};
  color: ${(props) => `${props.subTab === 0 ? '#F16341' : '#9E9E9E'}}`};
  cursor: pointer;
`;

export const OfficeTab = styled.div<Props>`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;

  left: 75px;
  gap: 10px;
  width: 80px;
  height: 40px;
  border-radius: 50px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: ${(props) => `${props.subTab === 1 ? '#F16341' : '#9E9E9E'}}`};
  background-color: ${(props) =>
    `${props.subTab === 1 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}}`};
  border: ${(props) =>
    `${props.subTab === 1 ? '1px solid #F16341' : '1px solid #D5D5D5'}}`};
  cursor: pointer;
`;

export const MinimumArea = styled.div`
  position: absolute;
  top: 119px;
  left: 22px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #686564;
`;

export const Meter = styled.input`
  position: absolute;
  top: 22px;
  width: 130px;
  height: 44px;
  padding: 12px 0px 12px 14px;

  gap: 10px;

  border: 1px solid #d5d4d4;
  border-radius: 5px;
`;

export const MeterBox = styled.div`
  position: absolute;
  top: 2px;
  left: 160px;
`;

export const ChangeMeter = styled.input`
  position: absolute;
  width: 130px;
  height: 44px;
  padding: 12px 0px 12px 14px;
  left: 180px;
  top: 22px;

  border: 1px solid #d5d4d4;
  border-radius: 5px;
`;

export const UserBox = styled.div`
  position: absolute;
  width: 328px;
  height: 90px;
  left: 22px;
  top: 180px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #686564;
`;

export const UserInput = styled.input`
  display: flex;
  width: 305px;
  height: 44px;
  position: absolute;
  padding: 12px 0px 12px 14px;
  top: 70px;
  border: 1px solid #d5d4d4;
  border-radius: 5px;
`;

export const UserText = styled.span`
  position: absolute;
  top: 80px;
  left: 320px;
`;

export const NextBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 14px;
  gap: 4px;

  color: #ffffff;
  position: absolute;
  width: 150px;
  height: 46px;
  left: 1298px;
  top: 950px;

  background: #f16341;
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
`;

export const SelectedNum = styled.span`
  color: #f16341;
  margin-left: 5px;
  margin-right: 5px;
`;

export const TypeOfPlace = styled.span`
  position: absolute;
  width: 328px;
  height: 90px;
  left: 22px;
  top: 180px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #686564;
`;

export const PlaceInput = styled.input`
  display: flex;
  width: 305px;
  height: 44px;
  position: absolute;
  padding: 12px 0px 12px 14px;
  top: 70px;
  border: 1px solid #d5d4d4;
  border-radius: 5px;
`;

export const BudgetBox = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 976px;
  height: 207px;
  left: 472px;
  top: 166px;

  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
`;

export const BudgetText = styled.span`
  position: absolute;
  width: 175px;
  height: 23px;
  left: 22px;
  top: 20px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #000000;
`;

export const BuyingTab = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 15px;
  gap: 10px;

  position: absolute;
  left: 22px;
  top: 61px;

  width: 59px;
  height: 36px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  background: ${(props) =>
    `${props.innerTab === 0 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}`};
  border: ${(props) =>
    `${props.innerTab === 0 ? '1px solid #F16341' : '1px solid #D5D4D4'}`};
  color: ${(props) => `${props.innerTab === 0 ? '#F16341' : '#9E9E9E'}`};

  border-radius: 50px;
  cursor: pointer;
`;

export const RentTab = styled(BuyingTab)`
  left: 90px;
  background: ${(props) =>
    `${props.innerTab === 1 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}`};
  border: ${(props) =>
    `${props.innerTab === 1 ? '1px solid #F16341' : '1px solid #D5D4D4'}`};
  color: ${(props) => `${props.innerTab === 1 ? '#F16341' : '#9E9E9E'}`};
`;

export const BuyingText = styled.span`
  position: absolute;
  left: 22px;
  top: 111px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #686564;
`;

export const BudgetInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 0px 12px 14px;
  gap: 10px;

  position: absolute;
  width: 291px;
  height: 44px;
  top: 137px;
  left: 22px;

  background: #ffffff;
  border: 1px solid #d5d4d4;
  border-radius: 5px;
`;

export const WonText = styled.span`
  position: absolute;
  left: 300px;
  top: 35px;
  width: 29px;
  height: 20px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: #686564;
`;

export const CompanyInfoBox = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 976px;
  height: 245px;
  left: 472px;
  top: 387px;

  background: #ffffff;

  border: 1px solid #f0f0f0;
  border-radius: 10px;
`;

export const InfoText = styled(BudgetText)`
  width: 280px;
`;

export const CompanyName = styled.span`
  position: absolute;
  width: 38px;
  height: 18px;
  left: 22px;
  top: 61px;

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

export const CompanyType = styled(CompanyName)`
  top: 149px;
`;

export const CompanyNameInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 70px 12px 14px;
  gap: 10px;

  position: absolute;
  width: 328px;
  height: 44px;
  left: 22px;
  top: 87px;

  background: #ffffff;

  border: 1px solid #d5d4d4;
  border-radius: 5px;
`;

export const CompanyTypeInput = styled(CompanyNameInput)`
  top: 175px;
`;

export const RequestBox = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 976px;
  height: 321px;
  left: 472px;
  top: 166px;

  background: #ffffff;

  border: 1px solid #f0f0f0;
  border-radius: 10px;
`;

export const RequestText = styled(InfoText)``;

export const RequestYN = styled.span`
  position: absolute;
  width: 78px;
  height: 18px;
  left: 22px;
  top: 61px;

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

export const NeededBox = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;

  width: 94px;
  height: 40px;
  position: absolute;
  top: 87px;
  left: 22px;

  background: #ffffff;

  background: ${(props) =>
    `${props.needTab === 0 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}`};
  border: ${(props) =>
    `${props.needTab === 0 ? '1px solid #F16341' : '1px solid #D5D4D4'}`};
  color: ${(props) => `${props.needTab === 0 ? '#F16341' : '#9E9E9E'}`};

  border-radius: 50px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  cursor: pointer;
`;

export const NotNeededBox = styled(NeededBox)`
  left: 130px;
  width: 150px;
  border-radius: 50px;

  background: ${(props) =>
    `${props.needTab === 1 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}`};
  border: ${(props) =>
    `${props.needTab === 1 ? '1px solid #F16341' : '1px solid #D5D4D4'}`};
  color: ${(props) => `${props.needTab === 1 ? '#F16341' : '#9E9E9E'}`};
`;

export const RequestSpan = styled(RequestYN)`
  top: 145px;
`;

export const RequestTextBox = styled.input`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 14px;
  gap: 10px;

  position: absolute;
  width: 714px;
  height: 124px;
  left: 22px;
  top: 170px;

  background: #ffffff;

  border: 1px solid #d5d4d4;
  border-radius: 5px;
`;

export const OfferedBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 14px;
  gap: 4px;

  position: absolute;
  width: 150px;
  height: 46px;
  left: 1298px;
  top: 950px;

  background: #f16341;
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

export const PrevBtn = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 14px;
  gap: 4px;

  position: absolute;
  width: 150px;
  height: 46px;
  left: 472px;
  top: 950px;

  background: #ffffff;

  border: 1px solid #d5d4d4;
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

  color: #2a2828;
`;
