<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuth } from "@/stores/auth";

const auth = useAuth();
</script>
 
<template>
  <main>
    <header class="p-3 text-bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <template v-if="auth.check">
                <RouterLink :to="{ name: 'recipes.index' }" class="nav-link px-2 text-secondary">Recipes</RouterLink>
              </template>
              <template v-else>
                <RouterLink :to="{ name: 'home' }" class="nav-link px-2 text-secondary">Home</RouterLink>
              </template>
            </li>

          </ul>
          <div class="text-end">
            <template v-if="auth.check">
              <button @click="auth.logout" class="btn btn-warning">Logout</button>
            </template>
            <template v-else>
              <button type="button" class="btn btn-outline-light me-2">Login</button>
              <RouterLink :to="{ name: 'register' }" class="btn btn-warning">Register</RouterLink>
            </template>
          </div>
        </div>
      </div>
    </header>

    <RouterView />
  
  </main>
</template>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}</style>