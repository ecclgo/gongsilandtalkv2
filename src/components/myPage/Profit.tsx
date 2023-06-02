import styled from 'styled-components';

type Props = {
  SubTab?: number;
};

export const ProfitGlobal = styled.div`
  position: relative;
  top: 60px;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

export const ProfitText = styled.span`
  position: absolute;
  width: 134px;
  height: 30px;
  left: calc(50% - 134px / 2);
  top: 68px;

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
  top: 156px;

  background: #ffffff;
`;

export const ProfitBox = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px;

  position: absolute;
  top: 0px;
  left: 0px;
  width: 200px;
  height: 51px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  cursor: pointer;

  color: ${(props) => `${props.SubTab === 0 ? '#2A2828' : '#9D9999'}`};
  border-bottom: ${(props) =>
    `${props.SubTab === 0 ? '2px solid #2A2828' : 'none'}`};
`;

export const LoanBox = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px;

  position: absolute;
  left: 200px;
  width: 200px;
  height: 51px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: ${(props) => `${props.SubTab === 1 ? '#2A2828' : '#9D9999'}`};
  border-bottom: ${(props) =>
    `${props.SubTab === 1 ? '2px solid #2A2828' : 'none'}`};
  cursor: pointer;
`;

export const Line = styled.div`
  position: absolute;
  width: 1920px;
  border: 1px solid #f0f0f0;
  top: 198px;
`;

export const InfoMsg = styled.span`
  position: absolute;
  width: 582px;
  height: 22px;
  left: 472px;
  top: 245px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  letter-spacing: -0.03em;

  color: #9d9999;
`;

export const LoanCheckBox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  height: 16px;
  width: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;

  position: absolute;
  top: 300px;
  left: 470px;

  margin-top: 5px;
  margin-right: 10px;

  &:checked {
    &::before {
      content: '\\2713';
      display: block;
      height: 16px;
      width: 16px;
      background-color: #f16341;
      border-radius: 3px;
      text-align: center;
      line-height: 1rem;
      font-size: 1rem;
      color: white;
    }
  }
`;

export const IncludeLoanText = styled.span`
  position: absolute;
  width: 53px;
  height: 18px;
  top: 305px;
  left: 500px;

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

export const BuyingPriceBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 22px;

  position: absolute;
  width: 678px;
  height: 70px;
  left: 472px;
  top: 331px;
`;

export const BuyingPriceText = styled.span`
  position: absolute;
  width: 38px;
  height: 18px;
  left: 0px;
  top: 0px;

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

export const BuyingInput = styled.input`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 0px 12px 14px;
  gap: 10px;

  position: absolute;
  top: 25px;
  width: 291px;
  height: 44px;

  background: #ffffff;
  border: 1px solid #d5d4d4;
  border-radius: 5px;
`;

export const WonText = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  position: absolute;
  left: 300px;
  top: 40px;

  color: #686564;
`;

export const TaxRate = styled.span`
  position: absolute;
  width: 51px;
  height: 18px;
  left: 350px;
  top: 0px;

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

export const TaxInput = styled.input`
  box-sizing: border-box;
  position: absolute;
  left: 350px;
  top: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 0px 12px 14px;
  gap: 10px;

  width: 291px;
  height: 44px;

  background: #ffffff;

  border: 1px solid #d5d4d4;
  border-radius: 5px;
`;

export const PercentText = styled.span`
  position: absolute;
  left: 650px;
  top: 40px;
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

export const EtcPriceBox = styled.div`
  position: absolute;
  width: 328px;
  height: 70px;
  left: 472px;
  top: 419px;
`;

export const EtcPriceText = styled.span`
  position: absolute;
  width: 205px;
  height: 18px;
  left: 0px;
  top: 0px;

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

export const EtcInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 0px 12px 14px;
  gap: 10px;

  position: absolute;
  top: 25px;

  width: 291px;
  height: 44px;

  background: #ffffff;
  border: 1px solid #d5d4d4;
  border-radius: 5px;
`;

export const EtcPercentText = styled(PercentText)`
  position: absolute;
  top: 40px;
  left: 300px;
`;

export const RentFeeBox = styled.div`
  position: absolute;
  width: 328px;
  height: 70px;
  left: 472px;
  top: 507px;
`;

export const RentAmountText = styled.span`
  position: absolute;
  width: 38px;
  height: 18px;
  left: 0px;
  top: 0px;

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

export const RentInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 0px 12px 14px;
  gap: 10px;

  position: absolute;
  width: 135px;
  height: 44px;
  left: 0px;
  top: 25px;

  background: #ffffff;

  border: 1px solid #d5d4d4;
  border-radius: 5px;
`;

export const SlashText = styled.span`
  position: absolute;
  top: 35px;
  left: 150px;
  width: 5px;
  height: 18px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: #686564;
`;

export const MonthRentFee = styled.input`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 0px 12px 14px;
  gap: 10px;

  position: absolute;
  left: 170px;
  top: 25px;
  width: 135px;
  height: 44px;

  background: #ffffff;
  border: 1px solid #d5d4d4;
  border-radius: 5px;
`;

export const MonthRentFeeText = styled.span`
  position: absolute;
  width: 51px;
  height: 18px;
  left: 170px;
  top: 0px;

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

export const DivLine = styled.div`
  position: absolute;
  width: 976px;
  height: 0px;
  left: 0px;
  top: 90px;

  border: 1px solid #f0f0f0;
`;

export const LoanAmountBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 22px;

  position: absolute;
  width: 678px;
  height: 70px;
  left: 472px;
  top: 613px;
`;

export const LoanAmountText = styled.div`
  position: absolute;
  width: 51px;
  height: 18px;
  left: 0px;
  top: 0px;

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

export const LoanAmountInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 0px 12px 14px;
  gap: 10px;

  position: absolute;
  top: 25px;
  width: 291px;
  height: 44px;

  background: #ffffff;

  border: 1px solid #d5d4d4;
  border-radius: 5px;
`;

export const LoanAmountRate = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 0px 12px 14px;
  gap: 10px;

  position: absolute;
  top: 25px;
  left: 350px;
  width: 291px;
  height: 44px;

  background: #ffffff;

  border: 1px solid #d5d4d4;
  border-radius: 5px;
`;

export const CalcBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 976px;
  height: 50px;
  left: calc(50% - 976px / 2);
  top: 721px;

  background: #f16341;
  border-radius: 5px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: #ffffff;
`;
