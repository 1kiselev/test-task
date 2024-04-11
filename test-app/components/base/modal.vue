<template>
    <div class="modal" v-if="props.showModal" @click.stop="$emit('update:showModal', false)">
        <div @click.stop class="modal__content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    showModal: {
            type: Boolean,
            default: false,
        }
})

</script>

<style lang="scss">
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;

  &__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 10px;
}
}

</style>