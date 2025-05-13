<template>
  <v-app-bar color="primary">
    <v-toolbar-title>
      <router-link to="/" class="home-link">
        Home
      </router-link>
    </v-toolbar-title>

    <template v-if="$vuetify.display.mobile || $vuetify.display.mdAndUp">
      <router-link to="/profile">
        <v-btn icon="mdi-account" variant="text" size="large"></v-btn>
      </router-link>

      <p>Olá, {{ username }}</p>
      
      <v-btn icon="mdi-logout" variant="text" size="large" @click="handleLogout()"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
  import { ref } from 'vue'
  import { useAuth } from '@/stores/auth.js';

  const auth = useAuth();
  const username = ref(auth.userName);

  function handleLogout() {
    auth.clearAll();
    location.reload();
  }
</script>

<style scoped lang="sass">
  .home-link
    color: #ffffff;
    text-decoration: none;
</style>