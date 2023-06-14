import adventChildRoutes from './advents'

export default [{
    path: '/',
    component: () => import('../views/layouts/default.vue'),
    children: adventChildRoutes('advent', false)
  }
]