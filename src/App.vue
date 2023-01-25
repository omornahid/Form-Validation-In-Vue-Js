<template>
  <header class="bg-violet-200">
    <nav class="flex justify-center items-center p-4">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/sign-up">Sign Up</RouterLink>
      <RouterLink to="/feed">Users</RouterLink>
    </nav>
  </header>
  <div class="view">
    <RouterView />
  </div>
</template>

<style scoped>
nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a.router-link-exact-active {
  color: #273c75;
  font-weight: bolder;
}
</style>
