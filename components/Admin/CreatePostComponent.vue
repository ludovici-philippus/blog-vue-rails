<template>
  <section>
    <div class='container'>
      <h2>Criar Postagem</h2>
      <form>
        <FormGroupComponent label='Nome' placeholder='Escreva aqui...' name='post_name' />
        <FormGroupComponent label='Imagem' placeholder='Coloque a URL...' name='post_image' />
        <FormGroupComponent label='Tags' placeholder='Escreva aqui...' name='post_tags' />
        <FormGroupComponent label='Conteúdo' placeholder='Escreva aqui...' name='post_content' is_textarea />
        <label for='post_category'>Categoria</label>
        <select id='post_category' name='post_category'>
          <option :key='category.id' v-for='category in categories' :value='category.id'>{{ category.name }}</option>
        </select>
        <button @click.prevent='create_post'>Criar Postagem</button>
      </form>
    </div>
  </section>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'CreatePostComponent',
  data() {
    return {
      categories: {}
    }
  },
  methods: {
    is_empty(params) {
      let is_empty = false;
      params.forEach(par => {
        if (par.length == 0)
          is_empty = true;
      })
      return is_empty
    },

    async create_post() {
      const NAME = document.querySelector('#post_name').value;
      const IMAGE = document.querySelector('#post_image').value;
      const TAGS = document.querySelector('#post_tags').value;
      const CONTENT = document.querySelector('#post_content').value;
      const CATEGORY = document.querySelector('#post_category').value;

      try {
        if (this.is_empty([NAME, IMAGE, TAGS, CONTENT, CATEGORY])) {
          throw 2;
          return;
        }

        const API_PATH = this.$store.getters.getApiPath;
        const RESULT = this.$axios.post(`${API_PATH}/posts`, {
          post: {
            title: NAME,
            content: CONTENT,
            image: IMAGE,
            tags: TAGS,
            category_id: CATEGORY,
            author_id: this.$store.getters.getUserId
          }
        })

        if (RESULT.status !== 201)
          throw 1;
      } catch (err) {

        if (err === 1) {
          alert('Erro ao criar postagem!');
          return;
        }

        if (err === 2) {
          alert('Campos vazios não são permitidos!');
          return;
        }
      }
    },

    async get_categories() {
      const API_PATH = this.$store.getters.getApiPath;
      const CATEGORIES = await this.$axios.get(`${API_PATH}/categories`)
        .then(response => response.data);
      this.categories = CATEGORIES;
    }

  },
  mounted() {
    this.get_categories();
  }
})
</script>

<style scoped>
.container {
  flex-direction: column;
}

select {
  width: 100%;
  display: block;
  height: 44px;
  margin-bottom: 10px;
}

button {
  display: inline-block;
  background-color: orange;
  color: white;
  border: 0;
  padding: 5px 20px;
  cursor: pointer;
}
</style>
