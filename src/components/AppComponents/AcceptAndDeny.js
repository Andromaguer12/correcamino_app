import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { primary, secondary } from '../../constants/ColorTheme'
import ErrorMsg from '../ErrorMsg'
import PersonalizedButton from '../StylingComponents/PersonalizedButton'

export default function AcceptAndDeny({Accept, errorMsg, Deny, text, title}) {
    const [Loading, setLoading] = useState(false)
    const [ErrorShown, setErrorShown] = useState(false)

    // useEffect(() => {
    //     setErrorShown(true)
    //     setTimeout(() => {
    //         setErrorShown(false)
    //     }, 3000);
    // }, [errorMsg])

    return (
        <View style={{
            width: "100%",
            height: "100%",
            position: 'absolute',
            top: 0,
            zIndex: 2,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0000007a",
            padding: 20
        }}>
            <View style={Warning.container}>
                <Text style={Warning.title}>{title}</Text>
                <Text style={Warning.text}>{text}</Text>
                {ErrorShown && <ErrorMsg message={errorMsg} />}
                <View style={Warning.buttons}>
                    <PersonalizedButton 
                        tag="Cancelar"
                        tagColor={"#ffffff"}
                        tagSize={20}
                        shadow={true}
                        backgroundColor={secondary}
                        style={Warning.CustomButtons}
                        onPress={Deny}
                    />
                    {!Loading ? <PersonalizedButton 
                        tag="Aceptar"
                        tagColor="#fff"
                        tagSize={20}
                        shadow={true}
                        backgroundColor={primary}
                        style={Warning.CustomButtons}
                        onPress={() => {
                            setLoading(true)
                            Accept().then(() => Deny()).catch((error) => {setLoading(false); console.log(error)})
                        }}
                    /> : <View style={Warning.CustomButtons}>
                        <ActivityIndicator color={secondary} />    
                    </View>}
                </View>
            </View>
        </View>
    )
}

const Warning = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        padding: 10,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 20,
        height: "22.5%",
        zIndex: 3,
    },
    title: {
        fontFamily: "Raleway-Bold",
        fontSize: 20,
    },
    text: {
        fontFamily: "Raleway-Medium",
        fontSize: 16,
    },
    buttons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    CustomButtons: {
        width: "45%",
        borderRadius: 25,
        paddingVertical: 5,
    }
})
