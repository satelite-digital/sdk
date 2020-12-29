require('dotenv').config()

// Context.js
const sdk = require('./../dist/lib.cjs.js')({
    auth : {
        provider : 'firebase',
        options : {
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN,
            projectId: process.env.FIREBASE_PROJECT_ID,
            appId:  process.env.FIREBASE_APP_ID
        }
    }
})

// SignIn service
sdk.auth.firebase.signIn({
    email : 'erickaleruano@gmail.com',
    password : 'Satelite.119922'
}).then(token=>{
    console.log('finally', token)
})