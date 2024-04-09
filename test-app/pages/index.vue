<template>
    <div class="main_page">
        <h1>Main page</h1>
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

</style>