var firebaseConfig = {
apiKey: "AIzaSyAzIbMoPQcPaE9U1nTZNDxyQVOwuFkEFlo",
authDomain: "analiza-t.firebaseapp.com",
projectId: "analiza-t",
storageBucket: "analiza-t.appspot.com",
messagingSenderId: "774191649945",
appId: "1:774191649945:web:500a4367790668245a5408"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
