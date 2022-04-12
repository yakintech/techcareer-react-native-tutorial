import React, { useContext, useEffect, useState } from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { API_URL } from '../env/config';
import cartContext from '../store/cartContext';



const ProductPageStack = createNativeStackNavigator();

const ProductStack = () => {
    return (
        <ProductPageStack.Navigator>
            <ProductPageStack.Screen name="Product" component={ProductScreen} />
        </ProductPageStack.Navigator>
    )
}



const ProductScreen = () => {

    const [products, setProducts] = useState([]);

    const { cart, setCart } = useContext(cartContext)

    const addToCart = (item) => {
        //Eğer ürün sepette varsa

        var cartItem = cart.find(q => q.id == item.id);

        if(cartItem != undefined){
            cartItem.quantity = cartItem.quantity + 1;

            setCart([...cart]);
        }
        else{
            let newCartItem = {
                id:item.id,
                quantity:1,
                price:item.unitPrice,
                name:item.name
            }
            setCart([...cart,newCartItem]);
        }
    }

    useEffect(() => {

        fetch(API_URL + "/products")
            .then(res => res.json())
            .then((data) => {
                setProducts(data);
            })

    }, [])

    const renderProduct = ({item}) => {
        return <><Text style={{marginTop:10, fontSize:20}}>{item.name}</Text>
                    <Button title='Add to Cart' onPress={() => addToCart(item)}></Button>
        </>
     }
    return (
        <View>
            <FlatList
                data={products}
                renderItem={renderProduct}
            >

            </FlatList>
        </View>
    )
}





export default ProductStack
