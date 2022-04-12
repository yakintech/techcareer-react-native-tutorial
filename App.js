import React from "react"
import { CartProvider } from "./store/cartContext";
import TabMain from "./navigationSample/TabMain";

function App() {

  return (
    <CartProvider>
      <TabMain></TabMain>
    </CartProvider>
  )

}

export default App