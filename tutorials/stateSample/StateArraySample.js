import React, { useState } from 'react'
import { View, Text, Button, ScrollView } from 'react-native'

const StateArraySample = () => {


    let metalBands = ['Pentagram','Iron Maiden', 'Rotting Christ', 'Moonspell', 'Slipknot', 'Motörhead', 'Pentagram'];

    const [metals, setMetals] = useState(metalBands);

    const deleteItem = (key) => {

        // her bir elemana q adını verdim. tıklanılan eleman OLMAYANLARI bana ver.
        //let newMetalList = metals.filter(q => q != item);
        
        metals.splice(key,1);
        setMetals([...metals]);
    }
    
    return (
        <ScrollView style={{flex:1}}>

            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:40, fontWeight:'bold'}}>Count: {metals.length}</Text></View>
            
            <Button title='Empty Metals' onPress={() => setMetals([])}></Button>

            {
                metals.map((item, key) => {
                    return <View key={key} style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                        <Text key={key}>{item}</Text>

                        <Button title='Delete' onPress={() => deleteItem(key)}></Button>

                    </View>
                })
            }
        </ScrollView>
    )
}

export default StateArraySample
