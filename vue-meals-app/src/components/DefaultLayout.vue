<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="flex-col h-screen">
    <Navbar />
    <!--  h-screen  min-h-[50vh] grow -->
    <main class="max-w-[1200px] mx-auto ">
      <router-view />
    </main>

    <Footer />
  </div>
</template>
