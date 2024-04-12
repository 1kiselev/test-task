<template>
    <div class="base-card">
        <div class="base-card__logo">
            <img :src="props.teamData.logoSrc" class="base-card__logo-img" alt="Эмблема клуба"
                height="200px"
                width="200px"
            >
            <div class="base-card__caption">Эмблема клуба</div>
        </div>
        <div class="base-card__info">
            <div class="base-card__info-head"> Информация о футбольном клубе</div>
            <div class="base-card__content-row">
                <div class="base-card__caption">Название клуба:</div>
                <div class="base-card__value">{{ props.teamData.name }}</div>
            </div>
            <div class="base-card__content-row">
                <div class="base-card__caption">Стадион клуба:</div>
                <div class="base-card__value">{{ props.teamData.venue }}</div>
            </div>
        </div>
            
    </div>
</template>

<script lang="ts" setup>
import type { Team } from "../../types"

const props = defineProps({
    teamData: {
        type: Object,
        required: true,
    }
})
</script>

<style lang="scss">
.base-card {
    margin: 20px;
    width: 550px;
    height: 240px;
    padding: 10px;
    display: flex;
    gap: 20px;
    border-radius: 20px;


    &__logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
    &__logo-img {
        height: 200px;
        width: 200px;
        padding: 10px;
        border: solid 2px rgb(81, 81, 81);
        border-radius: 20px;
    }
    &__info {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    &__value {
        margin-left: 15px;
        font-size: large;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    &__content-row {
        display: flex;
        margin: 10px;
    }
    &__caption {
        font-weight: bold;
        font-size: large;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    &__info-head {
        margin: 10px;
        font-size: large;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
}

</style>