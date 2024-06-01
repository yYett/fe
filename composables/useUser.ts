export type User = {
  token: string;
};

export const useUser = () => {
  const initState: User = {
    token: '',
  };

  const state = useState<User>('useUser', () => ({ ...initState }));

  const setUser = (arg: User): void => {
    state.value = arg;
  };

  return {
    state,
    setUser,
  };
};
