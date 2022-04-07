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


const Tab = createBottomTabNavigator();

function App() {


  //Home, Suppliers, Cart, Notification, Profile
  //41.026499894 28.984496062
  return (
    <SafeAreaView style={{flex:1}}>
      <MapViewSample></MapViewSample>
    </SafeAreaView>


    // <NavigationContainer>

    //   <Tab.Navigator>
    //     <Tab.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{
    //         tabBarBadge: 2,
    //         tabBarIcon: () => (<MaterialCommunityIcons name="home-alert-outline" size={40} />)
    //       }}
    //     />
    //     <Tab.Screen
    //       name="Suppliers"
    //       component={SupplierStack}
    //       options={{headerShown:false}}
    //     />
    //     <Tab.Screen name="Cart" component={CartScreen} />
    //     <Tab.Screen name="Notification" component={NotificationScreen} />
    //     <Tab.Screen name="Profile" component={CartScreen} />

    //   </Tab.Navigator>

    // </NavigationContainer>


  )

}

//create our styling code:


export default App