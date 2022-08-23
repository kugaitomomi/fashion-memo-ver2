const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyBTEG6U6N5lyx1gp8ZwUgpsBc-Q9sAGPUU",
  authDomain: "fashion-memo-pj-ver2.firebaseapp.com",
  projectId: "fashion-memo-pj-ver2",
  storageBucket: "fashion-memo-pj-ver2.appspot.com",
  messagingSenderId: "556023214404",
  appId: "1:556023214404:web:0f76b1c85e3da3b5402711"
};

const firebaseApp = initializeApp(firebaseConfig);

module.exports = getStorage(firebaseApp);