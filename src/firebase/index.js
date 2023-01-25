import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmncPhvvVPSm9vVr7Cow3kUzd0nclJbrg",
  authDomain: "assignment-vue-a0338.firebaseapp.com",
  projectId: "assignment-vue-a0338",
  storageBucket: "assignment-vue-a0338.appspot.com",
  messagingSenderId: "351694823984",
  appId: "1:351694823984:web:26ceb0ebab2a7ae81b43f5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

