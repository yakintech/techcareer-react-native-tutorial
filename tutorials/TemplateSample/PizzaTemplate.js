import React from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'


const PizzaTemplate = () => {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <View style={styles.title}>
                <Text style={styles.titleMainText}>Your</Text>
                <Text style={styles.titleSubText}>Cart</Text>
            </View>

            <View style={styles.cartBox}>
                <View style={{ flex: 1 }}>
                    <Image style={styles.cartBoxImg} source={require('./pepperoni.jpg')}></Image>
                </View>

                <View style={styles.cartBoxOrders}>
                    <Text style={{ fontSize: 15 }}>Pepproni with garlic</Text>
                    <Text style={{ color: 'gray' }}>*2 cheese</Text>
                    <Text style={{ color: 'gray' }}>*1 olives</Text>
                </View>
                <View style={{ flex: 1,justifyContent:'flex-end', height:70 }}>
                    <Text>8 $</Text>
                </View>
            </View>

            <View style={styles.cartBox}>

                <View style={{ flex: 1 }}>
                    <Image style={styles.cartBoxImg} source={require('./greenSalad.jpg')}></Image>
                </View>

                <View style={styles.cartBoxOrders}>
                    <Text style={{ fontSize: 15 }}>Pepproni with garlic</Text>
                    <Text style={{ color: 'gray' }}>*2 cheese</Text>
                    <Text style={{ color: 'gray' }}>*1 olives</Text>
                </View>
                <View style={{ flex: 1,justifyContent:'flex-end', height:70 }}>
                    <Text>8 $</Text>
                </View>


            </View>

            <View style={styles.cartBox}>

                <View style={{ flex: 1 }}>
                    <Image style={styles.cartBoxImg} source={require('./salmon.jpeg')}></Image>
                </View>

                <View style={styles.cartBoxOrders}>
                    <Text style={{ fontSize: 15 }}>Pepproni with garlic</Text>
                    <Text style={{ color: 'gray' }}>*2 cheese</Text>
                    <Text style={{ color: 'gray' }}>*1 olives</Text>
                </View>

                <View style={{ flex: 1,justifyContent:'flex-end', height:70 }}>
                    <Text>8 $</Text>
                </View>
            </View>

            <View style={styles.addressBox}>
                <Text>140 Roadway Ave.</Text>
                <Text>25-30 min. (ASAP)</Text>
                <Text>Cash</Text>
            </View>

            <View style={styles.orderBox}>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>

                    <Text style={{ color: 'gray' }}>
                        Sub Total:
                    </Text>
                    <Text style={{ color: 'gray' }}>
                        18$
                    </Text>

                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>

                    <Text style={{ color: 'gray' }}>
                        Delivery Fee:
                    </Text>
                    <Text style={{ color: 'gray' }}>
                        2.5$
                    </Text>

                </View>


                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                        Total:
                    </Text>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                        20.5 $
                    </Text>
                </View>

                <View style={{ flex: 2 }}>

                    <TouchableOpacity style={{backgroundColor:'#FDC56F',flex:1,justifyContent:'center',alignItems:'center',borderRadius:20}}>
                        <Text style={{color:'#000000', fontSize:20, fontWeight:'bold'}}>Place Order</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    orderBox: {
        flex: 3,
       marginTop:20
    },
    addressBox: {
        flex: 1,
        backgroundColor: '#d1d1d1',
        borderRadius: 20,
        justifyContent: 'space-between',
        padding: 20
    },
    cartBoxOrders: {
        flex: 3,
        marginLeft: 10
    },
    cartBox: {
        flex: 2,
        flexDirection: 'row',
    },
    cartBoxImg: {
        width: 70,
        height: 70,
        borderRadius: 25
    },
    title: {
        flex: 2
    },
    titleMainText: {
        color: 'gray'
    },
    titleSubText: {
        fontSize: 40,
        fontWeight: 'bold'
    }
})

export default PizzaTemplate



//https://dribbble.com/shots/14223782/attachments/5865425?mode=media
