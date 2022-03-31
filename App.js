import React from "react"
import { SafeAreaView } from "react-native"
import FlatListSample from "./tutorials/coreComponents/FlatListSample"
import JsxSample4 from "./tutorials/jsxSample/JsxSample4"
import JsxSample5 from "./tutorials/jsxSample/JsxSample5"
import FlexSample from "./tutorials/stylesSample/FlexSample"
import StyleSample from "./tutorials/stylesSample/StyleSample"
import HealthTemplate from "./tutorials/TemplateSample/HealthTemplate"
import PizzaTemplate from "./tutorials/TemplateSample/PizzaTemplate"

function App() {


  return (
    <>
      <SafeAreaView style={{flex:1}}>
        <PizzaTemplate></PizzaTemplate>
      </SafeAreaView>
    </>
  )

}

export default App