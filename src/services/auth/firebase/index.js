import signUpMethodFactory from './signUp.method'
import signInMethodFactory from './signIn.method'



const firebaseFactory = (options, context)=>{

    const firebaseProvider = { 
        signUp : signUpMethodFactory(options, context),
        signIn : signInMethodFactory(options, context)
    }

    return firebaseProvider
}

export default firebaseFactory

export const signUp = signUpMethodFactory
export const signIn = signInMethodFactory