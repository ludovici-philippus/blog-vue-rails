<template>
  <ul>
    <li :key="category['id']" v-for="category in categories">
      <NuxtLink :to='"/" + category.id'>{{ category.name }}</NuxtLink>
    </li>
  </ul>
</template>

<script lang='ts'>
import Vue from 'vue';
export default Vue.extend({
  name: 'CategoriesComponent',
  data() {
    return {
      categories: {}
    }
  },
  methods: {
    async get_categories() {
      const API_PATH: string = this.$store.getters.getApiPath;
      const CATEGORIES = await this.$axios.get(`${API_PATH}/categories`).then(response => response.data)
      this.categories = CATEGORIES
    },
  },
  mounted() {
    this.get_categories();
  }
})
</script>

<style scoped>
ul {
  list-style: none;
}

li {
  display: inline-block;
  margin-right: 4px;
}

a {
  color: orange;
  text-decoration: none;
}
</style>
