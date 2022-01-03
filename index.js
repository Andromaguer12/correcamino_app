import React, { useEffect } from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Router from './src/stackPages/Router';
import SplashScreen from 'react-native-splash-screen'

const Main = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <Router />
    )
}

AppRegistry.registerComponent(appName, () => Main);
