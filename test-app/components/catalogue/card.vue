<template>
    <div class="card">
        <div class="card__logo"><img :src="props.logoSrc" alt="Логотип команды"
            height="200px"
            width="200px"
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
    width: 200px;
    height: 260px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 2px rgb(81, 81, 81);
    border-radius: 20px;



    &__logo {
        height: 200px;
        width: 200px;
        padding-bottom: 10px;
        border-bottom: solid 2px rgb(81, 81, 81);
    }
    &__name {
        margin-top: 10px;
    }
    &__venue {
        margin: 5px;
    }
}

</style>