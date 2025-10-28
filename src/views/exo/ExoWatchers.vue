<template>
    <div class="card bg-base-100 shadow-xl rounded-box p-6 items-center text-center">
        <div class="mt-6 mb-4 card bg-base-200 shadow-lg rounded-box p-4 items-center text-center">
            <h6 class="text-xl font-semibold mb-2">Exercice Watchers</h6>
            <button @click="nbInc" class="btn btn-success"> + </button>
            <h1>{{ nb }}</h1>
        </div>
    </div>
</template>

<script setup lang="js">
import { ref, watch } from 'vue';

const nb = ref(0);
const limit = ref(false);

function nbInc() {
    nb.value++;
}

watch(nb, (newVal) => {
    if (newVal >= 7) {
        nb.value = 0;
    }
});
</script>
