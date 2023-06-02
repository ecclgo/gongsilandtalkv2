import styled from 'styled-components';

type Props = {
  show?: boolean;
};

export const SelectBox = styled.div`
  position: relative;
  width: 120px;
  border-radius: 12px;
  background-color: #ffffff;
  align-self: center;
  cursor: pointer;
  &::before {
    content: '⌵';
    position: absolute;
    top: 0px;
    right: 8px;
    color: #333333;
    font-size: 20px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
`;

export const SelectOptions = styled.ul<Props>`
  position: absolute;
  list-style: none;
  top: 18px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 90px;
  padding: 0;
  border-radius: 8px;
  max-height: ${(props) => (props.show ? 'none' : '0')};
  z-index: 99999;
  background-color: #f7f7f7;
  color: #333333;
`;

export const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  z-index: 99999;
  &:hover {
    background-color: #ffffff;
  }
`;
