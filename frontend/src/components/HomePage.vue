<template>
  <v-card>
    <v-layout>
      <AppBar />

      <v-main fluid>
        <v-card-text>
          <h1 class="mb-10">Home</h1>
          
          <CryptoList />
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
  //
</script>

<style scoped lang="sass">
  h1
    font-size: 24px

  .v-card-text
    margin: 0 auto
    max-width: 500px
</style>