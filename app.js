var firebaseConfig = {
    apiKey: "AIzaSyC43uYeQJCznjr-a11uHJeT3FqVVMWAzew",
    authDomain: "bike-form.firebaseapp.com",
    projectId: "bike-form",
    storageBucket: "bike-form.appspot.com",
    messagingSenderId: "1092138782337",
    appId: "1:1092138782337:web:9354102ec19089ff66c780"
  };


  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function SubmitUser() {
var email=document.getElementById('email').value;
var password=document.getElementById('password').value;
var fname=document.getElementById('fname').value;
var lname=document.getElementById('lname').value;



firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
 alert('User Register successfully');
  var id=firebase.auth().currentUser.uid;
  firebase.database().ref('User/'+id).set({
    fname:fname,
    lname:lname,
    email:email,
    password:password,

  });
}).catch(function(error){

var errorcode=error.code;
var errormsg=error.message;

});

}
