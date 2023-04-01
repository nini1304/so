import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ResponseCurrencyDto} from "../../dto/response.currency.dto";
import {CurrencyService} from "../../service/currency.service";
import {KeycloakService} from "keycloak-angular";


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {

  title = 'Currency';
  currencyForm: FormGroup;
  responseCurrencyDto: ResponseCurrencyDto;



  constructor(private formBuilder: FormBuilder, private currencyService: CurrencyService,private keycloakService: KeycloakService) {
    this.currencyForm = this.formBuilder.group({
      from: '',
      to: '',
      amount: ''

    })
  }
  logout() {
    this.keycloakService.logout("http://localhost:4200");
  }

  submit() {
    console.log(this.currencyForm.value);
    this.currencyService.convertCurrency(this.currencyForm.value.from,
      this.currencyForm.value.to,
      this.currencyForm.value.amount).subscribe({
      next: (response: ResponseCurrencyDto) => {
        console.log('invocacion exitosa');
        console.log(response);
        this.responseCurrencyDto = response;
        console.log('resultado');
        console.log(this.responseCurrencyDto.result);
      }
    })
    console.log('test');
  }


}
