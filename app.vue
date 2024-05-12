<template>
  <TheCube :face="face">
    <template #front>
      <AuthForm :data="login">
        <DescriptiveLink
          text=" First-time explorer?"
          label="Register"
          @clicked="face = 'right'"
        />
        <DescriptiveLink
          text="Lost the way?"
          label="Recover password"
          @clicked="face = 'left'"
        />
      </AuthForm>
    </template>

    <template #right>
      <AuthForm :data="register">
        <DescriptiveLink
          text=" Been here before?"
          label="Login"
          @clicked="face = 'front'"
        />
      </AuthForm>
    </template>

    <template #left>
      <AuthForm :data="recoverPw">
        <DescriptiveLink
          text="Here is the way to login &#8594;"
          label="Login"
          @clicked="face = 'front'"
        />
      </AuthForm>
    </template>
  </TheCube>
</template>
<script setup lang="ts">
import type { AuthForm } from './layer-login/types';
import type { TheCubeFaces } from './layer-ui/types';

const face = ref<TheCubeFaces>('front');

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

const recoverPw: AuthForm = {
  title: 'Recover password',
  subtitle: 'Get back on track',
  label: {
    submit: 'Submit',
  },
  fields: [
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
