import { connect } from 'react-redux';
import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Text } from 'react-native'
import { todoCreated, todoDeleted } from '../store/actions/todo.action';

const ProfileScreen = (props) => {

    const [name, setName] = useState('');

   

    const addNewToDo = () => {

        let randomId = Math.floor(Math.random() * 1000);
         props.onCreate({name:name, id:randomId})

         setName('')
    }
    

    const completeTodo = (item) => {
        props.onDelete(item);
    }

    return (
        <View>
            <Text style={{fontSize:20, fontWeight:'bold'}}>{props.todos?.length}</Text>
            <TextInput
               placeholder="Todo Name:"
               style={styles.input}
               value={name}
               onChangeText={setName}
            >
                </TextInput>

            <Button title='Add New Todo' onPress={() => addNewToDo()}></Button>

            {
                props.todos && props.todos.map((item,key) => {
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



  const mapStateToProps = (state) => {
      return {
          todos: state
      }
  }


  const mapDispatchToProps = (dispatch) => {
      return {
          onCreate: (data) => {
              dispatch(todoCreated(data))
          },
          onDelete: (data) => {
              dispatch(todoDeleted(data))
          }
      }
  }



export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
