import {
  AlarmText,
  GlobalBox,
  ProductAlarmText,
  ProductInfoAlarmText,
  SubTabBox,
  TopBox,
  UnderLine,
} from '@/components/alarm/Alarm';
import { useState } from 'react';
import ProductAlarm from './ProductAlarm';
import ProductInfoAlarm from './ProduectInfoAlarm';

export default function MyAlarm() {
  const [clickedTab, setClickedTab] = useState(0);

  return (
    <>
      <GlobalBox>
        <TopBox>
          <AlarmText>알림</AlarmText>
          <SubTabBox>
            <ProductAlarmText
              clickedTab={clickedTab}
              onClick={() => setClickedTab(0)}
            >
              매물정보 알림
            </ProductAlarmText>
            <ProductInfoAlarmText
              clickedTab={clickedTab}
              onClick={() => setClickedTab(1)}
            >
              분양정보 알림
            </ProductInfoAlarmText>
            <UnderLine clickedTab={clickedTab} />
          </SubTabBox>
        </TopBox>
        {clickedTab === 0 ? <ProductAlarm /> : <ProductInfoAlarm />}
      </GlobalBox>
    </>
  );
}
