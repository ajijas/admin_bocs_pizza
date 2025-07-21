importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCGT6XUBzv5xZPPhwoqG4pcUHfRMYAb9ZA",
    authDomain: "bocs-pizza-d229b.firebaseapp.com",
    projectId: "bocs-pizza-d229b",
    storageBucket: "bocs-pizza-d229b.firebasestorage.app",
    messagingSenderId: "226502940057",
    appId: "1:226502940057:web:4a77d128f0e05949a5ef08",
    measurementId: "G-6YRY1EMDTS"
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    return self.registration.showNotification(payload.data.title, {
        body: payload.data.body ? payload.data.body : '',
        icon: payload.data.icon ? payload.data.icon : ''
    });
});