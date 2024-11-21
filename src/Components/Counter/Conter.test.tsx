import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter > Unit tests", () => {
  it("should render Counter component correctly", () => {
    render(<Counter />);

    const counterValueElement = screen.getByRole("heading", { level: 1 });

    const increaseButtonElement = screen.getByRole("button", {
      name: "Incrementar",
    });

    const decreaseButtonElement = screen.getByRole("button", {
      name: "Diminuir",
    });

    expect(counterValueElement).toHaveTextContent("0");
    expect(increaseButtonElement).toBeInTheDocument();
    expect(decreaseButtonElement).toBeInTheDocument();
  });

  it("should decrease counter value when decrease button is clicked", () => {
    // renderizamos o componente Counter
    render(<Counter />);

    // Clicar no botão "Diminuir" para o valor do contador
    const counterValueElement = screen.getByRole("heading", { level: 1 });

    const decreaseButton = screen.getByRole("button", { name: "Diminuir" });

    userEvent.click(decreaseButton);

    // Espero que o valor so contador seja 1
    expect(counterValueElement).toHaveTextContent("-1");
  });

  it("should increase counter value when increase button is clicked", () => {
    // renderizamos o componente Counter
    render(<Counter />);

    // Clicar no botão "Aumentar" para o valor do contador
    const increaseButton = screen.getByRole("button", { name: "Incrementar" });
    userEvent.click(increaseButton);

    const counterValueElement = screen.getByText("1", { exact: true });

    // Espero que o valor so contador seja 1
    expect(counterValueElement).toBeInTheDocument();
  });
});
