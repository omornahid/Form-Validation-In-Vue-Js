<template>
  <div class="flex justify-center items-center">
    <form
      @submit.prevent="signUp"
      class="bg-sky-200 mt-14 p-6 rounded-lg w-1/2"
    >
      <h1 class="text-lg mb-4 font-bold">Create An Account</h1>
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2" for="name">
          Name
        </label>
        <input
          class="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          v-model="name"
          placeholder="Enter your name"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2" for="email">
          Email
        </label>
        <input
          class="border border-gray-400 p-2 rounded-lg w-full"
          type="email"
          required
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
          required
          v-model="password"
          placeholder="Password must be at least 6 characters"
        />
      </div>
      <div class="text-center mt-6">
        <button
          class="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const name = ref("");
const email = ref("");
const password = ref("");
const age = ref("");
const router = useRouter();
const auth = getAuth();


const signUp = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      
      console.log(auth.currentUser);
      router.push("/feed");
    })
    .catch((error) => {
      console.log("error");
    });
};
</script>
