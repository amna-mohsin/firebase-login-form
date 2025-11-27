
# Firebase Login Form

A simple and responsive dark-themed login form built using **HTML, CSS, JavaScript, and Firebase Firestore**.
The project includes custom validation, success/error alerts, and real-time Firebase database support.

:Live demo available on [Netlify](https://firebase-form-a.netlify.app/).

---

## 🚀 Features

* **Responsive Layout** — Works perfectly across all screen sizes.
* **Interactive Form** — Includes real-time validation for required fields.
* **Firebase Integration** — Stores form submissions securely using Firebase Firestore.
* **Modern UI** — Clean and user-friendly design inspired by the original SMIT form.
* **Reusable Components** — Input fields and submit functionality structured for scalability.
* **Smooth User Experience** — Hover effects, transitions, and validation feedback for users.

---

## 🔧 Technologies Used

* HTML5
* CSS3 (Flexbox, Grid, Media Queries)
* JavaScript (DOM Manipulation, Firebase Integration)
* Firebase (Firestore)
* Netlify (for deployment)

---

## 🏗️ Sections Overview

* **Form** – Username and Password fields.
* **Validation** – Checks for empty or invalid inputs before submission.
* **Submission Handling** – Sends form data to Firebase Firestore.
* **Confirmation Message** – Displays success alert upon submission.

---

## 💻 Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/amna-mohsin/firebase-login-form.git
```

2. Navigate to the project directory:

```bash
cd Form-Clone
```

3. Open `index.html` in your browser to view the form.
   *(No external build tools required — pure HTML, CSS, and JavaScript.)*

---

## ⚡ Firebase Setup Instructions

To make the form functional with Firebase Firestore:

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Navigate to **Firestore Database** and create a collection named `logins`.
3. Get your Firebase config from Project Settings → SDK Setup → Firebase Web App:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

4. Replace the empty `firebaseConfig` in `script.js` with your actual keys.
5. **Important:** Do **not** push your real Firebase keys to a public repository. Use a `.env` file or leave placeholders for public repos.
6. Make sure your Firestore security rules allow authenticated access or limit access appropriately:

```json
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /logins/{document=**} {
      allow read, write: if false; // change for testing only
    }
  }
}
```

7. Save and reload your `index.html` to start submitting data to Firebase.

-----

## 📸 Screenshots

<img width="848" height="576" alt="Login Form Screenshot" src="https://github.com/user-attachments/assets/60dac67a-adf0-453d-a4e3-017ca5fce916" />

-----

## 👤 Owner

* Developed and maintained by **Amna Mohsin**
* For collaborations or inquiries, connect on [LinkedIn](https://www.linkedin.com/in/amna-m98/)

-----

## 📜 License

This project is open-source and free to use.

-----
