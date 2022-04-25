<template>
  <header>
    <h1>
      <NuxtLink to='/'>Blog</NuxtLink>
    </h1>
    <HeaderNavbarComponent />
    <HeaderCategoriesComponent />
  </header>
</template>

<script lang='ts'>
export default {
  name: 'BaseComponent'
}
</script>

<style scoped>
header {
  background-color: steelblue;
  text-align: center;
  padding: 20px 0;
}

a {
  color: white;
  margin: 10px 0;
  text-decoration: none;
}
</style>
