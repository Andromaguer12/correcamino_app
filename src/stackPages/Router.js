import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native'
import { View, Text } from 'react-native'
import LoginStack from './LoginAndAuth/LoginStack';
import AppStack from './AppStack/AppStack';
import RegisterStack from './RegisterPages/RegisterStack';

const Tabs = createNativeStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen options={{ headerShown: false }} name="LoginStack" component={LoginStack} />
                <Tabs.Screen options={{ headerShown: false }} name="RegisterStack" component={RegisterStack} />
                <Tabs.Screen options={{ headerShown: false }} name="AppStack" component={AppStack} />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}
