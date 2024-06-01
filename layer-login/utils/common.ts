import type { AuthForm } from "../types";

export const loginPayload: AuthForm = {
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

export const registerPayload: AuthForm = {
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

export const recoverPasswordPayload: AuthForm = {
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