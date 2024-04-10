<template>
  <div class="field">
    <div class="field__tools">
      <input type="text" :value="searchedValue" @input="(event) => fun(event)"/>
      <input type="checkbox" class="field__switch" :checked="switchValue" @input="(event) => switchValue = event.target.checked">
    </div>
    <div :class="`field__content` + displayType">
      <CatalogueCard 
        v-for="team in teams" :key="team.id"
        :name="team.name"
        :venue="team.venue"
        :logoSrc="team.logoSrc"
      />
    </div>
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

const switchValue = ref(true);

const displayType = computed(() => switchValue.value ? "__grid" : "__column" )

</script>

<style lang="scss">
.field {
  padding: 30px;

  &__content {
    width: 80%;

    &__grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
    &__column {
      display: flex;
      flex-direction: column;
      align-items: center;
      // justify-content: center;
    }
  }

  &__switch {
    height: 20px;
    width: 20px;
    margin: 20px;
  }
}

</style>