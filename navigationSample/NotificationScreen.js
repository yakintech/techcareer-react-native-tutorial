import React from 'react'
import { View, TextInput, Button, StyleSheet, Text } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import { API_URL } from '../env/config';
import ParentComponent from '../MemoSample/ParentComponent';
import RefHookSample from '../otherHooks/RefHookSample';


const newCategorySchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Category name is required!!'),
    description: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Description is required!!'),
});



const NotificationScreen = () => {

    const addCategory = (values) => {

        axios.post(API_URL + "/categories", values )
        .then((data) => {
            alert("Kategori başarıyla eklendi!")
        })

    }

    
    return (
        <RefHookSample></RefHookSample>
        // <ParentComponent></ParentComponent>
        
        // <Formik
        //     validationSchema={newCategorySchema}
        //     initialValues={{ name: '22', description: '' }}
        //     onSubmit={(values) => addCategory(values)}
        // >
        //     {({ handleChange, handleSubmit, errors, values }) => (
        //         <View>
        //             {errors.name &&
        //                 <Text style={{ fontSize: 30, color: 'red' }}>{errors.name}</Text>
        //             }
        //             <TextInput
        //                 onChangeText={handleChange('name')}
        //                 value={values.name}
        //                 style={styles.input}
        //             />
        //             <TextInput
        //                 onChangeText={handleChange('description')}
        //                 value={values.description}
        //                 style={styles.input}
        //             />
        //             <Button onPress={handleSubmit} title="Submit" />
        //         </View>
        //     )}
        // </Formik>
   
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

export default NotificationScreen
