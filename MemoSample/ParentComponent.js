import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {

    const [counter, setCounter] = useState(0)

    return (
        <View>
            <Text>Parent Component</Text>
            <Text style={{fontSize:25, fontWeight:'bold'}}>{counter}</Text>
            <Button title='Incrase' onPress={() => setCounter(counter + 1)}></Button>
            <ChildComponent></ChildComponent>
        </View>
    )
}

export default ParentComponent
