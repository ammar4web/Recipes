import { createRouter, createWebHistory } from 'vue-router'

function auth(to, from, next) {
  if (!localStorage.getItem("access_token")) {
    return next({ name: "login" });
  }
 
  next();
}

function guest(to, from, next) {
  if (localStorage.getItem("access_token")) {
    return next({ name: "recipes.index" });
  }
 
  next();
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/HomeView.vue"),
    },

    {
      path: "/register",
      name: "register",
      beforeEnter: guest,
      component: () => import("@/views/Auth/RegisterView.vue"),
    },

    {
      path: "/login",
      name: "login",
      beforeEnter: guest,
      component: () => import("@/views/Auth/LoginView.vue"),
    },

    {
      path: "/recipes",
      name: "recipes.index",
      beforeEnter: auth,
      component: () => import("@/views/Recipes/IndexView.vue"),
    },

    {
      path: "/recipes/create",
      name: "recipes.create",
      beforeEnter: auth,
      component: () => import("@/views/Recipes/CreateView.vue"),
    },

    {
      path: "/recipes/:id/edit",
      name: "recipes.edit",
      beforeEnter: auth,
      component: () => import("@/views/Recipes/EditView.vue"),
    },

    {
      path: "/recipes/:id",
      name: "recipes.show",
      beforeEnter: auth,
      component: () => import("@/views/Recipes/ShowView.vue"),
    },
  ],
})

export default router