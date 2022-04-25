<template>
  <form>
    <h2>Entre na sua conta</h2>
    <FormGroupComponent label='Nome de Usuário: ' placeholder='Escreva aqui...' name='username' />
    <FormGroupComponent label='Senha: ' placeholder='Escreva aqui...' name='password' />
    <button>Logar</button>
  </form>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'AdminLogin'
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
