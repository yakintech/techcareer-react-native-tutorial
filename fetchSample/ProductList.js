import React, { useEffect, useState } from 'react'
import { Text, ScrollView, ActivityIndicator, View, TouchableOpacity } from 'react-native'
import AddProduct from './AddProduct';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = () => {

        //Fetch servisten default olarak get isteği yapıyor..
        fetch("https://northwind.vercel.app/api/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false)
            })
    }


    const deleteProduct = (id) => {

        setLoading(true);
        //Fetch fonksiyonunda GET dışında bir istek yapmak isterseniz 2. parametreyi doldurmak zorundasınız. YANİ

        let requestOptions = {
            method: 'DELETE'
        }

        fetch("https://northwind.vercel.app/api/products/" + id, requestOptions)
            .then(res => res.json())
            .then((data) => {
                getProducts();
                setLoading(false);
            })
            .catch((err) => {
                console.log('ERR', err);
            })


    }

    return (
        <ScrollView>
                  <AddProduct getProducts={getProducts}></AddProduct>
            {
                loading == true ? (<View>
                    <ActivityIndicator size="large" />
                </View>) : (<Text style={{ fontSize: 40, fontWeight: 'bold' }}> Count: {products.length}</Text>)

            }
            {

                products && products.map((item, key) => {
                    return <View key={key} style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <Text>{item.name}</Text>
                        <TouchableOpacity onPress={() => deleteProduct(item.id)}>
                            <Text style={{ color: 'tomato' }}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                })

            }

        </ScrollView>
    )
}

export default ProductList
