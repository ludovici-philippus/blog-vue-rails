<template>
  <nav v-else>
    <ul>
      <li>
        <NuxtLink to='/admin/add-category'>Criar nova categoria</NuxtLink>
      </li>
      <li>
        <NuxtLink to='/admin/add-post'>Criar nova postagem</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang='ts'>
import Vue from 'vue';
export default Vue.extend({
  name: 'AdminHeaderComponent'
})
</script>


