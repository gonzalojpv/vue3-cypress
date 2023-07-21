import adventChildRoutes from './advents'
import typescriptChildRoutes from './typescript'
import designPatternsChild from './design-patterns'
import contactChild from './contacts'

export default [
  {
    path: '/',
    component: () => import('../views/layouts/default.vue'),
    children: adventChildRoutes('advent', false),
  },
  {
    path: '/typescript',
    component: () => import('../views/layouts/default.vue'),
    children: typescriptChildRoutes('typescript', false),
  },
  {
    path: '/design-patterns',
    component: () => import('../views/layouts/default.vue'),
    children: designPatternsChild('design-patterns', false),
  },
  {
    path: '/contact-form',
    component: () => import('../views/pages/contacts/index.vue'),
    children: contactChild('contact', false),
  },
]
