<script setup lang="ts">
// @ts-nocheck
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import { Meal } from "../types";

import YouTubeButton from "../components/YouTubeButton.vue";

const meal = ref<Meal | null>(null);
const route = useRoute();

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    // @ts-ignore: Object is possibly 'null'.
    meal.value = data.meals[0] || null;
  });
});
</script>

<template>
  <div class="max-w-[800px] mx-auto p-8" v-if="meal">
    <h1 class="text-4xl font-bold mb-5 text-orange-500">{{ meal?.strMeal }}</h1>
    <img :src="meal?.strMealThumb" :alt="meal?.strMeal" class="max-w-[100%]" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal?.strCategory }}
      </div>
      <div><strong class="font-bold">Area:</strong> {{ meal?.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong> {{ meal?.strTags }}</div>
    </div>

    <div class="my-3">
      {{ meal?.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(el, ind) in 20" :key="ind">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-4">
        <YouTubeButton :href="meal.strYoutube" />
        <a
          :href="meal.strSource"
          target="_blank"
          class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors"
        >
          View Original Source
        </a>
      </div>
    </div>
  </div>
  <!-- loading -->
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<style scoped></style>
