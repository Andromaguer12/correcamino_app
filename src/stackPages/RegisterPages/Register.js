import { Formik } from 'formik'
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ActivityIndicator, Divider, IconButton } from 'react-native-paper'
import CommonBackground from '../../components/StylingComponents/CommonBackground'
import { primary, primaryOpacity, third } from '../../constants/ColorTheme'
import RNPickerSelect from 'react-native-picker-select'
import PersonalizedSelector from '../../components/StylingComponents/PersonalizedSelector'
import CustomInput from '../../components/StylingComponents/CustomInput'
import PersonalizedButton from '../../components/StylingComponents/PersonalizedButton'
import AcceptAndDeny from '../../components/AppComponents/AcceptAndDeny'
import { userDataRef } from '../../constants/firestoreRefs'
import { RegisterEmailUser } from '../../functions/AuthFunctions'

export default function Register({navigation}) {
    const [UserType, setUserType] = useState("user")
    const [Accept, setAccept] = useState(false)
    const [Error, setError] = useState('');
    const [data, setdata] = useState(false)

    const Evaluate = (values) => {
        const validations = []
        var valueskeys = Array.from(Object.keys(values));
        valueskeys.forEach((key) => {
            if(values[key].length == 0 && key != 'password') validations.push(true)
        })
        if(validations.length == 0 && values.password.length > 0){
            setAccept(true);
            setdata({...values, userType: UserType})
        }
        else{
            setError("Los campos estan vacios, o la contraseña es muy corta")
        }
    }

    const submitRegistration = async () => {
        return new Promise(async (response, reject) => {
            await RegisterEmailUser(data).then((user) => {
                response(true)
                setTimeout(() => {
                    navigation.goBack();
                }, 500);
            }).catch((error) => reject())
        })
    } 

    return (
        <React.Fragment>
            <View style={{ width: "100%", height: "100%", flexDirection: "column", alignItems: "center"}}>
                <CommonBackground />
                <View style={RegisterStyles.header}>
                    <IconButton 
                        icon="arrow-left"
                        color={primary}
                        size={40}
                        onPress={() => navigation.goBack()}
                    />
                    <Text style={RegisterStyles.title}>Registro de usuario</Text>
                    <IconButton 
                        icon="account-multiple-plus"
                        color={primary}
                        size={40}
                    />
                </View>
                {!Accept ? <PersonalizedSelector 
                    onValueChange={(e) => setUserType(e)}
                    items={[
                        { label: "Usuario", value: "user" },
                        { label: "Repartidor", value: "distributor" },
                        { label: "Asociado", value: "associate" },
                    ]}
                    shadow={true}
                    value={UserType}
                    boxStyles={{ width: "90%", backgroundColor: "#fff", borderRadius: 10, zIndex: 0 }}
                /> : <View style={{ width: "90%", flexDirection: "row", justifyContent: "center"}}>
                    <ActivityIndicator color={primary} style={{marginVertical: 10}} />
                </View>}
                <View style={RegisterStyles.form}>
                    {UserType == "user" && <Formik
                        initialValues={{ fullName: "", email: "", address: "", password: "", phoneNumber: "" }}
                        onSubmit={Evaluate}
                    >
                        {
                            (props) => {
                                return (
                                    <React.Fragment>
                                        <View style={RegisterStyles.inputBox}>
                                            <CustomInput 
                                                placeholder="Nombre completo"
                                                value={props.values.fullName}
                                                style={RegisterStyles.inputs} 
                                                shadow={true}
                                                inputStyles={{ fontSize: 20, color: "#7a7a7a", fontFamily: "Lato-Bold"}} 
                                                onChange={props.handleChange("fullName")}
                                            />
                                            <CustomInput 
                                                placeholder="Direccion"
                                                multiline={true}
                                                value={props.values.address}
                                                style={RegisterStyles.inputs} 
                                                shadow={true}
                                                inputStyles={{ fontSize: 20, color: "#7a7a7a", fontFamily: "Lato-Bold"}} 
                                                onChange={props.handleChange("address")}
                                            />
                                            <CustomInput 
                                                placeholder="Email"
                                                multiline={true}
                                                value={props.values.email}
                                                style={RegisterStyles.inputs} 
                                                shadow={true}
                                                inputStyles={{ fontSize: 20, color: "#7a7a7a", fontFamily: "Lato-Bold"}} 
                                                onChange={props.handleChange("email")}
                                            />
                                            <CustomInput 
                                                placeholder="Numero de telefono (VEN)"
                                                multiline={true}
                                                value={props.values.phoneNumber}
                                                style={RegisterStyles.inputs} 
                                                shadow={true}
                                                inputStyles={{ fontSize: 20, color: "#7a7a7a", fontFamily: "Lato-Bold"}} 
                                                onChange={props.handleChange("phoneNumber")}
                                            />
                                            <CustomInput 
                                                placeholder="Contraseña"
                                                multiline={true}
                                                value={props.values.password}
                                                style={RegisterStyles.inputs} 
                                                shadow={true}
                                                inputStyles={{ fontSize: 20, color: "#7a7a7a", fontFamily: "Lato-Bold"}} 
                                                onChange={props.handleChange("password")}
                                            />
                                            <Text style={[RegisterStyles.title, {fontSize: 17, width: "90%", textAlign: "center" }]}>Esta contraseña debe contener minimo 6 caracteres</Text>
                                        </View>
                                        <PersonalizedButton 
                                            tag="Siguiente"
                                            tagColor="#fff"
                                            tagSize={25}
                                            backgroundColor={primary}
                                            icon="chevron-right"
                                            style={{ width: "90%", marginVertical: 20, borderRadius: 25 }}
                                            onPress={props.handleSubmit}
                                        />
                                    </React.Fragment>
                                )
                            }
                        }
                    </Formik>}
                    {UserType === "distributor" && <Formik
                        initialValues={{ fullName: "", age: "", personalID: "", email: "", address: "", password: "", phoneNumber: "" }}
                        onSubmit={Evaluate}
                    >
                        {
                            (props) => {
                                return (
                                    <React.Fragment>
                                        <View style={RegisterStyles.inputBox}>
                                            <CustomInput 
                                                placeholder="Nombre completo"
                                                value={props.values.fullName}
                                                style={RegisterStyles.inputs} 
                                                shadow={true}
                                                inputStyles={{ fontSize: 20, color: "#7a7a7a", fontFamily: "Lato-Bold"}} 
                                                onChange={props.handleChange("fullName")}
                                            />
                                            <CustomInput 
                                                placeholder="Direccion"
                                                multiline={true}
                                                value={props.values.address}
                                                style={RegisterStyles.inputs} 
                                                shadow={true}
                                                inputStyles={{ fontSize: 20, color: "#7a7a7a", fontFamily: "Lato-Bold"}} 
                                                onChange={props.handleChange("address")}
                                            />
                                            <CustomInput 
                                                placeholder="Numero de cedula"
                                                multiline={true}
                                                value={props.values.personalID}
                                                style={RegisterStyles.inputs} 
                                                shadow={true}
                                                inputStyles={{ fontSize: 20, color: "#7a7a7a", fontFamily: "Lato-Bold"}} 
                                                onChange={props.handleChange("personalID")}
                                            />
                                            <CustomInput 
                                                placeholder="Edad"
                                                multiline={true}
                                                value={props.values.age}
                                                style={RegisterStyles.inputs} 
                                                shadow={true}
                                                inputStyles={{ fontSize: 20, color: "#7a7a7a", fontFamily: "Lato-Bold"}} 
                                                onChange={props.handleChange("age")}
                                            />
                                            <CustomInput 
                                                placeholder="Email"
                                                multiline={true}
                                                value={props.values.email}
                                                style={RegisterStyles.inputs} 
                                                shadow={true}
                                                inputStyles={{ fontSize: 20, color: "#7a7a7a", fontFamily: "Lato-Bold"}} 
                                                onChange={props.handleChange("email")}
                                            />
                                            <CustomInput 
                                                placeholder="Numero de telefono (VEN)"
                                                multiline={true}
                                                value={props.values.phoneNumber}
                                                style={RegisterStyles.inputs} 
                                                shadow={true}
                                                inputStyles={{ fontSize: 20, color: "#7a7a7a", fontFamily: "Lato-Bold"}} 
                                                onChange={props.handleChange("phoneNumber")}
                                            />
                                            <CustomInput 
                                                placeholder="Contraseña"
                                                multiline={true}
                                                value={props.values.phoneNumber}
                                                style={RegisterStyles.inputs} 
                                                shadow={true}
                                                inputStyles={{ fontSize: 20, color: "#7a7a7a", fontFamily: "Lato-Bold"}} 
                                                onChange={props.handleChange("password")}
                                            />
                                            <Text style={[RegisterStyles.title, {fontSize: 17, width: "90%", textAlign: "center" }]}>Esta contraseña debe contener minimo 6 caracteres</Text>
                                        </View>
                                        <PersonalizedButton 
                                            tag="Siguiente"
                                            tagColor="#fff"
                                            tagSize={25}
                                            backgroundColor={primary}
                                            icon="chevron-right"
                                            style={{ width: "90%", marginVertical: 20, borderRadius: 25 }}
                                            onPress={props.handleSubmit}
                                        />
                                    </React.Fragment>
                                )
                            }
                        }
                    </Formik>}
                    {UserType == "associate" && <Formik
                        initialValues={{ fullName: "", email: "", address: "", phoneNumber: "", password: "" }}
                        onSubmit={Evaluate}
                    >
                        {
                            (props) => {
                                return (
                                    <React.Fragment>
                                        <View style={RegisterStyles.inputBox}>
                                            <CustomInput 
                                                placeholder="Nombre del establecimiento"
                                                value={props.values.fullName}
                                                style={RegisterStyles.inputs} 
                                                shadow={true}
                                                inputStyles={{ fontSize: 20, color: "#7a7a7a", fontFamily: "Lato-Bold"}} 
                                                onChange={props.handleChange("fullName")}
                                            />
                                            <CustomInput 
                                                placeholder="Direccion"
                                                multiline={true}
                                                value={props.values.address}
                                                style={RegisterStyles.inputs} 
                                                shadow={true}
                                                inputStyles={{ fontSize: 20, color: "#7a7a7a", fontFamily: "Lato-Bold"}} 
                                                onChange={props.handleChange("address")}
                                            />
                                            <CustomInput 
                                                placeholder="Email del negocio"
                                                multiline={true}
                                                value={props.values.email}
                                                style={RegisterStyles.inputs} 
                                                shadow={true}
                                                inputStyles={{ fontSize: 20, color: "#7a7a7a", fontFamily: "Lato-Bold"}} 
                                                onChange={props.handleChange("email")}
                                            />
                                            <CustomInput 
                                                placeholder="Numero de telefono (VEN)"
                                                multiline={true}
                                                value={props.values.phoneNumber}
                                                style={RegisterStyles.inputs} 
                                                shadow={true}
                                                inputStyles={{ fontSize: 20, color: "#7a7a7a", fontFamily: "Lato-Bold"}} 
                                                onChange={props.handleChange("phoneNumber")}
                                            />
                                            <CustomInput 
                                                placeholder="Contraseña"
                                                multiline={true}
                                                value={props.values.password}
                                                style={RegisterStyles.inputs} 
                                                shadow={true}
                                                inputStyles={{ fontSize: 20, color: "#7a7a7a", fontFamily: "Lato-Bold"}} 
                                                onChange={props.handleChange("password")}
                                            />
                                            <Text style={[RegisterStyles.title, {fontSize: 17, width: "90%", textAlign: "center" }]}>Esta contraseña debe contener minimo 6 caracteres</Text>
                                        </View>
                                        <PersonalizedButton 
                                            tag="Siguiente"
                                            tagColor="#fff"
                                            tagSize={25}
                                            backgroundColor={primary}
                                            icon="chevron-right"
                                            style={{ width: "90%", marginVertical: 20, borderRadius: 25 }}
                                            onPress={props.handleSubmit}
                                        />
                                    </React.Fragment>
                                )
                            }
                        }
                    </Formik>}
                </View>
            </View>
            {Accept && <AcceptAndDeny errorMsg={Error} Accept={submitRegistration} Deny={() => setAccept(false)} title="Ultimo paso!" text="¿La informacion suministrada es valida?, si es asi continue." />}
        </React.Fragment>
    )
}

const RegisterStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%"
    },
    title: {
        fontSize: 25,
        fontFamily: "Lato-Bold",
        color: primary
    },
    inputBox: {
        width: "100%",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
        zIndex: 1
    },
    form: {
        width: "100%",
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputs: { 
        width: "90%",
        paddingHorizontal: 20, 
        borderRadius: 10,
        backgroundColor: "#fff", 
        color: "#fff",
        marginVertical: 10
    }
})
