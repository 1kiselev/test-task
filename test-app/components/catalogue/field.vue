<template>
  <div class="field">
    <input type="text" :value="searchedValue" @input="(event) => fun(event)"/>
    <CatalogueCard 
        v-for="team in teams" :key="team.id"
        :name="team.name"
        :venue="team.venue"
        :logoSrc="team.logoSrc"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch, type ComputedRef } from 'vue';
import type { Team } from '~/types';
import { useMainStore } from '../../stores/useMainStore';

const searchedValue = ref('')

const fun = (event) => {
    searchedValue.value = event.target.value
    // console.log(event.target.value)
}

// const teams = computed(() => useMainStore().teams);
const teams = computed(() => useMainStore().getSearched(searchedValue.value));

watch(teams, () => {
    console.log(teams.value)
})

</script>

<style lang="scss">

</style>