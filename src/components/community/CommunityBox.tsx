import styled from 'styled-components';

type Props = {
  innerTab: number;
};

export const QnABoxTab = styled.div<Props>`
  position: absolute;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
  gap: 10px;

  width: 100px;
  height: 40px;
  top: 86px;
  left: 38px;

  background: ${(props) =>
    `${props.innerTab == 0 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}`};
  color: ${(props) => `${props.innerTab == 0 ? '#F16341' : '#9B9B9B'}`};
  border: ${(props) =>
    `${props.innerTab == 0 ? '1px solid #F16341' : '1px solid #D5D5D5'}`};
  border-radius: 6px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  cursor: pointer;
  text-align: center;
  padding: 18px;
`;

export const FreeBoardTab = styled(QnABoxTab)`
  width: 74px;
  height: 40px;
  left: 150px;
  padding: 15px;

  background: ${(props) =>
    `${props.innerTab == 1 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}`};
  color: ${(props) => `${props.innerTab == 1 ? '#F16341' : '#9B9B9B'}`};
  border: ${(props) =>
    `${props.innerTab == 1 ? '1px solid #F16341' : '1px solid #D5D5D5'}`};
`;

export const KnowHowTab = styled(QnABoxTab)`
  width: 74px;
  height: 40px;
  background: ${(props) =>
    `${props.innerTab == 2 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}`};
  color: ${(props) => `${props.innerTab == 2 ? '#F16341' : '#9B9B9B'}`};
  border: ${(props) =>
    `${props.innerTab == 2 ? '1px solid #F16341' : '1px solid #D5D5D5'}`};
  padding: 15px;

  left: 235px;
`;

export const ReviewTab = styled(QnABoxTab)`
  left: 320px;
  width: 59px;
  height: 40px;
  padding: 15px;

  background: ${(props) =>
    `${props.innerTab == 3 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}`};
  color: ${(props) => `${props.innerTab == 3 ? '#F16341' : '#9B9B9B'}`};
  border: ${(props) =>
    `${props.innerTab == 3 ? '1px solid #F16341' : '1px solid #D5D5D5'}`};
`;

export const ContentsBox = styled.div`
  position: absolute;
  width: 778px;
  height: 1200px;
  left: 370px;
  top: 290px;

  background-color: #ffffff;
`;
