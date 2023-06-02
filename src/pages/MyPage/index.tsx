import { PageCnt } from '@/components/myPage/Offered';
import { useState } from 'react';
import styled from 'styled-components';
import Offered1 from './Offered1';
import Offered2 from './Offered2';
import Offered3 from './Offered3';

export const OfferedText = styled.span`
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

export default function OfferedPageTop() {
  const [pageNum, setPageNum] = useState<number>(1);
  const [formData, setFormData] = useState({
    sigungu: null,
    condition: 0,
    area: 0,
    user: 0,
  });

  return (
    <>
      <OfferedText>
        매물 제안서 받기
        <span style={{ color: '#F16341', marginLeft: '8px' }}>{pageNum}</span>
        <PageCnt> / 3</PageCnt>
      </OfferedText>
      {pageNum === 1 ? (
        <Offered1 pageNum={pageNum} setPageNum={setPageNum} />
      ) : pageNum === 2 ? (
        <Offered2 pageNum={pageNum} setPageNum={setPageNum} />
      ) : (
        <Offered3 pageNum={pageNum} setPageNum={setPageNum} />
      )}
    </>
  );
}
