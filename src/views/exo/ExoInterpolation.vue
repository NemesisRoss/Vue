<template>
    <div class="overflow-x-auto">
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th>Variable</th>
                    <th>Valeur</th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <tr>
                    <td>unLivre</td>
                    <td>{{ unlivre }}</td>
                </tr>
                <!-- row 2 -->
                <tr>
                    <td>isOnline</td>
                    <td>{{ isOnline }}</td>
                </tr>
                <!-- row 3 -->
                <tr>
                    <td>unNombre</td>
                    <td>{{ unNombre }}</td>
                </tr>
                <tr>
                    <td>unTableau</td>
                    <td>{{ unTableau }}</td>
                </tr>
                <tr>
                    <td>unTableau[0]</td>
                    <td>{{unTableau[0]}}</td>
                </tr>
                <tr>
                    <td>unObjet</td>
                    <td>{{unObjet}}</td>
                </tr>
                <tr>
                    <td>unObjet.name</td>
                    <td>{{unObjet.name}}</td>
                </tr>
                <tr>
                    <td>unObjet['name']</td>
                    <td>{{unObjet['name']}}</td>
                </tr>
                <tr>
                    <td>unObjet.tel</td>
                    <td>{{unObjet.tel}}</td>
                </tr>
                <tr>
                    <td>fonctionTest()</td>
                    <td>{{functionTest()}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="js">

import { ref } from 'vue';

const unlivre = ref('Les mémoires de Steven Seagal');
const isOnline = ref(false);
const unNombre = ref(123456789);
const unTableau = ref(["du texte", 99]);
const unObjet = ref({"name": "COOL", "tel" : "060503030"});

function functionTest() {
    const text = ref("Hello World");
    return text;
}
</script>