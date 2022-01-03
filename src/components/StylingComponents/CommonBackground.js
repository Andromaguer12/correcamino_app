import React from 'react'
import { View, Text, Image } from 'react-native'
import image from '../../../assets/fondo1.png'

export default function CommonBackground() {
    return (
        <Image source={image} style={{
            width: "100%", 
            height: "100%",
            position: 'absolute'
        }} />
    )
}
