import styled from "styled-components";

interface ContainerProps {
  showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.showCart ? "0" : "-350px")};

  width: 350px;
  height: 100vh;

  background-color: #f8f8f8;
  padding: 2rem;

  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

  transition: right 0.5s;

  overflow: scroll;
`;

export const Title = styled.h1``;

export const CartProductsList = styled.ul`
  padding: 2rem 0;
  list-style: none;

  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export const CartProductItem = styled.li``;

export const TotalCart = styled.strong``;

export const RemoveProductFromCart = styled.button`
  border: none;
  background-color: lightcoral;
  cursor: pointer;
  transition: all 0.4s ease;
  padding: .1rem;
  border-radius: 0.5rem;

  &:hover {
    filter: brightness(130%);
  }
`;
