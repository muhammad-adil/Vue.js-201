<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
// 
import Meals from "../components/Meals.vue";

const route = useRoute();

console.log("Search Meal By Letter");
const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>

<template>
  <div class="w-full flex p-8 flex-col items-center justify-center">
    <div class="flex flex-wrap justify-center mt-4 gap-6 text-[#16D9F9] text-3xl font-bold mb-8">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        :key="letter"
        v-for="letter of letters.split('')"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>

  <Meals :meals="meals" />
  
</template>

<style scoped></style>
