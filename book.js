
var firebaseConfig = {
   apiKey: "AIzaSyD0qZCqALIaSCCNKGyTiAHtXEJ86zE7YCY",
   authDomain: "book-form-49610.firebaseapp.com",
   projectId: "book-form-49610",
   storageBucket: "book-form-49610.appspot.com",
   messagingSenderId: "159994516680",
   appId: "1:159994516680:web:46d512aca060c3a7cf81fd"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);



 var stateObject = {
 "India": { "Delhi": ["new Delhi", "North Delhi"],
 "Kerala": ["Thiruvananthapuram", "Palakkad"],
 "Goa": ["North Goa", "South Goa"],
 },
 "Australia": {
 "South Australia": ["Dunstan", "Mitchell"],
 "Victoria": ["Altona", "Euroa"]
 }, "Canada": {
 "Alberta": ["Acadia", "Bighorn"],
 "Columbia": ["Washington", ""]
 },
 }


function SubmitUser() {
var email=document.getElementById('email').value;
var password=document.getElementById('password').value;
var name=document.getElementById('name').value;
var state=document.getElementById('state').value;
var city=document.getElementById('city').value;
var address=document.getElementById('address').value;
var countySel = document.getElementById("countySel");
 var stateSel = document.getElementById("stateSel");
var districtSel = document.getElementById("districtSel");

var state=document.getElementById('state').value;


window.onload = function () {
var countySel = document.getElementById("countySel"),
 stateSel = document.getElementById("stateSel"),
districtSel = document.getElementById("districtSel");
for (var country in stateObject) {
countySel.options[countySel.options.length] = new Option(country, country);
}
countySel.onchange = function () {
stateSel.length = 1; // remove all options bar first
districtSel.length = 1; // remove all options bar first
if (this.selectedIndex < 1) return; // done
for (var state in stateObject[this.value]) {
stateSel.options[stateSel.options.length] = new Option(state, state);
}
}
countySel.onchange(); // reset in case page is reloaded
stateSel.onchange = function () {
districtSel.length = 1; // remove all options bar first
if (this.selectedIndex < 1) return; // done
var district = stateObject[countySel.value][this.value];
for (var i = 0; i < district.length; i++) {
districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
}
}
}






firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
 alert('Booked Successfully. Our Expert will soon contact you.Thank you ');
  var id=firebase.auth().currentUser.uid;
  firebase.database().ref('BookData/'+id).set({
    name:name,
    state:state,
    email:email,
    city:city,
    address: address,
    state: stateSel,
    country: countySel,
    ditrict:districtSel,




  });
}).catch(function(error){

var errorcode=error.code;
var errormsg=error.message;

});

}
