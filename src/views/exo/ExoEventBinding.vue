<template>
    <div class="card card-border bg-base-100 w-96">
        <div class="card-body items-center text-center">
            <button @click.middle = "min11" class="btn btn-error"> - </button>
            le nombre : {{ nb }}
            <button @click.right = "plus99" class="btn btn-success"> + </button>
        </div>
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue';

const nb = ref(0);

function min11(event) {
    nb.value -= 11;
    console.log(event);
}

function plus99(event) {
    nb.value += 99;
    console.log(event);
}
</script>