import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import Homepage from './Homepage';

const appStackTabs = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <appStackTabs.Navigator>
            <appStackTabs.Screen options={{ headerShown: false }} name="HomePage" component={Homepage} />
        </appStackTabs.Navigator>
    )
}
