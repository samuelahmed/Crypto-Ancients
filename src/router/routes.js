
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'home', component: () => import('pages/Index.vue') },
      { path: 'mint', component: () => import('pages/Mint.vue') },
      { path: 'myancients', component: () => import('pages/MyAncients.vue') },
      { path: 'galery', component: () => import('pages/Galery.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
