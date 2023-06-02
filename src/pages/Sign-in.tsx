import { CheckBox } from '@/components/auth/Checkbox';
import { FindPW } from '@/components/auth/FindPW';
import { Form } from '@/components/auth/Form';
import { EInput, PInput } from '@/components/auth/Input';
import { KeepLogin } from '@/components/auth/KeepLogin';
import { Label } from '@/components/auth/Label';
import { Button } from '@/components/auth/LoginBtn';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

type Data = {
  data?: object;
};

export default function SignIn() {
  const { register, handleSubmit, getValues, clearErrors, formState } = useForm(
    {
      mode: 'onChange',
    }
  );

  const onSubmit = async (data: Data) => {
    const { email } = getValues();
    console.log(data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>공실앤톡 로그인</Label>
        <EInput
          {...register('email', {
            required: 'email을 입력해주세요.',
          })}
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요."
        />
        <PInput
          {...register('password', {
            required: 'password를 입력해주세요.',
          })}
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
        <CheckBox />
        <KeepLogin>로그인 상태 유지</KeepLogin>
        <FindPW>
          <Link href="/FindPW">비밀번호 찾기</Link>
        </FindPW>
        <Button>로그인</Button>
      </Form>
    </>
  );
}
