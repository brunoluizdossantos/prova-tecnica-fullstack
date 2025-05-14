<template>
    <div class="card-container">
        <Crypto v-for="crypto in state.cryptos" :key="crypto.id" :crypto="crypto" />
    </div>
</template>

<script setup>
    import { onMounted, reactive } from 'vue';
    import http from '@/services/http.js';
    import { useAuth } from '@/stores/auth.js';

    const auth = useAuth();

    const state = reactive({
        cryptos: [],
    })

    onMounted(async () => {
        try {
            const response = await http.get(`crypto/50/1`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.token}`,
                },
            });
            state.cryptos = response.data;
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    });
</script>

<style scoped lang="sass">
    .card-container
        display: flex
        flex-direction: column
        gap: 20px
</style>