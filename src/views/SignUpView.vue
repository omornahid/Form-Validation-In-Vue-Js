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
          @keyup="validateUsername"
          placeholder="e.g. Abcd"
        />
        <p class="mt-1 text-red-600 text-sm">{{ usernameError }}</p>
      </div>

      <div class="mb-4">
        <label class="block text-black font-medium mb-2" for="email">
          Email
        </label>
        <input
          class="border border-gray-400 p-2 rounded-lg w-full"
          type="email"
          @keyup="validateEmail"
          v-model="email"
          placeholder="e.g. abc@gmail.com"
        />
        <p class="mt-1 text-red-600 text-sm">{{ emailError }}</p>
      </div>

      <div class="mb-4">
        <label class="block text-black font-medium mb-2"> Phone Number </label>
        <input
          class="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          @keyup="validatePhone"
          v-model="phoneNum"
          placeholder="e.g. 01711111111"
        />
        <p class="mt-1 text-red-600 text-sm">{{ phoneError }}</p>
      </div>

      <div class="mb-4">
        <label class="block text-black font-medium mb-2"> Address </label>
        <input
          class="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          required
          v-model="address"
          placeholder="e.g. 1/2, Dhanmondi, Dhaka"
        />
      </div>

      <div class="mb-4">
        <label class="block text-black mb-2 font-bold">
          Select your favourite cars
        </label>
        <input
          class="border border-gray-400 p-2 rounded-lg w-full cursor-pointer"
          type="text"
          required
          @click="show = !show"
          v-model="selected"
        />
        <ul v-if="show">
          <li
            class="cursor-pointer p-2.5"
            v-for="option in options"
            :key="option"
            :style="{
              backgroundColor: selectedOptions.includes(option.label)
                ? '#7bed9f'
                : '#dfe4ea',
            }"
            @click="toggleSelection(option.label)"
          >
            {{ option.label }}
          </li>
        </ul>
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
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const name = ref("");
const email = ref("");
const phoneNum = ref("");
const address = ref("");

const emailError = ref("");
const phoneError = ref("");
const usernameError = ref("");

const router = useRouter();

const validateUsername = () => {
  if (name === "") {
    usernameError.value = "Username is required";
  } else if (name.value.length < 4) {
    usernameError.value = "Username must be at least 4 characters";
  } else {
    usernameError.value = "";
  }
};

const validateEmail = () => {
  if (email === "") {
    emailError.value = "Email is required";
  } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    emailError.value = "Invalid email format";
  } else {
    emailError.value = "";
  }
};

const validatePhone = () => {
  if (phoneNum === "") {
    phoneError.value = "Phone number is required";
  } else if (!/^\d{11}$/.test(phoneNum.value)) {
    phoneError.value =
      "Invalid phone number format, it should be of 11 digits.";
  } else {
    phoneError.value = "";
  }
};

const addUser = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name.value,
      email: email.value,
      phone: phoneNum.value,
      address: address.value,
      selectOption: selectedOptions.value,
    });
    router.push("/feed");
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const show = ref(false);
const options = ref([
  { label: "Audi", value: "audi" },
  { label: "Ford ", value: "ford " },
  { label: "Mercedes ", value: "mercedes " },
  { label: "Cadillac", value: "cadillac" },
]);
const selectedOptions = ref([]);

const selected = computed(() => {
  if (selectedOptions.value.length === 0) {
    return "Select an option";
  }
  return selectedOptions.value.join(", ");
});

const toggleSelection = (option) => {
  const index = selectedOptions.value.indexOf(option);
  if (index === -1) {
    selectedOptions.value.push(option);
  } else {
    selectedOptions.value.splice(index, 1);
  }
};
</script>
