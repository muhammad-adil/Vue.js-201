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
  <div class="w-full flex flex-col p-8 items-center justify-center">
    <div class="flex grow flex-wrap justify-center mt-4 gap-6 mb-6">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        :key="letter"
        v-for="letter of letters.split('')"
         class="flex items-center justify-center text-[#16D9F9] text-3xl font-bold hover:text-orange-500 hover:scale-150 transition-all"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>

  <Meals :meals="meals" />
  
</template>

<style scoped></style>
