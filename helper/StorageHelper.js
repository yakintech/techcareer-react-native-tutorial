import AsyncStorage from '@react-native-async-storage/async-storage';

export const setCartToStorage = async (cart) => {
        const jsonValue = JSON.stringify(cart)
        await AsyncStorage.setItem('cart', jsonValue)
}


export const getCartStorage = async () => {
    const jsonValue = await AsyncStorage.getItem('cart');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
}