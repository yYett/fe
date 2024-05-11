import type { FieldSetValidator } from '~/layer-forms/types';

export type AuthForm = {
  title: string;
  subtitle: string;
  fields: FieldSetValidator;
  label: {
    submit: string;
  };
};
