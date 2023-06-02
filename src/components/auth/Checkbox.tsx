import styled from 'styled-components';

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  height: 16px;
  width: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 1px;
  margin-left: 1rem;
  margin-top: 5px;

  position: absolute;
  top: 251px;
  left: 65px;
  right: 482px;
  bottom: 219px;

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

export const AgreeCheckBox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  height: 16px;
  width: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 1px;
  margin-left: 1rem;
  margin-top: 5px;

  position: absolute;
  top: 298px;
  left: 65px;

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

export const ACheckBox = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  appearance: none;
  width: 16px;
  height: 16px;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;

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
