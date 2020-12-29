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

sdk.mail.gmail.send({
      to: 'erick.ruano@satelite.digital',
      subject: 'Test from sdk /dev/index.js',
      text: 'It works!'
})

// // SignIn service
// sdk.auth.firebase.signIn({
//     email : 'erickaleruano@gmail.com',
//     password : 'Satelite.119922'
// }).then(token=>{
//     console.log('finally', token)
// })