<template>
  <div class="navigation">
    <div class="navigation__previous"
        @click="$emit('update:value', props.currentPage - 1)"
        v-show="props.currentPage != 1"
    >Prev</div>
    <div class="navigation__pages">
        <div class="navigation__cell"
            v-for="number in pageNumbers" :key="number"
            @click="$emit('update:value', number)"
        >{{ number }}</div>
    </div>
    <div class="navigation__next"
        @click="$emit('update:value', props.currentPage + 1)"
        v-show="props.currentPage != props.numberOfPages"
    >Next</div>
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue';

const props = defineProps({
    numberOfPages: {
        type: Number,
        required: true,
    },
    currentPage: {
        type: Number,
        required: true
    }
})


let pageNumbers: number[] = []

watch(props, () => {
    pageNumbers = [];
    for (let i = 1; i <= props.numberOfPages; i++){
    pageNumbers.push(i)
}
})

for (let i = 1; i <= props.numberOfPages; i++){
    pageNumbers.push(i)
}
</script>

<style lang="scss">
.navigation {
    display: flex;
    justify-content: center;
    gap: 5px;
    width: 50%;
    border: solid 2px teal;
    
    &__previous {
        height: 10px;
        width: 40px;
        padding: 5px;
        background: #000;
        color: aliceblue;
    }
    &__next {
        height: 10px;
        width: 40px;
        padding: 5px;
        background: #000;
        color: aliceblue;
    }
    &__pages{
        display: flex;
        gap: 3px;
    }
    &__cell {
        height: 10px;
        padding: 5px;
        width: 40px;
        background: #000;
        color: aliceblue;
    }
}

</style>
