import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyCca6FtzZ60c1M9P-0NDKV4NZC06tFLmHw",
authDomain: "sneaker-store-f83d1.firebaseapp.com",
projectId: "sneaker-store-f83d1",
storageBucket: "sneaker-store-f83d1.appspot.com",
messagingSenderId: "601176088064",
appId: "1:601176088064:web:472971183ca685dca982e5"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)


export default firebase