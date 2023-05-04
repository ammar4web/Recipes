<script setup>
import { onBeforeUnmount } from "vue";
import { useRegister } from "@/stores/register";
 
const store = useRegister();
 
onBeforeUnmount(store.resetForm);
</script>

<template>
    <main class="form-signin w-100 m-auto">
        <form @submit.prevent="store.handleSubmit" novalidate>
            <h1 class="h3 mb-3 fw-normal">Please Register</h1>

            <div class="form-floating">
                <input 
                    v-model="store.form.name"
                    id="name"
                    name="name"
                    type="text"
                    autocomplete="name"
                    required
                    placeholder="User Name"
                    class="form-control" 
                />
                <label for="name">User Name</label>
            </div>
            <div class="form-floating">
                <input 
                    v-model="store.form.email"
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="form-control" 
                    placeholder="name@example.com" 
                />
                <label for="email">Email address</label>
            </div>
            <div class="form-floating">
                <input 
                    v-model="store.form.password"
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="new-password"
                    requiredclass="form-control password"
                    class="form-control password" 
                    placeholder="Password"
                />
                <label for="password">Password</label>
            </div>
            <div class="form-floating">
                <input 
                    v-model="store.form.password_confirmation"
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    autocomplete="new-password"
                    required 
                    class="form-control password-confirmation"
                    placeholder="Password Confirmation"
                />
                <label for="floatingPasswordConfirmation">Password Confirmation</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
        </form>
    </main>
</template>

<style scoped>
html,
body {
    height: 100%;
}

body {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
}


.form-signin {
    max-width: 330px;
    padding: 15px;
    height: calc(100vh - 72px) !important;
    display: flex;
    align-items: center;
}

form {
    flex-grow: 1;
}

.form-signin .form-floating:focus-within {
    z-index: 2;
}

.form-signin input[type="text"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-radius: 0;
}

.password {
    margin-bottom: -1px;
    border-radius: 0;
}

.password-confirmation {
    margin-bottom: 10px !important;
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
}

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
}
</style>
