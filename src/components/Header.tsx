import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  HeaderBox,
  HeaderHome,
  HeaderLogo,
  FHeaderProduct,
  SHeaderProduct,
  HeaderMap,
  HeaderCommunity,
  HeaderMyInfoBox,
  HeaderRecoBox,
  HeaderMapBox,
  HeaderMyProduct,
  HeaderCommunityBox,
  HeaderLogin,
  HeaderRegister,
  Bar,
  JonggaeBox,
  MenuIcon,
  NavMenu,
  NavItem,
} from './header/HeaderBox';
import {
  HeaderMyInfo,
  HomeText,
  Map,
  Recommend,
  HeaderCommu,
} from './header/HeaderText';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import MyPageBar from '../pages/MyPageBar';
import MyPageBarLogin from '../pages/MyPageBarLogin';

export default function Header() {
  const router = useRouter();
  const [login, setLogin] = useState(true);

  const [activeBtn, setActiveBtn] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeMyPage, setActiveMyPage] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [clicked, setClicked] = useState(0);

  const handleMyPage = () => {
    setActiveMyPage(!activeMyPage);
  };

  useEffect(() => {
    setActiveBtn(router.pathname);
  }, [activeBtn]);

  return (
    <>
      <HeaderBox>
        <HeaderLogo>
          <Link href={'/'}>
            <Image src={'/Logo.png'} alt="Logo" width={100} height={30} />
          </Link>
        </HeaderLogo>
        <HeaderHome onClick={() => setClicked(0)}>
          <Link href={'/'}>
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.2 16V10.3529H10.8V16H15.3V8.47059H18L9 0L0 8.47059H2.7V16H7.2Z"
                fill={clicked === 0 ? '#F16341' : '#C1C1C1'}
              />
            </svg>
          </Link>
        </HeaderHome>
        <FHeaderProduct onClick={() => setClicked(1)}>
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.28679 0.476562L0 4.66776V13.8919H4.38409V6.87734H7.89137V13.8919H12.2755V4.46609L6.28679 0.476562Z"
              fill={clicked === 1 ? '#F16341' : '#C1C1C1'}
            />
          </svg>
        </FHeaderProduct>
        <SHeaderProduct onClick={() => setClicked(1)}>
          <svg
            width="13"
            height="16"
            viewBox="0 0 13 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.890625 0.109375V1.43337L2.64426 2.59954L4.16116 3.61665H5.27472V4.36195L7.02836 5.53688V7.12393H8.782V8.87756H7.02836V10.6312H8.782V12.3848H7.02836V15.8921H12.2893V0.109375H0.890625ZM8.782 5.37029H7.02836V3.61665H8.782V5.37029Z"
              fill={clicked === 1 ? '#F16341' : '#C1C1C1'}
            />
          </svg>
        </SHeaderProduct>
        <HeaderMap onClick={() => setClicked(2)}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8724 0.5L14.7391 0.525L10.2891 2.25L5.28906 0.5L0.589062 2.08333C0.414062 2.14167 0.289062 2.29167 0.289062 2.48333V15.0833C0.289062 15.3167 0.472396 15.5 0.705729 15.5L0.839063 15.475L5.28906 13.75L10.2891 15.5L14.9891 13.9167C15.1641 13.8583 15.2891 13.7083 15.2891 13.5167V0.916667C15.2891 0.683333 15.1057 0.5 14.8724 0.5ZM10.2891 13.8333L5.28906 12.075V2.16667L10.2891 3.925V13.8333Z"
              fill={clicked === 2 ? '#F16341' : '#C1C1C1'}
            />
          </svg>
        </HeaderMap>
        <HeaderCommunity onClick={() => setClicked(3)}>
          <Link href={'/Community'}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.7566 0.546875C13.0468 0.546875 11.2055 0.897603 9.93407 1.8621C8.66268 0.897603 6.82136 0.546875 5.11157 0.546875C3.40177 0.546875 1.56045 0.897603 0.289062 1.8621V14.7075C0.289062 15.2774 0.92914 15.1021 0.946677 15.1021C2.13038 14.5321 3.84018 14.1376 5.11157 14.1376C6.82136 14.1376 8.66268 14.4883 9.93407 15.4528C11.1178 14.7075 13.266 14.1376 14.7566 14.1376C16.2033 14.1376 17.6939 14.4006 18.9215 15.0582C19.281 15.2424 19.5791 14.8916 19.5791 14.6637V1.8621C18.2726 0.880066 16.3962 0.546875 14.7566 0.546875ZM17.8254 12.8223C16.8609 12.5155 15.8088 12.3839 14.7566 12.3839C13.266 12.3839 11.1178 12.9539 9.93407 13.6992V3.61574C11.1178 2.87045 13.266 2.30051 14.7566 2.30051C15.8088 2.30051 16.8609 2.43204 17.8254 2.73892V12.8223Z"
                fill={clicked === 3 ? '#F16341' : '#C1C1C1'}
              />
            </svg>
          </Link>
        </HeaderCommunity>
        <HeaderMyInfoBox onClick={() => setClicked(4)}>
          <Link href={login ? '/MyPageBarLogin' : '/MyPageBar'}>
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.57812 1.9C9.73812 1.9 10.6781 2.84 10.6781 4C10.6781 5.16 9.73812 6.1 8.57812 6.1C7.41813 6.1 6.47812 5.16 6.47812 4C6.47812 2.84 7.41813 1.9 8.57812 1.9ZM8.57812 10.9C11.5481 10.9 14.6781 12.36 14.6781 13V14.1H2.47813V13C2.47813 12.36 5.60812 10.9 8.57812 10.9ZM8.57812 0C6.36812 0 4.57812 1.79 4.57812 4C4.57812 6.21 6.36812 8 8.57812 8C10.7881 8 12.5781 6.21 12.5781 4C12.5781 1.79 10.7881 0 8.57812 0ZM8.57812 9C5.90812 9 0.578125 10.34 0.578125 13V16H16.5781V13C16.5781 10.34 11.2481 9 8.57812 9Z"
                fill={clicked === 4 ? '#F16341' : '#C1C1C1'}
              />
            </svg>
          </Link>
        </HeaderMyInfoBox>
        <HomeText clicked={clicked}>
          <Link href={'/'}>홈</Link>
        </HomeText>
        <Recommend clicked={clicked}>추천분양</Recommend>
        <Map clicked={clicked}>지도</Map>
        <HeaderCommu clicked={clicked}>
          <Link href={'/Community'}>커뮤니티</Link>
        </HeaderCommu>
        <HeaderMyInfo clicked={clicked}>My메뉴</HeaderMyInfo>
        <HeaderRecoBox activeBtn={router.pathname}>
          <Link
            href={'/Recommend'}
            onClick={() => {
              setActiveBtn(router.pathname);
            }}
          >
            추천 분양현장
          </Link>
        </HeaderRecoBox>
        <HeaderMapBox activeBtn={router.pathname}>
          <Link
            href={'/Map'}
            onClick={() => {
              setActiveBtn(router.pathname);
            }}
          >
            실시간 매물지도
          </Link>
        </HeaderMapBox>
        <HeaderMyProduct activeBtn={router.pathname}>
          <Link
            href={'/Mybuilding'}
            onClick={() => {
              setActiveBtn(router.pathname);
            }}
          >
            내 매물관리
          </Link>
        </HeaderMyProduct>
        <HeaderCommunityBox activeBtn={router.pathname}>
          <Link
            href={'/Community/Contents/Youtube'}
            onClick={() => {
              setActiveBtn(router.pathname);
            }}
          >
            커뮤니티
          </Link>
        </HeaderCommunityBox>
        <HeaderLogin>
          <Link href={'/Sign-in'}>로그인</Link>
        </HeaderLogin>
        <Bar />
        <HeaderRegister>
          <Link href={'/Sign-up'}>회원가입</Link>
        </HeaderRegister>
        <JonggaeBox>중개사 가입</JonggaeBox>
        <MenuIcon
          onClick={() => {
            handleToggle();
            handleMyPage();
          }}
        >
          {isOpen ? <FaBars /> : <FaBars />}
        </MenuIcon>
        <NavMenu isOpen={isOpen}>
          <NavItem></NavItem>
        </NavMenu>
        {activeMyPage && login ? (
          <MyPageBarLogin
            login={login}
            activeMyPage={activeMyPage}
            setActiveMyPage={setActiveMyPage}
          />
        ) : activeMyPage && !login ? (
          <MyPageBar
            login={login}
            activeMyPage={activeMyPage}
            setActiveMyPage={setActiveMyPage}
          />
        ) : null}
      </HeaderBox>
    </>
  );
}
