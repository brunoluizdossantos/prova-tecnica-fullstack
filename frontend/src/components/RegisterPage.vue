<template>
  <v-container class="fill-height fluid">
    <AppLogo />
    
    <v-row justify="center">
      <v-card
        class="mx-auto"
        max-width="400"
        width="800"
        title="Cadastro"
        subtitle="Cadastre-se para continuar"
      >
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
              Finalizar Cadastro
              <v-icon icon="mdi-chevron-right" end></v-icon>
            </v-btn>
          </v-card-actions>

          <v-container>
            <p class="redirect text-center font-size-14">Já possui uma conta? <router-link to="/">Entrar</router-link></p>
          </v-container>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup>
  import { useField, useForm } from 'vee-validate'
  import http from '@/services/http.js';

  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      name (value) {
        if (value?.length >= 3) return true

        return 'Nome deve ter pelo menos 3 caracteres.'
      },
      email (value) {
        if (/^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]+$/i.test(value)) return true

        return 'Informe um e-mail válido.'
      },
      password (value) {
        if (value?.length >= 3) return true

        return 'Senha deve ter pelo menos 3 caracteres.'
      },
    },
  })

  const name = useField('name')
  const email = useField('email')
  const password = useField('password')

  const submit = handleSubmit(async values => {    
    try {
      const register = await http.post('user', JSON.stringify(values));

      if (register.status === 201) {
        alert('Cadastro realizado com sucesso! Você pode fazer login agora.');
      } else {
        alert('Erro ao cadastrar. Tente novamente.');
        return;
      }
    }
    catch (error) {
      console.error('Error:', error)
      alert('Erro ao fazer login. Verifique suas credenciais.')
    }
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