import React from 'react'
import { View, Text } from 'react-native'
import AdminUserDetail from './AdminUserDetail'
import UserDetail from './UserDetail'
import UserList from './UserList'

const UserPage = () => {

    let admin = {
        name:"Steve",
        role:'Editor'
    }

    let users = ['Gojira', 'Furtherial', 'Razor', 'Slayer', 'Motörhead']

    return (
        <View>

            {/* Parent componentten child componenti çağırırken kimi parametreler veriyorum */}

            {/* Props olarak herşeyi yollayabilirim. String değerler, js objesi, js array */}
            <UserList users={users}></UserList>
            <AdminUserDetail adminUser={admin}></AdminUserDetail>
            <UserDetail name="Çağatay" surname="Yıldız" city="İstanbul"></UserDetail>


        </View>
    )
}

export default UserPage
