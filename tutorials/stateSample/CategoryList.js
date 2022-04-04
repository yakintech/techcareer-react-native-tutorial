import React from 'react'
import { View, Text, Button } from 'react-native'

const CategoryList = (props) => {


    return (
        <View>
            {
                props.categoryList.map((item, key) => {
                    return <View key={key}>
                        <Text>{item.name}</Text>
                        <Button onPress={() => props.deleteCategory(item.id)} title='Delete'></Button>
                    </View>

                })
            }
        </View>
    )
}

export default CategoryList
