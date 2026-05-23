importScripts('https://www.gstatic.com/firebasejs/12.13.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.13.0/firebase-messaging-compat.js');

firebase.initializeApp({

apiKey:"AIzaSyA9019b2kvsZFJTjzvdGMIWxHWC5UreHr4",

authDomain:"device-tracker-ar7.firebaseapp.com",

databaseURL:
"https://device-tracker-ar7-default-rtdb.asia-southeast1.firebasedatabase.app",

projectId:"device-tracker-ar7",

storageBucket:
"device-tracker-ar7.firebasestorage.app",

messagingSenderId:"1027897374944",

appId:
"1:1027897374944:web:64826f4587e10ec99a7885"

});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload)=>{

self.registration.showNotification(

payload.notification.title,

{
body:payload.notification.body,
icon:"icon-192.png"
}

);

});