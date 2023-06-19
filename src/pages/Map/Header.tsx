import {
  Area,
  ArrowBtn,
  FilterBox,
  FilterHeader,
  MainUsage,
  ModeBox,
  OrderBy,
  SProductType,
  Select,
  TypePrice,
  YearOfBuilding,
  YearOfTran,
} from '@/components/map/FilterMenu/Header';
import {
  TransactionTextBox,
  TransactionTypeText,
  TransactionTypeBox,
  DuplicateText,
  CheckBox,
  GubunLine,
  SliderBox,
  PriceText,
  BuyingPriceSliderBox,
  BuyingPriceSlider,
  BuyingRangeBox,
  ReturnPriceSliderBox,
  ReturnRangeBox,
  ReturnPriceSlider,
  RentPriceSlider,
} from '@/components/map/FilterMenu/HeaderMenu';
import Image from 'next/image';
import React, { useState } from 'react';
import ProductType from './HeaderFilter/ProductType';

export default function Header() {
  const [productType, setProductType] = useState({
    type: 'house',
    sub: ['아파트'],
  });

  const [buyingMax, setBuyingMax] = useState([25000, 50000]);
  const [returnPriceMax, setReturnPriceMax] = useState([5000, 10000]);

  const [selectOption, setSelectOption] = useState('Real');
  const [menuClicked, setMenuClicked] = useState(null);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectOption(event.target.value);
  };

  const options = [
    { value: 'Real', label: '실거래가 지도' },
    { value: 'Product', label: '매물지도' },
  ];

  let buyingPrice = buyingMax.toString().split(',');
  let returnPrice = returnPriceMax.toString().split(',');

  return (
    <>
      <ModeBox>
        <Select
          options={options}
          value={selectOption}
          onChange={handleSelectChange}
        />
        <FilterHeader>
          <FilterBox>
            <SProductType productType={productType}>
              {productType.sub}
              <ArrowBtn />
            </SProductType>
            <TypePrice>
              거래유형 / 가격
              <ArrowBtn />
            </TypePrice>
            <Area>
              면적
              <ArrowBtn />
            </Area>
            <YearOfTran>
              거래년도
              <ArrowBtn />
            </YearOfTran>
            <YearOfBuilding>
              준공년차
              <ArrowBtn />
            </YearOfBuilding>
            <MainUsage>
              주용도
              <ArrowBtn />
            </MainUsage>
            <OrderBy>
              <Image src={'/Order.png'} alt="Order" width={20} height={20} />
            </OrderBy>
          </FilterBox>
        </FilterHeader>
      </ModeBox>
      <ProductType
        selectOption={selectOption}
        productType={productType}
        setProductType={setProductType}
      />
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
          <ReturnPriceSliderBox>보증금</ReturnPriceSliderBox>
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
    </>
  );
}
