<template>
  <v-card>
    <v-layout>
      <AppBar />

      <v-main fluid style="height: 100vh;">
        <v-card-text>
          <ImageLogo />

          <v-form @submit.prevent="submit">
            <v-container>
              <v-text-field
                v-model="name.value.value"
                :error-messages="name.errorMessage.value"
                color="primary"
                label="Nome"
                variant="underlined"
              ></v-text-field>

              <v-text-field
                v-model="email.value.value"
                :error-messages="email.errorMessage.value"
                color="primary"
                label="E-mail"
                variant="underlined"
                type="email"
              ></v-text-field>

              <v-text-field
                v-model="description.value.value"
                :error-messages="description.errorMessage.value"
                color="primary"
                label="Descrição"
                variant="underlined"
                type="description"
              ></v-text-field>
            </v-container>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="success"
                type="submit"
              >
                Atualizar perfil
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
  import { useField, useForm } from 'vee-validate'
  import { useAuth } from '@/stores/auth.js';

  const auth = useAuth();

  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      name (value) {
        if (value?.length >= 3) return true

        return 'Nome deve ter pelo menos 3 caracteres.'
      },
      email (value) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Informe um e-mail válido.'
      },
    },
  })

  const name = useField('name')
  const email = useField('email')
  const description = useField('description')

  const submit = handleSubmit(values => {
    console.log(JSON.stringify(values, null, 2));
    alert(JSON.stringify(values, null, 2))
  })
</script>

<style scoped lang="sass">
  .color-link
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
</style>