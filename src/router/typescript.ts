const typescriptChildRoutes = (prop: string, mode = false) => [
  {
    path: 'generic',
    name: `${prop}.generic`,
    meta: {
      authRequired: mode,
    },
    component: () => import('../views/pages/typescript/generics.vue'),
  },
  {
    path: 'decorators',
    name: `${prop}.decorator`,
    meta: {
      authRequired: mode,
    },
    component: () => import('../views/pages/decorators/decorator.vue'),
  },
]

export default typescriptChildRoutes
