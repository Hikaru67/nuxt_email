import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0eae00a4 = () => interopDefault(import('../pages/candidate/index.vue' /* webpackChunkName: "pages/candidate/index" */))
const _01b37325 = () => interopDefault(import('../pages/charts/index.js' /* webpackChunkName: "pages/charts/index" */))
const _16bd095c = () => interopDefault(import('../pages/Dashboard.vue' /* webpackChunkName: "pages/Dashboard" */))
const _73fcb016 = () => interopDefault(import('../pages/history/index.vue' /* webpackChunkName: "pages/history/index" */))
const _23d346ca = () => interopDefault(import('../pages/item.js' /* webpackChunkName: "pages/item" */))
const _0f5a10a7 = () => interopDefault(import('../pages/Login.vue' /* webpackChunkName: "pages/Login" */))
const _4048f2d5 = () => interopDefault(import('../pages/Register.vue' /* webpackChunkName: "pages/Register" */))
const _339bb986 = () => interopDefault(import('../pages/templatemail/index.vue' /* webpackChunkName: "pages/templatemail/index" */))
const _b8dfd11a = () => interopDefault(import('../pages/candidate/add.vue' /* webpackChunkName: "pages/candidate/add" */))
const _4d32332c = () => interopDefault(import('../pages/charts/CChartBarExample.vue' /* webpackChunkName: "pages/charts/CChartBarExample" */))
const _62c646e2 = () => interopDefault(import('../pages/charts/CChartBarSimple.vue' /* webpackChunkName: "pages/charts/CChartBarSimple" */))
const _545e9105 = () => interopDefault(import('../pages/charts/CChartDoughnutExample.vue' /* webpackChunkName: "pages/charts/CChartDoughnutExample" */))
const _21c0f053 = () => interopDefault(import('../pages/charts/CChartLineExample.vue' /* webpackChunkName: "pages/charts/CChartLineExample" */))
const _1d02484e = () => interopDefault(import('../pages/charts/CChartLineSimple.vue' /* webpackChunkName: "pages/charts/CChartLineSimple" */))
const _439abb51 = () => interopDefault(import('../pages/charts/CChartPieExample.vue' /* webpackChunkName: "pages/charts/CChartPieExample" */))
const _fa50635c = () => interopDefault(import('../pages/charts/CChartPolarAreaExample.vue' /* webpackChunkName: "pages/charts/CChartPolarAreaExample" */))
const _5f1316d7 = () => interopDefault(import('../pages/charts/CChartRadarExample.vue' /* webpackChunkName: "pages/charts/CChartRadarExample" */))
const _1b0d1bcd = () => interopDefault(import('../pages/charts/Charts.vue' /* webpackChunkName: "pages/charts/Charts" */))
const _7cc44f7d = () => interopDefault(import('../pages/charts/MainChartExample.vue' /* webpackChunkName: "pages/charts/MainChartExample" */))
const _47f181bc = () => interopDefault(import('../pages/pages/Page404.vue' /* webpackChunkName: "pages/pages/Page404" */))
const _7c9f5ef9 = () => interopDefault(import('../pages/pages/Page500.vue' /* webpackChunkName: "pages/pages/Page500" */))
const _21db2307 = () => interopDefault(import('../pages/sendmail/MailInter.vue' /* webpackChunkName: "pages/sendmail/MailInter" */))
const _77d51887 = () => interopDefault(import('../pages/sendmail/MailOffer.vue' /* webpackChunkName: "pages/sendmail/MailOffer" */))
const _33676e15 = () => interopDefault(import('../pages/sendmail/MailThank.vue' /* webpackChunkName: "pages/sendmail/MailThank" */))
const _78faa0d5 = () => interopDefault(import('../pages/templatemail/add.vue' /* webpackChunkName: "pages/templatemail/add" */))
const _1d813be6 = () => interopDefault(import('../pages/widgets/Widgets.vue' /* webpackChunkName: "pages/widgets/Widgets" */))
const _3807b42a = () => interopDefault(import('../pages/widgets/WidgetsBrand.vue' /* webpackChunkName: "pages/widgets/WidgetsBrand" */))
const _4c1f44be = () => interopDefault(import('../pages/widgets/WidgetsDropdown.vue' /* webpackChunkName: "pages/widgets/WidgetsDropdown" */))
const _424bdc0c = () => interopDefault(import('../pages/candidate/_id.vue' /* webpackChunkName: "pages/candidate/_id" */))
const _17b6656e = () => interopDefault(import('../pages/templatemail/_id.vue' /* webpackChunkName: "pages/templatemail/_id" */))
const _637f64a0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/candidate",
    component: _0eae00a4,
    name: "candidate"
  }, {
    path: "/charts",
    component: _01b37325,
    name: "charts"
  }, {
    path: "/Dashboard",
    component: _16bd095c,
    name: "Dashboard"
  }, {
    path: "/history",
    component: _73fcb016,
    name: "history"
  }, {
    path: "/item",
    component: _23d346ca,
    name: "item"
  }, {
    path: "/Login",
    component: _0f5a10a7,
    name: "Login"
  }, {
    path: "/Register",
    component: _4048f2d5,
    name: "Register"
  }, {
    path: "/templatemail",
    component: _339bb986,
    name: "templatemail"
  }, {
    path: "/candidate/add",
    component: _b8dfd11a,
    name: "candidate-add"
  }, {
    path: "/charts/CChartBarExample",
    component: _4d32332c,
    name: "charts-CChartBarExample"
  }, {
    path: "/charts/CChartBarSimple",
    component: _62c646e2,
    name: "charts-CChartBarSimple"
  }, {
    path: "/charts/CChartDoughnutExample",
    component: _545e9105,
    name: "charts-CChartDoughnutExample"
  }, {
    path: "/charts/CChartLineExample",
    component: _21c0f053,
    name: "charts-CChartLineExample"
  }, {
    path: "/charts/CChartLineSimple",
    component: _1d02484e,
    name: "charts-CChartLineSimple"
  }, {
    path: "/charts/CChartPieExample",
    component: _439abb51,
    name: "charts-CChartPieExample"
  }, {
    path: "/charts/CChartPolarAreaExample",
    component: _fa50635c,
    name: "charts-CChartPolarAreaExample"
  }, {
    path: "/charts/CChartRadarExample",
    component: _5f1316d7,
    name: "charts-CChartRadarExample"
  }, {
    path: "/charts/Charts",
    component: _1b0d1bcd,
    name: "charts-Charts"
  }, {
    path: "/charts/MainChartExample",
    component: _7cc44f7d,
    name: "charts-MainChartExample"
  }, {
    path: "/pages/Page404",
    component: _47f181bc,
    name: "pages-Page404"
  }, {
    path: "/pages/Page500",
    component: _7c9f5ef9,
    name: "pages-Page500"
  }, {
    path: "/sendmail/MailInter",
    component: _21db2307,
    name: "sendmail-MailInter"
  }, {
    path: "/sendmail/MailOffer",
    component: _77d51887,
    name: "sendmail-MailOffer"
  }, {
    path: "/sendmail/MailThank",
    component: _33676e15,
    name: "sendmail-MailThank"
  }, {
    path: "/templatemail/add",
    component: _78faa0d5,
    name: "templatemail-add"
  }, {
    path: "/widgets/Widgets",
    component: _1d813be6,
    name: "widgets-Widgets"
  }, {
    path: "/widgets/WidgetsBrand",
    component: _3807b42a,
    name: "widgets-WidgetsBrand"
  }, {
    path: "/widgets/WidgetsDropdown",
    component: _4c1f44be,
    name: "widgets-WidgetsDropdown"
  }, {
    path: "/candidate/:id",
    component: _424bdc0c,
    name: "candidate-id"
  }, {
    path: "/templatemail/:id",
    component: _17b6656e,
    name: "templatemail-id"
  }, {
    path: "/",
    component: _637f64a0,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
