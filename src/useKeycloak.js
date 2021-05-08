import { useContext, useMemo } from 'react';
import { KeycloakContext } from './KeycloakContext';

export const useKeycloak = () => {
  const {
    isLoggedIn = false,
    login,
    logout,
    ready = false,
    token = null,
  } = useContext(KeycloakContext);

  return useMemo(
    () => ({
      isLoggedIn,
      login,
      logout,
      ready,
      token: token?.accessToken ?? null
    }),
    [ready, token, isLoggedIn],
  );
};