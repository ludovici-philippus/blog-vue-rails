<template>
  <div class='main__post-single'>
    <NuxtLink :to='category_id + "/" + slug'>
      <h4>{{ title }}</h4>
      <img :src="image" :title="title" :alt="description" />
      <p>{{ description }}</p>
    </NuxtLink>
    <NuxtLink class='btn' :to='category_id + "/" + slug'>Ler</NuxtLink>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'MainPostSingleComponent',
  props: {
    title: String,
    slug: Number,
    image: String,
    description: String,
    category_id: Number
  }
})
</script>

<style scoped>
.main__post-single {
  max-width: 30%;
  width: 100%;
  text-align: center;
  margin: 4px;
}

a {
  text-decoration: none;
  color: black;
}

img {
  width: 100%;
}

.btn {
  display: block;
  background-color: orange;
  color: white;
  padding: 8px 0;
}
</style>
