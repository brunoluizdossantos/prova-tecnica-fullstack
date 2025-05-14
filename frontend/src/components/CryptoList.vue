<template>
    <div class="card-container">
        <v-sheet class="mx-auto mb-10" style="width: 100%">
            <v-form @submit.prevent="submit">
                <v-text-field
                    v-model="state.search"
                    color="primary"
                    label="Pesquise o nome da criptomoeda"
                    variant="underlined"
                ></v-text-field>
                <v-btn class="mt-2" type="submit" block>Filtrar</v-btn>
            </v-form>
        </v-sheet>

        <Crypto v-for="crypto in state.cryptos" :key="crypto.id" :crypto="crypto" />
    </div>
</template>

<script setup>
    import { useForm } from 'vee-validate';
    import { onMounted, reactive } from 'vue';
    import http from '@/services/http.js';
    import { useAuth } from '@/stores/auth.js';

    const auth = useAuth();

    const state = reactive({
        cryptos: [],
        cryptosFiltered: [],
        search: '',
    })

    onMounted(async () => {
        state.searchCryptoName = "";

        try {
            const response = await http.get(`crypto/50/1`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.token}`,
                },
            });
            state.cryptos = response.data;
            state.cryptosFiltered = response.data;
        } catch (error) {
            console.error('Erro ao buscar as criptomoedas: ', error);
        }
    });

    const { handleSubmit } = useForm({})

    const submit = handleSubmit(values => {
        if (state.search.length === 0) {
            state.cryptos = state.cryptosFiltered;
        } else {
            state.cryptos = filterCryptos(state.cryptos, state.search);
        }
    })

    function filterCryptos(cryptos, search) {
        return cryptos.filter(crypto => crypto.name.startsWith(search));
    }
</script>

<style scoped lang="sass">
    .card-container
        display: flex
        flex-direction: column
        gap: 30px
</style>