import { WonText } from '@/components/myPage/Offered';
import {
  BuyingInput,
  BuyingPriceBox,
  BuyingPriceText,
  CalcBtn,
  DivLine,
  EtcInput,
  EtcPercentText,
  EtcPriceBox,
  EtcPriceText,
  IncludeLoanText,
  InfoMsg,
  LoanAmountBox,
  LoanAmountInput,
  LoanAmountRate,
  LoanAmountText,
  LoanCheckBox,
  MonthRentFee,
  MonthRentFeeText,
  PercentText,
  RentAmountText,
  RentFeeBox,
  RentInput,
  SlashText,
  TaxInput,
  TaxRate,
} from '@/components/myPage/Profit';

type Props = {
  SubTab: number;
};

export default function ProfitCal({ SubTab }: Props) {
  return (
    <>
      <InfoMsg>
        노후 시설 수리비, 감가상각비 등 관련사항을 충분히 고려하신 후 산정하시는
        것을 권장합니다.
      </InfoMsg>
      <div>
        <LoanCheckBox />
        <IncludeLoanText>대출 포함</IncludeLoanText>
        <BuyingPriceBox>
          <BuyingPriceText>매입가</BuyingPriceText>
          <BuyingInput placeholder="1억 2000" />
          <WonText>만원</WonText>
          <TaxRate>취득세율</TaxRate>
          <TaxInput placeholder="3.6" />
          <PercentText>%</PercentText>
        </BuyingPriceBox>
        <EtcPriceBox>
          <EtcPriceText>기타비용(세무비용, 부동산수수료 등)</EtcPriceText>
          <EtcInput />
          <EtcPercentText>%</EtcPercentText>
        </EtcPriceBox>
        <RentFeeBox>
          <RentAmountText>보증금</RentAmountText>
          <RentInput placeholder="1억 2000" />
          <SlashText>/</SlashText>
          <MonthRentFeeText>월임대료</MonthRentFeeText>
          <MonthRentFee placeholder="500" />
          <WonText style={{ position: 'absolute', top: '40px', left: '315px' }}>
            만원
          </WonText>
          <DivLine />
        </RentFeeBox>
        <LoanAmountBox>
          <LoanAmountText>대출금액</LoanAmountText>
          <WonText>만원</WonText>
          <LoanAmountInput placeholder="1억 2000" />
          <LoanAmountText style={{ left: '350px' }}>대출금리</LoanAmountText>
          <LoanAmountRate placeholder="3.6" />
          <PercentText>%</PercentText>
        </LoanAmountBox>
        <CalcBtn>수익률 계산하기</CalcBtn>
      </div>
    </>
  );
}
