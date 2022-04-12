import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import cartContext from '../store/cartContext'

const CartScreen = () => {

    const { cart, setCart } = useContext(cartContext)

    const emptyCart = () => {
        setCart([]);
    }

    return (
        <View>
            {
              cart.map((item,key) => {
                    return <Text style={{marginTop:10, fontSize:20}} key={key}>{item.name} -  {item.price.toFixed(2)} * {item.quantity} = {(item.quantity * item.price).toFixed(2)}</Text>
                }) 
            }
            {
                cart.length > 0  ? (<Button title='Empty Cart' onPress={() => emptyCart()}></Button>)  : <><Text>Cart is empty!</Text></>
            }

        </View>
    )
}

export default CartScreen
