<script setup>
import { defineProps } from "vue";
const props = defineProps(["errors", "field"]);
</script>
 
<template>
    <ul v-if="props?.errors?.value?.[props.field]?.length" class="list-unstyled text-danger mt-2">
        <li v-for="message in props.errors.value[props.field]" :key="message">
            {{ message }}
        </li>
    </ul>
</template>