const adventChildRoutes = (prop: string, mode = false) => [
  {
    path: '',
    name: `${prop}.home`,
    meta: {
      authRequired: mode
    },
    component: () => import('../views/pages/home/index.vue')
  },
   {
    path: 'advent-1',
    name: `${prop}.one`,
    meta: {
      authRequired: mode
    },
    component: () => import('../views/pages/advents/advent-1.vue')
  }
]

export default adventChildRoutes