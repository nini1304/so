import {KeycloakService} from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://192.168.1.211:8081',
        realm: 'software',
        clientId: 'frontend'
      },
      initOptions: {
        //el logueo es obligatorio si inicia sesion entra sino no
        onLoad: 'login-required',
        checkLoginIframe: false
      }
    });
}
