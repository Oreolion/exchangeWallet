<template>
  <section>
    <h1>THIS IS THE AUTHENTICATE PAGE</h1>
    <h2>{{ walletName }}</h2>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const walletName = JSON.parse(localStorage.getItem("authname"));

console.log(walletName);
</script>

<style scoped></style>
