import styled from 'styled-components';

interface Props {
  emailRegi: boolean;
}

export const Form = styled.form`
  position: absolute;
  top: 299px;
  left: 671px;
  right: 671px;
  bottom: 295px;

  box-sizing: border-box;
  width: 578px;
  height: 488px;

  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 10px;

  @media (max-width: 768px) {
    position: absolute;
    top: 202px;
    left: 20px;
    width: 320px;

    box-sizing: border-box;
    width: 578px;
    height: 488px;

    background-color: #ffffff;
    border: 1px solid #f0f0f0;
    border-radius: 10px;
  }
`;

export const SignUpForm = styled(Form)<Props>`
  height: ${(props) => `${props.emailRegi ? '946px' : '488px'}`};
`;
