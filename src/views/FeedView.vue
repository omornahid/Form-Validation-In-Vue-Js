<template>
  <h1 className="text-3xl font-bold mt-16 text-violet-700">Logged In</h1>
  <h2 v-if="userEmail" class="m-4 text-2xl ">Welcome, {{ userEmail }}</h2>
</template>

<script setup>
import { computed } from "vue";
import { getAuth } from "firebase/auth";

const auth = getAuth();

const userEmail = computed(() => {
  const user = auth.currentUser;
  if (user) {
    return user.email;
  }
  return null;
});

</script>
