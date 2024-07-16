<script setup lang="ts">
import { ref } from "vue";
import SearchInput from "./components/SearchInput.vue";
import WeatherCard from "./components/WeatherCard.vue";

const places = ref([]);

const addPlace = (data) => {
  places.value.push(data);
};

const deletePlace = (name) => {
  if (confirm("Are you sure")) {
    places.value = places.value.filter((p) => p.location.name !== name);
  }
};
</script>

<template>
  <main class="max-w-[1200px] mx-auto">
    <!-- <h1 class="text-4xl font-bold">Home</h1> -->
    <!-- Date -->
    <div class="text-center mb-6">
      {{
        new Date().toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      }}
    </div>

    <!-- Search -->
    <div>
      <SearchInput @place-data="addPlace" />
    </div>

    <!-- Weather cards -->
    <div class="grid grid-cols-2 gap-4">
      <div v-for="(place, idx) in places" :key="idx">
        <WeatherCard :place="place" @delete-place="deletePlace" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
