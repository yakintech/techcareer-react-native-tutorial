import { NavigationContainer } from '@react-navigation/native'
import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'
import CartScreen from './CartScreen'
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'
import NotificationScreen from './NotificationScreen'
import ProductStack from './ProductStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import cartContext from '../store/cartContext'
import { getCartStorage } from '../helper/StorageHelper'
import { connect } from 'react-redux'
import TodoScreen from './TodoScreen'



const Tab = createBottomTabNavigator();

const TabMain = (props) => {

    const { cart, setCart } = useContext(cartContext);


    useEffect(() => {
        getCartStorage()
            .then((data) => {
                setCart(data);
            })

    }, [])

    return (
        <NavigationContainer>

            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    
                    component={HomeScreen}
                    options={{
                        tabBarBadge: props.todos?.length,
                        tabBarIcon: () => (<MaterialCommunityIcons name="home" size={40} />)
                    }}
                />

                <Tab.Screen
                    name="Products"
                    component={ProductStack}
                    options={{
                        headerShown: false,
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
                        // headerShown: false,
                        tabBarIcon: () => (<MaterialCommunityIcons name="alert-circle" size={40} />)
                    }}
                    name="Notification" component={NotificationScreen} />

                <Tab.Screen
                    options={{

                        tabBarIcon: () => (<MaterialCommunityIcons name="account-cowboy-hat" size={40} />)
                    }}
                    name="Profile" component={TodoScreen} />

            </Tab.Navigator>

        </NavigationContainer>

    )
}

const mapStateToProps = (state) => {
    return {
        todos: state
    }
}

export default connect(mapStateToProps)(TabMain)
