import React, { useState } from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import { productsData } from '../data/products'

const StateProductListSample = () => {

    const [products, setProducts] = useState(productsData)

    const deleteProduct = (id) => {

        let newProducts = products.filter(item => item.id != id);
        setProducts([...newProducts])

    }

    return (
        <ScrollView>
            <Text style={{fontSize:40}}>Count: {products.length}</Text>
            <Button onPress={() => setProducts([])} title='Delete All'></Button>
            {
                products.map((item, key) => {
                    return <View key={key}>
                        <Text>{item.name} / {item.unitPrice}</Text>
                        <Button title='Delete' onPress={() => deleteProduct(item.id)}></Button>
                    </View>
                })
            }

        </ScrollView>
    )
}

export default StateProductListSample
