<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import store from "../store";
import Meals from "../components/Meals.vue";
import axiosClient from "../axiosClient.js";
import Carousel from '../components/Carousel.vue'

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});

</script>

<template>
  <div class="flex p-8 flex-col items-center justify-center">
    <div class="flex p-8 justify-center">
      <h1 class="text-7xl font-bold mb-4 heading-main">Recipe Meals App</h1>
    </div>

    <Meals :meals="meals" />

    <!-- <Carousel /> -->
    
  </div>
</template>

<style scoped></style>
