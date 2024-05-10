<template>
  <form class="the-login" novalidate @submit="handleLogin">
    <div class="header">
      <h2 class="f-headline">Register</h2>
      <p class="f-subtitle">Sign up to continue</p>
    </div>

    <FieldSetValidator ref="fieldSetValidatorRef" :data="data.fields" />

    <button class="btn btn--primary" type="submit">Sign up</button>
    <p>Been here before? <button class="btn btn--link">Login</button></p>
  </form>
</template>

<script setup lang="ts">
import type { FieldSetValidatorRef } from '~/layer-forms/types';
import type { TheLogin } from '../types';

const props = defineProps<{
  data: TheLogin;
}>();

const emit = defineEmits<{
  register: [value: object];
  recover: [value: boolean];
  login: [value: object];
}>();

const fieldSetValidatorRef = ref<FieldSetValidatorRef>();

const handleLogin = (evt: Event) => {
  evt.preventDefault();

  const result = fieldSetValidatorRef.value?.validateFields();
  result?.valid && emit('register', result.payload);
};
</script>

<style lang="scss" scoped>
.the-login {
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

  & > :last-child {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 0.5rem;
  }
}
</style>
