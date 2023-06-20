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
import React, { useEffect, useState } from 'react';
import ProductType from './HeaderFilter/ProductType';
import TransactionType from './HeaderFilter/TransactionType';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [productType, setProductType] = useState({
    type: 'house',
    sub: ['아파트'],
  });

  const [selectOption, setSelectOption] = useState('Real');
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectOption(event.target.value);
  };

  const options = [
    { value: 'Real', label: '실거래가 지도' },
    { value: 'Product', label: '매물지도' },
  ];

  return (
    <div>
      <ModeBox>
        <Select
          options={options}
          value={selectOption}
          onChange={handleSelectChange}
        />
        <FilterHeader>
          <FilterBox>
            <SProductType
              productType={productType}
              onClick={(e) => {
                setIsOpen(true);
              }}
            >
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
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <TransactionType />
    </div>
  );
}
