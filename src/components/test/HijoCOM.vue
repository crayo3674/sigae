<script setup lang="ts">
  import { onMounted } from 'vue';
  const { numbers } = defineProps<{
    numbers: number[]
  }>();

  onMounted(() => {
    console.log(numbers.filter(elem => elem > 1));
  });

</script>

<template>
  <p>{{ numbers }}</p>
</template>