import React from 'react';
import styled from 'styled-components';

interface Options {
  value: string;
  label: string;
}

type Object = {
  type: string | null;
  sub: string[] | null;
};

type Props = {
  options?: Options[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  value?: string;
  productType?: Object;
  transactionText?: string[] | null;
};

export const ModeBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 22px;
  gap: 6px;

  position: absolute;
  top: 59px;
  left: 0px;
  width: 152px;
  height: 58px;

  background: #ffffff;
  border-width: 1px 1px 1px 0px;
  border-style: solid;
  border-color: #d5d4d4;
`;

export const SelectBtn = styled.select`
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  outline: none;
`;

export const Option = styled.option`
  position: absolute;
  top: 100px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: #000000;
`;

export const Select = ({ options, value, onChange }: Props) => {
  return (
    <SelectBtn value={value} onChange={onChange}>
      {options?.map((option: any) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </SelectBtn>
  );
};

export const FilterHeader = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 1770px;
  height: 58px;
  top: -1px;
  left: 151px;
  border: 1px solid #d5d4d4;
  background-color: #ffffff;
`;

export const FilterBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 1000px;
  height: 36px;

  position: absolute;
  top: 11px;
  left: 16px;
`;

export const SProductType = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  gap: 4px;

  height: 36px;
  background: #ffffff;
  border: 1px solid #d5d4d4;
  border-radius: 6px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: ${(props) =>
    `${props.productType?.toString() === '' ? '#9d9999' : '#2A2828'}`};
  cursor: pointer;
`;

export const ArrowBtn = styled.div`
  width: 0;
  height: 0;
  margin-left: 3px;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-right: 4px solid #9d9999;
  transform: rotate(270deg);
`;

export const TypePrice = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  gap: 4px;

  width: 115px;
  height: 36px;

  background: #ffffff;
  border: 1px solid #d5d4d4;
  border-radius: 6px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #9d9999;
  cursor: pointer;
`;

export const Area = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  gap: 4px;

  width: 60px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #d5d4d4;
  border-radius: 6px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #9d9999;
  cursor: pointer;
`;

export const YearOfTran = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  gap: 4px;

  width: 85px;
  height: 36px;

  background: #ffffff;
  border: 1px solid #d5d4d4;
  border-radius: 6px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #9d9999;
  cursor: pointer;
`;

export const YearOfBuilding = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  gap: 4px;

  width: 85px;
  height: 36px;

  background: #ffffff;
  border: 1px solid #d5d4d4;
  border-radius: 6px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #9d9999;
  cursor: pointer;
`;

export const MainUsage = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  gap: 4px;

  width: 72px;
  height: 36px;

  background: #ffffff;
  border: 1px solid #d5d4d4;
  border-radius: 6px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #9d9999;
  cursor: pointer;
`;

export const OrderBy = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;

  width: 38px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #d5d4d4;
  border-radius: 6px;
  cursor: pointer;
`;

export const ResetBox = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 14px 16px;
  gap: 10px;

  width: 357px;
  height: 63px;
  top: 149px;
  left: -15px;

  background: #ffffff;
  border-top: 1px solid #f0f0f0;
  border-radius: 0px 0px 5px 5px;
`;

export const ResetBtn = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 4px 0px 0px;
  gap: 6px;

  width: 100px;
  height: 38px;

  background: #ffffff;
  border: 1px solid #d5d4d4;
  border-radius: 5px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: #686564;
`;
