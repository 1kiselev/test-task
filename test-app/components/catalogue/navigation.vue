<template>
  <div class="navigation">
    <div class="navigation__move"
        @click="$emit('update:value', props.currentPage - 1)"
        v-show="props.currentPage != 1"
    >Prev</div>
    <div class="navigation__pages">
        <div :class="props.currentPage === number ? `navigation__cell__active` : `navigation__cell` "
            v-for="number in pageNumbers" :key="number"
            @click="$emit('update:value', number)"
        >{{ number }}</div>
    </div>
    <div class="navigation__move"
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
    width: 100%;
    margin-top: 40px;   
    // border: solid 2px teal;
    
    &__move {
        height: 10px;
        width: 40px;
        padding: 5px;
        padding-bottom: 10px;
        border-radius: 3px;
        background: #464141;
        color: aliceblue;
    }
    &__pages {
        display: flex;
        gap: 3px;
    }
    &__cell {
        height: 10px;
        padding: 5px;
        padding-bottom: 10px;
        width: 40px;
        border-radius: 3px;
        text-align: center;
        background: teal;
        color: aliceblue;
        &__active {
            height: 10px;
            padding: 5px;
            padding-bottom: 10px;
            width: 40px;
            font-weight: bold;
            border-radius: 3px;
            text-align: center;
            background: rgb(128, 0, 128);
            color: aliceblue;
        }
    }
}

</style>
