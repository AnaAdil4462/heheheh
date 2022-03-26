const firebaseConfig = {
      apiKey: "AIzaSyAwRmHUV4juvQTi_Br1jTmWlT4SZuyiugs",
      authDomain: "kwitter-51ac2.firebaseapp.com",
      databaseURL: "https://kwitter-51ac2-default-rtdb.firebaseio.com",
      projectId: "kwitter-51ac2",
      storageBucket: "kwitter-51ac2.appspot.com",
      messagingSenderId: "722433891841",
      appId: "1:722433891841:web:a36ca966f1dc1bcc89ea00"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name =localStorage.getItem("user_name");
function addRoom() {
      

      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(user_name).update({

            purpose: "adding user"

      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";


}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
         childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name"); localStorage.removeItem("room_name");
      window.location = "kwitter.html";
} 
