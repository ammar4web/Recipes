<script setup>
// import { RouterLink } from "vue-router";

import { watchEffect } from "vue";
import { useRecipe } from "@/stores/recipe";
import { useRoute } from "vue-router";
 
const store = useRecipe();
const route = useRoute();

 
// onMounted(store.getRecipe({ id: route.params.id }));

watchEffect(async () => {
  store.getShowRecipe({ id: route.params.id });
});
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-8 offset-2 mt-5">
                <div class="d-flex flex-column mx-auto w-100 md:w-96">
                    <div class="album py-5">
                            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-offset-md-2 g-3">
                                <div class="col offset-3">
                                    <div class="card shadow-sm">
                                        <img :src="store.recipe.image" alt="Recipe Photo" />
                                        <div class="card-body">
                                            <p class="card-text text-center">{{ store.recipe.name }}</p>
                                            <p class="card-text text-center">Details comming soon</p>
                                            <p class="card-text text-center">...</p>
                                            <p class="card-text text-center">...</p>
                                            <p class="card-text text-center">...</p>
                                            <p class="card-text text-center">...</p>
                                            <div class="d-flex justify-content-end align-items-center">
                                                <div class="btn-group">
                                                    <RouterLink 
                                                        :to="{ name: 'recipes.edit', params: { id: route.params.id } }"
                                                        class="btn btn-sm btn-warning">Edit</RouterLink>
                                                </div>
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