<template>
  <button
    class="v-button"
    :class="[
      type ? `v-button--${type}` : '',
      size ? `v-button--${size}` : '',
      {
        'is-round': round,
        'is-disabled': disabled,
      },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ButtonProps, ButtonEmits } from './Button.types';

defineOptions({
  name: 'VButton',
});

const {
  type = undefined,
  size = 'medium',
  disabled = false,
  round = false,
} = defineProps<ButtonProps>();

const emit = defineEmits<ButtonEmits>();

const handleClick = (event: MouseEvent) => {
  if (!disabled) {
    emit('click', event);
  }
};
</script>

<!-- <style src="./Button.scss"></style> 这种写法gulp+rollup打包会报错，vite打包不会，采用以下都兼容的写法：-->
<style lang="scss">
@use './Button.scss' as *;
</style>
