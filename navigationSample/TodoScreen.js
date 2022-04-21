import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { useDispatch, useSelector, useStore } from 'react-redux';

const TodoScreen = () => {

    const [name, setName] = useState('');

    //Eski redux taki connect gibi bu hook connect olmanı sağlıyor!!! aynı zamanda içerideki statei alıyorsun.
    const todos = useSelector(state => state);
    const dispatch = useDispatch();


    const store = useStore();

 
    const addNewToDo = () => {
        let randomId = Math.floor(Math.random() * 1000);

        dispatch({ type: 'TODO_CREATED', payload: {name:name, id:randomId} })
    }


    const completeTodo = (item) => {

        dispatch({type:'TODO_DELETED', payload: item})

    }   

    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{todos.length}</Text>
            <TextInput
                placeholder="Todo Name:"
                style={styles.input}
                value={name}
                onChangeText={setName}
            >
            </TextInput>

            <Button title='Add New Todo' onPress={() => addNewToDo()}></Button>

            {
                todos.map((item, key) => {
                    return <View key={key}>
                        <Text key={key}>{item.id} - {item.name}</Text>
                        <Button onPress={() => completeTodo(item)} title='Complete ToDo'></Button>
                    </View>
                })
            }

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


export default TodoScreen
