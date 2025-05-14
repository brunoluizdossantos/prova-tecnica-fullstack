<template>
  <v-card>
    <v-layout>
      <AppBar />

      <v-main fluid class="main-layout mx-auto">
        <v-card-text>
          <div class="text-center">
            <v-img
              class="bg-surface-variant rounded-circle mx-auto"
              width="120"
              :src="form.image ?? 'http://localhost:3000/uploads/default.jpg'"
            />
          </div>

          <v-form @submit.prevent="submit">
            <v-container>
              <v-text-field
                v-model="form.name"
                color="primary"
                label="Nome"
                variant="underlined"
              ></v-text-field>

              <v-text-field
                v-model="form.email"
                color="primary"
                label="E-mail"
                variant="underlined"
                type="email"
              ></v-text-field>

              <v-text-field
                v-model="form.description"
                color="primary"
                label="Descrição"
                variant="underlined"
              ></v-text-field>

              <v-file-input
                v-model="form.image"
                color="primary"
                label="Atualizar foto do perfil"
                variant="underlined"
                type="file"
                accept="image/*"
              ></v-file-input>
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
  import { useForm } from 'vee-validate'
  import http from '@/services/http.js';
  import { useAuth } from '@/stores/auth.js';

  const auth = useAuth();

  const originalImage = ref(auth.userImage);

  const form = reactive({
    id: '',
    name: '',
    email: '',
    description: '',
    image: '',
    showResult: false,
    resultError: false,
    resultMessage: '',
  })

  const { handleSubmit } = useForm({})

  onMounted(() => {
    form.id = ref(auth.userId),
    form.name = ref(auth.userName),
    form.email = ref(auth.userEmail),
    form.description = ref(auth.userDescription),
    form.image = ref(auth.userImage),
    originalImage.value = form.image
  })

  const submit = handleSubmit(async values => {
    const updateUser = {
      id: form.id,
      name: form.name,
      email: form.email,
      description: form.description
    }

    try {
      const response = await http.patch(`user/${form.id}`, updateUser,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.token}`,
        },
      });
      
      if (response.status === 200) {
        auth.setUser({
          id: form.id,
          name: form.name,
          email: form.email,
          description: form.description,
          image: originalImage
        });

        if (form.image === originalImage.value) {
          alert('Perfil atualizado com sucesso.');
          return;
        } else {
          const uploadResponse = await http.post(`user/upload/${form.id}`, { file: form.image },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${auth.token}`,
            },
          });

          if (uploadResponse.status === 201) {
            auth.setUser({
              id: form.id,
              name: form.name,
              email: form.email,
              description: form.description,
              image: uploadResponse.data.url
            });

            form.image = uploadResponse.data.url;

            alert('Perfil atualizado com sucesso.');
          } else {
            alert('Erro ao atualizar a imagem do perfil. Tente novamente.');
          }
        }
      } else {
        alert('Erro ao atualizar o perfil. Tente novamente.');
      }
    }
    catch (error) {
      alert('Erro ao atualizar o perfil. Tente novamente.');
    }
  })
</script>

<style scoped lang="sass">
  .main-layout
    min-height: 100vh
    max-width: 500px

  .color-link
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
</style>