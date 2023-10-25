<template>
  <div class="home">
    <button @click="toAbout">About</button>
    <input v-model="username" type="text" @change="changeUsername" />
    {{ username }}
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Home',
  };
</script>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/store/user';
  const router = useRouter();
  const { getUsername, setUsername } = useUserStore();
  const username = ref(getUsername);

  function toAbout() {
    router.push({ name: 'About' });
  }
  function changeUsername(e: Event) {
    setUsername((e.target as HTMLInputElement).value);
  }
</script>

<style scoped>
  .home {
    color: red;
  }
</style>
