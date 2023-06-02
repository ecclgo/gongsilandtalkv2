import Link from 'next/link';
import styled from 'styled-components';

type Props = {
  activeBtn?: any;
  isOpen?: boolean;
};

export const HeaderBox = styled('div')`
  @media screen and (max-width: 768px) {
    display: flex;
    position: relative;
    width: 360px;
    height: 48px;
    left: 0px;
    top: 622px;
    background: #ffffff;
    box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.1);
    color: #333333;
    z-index: 99999;
  }

  position: absolute;
  width: 1920px;
  height: 60px;
  left: 0px;
  top: 0px;

  background-color: #ffffff;
  border-bottom: 1px solid #d5d5d5;
`;

export const HeaderLogo = styled('div')`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  top: 15px;
  left: 40px;
`;

export const HeaderHome = styled.div`
  @media (max-width: 700px) {
    display: flex;
    position: absolute;
    left: 33.5px;
    top: 9px;
  }
  display: none;
`;

export const FHeaderProduct = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    left: 103px;
    top: 11px;
  }
  display: none;
`;

export const SHeaderProduct = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    left: 110.89px;
    top: 9.11px;
  }
  display: none;
`;

export const HeaderMap = styled('div')`
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    left: 174.29px;
    top: 9.5px;
  }
  display: none;
`;

export const HeaderCommunity = styled('div')`
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    left: 241.29px;
    top: 9.55px;
  }
  display: none;
`;

export const HeaderMyInfoBox = styled('div')`
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    left: 312.58px;
    top: 9.55px;
    cursor: pointer;
  }
  display: none;
`;

export const HeaderRecoBox = styled.div<Props>`
  @media screen and (max-width: 768px) {
    display: none;
  }

  position: absolute;
  width: 101px;
  height: 23px;
  left: 637px;
  top: 18px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  cursor: pointer;
  color: ${(props) =>
    `${props.activeBtn === '/Recommend' ? '#F16341' : '#343232'}`};
`;

export const HeaderMapBox = styled(HeaderRecoBox)`
  left: 824px;
  width: 120px;
  color: ${(props) =>
    `${props.activeBtn === '/Map' ? '#F16341' : '#343232'}`};
`;

export const HeaderMyProduct = styled(HeaderRecoBox)`
  left: 1027px;
  color: ${(props) =>
    `${props.activeBtn === '/Mybuilding' ? '#F16341' : '#343232'}`};
`;

const pattern = /^\/Community/;

export const HeaderCommunityBox = styled(HeaderRecoBox)`
  @media screen and (max-width: 768px) {
    display: none;
  }
  display: flex;
  left: 1198px;
  color: ${(props) =>
    `${pattern.test(props.activeBtn) ? '#F16341' : '#343232'}`};
`;

export const HeaderLogin = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  left: 1600px;
  top: 20px;

  width: 44px;
  height: 20px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #848484;
  cursor: pointer;
`;

export const HeaderRegister = styled(HeaderLogin)`
  left: 1670px;
  width: 60px;
`;

export const Bar = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  left: 1650px;
  top: 26px;
  width: 12px;
  height: 0px;

  border: 1px solid #cecece;
  transform: rotate(90deg);
`;

export const JonggaeBox = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 10px;
  left: 1732px;
  top: 16px;

  width: 95px;
  height: 28px;

  background: #d5d5d5;
  border-radius: 50px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #3a3a3a;
  cursor: pointer;
`;

export const NavLink = styled(Link)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;

  position: absolute;
  right: 10px;
`;

export const MenuIcon = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  display: flex;
  position: absolute;
  left: 1855px;
  top: 20px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const NavMenu = styled.ul<Props>`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: 0;
    background-color: #fff;
    opacity: 0.95;
    transition: all 0.3s ease-in-out;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;
