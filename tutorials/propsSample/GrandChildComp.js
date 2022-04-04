import React from 'react'
import { View, Text } from 'react-native'

const GrandChildComp = (props) => {
    return (
        <View>
            <Text>{props.name}</Text>
        </View>
    )
}

export default GrandChildComp
