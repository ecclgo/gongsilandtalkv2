import styled from 'styled-components';

type Props = {
  changeSubMenu?: number;
  changeSubMenuBox?: number;
};

export const ProductTypeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 360px;
  height: 256px;
  left: 168px;
  top: 112px;

  background-color: #ffffff;
  border: 1px solid #d5d4d4;

  filter: drop-shadow(0px 0px 15px rgba(42, 40, 40, 0.1));
  border-radius: 5px;
  display: flex;
  z-index: 999999;
`;

export const ProductTypeText = styled.span`
  position: absolute;
  width: 54px;
  height: 18px;
  left: 16px;
  top: 14px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #2a2828;
`;

export const ProductTypeSubBox = styled.div`
  position: absolute;
  width: 328px;
  height: 130px;
  left: 16px;
  top: 42px;
  flex-direction: row;
`;

export const FilterType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 204px;
  height: 34px;
  left: 0px;
  top: 0px;
`;

export const HouseType = styled.div<Props>`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  gap: 10px;

  width: 58px;
  height: 34px;

  border: ${(props) =>
    props.changeSubMenuBox === 0 ? '1px solid #f16341' : '1px solid #d5d4d4'};
  color: ${(props) => (props.changeSubMenuBox === 0 ? '#f16341' : '#9E9E9E')};

  border-radius: 50px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  cursor: pointer;
`;

export const TypeLine = styled.div`
  position: absolute;
  width: 328px;
  height: 0px;
  left: 2px;
  top: 50px;

  border: 1px solid #f0f0f0;
  border-radius: 1px;
`;

export const HouseTypeSubMenuBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 270px;
  height: 76px;
  left: 0px;
  top: 60px;
`;

export const Apartment = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  gap: 10px;

  width: 58px;
  height: 34px;

  background: ${(props) =>
    `${props.changeSubMenu === 0 ? 'rgba(241, 99, 65, 0.1)' : ' #ffffff'}`};
  border: ${(props) =>
    `${props.changeSubMenu === 0 ? '1px solid #f16341' : '1px solid #d5d4d4'}`};
  color: ${(props) => `${props.changeSubMenu === 0 ? ' #f16341' : '#9e9e9e'}`};

  border-radius: 50px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  cursor: pointer;
`;

export const Officetel = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  gap: 10px;

  width: 71px;
  height: 34px;

  background: ${(props) =>
    `${props.changeSubMenu === 1 ? 'rgba(241, 99, 65, 0.1)' : ' #ffffff'}`};
  border: ${(props) =>
    `${props.changeSubMenu === 1 ? '1px solid #f16341' : '1px solid #d5d4d4'}`};
  color: ${(props) => `${props.changeSubMenu === 1 ? ' #f16341' : '#9e9e9e'}`};

  border-radius: 50px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  cursor: pointer;
`;

export const CommerceHouse = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  gap: 10px;

  width: 71px;
  height: 34px;

  background: ${(props) =>
    `${props.changeSubMenu === 2 ? 'rgba(241, 99, 65, 0.1)' : ' #ffffff'}`};
  border: ${(props) =>
    `${props.changeSubMenu === 2 ? '1px solid #f16341' : '1px solid #d5d4d4'}`};
  color: ${(props) => `${props.changeSubMenu === 2 ? ' #f16341' : '#9e9e9e'}`};

  border-radius: 50px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  cursor: pointer;
`;

export const House = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  gap: 10px;

  width: 46px;
  height: 34px;

  background: ${(props) =>
    `${props.changeSubMenu === 3 ? 'rgba(241, 99, 65, 0.1)' : ' #ffffff'}`};
  border: ${(props) =>
    `${props.changeSubMenu === 3 ? '1px solid #f16341' : '1px solid #d5d4d4'}`};
  color: ${(props) => `${props.changeSubMenu === 3 ? ' #f16341' : '#9e9e9e'}`};

  border-radius: 50px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  cursor: pointer;
`;

export const SingleHouse = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  gap: 10px;
  position: absolute;
  top: 45px;

  width: 88px;
  height: 34px;

  background: ${(props) =>
    `${props.changeSubMenu === 4 ? 'rgba(241, 99, 65, 0.1)' : ' #ffffff'}`};
  border: ${(props) =>
    `${props.changeSubMenu === 4 ? '1px solid #f16341' : '1px solid #d5d4d4'}`};
  color: ${(props) => `${props.changeSubMenu === 4 ? ' #f16341' : '#9e9e9e'}`};

  border-radius: 50px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  cursor: pointer;
`;

export const MultiHouse = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  gap: 10px;

  width: 118px;
  height: 34px;

  background: ${(props) =>
    `${props.changeSubMenu === 5 ? 'rgba(241, 99, 65, 0.1)' : ' #ffffff'}`};
  border: ${(props) =>
    `${props.changeSubMenu === 5 ? '1px solid #f16341' : '1px solid #d5d4d4'}`};
  color: ${(props) => `${props.changeSubMenu === 5 ? ' #f16341' : '#9e9e9e'}`};

  border-radius: 50px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  position: absolute;
  top: 45px;
  left: 98px;

  cursor: pointer;
`;
