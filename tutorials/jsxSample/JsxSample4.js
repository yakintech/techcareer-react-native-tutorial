import React from 'react'
import { View, Text } from 'react-native'

const JsxSample4 = () => {

    let metalBands = ['Iron Maiden', 'Gojira', 'Moonspell', 'Rotting Christ', 'Parkway Drive', 'In Flames', 'Rammstein', 'Razor', 'Furtherial'];


    //Listedeki elemanları teker teker ekranda göster
    return (
        <View>
            {
              metalBands && metalBands.map((item,index) => {
                
                    return <Text key={index}>{item}</Text>

                })
            }
        </View>
    )
}

export default JsxSample4
