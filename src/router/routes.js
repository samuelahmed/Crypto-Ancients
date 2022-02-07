
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Home.vue') },
      { path: 'home', component: () => import('src/pages/Home.vue') },
      { path: 'mint', component: () => import('pages/Mint.vue') },
      { path: 'myancients', component: () => import('pages/MyAncients.vue') },
      { path: 'galery', component: () => import('pages/Galery.vue') },
      { path: 'history', component: () => import('pages/History.vue') }
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
