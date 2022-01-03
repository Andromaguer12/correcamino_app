import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import CommonBackground from '../../components/StylingComponents/CommonBackground'
import logo from "../../../assets/logo.png"
import CustomInput from '../../components/StylingComponents/CustomInput'
import { primary, secondary } from '../../constants/ColorTheme'
import { ActivityIndicator, FAB, IconButton } from 'react-native-paper'
import { AuthInstance, CommonSignIn } from '../../functions/AuthFunctions'
import ErrorMsg from '../../components/ErrorMsg'

export default function DistributorLogin({navigation}) {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Error, setError] = useState(false)
    const [ErrorMessage, setErrorMessage] = useState('')
    const [Loading, setLoading] = useState(false)

    const setMsgError = (msg) => {
        setError(true)
        setTimeout(() => {
            setError(false)
        }, 3000);
        setErrorMessage(msg)
    }


    const Login = () => {
        if(Email != '' && Password != ''){
            setLoading(true)
            CommonSignIn(Email, Password).then((user) => {
                setLoading(false)
                if(user.userType === 'distributor'){
                    navigation.push("AppStack")
                }
                else{
                    AuthInstance.signOut();
                    setMsgError("Parece que esta cuenta esta registrada como otro tipo de usuario.")
                }
            }).catch((error) => {
                setLoading(false)
                setMsgError(`Error al iniciar sesion: ${error.code}`)
            })
        }
    }

    useEffect(() => {
        if(AuthInstance.currentUser){
            AuthInstance.signOut();
        }
    }, [])
    return (
        <React.Fragment>
            <CommonBackground />
            <View style={LoginUserStyles.container}>
                <View style={LoginUserStyles.sections}>
                    <Image source={logo} style={{ width: "45%", height: '90%', marginVertical: 10 }} />
                    <Text style={LoginUserStyles.slogan}>
                        Eslogan de la compañia
                    </Text> 
                </View>
                <View style={{ width: "80%", alignItems: "center", flexDirection: "column"}}>
                    {!Loading ? <React.Fragment>
                        <IconButton color={primary} size={100} icon="motorbike" />
                        <Text style={LoginUserStyles.slogan}>
                            Repartidor
                        </Text>
                    </React.Fragment> : <ActivityIndicator color={primary} size="large" />}
                    {!Loading && Error && <ErrorMsg message={ErrorMessage} />}
                </View>
                <View style={{ width: "100%", alignItems: "center", flexDirection: "column"}}>
                    <CustomInput 
                        onChange={(e) => setEmail(e)}
                        style={{ 
                            width: "80%",
                            paddingHorizontal: 20, 
                            borderRadius: 25,
                            backgroundColor: primary, 
                            color: "#fff",
                            marginVertical: 10
                        }} placeholder="Usuario/Email"
                        inputStyles={{ fontSize: 25, color: "#fff", fontFamily: "Lato-Bold"}} 
                    />
                    <CustomInput 
                        onChange={(e) => setPassword(e)}
                        password={true}
                        style={{ 
                            width: "80%",
                            paddingHorizontal: 20, 
                            borderRadius: 25,
                            backgroundColor: primary, 
                            color: "#fff",
                            marginVertical: 10
                        }} placeholder="Contraseña" 
                        inputStyles={{ fontSize: 25, color: "#fff", fontFamily: "Lato-Bold"}}
                    />
                    <View style={{ width: "80%", flexDirection: "row", justifyContent: 'flex-end', alignItems: 'center' }}>
                        <FAB 
                            icon="arrow-right"
                            color="#fff"
                            style={{
                                backgroundColor: secondary
                            }}
                            onPress={Login}
                        />
                    </View>
                </View>
            </View>
        </React.Fragment>
    )
}

const LoginUserStyles = StyleSheet.create({
    container : {
        width: "100%",
        height: "100%",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'space-around'
    },
    inputs: {

    },
    sections: { width: "100%", height: "40%", justifyContent: 'center', alignItems: "center", flexDirection: 'column'},
    slogan: {
        fontSize: 25,
        color: primary,
        fontFamily: 'Lato-Regular'  
    }
})
