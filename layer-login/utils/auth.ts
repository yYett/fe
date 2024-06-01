import type { User } from '~/composables/useUser';

export function dispatchLogin(payload: object) {
  const { setUser } = useUser();
  const { data: res, error } = useFetch<User>('', {
    method: 'post',
    body: payload,
  });

  if (error.value)
    alert(
      "Looks like the app's out for a walk, come back when it's more inclined to log in.",
    );

  res.value && setUser(res.value);
}

export function dispatchRegistry(payload: object) {
  console.log('dispatchRegistry', payload);
}
