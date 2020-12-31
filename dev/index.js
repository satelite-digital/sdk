require('dotenv').config()

// Context.js
const sdkOptions = {
    auth : {
        provider : 'firebase',
        options : {
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN,
            projectId: process.env.FIREBASE_PROJECT_ID,
            appId:  process.env.FIREBASE_APP_ID
        }
    },
    mail : {
        provider : 'gmail',
        options : {
            user : process.env.GMAIL_USER,
            pass : process.env.GMAIL_PASS
        }
    }
}

const sdk = require('./../dist/lib.cjs.js')(sdkOptions)

// sdk.mail.gmail.send({
//       to: 'erick.ruano@satelite.digital',
//       subject: 'Test from sdk /dev/index.js',
//       text: 'It works!'
// })

// SignIn service

sdk.auth.firebase.signIn({
    email : 'erick.ruano@satelite.digital',
    password : 'Hola.119922'
}).then(token=>{
    console.log(JSON.stringify(token))
})

// sdk.auth.firebase.passwordResetRequest({
//     email : 'erickaleruano@gmail.com'
// }).then(results=>{
//     console.log('reset requested' , results)
// })

// sdk.auth.firebase.signUp({
//     user : 'metalshinigami@hotmail.com',
//     pass : 'Satelite.119922'
// }).then(result=>{
//     console.log('created: ', result.user.tenantId)
// }).catch((err)=>{
//     console.log("err: ", err)
// })