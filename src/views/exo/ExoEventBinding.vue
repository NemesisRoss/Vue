<template>
    <div class="card card-border bg-base-100 w-96">
        <div class="card-body items-center text-center">
            <button @click.middle="min11" class="btn btn-error"> - </button>
            le nombre : {{ nb }}
            <button @click.right="plus99" class="btn btn-success"> + </button>
        </div>
    </div>
    <div class="container mx-auto p-4 md:p-8">
        <div class="card bg-base-100 shadow-xl rounded-box p-6">
            <h5 class="card-title text-2xl font-bold mb-4">TP Event Binding Mode</h5>

            <!-- Section pour la gestion des événements de clavier -->
            <div class="mt-6 mb-4 card bg-base-200 shadow-lg rounded-box p-4">
                <h6 class="text-xl font-semibold mb-2"><code>v-on:keyup</code> ou <code>@keyup</code></h6>

                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">Saisissez du texte</span>
                    </div>
                    <input @keyup="keyUp" type="text" placeholder="Tapez ici..." class="input input-bordered w-full" />
                </label>
                <div class="mt-3 p-3 bg-base-100 rounded-box shadow">
                    <p>Le contenu de l'input est : <span class="badge badge-accent">{{ textKeyUp }}</span></p>
                </div>
            </div>

            <!-- Section pour le modificateur d'événement .esc -->
            <div class="mt-6 mb-4 card bg-base-200 shadow-lg rounded-box p-4">
                <h6 class="text-xl font-semibold mb-2">Modificateur d'événement</h6>

                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">Saisissez du texte et appuyez sur 'Échap'</span>
                    </div>
                    <input @keyup.esc="keyEsc" @keyup="keyUp2" type="text" placeholder="Tapez et appuyez sur 'Esc'"
                        class="input input-bordered w-full" />
                </label>
                <div class="mt-3 p-3 bg-base-100 rounded-box shadow">
                    <p>La valeur confirmée par 'Échap' est : <span class="badge badge-primary">{{ textEsc }}</span></p>
                </div>
            </div>

            <!-- Section pour l'événement de clic -->
            <div class="mt-6 mb-4 card bg-base-200 shadow-lg rounded-box p-4">
                <h6 class="text-xl font-semibold mb-2">Événement <code>@click</code></h6>

                <button class="btn btn-error text-white" onclick="my_modal_1.showModal()">
                    Afficher une alerte
                </button>
                <dialog id="my_modal_1" class="modal">
                    <div class="modal-box">
                        <div role="alert" class="alert alert-error">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Error! Task failed successfully.</span>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    </div>

    <div class="card card-border bg-base-100 w-96">
        <div class="card-body items-center text-center">
            <button @click ="min11" class="btn btn-error"> - </button>
            le nombre : {{ nb }}
            <button @click ="plus99" class="btn btn-success"> + </button>
            <span class="badge badge-info">{{ afficherNameUser() }}</span>
        </div>
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue';

const nb = ref(0);
const textKeyUp = ref('');
const textKeyUp2 = ref('');
const textEsc = ref('');
const nameUser = ref('');

function min11(event) {
    nb.value -= 11;
}

function plus99(event) {
    nb.value += 99;
}

function keyUp(event) {
    textKeyUp.value += event.key;
}

function keyUp2(event) {
    textKeyUp2.value += event.key;
}

function keyEsc() {
    textEsc.value = textKeyUp2.value;
}

function afficherNameUser() {
    console.log('la fonction du name est executée 1 fois');
    if(nameUser.value === ''){
        return "User connecté";
    }else{
        return "User Offline";
    }
}
</script>