import React from 'react'
import { View, Text, SafeAreaView, Button, ActivityIndicator, TouchableOpacity, Pressable, TextInput } from "react-native"

const CoreComponentSample = () => {

    const hello = () => {

    }



    return (
        <View>
            <Button title='Hello React' color='tomato'></Button>
            <ActivityIndicator size='large'></ActivityIndicator>

            <TouchableOpacity onPress={() => hello()}>
                <Text >Hello Çağatay!</Text>
            </TouchableOpacity>

            <Pressable onPress={() => hello()}>
                <Text >Hello Iron Maiden!!</Text>
            </Pressable>

            <TextInput>
            </TextInput>


        </View>
    )
}

export default CoreComponentSample
