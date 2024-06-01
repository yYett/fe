import type { FieldSetValidator } from '~/layer-forms/types';

export type AuthForm = {
  title: string;
  subtitle: string;
  fields: FieldSetValidator;
  label: {
    submit: string;
  };
};

export type AuthBlockFace = {
  face: TheCubeFaces;
  type: 'login' | 'register' | 'recoverPw';
  data: AuthForm;
  links: { text: string; label: string; to: TheCubeFaces }[];
};
