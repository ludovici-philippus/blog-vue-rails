<template>
  <article>
    <HeaderBaseComponent />
    <div class='container'>
      <h1>{{ title }}</h1>
      <img :src='image' :alt='content.substr(0, 100)' :title='title' />
      <hr>
      <p>{{ content }}</p>
    </div>
  </article>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'SinglePost',
  data() {
    return {
      title: '',
      image: '',
      content: ''
    }
  },
  methods: {
    async get_posts() {
      const ID_POST = this.$route.params.idPost;
      const ID_CATEGORY = this.$route.params.idCategory;
      const API_PATH = this.$store.getters.getApiPath;

      const POST = await this.$axios.get(`${API_PATH}/posts/${ID_POST}`).then(response => response.data);
      this.title = POST.title;
      this.content = POST.content;
      this.image = POST.image;
    }
  },
  mounted() {
    this.get_posts();
  }
})
</script>

<style scoped>
img {
  margin: 10px 0;
  width: 100%;
}
</style>
