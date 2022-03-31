import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HealthTemplate = () => {
    return (
        <View style={styles.mainBox}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Friday, 15 Dec</Text>
                <Text style={styles.titleText}>Search</Text>
            </View>

            <View style={styles.header}>
                <Text style={{fontSize:40, fontWeight:'bold'}}>Learn</Text>
                <Text>Choose the part of the body</Text>
            </View>

            <View style={[styles.box,styles.box1]}>
                <Text style={[styles.boxText, styles.boxTextMain]}>Head / Face</Text>
                <Text style={styles.boxText}>11 diseases</Text>
            </View>

            <View style={[styles.box, styles.box2]}>
                <Text style={[styles.boxText, styles.boxTextMain]}>Back / Neck</Text>
                <Text style={styles.boxText}>9 diseases</Text>
            </View>

            <View style={[styles.box, styles.box3]}>
                <Text style={[styles.boxText, styles.boxTextMain]}>Elbow / Shoulders</Text>
                <Text style={styles.boxText}>12 diseases</Text>
            </View>


            <View style={[styles.box, styles.box4]}>
                <Text style={[styles.boxText, styles.boxTextMain]}>Hand / Arm</Text>
                <Text style={styles.boxText}>2 diseases</Text>
            </View>


            

        </View>
    )
}


const styles = StyleSheet.create({
    box:{
        flex:2,
        borderRadius:20,
        justifyContent:'center',
        paddingLeft:20,
        marginTop:15
    },
    box1:{
        backgroundColor:'#EA7662',
    },
    box2:{
        backgroundColor:'#8CC0B7',
    },
    box3:{
        backgroundColor:'#EC952C',
    },
    box4:{
        backgroundColor:'#2C6579',
    },
    boxText:{
        color:'#FFFFFF'
    },
    boxTextMain:{
        fontSize:20,
        fontWeight:'bold'
    },
    mainBox:{
        flex:1,
        padding:20
    },
    title:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    titleText:{
        color:'gray'
    },
    header:{
        flex:2
    }
})

export default HealthTemplate
