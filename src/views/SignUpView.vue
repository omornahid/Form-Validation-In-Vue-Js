<template>
  <div class="flex justify-center items-center">
    <form
      @submit.prevent="addUser"
      class="bg-purple-300 mt-5 p-6 rounded-lg md:w-2/5 w-11/12"
    >
      <h1 class="text-lg mb-4 font-bold text-center">Create An Account</h1>
      <div class="mb-4">
        <label class="block text-black font-medium mb-2" for="name">
          Name
        </label>
        <input
          class="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          v-model="name"
          required
          placeholder="Enter name"
        />
      </div>

      <div class="mb-4">
        <label class="block text-black font-medium mb-2" for="email">
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
        <label class="block text-black font-medium mb-2" for="password">
          Phone Number
        </label>
        <input
          class="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          required
          v-model="phoneNum"
          placeholder="Phone Num"
        />
      </div>

      <div class="mb-4">
        <label class="block text-black font-medium mb-2" for="password">
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

      <div class="mb-4">
        <label class="block text-black font-medium mb-2" for="password">
          Why would you use our sevice for?
        </label>
        <select
          class="border border-gray-400 p-2 rounded-lg w-full"
          v-model="selectOption"
          required
        >
          <option value="">Please choose an option</option>
          <option v-for="option in joinOptions" :key="option.id">
            {{ option.value }}
          </option>
        </select>
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
const selectOption = ref("");
const router = useRouter();

const joinOptions = ref([
  { id: 1, value: "Work" },
  { id: 2, value: "Education" },
  { id: 3, value: "Hobby" },
  { id: 4, value: "Freelance" },
  { id: 5, value: "Business" },
]);

const addUser = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name.value,
      email: email.value,
      phone: phoneNum.value,
      address: address.value,
      selectOption: selectOption.value,
    });
    router.push("/feed");
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
</script>
