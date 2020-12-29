// Global HTTP client
import axiosLibrary from 'axios';

// # Providers
// ## Firebase
import * as firebaseLibrary from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";

 
export default {
    axios : axiosLibrary,
    firebase : firebaseLibrary
}

export const axios = axiosLibrary 