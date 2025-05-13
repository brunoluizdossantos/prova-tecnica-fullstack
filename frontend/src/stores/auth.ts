import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuth = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token'));
  const user = ref(JSON.parse(localStorage.getItem('user') || '{}'));

  function setToken(newToken: string) {
    token.value = newToken;
    localStorage.setItem('token', newToken);
  }

  function setUser(newUser: any) {
    user.value = newUser;
    localStorage.setItem('user', JSON.stringify(newUser));
  }

  function isAuthenticated() {
    return !!token.value && !!user.value;
  }

  const userId = computed(() => {
    if (user.value) {
      return user.value.id;
    }
    return null;
  })

  const userName = computed(() => {
    if (user.value) {
      return `${user.value.name}`;
    }
    return '';
  })

  const userEmail = computed(() => {
    if (user.value) {
      return user.value.email;
    }
    return '';
  })
  
  function clearUser() {
    user.value = null;
    localStorage.removeItem('user');
  }
  
  function clearToken() {
    token.value = null;
    localStorage.removeItem('token');
  }
  
  function clearAll() {
    token.value = null;
    user.value = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  return {
    token,
    user,
    setToken,
    setUser,
    clearUser,
    clearToken,
    clearAll,
    isAuthenticated,
    userId,
    userName,
    userEmail
  }
})
