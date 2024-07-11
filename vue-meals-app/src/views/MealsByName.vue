<script setup lang="ts">
import { ref, onMounted } from "vue";
import store from "../store";
import { computed } from "vue";
import { useRoute } from "vue-router";

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
  }
  else {
    route.params.name =  keyword.value
  }
});
</script>

<template>
  <div class="flex p-8 flex-col items-center justify-center">
    <div class="flex p-8 justify-center">
      <input
        v-model="keyword"
        type="text"
        class="rounded border-2 border-gray-200 w-full"
        placeholder="Search for Meals"
        @change="searchMeals"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <div
        v-for="meal of meals"
        :key="meal.idMeal"
        class="bg-white shadow rounded-xl"
      >
        <router-link :to="{name : 'mealDetails', params: {id: meal.idMeal}}">
          <img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="rounded-t-xl w-full h-48 object-cover"
          />
        </router-link>

        <div class="px-3 py-4">
          <h3 class="font-semibold">{{ meal.strMeal }}</h3>
          <!-- <p>{{ meal.strInstructions }}</p> -->
          <p class="mb-4">{{ `${meal.strInstructions.slice(0, 82)} …` }}</p>
          <div class="mb-2">
            <a
              :href="meal.strYoutube"
              target="_blank"
              class="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors"
              >YouTube</a
            >
            <!-- <router-link to="/"> View </router-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
