export function validateInputValue(value: string, type: string) {
  if (isEmpty(value)) return 'empty';

  switch (type) {
    case 'email':
      return validateEmail(value);
    default:
      return '';
  }
}
