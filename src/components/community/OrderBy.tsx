import styled from 'styled-components';

type Props = {
  clickedOrder: boolean;
};

export const OrderBox = styled.div`
  position: absolute;
  top: 15px;
  left: 550px;
  width: 200px;
  height: 20px;

  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const Updated = styled.div<Props>`
  position: absolute;
  left: 60px;
  width: 38px;
  height: 18px;

  cursor: pointer;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: ${(props) => `${props.clickedOrder ? '#666666' : '#BFBFBF'}`};
`;

export const Recommend = styled.div<Props>`
  position: absolute;
  left: 110px;
  width: 38px;
  height: 18px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: ${(props) => `${props.clickedOrder ? '#666666' : '#BFBFBF'}`};
  cursor: pointer;
`;

export const Repl = styled.div<Props>`
  position: absolute;
  left: 160px;
  width: 38px;
  height: 18px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: ${(props) => `${props.clickedOrder ? '#666666' : '#BFBFBF'}`};
  cursor: pointer;
`;

export const ClickedOrder = styled.div<Props>`
  position: absolute;
  top: 5px;
  left: -10px;
  width: 5px;
  height: 5px;

  background-color: ${(props) =>
    `${props.clickedOrder ? '#F16341' : '#FFFFFF'}`};
  border-radius: 150px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
