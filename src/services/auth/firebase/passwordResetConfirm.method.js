export default (config, context)=>{

    // Initialize Firebase
    // const firebase = context.firebase.initializeApp(options);
    
    const signIn = async (credentials)=>{    

        try{

            let user = await context.firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            
            const token = await context.firebase.auth().currentUser.getIdToken()

            return {
                token,
                email : credentials.email
            }

        }catch(err){
            console.log(err)
        }
        
    }

    return signIn
}