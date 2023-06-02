import { SubTabBox } from '@/components/alarm/Alarm';
import {
  Line,
  LoanBox,
  ProfitBox,
  ProfitGlobal,
  ProfitText,
} from '@/components/myPage/Profit';
import { useState } from 'react';
import ProfitCal from './ProfitCal';
import LoanCal from './LoanCal';

export default function Profit() {
  const [SubTab, setSubTab] = useState(0);

  return (
    <div style={{ width: "1920px", height: "1920px", backgroundColor: "#FFFFFF"}}>
      <ProfitGlobal>
        <ProfitText>수익률 계산기</ProfitText>
        <SubTabBox>
          <ProfitBox SubTab={SubTab} onClick={() => setSubTab(0)}>
            수익률 계산
          </ProfitBox>
          <LoanBox SubTab={SubTab} onClick={() => setSubTab(1)}>
            대출이자 계산
          </LoanBox>
        </SubTabBox>
        <Line />
        {SubTab === 0 ? <ProfitCal SubTab={SubTab} /> : <LoanCal />}
      </ProfitGlobal>
    </div>
  );
}
