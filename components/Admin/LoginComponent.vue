<template>
  <form>
    <h2>Entre na sua conta</h2>
    <FormGroupComponent label='Nome de Usuário: ' placeholder='Escreva aqui...' name='username' />
    <FormGroupComponent label='Senha: ' placeholder='Escreva aqui...' name='password' type='password' />
    <button @click.prevent="login">Logar</button>
  </form>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'AdminLogin',
  methods: {
    is_empty(params) {
      let is_empty = false;
      params.forEach(par => {
        if (par.length == 0)
          is_empty = true;
      })
      return is_empty
    },
    async login() {
      const USERNAME = document.querySelector('#username').value;
      const PASSWORD = document.querySelector('#password').value;
      const API_PATH = this.$store.getters.getApiPath;

      if (this.is_empty([USERNAME, PASSWORD]))
        return;

      try {
        const RESULT = await this.$axios.post(`${API_PATH}/auth/login`, {
          name: USERNAME,
          password: PASSWORD
        }).then(response => response);

        if (RESULT.status !== 200)
          return;

        const TOKEN = RESULT.data.token;
        const USER_ID = RESULT.data.id;
        this.$store.commit('setToken', TOKEN);
        this.$store.commit('setLogin', true);
        this.$store.commit('setUserId', USER_ID);
      } catch (err) {
        alert("Falha ao logar!")
      }

    }
  }
})
</script>

<style scoped>
form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  width: 100%;
}

button {
  background-color: orange;
  color: white;
  border: 0;
  padding: 5px 20px;
  cursor: pointer;
}
</style>
