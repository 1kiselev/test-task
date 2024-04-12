<template>
  <div class="field">
    <div class="field__tools">
      <input type="text" placeholder="Поиск" :value="searchedValue" @input="(event) => fun(event)"/>
      <span class="field__span">Плиточный вид</span>
      <input type="checkbox" class="field__switch" :checked="switchValue" @input="(event) => switchFun(event)">
    </div>
    <BaseModal v-model:showModal="showModal">
      <BaseCard :teamData="choosenTeam" />
    </BaseModal>
    <div :class="`field__content` + displayType">
      <CatalogueCard 
        v-for="team in paginatedTeams" :key="team.id"
        :teamData="team"
        @click="chooseTeam(team)"
      />
    </div>
    <CatalogueNavigation :numberOfPages="numberOfPages" :currentPage="currentPage" @update:value="(value: number) => currentPage = value"/>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch, type ComputedRef, type Ref } from 'vue';

import { usePagination } from "../../composables/usePaginatation"
import type { Team } from '~/types';
import { useMainStore } from '../../stores/useMainStore';


const searchedValue = ref('')

const fun = (event: Event) => {
    searchedValue.value = event.target?.value
}

const arrayToPaginate = computed(() => useMainStore().getSearched(searchedValue.value));

const currentPage = ref(1)
const itemsPerPage = ref(9)

const { paginatedArray: paginatedTeams, numberOfPages } = usePagination({ itemsPerPage, arrayToPaginate, currentPage })


const switchValue = ref(true);
const switchFun = (event: Event) => {
  itemsPerPage.value = event.target?.checked ? 9 : 5
  switchValue.value = event.target?.checked
}

const displayType = computed(() => switchValue.value ? "__grid" : "__horizontal" )

const showModal = ref(false)

const choosenTeam: Ref<Team | null> = ref(null)

const chooseTeam = (team: Team) => {
  showModal.value = true
  choosenTeam.value = team
}

</script>

<style lang="scss">
.field {
  padding: 30px;
  max-width: 1300px;
  max-height: 1300px;
  overflow: hidden;

  &__tools {
    height: 30px;
    width: 80%;
    display: flex;
    align-items: center;
    margin-left: 25px;
  }

  &__content {
    &__grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
    &__horizontal {
      display: flex;
      align-items: center;
    }
  }

  &__switch {
    height: 20px;
    width: 20px;
    margin: 20px;
  }

  &__span {
    margin-left: 15px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
}

</style>