import React from "react"
import { SafeAreaView, StyleSheet, View } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./navigationSample/HomeScreen";
import SuppliersScreen from "./navigationSample/SuppliersScreen";
import CartScreen from "./navigationSample/CartScreen";
import NotificationScreen from "./navigationSample/NotificationScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SupplierStack from "./navigationSample/SupplierStack";
import MapViewSample from "./mapViewSample/MapViewSample";
import ProductStack from "./navigationSample/ProductStack";
import { CartProvider } from "./store/cartContext";
import TabMain from "./navigationSample/TabMain";



function App() {


  //Home, Suppliers, Cart, Notification, Profile
  //41.026499894 28.984496062
  return (
    // <SafeAreaView style={{flex:1}}>
    //   <MapViewSample></MapViewSample>
    // </SafeAreaView>

    <CartProvider>
      <TabMain></TabMain>
    </CartProvider>


  )

}

//create our styling code:


export default App