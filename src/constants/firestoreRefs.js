import firestore from '@react-native-firebase/firestore'

export const userDataRef = firestore().collection('UsersData');