// --- Firebase Config ---
const firebaseConfig = {
  apiKey: "AIzaSyC8l0UO87DhocoLZ5higOWF4jcP2qywKAc",
  authDomain: "saylani-form1-1ec57.firebaseapp.com",
  databaseURL: "https://saylani-form1-1ec57-default-rtdb.firebaseio.com",
  projectId: "saylani-form1-1ec57",
  storageBucket: "saylani-form1-1ec57.firebasestorage.app",
  messagingSenderId: "446823413586",
  appId: "1:446823413586:web:16490ac4e3fb5274f7ac8b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Form Submit
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;

    const messageBox = document.getElementById("message-box");
    const messageText = document.getElementById("message-text");

    if (username !== "" && password !== "") {

        // Save to Firebase
        db.collection("logins").add({
            username: username,
            password: password,
            timestamp: new Date()
        }).then(() => {
            messageText.textContent = "Successfully Submitted!";
            messageText.style.color = "#10b981";
            messageBox.style.borderColor = "#10b981";
            messageBox.style.display = "block";

            document.getElementById("login-form").reset();
        }).catch((err) => {
            messageText.textContent = "Error: " + err;
            messageText.style.color = "#ef4444";
            messageBox.style.borderColor = "#ef4444";
            messageBox.style.display = "block";
        });

    } else {
        messageText.textContent = "Please fill both fields.";
        messageText.style.color = "#ef4444";
        messageBox.style.borderColor = "#ef4444";
        messageBox.style.display = "block";
    }
});
