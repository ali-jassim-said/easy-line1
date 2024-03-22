import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import("../views/dashboard/Dashboard.vue")
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/loginPage/login.vue")
  },
  {
    path: '/admins',
    name: 'admins',
    component: () => import("../views/AdminsAccounts/admins.vue")
  },
  {
    path: '/admins/update/:id',
    name: 'update',
    component: () => import("../views/AdminsAccounts/UpdateAdmin.vue")
  },
  {
    path: '/admins/getAdmin/:id',
    name: 'getAdmin',
    component: () => import("../views/AdminsAccounts/getAdmin.vue")
  },
  {
    path: '/zones',
    name: 'zones',
    component: () => import("../views/zones/AllZone.vue")
  },
  {
    path: '/zones/addZone',
    name: 'addZone',
    component: () => import("../views/zones/addZone.vue")
  },
  {
    path: '/zones/updateZone/:id',
    name: 'updateZone',
    component: () => import("../views/zones/updateZone.vue")
  },
  {
    path: '/zones/getZone/:id',
    name: 'getZone',
    component: () => import("../views/zones/getZone.vue")
  },
  {
    path: '/getAllSubscription',
    name: 'SubscriptionTrip',
    component: () => import("../views/SubscriptionTrip/getAllSubscription.vue")
  },
  {
    path: '/getAllSubscription/addSubscription',
    name: 'addSubscription',
    component: () => import("../views/SubscriptionTrip/addSubscription.vue")
  },
  {
    path: '/getAllSubscription/updateSubscription/:id',
    name: 'updateSubscription',
    component: () => import("../views/SubscriptionTrip/updateSub.vue")
  },
  {
    path: '/users',
    name: 'users',
    component: () => import("../views/users/getAllUsers.vue")
  },
  {
    path: '/users/addUser',
    name: 'addUser',
    component: () => import("../views/users/addUser.vue")
  },
  {
    path: '/users/updateUser/:id',
    name: 'updateUser',
    component: () => import("../views/users/updateUser.vue")
  },
  {
    path: '/users/getUser/:id',
    name: 'getUser',
    component: () => import("../views/users/getUser.vue")
  },
  {
    path: '/captains',
    name: 'captains',
    component: () => import("../views/captains/getCaptains.vue")
  },
  {
    path: '/captains/addCaptain',
    name: 'addCaptain',
    component: () => import("../views/captains/addCaptain.vue")
  },
  {
    path: '/captains/updateCaptain/:id',
    name: 'updateCaptain',
    component: () => import("../views/captains/updateCaptain.vue")
  },
  {
    path: '/captains/getCaptain/:id',
    name: 'getCaptain',
    component: () => import("../views/captains/getCaptain.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
