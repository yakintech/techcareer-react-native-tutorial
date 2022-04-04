import React from 'react'
import { View, Text, Button } from 'react-native'
import GrandChildComp from './GrandChildComp'

const ChildComp = (props) => {
    return (
        <View>
            <Button title='Click Me!' onPress={() => props.hello()}></Button>
            <Button title="Calc!" onPress={() => props.calc(4,7)}></Button>

            <GrandChildComp name={props.name}></GrandChildComp>
        </View>
    )
}

export default ChildComp
