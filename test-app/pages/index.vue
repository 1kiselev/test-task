<template>
    <div class="main-page">
        <h3 class="main-page__header">Публичное API: https://www.football-data.org/</h3>
        <CatalogueField />
    </div>  
</template>

<script setup >
import { computed, onMounted, ref } from 'vue';

import { useAsyncData, useFetch } from '../.nuxt/imports';

import { useMainStore } from '../stores/useMainStore';

onMounted(() => {
    useMainStore().fetchTeams()
})

const teams = computed(() => useMainStore().teams)

</script>

<style lang="scss">
.main-page {

    &__header {
        margin-left: 50px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
}

</style>