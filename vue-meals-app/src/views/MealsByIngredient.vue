<script setup lang="ts">
console.log("Search By Ingredients")
import { computed } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
// 
import Meals from "../components/Meals.vue";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

watch(route, () => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});

</script>

<template>
    <div class="flex p-8 flex-col items-center justify-center">
        <h2>Meals By Ingredients Meal List</h2>
    </div>
    <Meals :meals="meals" />
</template>

<style scoped>
</style>
