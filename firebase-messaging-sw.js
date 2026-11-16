// Programma che resta in ascolto anche ad app chiusa: riceve le notifiche del gestionale da Firebase e le mostra.
// Toccando la notifica si apre la pagina di avvio sulla schermata giusta (indirizzo scelto dal gestionale).
// Configurazione PUBBLICA del progetto Firebase (nessun segreto, nessun dato del gestionale).
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({"apiKey": "AIzaSyCiazoTHLZVFXhibzx-_Ic79L_7QELs7V8", "authDomain": "gestionale-graziani-catullo.firebaseapp.com", "projectId": "gestionale-graziani-catullo", "storageBucket": "gestionale-graziani-catullo.firebasestorage.app", "messagingSenderId": "1019195034915", "appId": "1:1019195034915:web:5fe174a4fd541cefc09096"});
firebase.messaging();
