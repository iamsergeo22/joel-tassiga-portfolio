import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6c2a136e = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _2ebbd3b3 = () => interopDefault(import('../pages/projet.vue' /* webpackChunkName: "pages/projet" */))
const _2aaa54f7 = () => interopDefault(import('../pages/posts/_slug.vue' /* webpackChunkName: "pages/posts/_slug" */))
const _55dbfb8a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _6c2a136e,
    name: "contact"
  }, {
    path: "/projet",
    component: _2ebbd3b3,
    name: "projet"
  }, {
    path: "/posts/:slug?",
    component: _2aaa54f7,
    name: "posts-slug"
  }, {
    path: "/",
    component: _55dbfb8a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
