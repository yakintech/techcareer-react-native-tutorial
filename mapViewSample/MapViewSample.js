import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'
import MapView from 'react-native-maps';


const MapViewSample = () => {

    const [latitude, setLatitude] = useState(41.026499894);
    const [longitude, setLongitude] = useState(28.984496062);

    const changeMap = () => {
        
        

    }

    return (
        <>

            <View style={{ flex: 1 }}>
                <TextInput
                    placeholder="latitude:"
                    style={styles.input}
                    value={latitude}
                    onChangeText={setLatitude}
                >
                </TextInput>

                <TextInput
                    placeholder="latitude:"
                    style={styles.input}
                    value={longitude}
                    onChangeText={setLongitude}
                >
                </TextInput>

                <Button title='Change' onPress={() => changeMap()}></Button>
            </View>

            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                
            
            />
        </>


    )
}
const styles = StyleSheet.create({
    map: {
        flex: 1,
        // ...StyleSheet.absoluteFill,
        height: 500
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      }
});
export default MapViewSample
