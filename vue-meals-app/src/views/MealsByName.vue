<script setup lang="ts">
import { ref, onMounted } from "vue";
import store from "../store";
import { computed } from "vue";
import { useRoute } from "vue-router";
// import MealItem from "../components/MealItem.vue";
import Meals from '../components/Meals.vue'

console.log("Search Meal By Name");

let keyword = ref<string>("");

const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

const route = useRoute();
onMounted(() => {
  keyword.value = route.params.name as string;
  if (keyword.value) {
    searchMeals();
  } else {
    route.params.name = keyword.value;
  }
});
</script>

<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Search Meals by Name
    </h1>
  </div>
  <div class="px-8 pb-3">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>

  <Meals :meals="meals" />
  <!-- <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"  /> -->

</template>

<style scoped></style>
