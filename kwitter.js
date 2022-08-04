function addUser() {
user_name = document.getElementById("user_name").value;

localStorage.setItem("user_name", user_name);
window.location = "kwitter_room.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyDdiKWYtACpp6rBYFR-KcPEDz78QbNP770",
    authDomain: "kwitter-ac15b.firebaseapp.com",
    databaseURL: "https://kwitter-ac15b-default-rtdb.firebaseio.com",
    projectId: "kwitter-ac15b",
    storageBucket: "kwitter-ac15b.appspot.com",
    messagingSenderId: "6807181148",
    appId: "1:6807181148:web:ab26c9986f0bf131289399"
  };
  
  firebase.initializeApp(firebaseConfig);