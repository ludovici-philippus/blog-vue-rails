<template>
  <header>
    <h1>Blog</h1>
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
</style>
