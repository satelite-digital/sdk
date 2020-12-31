export default (config, context)=>{
    
    const passwordResetRequest = async (user)=>{   

        try{

            const results = await context.firebase.auth().sendPasswordResetEmail(user.email)

            return results

        }catch(err){
            console.log(err)
        }
        
    }

    return passwordResetRequest
}