<template>
  <div>
    <h1>Admin</h1>
    <AdminLoginComponent v-if='!this.$store.getters.isLogged' />
    <AdminHeaderComponent v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AdminPage',
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 900px;
  padding: 0 2%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
