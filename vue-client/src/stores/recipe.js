import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useRecipe = defineStore("recipe", () => {
    const router = useRouter();
    const errors = reactive({});
    const loading = ref(false);
    const recipes = ref([]);
    const recipe = ref([]);
    const form = reactive({
        name: "",
        // description: "",
        photo: "",
    });

    function resetForm() {
        form.name = "";
        // form.description = "";
        form.photo = null;

        errors.value = {};
    }

    function getRecipes() {
        return window.axios
            .get("recipes")
            .then((response) => (recipes.value = response.data.data));
    }

    function getShowRecipe(recipeID) {
        console.log(recipeID)
        window.axios.get(`recipes/${recipeID.id}`)
        .then((response) => (recipe.value = response.data.data));
    }

    function getRecipe(recipe) {
        window.axios.get(`recipes/${recipe.id}`).then((response) => {
            form.name = response.data.data.name;
            form.photo = response.data.data.photo;
        });
    }

    function storeRecipe() {
        if (loading.value) return;

        loading.value = true;
        errors.value = {};

        window.axios
            .post("recipes", form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(() => {
                router.push({ name: "recipes.index" });
            })
            .catch((error) => {
                if (error.response.status === 422) {
                    errors.value = error.response.data.errors;
                }
            })
            .finally(() => (loading.value = false));
    }

    function updateRecipe(recipe) {
        if (loading.value) return;
        
        loading.value = true;
        errors.value = {};
        
        window.axios
            .put(`recipes/${recipe.id}`, form)
            .then(() => {
            router.push({ name: "recipes.index" });
            })
            .catch((error) => {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
            })
            .finally(() => (loading.value = false));
    }
        
    function deleteRecipe(recipe) {
        window.axios.delete(`recipes/${recipe.id}`).then(getRecipes);
    }

    function handleImageChange(event) {
        form.photo = event.target.files[0];
        const fileName = event.target.files[0].name;
        const label = event.target.nextElementSibling;
        label.innerHTML = fileName;
    };

    return { form, errors, loading, resetForm, recipes, recipe, getRecipes, getShowRecipe, getRecipe, storeRecipe, updateRecipe, deleteRecipe, handleImageChange };
});