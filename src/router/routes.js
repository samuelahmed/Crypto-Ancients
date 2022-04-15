
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Home.vue') },
      { path: 'home', component: () => import('src/pages/Home.vue') },
      { path: 'mint', component: () => import('pages/Mint.vue') },
      { path: 'gallery', component: () => import('src/pages/Gallery.vue') },
      { path: 'story', component: () => import('pages/Story.vue') },
      { path: 'about', component: () => import('pages/About.vue') },
      { name: 'AncientDetails', path: 'crypto-ancient/:edition', component: () => import('src/pages/AncientDetails.vue') }

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
