export default (options, context)=>{

    // Initialize Firebase
    const firebase = context.firebase.initializeApp(options);
    
    const signIn = async (credentials)=>{    

        let user = await firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
        
        const token = await firebase.auth().currentUser.getIdToken()

        return {
            token,
            email : credentials.email
        }
        
    }

    return signIn
}