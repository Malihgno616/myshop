import styled from "styled-components";

export const Card = styled.article`
  background-color: white;
  width: 100%;
  padding: 1rem;
`;

export const ProductImage = styled.img`
  width: 90%;
  margin: 0 auto;
`;

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
`;

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Review = styled.span``;

export const Price = styled.strong``;

export const AddToCartButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AddToCartButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  background-color: lightblue;
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
