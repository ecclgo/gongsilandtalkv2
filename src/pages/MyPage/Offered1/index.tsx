import {
  AddressBox,
  AddressTitle,
  BuildingTab,
  ChangeMeter,
  CitySearchBox,
  ConditionBox,
  ConditionText,
  Meter,
  MinimumArea,
  NextBtn,
  OfferTitle,
  OfficeTab,
  PageCnt,
  PlaceInput,
  SelectedCityInfo,
  SelectedNum,
  SubTabs,
  TypeOfPlace,
  UserBox,
  UserInput,
  UserText,
} from '@/components/myPage/Offered';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Select } from 'antd';
import { Address } from '@/types/Address';

type Props = {
  pageNum: number;
  setPageNum: Dispatch<SetStateAction<number>>;
};

export default function Offered1({ pageNum, setPageNum }: Props) {
  const [meterToArea, setMeterToArea] = useState<number>(0);
  const [areaToMeter, setAreaToMeter] = useState<number>(0);
  const [cityList, setCityList] = useState<Address[]>([]);

  const [subTab, setSubTab] = useState<number>(0);
  const changeMeters = (e: React.FormEvent<HTMLInputElement>) => {
    const inputNum: number = parseInt(e.currentTarget.value);
    return setMeterToArea(Math.ceil(inputNum / 3.3058));
  };

  const changeArea = (e: React.FormEvent<HTMLInputElement>) => {
    const inPutNum: number = parseInt(e.currentTarget.value);
    return setAreaToMeter(inPutNum / 3.3058);
  };

  const pageCnt = 1;
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagChange = (value: any) => {
    if (value.length <= 3) {
      setSelectedTags(value);
    }
  };

  useEffect(() => {
    const getSigungu = async () => {
      const response = await fetch('/api/SigunguCall');
      const List = await response.json();
      setCityList(List);
    };
    getSigungu();
  }, []);

  return (
    <>
      <AddressBox>
        <AddressTitle>어디에 매물을 얻고 싶으신가요?</AddressTitle>
        <CitySearchBox>
          <Select
            mode="multiple"
            allowClear
            style={{ width: '500px' }}
            placeholder="시 / 군 / 구를 선택하세요"
            options={cityList}
            maxTagCount={3}
            value={selectedTags}
            onChange={handleTagChange}
            size="large"
          />
          {selectedTags.length <= 3 && (
            <SelectedCityInfo>
              선택 가능 갯수
              <SelectedNum>{selectedTags.length}</SelectedNum>/ 3
            </SelectedCityInfo>
          )}
        </CitySearchBox>
      </AddressBox>
      <ConditionBox>
        <ConditionText>원하시는 매물 조건을 알려주세요.</ConditionText>
        <SubTabs>
          <BuildingTab subTab={subTab} onClick={() => setSubTab(0)}>
            상가
          </BuildingTab>
          <OfficeTab subTab={subTab} onClick={() => setSubTab(1)}>
            사무실
          </OfficeTab>
        </SubTabs>
        <MinimumArea>
          최소 희망 면적
          <Meter
            placeholder="ex. 300"
            onChange={(e) => {
              changeMeters(e);
            }}
          />
          <ChangeMeter
            placeholder="ex. 100"
            defaultValue={isNaN(meterToArea) ? 0 : meterToArea}
            onChange={(e) => {
              changeArea(e);
            }}
          />
        </MinimumArea>
        {subTab === 0 ? (
          <UserBox>
            사용 인원
            <UserInput placeholder="ex. 50" />
            <UserText>명</UserText>
          </UserBox>
        ) : (
          <TypeOfPlace>
            희망 업종
            <PlaceInput placeholder="ex.식품접객업" />
          </TypeOfPlace>
        )}
      </ConditionBox>
      <NextBtn onClick={() => setPageNum(2)}>다음</NextBtn>
    </>
  );
}
