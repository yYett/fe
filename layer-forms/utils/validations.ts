export function isEmpty(value: string | string[]): boolean {
  const length = typeof value === 'string' ? value.trim().length : value.length;
  return length === 0;
}

export function validateEmail(value: string): 'invalid' | '' {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regex.test(value) ? '' : 'invalid';
}
