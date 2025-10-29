<template>
    <div class="container mx-auto p-4 md:p-8 bg-base-200 rounded-box shadow-xl">
        <div class="text-center mb-8">
            <h1 class="text-4xl md:text-5xl font-bold text-primary">TP:Dynamic Styling</h1>
        </div>

        <div class="card bg-base-100 shadow-xl rounded-box p-6">
            <div class="card-body">
                <h2 class="card-title text-2xl font-bold mb-4">Classes Dynamiques</h2>
                <div class="form-control mb-4">
                    <label class="label">
                        <span class="label-text">Entrez 'hello' ou 'world' :</span>
                    </label>
                    <input v-model="nomClasse" type="text" placeholder="Tapez ici..."
                        class="input input-bordered w-full" />
                </div>
                <h2 :class="classDynamique" class="text-xl font-bold transition-all duration-300">
                    Hello World (classe dynamique)
                </h2>
            </div>
        </div>

        <div class="divider"></div>

        <div class="card bg-base-100 shadow-xl rounded-box p-6 mt-6">
            <div class="card-body">
                <h2 class="card-title text-2xl font-bold mb-4">Styles Dynamiques</h2>
                <div class="form-control mb-4">
                    <label class="label">
                        <span class="label-text">Entrez une couleur (ex: 'red', '#ff5733') :</span>
                    </label>
                    <input v-model="laCouleur" type="text" placeholder="Tapez ici..."
                        class="input input-bordered w-full" />
                </div>
                <h2 :style="{ backgroundColor: laCouleur }" class="p-4 rounded-box transition-all duration-300">
                    Hello World (couleur dynamique)
                </h2>
            </div>
        </div>

        <div class="divider"></div>

        <div class="card bg-base-100 shadow-xl rounded-box p-6 mt-6">
            <div class="card-body text-center">
                <h2 class="card-title text-2xl font-bold mb-4 mx-auto">Visibilité</h2>
                <button @click="affichage" class="btn btn-primary transition-transform duration-200 hover:scale-105">
                    Afficher/Cacher le Titre
                </button>
                <div v-show="visible" class="mt-4">
                    <h2 class="text-xl font-bold">Premier Titre</h2>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang='js'>
import { ref, computed } from 'vue';

// Variables réactives
const nomClasse = ref('');
const laCouleur = ref('');
const visible = ref(true);

// Propriété calculée
const classDynamique = computed(() => ({
    'bg-primary text-white font-impact': nomClasse.value === 'hello',
    'bg-secondary text-base-content': nomClasse.value === 'world',
}));

// Méthode
function affichage() {
    visible.value = !visible.value;
}
</script>

<style scoped lang="css">
.maClasseHello{
    background-color: red;
}
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS supplémentaire n'est nécessaire ici. */
</style>