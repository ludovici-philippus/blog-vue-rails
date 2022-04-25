<template>
  <section>
    <div class='container'>
      <h2>Criar Categoria</h2>
      <form>
        <FormGroupComponent label='Categoria' placeholder='Escreva aqui...' name='category' />
        <button @click.prevent='create_category'>Criar Categoria</button>
      </form>
    </div>
  </section>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'CreateCategoryComponent',
  methods: {

    is_empty(params) {
      let is_empty = false;
      params.forEach(par => {
        if (par.length == 0)
          is_empty = true;
      })
      return is_empty
    },

    async create_category() {
      const CATEGORY = document.querySelector('#category').value;
      const API_PATH = this.$store.getters.getApiPath;

      if (this.is_empty([CATEGORY])) {
        alert('Campos vazios não são permitidos!');
        return;
      }

      try {
        const RESULT = await this.$axios.post(`${API_PATH}/categories`, {
          category: {
            name: CATEGORY
          }
        }).then(response => response);

        if (RESULT.status !== 201) {
          throw 1
          return
        }
        alert('Categoria criada com sucesso!');
      } catch (err) {
        if (err == 1)
          alert("Erro ao criar categoria!");
      }
    }

  }
})
</script>

<style scoped>
.container {
  flex-direction: column;
}

button {
  background-color: orange;
  color: white;
  border: 0;
  padding: 5px 20px;
  cursor: pointer;
}
</style>
