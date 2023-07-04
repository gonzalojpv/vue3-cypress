const designPatternsChild = (prop: string, mode = false) => [
  {
    path: '',
    name: `${prop}.index`,
    meta: {
      authRequired: mode,
    },
    component: () => import('../views/pages/design-patterns/index.vue'),
  },
]

export default designPatternsChild
