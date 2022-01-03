import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function CustomInput({onChange, multiline, password, shadow, placeholder, value, style, inputStyles}) {
    return (
        <View style={[style, shadow ? input.shadow : null]}>
            <TextInput multiline={multiline} style={inputStyles} secureTextEntry={password} value={value} placeholder={placeholder} onChangeText={(e) => onChange(e)} />
        </View>
    )
}

const input = StyleSheet.create({
    shadow: {
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        elevation: 7,
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowRadius: 3,
    }
})