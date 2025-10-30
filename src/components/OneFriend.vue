<template>
<h1 v-if="premium === true">{{ name }} - un ami en OR</h1>
<h1 v-else>{{ name }} - un ami en PLOMB</h1>
<h1>{{ id }}</h1>
<h1>{{ phone }}</h1>
<h1>{{ email }}</h1>

</template>

<script setup>
const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    premium: {
        type: Boolean
    }
})

</script>