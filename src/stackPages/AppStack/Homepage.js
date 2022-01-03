import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { IconButton } from 'react-native-paper'
import CommonBackground from '../../components/StylingComponents/CommonBackground'
import { primary } from '../../constants/ColorTheme'

export default function Homepage() {
    return (
        <React.Fragment>
            <CommonBackground />
            <View style={{ width: "100%", height: "100%", padding: 20, flexDirection: 'column', alignItems: "center" }}>
                <View style={Homestyles.header}>
                    <IconButton icon="menu" size={40} color={primary} />
                    <IconButton icon="account-group" size={40} color={primary} />
                    <TouchableOpacity style={Homestyles.cartbutton}>
                        <IconButton size={25} icon="cart-outline" color="#000" />
                        <Text>Ver carrito</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </React.Fragment>
    )
}

const Homestyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%"
    },
    cartbutton: {
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        flexDirection: 'column',
        justifyContent: "space-between",
        padding: 2.5
    }
})
