import { Area, ArrowBtn, FilterBox, FilterHeader, MainUsage, ModeBox, OrderBy, ProductType, Select, SelectBtn, TypePrice, YearOfBuilding, YearOfTran } from "@/components/map/Header";
import Image from "next/image";
import React, { useState } from "react";

export default function Header() {
  const [selectOption, setSelectOption] = useState('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectOption(event.target.value);
  };

  const options = [
    { value: 'Map1', label: '실거래가 지도' },
    { value: 'Map2', label: '매물지도' },
  ];

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
            <ProductType>
              매물종류
              <ArrowBtn />
            </ProductType>
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
              <Image 
                src={'/Order.png'}
                alt="Order"
                width={20}
                height={20}
              />
            </OrderBy>
          </FilterBox>
        </FilterHeader>
      </ModeBox>
    </>
  )
}