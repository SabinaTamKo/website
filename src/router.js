import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import i18next from 'i18next'

import StaticPage from './pages/StaticPage.vue'
import StatsPage from './pages/StatsPage.vue'
import EmbedMakerPage from './pages/EmbedMakerPage.vue'
import TablesPage from './pages/TablesPage.vue'
import DataPage from './pages/DataPage.vue'
import PageNotFound from './pages/PageNotFound.vue'

import * as aboutMd from './content/about.md'
import * as aboutMdEn from './content/about_en.md'
import * as aboutMdHr from './content/hr/about.md'
import * as aboutMdDe from './content/de/about.md'

import * as linksMd from './content/links.md'
import * as linksMdEn from './content/links_en.md'
import * as linksMdHr from './content/hr/links.md'
import * as linksMdDe from './content/de/links.md'

import * as contentMd from './content/faq.md'
import * as contentMdEn from './content/faq_en.md'
import * as contentMdHr from './content/hr/faq.md'
import * as contentMdDe from './content/de/faq.md'

import * as teamMd from './content/team.md'
import * as teamMdEn from './content/team_en.md'
import * as teamMdHr from './content/hr/team.md'
import * as teamMdDe from './content/de/team.md'

import * as sourcesMd from './content/sources.md'
import * as sourcesMdEn from './content/sources_en.md'
import * as sourcesMdHr from './content/hr/sources.md'
import * as sourcesMdDe from './content/de/sources.md'

import * as modelsMd from './content/models.md'
import * as modelsMdEn from './content/models_en.md'
import * as modelsMdHr from './content/hr/models.md'
import * as modelsMdDe from './content/de/models.md'

import * as datasourcesMd from './content/datasources.md'
import * as datasourcesMdEn from './content/datasources_en.md'
import * as datasourcesMdHr from './content/hr/datasources.md'
import * as datasourcesMdDe from './content/de/datasources.md'

Vue.use(VueRouter)
Vue.use(VueMeta)

const mdContent = {
  faq: {
    sl: contentMd,
    en: contentMdEn,
    hr: contentMdHr,
    de: contentMdDe,
  },
  about: {
    sl: aboutMd,
    en: aboutMdEn,
    hr: aboutMdHr,
    de: aboutMdDe,
  },
  team: {
    sl: teamMd,
    en: teamMdEn,
    hr: teamMdHr,
    de: teamMdDe,
  },
  links: {
    sl: linksMd,
    en: linksMdEn,
    hr: linksMdHr,
    de: linksMdDe,
  },
  sources: {
    sl: sourcesMd,
    en: sourcesMdEn,
    hr: sourcesMdHr,
    de: sourcesMdDe,
  },
  models: {
    sl: modelsMd,
    en: modelsMdEn,
    hr: modelsMdHr,
    de: modelsMdDe,
  },
  datasources: {
    sl: datasourcesMd,
    en: datasourcesMdEn,
    hr: datasourcesMdHr,
    de: datasourcesMdDe,
  },
}

function dynamicProps(route) {
  let baseRoute = route.path
    .slice(4)
    .toLowerCase()
    .replace(/\/$/, '')
  let lang = route.params.lang

  return {
    name: lang === 'en' ? `${baseRoute}-${lang}` : `${baseRoute}`,
    content: mdContent[baseRoute][lang || 'sl'],
  }
}

function mdContentRoutes() {
  const mdContentRoutes = []

  Object.keys(mdContent).forEach((key) => {
    mdContentRoutes.push({
      path: key,
      component: StaticPage,
      props: dynamicProps,
    })
  })

  return mdContentRoutes
}

const routes = [
  {
    path: '/stats',
    redirect: `/${i18next.language}/stats`,
  },
  {
    path: '/tables',
    redirect: `/${i18next.language}/tables`,
  },
  {
    path: '/models',
    redirect: `/${i18next.language}/models`,
  },
  {
    path: '/faq',
    redirect: `/${i18next.language}/faq`,
  },
  {
    path: '/about',
    redirect: `/${i18next.language}/about`,
  },
  {
    path: '/about/en',
    redirect: `/en/about`,
  },
  {
    path: '/team',
    redirect: `/${i18next.language}/team`,
  },
  {
    path: '/sources',
    redirect: `/${i18next.language}/sources`,
  },
  {
    path: '/links',
    redirect: `/${i18next.language}/links`,
  },
  {
    path: '/data',
    redirect: `/${i18next.language}/data`,
  },
  {
    path: '/embed',
    redirect: `/${i18next.language}/embed`,
  },
  {
    path: '/datasources',
    redirect: `/${i18next.language}/datasources`,
  },
  {
    path: '/',
    beforeEnter: (to, from, next) => {
      next(i18next.language)
    },
  },
  {
    path: '/:lang',
    beforeEnter: (to, from, next) => {
      const language = to.params.lang
      const supportedLanguages = i18next.languages
      if (!supportedLanguages.includes(language)) {
        return next(`${i18next.language}/404`)
      }
      if (i18next.language !== language) {
        i18next.changeLanguage(language)
      }
      return next()
    },
    component: {
      render(c) {
        return c('router-view')
      },
    },
    children: [
      {
        path: '',
        redirect: 'stats',
      },
      {
        path: 'stats',
        component: StatsPage,
      },
      {
        path: 'data',
        component: DataPage,
      },
      {
        path: 'tables',
        component: TablesPage,
      },
      {
        path: 'embed',
        component: EmbedMakerPage,
      },
      ...mdContentRoutes(),
      {
        path: '*',
        component: PageNotFound,
        // Vue Router supports meta tags, but for some reason this doesn't work
        // - https://router.vuejs.org/guide/advanced/meta.html
        // - https://alligator.io/vuejs/vue-router-modify-head/
        // meta: {
        //   metaTags: [
        //     {
        //       name: 'robots',
        //       content: 'noindex',
        //     },
        //   ],
        // },
      },
    ],
  },
  {
    path: '*',
    beforeEnter: (to, from, next) => {
      // handle legacy routes
      if (to.fullPath.substr(0, 2) === '/#') {
        const path = to.fullPath.substr(2)
        next(path)
        return
      }
      next()
    },
    component: PageNotFound,
  },
]

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history',
})

router.beforeEach((to, from, next) => {
  if (to.hash === '') {
    window.scrollTo(0, 0)
  }
  next()
})

export default router
