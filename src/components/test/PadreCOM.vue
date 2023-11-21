<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import HijoCOM from '@/components/test/HijoCOM.vue';

  const numbers = ref([1, 2, 3, 4, 5]);

  onMounted(() => {
    // console.log(numbers.value)
  });

</script>

<template>
  <p>{{ numbers }}</p>
  <HijoCOM :numbers="numbers"/>
</template>