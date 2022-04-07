import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SuppliersScreen from './SuppliersScreen';
import SupplierDetailScreen from './SupplierDetailScreen';

const SupplierPageStack = createNativeStackNavigator();

const SupplierStack = () => {
    return (
        <SupplierPageStack.Navigator>
            <SupplierPageStack.Screen name="Supplier" component={SuppliersScreen} />
            <SupplierPageStack.Screen name="SupplierDetail" component={SupplierDetailScreen} />
        </SupplierPageStack.Navigator>
    )
}

export default SupplierStack
