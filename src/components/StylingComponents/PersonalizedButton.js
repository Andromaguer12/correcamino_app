import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { IconButton, TouchableRipple } from 'react-native-paper'

export default function PersonalizedButton({onPress, backgroundColor, icon, tag, tagColor, tagSize, style, shadow}) {
    return (
        <TouchableRipple rippleColor='#e7e7e7' style={[style, {backgroundColor: backgroundColor ? backgroundColor : '#e7e7e7', flexDirection: "row", justifyContent: 'space-around', paddingHorizontal: 30, alignItems:"center"}, shadow ? buttonStyles.shadow : null]} onPress={onPress}>
            <React.Fragment>
                <Text style={{ color: tagColor, fontSize: tagSize, fontFamily: "Lato-Bold" }}>{tag}</Text>
                {icon && <IconButton icon={icon} size={35} color={tagColor} />}
            </React.Fragment>
        </TouchableRipple>
    )
}

const buttonStyles = StyleSheet.create({
    shadow: {
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        elevation: 7,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 3,
    }
})
