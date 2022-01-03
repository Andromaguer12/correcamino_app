import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import Register from './Register'

const Tabs = createNativeStackNavigator()

export default function RegisterStack() {
    return (
        <Tabs.Navigator>
            <Tabs.Screen options={{ headerShown: false }} name="RegisterPage" component={Register} />
        </Tabs.Navigator>
    )
}
