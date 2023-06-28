import {
  BuyingPriceSlider,
  BuyingPriceSliderBox,
  BuyingRangeBox,
  CheckBox,
  DuplicateText,
  GubunLine,
  PriceText,
  RentPriceSlider,
  RentPriceText,
  RentRagneBox,
  ReturnPriceSlider,
  ReturnPriceSliderBox,
  ReturnRangeBox,
  SliderBox,
  TransactionTextBox,
  TransactionTypeBox,
  TransactionTypeText,
} from '@/components/map/FilterMenu/HeaderMenu';
import { SetStateAction, useEffect, useRef, useState } from 'react';

type Object = {
  buying: boolean;
  return: boolean;
  rent: boolean;
  short: boolean;
};

type Props = {
  transactionOpen: boolean;
  setTransactionOpen: any;
  transactionText: string[] | null;
  setIsChecked: React.Dispatch<
    SetStateAction<{
      buying: boolean;
      return: boolean;
      rent: boolean;
      short: boolean;
    }>
  >;
  isChecked: Object;
  setBuyingText: React.Dispatch<SetStateAction<string>>;
};

/**
    TODO:Checkbox 각각의 상태값 관리하는 로직 만들기
   */

export default function TransactionType({
  transactionOpen,
  setTransactionOpen,
  transactionText,
  setBuyingText,
  setIsChecked,
  isChecked,
}: Props) {
  const [buyingMax, setBuyingMax] = useState([100000, 200000]);
  const [returnPriceMax, setReturnPriceMax] = useState([25000, 50000]);
  const [rentPriceMax, setRentPriceMax] = useState([50, 100]);
  const [steps, setSteps] = useState(1000);

  let buyingPrice = buyingMax.toString().split(',');
  let returnPrice = returnPriceMax.toString().split(',');
  let rentPrice = rentPriceMax.toString().split(',');

  const boxRef = useRef<HTMLDivElement>(null);

  const handleDivBox = (e: any) => {
    if (
      boxRef.current &&
      boxRef.current instanceof Element &&
      !boxRef.current.contains(e.target)
    ) {
      setTransactionOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleDivBox);
    return () => {
      document.removeEventListener('mousedown', handleDivBox);
    };
  }, []);

  const BuyingSelectedType = () => {
    let min = parseInt(buyingPrice[0]);
    let max = parseInt(buyingPrice[1]);

    if (min >= 1000 && min < 10000 && max >= 1000 && max < 10000) {
      setBuyingText(
        '매' +
          min.toString().substring(0, 1) +
          '천~' +
          max.toString().substring(0, 1) +
          '천'
      );
    } else if (min >= 10000 && min < 100000 && max >= 10000 && max < 100000) {
      setBuyingText(
        '매' +
          min.toString().substring(0, 1) +
          '억~' +
          max.toString().substring(0, 1) +
          '억'
      );
    } else if (min >= 100000 && max >= 100000 && max !== 200000) {
      setBuyingText(
        '매' +
          min.toString().substring(0, 2) +
          '억~' +
          max.toString().substring(0, 2) +
          '억'
      );
    } else if (
      min >= 10000 &&
      min < 100000 &&
      max >= 100000 &&
      max !== 200000
    ) {
      setBuyingText(
        '매' +
          min.toString().substring(0, 1) +
          '억~' +
          max.toString().substring(0, 2) +
          '억'
      );
    } else if (min >= 1000 && min < 10000 && max >= 10000 && max < 100000) {
      setBuyingText(
        '매' +
          min.toString().substring(0, 1) +
          '천~' +
          max.toString().substring(0, 1) +
          '억'
      );
    } else if (min === 1000 && max === 200000) {
      setBuyingText('매매');
    } else if (min >= 10000 && min < 100000 && max === 200000) {
      setBuyingText('매' + min.toString().substring(0, 1) + '억~');
    } else if (min >= 100000 && min < 200000 && max === 200000) {
      setBuyingText('매' + min.toString().substring(0, 2) + '억~');
    } else {
      setBuyingText(
        '매' +
          min.toString().substring(0, 1) +
          '천~' +
          max.toString().substring(0, 2) +
          '억'
      );
    }
  };

  const handleStep = () => {
    if (
      parseInt(buyingPrice[0]) >= 10000 &&
      parseInt(buyingPrice[0]) < 200000
    ) {
      setSteps(10000);
    } else if (parseInt(buyingPrice[0]) < 10000) {
      setSteps(1000);
    }
  };

  useEffect(() => {
    handleStep();
    BuyingSelectedType();
  }, [buyingPrice]);

  console.log('렌더링 상황');
  return (
    <div>
      <TransactionTypeBox transactionOpen={transactionOpen} ref={boxRef}>
        <TransactionTextBox>
          <TransactionTypeText>거래 유형</TransactionTypeText>
          <DuplicateText>중복 선택 가능</DuplicateText>
        </TransactionTextBox>
        <CheckBox setIsChecked={setIsChecked} isChecked={isChecked} />
        <GubunLine />
        <SliderBox>
          <PriceText>가격</PriceText>
          <BuyingPriceSliderBox>매매가</BuyingPriceSliderBox>
          <BuyingRangeBox>
            {parseInt(buyingPrice[0]) === 1000 &&
            parseInt(buyingPrice[1]) === 200000
              ? '전체'
              : parseInt(buyingPrice[0]) >= 1000 &&
                parseInt(buyingPrice[0]) < 10000 &&
                parseInt(buyingPrice[1]) >= 10000 &&
                parseInt(buyingPrice[1]) < 100000
              ? parseInt(buyingPrice[0]?.substring(0, 1)) +
                '천 ~ ' +
                parseInt(buyingPrice[1]?.substring(0, 1)) +
                '억'
              : parseInt(buyingPrice[0]) >= 10000 &&
                parseInt(buyingPrice[0]) < 100000 &&
                parseInt(buyingPrice[1]) >= 100000 &&
                parseInt(buyingPrice[1]) < 200000
              ? parseInt(buyingPrice[0]?.substring(0, 1)) +
                '억 ~ ' +
                parseInt(buyingPrice[1]?.substring(0, 2)) +
                '억'
              : parseInt(buyingPrice[0]) >= 100000 &&
                parseInt(buyingPrice[1]) === 200000
              ? parseInt(buyingPrice[0]?.substring(0, 2)) + '억 ~ '
              : parseInt(buyingPrice[0]) >= 10000 &&
                parseInt(buyingPrice[0]) < 100000 &&
                parseInt(buyingPrice[1]) === 200000
              ? parseInt(buyingPrice[0]?.substring(0, 1)) + '억 ~ '
              : parseInt(buyingPrice[0]) >= 1000 &&
                parseInt(buyingPrice[0]) < 10000 &&
                parseInt(buyingPrice[1]) >= 100000 &&
                parseInt(buyingPrice[1]) < 200000
              ? parseInt(buyingPrice[0]?.substring(0, 1)) +
                '천 ~ ' +
                parseInt(buyingPrice[1]?.substring(0, 2)) +
                '억'
              : parseInt(buyingPrice[0]) >= 1000 &&
                parseInt(buyingPrice[0]) < 10000 &&
                parseInt(buyingPrice[1]) >= 1000 &&
                parseInt(buyingPrice[1]) < 10000
              ? parseInt(buyingPrice[0]?.substring(0, 1)) +
                '천 ~ ' +
                parseInt(buyingPrice[1]?.substring(0, 1)) +
                '천'
              : parseInt(buyingPrice[0]) >= 10000 &&
                parseInt(buyingPrice[0]) < 100000 &&
                parseInt(buyingPrice[1]) >= 10000 &&
                parseInt(buyingPrice[1]) < 100000
              ? parseInt(buyingPrice[0]?.substring(0, 1)) +
                '억 ~ ' +
                parseInt(buyingPrice[1]?.substring(0, 1)) +
                '억'
              : parseInt(buyingPrice[0]) >= 100000 &&
                parseInt(buyingPrice[0]) < 200000 &&
                parseInt(buyingPrice[1]) >= 100000 &&
                parseInt(buyingPrice[1]) < 200000
              ? parseInt(buyingPrice[0]?.substring(0, 2)) +
                '억 ~ ' +
                parseInt(buyingPrice[1]?.substring(0, 2)) +
                '억'
              : parseInt(buyingPrice[0]) >= 1000 &&
                parseInt(buyingPrice[0]) < 10000 &&
                parseInt(buyingPrice[1]) === 200000
              ? parseInt(buyingPrice[0]?.substring(0, 1)) + '천 ~'
              : ''}
          </BuyingRangeBox>
          <div
            style={{
              marginTop: '80px',
            }}
          >
            <BuyingPriceSlider setBuyingMax={setBuyingMax} steps={steps} isChecked={isChecked} />
          </div>
          <ReturnPriceSliderBox>보증금/전세가</ReturnPriceSliderBox>
          <ReturnRangeBox>
            {parseInt(returnPrice[0]) === 100 &&
            parseInt(returnPrice[1]) === 50000
              ? '전체'
              : parseInt(returnPrice[0]) < 10000 &&
                parseInt(returnPrice[0]) > 1000 &&
                parseInt(returnPrice[1]) > 1000 &&
                parseInt(returnPrice[1]) < 10000
              ? parseInt(returnPrice[0]?.substring(0, 1)) +
                '천 ~ ' +
                parseInt(returnPrice[1]?.substring(0, 1)) +
                '천'
              : parseInt(returnPrice[0]) === 0 &&
                parseInt(returnPrice[1]) < 10000
              ? ' ~ ' + parseInt(returnPrice[1]?.substring(0, 1)) + '천'
              : parseInt(returnPrice[0]) >= 1000 &&
                parseInt(returnPrice[0]) < 10000 &&
                parseInt(returnPrice[1]) >= 10000 &&
                parseInt(returnPrice[1]) < 50000
              ? parseInt(returnPrice[0]?.substring(0, 1)) +
                '천 ~ ' +
                parseInt(returnPrice[1]?.substring(0, 1)) +
                '억'
              : parseInt(returnPrice[0]) === 0 &&
                parseInt(returnPrice[1]) >= 10000
              ? ' ~ ' + parseInt(returnPrice[1]?.substring(0, 1)) + '억'
              : parseInt(returnPrice[0]) >= 1000 &&
                parseInt(returnPrice[0]) < 10000 &&
                parseInt(returnPrice[1]) === 50000
              ? parseInt(returnPrice[0]?.substring(0, 1)) + '천 ~ '
              : parseInt(returnPrice[0]) >= 10000 &&
                parseInt(returnPrice[0]) !== 25000 &&
                parseInt(returnPrice[1]) === 50000
              ? parseInt(returnPrice[0]?.substring(0, 1)) + '억 ~ '
              : parseInt(returnPrice[0]) >= 10000 &&
                parseInt(returnPrice[1]) >= 10000 &&
                parseInt(returnPrice[1]) < 50000
              ? parseInt(returnPrice[0]?.substring(0, 1)) +
                '억 ~ ' +
                parseInt(returnPrice[1]?.substring(0, 1)) +
                '억'
              : parseInt(returnPrice[0]) < 1000 &&
                parseInt(returnPrice[0]) >= 100 &&
                parseInt(returnPrice[1]) < 1000 &&
                parseInt(returnPrice[1]) >= 100
              ? parseInt(returnPrice[0]?.substring(0, 1)) +
                '백만 ~ ' +
                (parseInt(returnPrice[1]?.substring(0, 1)) + '백만')
              : parseInt(returnPrice[0]) < 1000 &&
                parseInt(returnPrice[0]) >= 100 &&
                parseInt(returnPrice[1]) === 50000
              ? parseInt(returnPrice[0]?.substring(0, 1)) + '백만 ~ '
              : parseInt(returnPrice[0]) < 1000 &&
                parseInt(returnPrice[0]) >= 100 &&
                parseInt(returnPrice[1]) < 50000 &&
                parseInt(returnPrice[1]) >= 10000
              ? parseInt(returnPrice[0]?.substring(0, 1)) +
                '백만 ~ ' +
                (parseInt(returnPrice[1]?.substring(0, 1)) + '억')
              : parseInt(returnPrice[0]) < 1000 &&
                parseInt(returnPrice[0]) >= 100 &&
                parseInt(returnPrice[1]) < 10000 &&
                parseInt(returnPrice[1]) >= 1000
              ? parseInt(returnPrice[0]?.substring(0, 1)) +
                '백만 ~ ' +
                (parseInt(returnPrice[1]?.substring(0, 1)) + '천')
              : parseInt(returnPrice[0]) === 25000 &&
                parseInt(returnPrice[1]) === 50000
              ? parseInt(returnPrice[0]?.substring(0, 1)) +
                '억' +
                parseInt(returnPrice[0]?.substring(1, 2)) +
                '천 ~ '
              : ''}
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
            <RentPriceText>월세</RentPriceText>
            <RentPriceSlider setRentPriceMax={setRentPriceMax} />
            <RentRagneBox>
              {parseInt(rentPrice[0]) === 0 && parseInt(rentPrice[1]) === 100
                ? '전체'
                : parseInt(rentPrice[0]) > 0 && parseInt(rentPrice[1]) < 100
                ? parseInt(rentPrice[0]?.substring(0, 1)) +
                  '백만 ~ ' +
                  parseInt(rentPrice[1].substring(0, 1)) +
                  '백만'
                : parseInt(rentPrice[0]) === 0 && parseInt(rentPrice[1]) < 100
                ? ' ~ ' + parseInt(rentPrice[1].substring(0, 1)) + '백만'
                : parseInt(rentPrice[0]) > 0 && parseInt(rentPrice[1]) === 100
                ? parseInt(rentPrice[0]?.substring(0, 1)) + '백만 ~ '
                : ''}
            </RentRagneBox>
          </div>
        </SliderBox>
      </TransactionTypeBox>
    </div>
  );
}
