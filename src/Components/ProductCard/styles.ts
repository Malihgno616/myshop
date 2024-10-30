import styled from "styled-components";

export const Card = styled.article`
  background-color: white;
  width: 100%;
  padding: 2rem;
  box-shadow: 1px 1px 5px 1px gray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 250px;
  height: 400px;

  object-fit: contain;
`;

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  margin-top: 2rem;
`;

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-top: 1rem;
`;

export const Review = styled.span``;

export const Price = styled.strong``;

export const AddToCartButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const AddToCartButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  background-color: lightblue;
  color: #000;
  height: 40px;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    font-size: 0.9rem;
  }
`;
