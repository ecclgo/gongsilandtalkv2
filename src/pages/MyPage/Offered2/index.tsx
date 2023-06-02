import {
  BudgetBox,
  BudgetText,
  OfferTitle,
  PageCnt,
  BuyingTab,
  RentTab,
  BuyingText,
  BudgetInput,
  WonText,
  CompanyInfoBox,
  InfoText,
  CompanyName,
  CompanyType,
  CompanyNameInput,
  CompanyTypeInput,
  NextBtn,
  PrevBtn,
} from '@/components/myPage/Offered';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
  pageNum: number;
  setPageNum: Dispatch<SetStateAction<number>>;
};

export default function Offered2({ pageNum, setPageNum }: Props) {
  const pageCnt = 2;
  const [innerTab, setInnerTab] = useState(0);
  return (
    <>
      <BudgetBox>
        <BudgetText>최대 예산을 알려주세요.</BudgetText>
        <BuyingTab innerTab={innerTab} onClick={() => setInnerTab(0)}>
          매매
        </BuyingTab>
        <RentTab innerTab={innerTab} onClick={() => setInnerTab(1)}>
          임대
        </RentTab>
        <BuyingText>매매가</BuyingText>
        <BudgetInput placeholder="ex. 5억 5000" />
        <WonText>만원</WonText>
      </BudgetBox>
      <CompanyInfoBox>
        <InfoText>제안 받을 기업의 정보를 입력해주세요.</InfoText>
        <CompanyName>회사명</CompanyName>
        <CompanyNameInput placeholder="(주) 공실앤톡" />
        <CompanyType>업종</CompanyType>
        <CompanyTypeInput placeholder="ex. 정보통신산업" />
      </CompanyInfoBox>
      <PrevBtn onClick={() => setPageNum(1)}>이전</PrevBtn>
      <NextBtn onClick={() => setPageNum(3)}>다음</NextBtn>
    </>
  );
}
