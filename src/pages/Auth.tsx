import {
  AuthNameInput,
  AuthPhoneNum,
  AuthPhoneSMS,
} from '@/components/auth/Input';
import { AuthName, AuthPhone } from '@/components/auth/Label';
import { AuthConfirm, AuthSend, ConfirmSend } from '@/components/auth/LoginBtn';
import { useState } from 'react';
import styled from 'styled-components';

export const AuthBox = styled.div`
  position: absolute;
  width: 578px;
  height: 526px;
  left: 671px;
  top: 311px;

  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
`;

export const AuthText = styled.span`
  position: absolute;
  width: 84px;
  height: 28px;
  top: 80px;
  left: 247px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: #000000;
`;

export default function Auth() {
  const [authCode, setAuthCode] = useState<boolean>(true);

  return (
    <>
      <AuthBox>
        <AuthText>본인 인증</AuthText>
        <form>
          <AuthName>이름</AuthName>
          <AuthNameInput name="name" type="text" placeholder="홍길동" />
          <AuthPhone>휴대전화</AuthPhone>
          <AuthPhoneNum
            name="phone"
            type="text"
            placeholder="-없이 숫자만 입력"
          />
          <AuthSend>인증번호 전송</AuthSend>
          <AuthPhoneSMS
            name="confirmNum"
            type="text"
            placeholder="인증번호 입력"
          />
          <AuthConfirm authCode={authCode} disabled={authCode}>
            인증번호 확인
          </AuthConfirm>
          <ConfirmSend>완료</ConfirmSend>
        </form>
      </AuthBox>
    </>
  );
}
