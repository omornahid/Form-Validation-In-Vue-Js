<template>
  <div class="flex justify-center items-center">
    <form
      @submit.prevent="addUser"
      class="bg-purple-300 mt-5 p-6 rounded-lg w-2/5"
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
          placeholder="Enter name"
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
          placeholder="Enter email address"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2" for="password">
          Phone Number
        </label>
        <input
          class="border border-gray-400 p-2 rounded-lg w-full"
          type="number"
          required
          v-model="phoneNum"
          placeholder="Phone Num"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2" for="password">
          Address
        </label>
        <input
          class="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          required
          v-model="address"
          placeholder="Enter Address"
        />
      </div>

      <div class="text-center mt-6">
        <button
          class="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const name = ref("");
const email = ref("");
const phoneNum = ref("");
const address = ref("");
const router = useRouter();

const addUser = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name.value,
      email: email.value,
      phone: phoneNum.value,
      address: address.value,
    });
    router.push("/feed");
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
</script>
