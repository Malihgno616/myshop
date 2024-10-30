import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./Components/Header/Header";
import { ProductCard } from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <>
      <Header />

      <ProductCard />
      <GlobalStyles />
    </>
  );
}

export default App;
