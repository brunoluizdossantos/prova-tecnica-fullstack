<template>
  <v-container class="fill-height fluid">
    <AppLogo />
    
    <v-row justify="center">
      <v-card
        class="mx-auto"
        max-width="400"
        width="800"
        title="Login"
        subtitle="Preencha os dados para fazer o login"
      >
        <v-form @submit.prevent="submit">
          <v-container>
            <v-text-field
              v-model="email.value.value"
              :error-messages="email.errorMessage.value"
              color="primary"
              label="E-mail"
              variant="underlined"
              type="email"
            ></v-text-field>

            <v-text-field
              v-model="password.value.value"
              :error-messages="password.errorMessage.value"
              color="primary"
              label="Senha"
              placeholder="Informe sua senha"
              variant="underlined"
              type="password"
            ></v-text-field>
          </v-container>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="success"
              type="submit"
            >
              Entrar
              <v-icon icon="mdi-chevron-right" end></v-icon>
            </v-btn>
          </v-card-actions>

          <v-container>
            <p class="redirect text-center font-size-14">Ainda não está cadastrado? <router-link to="/register">Cadastre-se aqui</router-link></p>
          </v-container>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup>
  import { useField, useForm } from 'vee-validate'

  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      email (value) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Informe um e-mail válido.'
      },
      password (value) {
        if (value?.length >= 3) return true

        return 'Senha deve ter pelo menos 3 caracteres.'
      },
    },
  })
  const email = useField('email')
  const password = useField('password')

  const submit = handleSubmit(values => {
    console.log(JSON.stringify(values, null, 2));
    alert(JSON.stringify(values, null, 2))
  })
</script>

<style scoped lang="sass">
  .redirect
    font-size: 14px;
    text-decoration: none;
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    
    a
      color: rgba(25, 118, 210, 1)
      text-decoration: none;

      &:hover
        text-decoration: underline;
</style>