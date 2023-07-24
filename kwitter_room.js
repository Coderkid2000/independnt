var firebaseConfig = {
      apiKey: "AIzaSyDHLfRYOX4QVSHOyZVeDzz0kx0GvHwJzYo",
      authDomain: "i-kwit.firebaseapp.com",
      databaseURL: "https://i-kwit-default-rtdb.firebaseio.com",
      projectId: "i-kwit",
      storageBucket: "i-kwit.appspot.com",
      messagingSenderId: "366907034864",
      appId: "1:366907034864:web:ac524353bb9a7cc2244635"
    };
    
firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("user_name");
document.getElementById("username").innerHTML="welcome " + username;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      });});}
getData();
function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
       window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}