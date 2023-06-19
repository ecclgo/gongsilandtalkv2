import styled from 'styled-components';

type Props = {
  changeSubMenuBox?: number;
  changeSubMenu?: number;
};

export const CouponType = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  gap: 10px;

  width: 58px;
  height: 34px;

  background: #ffffff;

  border: ${(props) =>
    props.changeSubMenuBox === 2 ? '1px solid #f16341' : '1px solid #d5d4d4'};
  color: ${(props) => (props.changeSubMenuBox === 2 ? '#f16341' : '#9E9E9E')};

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

export const CouSubBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 311px;
  height: 76px;
  left: 0px;
  top: 60px;
`;

export const ApartCoup = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  gap: 10px;

  width: 98px;
  height: 34px;

  background: rgba(241, 99, 65, 0.1);
  border: 1px solid #F16341;
  color: #F16341;

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

export const OfficetelCoup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  gap: 10px;

  position: absolute;
  left: 108px;
  width: 111px;
  height: 34px;

  background: #FFFFFF;
  border: 1px solid #D5D4D4;
  color: #9E9E9E;
  
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

export const BuildingCoup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  gap: 10px;

  position: absolute;
  left: 228px;
  width: 86px;
  height: 34px;

  background: #FFFFFF;
  border: 1px solid #D5D4D4;
  color: #9E9E9E;
  
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

export const JisanCoup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  
  color: #9E9E9E;
  background: #FFFFFF;
  border: 1px solid #D5D4D4;
  border-radius: 50px;

  
  width: 136px;
  height: 34px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  text-align: center;
  display: flex;
  letter-spacing: -0.03em;
  cursor: pointer;
`;