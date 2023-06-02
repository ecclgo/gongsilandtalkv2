import styled from 'styled-components';

export const NoticeBox = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 702px;
  height: 76px;
  left: 38px;
  top: 150px;
  bottom: 797px;
`;

export const EmptyBox = styled.div`
  position: absolute;
  width: 778px;
  height: 1px;
  left: 38px;
  top: 216px;

  background: #f7f7f7;
`;

export const Line = styled.div`
  width: 704px;
  height: 0px;
  opacity: 0.6;
  border: 1px solid #d5d5d5;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-left: 38px;
`;
