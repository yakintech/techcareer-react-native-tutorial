import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'

const EffectSample = () => {

    const [counter, setCounter] = useState(0)
    const [categories, setCategories] = useState([]);

    console.log('Effect sample rendered!');


    // UseEffect hook sayfa açıldığında sadece BİR KERE ÇALIŞIR
    useEffect(() => {
        console.log('empty array use effect worked!!');
        fetch("https://northwind.vercel.app/api/categories")
        .then(res => res.json())
        .then((data) => {
            setCategories(data);
        })

    }, []);


    useEffect(() => {
        
        console.log('Use Effect counter worked!!');

    }, [counter])

    return (
        <View>
            <Text style={{ fontSize: 40 }}>{counter}</Text>
            <Button onPress={() => setCounter(counter + 1)} title='Increase'></Button>
            <Button onPress={() => setCounter(counter - 1)} title='Decrease'></Button>

        {
            categories.map((item,key) => {
                return <Text key={key}>{item.name}</Text>
            })
        }

        </View>
    )
}

export default EffectSample
