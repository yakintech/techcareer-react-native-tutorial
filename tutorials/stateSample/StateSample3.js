import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const StateSample3 = () => {

    const [counter, setCounter] = useState(0);

    console.log('State Sample-3 rendered!');

    return (
        <View>
            <Text style={{fontSize:40}}>{counter}</Text>
            <Button onPress={() => setCounter(counter + 1)} title='Increase'></Button>
        </View>
    )
}

export default StateSample3
