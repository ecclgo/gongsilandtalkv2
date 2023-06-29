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
  setReturnText: React.Dispatch<SetStateAction<string>>;
  setRentText: React.Dispatch<SetStateAction<string>>;
};

export default function TransactionType({
  transactionOpen,
  setTransactionOpen,
  setBuyingText,
  setReturnText,
  setIsChecked,
  isChecked,
  setRentText
}: Props) {
  const [buyingMax, setBuyingMax] = useState([1000, 200000]);
  const [returnPriceMax, setReturnPriceMax] = useState([100, 50000]);
  const [rentPriceMax, setRentPriceMax] = useState([10, 1000]);
  const [steps, setSteps] = useState(1000);
  const [returnSteps, setReturnSteps] = useState(100);
  const [rentSteps, setRentSteps] = useState(100);

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

    if ((min > 1000 && min < 10000) && (max > 1000 && max < 10000)) {
      setBuyingText('매' + min.toString().substring(0, 1) + '천~' + max.toString().substring(0, 1) + '천');
    } else if ((min > 1000 && min < 10000) && (max >= 10000 && max < 100000)) {
      setBuyingText('매' + min.toString().substring(0, 1) + '천~' + max.toString().substring(0, 1) + '억');
    } else if ((min > 1000 && min < 10000) && (max >= 100000 && max < 200000)) {
      setBuyingText('매' + min.toString().substring(0, 1) + '천~' + max.toString().substring(0, 2) + '억');
    } else if (((min > 1000 && min < 10000) && (max === 200000))) {
      setBuyingText('매' + min.toString().substring(0, 1) + '천~');
    } else if ((min >= 10000 && min < 100000) && (max >= 10000 && max < 100000)) {
      setBuyingText('매' + min.toString().substring(0, 1) + '억~' + max.toString().substring(0, 1) + '억');
    } else if ((min >= 10000 && min < 100000) && (max >= 100000 && max < 200000)) {
      setBuyingText('매' + min.toString().substring(0, 1) + '억~' + max.toString().substring(0, 2) + '억');
    } else if ((min >= 10000 && min < 100000) && (max === 200000)) {
      setBuyingText('매' + min.toString().substring(0, 1) + '억~');
    } else if ((min >= 100000 && min < 200000) && (max >= 100000 && max < 200000)) {
      setBuyingText('매' + min.toString().substring(0, 2) + '억~' + max.toString().substring(0, 2) + '억');
    } else if ((min >= 100000 && min < 200000) && (max === 200000)) {
      setBuyingText('매' + min.toString().substring(0, 2) + '억~');
    } else if ((min === 1000) && (max === 200000)) {
      setBuyingText('매매');
    } else if ((min === 1000) && (max < 100000 && max >= 10000)) {
      setBuyingText('매~' + max.toString().substring(0, 1) + '억');
    } else if ((min === 1000) && (max >= 100000 && max < 200000)) {
      setBuyingText('매~' + max.toString().substring(0, 2) + '억');
    }
  };

  const ReturnSelectedType = () => {
    let min = parseInt(returnPrice[0]);
    let max = parseInt(returnPrice[1]);

    if (min > 100 && min < 1000 && max >= 100 && max < 1000) {
      setReturnText('보' + min.toString() + '~' + max.toString());
    } else if (min > 100 && min < 1000 && max >= 1000 && max < 10000) {
      setReturnText(
        '보' + min.toString() + '~' + max.toString().substring(0, 1) + '천'
      );
    } else if (min > 100 && min < 1000 && max >= 10000 && max !== 50000) {
      setReturnText(
        '보' + min.toString() + '~' + max.toString().substring(0, 1) + '억'
      );
    } else if (min >= 1000 && min < 10000 && max >= 1000 && max < 10000) {
      setReturnText(
        '보' +
          min.toString().substring(0, 1) +
          '천~' +
          max.toString().substring(0, 1) +
          '천'
      );
    } else if (min >= 1000 && min < 10000 && max >= 10000 && max < 50000) {
      setReturnText(
        '보' +
          min.toString().substring(0, 1) +
          '천~' +
          max.toString().substring(0, 1) +
          '억'
      );
    } else if (min >= 10000 && max >= 10000 && max < 50000) {
      setReturnText(
        '보' +
          min.toString().substring(0, 1) +
          '억~' +
          max.toString().substring(0, 1) +
          '억'
      );
    } else if (min === 100 && max === 50000) {
      setReturnText('전세');
    } else if (min === 100 && max >= 10000 && max < 50000) {
      setReturnText('~' + max.toString().substring(0, 1) + '억');
    } else if (min === 100 && max >= 1000 && max < 10000) {
      setReturnText('~' + max.toString().substring(0, 1) + '천');
    } else if (min >= 100 && min < 1000 && max === 50000) {
      setReturnText(min.toString() + '~');
    } else if (min >= 1000 && min < 10000 && max === 50000) {
      setReturnText(min.toString().substring(0, 1) + '천~');
    } else if (min >= 10000 && max === 50000) {
      setReturnText(min.toString().substring(0, 1) + '억~');
    } else if (min === 100 && max >= 100 && max < 1000) {
      setReturnText('~' + max.toString());
    }
  };

  const RentSelectedType = () => {
    let min = parseInt(rentPrice[0]);
    let max = parseInt(rentPrice[1]);

    if((min > 10 && min < 100) && (max > 10 && max < 100)) {
      setRentText('월' + min.toString() + '~' + max.toString());
    } else if ((min > 10 && min < 100) && (max >= 100 && max < 1000)) {
      setRentText('월' + min.toString() + '~' + max.toString().substring(0, 1) + '00');
    } else if ((min > 10 && min < 100) && (max === 1000)) {
      setRentText('월' + min.toString() + '~');
    } else if ((min >= 100 && min < 1000) && (max === 1000)) {
      setRentText('월' + min.toString().substring(0, 1) + '00' + '~');
    } else if ((min >= 100 && min < 1000) && (max >= 100 && max < 1000)) {
      setRentText('월' + min.toString().substring(0, 1) + '00' + '~' + max.toString().substring(0, 1) + '00');
    } else if ((min === 10) && (max >= 100 && max < 1000)) {
      setRentText('월~' + max.toString().substring(0, 1) + '00');
    } else if ((min === 10) && (max >= 10 && max < 100)) {
      setRentText('월~' + max.toString().substring(0, 1) + '십만');
    } else if ((min === 10) && (max === 1000)) {
      setRentText('월세');
    } else if (isChecked?.rent !== false) {
      console.log(isChecked.rent);
      setRentText('');
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

  const handleReturnStep = () => {
    if (parseInt(returnPrice[0]) > 10900) {
      console.log('1억씩');
      setReturnSteps(10000);
    } else if (
      parseInt(returnPrice[0]) > 1000 &&
      parseInt(returnPrice[0]) <= 10900
    ) {
      setReturnSteps(1000);
    } else if (
      parseInt(returnPrice[0]) >= 100 &&
      parseInt(returnPrice[0]) <= 1000
    ) {
      setReturnSteps(100);
    }
  };

  const handleRentStep = () => {
    if (parseInt(rentPrice[0]) > 100) {
      setRentSteps(100);
    } else if (parseInt(rentPrice[0]) >= 10 && parseInt(rentPrice[0]) <= 100) {
      setRentSteps(10);
    }
  };

  useEffect(() => {
    handleStep();
    handleReturnStep();
    handleRentStep();
    BuyingSelectedType();
    ReturnSelectedType();
    RentSelectedType();
  }, [buyingPrice, returnPrice, rentPrice]);

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
            {
            parseInt(buyingPrice[0]) === 1000 &&
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
              : ''
          }
          </BuyingRangeBox>
          <div
            style={{
              marginTop: '80px',
            }}
          >
            <BuyingPriceSlider
              setBuyingMax={setBuyingMax}
              steps={steps}
              isChecked={isChecked}
            />
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
                parseInt(returnPrice[0]) !== 30000 &&
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
              : parseInt(returnPrice[0]) === 30000 &&
                parseInt(returnPrice[1]) === 50000
              ? parseInt(returnPrice[0]?.substring(0, 1)) + '억 ~ '
              : ''}
          </ReturnRangeBox>
          <div
            style={{
              marginTop: '60px',
            }}
          >
            <ReturnPriceSlider
              setReturnPriceMax={setReturnPriceMax}
              returnSteps={returnSteps}
              isChecked={isChecked}
            />
          </div>
          <div
            style={{
              marginTop: '80px',
            }}
          >
            <RentPriceText>월세</RentPriceText>
            <RentPriceSlider
              setRentPriceMax={setRentPriceMax}
              rentSteps={rentSteps}
              isChecked={isChecked}
            />
            <RentRagneBox>
              {parseInt(rentPrice[0]) === 10 && parseInt(rentPrice[1]) === 1000
                ? '전체'
                : parseInt(rentPrice[0]) > 10 &&
                  parseInt(rentPrice[0]) < 100 &&
                  parseInt(rentPrice[1]) < 1000 &&
                  parseInt(rentPrice[1]) >= 100
                ? parseInt(rentPrice[0]?.substring(0, 1)) +
                  '십만 ~ ' +
                  parseInt(rentPrice[1].substring(0, 1)) +
                  '백만'
                : parseInt(rentPrice[0]) >= 10 &&
                  parseInt(rentPrice[0]) < 100 &&
                  parseInt(rentPrice[1]) === 1000
                ? parseInt(rentPrice[0]?.substring(0, 1)) + '십만 ~ '
                : parseInt(rentPrice[0]) >= 100 &&
                  parseInt(rentPrice[0]) < 1000 &&
                  parseInt(rentPrice[1]) === 1000
                ? parseInt(rentPrice[0]?.substring(0, 1)) + '백만 ~ '
                : parseInt(rentPrice[0]) >= 100 &&
                  parseInt(rentPrice[0]) < 1000 &&
                  parseInt(rentPrice[1]) < 1000
                ? parseInt(rentPrice[0]?.substring(0, 1)) +
                  '백만 ~ ' +
                  parseInt(rentPrice[1]?.substring(0, 1)) +
                  '백만'
                : parseInt(rentPrice[0]) === 10 &&
                  parseInt(rentPrice[1]) >= 100 &&
                  parseInt(rentPrice[1]) < 1000
                ? '~' + parseInt(rentPrice[1]?.substring(0, 1)) + '백만'
                : parseInt(rentPrice[0]) === 10 &&
                  parseInt(rentPrice[1]) >= 10 &&
                  parseInt(rentPrice[1]) < 100
                ? '~' + parseInt(rentPrice[1]?.substring(0, 1)) + '십만'
                : parseInt(rentPrice[0]) > 10 &&
                parseInt(rentPrice[0]) < 100 &&
                parseInt(rentPrice[1]) < 100 &&
                parseInt(rentPrice[1]) >= 10
                ?
                parseInt(rentPrice[0]?.substring(0, 1)) +
                '십만 ~ ' +
                parseInt(rentPrice[1].substring(0, 1)) +
                '십만'
                : ''
              }
            </RentRagneBox>
          </div>
        </SliderBox>
      </TransactionTypeBox>
    </div>
  );
}
