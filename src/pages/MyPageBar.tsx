import { useState } from 'react';
import {
  CenterCallBtn,
  CloseBtn,
  LoginBtn,
  LoginInfo,
  MyInfoBox,
  MyPage,
  PhoneLogo,
  RegiBtn,
  SubBox,
  TopBar,
  TopBarText,
} from '../components/myPage/MyPageBar';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  activeMyPage: boolean;
  setActiveMyPage: React.Dispatch<React.SetStateAction<boolean>>;
  login: boolean;
};
export default function MyPageBar({
  activeMyPage,
  setActiveMyPage,
  login,
}: Props) {
  const handleCloseBtn = () => {
    setActiveMyPage(!activeMyPage);
  };

  return (
    <>
      <MyPage>
        <TopBar>
          <CloseBtn onClick={handleCloseBtn}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.295 2.115C13.6844 1.72564 13.6844 1.09436 13.295 0.705C12.9056 0.315639 12.2744 0.315639 11.885 0.705L7 5.59L2.115 0.705C1.72564 0.315639 1.09436 0.315639 0.705 0.705C0.315639 1.09436 0.315639 1.72564 0.705 2.115L5.59 7L0.705 11.885C0.315639 12.2744 0.315639 12.9056 0.705 13.295C1.09436 13.6844 1.72564 13.6844 2.115 13.295L7 8.41L11.885 13.295C12.2744 13.6844 12.9056 13.6844 13.295 13.295C13.6844 12.9056 13.6844 12.2744 13.295 11.885L8.41 7L13.295 2.115Z"
                fill="#9B9B9B"
              />
            </svg>
          </CloseBtn>
          <TopBarText>My 메뉴</TopBarText>
          <MyInfoBox>
            <Image
              src={'/LoginPic.png'}
              alt="LoginPic"
              width={38}
              height={38}
              style={{
                marginTop: '30px',
                marginLeft: '20px',
              }}
            />
            <Link href={'/Sign-in'}>
              <LoginBtn onClick={handleCloseBtn}>로그인</LoginBtn>
            </Link>
            <Link href={'/Sign-up'}>
              <RegiBtn onClick={handleCloseBtn}>회원가입</RegiBtn>
            </Link>
            <LoginInfo>
              {login ? '님 환영합니다.' : '로그인이 필요합니다.'}
            </LoginInfo>
          </MyInfoBox>
        </TopBar>
        <SubBox>
          <CenterCallBtn>
            <PhoneLogo>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.84096 5.75333C5.31385 6.60636 5.85887 7.42504 6.56649 8.17159C7.27639 8.92271 8.15919 9.60628 9.30191 10.1902C9.38664 10.2315 9.46679 10.2315 9.53893 10.2028C9.6477 10.1616 9.75877 10.0712 9.86754 9.96238C9.95227 9.87765 10.0576 9.74254 10.1675 9.59483C10.6072 9.0166 11.1511 8.29868 11.9194 8.65822C11.9366 8.66623 11.9492 8.67539 11.9663 8.68226L14.5289 10.1559C14.5369 10.1605 14.546 10.1685 14.5529 10.1731C14.8907 10.4055 15.0304 10.7639 15.0338 11.1704C15.0338 11.5837 14.8815 12.0486 14.6583 12.4413C14.3628 12.96 13.9277 13.3035 13.4262 13.5302C12.9488 13.7501 12.4175 13.868 11.9068 13.9436C11.1053 14.0615 10.3542 13.9859 9.58587 13.7501C8.83475 13.5176 8.0779 13.134 7.2512 12.6234L7.19052 12.5844C6.81152 12.3474 6.40161 12.0944 5.99971 11.7955C4.52952 10.6849 3.03071 9.08072 2.05401 7.31512C1.23533 5.83348 0.788782 4.23391 1.03267 2.7099C1.16778 1.87405 1.52617 1.11376 2.15134 0.612252C2.69636 0.172569 3.43031 -0.0678826 4.38067 0.0168479C4.48944 0.0248629 4.58677 0.0878383 4.6383 0.181729L6.28138 2.95952C6.52183 3.27096 6.5516 3.58011 6.41993 3.88926C6.31115 4.14231 6.09131 4.37589 5.79132 4.59344C5.70315 4.66901 5.59781 4.74573 5.48675 4.82588C5.1192 5.09266 4.70127 5.40067 4.8444 5.76249L4.84096 5.75333Z"
                  fill="#F16341"
                />
              </svg>
            </PhoneLogo>
            공실앤톡 고객센터 문의
          </CenterCallBtn>
        </SubBox>
      </MyPage>
    </>
  );
}
