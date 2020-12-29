// Global HTTP client
import axiosLibrary from 'axios'

// # Providers
// ## Firebase
import * as firebaseLibrary from "firebase/app"

// Add the Firebase services that you want to use
import "firebase/auth";

// ## Gmail
import * as nodemailerLibrary from "nodemailer"
 
export default {
    axios : axiosLibrary,
    firebase : firebaseLibrary,
    nodemailer : nodemailerLibrary
}

export const axios = axiosLibrary 
export const firebase = firebaseLibrary 
export const nodemailer = nodemailerLibrary 