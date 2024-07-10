<script setup lang="ts">
import axiosClient from '../axiosClient';
import { onMounted, ref } from 'vue';

    console.log("Home view")
    const letters:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const ingredients = ref([])

    onMounted(async () => {
        const response = await axiosClient.get('/list.php?i=list')
        console.log("response" , response.data);
        // 
        ingredients.value = response.data
        console.log("Home view Ingredients", ingredients.value)
    })
</script>

<template>
    <div class="flex p-8 flex-col items-center justify-center">
        <div class="flex p-8 justify-center"> 
            <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals" /> 
        </div>        
        <div class="flex justify-center mt-2 gap-4">
            <router-link :to="{name : 'byLetter', params : {letter}}" :key="letter" v-for="letter of letters.split('')">
                {{ letter }}
            </router-link>
        </div>
    </div>
</template>

<style scoped></style>
