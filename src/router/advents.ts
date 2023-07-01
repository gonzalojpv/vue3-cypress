const adventChildRoutes = (prop: string, mode = false) => [
  {
    path: '',
    name: `${prop}.home`,
    meta: {
      authRequired: mode,
    },
    component: () => import('../views/pages/home/index.vue'),
  },
  {
    path: 'advent-1',
    name: `${prop}.one`,
    meta: {
      authRequired: mode,
    },
    component: () => import('../views/pages/advents/advent-1.vue'),
  },
  {
    path: 'advent-2',
    name: `${prop}.two`,
    meta: {
      authRequired: mode,
    },
    component: () => import('../views/pages/advents/advent-2.vue'),
  },
  {
    path: 'advent-4',
    name: `${prop}.four`,
    meta: {
      authRequired: mode,
    },
    component: () => import('../views/pages/advents/advent-4.vue'),
  },
  {
    path: 'advent-6',
    name: `${prop}.six`,
    meta: {
      authRequired: mode,
    },
    component: () => import('../views/pages/advents/advent-6.vue'),
  },
  {
    path: 'advent-8',
    name: `${prop}.eighth`,
    meta: {
      authRequired: mode,
    },
    component: () => import('../views/pages/advents/advent-8.vue'),
  },
  {
    path: 'advent-9',
    name: `${prop}.nine`,
    meta: {
      authRequired: mode,
    },
    component: () => import('../views/pages/advents/advent-9.vue'),
  },
]

export default adventChildRoutes
