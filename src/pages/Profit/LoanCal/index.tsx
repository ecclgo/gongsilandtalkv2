import {
  CheckBox1,
  CheckBox2,
  CheckBoxContainer,
  CheckboxName1,
  CheckboxName2,
  InfoText,
  LoanPriceText,
  LoanPriceBox,
  SubTab1,
  SubTab2,
  SubTab3,
  SubTabBox,
  LoanPeriodText,
  LoanPriceInput,
  WonText,
  PeriodText,
  PeriodInput,
  InterestBox,
  InterestRateText,
  InterestRateInput,
  InterestPercent,
  NotPayingText,
  NotPayingInput,
  Underline,
  CalcBtnBox,
  AddPaying,
  AddInterest,
  PayingRow,
  PayingNumText,
  PayingNumber,
  PayingPrice,
  PayingPriceText,
  SlashText,
  WonInputText,
  DeleteBtn,
  CalcBtn,
  Underline2,
  InterestChangeBox,
  PayingLabel,
  RateChangeBox,
  RateNumber,
  ChangedRateNum,
  RateNumberInput,
  RateChangeInput,
  RateDeleteBtn,
  InterestChangeText,
} from '@/components/myPage/LoanProfit';
import { useState } from 'react';

interface Paying {
  num?: number | undefined;
  price?: string;
  changedRate?: string | undefined;
}

export default function LoanCal() {
  const [SubTabNum, setSubTabNum] = useState(0);
  const [paying, setPaying] = useState<Paying[]>([]);
  const [rateChange, setRateChange] = useState<Paying[]>([]);
  
  const handleRowChange = (num: number | undefined, price: string) => {
    const updateRow = paying.map((input) => {
      if(input.num === num) {
        return { ...input, price};
      }
      return input;
    });
    setPaying(updateRow);
  };

  const handleRateChange = (num: number | undefined, changedRate: string | undefined) => {
    const updateRow = rateChange.map((input) => {
      if(input.num === num) {
        return {...input, changedRate};
      }
      return input;
    });
    setRateChange(updateRow);
  };

  const handleAddRow = () => {
    const newRow: Paying = { num: paying.length + 1, price: ''};
    setPaying([...paying, newRow]);
  };

  const handleRateRow = () => {
    const newRow: Paying = { num: rateChange.length + 1, changedRate: ''};
    setRateChange([...rateChange, newRow]);
  }

  const handleDeleteRow = (num: number | undefined) => {
    const updatedPaying = paying.filter((input) => input.num !== num);
    setPaying(updatedPaying);
  };

  const handleDeleteRateRow = (num: number | undefined) => {
    const updatedPaying = rateChange.filter((input) => input.num !== num);
    setRateChange(updatedPaying);
  };

  console.log(rateChange);

  return (
    <>
      <InfoText>
        대출 시 납부해야할 이자를 계산합니다.
        <br />
        상환방법, 대출기간, 이율에 따른 월별 상환 테이블, 총 납부 이자를 확인할
        수 있습니다.
      </InfoText>
      <SubTabBox>
        <SubTab1 SubTabNum={SubTabNum} onClick={() => setSubTabNum(0)}>원금균등분할</SubTab1>
        <SubTab2 SubTabNum={SubTabNum} onClick={() => setSubTabNum(1)}>원리금균등분할</SubTab2>
        <SubTab3 SubTabNum={SubTabNum} onClick={() => setSubTabNum(2)}>만기일시</SubTab3>
      </SubTabBox>
      <CheckBoxContainer>
        <CheckBox1 />
        <CheckboxName1>거치기간</CheckboxName1>
        <CheckBox2 />
        <CheckboxName2>중도상환/금리변동</CheckboxName2>
      </CheckBoxContainer>
      <LoanPriceBox>
        <LoanPriceText>대출원금</LoanPriceText>
        <LoanPriceInput />
        <WonText>만원</WonText>
        <LoanPeriodText>대출기간</LoanPeriodText>
        <PeriodInput />
        <PeriodText>개월</PeriodText>
      </LoanPriceBox>
      <InterestBox>
        <InterestRateText>이자율</InterestRateText>
        <InterestRateInput />
        <InterestPercent>%</InterestPercent>
        <NotPayingText>거치기간</NotPayingText>
        <NotPayingInput />
        <PeriodText>개월</PeriodText>
      </InterestBox>
      <Underline />
      <CalcBtnBox>
        <AddPaying onClick={handleAddRow}>중도상환 추가</AddPaying>
        <AddInterest onClick={handleRateRow}>금리변동 추가</AddInterest>
      </CalcBtnBox>
      <PayingLabel>
        중도상환
      </PayingLabel>
      <div>
        {paying?.map((input) => (
          <PayingRow key={input.num}>
            <PayingNumText>
              회차
            </PayingNumText>
            <PayingNumber
              type='text'
              onChange={(e) => handleRowChange(input.num, e.target.value)}
            />
            <SlashText>
              /
            </SlashText>
            <PayingPriceText>
              상환금액
            </PayingPriceText>
            <PayingPrice
              type='text'
              onChange={(e) => handleRowChange(input.num, e.target.value)}
            />
            <WonInputText>
              원
            </WonInputText>
            <DeleteBtn 
              onClick={() => {handleDeleteRow(input.num)}}>
              삭제
            </DeleteBtn>
          </PayingRow>
        ))}
      </div>
      <Underline2 />
      <InterestChangeText>
        금리변동
      </InterestChangeText>
        <div>
          {rateChange?.map((input) => (
            <InterestChangeBox key={input.num}>
              <RateChangeBox >
                <RateNumber>
                  회차
                </RateNumber>
                <RateNumberInput 
                  type='text'
                  onChange={(e) => {handleRateChange(input.num, e.target.value)}}
                />
                <SlashText style={{ marginTop: "20px" }}>
                  /
                </SlashText>
                <ChangedRateNum>
                  변동금리
                </ChangedRateNum>
                <RateChangeInput 
                  type='text'
                  onChange={(e) => {handleRateChange(input.num, e.target.value)}}
                />
                <WonInputText style={{ marginTop: "20px"}}>
                  %
                </WonInputText>
                <RateDeleteBtn onClick={() => {handleDeleteRateRow(input.num)}}>
                  삭제
                </RateDeleteBtn>
              </RateChangeBox>
            </InterestChangeBox>
          ))}
        </div>
      <CalcBtn>
        대출이자 계산하기
      </CalcBtn>
    </>
  );
}
