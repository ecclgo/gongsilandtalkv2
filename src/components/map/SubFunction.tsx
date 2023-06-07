import styled from 'styled-components';

export const FunctionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 22px;

  position: absolute;
  width: 44px;
  height: 316px;
  left: 1851px;
  top: 152px;
  z-index: 99999;
`;

export const GpsFunction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 9px;
  gap: 9px;

  width: 50px;
  height: 50px;
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  cursor: pointer;
`;

export const Minus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  cursor: pointer;
`;

export const Plus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 111px;
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 6px;
  margin-top: 13px;
  cursor: pointer;
`;

export const Line = styled.div`
  border: 1px solid #d5d4d4;
  position: absolute;
  top: 122px;
  width: 50px;
  height: 0px;
`;

export const MapFunction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 8px;
  margin-top: 14px;
  gap: 9px;

  position: absolute;
  top: 170px;
  width: 50px;
  height: 50px;

  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 6px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  color: #2a2828;
  cursor: pointer;
`;

export const MapFunction2 = styled.div`
  display: flex;
  margin-top: 14px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 8px;
  gap: 9px;

  position: absolute;
  top: 228px;
  width: 50px;
  height: 50px;

  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 6px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  color: #2a2828;
  cursor: pointer;
`;

export const NearFunction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 8px;
  gap: 9px;

  position: absolute;
  top: 290px;
  width: 44px;
  height: 44px;

  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #2a2828;
  cursor: pointer;
`;

export const SearchInputBox = styled.div`
  position: absolute;
  left: 0%;
  top: 120px;
  bottom: 84.63%;
  z-index: 999999;
  width: 360px;
  height: 50px;
  background-color: #ffffff;

  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 14px;
  gap: 10px;
`;

export const SearchInputText = styled.input`
  position: absolute;
  left: 10%;
  top: -1px;
  bottom: 84.63%;
  z-index: 999999;
  width: 320px;
  height: 50px;
  background-color: #ffffff;

  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 14px;
  gap: 10px;
`;
