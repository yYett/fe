<template>
  <form class="the-login" novalidate @submit="handleLogin">
    <div class="header">
      <h2 class="f-headline">Welcome</h2>
      <p class="f-subtitle">Sign in to continue</p>
    </div>

    <FieldSetValidator ref="fieldSetValidatorRef" :data="data.fields" />

    <button class="btn btn--primary" type="submit">Sign in</button>
    <p>First-time explorer? <button class="btn btn--link">Register</button></p>
  </form>
</template>

<script setup lang="ts">
import type { TheLogin } from '../types';

const props = defineProps<{
  data: TheLogin;
}>();

const emit = defineEmits<{
  register: [value: boolean];
  recover: [value: boolean];
  login: [value: boolean];
}>();

const fieldSetValidatorRef = ref<{ validateFields(): boolean }>();

const handleLogin = (evt: Event) => {
  evt.preventDefault();

  fieldSetValidatorRef.value?.validateFields();

  // handle submit
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
