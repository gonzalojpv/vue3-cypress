const contactChild = (prop: string, mode = false) => [
  {
    path: 'district2',
    name: `${prop}.district2`,
    meta: {
      authRequired: mode,
    },
    component: () => import('../views/pages/contacts/district2.vue'),
  },
]

export default contactChild
