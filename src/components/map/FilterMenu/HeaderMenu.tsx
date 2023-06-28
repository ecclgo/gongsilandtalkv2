import {
  Checkbox,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react';
import styled from 'styled-components';

type Object = {
  buying: boolean;
  return: boolean;
  rent: boolean;
  short: boolean;
};

type Props = {
  setBuyingMax?: any;
  setReturnPriceMax?: any;
  setRentPriceMax?: any;
  transactionOpen?: boolean;
  setIsChecked?: any;
  isChecked?: Object;
  steps?: number;
};

export const TransactionTypeBox = styled.div<Props>`
  display: ${(props) => `${props.transactionOpen ? 'flex' : 'none'}`};
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 360px;
  height: 452px;
  left: 244px;
  top: 112px;

  border: 1px solid #d5d4d4;
  filter: drop-shadow(0px 0px 15px rgba(42, 40, 40, 0.1));
  border-radius: 5px;
  background-color: #ffffff;
  z-index: 999999;
`;

export const TransactionTextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 6px;

  position: absolute;
  width: 135px;
  height: 18px;
  left: 16px;
  top: 14px;

  border-radius: 5px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #2a2828;
`;

export const TransactionTypeText = styled.span`
  position: absolute;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #2a2828;
`;

export const DuplicateText = styled.span`
  position: absolute;
  left: 55px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #9d9999;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 14px;

  position: absolute;
  width: 350px;
  height: 18px;
  left: 16px;
  top: 46px;
`;

export const GubunLine = styled.div`
  position: absolute;
  width: 328px;
  height: 0px;
  left: 16px;
  top: 78px;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
`;

export const SliderBox = styled.div`
  position: absolute;
  width: 329px;
  height: 290px;
  left: 16px;
  top: 78px;
`;

export const PriceText = styled.span`
  position: absolute;
  width: 26px;
  height: 18px;
  left: 16px;
  top: 20px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #2a2828;
`;

export const BuyingPriceSliderBox = styled.div`
  position: absolute;
  width: 329px;
  height: 68px;
  left: 16px;
  top: 32px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #686564;
`;

export const BuyingRangeBox = styled.div`
  position: absolute;
  width: 150px;
  height: 18px;
  left: 250px;
  top: 60px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: -0.03em;
  color: #f16341;
`;

export const ReturnPriceSliderBox = styled(BuyingPriceSliderBox)`
  top: 120px;
`;

export const ReturnRangeBox = styled(BuyingRangeBox)`
  left: 240px;
  top: 140px;
`;

export const RentPriceText = styled.span`
  position: absolute;
  width: 26px;
  height: 18px;
  left: 16px;
  top: 250px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #686564;
`;

export const RentRagneBox = styled(ReturnRangeBox)`
  left: 230px;
  top: 240px;
`;

export const CheckBox = ({ isChecked, setIsChecked }: Props) => {
  return (
    <>
      <CheckboxContainer>
        <Checkbox
          colorScheme="orange"
          value="buying"
          style={{
            fontFamily: 'Spoqa Han Sans Neo',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '18px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: '-0.03em',
            color: '#2A2828',
            width: '51px',
            height: '18px',
          }}
          defaultChecked
          isChecked={isChecked?.buying}
          onChange={() => {
            setIsChecked((prev: any) => {
              return {
                ...prev,
                buying: !isChecked?.buying,
              };
            });
          }}
        >
          매매
        </Checkbox>
        <Checkbox
          colorScheme="orange"
          value="return"
          style={{
            fontFamily: 'Spoqa Han Sans Neo',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '18px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: '-0.03em',
            color: '#2A2828',
            width: '51px',
            height: '18px',
          }}
          defaultChecked
          isChecked={isChecked?.return}
          onChange={() => {
            setIsChecked((prev: any) => {
              return {
                ...prev,
                return: !isChecked?.return,
              };
            });
          }}
        >
          전세
        </Checkbox>
        <Checkbox
          colorScheme="orange"
          value="return"
          style={{
            fontFamily: 'Spoqa Han Sans Neo',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '18px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: '-0.03em',
            color: '#2A2828',
            width: '51px',
            height: '18px',
          }}
          defaultChecked
          isChecked={isChecked?.rent}
          onChange={() => {
            setIsChecked((prev: any) => {
              return {
                ...prev,
                rent: !isChecked?.rent,
              };
            });
          }}
        >
          월세
        </Checkbox>
        <Checkbox
          colorScheme="orange"
          value="return"
          style={{
            fontFamily: 'Spoqa Han Sans Neo',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '18px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: '-0.03em',
            color: '#2A2828',
            width: '100px',
            height: '18px',
          }}
          defaultChecked
          isChecked={isChecked?.short}
          onChange={() => {
            setIsChecked((prev: any) => {
              return {
                ...prev,
                short: !isChecked?.short,
              };
            });
          }}
        >
          단기임대
        </Checkbox>
      </CheckboxContainer>
    </>
  );
};

export const BuyingPriceSlider = ({ setBuyingMax, steps, isChecked }: Props) => {
  return (
    <>
      <RangeSlider
        aria-label={['min', 'max']}
        aria-valuetext={['min', 'max']}
        min={1000}
        max={200000}
        defaultValue={[100000, 200000]}
        colorScheme="orange"
        onChangeEnd={(val) => setBuyingMax(val)}
        step={steps}
        isDisabled={!isChecked?.buying}
      >
        <RangeSliderMark
          value={1000}
          mt="3"
          fontSize="sm"
          style={{
            fontFamily: 'Spoqa Han Sans Neo',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '14px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: '-0.03em',
            color: '#9D9999',
          }}
        >
          ~1천만
        </RangeSliderMark>
        <RangeSliderMark
          value={100000}
          mt="3"
          ml="-3"
          fontSize="sm"
          style={{
            fontFamily: 'Spoqa Han Sans Neo',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '14px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: '-0.03em',
            color: '#9D9999',
          }}
        >
          10억
        </RangeSliderMark>
        <RangeSliderMark
          value={200000}
          mt="3"
          ml="-6"
          fontSize="sm"
          style={{
            fontFamily: 'Spoqa Han Sans Neo',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '14px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: '-0.03em',
            color: '#9D9999',
            marginRight: '10px',
            width: '100px',
          }}
        >
          20억~
        </RangeSliderMark>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </>
  );
};

export const ReturnPriceSlider = ({ setReturnPriceMax }: Props) => {
  return (
    <>
      <RangeSlider
        aria-label={['min', 'max']}
        aria-valuetext={['min', 'max']}
        min={100}
        max={50000}
        defaultValue={[25000, 50000]}
        colorScheme="orange"
        onChangeEnd={(val) => setReturnPriceMax(val)}
        step={100}
      >
        <RangeSliderMark
          value={25000}
          mt="3"
          ml="-3"
          fontSize="sm"
          style={{
            fontFamily: 'Spoqa Han Sans Neo',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '14px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: '-0.03em',
            color: '#9D9999',
          }}
        >
          2억5천
        </RangeSliderMark>
        <RangeSliderMark
          value={50000}
          mt="3"
          ml="-6"
          fontSize="sm"
          style={{
            fontFamily: 'Spoqa Han Sans Neo',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '14px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: '-0.03em',
            color: '#9D9999',
            marginRight: '10px',
            width: '100px',
          }}
        >
          5억~
        </RangeSliderMark>
        <RangeSliderMark
          value={100}
          mt="3"
          fontSize="sm"
          style={{
            fontFamily: 'Spoqa Han Sans Neo',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '14px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: '-0.03em',
            color: '#9D9999',
          }}
        >
          ~100만
        </RangeSliderMark>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </>
  );
};

export const RentPriceSlider = ({ setRentPriceMax }: Props) => {
  return (
    <>
      <RangeSlider
        aria-label={['min', 'max']}
        aria-valuetext={['min', 'max']}
        min={0}
        max={100}
        defaultValue={[50, 100]}
        colorScheme="orange"
        onChangeEnd={(val) => setRentPriceMax(val)}
        step={10}
      >
        <RangeSliderMark
          value={50}
          mt="3"
          ml="-3"
          fontSize="sm"
          style={{
            fontFamily: 'Spoqa Han Sans Neo',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '14px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: '-0.03em',
            color: '#9D9999',
          }}
        >
          500만
        </RangeSliderMark>
        <RangeSliderMark
          value={100}
          mt="3"
          ml="-6"
          fontSize="sm"
          style={{
            fontFamily: 'Spoqa Han Sans Neo',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '14px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: '-0.03em',
            color: '#9D9999',
            marginRight: '10px',
            width: '100px',
          }}
        >
          1천만~
        </RangeSliderMark>
        <RangeSliderMark
          value={0}
          mt="3"
          fontSize="sm"
          style={{
            fontFamily: 'Spoqa Han Sans Neo',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '14px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: '-0.03em',
            color: '#9D9999',
          }}
        >
          ~10만
        </RangeSliderMark>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </>
  );
};
