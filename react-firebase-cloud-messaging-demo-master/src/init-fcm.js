import firebase from "firebase";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBi3D5x2WmaZT1Lvjql_4Ei9kWW1EY8yEE",
  authDomain: "ryan-project-a5300.firebaseapp.com",
  databaseURL: "https://ryan-project-a5300-default-rtdb.firebaseio.com",
  projectId: "ryan-project-a5300",
  storageBucket: "ryan-project-a5300.appspot.com",
  messagingSenderId: "353195216368",
  appId: "1:353195216368:web:73347b89368a97f8c42135",
  measurementId: "G-GPC3WVX4LG"
});

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(
  "BIooMP1bavvv75X5G_XV9r3yTtMXyQL33rfgBUA73m_7sIhx0Ie8vqCc4DLLC7CQuYKHoxsQVBONOqLoPzDqQDM"
);

export { messaging };
