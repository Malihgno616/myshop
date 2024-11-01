import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { RootReducer } from "../../redux/root-reducer";

interface CartProps {
  showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const dispatch = useDispatch();

  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);

  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>

      <S.CartProductsList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
            <S.RemoveProductFromCart
              onClick={() =>
                dispatch({
                  type: "cart/remove",
                  payload: product,
                })
              }
            >
              Remover
            </S.RemoveProductFromCart>
          </S.CartProductItem>
        ))}

        <S.TotalCart>Total: ${total}</S.TotalCart>
      </S.CartProductsList>
    </S.Container>
  );
};
