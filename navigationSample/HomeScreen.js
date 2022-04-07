import React from 'react'
import { View, Text, Button } from 'react-native'
import MapView from 'react-native-maps';

const HomeScreen = ({ navigation }) => {
    return (
        <>
             <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />

            <View>
                <Text>Home Screen</Text>
                <Button title='Go to User Screen!' onPress={() => navigation.navigate("User")}></Button>
            </View>
        </>

    )
}

export default HomeScreen
