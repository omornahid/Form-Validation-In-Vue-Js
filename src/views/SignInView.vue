<template>
  <div class="flex justify-center items-center">
    <form
      @submit.prevent="signUp"
      class="bg-violet-300 mt-14 p-6 rounded-lg w-1/2"
    >
      <h1 class="text-lg mb-4 font-bold">Sign In</h1>
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2" for="email">
          Email
        </label>
        <input
          class="border border-gray-400 p-2 rounded-lg w-full"
          type="email"
          id="email"
          v-model="email"
          placeholder="Enter your email address"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2" for="password">
          Password
        </label>
        <input
          class="border border-gray-400 p-2 rounded-lg w-full"
          type="password"
          id="password"
          v-model="password"
          placeholder="Enter your password"
        />
      </div>
      <p v-if="errorMsg">{{ errorMsg }}</p>
      <div class="text-center mt-6">
        <button
          @click="signUp"
          class="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
          type="submit"
        >
          Log in
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const email = ref("");
const password = ref("");
const router = useRouter();
const errorMsg = ref("");
const auth = getAuth();
const signUp = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log(auth.currentUser);
      router.push("/feed");
    })
    .catch((error) => {
      console.log("error");
      switch (error.code) {
        case "auth/invalid-email":
          errorMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errorMsg.value = "User not found";
          break;
        case "auth/wrong-password":
          errorMsg.value = "Wrong password";
          break;
        default:
          errorMsg.value = "Email or Password was incorrect. Please try again.";
          break;
      }
    });
};
</script>
