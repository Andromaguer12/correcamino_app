import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import DistributorLogin from './DistributorLogin';
import InitialView from './InitialView';
import LoginPageUser from './LoginUserPage';
import EnterpriseLogin from './EnterpriseLogin'

const CurrentStack = createNativeStackNavigator();

export default function LoginStack() {
    return (
        <CurrentStack.Navigator>
            <CurrentStack.Screen options={{ headerShown: false }} name='InitialView' component={InitialView} />
            <CurrentStack.Screen options={{ headerShown: false }} name='LoginPageUser' component={LoginPageUser} />
            <CurrentStack.Screen options={{ headerShown: false }} name='DistributorLogin' component={DistributorLogin} />
            <CurrentStack.Screen options={{ headerShown: false }} name='EnterpriseLogin' component={EnterpriseLogin} />
        </CurrentStack.Navigator>
    )
}
