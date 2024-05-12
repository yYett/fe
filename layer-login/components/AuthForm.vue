<template>
  <form class="auth-form" novalidate @submit="handleForm">
    <div class="header">
      <h2 class="f-headline">{{ data.title }}</h2>
      <p class="f-subtitle">{{ data.subtitle }}</p>
    </div>

    <FieldSetValidator ref="fieldSetValidatorRef" :data="data.fields" />

    <button class="btn btn--primary" type="submit">
      {{ data.label.submit }}
    </button>
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import type { FieldSetValidatorRef } from '~/layer-forms/types';
import type { AuthForm } from '../types';

defineProps<{
  data: AuthForm;
}>();

const emit = defineEmits<{
  'handle-auth': [value: object];
}>();

const fieldSetValidatorRef = ref<FieldSetValidatorRef>();

const handleForm = (evt: Event) => {
  evt.preventDefault();

  const result = fieldSetValidatorRef.value?.validateFields();
  result?.valid && emit('handle-auth', result.payload);
};
</script>

<style lang="scss" scoped>
.auth-form {
  padding: 2.4rem;
  display: grid;
  gap: 2.4rem;

  & > :first-child {
    margin-bottom: 2.4rem;

    & > :first-child {
      margin-bottom: 0.5rem;
    }
  }

  .btn {
    margin-top: 0.8rem;
  }
}
</style>
