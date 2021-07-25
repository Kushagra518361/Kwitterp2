var firebaseConfig = {
    apiKey: "AIzaSyBFUEaJqw9ooP_EnM19flNjExtcs_CPOOo",
    authDomain: "anjali-menon-project-93.firebaseapp.com",
    projectId: "anjali-menon-project-93",
    storageBucket: "anjali-menon-project-93.appspot.com",
    messagingSenderId: "96744447122",
    appId: "1:96744447122:web:e67c16b1b8e808330a9a4b",
    measurementId: "G-TH5DXRH60D"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("User name")
document.getElementById("welcome").innerHTML = "Welcome" + user_name + "!" ; 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();

function change()
{
    document.getElementById("heading").style.color = "white" ;
    document.getElementById("heading").style.fontFamily = "monospace" ;

}
function normal()
{
    document.getElementById("heading").style.color = "yellow" ;
    document.getElementById("heading").style.fontFamily = "impact" ;
}
function logout()
{
    localStorage.removeItem("user_name") ;
    window.location = "index.html" ;
}