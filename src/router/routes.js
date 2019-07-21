
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout'),
    children: [
      { path: '', component: () => import('pages/Index') }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/Login')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404')
  })
}

export default routes
