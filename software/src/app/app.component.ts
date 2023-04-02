import { Component } from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ingenieria de Software';
  constructor(private keycloakService: KeycloakService) {

  }
  logout() {
    this.keycloakService.logout("http://localhost:4200");
  }

}
