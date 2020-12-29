import cognitoFactory from './cognito/index'
import firebaseFactory from './firebase/index'

export default {
    cognito : cognitoFactory,
    firebase : firebaseFactory
}

export const cognito = cognitoFactory
export const firebase = firebaseFactory