<template>
  <p class="descriptive-link f-caption">
    {{ text }}
    <button class="btn btn--link" type="button" @click="emit('clicked', true)">
      {{ label }}
    </button>
  </p>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  label: string;
}>();

const emit = defineEmits<{
  clicked: [value: boolean];
}>();
</script>

<style scoped lang="scss">
.descriptive-link {
  --font-w: 400;

  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.5rem;
}
</style>
