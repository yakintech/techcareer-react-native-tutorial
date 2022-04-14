import React from 'react'
import { View, Text } from 'react-native'

const ChildComponent = () => {

    console.log('Child component rendered!');




    return (
        <View>
            <Text>Child</Text>
        </View>
    )
}

//React.memo ile bu component SADECE kendi state  değiştiğinde çalışır!!
export default React.memo(ChildComponent)
