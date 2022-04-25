<template>
  <div class='form-group'>
    <label :for='name'>{{ label }}</label>
    <input v-if='!is_textarea' :type='type' :id='name' :name='name' :placeholder='placeholder'>
    <textarea v-else :id='name' :name='name' :placeholder='placeholder'></textarea>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'FormGroupComponent',
  props: {
    label: String,
    placeholder: String,
    name: String,
    is_textarea: {
      required: false,
      type: Boolean
    },
    type: {
      default: 'text',
      required: false,
      type: String

    }
  }
})
</script>

<style scoped>
label {
  display: block;
}

input {
  display: block;
  padding-left: 4px;
  border: 1px solid #ccc;
  width: 100%;
  height: 44px;
  margin-bottom: 10px;
}

textarea {
  display: block;
  padding: 8px;
  border: 1px solid #ccc;
  width: 100%;
  height: 144px;
  margin-bottom: 10px;
  resize: vertical;
}
</style>
