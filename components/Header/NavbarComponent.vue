<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to='/'>Home</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang='ts'>
export default {
  name: 'NavbarComponent'
}
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
