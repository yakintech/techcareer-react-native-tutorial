import React, { useRef } from 'react'
import { View, Text, Button } from 'react-native'

const RefHookSample = () => {


    const textRef = useRef(null);

    const changeColor = () => {

        textRef.current.setNativeProps({ style: { color:'tomato'} });

    }

    return (
        <View>
            <Text ref={textRef} style={{fontSize:40, fontWeight:'bold', color:'aqua'}}>Çağatay</Text>
            <Button title='Change Color' onPress={() => changeColor()}></Button>
        </View>
    )
}

export default RefHookSample
