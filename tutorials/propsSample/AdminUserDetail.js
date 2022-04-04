import React from 'react'
import { View, Text } from 'react-native'

const AdminUserDetail = (props) => {
    return (
        <View>
            <Text>{props.adminUser.name}</Text>
            <Text>{props.adminUser.role}</Text>
        </View>
    )
}

export default AdminUserDetail
