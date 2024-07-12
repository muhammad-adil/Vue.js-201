<script setup lang="ts">
    console.log("Search Meal By Letter")
    
    const letters:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
</script>

<template>
    <div class="flex p-8 flex-col items-center justify-center">
        <div class="flex justify-center mt-2 gap-4">
            <router-link :to="{name : 'byLetter', params : {letter}}" :key="letter" v-for="letter of letters.split('')">
                {{ letter }}
            </router-link>
        </div>
    </div>
</template>

<style scoped>
</style>
