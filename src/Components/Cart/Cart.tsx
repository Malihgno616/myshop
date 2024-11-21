import { useDispatch } from "react-redux";
import * as S from "./styles";
import { removeProduct } from "../../redux/Cart/cart-slice";
import { Product } from "../../data/products";

interface CartProps {
  showCart: boolean;
  cart: Product[];
}

export const Cart: React.FC<CartProps> = ({ showCart, cart }) => {
  const dispatch = useDispatch();

  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);

  if (!showCart) return null;

  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>

      <S.CartProductsList role="list">
        {cart.map((product) => (
          // Alterando o role para listitem no S.CartProductItem
          <S.CartProductItem role="listitem" key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
            <S.RemoveProductFromCart
              onClick={() => dispatch(removeProduct(product))}
            >
              Remover
            </S.RemoveProductFromCart>
          </S.CartProductItem>
        ))}

        <S.TotalCart data-testid="total">Total: ${total}</S.TotalCart>
      </S.CartProductsList>
    </S.Container>
  );
};
