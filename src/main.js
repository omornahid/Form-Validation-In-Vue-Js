import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP4I9iWoouFiZCE_0w1_YfLrIUhBMKY6E",
  authDomain: "vue-assignment-b1a3b.firebaseapp.com",
  projectId: "vue-assignment-b1a3b",
  storageBucket: "vue-assignment-b1a3b.appspot.com",
  messagingSenderId: "699184538560",
  appId: "1:699184538560:web:da29ad9cf3062bd5a71e25",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");
