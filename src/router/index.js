import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import store from '@/store/store'
const SignUp =()=> import('../views/SignView.vue')
const Layout =()=> import('../components/Layout.vue')
const Dashboard =()=> import('../views/Dashboard.vue')
const Login =()=> import('../views/Login.vue')
const Products =()=> import('../views/Products.vue')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      component: Layout, // Use AuthLayout for authenticated views
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard,
          meta: { requiresAuth: true },
        },
        {
          path: '/product',
          name: 'product',
          component: Products,
          meta: { requiresAuth: true },
        },
        

      ],
    },
  
   
  ]


  
})

// Navigation guard to check if the route requires authentication
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if user is authenticated
    console.log('store.state.registration.auth' ,store.state.regestration.auth)
    const isAuthenticated = store.state.regestration.auth; // Adjust this based on your Vuex store structure
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      next({ name: 'login' });
    } else {
      // Proceed to the protected route
      next();
    }
  } else {
    // For public routes, proceed without checking authentication
    next();
  }
});
export default router
