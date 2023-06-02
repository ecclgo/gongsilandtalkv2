import { AgreeBox } from '@/components/auth/AgreeBox';
import { ACheckBox, AgreeCheckBox } from '@/components/auth/Checkbox';
import { EmailForm } from '@/components/auth/EmailForm';
import { SignUpForm } from '@/components/auth/Form';
import {
  RegiEInput,
  RegiPInput,
  RegiPInputConfirm,
} from '@/components/auth/Input';
import {
  AllAgree,
  DetailAgree,
  EmailLabel,
  PassLabel,
  SignUpLabel,
} from '@/components/auth/Label';
import { NextBtn } from '@/components/auth/LoginBtn';
import { EmailBox, KakaoBox, NaverBox } from '@/components/auth/SignUpStart';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Object = {
  id: number;
  title: string;
};

export default function SignUp() {
  const [emailRegi, setEmailRegi] = useState<boolean>(false);
  const [checkItems, setCheckItems] = useState<number[]>([]);

  const data = [
    { id: 0, title: '[필수] 약관1 및 클릭시 약관 상세 바로가기' },
    { id: 1, title: '[필수] 약관2 및 클릭시 약관 상세 바로가기' },
    { id: 2, title: '[필수] 약관3 및 클릭시 약관 상세 바로가기' },
    { id: 3, title: '[선택] 약관4 및 클릭시 약관 상세 바로가기' },
  ];

  const handleSingleCheck = (checked: boolean, id: number) => {
    if (checked) {
      setCheckItems((prev: any) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el: number) => el !== id));
    }
  };

  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      const idArray: number[] = [];

      data.forEach((el: Object) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  return (
    <>
      <SignUpForm emailRegi={emailRegi}>
        <SignUpLabel>회원가입을 환영합니다!</SignUpLabel>
        <KakaoBox>
          <Image
            src={'/KaKaoLogo.png'}
            alt="KakaoLogo"
            width={17.39}
            height={16}
          />
          카카오로 시작하기
        </KakaoBox>
        <NaverBox>
          <Image
            src={'/NaverLogo.png'}
            alt="NaverLogo"
            width={17.39}
            height={16}
          />
          네이버로 시작하기
        </NaverBox>
        <EmailBox onClick={() => setEmailRegi(!emailRegi)}>
          <Image
            src={'/MailLogo.png'}
            alt="MailLogo"
            width={17.39}
            height={16}
          />
          이메일로 시작하기
        </EmailBox>
        {emailRegi ? (
          <EmailForm>
            <EmailLabel>이메일</EmailLabel>
            <RegiEInput
              name="email"
              type="email"
              placeholder="example@example.com"
            />
            <PassLabel>비밀번호</PassLabel>
            <RegiPInput
              name="password"
              type="password"
              placeholder="8자리 이상 영문, 숫자 포함"
            />
            <RegiPInputConfirm
              name="passwordConfirm"
              type="password"
              placeholder="비밀번호 확인"
            />
            <AgreeCheckBox
              onChange={(e) => handleAllCheck(e.target.checked)}
              checked={checkItems.length === data.length ? true : false}
            />
            <AllAgree>모두 동의합니다.</AllAgree>
            <AgreeBox>
              {data.map((el: any, index: any) => {
                return (
                  <div
                    style={{
                      margin: '16px',
                    }}
                    key={index}
                  >
                    <DetailAgree key={index}>{el.title}</DetailAgree>
                    <ACheckBox
                      onChange={(e) =>
                        handleSingleCheck(e.target.checked, el.id)
                      }
                      checked={checkItems.includes(el.id) ? true : false}
                    />
                  </div>
                );
              })}
            </AgreeBox>
            <NextBtn>
              <Link href="/Auth">다음</Link>
            </NextBtn>
          </EmailForm>
        ) : null}
      </SignUpForm>
    </>
  );
}
