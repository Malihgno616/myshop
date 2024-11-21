import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { products } from "../../data/products";
import userEvent from "@testing-library/user-event";
import { removeProduct } from "../../redux/Cart/cart-slice";

const cart = products.slice(0, 2);

const mockDispatch = jest.fn();

// Mock: tornar a biblioteca react-redux fake
jest.mock("react-redux", () => {
  return {
    useDispatch: () => {
      return mockDispatch;
    },
  };
});

describe("Cart > Unit tests", () => {
  it("should render an empty cart correctly", () => {
    render(<Cart showCart={true} cart={[]} />);

    const titleElement = screen.getByRole("heading", { level: 1 });
    const totalElement = screen.getByTestId("total");

    expect(titleElement).toHaveTextContent("Carrinho");
    expect(totalElement).toHaveTextContent("$0");

    // Verifique se a lista de produtos está vazia
    const cartItems = screen.queryAllByRole("listitem");
    expect(cartItems.length).toBe(0); // Não deve haver itens na lista
  });

  it("should render a cart with two products", () => {
    render(<Cart showCart={true} cart={cart} />);

    const productsItemElement = screen.getAllByRole("listitem");

    // Agora procuramos o título dentro do strong
    const firstProductTitleElement = screen.getByText(cart[0].title);
    const secondProductTitleElement = screen.getByText(cart[1].title);

    expect(productsItemElement.length).toBe(2);
    expect(firstProductTitleElement).toBeInTheDocument();
    expect(secondProductTitleElement).toBeInTheDocument();
  });

  it("should remove product when remove button is clicked", () => {
    render(<Cart showCart={true} cart={[products[0]]} />);

    const removeProductButton = screen.getByRole("button", { name: "Remover" });

    userEvent.click(removeProductButton);

    // Espera que a ação `removeProduct` seja chamada com o produto correto (products[0])
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(removeProduct(products[0]));
  });
});
