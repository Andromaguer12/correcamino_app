import auth from "@react-native-firebase/auth"
import { userDataRef } from "../constants/firestoreRefs";

export const AuthInstance = auth();

export const getUserDocFromPhone = (PhoneNumber) => {
    return new Promise(async (response, reject) => {
        await userDataRef.where("phoneNumber", "==", PhoneNumber).get().then((docs) =>{
            const array = [];
            docs.forEach((doc) => {
                array.push({
                    email: doc.id,
                    ...doc.data()
                })
            })
            response(array[0])
        }).catch((error) => reject(error))
    })
}

const getUserDoc = async (email) => {
    return new Promise(async (response, reject) => {
        await userDataRef.doc(`${email}`).get().then((doc) =>{
            response({
                email: doc.id,
                ...doc.data()
            })
        }).catch((error) => reject(error))
    })
}

const createUserDoc = async (data) => {
    
    return new Promise((response, reject) => {
        userDataRef.doc(`${data.email}`).set(data).then(async () => {
            await userDataRef.doc(`${data.email}`).get().then((userDoc) => {
                response({
                    email: userDoc.id,
                    ...userDoc.data()
                })
            }).catch(error => reject(error))
        })

    })
}

export const RegisterEmailUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        createUserDoc(data).then((res) => {
            AuthInstance.createUserWithEmailAndPassword(data.email, data.password).then((user) => {
                resolve(user)
            }).catch((error) => reject(error))
        }).catch((error) => reject(error))
    })
}

export const PhoneSignIn = async (PhoneNumber) => {
    return new Promise((response, reject) => {
        AuthInstance.signInWithPhoneNumber(PhoneNumber).then(async (user) => {
            response(user);
        }).catch((error) => reject(error))
    })
}

export const CommonSignIn = async (email, pass) => {
    return new Promise((response, reject) => {
        AuthInstance.signInWithEmailAndPassword(email, pass).then(async (user) => {
            await getUserDoc(AuthInstance.currentUser.email).then((res) => {
                response(res)
            }).catch((error) => reject(error))
        }).catch((error) => reject(error))
    })
}

// employee register 

export const SubmitEmployeeApplication = (data) => {
    return new Promise(async (response, reject) => {
        await applicationsRef.add(data).then((res) => {
            response(res)
        })
        .catch((error) => {
            reject(error)
        })
    })
}