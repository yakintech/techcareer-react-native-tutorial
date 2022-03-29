import React from 'react'
import { View, Text } from 'react-native'

const JsxSample2 = () => {

    let user = {
        name:'Çağatay',
        surname:'Yıldız',
        company:'Nevera Tech',
        address:{
            street:'Vişnezada mah.',
            city:'İstanbul'
        }
    }

    return (
        <View>
            <Text>{user.name}</Text>
            <Text>{user.address.street}</Text>
        </View>
    )
}

export default JsxSample2
