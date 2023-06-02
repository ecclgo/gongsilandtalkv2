import styled from 'styled-components';

type Props = {
  SubTabNum?: number;
}

export const InfoText = styled.div`
  position: absolute;
  width: 533px;
  height: 44px;
  left: 473px;
  top: 245px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  letter-spacing: -0.03em;

  color: #9d9999;
`;

export const SubTabBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 348px;
  height: 40px;
  left: 472px;
  top: 317px;
`;

export const SubTab1 = styled.div<Props>`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 14px;
  gap: 10px;

  width: 116px;
  height: 40px;

  
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  
  background-color: ${(props) => `${props.SubTabNum === 0 ? '#FFFFFF' : '#f0f0f0'}`};;
  border: ${(props) => `${props.SubTabNum === 0 ? '1px solid #9d9999' : '1px solid #d5d4d4'}`};
  color: ${(props) => `${props.SubTabNum === 0 ? '#2a2828' : '#9d9999'}`};
  cursor: pointer;
`;

export const SubTab2 = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 14px;
  gap: 10px;

  width: 116px;
  height: 40px;

  border-width: 1px 0px;
  border-style: solid;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  
  background-color: ${(props) => `${props.SubTabNum === 1 ? '#FFFFFF' : '#f0f0f0'}`};;
  border: ${(props) => `${props.SubTabNum === 1 ? '1px solid #9d9999' : '1px solid #d5d4d4'}`};
  color: ${(props) => `${props.SubTabNum === 1 ? '#2a2828' : '#9d9999'}`};
  cursor: pointer;
`;

export const SubTab3 = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 14px;
  gap: 10px;

  width: 116px;
  height: 40px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  
  background-color: ${(props) => `${props.SubTabNum === 2 ? '#FFFFFF' : '#f0f0f0'}`};;
  border: ${(props) => `${props.SubTabNum === 2 ? '1px solid #9d9999' : '1px solid #d5d4d4'}`};
  color: ${(props) => `${props.SubTabNum === 2 ? '#2a2828' : '#9d9999'}`};
  cursor: pointer;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 14px;

  position: absolute;
  width: 219px;
  height: 18px;
  left: 472px;
  top: 379px;
`;

export const CheckBox1 = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  height: 16px;
  width: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;

  position: absolute;
  left: -10px;
  margin-top: 5px;
  margin-left: 10px;

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

export const CheckboxName1 = styled.span`
  position: absolute;
  left: 25px;
  top: 5px;
  width: 51px;
  height: 18px;

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

export const CheckBox2 = styled(CheckBox1)`
  position: absolute;
  left: 80px;
`;

export const CheckboxName2 = styled(CheckboxName1)`
  position: absolute;
  left: 115px;
  width: 300px;
`;

export const LoanPriceBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 22px;

  width: 678px;
  height: 70px;
  left: 472px;
  top: 415px;
`;

export const LoanPriceText = styled.span`
  position: absolute;
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

export const LoanPeriodText = styled(LoanPriceText)`
  left: 350px;
`;

export const LoanPriceInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 0px 12px 14px;
  gap: 10px;

  position: absolute;
  top: 30px;
  width: 291px;
  height: 44px;

  background: #ffffff;
  border: 1px solid #d5d4d4;
  border-radius: 5px;
`;

export const WonText = styled.span`
  position: absolute;
  left: 300px;
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

export const PeriodText = styled(WonText)`
  left: 650px;
  top: 40px;
`;

export const PeriodInput = styled(LoanPriceInput)`
  left: 350px;
`;

export const InterestBox = styled(LoanPriceBox)`
  position: absolute;
  top: 500px;
`;

export const InterestRateText = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  display: flex;

  align-items: center;
  letter-spacing: -0.03em;

  color: #2a2828;
`;

export const InterestRateInput = styled.input`
  box-sizing: border-box;

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
  position: absolute;
  top: 25px;
`;

export const InterestPercent = styled.span`
  position: absolute;
  left: 300px;
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

export const NotPayingText = styled.span`
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

export const NotPayingInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 0px 12px 14px;
  gap: 10px;

  position: absolute;
  left: 350px;
  top: 25px;
  width: 291px;
  height: 44px;
  background: #ffffff;
  border: 1px solid #d5d4d4;
  border-radius: 5px;
`;

export const Underline = styled.div`
  position: absolute;
  width: 976px;
  height: 0px;
  left: calc(50% - 976px / 2);
  top: 591px;

  border: 1px solid #f0f0f0;
`;

export const CalcBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  position: absolute;
  width: 328px;
  height: 44px;
  left: 472px;
  top: 609px;
`;

export const AddPaying = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 159px;
  height: 44px;

  background: #ffffff;
  border: 1px solid #f16341;
  border-radius: 5px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: #f16341;
  cursor: pointer;

  :hover {
    background-color: #f16341;
    color: #ffffff;
  }
`;

export const AddInterest = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 159px;
  height: 44px;
  background: #ffffff;
  border: 1px solid #f16341;
  border-radius: 5px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: #f16341;
  :hover {
    background-color: #f16341;
    color: #ffffff;
  }
`;

export const PayingRow = styled.div`
  position: relative;
  left: 472px;
  top: 720px;
  width: 1450px;
  height: 70px;
  

  background-color: #FFFFFF;
`;

export const PayingNumText = styled.span`
  position: absolute;
  width: 26px;
  height: 18px;
  left: 0px;
  top: -40px;
  margin-top: 20px;

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

export const PayingNumber = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 14px;

  width: 48px;
  height: 44px;
  background: #FFFFFF;

  border: 1px solid #D5D4D4;
  border-radius: 5px;
`;

export const PayingPrice = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 14px;

  position: absolute;
  left: 80px;
  top: 0px;
  width: 171px;
  height: 44px;

  background: #FFFFFF;
  border: 1px solid #D5D4D4;
  border-radius: 5px;
`;

export const PayingPriceText = styled.span`
  position: absolute;
  width: 53px;
  height: 18px;
  left: 80px;
  top: -20px;

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

export const SlashText = styled.span`
  position: absolute;
  left: 60px;
  top: 10px;
  width: 6px;
  height: 19px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: #686564;
`;

export const WonInputText = styled.span`
  position: absolute;
  left: 260px;
  top: 15px;
  width: 15px;
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

export const DeleteBtn = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;

  position: absolute;
  width: 50px;
  height: 44px;
  left: 300px;
  top: 0px;

  background: #FFFFFF;

  border: 1px solid #686564;
  border-radius: 5px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  letter-spacing: -0.03em;

  color: #000000;
`;

export const CalcBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: relative;
  width: 976px;
  height: 50px;
  left: calc(50% - 976px/2);
  top: 850px;

  background: #F16341;
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

  color: #FFFFFF;
`;

export const Underline2 = styled.div`
  position: relative;
  display: flex;
  width: 976px;
  height: 0px;
  left: 472px;
  top: 700px;
  border: 1px solid #F0F0F0;
`;

export const InterestChangeBox = styled.div`
  position: relative;
  width: 328px;
  height: 98px;
  left: 472px;
  top: 670px;
  
`;

export const InterestChangeText = styled.span`
  position: relative;
  width: 51px;
  height: 18px;
  left: 472px;
  top: 710px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #2A2828;
`;

export const PayingLabel = styled.span`
  position: absolute;
  width: 51px;
  height: 18px;
  left: 472px;
  top: 675px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
`;

export const RateChangeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 14px;

  position: relative;
  width: 328px;
  height: 70px;
  left: 0px;
  top: 50px;
`;

export const RateNumber = styled.span`
  position: relative;
  width: 26px;
  height: 18px;
  left: 0px;
  top: -40px;
  margin-top: 40px;

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

export const ChangedRateNum = styled.span`
  position: relative;
  width: 53px;
  height: 18px;
  left: 80px;
  top: 0px;
  margin-top: -75px;

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

export const RateNumberInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 14px;

  position: absolute;
  top: 10px;
  margin-top: 10px;
  width: 48px;
  height: 44px;

  background: #FFFFFF;
  border: 1px solid #D5D4D4;
  border-radius: 5px;
`;

export const RateChangeInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 14px;

  position: relative;
  left: 80px;
  margin-top: -10px;
  width: 171px;
  height: 44px;

  background: #FFFFFF;

  border: 1px solid #D5D4D4;
  border-radius: 5px;
`;

export const RateDeleteBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;

  position: absolute;
  width: 50px;
  height: 44px;
  left: 300px;
  margin-top: 20px;

  background: #FFFFFF;
  border: 1px solid #686564;
  border-radius: 5px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  letter-spacing: -0.03em;

  color: #000000;
`;