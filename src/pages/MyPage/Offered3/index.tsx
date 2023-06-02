import {
  NeededBox,
  NotNeededBox,
  OfferTitle,
  OfferedBtn,
  PageCnt,
  PrevBtn,
  RequestBox,
  RequestSpan,
  RequestText,
  RequestTextBox,
  RequestYN,
} from '@/components/myPage/Offered';
import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
  pageNum: number;
  setPageNum: Dispatch<SetStateAction<number>>;
};

export default function Offered3({ pageNum, setPageNum }: Props) {
  const [needTab, setNeedTab] = useState(0);
  return (
    <>
      <RequestBox>
        <RequestText>추가 요청사항이 있으신가요?</RequestText>
        <RequestYN>인테리어 유무</RequestYN>
        <NeededBox needTab={needTab} onClick={() => setNeedTab(0)}>
          필요해요
        </NeededBox>
        <NotNeededBox needTab={needTab} onClick={() => setNeedTab(1)}>
          필요 없어요
        </NotNeededBox>
        <RequestSpan>요청사항</RequestSpan>
        <RequestTextBox placeholder="요청사항을 입력해주세요." />
      </RequestBox>
      <PrevBtn onClick={() => setPageNum(2)}>이전</PrevBtn>
      <OfferedBtn>제안서 받아보기</OfferedBtn>
    </>
  );
}
