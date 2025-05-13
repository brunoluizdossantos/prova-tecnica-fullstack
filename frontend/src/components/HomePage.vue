<template>
  <v-card>
    <v-layout>
      <AppBar />

      <v-main fluid style="height: 100vh;">
        <v-card-text>
          <h1 class="mb-10">Home</h1>

          <div class="card-container">
            <div class="card">
              <div class="card-logo">
                <v-img
                  width="30"
                  src="@/assets/logo.png"
                />
              </div>
              <div class="card-text">
                <div class="card-item-text">
                  <h2>Bitcoin</h2>
                  <p>BTC</p>
                </div>
                <div class="card-item-money">
                  <h2>R$ 100,00</h2>
                  <p class="text-red">- 100,00</p>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-logo">
                <v-img
                  width="30"
                  src="@/assets/logo.png"
                />
              </div>
              <div class="card-text">
                <div class="card-item-text">
                  <h2>Bitcoin</h2>
                  <p>BTC</p>
                </div>
                <div class="card-item-money">
                  <h2>R$ 100,00</h2>
                  <p class="text-red">- 100,00</p>
                </div>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
  import { useAuth } from '@/stores/auth.js';

  const auth = useAuth();
</script>

<style scoped lang="sass">
  h1
    font-size: 24px

  .v-card-text
    margin: 0 auto
    max-width: 500px

    .card-container
      display: flex
      flex-direction: column
      gap: 20px

      .card
        width: 100%
        background-color: #373636
        border-radius: 8px
        padding: 16px
        margin-bottom: 16px

        p 
          color: gray
          font-size: 14px

        img
          position: absolute
          margin-top: 16px

        .card-logo
          margin-top: -31px
          text-align: left

        .card-text
          display: flex
          justify-content: space-between
          align-items: center
          margin-top: 8px

          .card-item-text

            h2
              color: #c5c5c5

          .card-item-money
            display: flex
            flex-direction: column
            align-items: flex-end

            h2
              font-size: 24px
              color: #c5c5c5

            p
              font-size: 14px
              color: red
</style>