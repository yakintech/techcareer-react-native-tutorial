import React from "react"
import { SafeAreaView } from "react-native"
import ParentComp from "./tutorials/propsSample/ParentComp"

function App() {


  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>

        <ParentComp name="Bruce Dickinson"></ParentComp>

      </SafeAreaView>
    </>
  )

}

export default App