<template>
    <div class="card card-border bg-base-100 w-96">
        <div class="card-body items-center text-center">
            <div class="avatar">
                <div class="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                    <img v-bind:src=imageUser alt="">
                </div>
            </div>
            <input type="text" class="input validator" required v-bind:placeholder=nomUser
                pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
            <h2>Age : </h2>
            <div class="badge badge-primary">{{ ageUser }}</div>
            <h2>Age +10 :</h2>
            <div class="badge badge-accent">{{ age10(ageUser) }}</div>
            <h2>NB fétiche :</h2>
            <div class="badge badge-info">{{ nbRandom }}</div>

        </div>
    </div>
</template>
S
<script setup lang="js">

const imageUser = 'https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg';
const nomUser = "Dr.Mario";
const ageUser = 30;
const nbRandom = 15456946;
function age10(Age) {
    return Age + 10;
}

</script>