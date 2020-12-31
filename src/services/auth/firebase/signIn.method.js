export default (config, context)=>{

    // Initialize Firebase
    // const firebase = context.firebase.initializeApp(options);
    
    const signIn = async (credentials)=>{    

        try{

            let user = await context.firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            
            user = await context.firebase.auth().currentUser


            return {
                token : await user.getIdToken(),
                refresh_token : user.refreshToken,
                email : credentials.email
            }

        }catch(err){
            console.log(err)
        }
        
    }

    return signIn
}