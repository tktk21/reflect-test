console.log("loadded firebase");
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCnbXqkwUw9RPZrxGKc_gwVMz-xdKuJJC8",
  authDomain: "reflect-3431e.firebaseapp.com",
  databaseURL: "https://reflect-3431e.firebaseio.com",
  projectId: "reflect-3431e",
  storageBucket: "reflect-3431e.appspot.com",
  messagingSenderId: "790622001042",
  appId: "1:790622001042:web:79bdec88c34316d8ced34b",
  measurementId: "G-7640VHZVZH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

function signIn() {
  var email = document.getElementById("auth-sign-in-username").value;
  var password = document.getElementById("auth-sign-in-password").value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errMsg = document.getElementById("signin-err-msg");
    errMsg.innerHTML = error.message;
    errMsg.style.display = "block";
    console.log("ErrorSignIn: ", error)
  });
}

function signOut() {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
    console.log('signout successfully')
  }).catch(function (error) {
    // An error happened.
    console.log("ErrorSignOut: ", error)
  });
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    // document.querySelector("body>div").style.display = "block";
    console.log("User Signed In")
    if ((window.location.href).indexOf('login.html') != -1) {
      window.location.href = "/index.html";
    }

  } else {
    // User is signed out.
    console.log("User Signed Out")
    if ((window.location.href).indexOf('login.html') == -1) {
      window.location.href = "/login.html";
    }
  }
});