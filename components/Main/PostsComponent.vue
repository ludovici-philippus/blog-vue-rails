<template>
  <section>
    <div class='container'>
      <MainPostSingleComponent :key='post.id' v-for='post in posts' :title='post.title' :slug='post.id'
        :category_id='post.category_id' :image='post.image' :description='description_generator(post.content)' />
    </div>
  </section>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'MainPostsComponent',
  data() {
    return {
      posts: {}
    }
  },
  methods: {
    async get_posts() {
      const API_PATH = this.$store.getters.getApiPath;
      const POSTS = await this.$axios.get(`${API_PATH}/posts`);

      this.posts = POSTS.data;
      console.log(this.posts);
    },
    description_generator(content: string) {
      return content.substr(0, 100)
    }
  },
  mounted() {
    this.get_posts();
  }
})
</script>

<style scoped>
</style>
