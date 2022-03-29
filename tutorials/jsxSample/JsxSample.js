import React from 'react'
import { View, Text } from 'react-native'

//Bir js dosyası içerisinde JSX kodu yazmak istiyorsak parantez () açıyoruz
//JSX kodu içerisinde (yani parantezin içerisinde ) tekrar js koduna geçmek istiyorsak {} açıyoruzç


const JsxSample = () => {

    let name = 'Çağatay';
    let city = 'İzmir';
    let year = 2022;

    //one way binding!

    return (
        <View>
            <Text>{name}</Text>
            <Text>{city}</Text>
            <Text>{year}</Text>
        </View>
    )
}

export default JsxSample
