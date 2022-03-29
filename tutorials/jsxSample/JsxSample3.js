import React from 'react'
import { View, Text } from 'react-native'

const JsxSample3 = () => {

    let onlineStatus = false

    return (
        <View>
            {
                onlineStatus == true ? <Text>User Online!!</Text> : <Text>Offline!!</Text>
            }
        </View>
    )
}

export default JsxSample3
