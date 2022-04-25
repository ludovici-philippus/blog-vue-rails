<template>
  <div>
    <AdminLoginComponent v-if='!this.$store.getters.isLogged' />
    <AdminHeaderComponent v-if='this.$store.getters.isLogged' />
    <AdminCreateCategoryComponent v-if='this.$store.getters.isLogged' />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'AdminCreateCategoryPage'
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  background-color: rgb(235, 235, 235);
  height: 100%;
}

.container {
  max-width: 900px;
  padding: 0 2%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
