import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { productsData } from '../data/products'

const FlatListSample = () => {


    const renderProductItem = ({item}) => {
        return <Text>{item.name} / {item.unitPrice}</Text>
    }

    return (
        <View>
            <FlatList
                data={productsData}
                renderItem={renderProductItem}
                keyExtractor={item => item.id}
                initialScrollIndex={30}
            >

            </FlatList>

        </View>
    )
}

export default FlatListSample
