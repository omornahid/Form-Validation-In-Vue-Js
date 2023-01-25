<template>
  <h1 className="text-3xl text-center font-bold mt-8 mb-7 text-violet-700">
    Existing Users
  </h1>
  <div class="w-full flex justify-center items-center">
    <table class="table-auto w-4/5 text-left">
      <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Email</th>
          <th class="px-4 py-2">Phone Num</th>
          <th class="px-4 py-2">Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="x in userDataStorage" :key="x.id" class="hover:bg-gray-100">
          <td class="border px-4 py-2">{{ x.name }}</td>
          <td class="border px-4 py-2">{{ x.email }}</td>
          <td class="border px-4 py-2">{{ x.phone }}</td>
          <td class="border px-4 py-2">{{ x.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

const userDataStorage = ref([]);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  const userData = [];
  querySnapshot.forEach((doc) => {
    const data = {
      id: doc.id,
      name: doc.data().name,
      email: doc.data().email,
      phone: doc.data().phone,
      address: doc.data().address,
    };
    userData.push(data);
  });
  userDataStorage.value = userData;
});
</script>
