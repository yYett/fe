<template>
  <TheCube :face="face">
    <template #front>
      <AuthForm :data="login">
        <p>
          First-time explorer?
          <button class="btn btn--link" type="button" @click="face = 'right'">
            Register
          </button>
        </p>
      </AuthForm>
    </template>

    <template #right>
      <AuthForm :data="register">
        <p>
          Been here before?
          <button class="btn btn--link" type="button" @click="face = 'front'">
            Login
          </button>
        </p>
      </AuthForm>
    </template>
  </TheCube>
</template>
<script setup lang="ts">
import type { AuthForm } from './layer-login/types';

const face = ref<string>('front');

const login: AuthForm = {
  title: 'Welcome',
  subtitle: 'Sign in to continue',
  label: {
    submit: 'Sign in',
  },
  fields: [
    {
      label: 'E-mail',
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      label: 'Password',
      name: 'pw',
      type: 'password',
      required: true,
    },
  ],
};

const register: AuthForm = {
  title: 'Register',
  subtitle: 'Begin with your details',
  label: {
    submit: 'Sign up',
  },
  fields: [
    {
      label: 'E-mail',
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      label: 'Password',
      name: 'pw',
      type: 'password',
      required: true,
    },
    {
      label: 'Repeat password',
      name: 'pw-r',
      type: 'password',
      required: true,
      match: 'pw',
    },
  ],
};
</script>
