import styled from 'styled-components';

type Props = {
  tabClicked: number;
};

export const GongtalkContentsText = styled.span<Props>`
  position: absolute;
  top: 19.5px;
  left: 147.5px;

  width: 95px;
  height: 25px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;

  text-align: center;
  letter-spacing: -0.03em;
  cursor: pointer;

  color: ${(props) => `${props.tabClicked === 0 ? '#000000' : '#D5D5D5'}`};
`;

export const CommunityText = styled(GongtalkContentsText)<Props>`
  left: 547.5px;
  color: ${(props) => `${props.tabClicked === 1 ? '#000000' : '#D5D5D5'}`};
`;

export const MovingSpan = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;

  letter-spacing: -0.02em;

  color: #000000;

  position: absolute;
  top: 28px;
  left: 30px;
`;
