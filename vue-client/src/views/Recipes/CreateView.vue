<script setup>
import { onBeforeUnmount } from "vue";
import { useRecipe } from "@/stores/recipe";

const store = useRecipe();
onBeforeUnmount(store.resetForm);


</script>

<template>
    <main class="form-signin w-100 m-auto">
        <div class="container">
            <div class="row">
                <div class="col-md-10 offset-md-1">
                    <form @submit.prevent="store.storeRecipe" novalidate>
                        <h1 class="h3 mb-3 fw-normal">Add recipe</h1>

                        <div class="form-floating">
                            <input 
                                v-model="store.form.name"
                                id="name"
                                name="name"
                                type="text"
                                required
                                class="form-control" 
                                placeholder="name@example.com" 
                            />
                            <label for="name">Recipe's Name</label>
                            <ValidationError :errors="store.errors" field="name" />
                        </div>
                        <div class="form-floating">
                            <label for="photo" class="form-label">photo</label>
                            <div class="input-group">
                                <input 
                                    id="photo"
                                    name="photo"
                                    type="file"
                                    required
                                    @change="handleImageChange"
                                    class="form-control photo custom-file-input"
                                    aria-describedby="photo-addon"
                                />
                                <label class="input-group-text custom-file-label" for="photo">
                                    Choose File
                                </label>
                            </div>
                            <ValidationError :errors="store.errors" field="photo" />
                        </div>

                        <button class="w-100 btn btn-lg btn-primary" type="submit">Save The Recipe</button>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
  .custom-file-input {
    opacity: 0;
    position: absolute;
    pointer-events: none;
    height: 100%;
    width: 100%;
  }

  .custom-file-label {
    color: black;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    border-radius: 0 0 5px 5px !important;
    margin: 20px 0;
    margin-left: 0.5px !important;
    margin-right: -0.5px !important;
}
html,
body {
    height: 100%;
}

body {
    /* display: flex; */
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
}


.form-signin {
    /* max-width: 330px; */
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

.image {
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
