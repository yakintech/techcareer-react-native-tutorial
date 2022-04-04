import React from "react"
import { SafeAreaView } from "react-native"
import CategoryPage from "./tutorials/stateSample/CategoryPage"
import StateArraySample from "./tutorials/stateSample/StateArraySample"
import StateProductListSample from "./tutorials/stateSample/StateProductListSample"
import StateSample2 from "./tutorials/stateSample/StateSample2"
import StateSample3 from "./tutorials/stateSample/StateSample3"

function App() {


  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>

      {/* <StateSample2></StateSample2> */}
      {/* <StateSample3></StateSample3> */}
      {/* <StateArraySample></StateArraySample> */}
      {/* <StateProductListSample></StateProductListSample> */}
    <CategoryPage></CategoryPage>

      </SafeAreaView>
    </>
  )

}

export default App