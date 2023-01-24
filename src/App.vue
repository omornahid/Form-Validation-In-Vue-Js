<script setup>
import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const isLoggedIn = ref(false);

onMounted(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});
</script>

<template>
  <header class="bg-violet-200">
    <nav class="flex justify-center items-center w-full">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/sign-up">Sign Up</RouterLink>
      <RouterLink to="/sign-in">Log In</RouterLink>
    </nav>
  </header>
  <div class="view">
    <RouterView />
  </div>
</template>

<style scoped>
.view {
  text-align: center;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

nav a.router-link-exact-active {
  color: #273c75;
  font-weight: bolder;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>
