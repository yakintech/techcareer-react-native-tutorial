import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const StateSample2 = () => {

    //name değişkenimin adı. setName bu değişkeni değiştirecek TEK fonksiyon. Çağatay ise değişkenin default değeri. 

    console.log("State sample component rendered!");

    const [name, setName] = useState("Çağatay");

    return (
        <View>
            <Text>{name}</Text>
            <Button title='Change Name' onPress={() => setName("In Flames")}></Button>
        </View>
    )
}

export default StateSample2
