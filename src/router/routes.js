const routes = [
  {
    path: '/',
    component: () => import('layouts/adminLayout.vue'),
    children: [
      {
        path: '/',
        component: () => import('pages/admin/SYSTEMOVERVIEW.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/registrarLayout.vue'),
    children: [
      {
        path: '/registrarStudents',
        component: () => import('pages/admin/registrar/students.vue')
      },
      {
        path: '/registrarPersonnel',
        component: () => import('pages/admin/registrar/personnel.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/libraryLayout.vue'),
    children: [
      {
        path: '/libraryCatalog',
        component: () => import('pages/admin/library/catalog.vue')
      },
      {
        path: '/libraryStatistics',
        component: () => import('pages/admin/library/statistics.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/publicViews/qrcodeLayout.vue'),
    children: [
      {
        path: '/libraryLoginQR',
        component: () => import('pages/qrcodeReader/libraryReader.vue')
      }
    ]
  },
  {
    path: '/nbw',
    component: () => import('pages/publicArea/libraryPublic/NBW.vue')
  },
  {
    path: '/QBelem',
    component: () => import('pages/publicArea/libraryPublic/QBelem.vue')
  },
  {
    path: '/poll',
    component: () => import('pages/publicArea/libraryPublic/pollvote.vue')
  }
  // {
  //   path: '/libraryLoginQR',
  //   component: () => import('pages/qrcodeReader/libraryReader.vue')
  // }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
