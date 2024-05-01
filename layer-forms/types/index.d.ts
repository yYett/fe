export type FieldInput = {
  name: string;
  type: "text" | "email" | "password";
  label: string;
  required?: boolean;
  value?: string;
};

export type FieldSetValidator = FieldInput[];
