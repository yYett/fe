import type { TheCubeFaces } from '~/layer-ui/types';
import type { AuthBlockFace, AuthForm } from '../types';

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

export const authBlockPayload: AuthBlockFace[] = [
  {
    face: 'front',
    type: 'login',
    data: loginPayload,
    links: [
      {
        text: 'First-time explorer?',
        label: 'Register',
        to: 'right',
      },
      {
        text: 'Lost the way?',
        label: 'Recover password',
        to: 'left',
      },
    ],
  },
  {
    face: 'right',
    type: 'register',
    data: registerPayload,
    links: [
      {
        text: 'Been here before?',
        label: 'Login',
        to: 'front',
      },
    ],
  },
  {
    face: 'left',
    type: 'recoverPw',
    data: recoverPasswordPayload,
    links: [
      {
        text: 'Here is the way to login &#8594;',
        label: 'Login',
        to: 'front',
      },
    ],
  },
];
