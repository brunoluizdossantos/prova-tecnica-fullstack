<template>
    <v-dialog
        v-model="dialog"
        max-width="600"
    >
        <template v-slot:activator="{ props: activatorProps }">
            <div
                class="card"
                v-bind="activatorProps"
            >
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

        <v-card title="Detalhes da criptomoeda">
            <v-card-text>
                <v-img :src="crypto.image" :alt="crypto.name" width="30" />
                <p class="mt-2">Nome: {{ crypto.name }}</p>
                <p class="mt-2">Símbolo: <span class=" text-uppercase">{{ crypto.symbol }}</span></p>
                <p class="mt-2">Valor atual: {{ USDollar.format(crypto.current_price) }}</p>
                <p class="mt-2">Variação do ATH em percentagem: {{ crypto.ath_change_percentage }}%</p>
                <p class="mt-2">ATH: {{ crypto.ath }}</p>
                <p class="mt-2">Variação do ATL em percentagem: {{ crypto.atl_change_percentage }}%</p>
                <p class="mt-2">ATL: {{ crypto.atl }}</p>
                <p class="mt-2">Oferta total: {{ crypto.total_supply }}</p>
                <p class="mt-2">Volume total: {{ crypto.total_volume }}</p>
                <p class="mt-2">Classificação: {{ crypto.market_cap_rank }}</p>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    text="Fechar"
                    variant="plain"
                    @click="dialog = false"
                ></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
    import { defineProps } from 'vue';
    import { shallowRef } from 'vue'

    const dialog = shallowRef(false)

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
        text-align: left;

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
                    padding-right: 10px
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