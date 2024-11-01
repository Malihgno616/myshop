import { Product } from "../../data/products";

export interface CartState {
  cart: Product[];
}

const initialCartState: CartState = {
  cart: [],
};

interface CartAction {
  type: string;
  payload?: Product;
}

export function cartReducer(
  state = initialCartState,
  action: CartAction
): CartState {
  switch (action.type) {
    case "cart/add":
      return {
        ...state,
        cart: [...state.cart, action.payload!],
      };
    case "cart/remove":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload?.id),
      };
    default:
      return state;
  }
}
