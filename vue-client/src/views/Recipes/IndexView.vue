<script setup>
import { RouterLink } from "vue-router";

import { onMounted } from "vue";
import { useRecipe } from "@/stores/recipe";
 
const store = useRecipe();
 
onMounted(store.getRecipes);
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-8 offset-2 mt-5">
                <div class="d-flex flex-column mx-auto w-100 md:w-96">
                    <h1 class="text-center fw-bold mb-4 fs-2">My recipes</h1>

                    <RouterLink :to="{ name: 'recipes.create' }" class="btn btn-primary w-100">
                        Add recipe
                    </RouterLink>

                    <hr class="my-6">

                    
                    <div class="album py-5">
                            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-3">
                                <div 
                                    class="col"
                                    v-for="recipe in store.recipes"
                                    :key="recipe.id"
                                >
                                    <div class="card shadow-sm">
                                        <img :src="recipe.image" alt="Recipe Photo" />
                                        <div class="card-body">
                                            <p class="card-text">{{ recipe.name }}</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="btn-group">
                                                    <RouterLink 
                                                        :to="{ name: 'recipes.show', params: { id: recipe.id } }"
                                                        class="btn btn-sm btn-outline-secondary me-1">View</RouterLink>
                                                    <RouterLink 
                                                        :to="{ name: 'recipes.edit', params: { id: recipe.id } }"
                                                        class="btn btn-sm btn-warning">Edit</RouterLink>
                                                </div>
                                                <button 
                                                    type="button" 
                                                    @click="store.deleteRecipe(recipe)"
                                                    class="btn btn-sm btn-danger">Delete</button>
                                                <!-- <small class="text-muted">9 mins</small> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>