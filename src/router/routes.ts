import adventChildRoutes from './advents'
import typescriptChildRoutes from './typescript'

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
]
