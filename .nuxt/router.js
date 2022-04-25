import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8ec1c208 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _73a25570 = () => interopDefault(import('../pages/admin/add-category.vue' /* webpackChunkName: "pages/admin/add-category" */))
const _49ca0d12 = () => interopDefault(import('../pages/admin/add-post.vue' /* webpackChunkName: "pages/admin/add-post" */))
const _bea594a4 = () => interopDefault(import('../pages/admin/manage-categories.vue' /* webpackChunkName: "pages/admin/manage-categories" */))
const _4979533c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _02cf77c5 = () => interopDefault(import('../pages/_idCategory/index.vue' /* webpackChunkName: "pages/_idCategory/index" */))
const _bccc9b20 = () => interopDefault(import('../pages/_idCategory/_idPost/index.vue' /* webpackChunkName: "pages/_idCategory/_idPost/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _8ec1c208,
    name: "admin"
  }, {
    path: "/admin/add-category",
    component: _73a25570,
    name: "admin-add-category"
  }, {
    path: "/admin/add-post",
    component: _49ca0d12,
    name: "admin-add-post"
  }, {
    path: "/admin/manage-categories",
    component: _bea594a4,
    name: "admin-manage-categories"
  }, {
    path: "/",
    component: _4979533c,
    name: "index"
  }, {
    path: "/:idCategory",
    component: _02cf77c5,
    name: "idCategory"
  }, {
    path: "/:idCategory/:idPost",
    component: _bccc9b20,
    name: "idCategory-idPost"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
