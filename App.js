import React, { Profiler } from "react"
import { CartProvider } from "./store/cartContext";
import TabMain from "./navigationSample/TabMain";
import { createStore } from "redux";
import ToDoReducer from "./store/reducers/todo.reducer";
import { Provider } from 'react-redux'


function App() {

  const store = createStore(ToDoReducer)

  return (

    <Provider store={store}>
      <CartProvider>
        <TabMain></TabMain>
      </CartProvider>
    </Provider>

  )

}

export default App