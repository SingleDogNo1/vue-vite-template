<template>
  <div class="about">
    <button @click="toHome">About</button>
    {{ msg }}
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Index',
  };
</script>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const msg = ref('hello, about');
  const router = useRouter();
  function toHome() {
    router.push({ name: 'Home' });
  }
</script>

<style scoped>
  .about {
    color: red;
  }
</style>
