import {
  BuyingPriceSlider,
  BuyingPriceSliderBox,
  BuyingRangeBox,
  CheckBox,
  DuplicateText,
  GubunLine,
  PriceText,
  RentPriceSlider,
  ReturnPriceSlider,
  ReturnPriceSliderBox,
  ReturnRangeBox,
  SliderBox,
  TransactionTextBox,
  TransactionTypeBox,
  TransactionTypeText,
} from '@/components/map/FilterMenu/HeaderMenu';
import { useState } from 'react';

export default function TransactionType() {
  const [buyingMax, setBuyingMax] = useState([25000, 50000]);
  const [returnPriceMax, setReturnPriceMax] = useState([5000, 10000]);

  let buyingPrice = buyingMax.toString().split(',');
  let returnPrice = returnPriceMax.toString().split(',');

  return (
    <div>
      <TransactionTypeBox>
        <TransactionTextBox>
          <TransactionTypeText>거래 유형</TransactionTypeText>
          <DuplicateText>중복 선택 가능</DuplicateText>
        </TransactionTextBox>
        <CheckBox />
        <GubunLine />
        <SliderBox>
          <PriceText>가격</PriceText>
          <BuyingPriceSliderBox>매매가</BuyingPriceSliderBox>
          <BuyingRangeBox>
            {parseInt(buyingPrice[0]) < 10000
              ? buyingPrice[0]?.substring(0, 1) +
                '억' +
                ' ~ ' +
                (parseInt(buyingPrice[1]) < 10000
                  ? buyingPrice[1]?.substring(0, 1) + '억'
                  : buyingPrice[1]?.substring(0, 2) + '억')
              : buyingPrice[0]?.substring(0, 2) +
                '억' +
                ' ~ ' +
                (parseInt(buyingPrice[1]) < 10000
                  ? buyingPrice[1]?.substring(0, 1) + '억'
                  : buyingPrice[1]?.substring(0, 2) + '억')}
          </BuyingRangeBox>
          <div
            style={{
              marginTop: '80px',
            }}
          >
            <BuyingPriceSlider setBuyingMax={setBuyingMax} />
          </div>
          <ReturnPriceSliderBox>보증금/전세가</ReturnPriceSliderBox>
          <ReturnRangeBox>
            {parseInt(returnPrice[0]) < 1000
              ? returnPrice[0]?.substring(0, 1) +
                '천 만원' +
                ' ~ ' +
                (parseInt(returnPrice[1]) < 10000
                  ? returnPrice[1]?.substring(0, 1) + '억'
                  : returnPrice[1]?.substring(0, 2) + '억')
              : returnPrice[0]?.substring(0, 1) +
                '억' +
                ' ~ ' +
                (parseInt(returnPrice[1]) < 10000
                  ? returnPrice[1]?.substring(0, 1) + '억'
                  : returnPrice[1]?.substring(0, 2) + '억')}
          </ReturnRangeBox>
          <div
            style={{
              marginTop: '60px',
            }}
          >
            <ReturnPriceSlider setReturnPriceMax={setReturnPriceMax} />
          </div>
          <div
            style={{
              marginTop: '80px',
            }}
          >
            <RentPriceSlider />
          </div>
        </SliderBox>
      </TransactionTypeBox>
    </div>
  );
}
