<template>
    <div class="card">
        <div class="card-logo">
            <v-img :src="crypto.image" :alt="crypto.name" width="30" />
        </div>
        <div class="card-text">
            <div class="card-item-text">
                <h2>{{ crypto.name }}</h2>
                <p>{{ crypto.symbol }}</p>
            </div>
            <div class="card-item-money">
                <h2>{{ USDollar.format(crypto.current_price) }}</h2>
                <p v-bind:class="crypto.ath_change_percentage >= 0 ? 'text-green' : 'text-red'">{{ crypto.ath_change_percentage }}%</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        crypto: Object
    });

    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
</script>

<style scoped lang="sass">
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

                p
                    text-transform: uppercase

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