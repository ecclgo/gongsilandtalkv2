import styled from 'styled-components';

type Props = {
  changeSubMenuBox?: number;
  changeSubMenu?: number;
};

export const CommerceType = styled.div<Props>`
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
    props.changeSubMenuBox === 1 ? '1px solid #f16341' : '1px solid #d5d4d4'};
  color: ${(props) => (props.changeSubMenuBox === 1 ? '#f16341' : '#9E9E9E')};

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

export const CommerceTypeSubMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 250px;
  height: 76px;
  left: 0px;
  top: 60px;
`;

export const CommerceBud = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  gap: 10px;

  width: 46px;
  height: 34px;

  background: ${(props) =>
    `${props.changeSubMenu === 6 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}`};
  border: ${(props) =>
    `${props.changeSubMenu === 6 ? '1px solid #F16341' : '1px solid #D5D4D4'}`};
  color: ${(props) => `${props.changeSubMenu === 6 ? '#F16341' : '#9E9E9E'}`};

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

export const Office = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  gap: 10px;

  position: absolute;
  left: 55px;
  width: 58px;
  height: 34px;

  background: ${(props) =>
    `${props.changeSubMenu === 7 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}`};
  border: ${(props) =>
    `${props.changeSubMenu === 7 ? '1px solid #F16341' : '1px solid #D5D4D4'}`};
  color: ${(props) => `${props.changeSubMenu === 7 ? '#F16341' : '#9E9E9E'}`};

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

export const Building = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  gap: 10px;

  position: absolute;
  left: 121px;
  width: 46px;
  height: 34px;

  background: ${(props) =>
    `${props.changeSubMenu === 8 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}`};
  border: ${(props) =>
    `${props.changeSubMenu === 8 ? '1px solid #F16341' : '1px solid #D5D4D4'}`};
  color: ${(props) => `${props.changeSubMenu === 8 ? '#F16341' : '#9E9E9E'}`};

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

export const Acre = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  gap: 10px;

  position: absolute;
  left: 175px;
  width: 76px;
  height: 34px;

  background: ${(props) =>
    `${props.changeSubMenu === 9 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}`};
  border: ${(props) =>
    `${props.changeSubMenu === 9 ? '1px solid #F16341' : '1px solid #D5D4D4'}`};
  color: ${(props) => `${props.changeSubMenu === 9 ? '#F16341' : '#9E9E9E'}`};

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

export const Jisan = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  gap: 10px;

  width: 96px;
  height: 34px;

  background: ${(props) =>
    `${props.changeSubMenu === 10 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}`};
  border: ${(props) =>
    `${
      props.changeSubMenu === 10 ? '1px solid #F16341' : '1px solid #D5D4D4'
    }`};
  color: ${(props) => `${props.changeSubMenu === 10 ? '#F16341' : '#9E9E9E'}`};

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

export const Factory = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  gap: 10px;

  position: absolute;
  top: 42px;
  left: 105px;
  width: 76px;
  height: 34px;

  background: ${(props) =>
    `${props.changeSubMenu === 11 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}`};
  border: ${(props) =>
    `${
      props.changeSubMenu === 11 ? '1px solid #F16341' : '1px solid #D5D4D4'
    }`};
  color: ${(props) => `${props.changeSubMenu === 11 ? '#F16341' : '#9E9E9E'}`};

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
