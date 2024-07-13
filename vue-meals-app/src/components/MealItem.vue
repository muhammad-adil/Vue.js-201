<script setup lang="ts">
import { computed, defineProps } from 'vue';
import YouTubeButton from "./YouTubeButton.vue";

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})

// 
const truncatedInstructions = computed(() => {
  if (meal.value?.strInstructions) {
    const words = meal.value.strInstructions.split(' ');
    return words.slice(0, 20).join(' ') + ' ...';
  }
  return '';
});
</script>

<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4" v-if="meal?.strInstructions">
        <!-- {{ `${meal?.strInstructions.slice(0, 82)} …`  }} -->
        <!-- {{ $filters.truncateWords(meal.strInstructions, 20) }} -->
        {{ truncatedInstructions }}
      </p>
      <div class="flex items-center justify-between mt-4">
        <YouTubeButton :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>


function truncateDescriptionWords() {
  throw new Error('Function not implemented.');
}
<style lang=""></style>