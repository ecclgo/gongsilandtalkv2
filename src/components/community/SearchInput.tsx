import styled, { keyframes } from 'styled-components';

type Props = {
  show: boolean;
};

export const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchIcon = styled.i`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateX(-50%);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-50%) scale(1.2);
  }
`;

export const SearchInput = styled.input<Props>`
  position: absolute;
  top: 98px;
  left: 720px;
  right: 0;
  transform: translateY(-50%) translateX(-100%);
  width: 200px;
  padding: 8px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  animation: ${({ show }) => (show ? slideIn : slideOut)} 0.2s forwards;
  animation-fill-mode: backwards;
`;
