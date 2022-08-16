import React from "react";
import { getMessaging, getToken } from "firebase/messaging";
import * as firebase from "firebase/app";
import { FirebaseOptions } from "firebase/app";

const App = () => {
    const firebaseConfig: FirebaseOptions = {
        apiKey: "AIzaSyBi3D5x2WmaZT1Lvjql_4Ei9kWW1EY8yEE",
        authDomain: "ryan-project-a5300.firebaseapp.com",
        databaseURL: "https://ryan-project-a5300-default-rtdb.firebaseio.com",
        projectId: "ryan-project-a5300",
        storageBucket: "ryan-project-a5300.appspot.com",
        messagingSenderId: "353195216368",
        appId: "1:353195216368:web:73347b89368a97f8c42135",
        measurementId: "G-GPC3WVX4LG"
    };
    const version = `${process.env.REACT_APP_VERSION_TAG}`;
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker
            .register(process.env.PUBLIC_URL + "/firebase-messaging-sw.js")
            .then(async (registration) => {
                // const messaging = firebase.messaging();
                console.log("registration", registration)
                console.info("Registration successful, scope is:", registration.scope);
                await Notification.requestPermission().then((permition) => {
                    console.log("permition", permition)
                    if (permition === "granted") {
                        const app = firebase.initializeApp(firebaseConfig);
                        const messaging: any = getMessaging(app);
                        const currentToken = getToken && getToken(messaging)
                        return currentToken;
                    }
                }).then((currentToken) => {
                    if (currentToken) {
                        console.log("currentTokens", currentToken) // <- this? Yes, when I execute it i get it
                        // Send the token to your server and update the UI if necessary
                        // pls, open . You what the cod, open my code as
                    } else {
                        // Show permission request UI
                        console.log('No registration token available. Request permission to generate one.');
                        // ... where is to get message?????
                    }
                }).catch((err) => {
                    console.log('An error occurred while retrieving token. ', err);
                    // ... I think this part is wrong.......
                });

            })
            .catch(function (err) {
                console.info("Service worker registration failed, error:", err);
            });
    }
    return (
        <div className="App">

        </div>
    );
};

export default App;
