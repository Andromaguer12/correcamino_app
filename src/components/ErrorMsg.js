import React, { Children } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button, IconButton } from 'react-native-paper'

export default function ErrorMsg({message}) {
    return (
        <View style={Error.box}>
            <IconButton icon="alert-circle-outline" color='red' />
            <Text style={{ color: "red", textAlign: "center", fontFamily: 'Lato-Black' }} >
                {message}
            </Text>
        </View>
    )
}

const Error = StyleSheet.create({
    box: {
        color: "red",
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        justifyContent: "center"
    }
})
