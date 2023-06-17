const typescriptChildRoutes = (prop: string, mode = false) => [
  {
    path: 'generic',
    name: `${prop}.generic`,
    meta: {
      authRequired: mode,
    },
    component: () => import('../views/pages/typescript/generics.vue'),
  },
]

export default typescriptChildRoutes
