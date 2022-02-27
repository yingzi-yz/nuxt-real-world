import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b9139850 = () => interopDefault(import('..\\pages\\editor.vue' /* webpackChunkName: "pages_editor" */))
const _25da50ce = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _921b2564 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _3c963ace = () => interopDefault(import('..\\pages\\settings.vue' /* webpackChunkName: "pages_settings" */))
const _f8e44382 = () => interopDefault(import('..\\pages\\article\\_slug.vue' /* webpackChunkName: "pages_article__slug" */))
const _e2549052 = () => interopDefault(import('..\\pages\\profile\\_username.vue' /* webpackChunkName: "pages_profile__username" */))
const _5c32adb7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    path: "/editor",
    component: _b9139850,
    name: "editor"
  }, {
    path: "/login",
    component: _25da50ce,
    name: "login"
  }, {
    path: "/register",
    component: _921b2564,
    name: "register"
  }, {
    path: "/settings",
    component: _3c963ace,
    name: "settings"
  }, {
    path: "/article/:slug?",
    component: _f8e44382,
    name: "article-slug"
  }, {
    path: "/profile/:username?",
    component: _e2549052,
    name: "profile-username"
  }, {
    path: "/",
    component: _5c32adb7,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
