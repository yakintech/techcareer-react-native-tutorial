import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { categories } from '../data/categories'
import CategoryList from './CategoryList'


const CategoryPage = () => {

    
    const [categoryList, setCategoryList] = useState(categories)

    //Dışarıdan aldığı id ye göre mevcut state değiştiriyor
    const deleteCategory = (id) => {
        let newCategoryList = categoryList.filter(q => q.id != id);
        setCategoryList(newCategoryList);
    }


    return (
        <View>
            <CategoryList categoryList={categoryList} deleteCategory={deleteCategory}></CategoryList>
        </View>
    )
}

export default CategoryPage
