import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./Components/Header/Header";
import { ProductCard } from "./Components/ProductCard/ProductCard";
import { ProductList } from "./Components/ProductList/ProductList";

function App() {
  return (
    <>
      <Header />

      <ProductList />
      <GlobalStyles />
    </>
  );
}

export default App;
