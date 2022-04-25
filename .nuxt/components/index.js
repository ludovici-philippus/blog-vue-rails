export { default as FormGroupComponent } from '../../components/FormGroupComponent.vue'
export { default as AdminLoginComponent } from '../../components/Admin/LoginComponent.vue'
export { default as HeaderBaseComponent } from '../../components/Header/BaseComponent.vue'
export { default as HeaderCategoriesComponent } from '../../components/Header/CategoriesComponent.vue'
export { default as HeaderNavbarComponent } from '../../components/Header/NavbarComponent.vue'
export { default as MainBaseComponent } from '../../components/Main/BaseComponent.vue'
export { default as MainPostSingleComponent } from '../../components/Main/PostSingleComponent.vue'
export { default as MainPostsComponent } from '../../components/Main/PostsComponent.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
