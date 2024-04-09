<template>
    <div class="card">
        <div class="card__logo"><img :src="props.logoSrc" alt="Логотип команды"
            height="100px"
            width="100px"
            ></div>
        <div class="card__name">{{ props.name }}</div>
        <div class="card__venue">{{ props.venue }}</div>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    logoSrc: {
        type: String,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    }
})
</script>

<style lang="scss">
.card {
    margin: 20px;
    width: 100px;
    height: 200px;
    padding: 10px;
    border-radius: 20px;

    &__logo {
        height: 100px;
        width: 100px;
    }
    &__name {
        margin: 20;
    }
    &__venue {
        margin: 10;
    }
}

</style>