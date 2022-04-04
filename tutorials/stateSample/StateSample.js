import React from 'react'
import { View, Text, Button } from 'react-native'

const StateSample = () => {

    let name = "Çağatay";


    const changeName = () => {
        name = "In Flames";
    }

    return (
        <View>
            <Text style={{fontSize:40,fontWeight:'bold'}}>{name}</Text>
            <Button title='Change Name' onPress={() => changeName()}></Button>
        </View>
    )
}

export default StateSample
