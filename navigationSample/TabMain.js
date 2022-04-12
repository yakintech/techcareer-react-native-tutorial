import { NavigationContainer } from '@react-navigation/native'
import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import CartScreen from './CartScreen'
import HomeScreen from './HomeScreen'
import NotificationScreen from './NotificationScreen'
import ProductStack from './ProductStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import cartContext from '../store/cartContext'



const Tab = createBottomTabNavigator();

const TabMain = () => {

    const {cart} = useContext(cartContext)

    return (
        <NavigationContainer>

            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        
                        tabBarIcon: () => (<MaterialCommunityIcons name="home" size={40} />)
                    }}
                />
                
                <Tab.Screen
                    name="Products"
                    component={ProductStack}
                    options={{
                    headerShown:false,
                        tabBarIcon: () => (<MaterialCommunityIcons name="coffee" size={40} />)
                    }}
                />
               
                <Tab.Screen
                    options={{
                        tabBarBadge: cart.length,
                        tabBarIcon: () => (<MaterialCommunityIcons name="cart" size={40} />)
                    }}

                    name="Cart" component={CartScreen} />

                    
                <Tab.Screen
                options={{
                    headerShown:false,
                    tabBarIcon: () => (<MaterialCommunityIcons name="alert-circle" size={40} />)
                }}
                 name="Notification" component={NotificationScreen} />
              
                <Tab.Screen
                 options={{
                 
                    tabBarIcon: () => (<MaterialCommunityIcons name="account-cowboy-hat" size={40} />)
                }}
                 name="Profile" component={CartScreen} />

            </Tab.Navigator>

        </NavigationContainer>

    )
}

export default TabMain
