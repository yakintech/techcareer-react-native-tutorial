import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const StyleSample = () => {

    let textStyle = {
        color:'tomato'
    }

    return (
        <View>
            <Text style={styles.mainTextStyle}>Hello React</Text>
            <Text style={styles.subTextStyle}>Hello Çağatay</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    mainTextStyle:{
        color:'tomato',
        fontSize:40,
        fontWeight:'bold'
    },
    subTextStyle:{
        color:'aqua'
    }
})

export default StyleSample
