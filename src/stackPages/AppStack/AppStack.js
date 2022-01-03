import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import Homepage from './Homepage';
import HomeStack from './HomeStack';
import UserPage from './UserPage';

const appStackTabs = createNativeStackNavigator();

export default function AppStack() {
    return (
        <appStackTabs.Navigator>
            <appStackTabs.Screen options={{ headerShown: false }} name="HomeStack" component={HomeStack} />
            <appStackTabs.Screen options={{ headerShown: false }} name="UserPage" component={UserPage} />
        </appStackTabs.Navigator>
    )
}
