<script setup lang="ts">
console.log("Search By Ingredients");
import { computed } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
//
import Meals from "../components/Meals.vue";

const route = useRoute();
const ingredient = computed(() => store.state.ingredient)
const meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient)
})

watch(route, () => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>

<template>
  <div class="p-8 pb-0 w-full">
    <h1 class="text-4xl font-bold mb-8 text-orange-500">
      Meals for <span class="text-4xl font-bold mb-8 text-[#16D9F9]">{{ ingredient.strIngredient }}</span>
    </h1>
  </div>
  
  <Meals :meals="meals" />

</template>

<style scoped></style>
