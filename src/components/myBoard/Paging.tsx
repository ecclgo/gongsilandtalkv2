import styled from 'styled-components';

type Props = {
  activeBtn: boolean;
};

export const LeftArrowBox = styled.div`
  position: absolute;
  top: -2px;
  left: -100px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const PagingUl = styled.div`
  position: absolute;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 22px;

  width: 133px;
  height: 22px;
  left: calc(50% - 133px / 2);
  top: 1030px;
`;

export const RightArrowBox = styled.div`
  position: absolute;
  top: -2px;
  left: 130px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const PageLi = styled.li`
  display: inline-block;
  align-items: flex-start;
  padding: 0px;
  gap: 22px;
  left: 100px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  letter-spacing: -0.03em;

  color: #9b9b9b;
`;

export const PageSpan = styled.button<Props>`
  width: 25px;
  border-radius: 5px;
  cursor: pointer;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: ${(props) => `${props.activeBtn ? 700 : 500}`};
  font-size: 16px;
  line-height: 22px;

  letter-spacing: -0.03em;

  color: ${(props) => `${props.activeBtn ? '#000000' : '#9B9B9B'}`};
`;
