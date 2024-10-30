import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: navy;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
`;

export const HeaderTitle = styled.h1`
  color: #f8f8f8;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const AuthButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  background-color: green;
  color: #f8f8f8;
  height: 30px;
  padding: 0 1rem;
  font-size: 0.9rem;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    font-size: 0.9rem;
  }
`;

export const CartButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  background-color: violet;
  color: #000;
  height: 30px;
  padding: 0 10px;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    font-size: 0.9rem;
  }
`;
