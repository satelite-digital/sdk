import signUpMethodFactory from './signUp.method'
import signInMethodFactory from './signIn.method'
import passwordResetRequestFactory from './passwordResetRequest.method'


const firebaseFactory = (options, context)=>{

    context.firebase = context.firebase.initializeApp(options);

    const firebaseProvider = { 
        signUp : signUpMethodFactory(options, context),
        signIn : signInMethodFactory(options, context),
        passwordResetRequest : passwordResetRequestFactory(options, context)
    }

    return firebaseProvider
}

export default firebaseFactory