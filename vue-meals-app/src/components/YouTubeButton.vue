<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  href?: string;
}>();

</script>

<template>
  <a
    :href="props.href"
    target="_blank"
    class="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors"
  >
    <slot>YouTube</slot>
  </a>
</template>
