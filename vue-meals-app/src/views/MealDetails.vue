<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";

const meal = ref({});
const route = useRoute();

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => { 
        meal.value = data 
    })
})
</script>


<template>
  <div>
    <pre>{{ meal }}</pre>
  </div>
</template>

<style></style>
