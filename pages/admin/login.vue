<template>
  <form>
    <h2>Hey</h2>
    <FormGroupComponent label='Nome de Usuário: ' placeholder='Escreva aqui...' name='username' />
  </form>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'AdminLogin'
})
</script>

<style scoped>
</style>
