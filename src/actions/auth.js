import {firebase, googleAuthProvider} from '../firebase/firebase'

export const setLogin = (uid)=>{
    return {
        type: 'LOGIN',
        uid
    }
}

export const setLogout = ()=>{
    return {
        type: 'LOGOUT'
    }
}