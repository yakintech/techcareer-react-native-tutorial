import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'

const AddProduct = (props) => {

    const [name, setName] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [unitsInStock, setUnitsInStock] = useState('');


    const addNewProduct = () => {

        let newProduct = {
            name: name,
            unitPrice: unitPrice,
            unitsInStock: unitsInStock
        }

        let requestOptions = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
          }

        fetch("https://northwind.vercel.app/api/products", requestOptions)
        .then(res => res.json())
        .then((data) => {

            props.getProducts();
            
        })

    }

    return (
        <View style={{padding:20}}>
            <TextInput
               placeholder="Product Name:"
               style={styles.input}
               value={name}
               onChangeText={setName}
            >
            </TextInput>

            <TextInput
               placeholder="Unit Price:"
               style={styles.input}
               value={unitPrice}
               onChangeText={setUnitPrice}

            >
            </TextInput>

            <TextInput
               placeholder="Units In Stock:"
               style={styles.input}
               value={unitsInStock}
               onChangeText={setUnitsInStock}
               
            >
            </TextInput>

            <Button title='Add New Product' onPress={() => addNewProduct()}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });


export default AddProduct
