<template>
    <H1>Une simple requête HTTP GET</H1>

    <div class="card w-96 bg-base-100 card-md shadow-sm">
        <div class="card-body">
            <h2 class="card-title">Les Pokémon :</h2>
            <ul>
                <div v-for="(Pokemon) in Pokemons" class="badge badge-primary">{{Pokemon["name"]}}</div>
            </ul>
        </div>
    </div>

    <div class="card w-96 bg-base-100 card-md shadow-sm">
        <div class="card-body">
            <h2 class="card-title">Météo Toulouse :</h2>

        </div>
    </div>

</template>

<script setup lang="js">
import { ref, onBeforeMount, onMounted } from 'vue'

const Pokemons = ref([]);
async function getPokemonList() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        Pokemons.value = data.results;
       

    } catch (error) {
        console.error("Erreur :", error);
    }
}

onMounted(() => {
    getPokemonList()
})
</script>