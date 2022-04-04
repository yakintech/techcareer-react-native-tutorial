import React from 'react'
import { View, Text } from 'react-native'
import ChildComp from './ChildComp';

const ParentComp = (props) => {

    let hello = () => {
        alert("Hello React Native!!");
    }

    let calc = (x, y) => {

        let z = (x * x) + (y * y);

        alert("Sonuç: " + z);

    }

    return (
        <View>
            <ChildComp name={props.name} hello={hello} calc={calc}></ChildComp>
        </View>
    )
}

export default ParentComp
