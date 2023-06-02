import styled from 'styled-components';

type Props = {
  clicked?: number;
};

export const HomeText = styled.span<Props>`
  @media screen and (max-width: 768px) {
    position: absolute;
    width: 10px;
    height: 13px;
    left: 37px;
    top: 28px;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 13px;

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.03em;

    color: ${(props) => `${props.clicked === 0 ? '#F16341' : '#C1C1C1'}`};
  }
  display: none;
`;

export const Recommend = styled(HomeText)`
  left: 93px;
  width: 41px;
  color: ${(props) => `${props.clicked === 1 ? '#F16341' : '#C1C1C1'}`};
`;

export const Map = styled(HomeText)`
  left: 172px;
  width: 35px;
  color: ${(props) => `${props.clicked === 2 ? '#F16341' : '#C1C1C1'}`};
`;

export const HeaderCommu = styled(HomeText)`
  left: 231px;
  width: 41px;
  color: ${(props) => `${props.clicked === 3 ? '#F16341' : '#C1C1C1'}`};
`;

export const HeaderMyInfo = styled(HomeText)`
  left: 303.5px;
  width: 37px;
  color: ${(props) => `${props.clicked === 4 ? '#F16341' : '#C1C1C1'}`};
`;
