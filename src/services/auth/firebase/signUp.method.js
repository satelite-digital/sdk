export default (options, context)=>{

    // Initialize Firebase
    // const firebase = context.firebase.initializeApp(options);
    
    const signUp = async (credentials)=>{    
        try{
            
            let user = await context.firebase.auth().createUserWithEmailAndPassword(credentials.user, credentials.pass)
            
            return user

        }catch(err){
            console.log(err)
        }
        
    }

    return signUp
    
}