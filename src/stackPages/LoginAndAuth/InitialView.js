import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import CommonBackground from '../../components/StylingComponents/CommonBackground'
import PersonalizedButton from '../../components/StylingComponents/PersonalizedButton'
import { primary } from '../../constants/ColorTheme'
import logo from "../../../assets/logo.png"
import { slogan } from '../../constants/utils'

export default function InitialView({navigation}) {
    return (
        <React.Fragment>
            <CommonBackground />
            <View style={initStyles.container}>
                <Image source={logo} style={{ width: "60%", height: '45%' }} />
                <Text style={initStyles.slogan}>
                    {slogan}
                </Text>
                <View style={initStyles.buttons}>
                    <PersonalizedButton 
                        onPress={() => navigation.push("LoginPageUser")} 
                        backgroundColor={primary}
                        tag="Cliente" 
                        tagColor="#fff"
                        tagSize={35}
                        icon="account"
                        style={{ width: "100%", borderRadius: 25, marginVertical: 7.5 }} 
                        shadow={true}
                    />
                    <PersonalizedButton 
                        onPress={() => navigation.push("DistributorLogin")} 
                        backgroundColor={primary}
                        tag="Repartidor" 
                        tagColor="#fff"
                        icon="motorbike"
                        tagSize={35}
                        style={{ width: "100%", borderRadius: 25, marginVertical: 7.5 }} 
                        shadow={true}
                    />
                    <PersonalizedButton 
                        onPress={() => navigation.push("EnterpriseLogin")} 
                        backgroundColor={primary}
                        tag="Asociado" 
                        tagColor="#fff"
                        tagSize={35}
                        icon="briefcase-account-outline"
                        style={{ width: "100%", borderRadius: 25, marginVertical: 7.5 }} 
                        shadow={true}
                    />
                    <PersonalizedButton 
                        onPress={() => navigation.push("RegisterStack")} 
                        tag="Registrate" 
                        tagColor={primary}
                        tagSize={20}
                        backgroundColor="transparent"
                        style={{ borderRadius: 25, padding: 5, marginVertical: 7.5 }} 
                    />
                </View>
                <Text style={[initStyles.slogan, {fontSize: 15}]}>
                    CORRECAMINOS © 2022
                </Text>
            </View>
        </React.Fragment>
    )
}

const initStyles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        alignItems:"center",
        justifyContent: "space-around"
    },
    buttons: {
        width: '90%',
        flexDirection: "column",
        alignItems:"center",
    },
    slogan: {
        fontSize: 25,
        color: primary,
        fontFamily: 'Lato-Regular'  
    }
})
