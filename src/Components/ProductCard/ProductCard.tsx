import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";

export const ProductCard: React.FC = () => {
  return (
    <S.Card>
      <S.ProductImage
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />

      <S.ProductTitle>Mens Camisa Social Black Box</S.ProductTitle>

      <S.ReviewPriceContainer>
        <S.Review>4.1</S.Review>

        <S.Price>$32.00</S.Price>
      </S.ReviewPriceContainer>

      <S.AddToCartButtonWrapper>
        <S.AddToCartButton>
          Adicionar ao carrinho
          <FiShoppingCart />
        </S.AddToCartButton>
      </S.AddToCartButtonWrapper>
    </S.Card>
  );
};
