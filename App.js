import React from "react"
import { SafeAreaView } from "react-native"
import EffectSample from "./effectSample/EffectSample"
import AddProduct from "./fetchSample/AddProduct"
import ProductList from "./fetchSample/ProductList"
import CategoryPage from "./tutorials/stateSample/CategoryPage"
import StateArraySample from "./tutorials/stateSample/StateArraySample"
import StateProductListSample from "./tutorials/stateSample/StateProductListSample"
import StateSample2 from "./tutorials/stateSample/StateSample2"
import StateSample3 from "./tutorials/stateSample/StateSample3"

function App() {


  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>

        <ProductList></ProductList>

      </SafeAreaView>
    </>
  )

}

export default App