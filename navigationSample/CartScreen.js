import React, { useContext } from 'react'
import { View } from 'react-native'
import cartContext from '../store/cartContext'
import { Divider, Text, Button, Drawer } from 'react-native-paper';
import { setCartToStorage } from '../helper/StorageHelper';

const CartScreen = () => {

    const { cart, setCart } = useContext(cartContext)

    let totalPrice = 0;

    cart.forEach(element => {
        totalPrice = totalPrice + (element.quantity * element.price);
    });

    const emptyCart = () => {
        setCart([]);
        setCartToStorage([])

    }

    const deleteProductFromCart = (id) => {

        let newCart = cart.filter(q => q.id != id);

        setCart([...newCart])
        setCartToStorage([...newCart])

    }

//{item.name}-{item.price.toFixed(2)} * {item.quantity} = {(item.quantity * item.price).toFixed(2)}
    return (
        <View>
            {
                cart.map((item, key) => {

                    let itemContent = item.name + "-" + item.price.toFixed(2) + "*" + item.quantity + "=" + (item.quantity * item.price);

                    return <View key={key}>
                        <Drawer.Item
                            style={{ backgroundColor: '#64ffda' }}
                            icon="star"
                            label={itemContent}
                        />

                        <Divider />
                        <Button mode="outlined" onPress={() => deleteProductFromCart(item.id)}>
                            Delete
                        </Button>
                    </View>
                })
            }
            {
                cart.length > 0 ? (<><Text>Total: {totalPrice.toFixed(2)}</Text><Button onPress={() => emptyCart()}>Empty Cart</Button></>) : <><Text>Cart is empty!</Text></>
            }

        </View>
    )
}

export default CartScreen
