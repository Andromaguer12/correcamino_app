import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { IconButton } from 'react-native-paper'
import RNPickerSelect from 'react-native-picker-select'

export default function PersonalizedSelector({onValueChange, items, value, placeholder, Icon, color, label, shadow, style, boxStyles}) {
    return (
        <View style={[boxStyles, shadow ? inputStyles.shadow : null]}>
            <RNPickerSelect 
                onValueChange={(e) => onValueChange(e)}
                placeholder={placeholder && { label: placeholder , value: "" }}
                value={value}
                style={{ width: "100%"}}
                items={items}
            />
            {Icon && <IconButton icon={Icon} color={color} />}
        </View>
    )
}


const inputStyles = StyleSheet.create({
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