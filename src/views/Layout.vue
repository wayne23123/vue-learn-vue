<script setup>
import NavBar from "../components/NavBar.vue";
import NavBarFixed from "../components/NavBarFixed.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <NavBarFixed />
  <NavBar />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
