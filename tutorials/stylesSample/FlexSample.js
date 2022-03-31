import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FlexSample = () => {
    return (
        <>
            <View style={styles.box1}>
                <View><Text>Hello - 1</Text></View>
                <View><Text>Hello - 2</Text></View>
            </View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>

        </>
    )
}

const styles = StyleSheet.create({
    box1:{
        flex:2,
        backgroundColor:'tomato',
        justifyContent:'center',
        alignItems:'center'
    },
    box2:{
        flex:1,
        backgroundColor:'aqua'
    },
    box3:{
        flex:1,
        backgroundColor:'brown'
    }
})

export default FlexSample
