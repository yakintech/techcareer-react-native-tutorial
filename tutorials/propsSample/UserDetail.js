import React from 'react'
import { View, Text } from 'react-native'

const UserDetail = (props) => {

    return (
        <View>
            <Text>{props.name}</Text>
            <Text>{props.surname}</Text>
            <Text>{props.city}</Text>
        </View>
    )
}

export default UserDetail
