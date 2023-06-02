import styled from 'styled-components';

type Props = {
  even: boolean;
};

type Object = {
  id: number;
  title: string;
  replCnt: string;
  Date: string;
  view: string;
};

export const TableContainer = styled.div`
  position: absolute;
  left: 35px;
  width: 938px;
  border-radius: 4px;
`;

export const TableHeader = styled.div`
  display: flex;
  background-color: #ffffff;
  font-weight: bold;
  padding: 8px;
`;

export const Underline = styled.div`
  width: 938px;
  height: 1px;
  border: 1px solid #d5d4d4;
  position: absolute;
  top: 40px;
`;

export const BottomUnderline = styled.div`
  width: 938px;
  height: 1px;
  border: 1px solid #f0f0f0;
`;

export const TableRow = styled.div<Props>`
  display: flex;
  padding: 20px;
  background-color: ${(props) => (props.even ? 'white' : 'white')};
  cursor: pointer;
`;

export const TableCell = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const TableCellNo = styled.div``;

export const TableTitleCell = styled.div`
  width: 500px;
  align-items: center;
  justify-content: center;
`;

export const SelectBox = styled.div`
  position: absolute;
  width: 938px;
  height: 30px;
  left: 510px;
  top: 245px;
`;

export const SelectAllText = styled.span`
  position: absolute;
  left: 30px;
  width: 51px;
  height: 18px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  letter-spacing: -0.03em;

  color: #686564;
`;

export const BoardCheckBox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  height: 16px;
  width: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;

  position: absolute;
  left: 0px;
  margin-top: 5px;
  margin-left: 10px;

  &:checked {
    &::before {
      content: '\\2713';
      display: block;
      height: 16px;
      width: 16px;
      background-color: #f16341;
      border-radius: 3px;
      text-align: center;
      line-height: 1rem;
      font-size: 1rem;
      color: white;
    }
  }
`;

export const DeleteBtn = styled.button`
  position: absolute;
  right: 0px;
  width: 73px;
  height: 30px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  display: flex;
  cursor: pointer;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  border: 1px solid;
  border-radius: 5px;
  width: 73px;

  letter-spacing: -0.03em;

  color: #686564;
`;

export const AllCheckBox = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  appearance: none;
  width: 16px;
  height: 16px;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 3px;
  left: 5px;
  position: absolute;

  &:checked {
    &::before {
      content: '\\2713';
      display: block;
      height: 16px;
      width: 16px;
      background-color: #f16341;
      border-radius: 3px;
      text-align: center;
      line-height: 1rem;
      font-size: 1rem;
      color: white;
    }
  }
`;
