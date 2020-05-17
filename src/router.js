import Vue from 'vue'
import VueRouter from 'vue-router'
import i18next from 'i18next'

import StaticPage from './pages/StaticPage.vue'
import StatsPage from './pages/StatsPage.vue'
import EmbedMakerPage from './pages/EmbedMakerPage.vue'
import TablesPage from './pages/TablesPage.vue'
import DataPage from './pages/DataPage.vue'

import * as aboutMd from './content/about.md'
import * as aboutMdEn from './content/about_en.md'
import * as linksMd from './content/links.md'
import * as linksMdEn from './content/links_en.md'
import * as contentMd from './content/FAQ.md'
import * as contentMdEn from './content/FAQ_en.md'
import * as teamMd from './content/team.md'
import * as teamMdEn from './content/team_en.md'
import * as sourcesMd from './content/sources.md'
import * as sourcesMdEn from './content/sources_en.md'
import * as modelsMd from './content/models.md'
import * as modelsMdEn from './content/models_en.md'
import * as datasourcesMd from './content/datasources.md'
import * as datasourcesMdEn from './content/datasources_en.md'

Vue.use(VueRouter)

const mdContent = {
  FAQ: { sl: contentMd, en: contentMdEn },
  about: { sl: aboutMd, en: aboutMdEn },
  team: { sl: teamMd, en: teamMdEn },
  links: { sl: linksMd, en: linksMdEn },
  sources: { sl: sourcesMd, en: sourcesMdEn },
  models: { sl: modelsMd, en: modelsMdEn },
  datasources: { sl: datasourcesMd, en: datasourcesMdEn },
}

function dynamicProps(route) {
  let baseRoute = route.path.slice(4)
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
    path: '/:lang',
    beforeEnter: (to, from, next) => {
      const language = to.params.lang
      const supportedLanguages = ['sl', 'en']
      if (!supportedLanguages.includes(language)) {
        return next(`${i18next.language}/stats`)
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
        path: 'stats',
        component: StatsPage,
        props: true,
      },
      {
        path: 'data',
        component: DataPage,
        props: true,
      },
      {
        path: 'tables',
        component: TablesPage,
        props: true,
      },
      {
        path: 'embed',
        component: EmbedMakerPage,
        props: true,
      },
      ...mdContentRoutes(),
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
      next({ path: '/sl/stats' })
    },
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