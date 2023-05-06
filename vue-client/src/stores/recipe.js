import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { onMounted } from 'vue';

export const useRecipe = defineStore("recipe", () => {
    const router = useRouter();
    const errors = reactive({});
    const loading = ref(false);
    const recipes = ref([]);
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

    function handleImageChange(event) {
        form.photo = event.target.files[0];
        const fileName = event.target.files[0].name;
        const label = event.target.nextElementSibling;
        label.innerHTML = fileName;
      };
      
      onMounted(() => {
        document.querySelector('#photo').addEventListener('change', handleImageChange);
      });

    return { form, errors, loading, resetForm, storeRecipe, recipes, getRecipes, handleImageChange };
});