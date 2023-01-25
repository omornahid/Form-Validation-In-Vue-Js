<template>
  <div class="flex justify-center items-center">
    <form
      @submit.prevent="addUser"
      class="bg-purple-300 mt-5 p-6 rounded-lg md:w-2/5 w-11/12"
    >
      <h1 class="text-lg mb-4 font-bold text-center">Create An Account</h1>
      <div>
        <FormKit
          type="text"
          label="User Name"
          label-class=" text-green-600"
          validation="required|length:4"
          v-model="name"
        />
      </div>

      <div>
        <FormKit
          name="email"
          type="email"
          label="Email"
          label-class=" text-green-600"
          :delay="1000"
          validation="required|length:7|email"
          validation-visibility="live"
          v-model="email"
        />
      </div>
      <div>
        <FormKit
          name="phone"
          mask="###-###-#####"
          label="Phone number"
          label-class=" text-green-600"
          validation="required|length:11"
          v-model="phoneNum"
        />
      </div>
      <div>
        <FormKit
          label="Address"
          label-class=" text-green-600"
          type="textarea"
          rows="3"
          placeholder="Enter Address"
          v-model="address"
        />
      </div>
      <div>
        <FormKit
          type="select"
          label="Why would you use our sevice for?"
          label-class=" text-green-600"
          :options="carBrands"
          :value="['Work']"
          v-model="selectOption"
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
const selectOption = ref("");
const router = useRouter();

const carBrands = [
  { label: "Work", value: "Work" },
  { label: "Education", value: "Education" },
  { label: "Hobby", value: "Hobby" },
  { label: "Freelance", value: "Freelance" },
  { label: "Business", value: "Business" },
];
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
